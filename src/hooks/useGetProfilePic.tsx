import { createClient } from '../utils/supabase-browser';

const useGetProfilePic = () => {
  const supabase = createClient();
  const { data } = supabase.storage.from('profile').getPublicUrl('user.png');
  return data.publicUrl;
};

export default useGetProfilePic;
