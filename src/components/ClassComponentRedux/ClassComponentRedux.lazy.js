import React, { lazy, Suspense } from 'react';

const LazyClassComponentRedux = lazy(() => import('./ClassComponentRedux'));

const ClassComponentRedux = props => (
  <Suspense fallback={null}>
    <LazyClassComponentRedux {...props} />
  </Suspense>
);

export default ClassComponentRedux;
