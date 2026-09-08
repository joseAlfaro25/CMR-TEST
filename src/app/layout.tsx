import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Kontaktu · Contactos', description: 'Ficha de contactos inmobiliarios' };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="es"><body>{children}</body></html>; }
