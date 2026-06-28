import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeHeroScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0.45, 7.2);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const root = new THREE.Group();
    scene.add(root);

    const key = new THREE.DirectionalLight(0xffffff, 3.4);
    key.position.set(3, 4, 5);
    scene.add(key);
    scene.add(new THREE.AmbientLight(0x9fd7ff, 1.2));

    const cyanLight = new THREE.PointLight(0x00f5ff, 2.8, 10);
    cyanLight.position.set(-3.4, 1.2, 3);
    scene.add(cyanLight);

    const pinkLight = new THREE.PointLight(0xff2ea6, 2.2, 10);
    pinkLight.position.set(3.2, -0.4, 2.8);
    scene.add(pinkLight);

    const goldLight = new THREE.PointLight(0xffd166, 1.8, 9);
    goldLight.position.set(0, 2.8, 2.5);
    scene.add(goldLight);

    const shellMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x182b63,
      metalness: 0.62,
      roughness: 0.18,
      transmission: 0.12,
      thickness: 0.5,
      clearcoat: 1,
      clearcoatRoughness: 0.12,
    });

    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x00f5ff,
      emissive: 0x00b8ff,
      emissiveIntensity: 1.05,
      metalness: 0.35,
      roughness: 0.28,
    });

    const accentMaterial = new THREE.MeshStandardMaterial({
      color: 0xff2ea6,
      emissive: 0xb600a8,
      emissiveIntensity: 1.05,
      metalness: 0.4,
      roughness: 0.24,
    });

    const knightMaterial = new THREE.MeshStandardMaterial({
      color: 0xffd166,
      emissive: 0x553800,
      emissiveIntensity: 0.9,
      metalness: 0.45,
      roughness: 0.2,
    });

    const javaMaterial = new THREE.MeshStandardMaterial({
      color: 0xff5c5c,
      emissive: 0x591010,
      emissiveIntensity: 0.8,
      metalness: 0.42,
      roughness: 0.24,
    });

    const goMaterial = new THREE.MeshStandardMaterial({
      color: 0xb8f7d4,
      emissive: 0x0c4f38,
      emissiveIntensity: 0.75,
      metalness: 0.35,
      roughness: 0.22,
    });

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.45, 2),
      shellMaterial
    );
    root.add(core);

    const torusA = new THREE.Mesh(
      new THREE.TorusGeometry(2.05, 0.045, 20, 140),
      coreMaterial
    );
    torusA.rotation.x = Math.PI / 2.8;
    root.add(torusA);

    const torusB = new THREE.Mesh(
      new THREE.TorusGeometry(2.55, 0.035, 20, 140),
      accentMaterial
    );
    torusB.rotation.y = Math.PI / 2.6;
    root.add(torusB);

    const torusC = new THREE.Mesh(
      new THREE.TorusGeometry(3.08, 0.025, 16, 160),
      knightMaterial
    );
    torusC.rotation.set(Math.PI / 3.4, Math.PI / 5, 0);
    root.add(torusC);

    const wireMaterial = new THREE.LineBasicMaterial({
      color: 0xbbccd7,
      transparent: true,
      opacity: 0.28,
    });
    const wire = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(4.6, 4.6, 4.6)),
      wireMaterial
    );
    wire.rotation.set(0.45, 0.2, 0.3);
    root.add(wire);

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 160;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      const radius = 3.2 + Math.random() * 3.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: 0x99f6ff,
        size: 0.028,
        transparent: true,
        opacity: 0.86,
      })
    );
    root.add(particles);

    const orbit = new THREE.Group();
    root.add(orbit);

    const satelliteMaterials = [
      knightMaterial,
      javaMaterial,
      coreMaterial,
      goMaterial,
    ];

    const satellites = satelliteMaterials.map((material, index) => {
      const satellite = new THREE.Mesh(
        new THREE.OctahedronGeometry(index === 0 ? 0.24 : 0.18, 1),
        material
      );
      satellite.userData = {
        angle: index * (Math.PI / 2),
        radius: index % 2 === 0 ? 3.05 : 2.7,
        speed: 0.52 + index * 0.11,
        y: index < 2 ? 0.85 : -0.75,
      };
      orbit.add(satellite);
      return satellite;
    });

    const beamMaterial = new THREE.LineBasicMaterial({
      color: 0xd7e2ea,
      transparent: true,
      opacity: 0.24,
    });

    const beams = satellites.map(() => {
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(),
        new THREE.Vector3(),
      ]);
      const beam = new THREE.Line(geometry, beamMaterial);
      root.add(beam);
      return beam;
    });

    const smallCubes = new THREE.Group();
    for (let i = 0; i < 18; i += 1) {
      const cube = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 0.08, 0.08),
        i % 3 === 0 ? accentMaterial : i % 3 === 1 ? coreMaterial : goMaterial
      );
      const angle = (i / 18) * Math.PI * 2;
      cube.position.set(Math.cos(angle) * 3.8, Math.sin(angle * 2) * 1.2, Math.sin(angle) * 3.8);
      cube.rotation.set(angle, angle * 0.5, angle * 0.8);
      smallCubes.add(cube);
    }
    root.add(smallCubes);

    const pointer = { x: 0, y: 0 };

    const resize = () => {
      const width = mount.clientWidth || 1;
      const height = mount.clientHeight || 1;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const move = (event) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move, { passive: true });
    resize();

    let frame = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      cyanLight.intensity = 2.4 + Math.sin(elapsed * 1.8) * 0.7;
      pinkLight.intensity = 2 + Math.cos(elapsed * 1.4) * 0.55;
      goldLight.intensity = 1.6 + Math.sin(elapsed * 2.1) * 0.45;
      root.rotation.y += (pointer.x * 0.35 - root.rotation.y) * 0.025;
      root.rotation.x += (-pointer.y * 0.18 - root.rotation.x) * 0.025;
      core.rotation.x = elapsed * 0.32;
      core.rotation.y = elapsed * 0.24;
      torusA.rotation.z = elapsed * 0.42;
      torusB.rotation.x = Math.PI / 2.6 + elapsed * 0.18;
      torusC.rotation.z = -elapsed * 0.32;
      torusC.scale.setScalar(1 + Math.sin(elapsed * 1.7) * 0.035);
      particles.rotation.y = elapsed * 0.035;
      wire.rotation.y = elapsed * 0.08;
      smallCubes.rotation.y = -elapsed * 0.18;
      smallCubes.rotation.x = Math.sin(elapsed * 0.4) * 0.14;

      satellites.forEach((satellite, index) => {
        const { angle, radius, speed, y } = satellite.userData;
        const t = angle + elapsed * speed;
        satellite.position.set(
          Math.cos(t) * radius,
          y + Math.sin(elapsed * 1.6 + index) * 0.2,
          Math.sin(t) * radius
        );
        satellite.rotation.x = elapsed * (0.8 + index * 0.1);
        satellite.rotation.y = elapsed * (0.65 + index * 0.12);
        satellite.scale.setScalar(1 + Math.sin(elapsed * 2.2 + index) * 0.12);

        const beamPositions = beams[index].geometry.attributes.position;
        beamPositions.setXYZ(0, 0, 0, 0);
        beamPositions.setXYZ(
          1,
          satellite.position.x,
          satellite.position.y,
          satellite.position.z
        );
        beamPositions.needsUpdate = true;
      });

      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      renderer.dispose();
      particleGeometry.dispose();
      core.geometry.dispose();
      torusA.geometry.dispose();
      torusB.geometry.dispose();
      torusC.geometry.dispose();
      wire.geometry.dispose();
      satellites.forEach((satellite) => satellite.geometry.dispose());
      beams.forEach((beam) => beam.geometry.dispose());
      smallCubes.children.forEach((cube) => cube.geometry.dispose());
      shellMaterial.dispose();
      coreMaterial.dispose();
      accentMaterial.dispose();
      knightMaterial.dispose();
      javaMaterial.dispose();
      goMaterial.dispose();
      beamMaterial.dispose();
      wireMaterial.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
