'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Burger from '@/components/shared/burger';
import Link from '@/components/shared/link';
import MobileMenu from '@/components/shared/mobile-menu';
import MENU from '@/constants/menu';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((state) => !state);
  };

  useEffect(() => setIsMobileMenuOpen(false), [pathname]);

  return (
    <>
      <header className="px-6 md:px-10">
        <div className="container min-h-24 flex justify-between items-center w-full md:min-h-[155px]">
          <Link to="/">
            <Image src="/logo-dark.png" alt="Designo agency" width={202} height={27} priority />
          </Link>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-10">
              {MENU.map(({ title, to }) => (
                <li key={to}>
                  <Link to={to} size="md" theme="black">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Burger isToggled={isMobileMenuOpen} onToggle={toggleMobileMenu} />
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} />
    </>
  );
}

export default Header;
