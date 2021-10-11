import React, { lazy, Suspense } from 'react';

const LazyHooksTestComponent = lazy(() => import('./HooksTestComponent'));

const HooksTestComponent = props => (
  <Suspense fallback={null}>
    <LazyHooksTestComponent {...props} />
  </Suspense>
);

export default HooksTestComponent;
