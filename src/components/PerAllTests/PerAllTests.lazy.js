import React, { lazy, Suspense } from 'react';

const LazyPerAllTests = lazy(() => import('./PerAllTests'));

const PerAllTests = props => (
  <Suspense fallback={null}>
    <LazyPerAllTests {...props} />
  </Suspense>
);

export default PerAllTests;
