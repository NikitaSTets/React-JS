import React, { lazy, Suspense } from 'react';

const LazyForwardingRefs = lazy(() => import('./ForwardingRefs'));

const ForwardingRefs = props => (
  <Suspense fallback={null}>
    <LazyForwardingRefs {...props} />
  </Suspense>
);

export default ForwardingRefs;
