import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-treasure-map bg-cover bg-center relative overflow-hidden">
      {/* Background overlay for better text contrast */}
      <div className="absolute inset-0 bg-yellow-900/20 z-0"></div>
      
      {/* Watermark image */}
      <div className="absolute inset-0 bg-[url('https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/789193e2-e119-4c42-a33e-0c08174e3e49-1000312939-removebg-preview.png')] bg-center bg-no-repeat bg-contain opacity-10 z-0 pointer-events-none"></div>
      
      {/* Content */}
      <main className="flex-grow flex items-center justify-center p-4 md:p-8 relative z-10">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;