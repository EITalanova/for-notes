import React, { lazy, Suspense } from 'react';

const MainPage = lazy(() => import('./pages/Main'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
      <MainPage />
      </Suspense>
    </>
  );
};
