import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');
  const url = encodeURI(
    `https://www.jiosaavn.com/api.php?_format=json&_marker=0&ctx=web6dot0&__call=autocomplete.get&query=${query}`,
  );
  const res = await fetch(url, {
    method: 'GET',
  });
  const data = await res.json();
  return NextResponse.json({
    msg: 'Hello from the API',
    data,
  });
}
