import React, { lazy, Suspense } from 'react';

const LazyPropsValidation = lazy(() => import('./PropsValidation'));

const PropsValidation = props => (
  <Suspense fallback={null}>
    <LazyPropsValidation {...props} />
  </Suspense>
);

export default PropsValidation;
