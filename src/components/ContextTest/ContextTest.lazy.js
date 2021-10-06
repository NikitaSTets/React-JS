import React, { lazy, Suspense } from 'react';

const LazyContextTest = lazy(() => import('./ContextTest'));

const ContextTest = props => (
  <Suspense fallback={null}>
    <LazyContextTest {...props} />
  </Suspense>
);

export default ContextTest;
