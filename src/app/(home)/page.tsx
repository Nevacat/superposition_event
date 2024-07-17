import Image from 'next/image';
import HomeClient from './homeClient';
import axios from 'axios';

export default async function Home() {
  return (
    <main className='w-full h-[100vh] flex items-center justify-center bg-neutral-950'>
      <HomeClient />
    </main>
  );
}
