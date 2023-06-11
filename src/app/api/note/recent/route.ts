import { createServerClient } from '@/utils/supabase-server';
export async function GET(request: Request) {
  const supabase = createServerClient();
  const {
    data: { user }
  } = await supabase.auth.getUser(request.headers.get('Authorization') || '');
  const { data, error } = await supabase
    .from('notes')
    .select('*, folder(id, name)')
    .eq('userId', user?.id)
    .limit(3)
    .order('updated_at', { ascending: false });

  if (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
}
