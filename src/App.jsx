import React, { lazy, Suspense } from 'react';

import { ThreeDots } from 'react-loader-spinner';
import Notiflix from 'notiflix';

const MainPage = lazy(() => import('./pages/Main'));

export const App = () => {
  Notiflix.Notify.init({
    distance: '18px',
    opacity: '0.9',
    width: '500px',
    position: 'left-top',
    fontSize: '28px',
    clickToClose: true,
    className: 'customNotiflix',
    notiflixIconColor: 'white',
    info: {
      notiflixIconColor: 'white',
    },
  });
  Notiflix.Report.init({
    success: {
      svgColor: '#44C2D5',
      titleColor: '#1e1e1e',
      messageColor: '#242424',
      buttonBackground: '#44C2D5',
      buttonColor: '#fff',
      backOverlayColor: 'rgba(68,194,213,0.2)',
    },
  });
  return (
    <Suspense
      fallback={
        <ThreeDots
          height="180"
          width="180"
          radius="9"
          color="var(--main-grey)"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      }
    >
      <MainPage />
    </Suspense>
  );
};
