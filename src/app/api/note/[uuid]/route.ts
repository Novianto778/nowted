import { createServerClient } from '@/utils/supabase-server';
export async function GET(request: Request, context: any) {
  const supabase = createServerClient();
  const noteId = context.params.uuid;
  const {
    data: { user }
  } = await supabase.auth.getUser(request.headers.get('Authorization') || '');
  const { data, error } = await supabase

    .from('notes')
    .select('*')
    .eq('userId', user?.id)
    .eq('id', noteId)
    .single();
  if (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
}

export async function PUT(request: Request, context: any) {
  const supabase = createServerClient();
  const noteId = context.params.uuid;
  const { content, title } = await request.json();
  const {
    data: { user }
  } = await supabase.auth.getUser(request.headers.get('Authorization') || '');
  const { data, error } = await supabase
    .from('notes')
    .update({
      content,
      title,
      updated_at: new Date().toISOString()
    })
    .eq('userId', user?.id)
    .eq('id', noteId)
    .single();
  if (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
}
