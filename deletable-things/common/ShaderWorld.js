function ShaderWorld(opts) {
    World.call(this, opts.viewOpts);
    var defaultVertexShader = [
        'varying vec2 vuv;',
        'void main() {',
        '    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);',
        '    gl_Position = projectionMatrix * mvPosition;',
        '    vuv = uv;',
        '}'
    ].join("\n");

    this.vertexShader = opts.vertexShader !== undefined
            ? opts.vertexShader : defaultVertexShader;
    this.uniforms = opts.uniforms;
    this.fragmentShader = opts.fragmentShader;
    this.tickFunc = opts.tickFunc;
}

ShaderWorld.prototype = Object.create(World.prototype);
ShaderWorld.prototype.constructor = ShaderWorld;

ShaderWorld.prototype.setupWorld = function () {
    this.renderer = new THREE.WebGLRenderer();
    this.scene = new THREE.Scene();
    
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
    this.scene.add(this.camera);

    var material = new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: this.vertexShader,
        fragmentShader: this.fragmentShader
    });

    var mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    this.scene.add(mesh);
};

ShaderWorld.prototype.onTick = function () {
    this.tickFunc();
};

ShaderWorld.prototype.onUpdateSize = function (width, height) {
    updateBasicOrtoCamera(this.camera, width, height);
};
