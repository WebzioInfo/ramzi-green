'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Search, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <div className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
        <nav className={`mx-auto transition-all duration-500 ${scrolled ? 'max-w-5xl' : 'max-w-7xl'}`}>
          <div
            className={`
              relative h-[72px] flex items-center justify-between px-6
              rounded-3xl backdrop-blur-2xl border border-white/20
              transition-all duration-500
              ${scrolled ? 'bg-black/50 shadow-2xl' : 'bg-white/70 shadow-xl'}
            `}
          >
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 blur-xl transition" />
                <Image
                  src="/images/Logo.jpeg"
                  alt="Ramzi Green"
                  width={42}
                  height={42}
                  className="rounded-full ring-2 ring-white/30 group-hover:scale-110 transition"
                />
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-green-400 opacity-0 group-hover:opacity-100 animate-bounce" />
              </div>

              <div className={`hidden sm:block transition ${scrolled ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                <h1 className="text-lg font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                  RAMZI GREEN
                </h1>
                <p className="text-[10px] text-green-600 font-medium">Eco Packaging</p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition
                    ${isActive(link.href)
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                      : scrolled
                        ? 'text-gray-300 hover:text-white hover:bg-white/10'
                        : 'text-gray-700 hover:bg-green-50'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* DESKTOP ACTIONS */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-3 rounded-full transition
                  ${scrolled ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-700 hover:text-green-600'}`}
              >
                <Search className="w-5 h-5" />
              </button>

              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full text-sm font-semibold
                  bg-gradient-to-r from-green-500 to-emerald-500 text-white
                  shadow-lg hover:shadow-xl transition"
              >
                Get Quote →
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            {mobileMenuOpen && (

             <button
          onClick={() => setMobileMenuOpen(false)}
          className="p-2 rounded-full bg-gray-100 text-gray-700"
        >
          <X />
            </button>
            )}
             {!mobileMenuOpen && (
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-3 rounded-full bg-gray-100 text-gray-800"
            >
              <Menu className="w-6 h-6" />
            </button>
             )}
          </div>

          {/* SEARCH OVERLAY */}
          <div
            className={`absolute left-6 right-6 mt-3 transition
              ${searchOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                placeholder="Search products..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/90 backdrop-blur-xl border focus:border-green-400 focus:outline-none"
              />
            </div>
          </div>
        </nav>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {/* ================= MOBILE MENU ================= */}
<div
  className={`fixed inset-0 z-40 lg:hidden transition-all duration-300
    ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
  `}
>
  {/* BACKDROP */}
  <div
    className="absolute inset-0 bg-black/60 backdrop-blur-xl"
    onClick={() => setMobileMenuOpen(false)}
  />

  {/* MENU PANEL (TOP → DOWN) */}
  <div
    className={`
      absolute top-24 left-5 right-5
      bg-white/95 backdrop-blur-2xl
      rounded-3xl shadow-2xl
      transition-transform duration-500 ease-out
      ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}
    `}
  >
    <div className="p-6 space-y-4">


      {/* NAV LINKS */}
      {navLinks.map(link => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => setMobileMenuOpen(false)} // ✅ FIX
          className={`
            block px-5 py-4 rounded-2xl font-medium transition-all
            ${isActive(link.href)
              ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
              : 'bg-gray-50 text-gray-700 hover:bg-green-50 hover:text-green-600'
            }
          `}
        >
          {link.label}
        </Link>
      ))}

      {/* CTA */}
      <Link
        href="/contact"
        onClick={() => setMobileMenuOpen(false)} // ✅ FIX
        className="block text-center px-6 py-4 rounded-2xl
          bg-gradient-to-r from-green-500 to-emerald-500
          text-white font-semibold shadow-lg"
      >
        Get Quote
      </Link>

      {/* CONTACT */}
      <div className="flex justify-center gap-6 pt-4 text-gray-600 text-sm">
        <a href="tel:+971XXXXXXXX" className="flex items-center gap-2">
          <Phone className="w-4 h-4" /> Call
        </a>
        <a href="mailto:info@ramzigreen.ae" className="flex items-center gap-2">
          <Mail className="w-4 h-4" /> Email
        </a>
      </div>
    </div>
  </div>
</div>


      {/* SPACER */}
      <div className="h-24" />
    </>
  );
}
