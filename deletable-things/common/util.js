function updateBasicOrtoCamera(camera, width, height) {
    var horiz, vert;
    
    if (width > height) {
        horiz = 1;
        vert = height / width;
    } else {
        horiz = width / height;
        vert = 1;
    }
    
    camera.left = -horiz;
    camera.right = horiz;
    camera.top = vert;
    camera.bottom = -vert;
    camera.updateProjectionMatrix();
}