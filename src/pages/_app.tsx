import Footer from '@/Components/Footer/Footer';
import Navigation from '@/Components/Navigation/Navigation';
import Search from '@/Components/Search/Search';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div>
      {!showSearch ? null : <Search setShowSearch={setShowSearch} />}
      <Navigation setShowSearch={setShowSearch} />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
