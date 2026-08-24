import type { ReactNode } from 'react';
export function Header() { return <header className="header"><a href="/" className="brand brand-art" aria-label="Backroads Pizza & Bourbon Bar" /><nav><a href="/story">Story</a><a href="/menu">Menu</a><a href="/visit">Visit</a></nav><a className="header-action" href="/menu">View menu</a></header>; }
export function Shell({children}:{children:ReactNode}) { return <><Header />{children}<footer><b>BACKROADS</b><span>Pizza &amp; Bourbon Bar · Highfill, Arkansas</span><em>Take the detour.</em></footer></>; }
