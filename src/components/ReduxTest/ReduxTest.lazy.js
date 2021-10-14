import React, { lazy, Suspense } from 'react';

const LazyReduxTest = lazy(() => import('./ReduxTest'));

const ReduxTest = props => (
  <Suspense fallback={null}>
    <LazyReduxTest {...props} />
  </Suspense>
);

export default ReduxTest;
