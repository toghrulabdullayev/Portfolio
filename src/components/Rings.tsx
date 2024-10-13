import { useCallback, useRef } from "react";

import { useGSAP } from "@gsap/react";
import { Center, useTexture } from "@react-three/drei";
import gsap from "gsap";
import { Mesh } from "three";
import { Vector3 } from "three";

const Rings = ({ position }: { position: Vector3}) => {
  const refList = useRef<Mesh[]>([]);
  
  const getRef = useCallback((mesh: Mesh | null) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const texture = useTexture("textures/rings.png");

  useGSAP(
    () => {
      if (refList.current.length === 0) return;

      refList.current.forEach((r) => {
        r.position.set(position.x, position.y, position.z);
      });

      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.5,
        })
        .to(
          refList.current.map((r) => r.rotation),
          {
            y: `+=${Math.PI * 2}`,
            x: `-=${Math.PI * 2}`,
            duration: 2.5,
            stagger: {
              each: 0.15,
            },
          }
        );
    },
    [position]
  );

  return (
    <Center>
      <group scale={0.5}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;
