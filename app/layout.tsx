import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Backroads Pizza & Bourbon Bar | Highfill, AR', description: 'Pizza, bourbon, and neighborhood nights in Highfill, Arkansas. Opening 2027.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
