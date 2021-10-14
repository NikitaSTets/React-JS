import React, { lazy, Suspense } from 'react';

const LazyPostsList = lazy(() => import('./PostsList'));

const PostsList = props => (
  <Suspense fallback={null}>
    <LazyPostsList {...props} />
  </Suspense>
);

export default PostsList;
