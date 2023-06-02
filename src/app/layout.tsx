import './globals.css';
import { Source_Sans_Pro } from 'next/font/google';
import SupabaseAuthProvider from '@/components/providers/supabase-auth-provider';
import SupabaseProvider from '@/components/providers/supabase-provider';
import { createClient } from '@/utils/supabase-server';

const sourceSansPro = Source_Sans_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700']
});

export const metadata = {
  title: 'Nowted',
  description:
    'A simple, fast, and secure note-taking app. Organize, edit and share your notes from any device, anywhere. Enjoy a distraction-free writing experience with a minimal sourceSansProface.'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { session }
  } = await supabase.auth.getSession();
  return (
    <html lang="en">
      <body className={sourceSansPro.className}>
        <SupabaseProvider>
          <SupabaseAuthProvider serverSession={session}>
            {children}
          </SupabaseAuthProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
