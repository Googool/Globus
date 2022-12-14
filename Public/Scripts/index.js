import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 100);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

// CREATE SPHERE
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50),
    new THREE.MeshBasicMaterial({
        color: 0xFF0000
    }),
);

scene.add(sphere);

camera.position.z = 10

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

// https://youtu.be/vM8M4QloVL0?t=518