// ProjectPageClient.js
'use client';
import { useRouter } from 'next/navigation';

export default function ProjectPageClient({ project }) {
  const router = useRouter();
  const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`;
  console.log(currentUrl);

  return (
    <div>
      <h1>{project.name}</h1>
      {/* ... */}
    </div>
  );
}