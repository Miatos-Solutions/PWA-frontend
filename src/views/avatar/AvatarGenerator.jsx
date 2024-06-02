import React, {Suspense, useState} from 'react';
import ImageUploader from './ImageUploader';
import ThreeDScene from './ThreeDScene';

const LazyPrivateSection = React.lazy(() => import('../../components/privatesection/PrivateSection'));
const AvatarGenerator = () => {
    const [image, setImage] = useState(null);

    const backGroundImage = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyPrivateSection backGroundImage={backGroundImage} />
            </Suspense>
            <h1>3D Image Viewer</h1>
            <ImageUploader onImageUpload={setImage} />
            <ThreeDScene image={image} />
        </div>
    );
};

export default AvatarGenerator;
