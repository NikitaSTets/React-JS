import React, { lazy, Suspense } from 'react';

const LazyAddPostForm = lazy(() => import('./AddPostForm'));

const AddPostForm = props => (
  <Suspense fallback={null}>
    <LazyAddPostForm {...props} />
  </Suspense>
);

export default AddPostForm;
