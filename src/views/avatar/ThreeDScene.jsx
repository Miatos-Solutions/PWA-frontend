import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

const SpinningPlane = ({ image }) => {
    const meshRef = useRef();
    const texture = useTexture(image);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={meshRef}>
            <planeBufferGeometry attach="geometry" args={[5, 5]} />
            <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    );
};

const ThreeDScene = ({ image }) => {
    return (
        <Canvas>
            {image && <SpinningPlane image={image} />}
        </Canvas>
    );
};

export default ThreeDScene;
