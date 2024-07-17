import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Stats from 'stats.js';

const ThreeJSScene = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let container = mountRef.current!;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 150, 500);

    const light = new THREE.PointLight(0xffffff, 2.5);
    camera.add(light);
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const stats = new Stats();
    container.appendChild(stats.dom);

    const group = new THREE.Group();
    group.position.y = 50;
    scene.add(group);

    const loader = new THREE.TextureLoader();
    const texture = loader.load('/textures/uv_grid_opengl.jpg');
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(0.008, 0.008);

    const shapes = [
      {
        shape: new THREE.Shape().moveTo(80, 20).lineTo(40, 80).lineTo(120, 80).lineTo(80, 20),
        color: 0x8080f0,
        position: { x: -180, y: 0, z: 0 },
      },
      // Add other shapes here...
    ];

    shapes.forEach(({ shape, color, position }) => {
      const geometry = new THREE.ShapeGeometry(shape);
      const material = new THREE.MeshPhongMaterial({ color, side: THREE.DoubleSide });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(position.x, position.y, position.z);
      group.add(mesh);
    });

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize);

    const animate = () => {
      requestAnimationFrame(animate);
      group.rotation.y += 0.01;
      renderer.render(scene, camera);
      stats.update();
    };

    animate();

    return () => {
      container.removeChild(renderer.domElement);
      container.removeChild(stats.dom);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeJSScene;
