function WorldView(world, opts) {
    this.world = world;
    this.element = opts.element !== undefined ? opts.element : document.body;
    this.fullscreen = opts.fullscreen !== undefined ? opts.fullscreen : true;
    this.width = opts.width !== undefined ? opts.width : 200;
    this.height = opts.height !== undefined ? opts.height : 200;
    this.onResizeListener = null;
}

WorldView.prototype.setupView = function () {
    var elementStyle = this.element.style;
    elementStyle.backgroundColor = '#000';
    elementStyle.overflow = 'hidden';
    elementStyle.margin = '0';
    
    var canvas = this.world.renderer.domElement;
    this.element.appendChild(canvas);
    // Who's the fucking wise guy who came up with the idea that canvas should
    // be an inline-block so that it has ghost margins?
    canvas.style.display = 'block';
    
    this.updateFullscreen(this.fullscreen);
    this.updateSize(this.width, this.height);
};

WorldView.prototype.updateSize = function (width, height) {
    this.width = width;
    this.height = height;
    this.world.renderer.setSize(this.width, this.height);    
    this.world.onUpdateSize(this.width, this.height);
};

WorldView.prototype.updateFullscreen = function (fullscreen) {
    this.fullscreen = fullscreen;
    var style = this.element.style;
    
    if (this.fullscreen) {
        if (this.onResizeListener !== null) {
            return;
        }
        
        style.position = 'fixed';
        style.left = '0';
        style.top = '0';
        
        var that = this;
        this.onResizeListener = function () {
            that.updateSize(window.innerWidth, window.innerHeight);
        };
        this.onResizeListener();
        window.addEventListener('resize', this.onResizeListener);
    } else {
        if (this.onResizeListener === null) {
            return;
        }
        
        style.position = 'relative';
        
        window.removeEventListener('resize', this.onResizeListener);
        this.onResizeListener = null;
    }
};
