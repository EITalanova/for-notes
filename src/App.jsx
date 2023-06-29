import React from 'react';


import { lazy } from 'react';


const MainPage = lazy(() => import('./pages/Main'));

export const App = () => {
  return (
    <>
      <MainPage />
    </>
  );
};
