import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import pathModel from '/models/emilian-avatar.glb';

export function Avatar(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(pathModel);
  const { actions, mixer } = useAnimations(animations, group);

  useEffect(() => {
    if (actions['greet']) {
      const animation = actions['greet'];
      animation.play();
    }
  }, [animations]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group name='shawal-ali'>
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name='avaturn_body'
            geometry={nodes.avaturn_body.geometry}
            material={nodes.avaturn_body.material}
            skeleton={nodes.avaturn_body.skeleton}
          />
          <skinnedMesh
            name='avaturn_hair_0'
            geometry={nodes.avaturn_hair_0.geometry}
            material={nodes.avaturn_hair_0.material}
            skeleton={nodes.avaturn_hair_0.skeleton}
          />
          <skinnedMesh
            name='avaturn_look_0'
            geometry={nodes.avaturn_look_0.geometry}
            material={nodes.avaturn_look_0.material}
            skeleton={nodes.avaturn_look_0.skeleton}
          />
          <skinnedMesh
            name='avaturn_shoes_0'
            geometry={nodes.avaturn_shoes_0.geometry}
            material={nodes.avaturn_shoes_0.material}
            skeleton={nodes.avaturn_shoes_0.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(pathModel);
