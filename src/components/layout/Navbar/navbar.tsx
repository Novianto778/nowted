'use client';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui';
import NavbarProfile from './navbar-profile';
import { useAuth } from '@/components/providers/supabase-auth-provider';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { user, isLoading } = useAuth();

  return (
    <>
      <nav className="relative mb-3 flex flex-wrap items-center justify-between bg-transparent px-2 py-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
            <Link href="/">
              <Image
                src="/logo.png"
                width={100}
                height={38}
                priority
                alt="nowted logo"
              />
            </Link>
            <div className="flex items-center">
              <div className="block lg:hidden">
                <NavbarProfile />
              </div>
              <button
                className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-white outline-none focus:outline-none lg:hidden"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
          <div
            className={cn(
              'flex-grow items-center lg:flex',
              navbarOpen ? 'flex' : 'hidden'
            )}
            id="example-navbar-danger"
          >
            <ul className="flex list-none flex-col lg:ml-auto lg:flex-row lg:items-center lg:gap-x-8">
              <Link href="/about" className="nav-item">
                About
              </Link>
              <Link href="/pricing" className="nav-item">
                Pricing
              </Link>
              {!user && !isLoading ? (
                <Link href="/login" className={buttonVariants()}>
                  Get Started
                </Link>
              ) : (
                <div className="hidden lg:block">
                  <NavbarProfile />
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
