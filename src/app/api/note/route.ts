import { createServerClient } from '@/utils/supabase-server';
import queryString from 'query-string';
import { v4 as uuidv4 } from 'uuid';

export async function GET(request: Request) {
  const supabase = createServerClient();
  const pathname = request.url;
  const parsed = queryString.parseUrl(pathname);
  const folderId = parsed.query.folderId;

  const {
    data: { user }
  } = await supabase.auth.getUser(request.headers.get('Authorization') || '');

  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .eq('userId', user?.id)
    .eq('folderId', folderId)
    .order('updated_at', { ascending: false });

  if (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }

  // if (data.length === 0) {
  //   return new Response(JSON.stringify({ message: 'note not found' }), {
  //     status: 404
  //   });
  // }

  return new Response(JSON.stringify(data), { status: 200 });
}

export async function POST(request: Request) {
  const { folderId, content } = await request.json();

  const supabase = createServerClient();

  const {
    data: { user }
  } = await supabase.auth.getUser(request.headers.get('Authorization') || '');

  const { data, error } = await supabase
    .from('notes')
    .insert([
      {
        folderId: folderId,
        userId: user?.id,
        content,
        title: 'New Note',
        isArchived: false,
        isFavorited: false,
        isPublic: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        deleted_at: null,
        publicLink: null,
        id: uuidv4()
      }
    ])
    .select()
    .single();

  if (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
}
