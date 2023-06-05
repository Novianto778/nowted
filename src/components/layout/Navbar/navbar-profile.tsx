'use client';
import Image from 'next/image';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui';
import Link from 'next/link';
import useGetProfilePic from '@/hooks/useGetProfilePic';
import { useAuth } from '@/components/providers/supabase-auth-provider';

const NavbarProfile = () => {
  const profilePic = useGetProfilePic();
  const { user } = useAuth();
  return (
    <Popover>
      <PopoverTrigger>
        <Image src={profilePic} alt="Profile" width={32} height={32} />
      </PopoverTrigger>
      <PopoverContent
        className="bg-secondary text-white
      "
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold">{user?.email}</span>
            <span className="text-xs text-gray-400">Free Plan</span>
          </div>
          <Link href="/note" className="hover:text-gray-500">
            My Note
          </Link>
          <Link href="/profile" className="hover:text-gray-500">
            Profile
          </Link>
          <Link href="/settings" className="hover:text-gray-500">
            Settings
          </Link>
          <Link href="/signout" className="hover:text-gray-500">
            Sign Out
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NavbarProfile;
