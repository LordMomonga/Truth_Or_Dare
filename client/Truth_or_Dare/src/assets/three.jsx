import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
    const sceneRef = useRef();
    const cameraRef = useRef();
    const rendererRef = useRef();
  
    useEffect(() => {
      // Créez une scène
      const scene = new THREE.Scene();
  
      // Créez une caméra
      const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.4, 1000);
      cameraRef.current = camera;
      camera.position.z = 5;
  
      // Créez un rendu WebGL
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      rendererRef.current = renderer;
  
      // Créez une géométrie pour le cube
      const geometry = new THREE.BoxGeometry();
      // Créez un matériau pour le cube (par exemple, une couleur)
      const material = new THREE.MeshBasicMaterial({ color: 0xfffff });
      // Créez un cube en utilisant la géométrie et le matériau
      const cube = new THREE.Mesh(geometry, material);
      // Ajoutez le cube à la scène
      
      scene.add(cube);
  
      // Attachez la scène à l'élément HTML
      sceneRef.current.appendChild(renderer.domElement);
  
      // Créez une fonction d'animation
      const animate = () => {
        requestAnimationFrame(animate);
  
        // Faites tourner le cube ou effectuez d'autres animations ici
        cube.rotation.x += 0.0;
        cube.rotation.y += 0.01;
  
        renderer.render(scene, cameraRef.current);
      };
  
      animate();
    }, []);
  
    return (
      <div ref={sceneRef} />
    );
  };
  
  export default ThreeScene;
  