import { useRef, useEffect } from "react";

import { useGLTF, useAnimations, useFBX } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { SkinnedMesh, Group } from "three";

interface CustomGroupProps extends GroupProps {
  animationName?: string;
}

const Developer = ({ animationName = "idle", ...props }: CustomGroupProps) => {
  const group = useRef<Group>(null);
  const { nodes, materials } = useGLTF("/models/animations/developer.glb");

  const { animations: idleAnimation } = useFBX("/models/animations/idle.fbx");
  const { animations: saluteAnimation } = useFBX("/models/animations/salute.fbx");
  const { animations: clappingAnimation } = useFBX("/models/animations/clapping.fbx");
  const { animations: victoryAnimation } = useFBX("/models/animations/victory.fbx");

  idleAnimation[0].name = "idle";
  saluteAnimation[0].name = "salute";
  clappingAnimation[0].name = "clapping";
  victoryAnimation[0].name = "victory";

  const { actions } = useAnimations([idleAnimation[0], saluteAnimation[0], clappingAnimation[0], victoryAnimation[0]], group);

  useEffect(() => {
    actions[animationName]?.reset().fadeIn(0.5).play();

    return () => {
      actions[animationName]?.fadeOut(0.5);
    };
  }, [animationName, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={(nodes.EyeLeft as SkinnedMesh).geometry}
        material={materials.Wolf3D_Eye}
        skeleton={(nodes.EyeLeft as SkinnedMesh).skeleton}
        morphTargetDictionary={
          (nodes.EyeLeft as SkinnedMesh).morphTargetDictionary
        }
        morphTargetInfluences={
          (nodes.EyeLeft as SkinnedMesh).morphTargetInfluences
        }
      />
      <skinnedMesh
        name="EyeRight"
        geometry={(nodes.EyeRight as SkinnedMesh).geometry}
        material={materials.Wolf3D_Eye}
        skeleton={(nodes.EyeRight as SkinnedMesh).skeleton}
        morphTargetDictionary={
          (nodes.EyeRight as SkinnedMesh).morphTargetDictionary
        }
        morphTargetInfluences={
          (nodes.EyeRight as SkinnedMesh).morphTargetInfluences
        }
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={(nodes.Wolf3D_Head as SkinnedMesh).geometry}
        material={materials.Wolf3D_Skin}
        skeleton={(nodes.Wolf3D_Head as SkinnedMesh).skeleton}
        morphTargetDictionary={
          (nodes.Wolf3D_Head as SkinnedMesh).morphTargetDictionary
        }
        morphTargetInfluences={
          (nodes.Wolf3D_Head as SkinnedMesh).morphTargetInfluences
        }
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={(nodes.Wolf3D_Teeth as SkinnedMesh).geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={(nodes.Wolf3D_Teeth as SkinnedMesh).skeleton}
        morphTargetDictionary={
          (nodes.Wolf3D_Teeth as SkinnedMesh).morphTargetDictionary
        }
        morphTargetInfluences={
          (nodes.Wolf3D_Teeth as SkinnedMesh).morphTargetInfluences
        }
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Hair as SkinnedMesh).geometry}
        material={materials.Wolf3D_Hair}
        skeleton={(nodes.Wolf3D_Hair as SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Outfit_Top as SkinnedMesh).geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={(nodes.Wolf3D_Outfit_Top as SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Outfit_Bottom as SkinnedMesh).geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={(nodes.Wolf3D_Outfit_Bottom as SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Outfit_Footwear as SkinnedMesh).geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={(nodes.Wolf3D_Outfit_Footwear as SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Body as SkinnedMesh).geometry}
        material={materials.Wolf3D_Body}
        skeleton={(nodes.Wolf3D_Body as SkinnedMesh).skeleton}
      />
    </group>
  );
};

useGLTF.preload("/models/animations/developer.glb");

export default Developer;
