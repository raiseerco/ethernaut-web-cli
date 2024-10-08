'use client';

import dynamic from 'next/dynamic';

const TerminalComponent = dynamic(() => import('./components/terminal'), {
  ssr: false,
});
export default function Home() {
  return (
    <div className="w-full h-screen ">
      <main className="p-4 w-full h-full">
        <h1 className="py-3 text-lg">Welcome to Ethernaut CLI Demo</h1>
        <div className="p-4 shadow-md bg-black rounded-xl">
          <TerminalComponent />
        </div>
      </main>
      <footer className="  p-4">(C)2024</footer>
    </div>
  );
}
