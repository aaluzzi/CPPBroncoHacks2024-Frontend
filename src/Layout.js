
import React from 'react';
import Menu from './Menu';

export default function Layout({ children }) {
  return (
    <div className='flex h-full'>
      <Menu />
      <main className="h-full w-full overflow-y-scroll">{children}</main>
    </div>
  );
}
