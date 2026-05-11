import { NextRequest, NextResponse } from 'next/server';

// const API_BASE_URL = 'http://10.8.2.9:402/api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const AUTH_TOKEN = process.env.NEXT_PUBLIC_AUTH_TOKEN;

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const endpoint = searchParams.get('endpoint');
    const pageSize = searchParams.get('pageSize') || '10';
    const pageNumber = searchParams.get('pageNumber') || '1';

    if (!endpoint) {
      return NextResponse.json(
        { error: 'Endpoint parameter is required' },
        { status: 400 }
      );
    }

    const url = `${API_BASE_URL}${endpoint}?PageSize=${pageSize}&PageNumber=${pageNumber}`;

    console.log('Fetching from:', url);

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'accept': '*/*',
        'ApiKey': API_KEY || '',
        'Authorization': `Bearer ${AUTH_TOKEN}`,
      },
      cache: 'no-store',
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', errorText);
      return NextResponse.json(
        { error: `API Error: ${response.status}`, details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    );
  }
}