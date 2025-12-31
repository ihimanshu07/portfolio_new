import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const steamId = searchParams.get('steamId');

  if (!steamId) {
    return NextResponse.json({ error: 'Steam ID is required' }, { status: 400 });
  }

  try {
    const response = await fetch(`https://steamcommunity.com/profiles/${steamId}/`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SteamProfileBot/1.0; +https://your-portfolio.com)',
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch Steam profile for ${steamId}: ${response.status} ${response.statusText}`);
      return NextResponse.json({ error: 'Failed to fetch Steam profile' }, { status: response.status });
    }

    const htmlText = await response.text();
    return NextResponse.json({ html: htmlText });
  } catch (error) {
    console.error('Error fetching Steam profile:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

