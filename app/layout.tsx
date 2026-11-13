import type { Metadata } from 'next';
import './globals.css';
import './product.css';
import './homepage.css';
import { Theme } from './components/chrome';

export const metadata: Metadata = {
  title: 'Kyntex — Understand how you move.',
  description: 'Meet the Kyntex band: wearable technology in development to help athletes and their support teams explore movement during training.',
  metadataBase: new URL('https://kyntex.org'),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-accent="muted-jade" data-direction="charcoal"><body><Theme>{children}</Theme></body></html>;
}
