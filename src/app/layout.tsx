import './globals.css';
import { Source_Sans_Pro } from 'next/font/google';
import SupabaseAuthProvider from '@/components/providers/supabase-auth-provider';
import SupabaseProvider from '@/components/providers/supabase-provider';
import { createServerClient } from '@/utils/supabase-server';
import ToasterProvider from '@/components/providers/toaster-provider';

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
  const supabase = createServerClient();

  const {
    data: { session }
  } = await supabase.auth.getSession();
  return (
    <html lang="en">
      <body className={sourceSansPro.className}>
        <SupabaseProvider>
          <SupabaseAuthProvider serverSession={session}>
            <ToasterProvider />
            {children}
          </SupabaseAuthProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
