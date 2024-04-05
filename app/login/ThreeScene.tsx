"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== undefined) {
      const scene = new THREE.Scene();
      const geometry = new THREE.SphereGeometry(3, 64, 64);
      const material = new THREE.MeshStandardMaterial({
        color: "#00ff83",
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      const light = new THREE.PointLight(0xffffff, 70, 100, 1.7);
      light.position.set(20, 10, 20);
      scene.add(light);
      //   const light2 = new THREE.PointLight(0xffffff, 70, 100, 1.7);
      //   light2.position.set(0, 20, 30);
      //   scene.add(light2);

      const camera = new THREE.PerspectiveCamera(
        45,
        sizes.width / sizes.height,
        0.1,
        100
      );
      camera.position.z = 20;

      scene.add(camera);

      const canvas = document.querySelector(".webgl");
      const renderer = new THREE.WebGLRenderer({ canvas });
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(2);
      renderer.render(scene, camera);

      const controls = new OrbitControls(camera, canvas);
      controls.enableDamping = true;
      controls.enablePan = false;
      controls.enableZoom = false;
      controls.autoRotate = true;

      window.addEventListener("resize", () => {
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();
        renderer.setSize(sizes.width, sizes.height);
      });

      const loop = () => {
        controls.update();
        renderer.render(scene, camera);
        window.requestAnimationFrame(loop);
      };
      loop();
    }
  }, []);
  return <div ref={containerRef} />;
};

export default ThreeScene;
