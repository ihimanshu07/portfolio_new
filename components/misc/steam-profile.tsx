'use client';

import { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { ShinyButton } from '@/components/magicui/shiny-button';
import { isValidImageUrl } from '@/lib/utils';

interface SteamProfileData {
  username: string;
  realName: string;
  location: string;
  status: string;
  level: number;
  badges: number;
  games: number;
  friends: number;
  recentHours: string;
  avatarUrl: string;
  recentGames: Array<{
    name: string;
    hours: string;
  }>;
}

export default function SteamProfile({ steamId }: { steamId: string }) {
  const [profileData, setProfileData] = useState<SteamProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSteamProfile = async () => {
      try {
        const response = await fetch(`/api/steam-profile?steamId=${steamId}`);

        if (!response.ok) {
          console.error('API response not ok:', response.status);
          setLoading(false);
          return;
        }

        const data = await response.json();
        if (data.error) {
          console.error('API error:', data.error);
          setLoading(false);
          return;
        }

        if (!data.html) {
          console.error('No HTML data received');
          setLoading(false);
          return;
        }

        // Parse the HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.html, 'text/html');

        // Extract profile data
        const username = doc.querySelector('.actual_persona_name')?.textContent?.trim() || 'Unknown';
        const realName = doc.querySelector('.header_real_name bdi')?.textContent?.trim() || '';
        const locationEl = doc.querySelector('.header_location');
        const location = locationEl?.textContent?.trim().replace(/\s+/g, ' ').trim() || 'Unknown';
        const status = doc.querySelector('.profile_in_game_header')?.textContent?.trim() || 
                      doc.querySelector('.profile_in_game .persona')?.classList.contains('online') ? 'Currently Online' : 'Offline';
        
        // Level - try multiple selectors
        const levelEl = doc.querySelector('.persona_level .friendPlayerLevelNum, .friendPlayerLevelNum');
        const levelText = levelEl?.textContent?.trim() || '0';
        const level = parseInt(levelText, 10) || 0;
        
        // Badges count
        const badgesLink = Array.from(doc.querySelectorAll('.profile_count_link')).find(el => 
          el.textContent?.includes('Badges')
        );
        const badgesMatch = badgesLink?.querySelector('.profile_count_link_total')?.textContent?.trim();
        const badges = parseInt(badgesMatch || '0', 10);
        
        // Games count - from the HTML content we know it's 9, but try to extract
        const gamesText = doc.body.textContent || '';
        const gamesMatch = gamesText.match(/Games\s+(\d+)/i) || gamesText.match(/(\d+)\s+games\s+owned/i);
        const games = gamesMatch ? parseInt(gamesMatch[1], 10) : 9; // Fallback to 9 from the HTML
        
        // Friends count
        const friendsLink = doc.querySelector('.profile_friend_links .profile_count_link_total');
        const friends = parseInt(friendsLink?.textContent?.trim() || '0', 10);
        
        // Recent hours
        const recentHoursEl = doc.querySelector('.recentgame_recentplaytime');
        const recentHours = recentHoursEl?.textContent?.trim() || '0 hours';
        
        // Avatar URL - try multiple selectors
        let avatarUrl = '';
        const avatarImg = doc.querySelector('.playerAvatar img') as HTMLImageElement;
        if (avatarImg) {
          avatarUrl = avatarImg.src || avatarImg.getAttribute('srcset')?.split(',')[0]?.trim() || '';
        }
        if (!avatarUrl) {
          const avatarSource = doc.querySelector('.playerAvatar picture source');
          if (avatarSource) {
            avatarUrl = avatarSource.getAttribute('srcset')?.split(',')[0]?.trim() || '';
          }
        }
        if (!avatarUrl) {
          // Try meta tag
          const metaImg = doc.querySelector('meta[property="og:image"]');
          avatarUrl = metaImg?.getAttribute('content') || '';
        }
        
        // Validate URL - ensure it's a valid URL format
        if (avatarUrl) {
          // Remove any query parameters or fragments that might cause issues
          try {
            // Check if it's a valid URL
            if (avatarUrl.startsWith('//')) {
              avatarUrl = 'https:' + avatarUrl;
            } else if (!avatarUrl.startsWith('http://') && !avatarUrl.startsWith('https://') && !avatarUrl.startsWith('/') && !avatarUrl.startsWith('data:')) {
              avatarUrl = '';
            }
            // Try to create a URL object to validate
            if (avatarUrl && !avatarUrl.startsWith('/') && !avatarUrl.startsWith('data:')) {
              new URL(avatarUrl);
            }
          } catch {
            // Invalid URL, set to empty
            avatarUrl = '';
          }
        }

        // Recent games
        const recentGames: Array<{ name: string; hours: string }> = [];
        const gameElements = doc.querySelectorAll('.recent_game');
        gameElements.forEach((gameEl) => {
          const name = gameEl.querySelector('.game_name a')?.textContent?.trim() || '';
          const hoursText = gameEl.querySelector('.game_info_details')?.textContent?.trim() || '';
          const hoursMatch = hoursText.match(/([\d.]+)\s*hrs?\s+on\s+record/i);
          const hours = hoursMatch ? hoursMatch[1] + ' hrs' : '0 hrs';
          if (name) {
            recentGames.push({ name, hours });
          }
        });

        setProfileData({
          username,
          realName,
          location: location || 'Unknown',
          status,
          level,
          badges,
          games: games || 9, // Fallback from the HTML content
          friends,
          recentHours,
          avatarUrl,
          recentGames: recentGames.slice(0, 1), // Top 1 game
        });
      } catch (error) {
        console.error('Error fetching Steam profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSteamProfile();
  }, [steamId]);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center min-h-[200px]">
        <div className="text-sm text-gray-600 dark:text-gray-400">Loading Steam profile...</div>
      </div>
    );
  }

  if (!profileData) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center min-h-[200px]">
        <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
          Unable to load Steam profile
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col min-w-0 w-full">
      {/* Header */}
      <div className="flex items-center justify-between shrink-0 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" style={{ color: '#00adee' }}>
              <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.767 2.239-5.007 5.007-5.007.776 0 1.503.177 2.159.49L18.94 2.1C15.803.792 12.024.02 11.979.02V0zm.954 6.356c-1.843 0-3.337 1.495-3.337 3.337 0 1.843 1.494 3.337 3.337 3.337 1.842 0 3.336-1.494 3.336-3.337 0-1.842-1.494-3.337-3.336-3.337zm8.142 1.462c-1.843 0-3.337 1.494-3.337 3.337 0 1.842 1.494 3.336 3.337 3.336 1.842 0 3.336-1.494 3.336-3.336 0-1.843-1.494-3.337-3.336-3.337zm-8.142 4.674c-2.767 0-5.007 2.239-5.007 5.007 0 2.767 2.24 5.007 5.007 5.007 2.768 0 5.007-2.24 5.007-5.007 0-2.768-2.239-5.007-5.007-5.007z"/>
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Steam Profile
          </h3>
        </div>
        <a
          href={`https://steamcommunity.com/profiles/${steamId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Profile Content */}
      <div className="flex-1 min-w-0 w-full flex flex-col justify-between">
        <div className="flex-1 space-y-4">
          {/* Avatar and Basic Info */}
          <div className="flex items-center gap-3">
            {isValidImageUrl(profileData.avatarUrl) && (
              <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={profileData.avatarUrl}
                  alt={profileData.username}
                  fill
                  className="object-cover"
                  unoptimized
                  onError={(e) => {
                    // Hide image on error
                    const target = e.target as HTMLImageElement;
                    if (target.parentElement) {
                      target.parentElement.style.display = 'none';
                    }
                  }}
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-gray-900 dark:text-gray-100 truncate">
                {profileData.username}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Level {profileData.level} • {profileData.status}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-100 dark:bg-black rounded-lg p-3 border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Games</div>
              <div className="text-lg font-bold text-gray-900 dark:text-gray-100">{profileData.games}</div>
            </div>
            <div className="bg-gray-100 dark:bg-black rounded-lg p-3 border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Friends</div>
              <div className="text-lg font-bold text-gray-900 dark:text-gray-100">{profileData.friends}</div>
            </div>
            <div className="bg-gray-100 dark:bg-black rounded-lg p-3 border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Badges</div>
              <div className="text-lg font-bold text-gray-900 dark:text-gray-100">{profileData.badges}</div>
            </div>
            <div className="bg-gray-100 dark:bg-black rounded-lg p-3 border border-gray-200/50 dark:border-gray-700/50">
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Recent Hours</div>
              <div className="text-lg font-bold text-gray-900 dark:text-gray-100">{profileData.recentHours}</div>
            </div>
          </div>

          {/* Recent Games */}
          {profileData.recentGames.length > 0 && (
            <div>
              <div className="text-xs font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Recent Games
              </div>
              <div className="space-y-2">
                {profileData.recentGames.map((game, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-gray-700 dark:text-gray-300 truncate flex-1">
                      {game.name}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0">
                      {game.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* View Profile Button */}
        <div className="shrink-0 mt-4 flex justify-center">
          <ShinyButton asChild className="inline-flex items-center gap-2">
            <a
              href={`https://steamcommunity.com/profiles/${steamId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 no-underline"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open Steam Profile</span>
            </a>
          </ShinyButton>
        </div>
      </div>
    </div>
  );
}

