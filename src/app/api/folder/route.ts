import { createServerClient } from '@/utils/supabase-server';
export async function GET(request: Request) {
  const supabase = createServerClient();
  // get user session
  const {
    data: { user }
  } = await supabase.auth.getUser(request.headers.get('Authorization') || '');

  const { data, error } = await supabase
    .from('folder')
    .select('*')
    .eq('userId', user?.id);

  if (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
  if (data.length === 0) {
    return new Response(JSON.stringify({ message: 'folder not found' }), {
      status: 404
    });
  }
  return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(request: Request) {
  // get user session
  const supabase = createServerClient();

  const {
    data: { user }
  } = await supabase.auth.getUser(request.headers.get('Authorization') || '');

  const { name } = await request.json();

  // check folder name is unique

  const { data: isDuplicate } = await supabase
    .from('folder')
    .select('*')
    .eq('name', name.toLowerCase())
    .eq('userId', user?.id)
    .single();

  if (isDuplicate?.id) {
    return new Response(
      JSON.stringify({ message: 'folder name already exists' }),
      { status: 400 }
    );
  }

  const { data, error } = await supabase.from('folder').insert([
    {
      name: name,
      userId: user?.id
    }
  ]);

  if (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
}
