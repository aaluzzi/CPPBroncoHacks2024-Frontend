
import React from 'react';
import Menu from './Menu';

export default function Layout({ children }) {
  return (
    <div className='flex h-screen'>
      <Menu />
      
      <main className="h-full w-full">{children}</main>
    </div>
  );
}
