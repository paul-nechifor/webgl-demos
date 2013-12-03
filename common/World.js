function World(viewOpts) {
    this.worldView = new WorldView(this, viewOpts || {});
    this.renderer = null;
    this.scene = null;
    this.camera = null;
}

World.prototype.start = function () {
    this.setupWorld();
    this.worldView.setupView();
    this.startTick();
};

World.prototype.setupWorld = function () {
    throw new 'Not implemented.';
};

World.prototype.startTick = function () {
    var that = this;
    var tick = this.onTick.bind(this);

    var next = function () {
        tick();
        that.renderer.render(that.scene, that.camera);
        requestAnimationFrame(next);
    };

    next();
};

World.prototype.onTick = function () {
    throw new 'Not implemented.';
};

World.prototype.onUpdateSize = function (width, height) {
    throw new 'Not implemented.';
};