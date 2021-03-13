import { createRouter } from 'next/router';
import { RouterContext } from 'next/dist/next-server/lib/router-context';

const router = createRouter('', { id: '1' }, '', {} as any);

export const withNextRouter= () => (story: any) => (
  <RouterContext.Provider value={router}>
  {story()}
</RouterContext.Provider>
);
