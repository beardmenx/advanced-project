import { lazy } from 'react';

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      import('./MainPage');
    })
);
