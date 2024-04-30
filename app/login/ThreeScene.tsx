"use client";
import React, { useRef, useEffect, ReactNode } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== undefined) {
      const scene = new THREE.Scene();
      const geometry = new THREE.SphereGeometry(4, 64, 64);
      //const geometry = new THREE.OctahedronGeometry(3, 0);
      const material = new THREE.MeshStandardMaterial({
        color: "#F9ED69",
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(-10, 0, 0);
      scene.add(mesh);

      //matix
      // const geometryPlane = new THREE.PlaneGeometry(50, 50, 1);
      // const materialPlane = new THREE.MeshBasicMaterial({
      //   color: "#222222",
      //   side: THREE.DoubleSide,
      // });
      // const plane = new THREE.Mesh(geometryPlane, materialPlane);
      // plane.position.set(-10, 6, -6);
      // scene.add(plane);
      const geometryTouras = new THREE.TorusGeometry(8, 3, 30, 200);
      const materialTouras = new THREE.MeshStandardMaterial({
        color: "#6A2C70",
      });
      const torus = new THREE.Mesh(geometryTouras, materialTouras);
      torus.position.set(-10, 0, 0);
      scene.add(torus);

      //matrix 2
      // const geometryPlane2 = new THREE.PlaneGeometry(20, 20, 1);
      // const materialPlane2 = new THREE.MeshBasicMaterial({
      //   color: "#222222",
      //   side: THREE.DoubleSide,
      // });
      // const plane2 = new THREE.Mesh(geometryPlane2, materialPlane2);
      // plane2.position.set(0, 0, 0);
      // plane2.rotation.set(-90, 0, 0);
      // scene.add(plane2);

      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      const light = new THREE.PointLight(0xffffff, 70, 100, 1.7);
      light.position.set(20, 10, 20);
      scene.add(light);
      const light2 = new THREE.PointLight(0xffffff, 70, 100, 1.7);
      light2.position.set(0, 0, -30);
      scene.add(light2);

      //camera
      const camera = new THREE.PerspectiveCamera(
        45,
        sizes.width / sizes.height,
        0.1,
        100
      );
      camera.position.set(0, 0, 40);
      scene.add(camera);

      const canvas: HTMLCanvasElement | null = document.querySelector(".webgl");

      if (canvas) {
        const renderer = new THREE.WebGLRenderer({ canvas });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(2);
        renderer.render(scene, camera);

        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;
        //controls.enablePan = false;
        controls.enableZoom = false;
        //controls.autoRotate = true;
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
    }
  }, []);
  return <div ref={containerRef} />;
};

export default ThreeScene;
