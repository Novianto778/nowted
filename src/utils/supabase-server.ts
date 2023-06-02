import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import 'server-only';

import type { Database } from '@/types/supabase';

export const createServerClient = () =>
  createServerComponentClient<Database>(
    {
      cookies
    },
    {
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_KEY,
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL
    }
  );
