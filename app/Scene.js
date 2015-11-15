import THREE from 'three';
window.THREE = THREE;

export default class Scene {
	constructor(width, height) {
	    this.scene = new THREE.Scene();

	    this.camera = new THREE.PerspectiveCamera(50, width / height, 1, 1000);
	    this.camera.position.z = 100;
	    this.camera.position.y = 100;
	    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

	    this.renderer = new THREE.WebGLRenderer();
	    this.renderer.setSize(width, height);
	    document.body.appendChild(this.renderer.domElement);
	}

	render () {
		this.renderer.autoClear = false;
	  	this.renderer.clear();
	  	this.renderer.render(this.scene, this.camera);
	}
}