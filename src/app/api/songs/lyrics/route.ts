import { NextResponse } from 'next/server';
import google from 'googlethis';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('name');

  const options = {
    page: 0,
    safe: false,
    parse_ads: false,
    additional_params: {
      hl: 'en',
    },
  };

  const response = await google.search(`${query} song lyrics`, options);

  return NextResponse.json({
    lyrics: response?.knowledge_panel?.lyrics ?? null,
  });
}
