import { useRef } from "react";

import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Group } from "three";

// rotating the pc depending on cursor's position
const HeroCamera = ({
  children,
  isMobile,
}: {
  children: React.ReactNode;
  isMobile: boolean;
}) => {
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    // disabling for mobile
    if (!isMobile && groupRef.current?.rotation) {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 3, -state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }
  });

  return <group ref={groupRef} scale={isMobile ? 1 : 1.3}>{children}</group>;
};

export default HeroCamera;
