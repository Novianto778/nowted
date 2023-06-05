import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

import type { Database } from '@/types/supabase';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const pathname = req.nextUrl.pathname;
  const supabase = createMiddlewareClient<Database>(
    { req, res },
    {
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_KEY,
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL
    }
  );
  const {
    data: { session }
  } = await supabase.auth.getSession();

  if (!session && pathname.startsWith('/note')) {
    const url = new URL(req.url);
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return res;
}

export const config = {
  matcher: '/note/:path*'
  // matcher: '/noroute' // to easy build my UI without auth
};
