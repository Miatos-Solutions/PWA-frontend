import React, { Suspense } from 'react';

// Define a lazy component that dynamically imports PrivateSection
const LazyPrivateSection = React.lazy(() => import('../../components/privatesection/PrivateSection'));

function PrivateAvatar() {
    const backGroundImage = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  return (
    <div>
      {/* Wrapping the lazy-loaded component with Suspense and provide a fallback */}
      <Suspense fallback={<div>Loading...</div>}>
              <LazyPrivateSection backGroundImage={backGroundImage} />
      </Suspense>
    </div>
  );
}

export default PrivateAvatar;
