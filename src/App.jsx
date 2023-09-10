import React, { lazy, Suspense } from 'react';
import { ThreeDots } from 'react-loader-spinner';

const MainPage = lazy(() => import('./pages/Main'));

export const App = () => {
  return (
      <Suspense
        fallback={
          <ThreeDots
            height="180"
            width="180"
            radius="9"
            color="var(--main-grey)"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        }
      >
        <MainPage />
      </Suspense>
  );
};
