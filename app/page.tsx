import { MainComponentClient } from '@/components/client/MainComponentClient';
import { siteContent } from '@/config/content';
import { headers } from 'next/headers';

export default function Home() {
  const headersList = headers();
  const activePath = headersList.get('referer');
  const path = new URL(activePath!).pathname;
  const content = siteContent[path];

  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <MainComponentClient content={content} />
    </section>
  );
}
