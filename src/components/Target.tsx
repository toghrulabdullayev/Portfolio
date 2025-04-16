import { useRef } from "react";

import { useGLTF } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import gsap from "gsap";
import { Mesh } from "three";
import { useGSAP } from "@gsap/react";

const Target = (props: MeshProps) => {
  const targetRef = useRef<Mesh>(null);
  const { scene } = useGLTF("/models/model.gltf");

  useGSAP(() => {
    if (targetRef.current?.position) {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
