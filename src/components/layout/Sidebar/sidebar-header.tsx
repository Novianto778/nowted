'use client';

import { Search, Plus } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { Input } from '@/components/forms';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const SidebarHeader = () => {
  const [isSearching, setIsSearching] = useState(false);
  const handleSearch = () => setIsSearching(prev => !prev);
  return (
    <div className="flex flex-col gap-8 px-5">
      <div className="flex items-center justify-between">
        <Link href="/note">
          <Image src="/logo.png" width={100} height={38} alt="nowted logo" />
        </Link>
        <Search
          className={cn(
            'h-5 w-5 cursor-pointer select-none text-foreground',
            isSearching && 'text-white'
          )}
          onClick={handleSearch}
        />
      </div>
      {!isSearching ? (
        <Button variant="secondary" size="sm" className="flex w-full gap-x-2">
          <Plus className="h-5 w-5" />
          New Note
        </Button>
      ) : (
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-muted-foreground" />
          </span>
          <Input
            type="search"
            placeholder="Search notes"
            className="w-full border-0 bg-secondary pl-10 text-white placeholder-white/60 outline-none"
          />
        </div>
      )}
    </div>
  );
};

export default SidebarHeader;
