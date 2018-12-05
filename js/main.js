function createSpriteShape() {
    var canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    var ctx = canvas.getContext("2d");
    // ctx.fillStyle = "#e2fbff";
    // ctx.arc(50, 50, 50, 0, 2 * Math.PI);
    // ctx.fill();
    var img = document.getElementById('label-img');
    ctx.drawImage(img,0,0)
    var texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    var material = new THREE.SpriteMaterial({
        map: texture
    });
    var mesh = new THREE.Sprite(material);
    mesh.scale.set(100, 100, 1);
    return mesh;
}
function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

window.addEventListener("orientationchange", function (event) {
    shanGong.remInit(1750, 75); // 最大适配
    setTimeout(function(){
        onWindowResize();
    },500)
});

//

function animate() {
    requestAnimationFrame( animate );
    if ( mixers.length > 0 ) {
        for ( var i = 0; i < mixers.length; i ++ ) {
            mixers[ i ].update( clock.getDelta() );
        }
    }
    //stats.update();
    render();
}

function render() {
    // update the picking ray with the camera and mouse position
    // renderer.toneMappingExposure = Math.pow( 1.3, 4.0 );
    renderer.render( scene, camera );
}



function change(child){

    if(child.name == 'Car_truck13' || child.name == 'Car_truck15'){
    //    child.visible = false;
    }

    if (child.name === 'Door_BL09' || child.name == 'Car_truck08') {
        child.material.color = new THREE.Color().setHex(0x151515);
    }

    if (child.name == 'logo') {
        child.material.color = new THREE.Color().setHex(0x450009);
    }

    if (/Plane001/.test(child.name)) {
        child.material.transparent = true;
        child.material.color = new THREE.Color().setHex(0x000000);
    }

    if (/Car_Body|Car_truck|Car_plastic/.test(child.name)) {
        child.material.envMap = textureCube;
        child.material.combine = THREE.MultiplyOperation;
        //child.material.specular= new THREE.Color().setHex(0x00ff00);
        //child.material.shininess = 0.68;
        child.material.shininess = 1.8;
        child.material.reflectivity = 0.5;
    }

    if (/chrome|Door_BR06/.test(child.name)) {
        child.material.color = new THREE.Color().setHex(0x3d3d3d);
        child.material.envMap = textureCube;
        child.material.specular = new THREE.Color().setHex(0xffffff);
        child.material.combine = THREE.MultiplyOperation;
        child.material.reflectivity = 0.8;
        child.material.shininess = 2;
    }

    if (child.name == 'Wheel_BR01') {
        child.material.specular = new THREE.Color().setHex(0x111111);
    }

    if (child.name == 'Wheel_BR03') {
        child.material.envMap = textureCube;
        child.material.specular = new THREE.Color().setHex(0x3d3e43);
        child.material.combine = THREE.MultiplyOperation;
        child.material.reflectivity = 0.5;
        child.material.shininess = 58;
    }

    if (/Car_Glass/.test(child.name)) {
        child.material.color = new THREE.Color().setHex(0x121212);
        child.material.specular = new THREE.Color("rgb(255, 255, 255)");
        child.material.envMap = textureCube;
        child.material.reflectivity = 0.5;
        child.material.shininess = 1;
    }

    if (/Car_Body/.test(child.name) || child.name == 'Car_truck07') {
        child.material.color = new THREE.Color().setHex(0x75000d);
    }

    if (/Car_plastic|Wheel/.test(child.name)) {
        // child.material.color =  new THREE.Color("rgb(20, 24, 35)");
    }

    if (child.name == 'Car_plastic' || child.name == 'Car_Int04d' || child.name == 'Car_truck09'|| child.name == 'Door_FL12' || child.name == 'Door_BL04') {
        child.material.color = new THREE.Color("rgb(20, 24, 35)");
        child.material.specular = new THREE.Color().setHex(0x1f1f29);
        child.material.combine = THREE.MixOperation;
        child.material.reflectivity = 0.1;
        child.material.shininess = 5;
    }

    if (child.name == 'Wheel_Other08') {
        child.material.color = new THREE.Color("rgb(148, 1, 19)");
        child.material.envMap = textureCube;
        child.material.specular = new THREE.Color().setHex(0xffffff);
        child.material.combine = THREE.MultiplyOperation;
        child.material.reflectivity = 0.5;
        child.material.shininess = 1;
    }

    if (child.name == 'Wheel_Other01' || child.name == 'Wheel_BR02' || child.name == 'Wheel_Other02' || child.name == 'Wheel_Other00') {
        child.material.color = new THREE.Color("rgb(113, 99, 96)");
        child.material.envMap = textureCube;
        child.material.specular = new THREE.Color().setHex(0xffffff);
        child.material.combine = THREE.MultiplyOperation;
        child.material.reflectivity = 0.5;
        child.material.shininess = 3;
    }

    if (child.name == 'Wheel_FL01' || child.name == 'Wheel_BL04' || child.name == 'Wheel_BR01' || child.name == 'Wheel_FR00' || child.name == 'Wheel_BL01') {
        child.material.metalness = 0.82;
        child.material.envMap = textureCube;
        child.material.color = new THREE.Color("rgb(20, 24, 35)");
        child.material.specular = new THREE.Color().setHex(0x1f1f29);
        child.material.combine = THREE.MultiplyOperation;
        child.material.reflectivity = 0.1;
        child.material.shininess = 5;
    }


    if ('Car_chrome' == child.name || child.name == 'Car_truck01') {
        child.material.color = new THREE.Color().setHex(0xffffff);
    }

    if (child.name == 'Car_chrome') {

        child.material.specular = new THREE.Color().setHex(0xffffff);
        child.material.shininess = 65;
    }

    if (/Car_Glass_Light1/.test(child.name)) {
        child.material.color = new THREE.Color().lerp({r: 255, g: 255, b: 255}, 0.8);
        child.material.opacity = 0.2;
    }

    if (/car_chrome02/.test(child.name)) {
        child.material.color = new THREE.Color("rgb(18, 121, 187)");
    }

    if (/car_seat/.test(child.name)) {
        child.material.color = new THREE.Color().setHex(0x303030);
        child.material.specular = new THREE.Color().setHex(0x674947);
        child.material.reflectivity = 0.1;
        child.material.shininess = 4;
    }

    if (child.name == 'Car_Int03') {
        child.material.color = new THREE.Color().setHex(0x7a7a7a);
        child.material.specular = new THREE.Color().setHex(0x000000);
        child.material.shininess = 1;
    }

    if(child.name == 'Car_Int05'){
        child.material.color = new THREE.Color().setHex(0x111111);
    }

    if (child.name == 'Car_Int06') {
        child.material.color = new THREE.Color().setHex(0x7a7a7a);
    }
}


// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finger swipe

THREE.OrbitControls = function ( object, domElement ) {

    this.object = object;

    this.domElement = ( domElement !== undefined ) ? domElement : document;

    // Set to false to disable this control
    this.enabled = true;

    // "target" sets the location of focus, where the object orbits around
    this.target = new THREE.Vector3();

    // How far you can dolly in and out ( PerspectiveCamera only )
    this.minDistance = 0;
    this.maxDistance = Infinity;

    // How far you can zoom in and out ( OrthographicCamera only )
    this.minZoom = 0;
    this.maxZoom = Infinity;

    // How far you can orbit vertically, upper and lower limits.
    // Range is 0 to Math.PI radians.
    this.minPolarAngle = 0; // radians
    this.maxPolarAngle = Math.PI; // radians

    // How far you can orbit horizontally, upper and lower limits.
    // If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
    this.minAzimuthAngle = - Infinity; // radians
    this.maxAzimuthAngle = Infinity; // radians

    // Set to true to enable damping (inertia)
    // If damping is enabled, you must call controls.update() in your animation loop
    this.enableDamping = false;
    this.dampingFactor = 0.25;

    // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
    // Set to false to disable zooming
    this.enableZoom = true;
    this.zoomSpeed = 1.0;

    // Set to false to disable rotating
    this.enableRotate = true;
    this.rotateSpeed = 1.0;

    // Set to false to disable panning
    this.enablePan = true;
    this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

    // Set to true to automatically rotate around the target
    // If auto-rotate is enabled, you must call controls.update() in your animation loop
    this.autoRotate = false;
    this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

    // Set to false to disable use of the keys
    this.enableKeys = true;

    // The four arrow keys
    this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

    // Mouse buttons
    this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };

    // for reset
    this.target0 = this.target.clone();
    this.position0 = this.object.position.clone();
    this.zoom0 = this.object.zoom;

    //
    // public methods
    //

    this.getPolarAngle = function () {

        return spherical.phi;

    };

    this.getAzimuthalAngle = function () {

        return spherical.theta;

    };

    this.saveState = function () {

        scope.target0.copy( scope.target );
        scope.position0.copy( scope.object.position );
        scope.zoom0 = scope.object.zoom;

    };

    this.reset = function () {

        scope.target.copy( scope.target0 );
        scope.object.position.copy( scope.position0 );
        scope.object.zoom = scope.zoom0;

        scope.object.updateProjectionMatrix();
        scope.dispatchEvent( changeEvent );

        scope.update();

        state = STATE.NONE;

    };

    // this method is exposed, but perhaps it would be better if we can make it private...
    this.update = function () {

        var offset = new THREE.Vector3();

        // so camera.up is the orbit axis
        var quat = new THREE.Quaternion().setFromUnitVectors( object.up, new THREE.Vector3( 0, 1, 0 ) );
        var quatInverse = quat.clone().inverse();

        var lastPosition = new THREE.Vector3();
        var lastQuaternion = new THREE.Quaternion();

        return function update() {

            var position = scope.object.position;

            offset.copy( position ).sub( scope.target );

            // rotate offset to "y-axis-is-up" space
            offset.applyQuaternion( quat );

            // angle from z-axis around y-axis
            spherical.setFromVector3( offset );

            if ( scope.autoRotate && state === STATE.NONE ) {

                rotateLeft( getAutoRotationAngle() );

            }

            spherical.theta += sphericalDelta.theta;
            spherical.phi += sphericalDelta.phi;

            // restrict theta to be between desired limits
            spherical.theta = Math.max( scope.minAzimuthAngle, Math.min( scope.maxAzimuthAngle, spherical.theta ) );

            // restrict phi to be between desired limits
            spherical.phi = Math.max( scope.minPolarAngle, Math.min( scope.maxPolarAngle, spherical.phi ) );

            spherical.makeSafe();


            spherical.radius *= scale;

            // restrict radius to be between desired limits
            spherical.radius = Math.max( scope.minDistance, Math.min( scope.maxDistance, spherical.radius ) );

            // move target to panned location
            scope.target.add( panOffset );

            offset.setFromSpherical( spherical );

            // rotate offset back to "camera-up-vector-is-up" space
            offset.applyQuaternion( quatInverse );

            position.copy( scope.target ).add( offset );

            scope.object.lookAt( scope.target );

            if ( scope.enableDamping === true ) {

                sphericalDelta.theta *= ( 1 - scope.dampingFactor );
                sphericalDelta.phi *= ( 1 - scope.dampingFactor );

            } else {

                sphericalDelta.set( 0, 0, 0 );

            }

            scale = 1;
            panOffset.set( 0, 0, 0 );

            // update condition is:
            // min(camera displacement, camera rotation in radians)^2 > EPS
            // using small-angle approximation cos(x/2) = 1 - x^2 / 8

            if ( zoomChanged ||
                lastPosition.distanceToSquared( scope.object.position ) > EPS ||
                8 * ( 1 - lastQuaternion.dot( scope.object.quaternion ) ) > EPS ) {

                scope.dispatchEvent( changeEvent );

                lastPosition.copy( scope.object.position );
                lastQuaternion.copy( scope.object.quaternion );
                zoomChanged = false;

                return true;

            }

            return false;

        };

    }();

    this.dispose = function () {

        scope.domElement.removeEventListener( 'contextmenu', onContextMenu, false );
        scope.domElement.removeEventListener( 'mousedown', onMouseDown, false );
        scope.domElement.removeEventListener( 'wheel', onMouseWheel, false );

        scope.domElement.removeEventListener( 'touchstart', onTouchStart, false );
        scope.domElement.removeEventListener( 'touchend', onTouchEnd, false );
        scope.domElement.removeEventListener( 'touchmove', onTouchMove, false );

        document.removeEventListener( 'mousemove', onMouseMove, false );
        document.removeEventListener( 'mouseup', onMouseUp, false );

        window.removeEventListener( 'keydown', onKeyDown, false );

        //scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?

    };

    //
    // internals
    //

    var scope = this;

    var changeEvent = { type: 'change' };
    var startEvent = { type: 'start' };
    var endEvent = { type: 'end' };

    var STATE = { NONE: - 1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };

    var state = STATE.NONE;

    var EPS = 0.000001;

    // current position in spherical coordinates
    var spherical = new THREE.Spherical();
    var sphericalDelta = new THREE.Spherical();

    var scale = 1;
    var panOffset = new THREE.Vector3();
    var zoomChanged = false;

    var rotateStart = new THREE.Vector2();
    var rotateEnd = new THREE.Vector2();
    var rotateDelta = new THREE.Vector2();

    var panStart = new THREE.Vector2();
    var panEnd = new THREE.Vector2();
    var panDelta = new THREE.Vector2();

    var dollyStart = new THREE.Vector2();
    var dollyEnd = new THREE.Vector2();
    var dollyDelta = new THREE.Vector2();

    function getAutoRotationAngle() {

        return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

    }

    function getZoomScale() {

        return Math.pow( 0.95, scope.zoomSpeed );

    }

    function rotateLeft( angle ) {

        sphericalDelta.theta -= angle;

    }

    function rotateUp( angle ) {

        sphericalDelta.phi -= angle;

    }

    var panLeft = function () {

        var v = new THREE.Vector3();

        return function panLeft( distance, objectMatrix ) {

            v.setFromMatrixColumn( objectMatrix, 0 ); // get X column of objectMatrix
            v.multiplyScalar( - distance );

            panOffset.add( v );

        };

    }();

    var panUp = function () {

        var v = new THREE.Vector3();

        return function panUp( distance, objectMatrix ) {

            v.setFromMatrixColumn( objectMatrix, 1 ); // get Y column of objectMatrix
            v.multiplyScalar( distance );

            panOffset.add( v );

        };

    }();

    // deltaX and deltaY are in pixels; right and down are positive
    var pan = function () {

        var offset = new THREE.Vector3();

        return function pan( deltaX, deltaY ) {

            var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

            if ( scope.object.isPerspectiveCamera ) {

                // perspective
                var position = scope.object.position;
                offset.copy( position ).sub( scope.target );
                var targetDistance = offset.length();

                // half of the fov is center to top of screen
                targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

                // we actually don't use screenWidth, since perspective camera is fixed to screen height
                panLeft( 2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix );
                panUp( 2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix );

            } else if ( scope.object.isOrthographicCamera ) {

                // orthographic
                panLeft( deltaX * ( scope.object.right - scope.object.left ) / scope.object.zoom / element.clientWidth, scope.object.matrix );
                panUp( deltaY * ( scope.object.top - scope.object.bottom ) / scope.object.zoom / element.clientHeight, scope.object.matrix );

            } else {

                // camera neither orthographic nor perspective
                console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );
                scope.enablePan = false;

            }

        };

    }();

    function dollyIn( dollyScale ) {

        if ( scope.object.isPerspectiveCamera ) {

            scale /= dollyScale;

        } else if ( scope.object.isOrthographicCamera ) {

            scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom * dollyScale ) );
            scope.object.updateProjectionMatrix();
            zoomChanged = true;

        } else {

            console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
            scope.enableZoom = false;

        }

    }

    function dollyOut( dollyScale ) {

        if ( scope.object.isPerspectiveCamera ) {

            scale *= dollyScale;

        } else if ( scope.object.isOrthographicCamera ) {

            scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom / dollyScale ) );
            scope.object.updateProjectionMatrix();
            zoomChanged = true;

        } else {

            console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
            scope.enableZoom = false;

        }

    }

    //
    // event callbacks - update the object state
    //

    function handleMouseDownRotate( event ) {

        //console.log( 'handleMouseDownRotate' );

        rotateStart.set( event.clientX, event.clientY );

    }

    function handleMouseDownDolly( event ) {

        //console.log( 'handleMouseDownDolly' );

        dollyStart.set( event.clientX, event.clientY );

    }

    function handleMouseDownPan( event ) {

        //console.log( 'handleMouseDownPan' );

        panStart.set( event.clientX, event.clientY );

    }

    function handleMouseMoveRotate( event ) {

        //console.log( 'handleMouseMoveRotate' );

        rotateEnd.set( event.clientX, event.clientY );
        rotateDelta.subVectors( rotateEnd, rotateStart );

        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

        // rotating across whole screen goes 360 degrees around
        rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );

        // rotating up and down along whole screen attempts to go 360, but limited to 180
        rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

        rotateStart.copy( rotateEnd );

        scope.update();

    }

    function handleMouseMoveDolly( event ) {

        //console.log( 'handleMouseMoveDolly' );

        dollyEnd.set( event.clientX, event.clientY );

        dollyDelta.subVectors( dollyEnd, dollyStart );

        if ( dollyDelta.y > 0 ) {

            dollyIn( getZoomScale() );

        } else if ( dollyDelta.y < 0 ) {

            dollyOut( getZoomScale() );

        }

        dollyStart.copy( dollyEnd );

        scope.update();

    }

    function handleMouseMovePan( event ) {

        //console.log( 'handleMouseMovePan' );

        panEnd.set( event.clientX, event.clientY );

        panDelta.subVectors( panEnd, panStart );

        pan( panDelta.x, panDelta.y );

        panStart.copy( panEnd );

        scope.update();

    }

    function handleMouseUp( event ) {

        // console.log( 'handleMouseUp' );

    }

    function handleMouseWheel( event ) {

        // console.log( 'handleMouseWheel' );

        if ( event.deltaY < 0 ) {

            dollyOut( getZoomScale() );

        } else if ( event.deltaY > 0 ) {

            dollyIn( getZoomScale() );

        }

        scope.update();

    }

    function handleKeyDown( event ) {

        //console.log( 'handleKeyDown' );

        switch ( event.keyCode ) {

            case scope.keys.UP:
                pan( 0, scope.keyPanSpeed );
                scope.update();
                break;

            case scope.keys.BOTTOM:
                pan( 0, - scope.keyPanSpeed );
                scope.update();
                break;

            case scope.keys.LEFT:
                pan( scope.keyPanSpeed, 0 );
                scope.update();
                break;

            case scope.keys.RIGHT:
                pan( - scope.keyPanSpeed, 0 );
                scope.update();
                break;

        }

    }

    function handleTouchStartRotate( event ) {

        //console.log( 'handleTouchStartRotate' );

        rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

    }

    function handleTouchStartDolly( event ) {

        //console.log( 'handleTouchStartDolly' );

        var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
        var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

        var distance = Math.sqrt( dx * dx + dy * dy );

        dollyStart.set( 0, distance );

    }

    function handleTouchStartPan( event ) {

        //console.log( 'handleTouchStartPan' );

        panStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

    }

    function handleTouchMoveRotate( event ) {

        //console.log( 'handleTouchMoveRotate' );

        rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
        rotateDelta.subVectors( rotateEnd, rotateStart );

        var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

        // rotating across whole screen goes 360 degrees around
        rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );

        // rotating up and down along whole screen attempts to go 360, but limited to 180
        rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

        rotateStart.copy( rotateEnd );

        scope.update();

    }

    function handleTouchMoveDolly( event ) {

        //console.log( 'handleTouchMoveDolly' );

        var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
        var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

        var distance = Math.sqrt( dx * dx + dy * dy );

        dollyEnd.set( 0, distance );

        dollyDelta.subVectors( dollyEnd, dollyStart );

        if ( dollyDelta.y > 0 ) {

            dollyOut( getZoomScale() );

        } else if ( dollyDelta.y < 0 ) {

            dollyIn( getZoomScale() );

        }

        dollyStart.copy( dollyEnd );

        scope.update();

    }

    function handleTouchMovePan( event ) {

        //console.log( 'handleTouchMovePan' );

        panEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

        panDelta.subVectors( panEnd, panStart );

        pan( panDelta.x, panDelta.y );

        panStart.copy( panEnd );

        scope.update();

    }

    function handleTouchEnd( event ) {

        //console.log( 'handleTouchEnd' );

    }

    //
    // event handlers - FSM: listen for events and reset state
    //

    function onMouseDown( event ) {

        if ( scope.enabled === false ) return;

        event.preventDefault();

        switch ( event.button ) {

            case scope.mouseButtons.ORBIT:

                if ( scope.enableRotate === false ) return;

                handleMouseDownRotate( event );

                state = STATE.ROTATE;

                break;

            case scope.mouseButtons.ZOOM:

                if ( scope.enableZoom === false ) return;

                handleMouseDownDolly( event );

                state = STATE.DOLLY;

                break;

            case scope.mouseButtons.PAN:

                if ( scope.enablePan === false ) return;

                handleMouseDownPan( event );

                state = STATE.PAN;

                break;

        }

        if ( state !== STATE.NONE ) {

            document.addEventListener( 'mousemove', onMouseMove, false );
            document.addEventListener( 'mouseup', onMouseUp, false );

            scope.dispatchEvent( startEvent );

        }

    }

    function onMouseMove( event ) {

        if ( scope.enabled === false ) return;

        event.preventDefault();

        switch ( state ) {

            case STATE.ROTATE:

                if ( scope.enableRotate === false ) return;

                handleMouseMoveRotate( event );

                break;

            case STATE.DOLLY:

                if ( scope.enableZoom === false ) return;

                handleMouseMoveDolly( event );

                break;

            case STATE.PAN:

                if ( scope.enablePan === false ) return;

                handleMouseMovePan( event );

                break;

        }

    }

    function onMouseUp( event ) {

        if ( scope.enabled === false ) return;

        handleMouseUp( event );

        document.removeEventListener( 'mousemove', onMouseMove, false );
        document.removeEventListener( 'mouseup', onMouseUp, false );

        scope.dispatchEvent( endEvent );

        state = STATE.NONE;

    }

    function onMouseWheel( event ) {

        if ( scope.enabled === false || scope.enableZoom === false || ( state !== STATE.NONE && state !== STATE.ROTATE ) ) return;

        event.preventDefault();
        event.stopPropagation();

        handleMouseWheel( event );

        scope.dispatchEvent( startEvent ); // not sure why these are here...
        scope.dispatchEvent( endEvent );

    }

    function onKeyDown( event ) {

        if ( scope.enabled === false || scope.enableKeys === false || scope.enablePan === false ) return;

        handleKeyDown( event );

    }

    function onTouchStart( event ) {

        if ( scope.enabled === false ) return;

        switch ( event.touches.length ) {

            case 1:	// one-fingered touch: rotate

                if ( scope.enableRotate === false ) return;

                handleTouchStartRotate( event );

                state = STATE.TOUCH_ROTATE;

                break;

            case 2:	// two-fingered touch: dolly

                if ( scope.enableZoom === false ) return;

                handleTouchStartDolly( event );

                state = STATE.TOUCH_DOLLY;

                break;

            case 3: // three-fingered touch: pan

                if ( scope.enablePan === false ) return;

                handleTouchStartPan( event );

                state = STATE.TOUCH_PAN;

                break;

            default:

                state = STATE.NONE;

        }

        if ( state !== STATE.NONE ) {

            scope.dispatchEvent( startEvent );

        }

    }

    function onTouchMove( event ) {

        if ( scope.enabled === false ) return;

        event.preventDefault();
        event.stopPropagation();

        switch ( event.touches.length ) {

            case 1: // one-fingered touch: rotate

                if ( scope.enableRotate === false ) return;
                if ( state !== STATE.TOUCH_ROTATE ) return; // is this needed?...

                handleTouchMoveRotate( event );

                break;

            case 2: // two-fingered touch: dolly

                if ( scope.enableZoom === false ) return;
                if ( state !== STATE.TOUCH_DOLLY ) return; // is this needed?...

                handleTouchMoveDolly( event );

                break;

            case 3: // three-fingered touch: pan

                if ( scope.enablePan === false ) return;
                if ( state !== STATE.TOUCH_PAN ) return; // is this needed?...

                handleTouchMovePan( event );

                break;

            default:

                state = STATE.NONE;

        }

    }

    function onTouchEnd( event ) {

        if ( scope.enabled === false ) return;

        handleTouchEnd( event );

        scope.dispatchEvent( endEvent );

        state = STATE.NONE;

    }

    function onContextMenu( event ) {

        if ( scope.enabled === false ) return;

        event.preventDefault();

    }

    //

    scope.domElement.addEventListener( 'contextmenu', onContextMenu, false );

    scope.domElement.addEventListener( 'mousedown', onMouseDown, false );
    scope.domElement.addEventListener( 'wheel', onMouseWheel, false );

    scope.domElement.addEventListener( 'touchstart', onTouchStart, false );
    scope.domElement.addEventListener( 'touchend', onTouchEnd, false );
    scope.domElement.addEventListener( 'touchmove', onTouchMove, false );

    window.addEventListener( 'keydown', onKeyDown, false );

    // force an update at start

    this.update();

};

THREE.OrbitControls.prototype = Object.create( THREE.EventDispatcher.prototype );
THREE.OrbitControls.prototype.constructor = THREE.OrbitControls;

Object.defineProperties( THREE.OrbitControls.prototype, {

    center: {

        get: function () {

            console.warn( 'THREE.OrbitControls: .center has been renamed to .target' );
            return this.target;

        }

    },

    // backward compatibility

    noZoom: {

        get: function () {

            console.warn( 'THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.' );
            return ! this.enableZoom;

        },

        set: function ( value ) {

            console.warn( 'THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.' );
            this.enableZoom = ! value;

        }

    },

    noRotate: {

        get: function () {

            console.warn( 'THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.' );
            return ! this.enableRotate;

        },

        set: function ( value ) {

            console.warn( 'THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.' );
            this.enableRotate = ! value;

        }

    },

    noPan: {

        get: function () {

            console.warn( 'THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.' );
            return ! this.enablePan;

        },

        set: function ( value ) {

            console.warn( 'THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.' );
            this.enablePan = ! value;

        }

    },

    noKeys: {

        get: function () {

            console.warn( 'THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.' );
            return ! this.enableKeys;

        },

        set: function ( value ) {

            console.warn( 'THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.' );
            this.enableKeys = ! value;

        }

    },

    staticMoving: {

        get: function () {

            console.warn( 'THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.' );
            return ! this.enableDamping;

        },

        set: function ( value ) {

            console.warn( 'THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.' );
            this.enableDamping = ! value;

        }

    },

    dynamicDampingFactor: {

        get: function () {

            console.warn( 'THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.' );
            return this.dampingFactor;

        },

        set: function ( value ) {

            console.warn( 'THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.' );
            this.dampingFactor = value;

        }

    }

} );

THREE.NURBSCurve = function ( degree, knots /* array of reals */, controlPoints /* array of Vector(2|3|4) */, startKnot /* index in knots */, endKnot /* index in knots */ ) {

    THREE.Curve.call( this );

    this.degree = degree;
    this.knots = knots;
    this.controlPoints = [];
    // Used by periodic NURBS to remove hidden spans
    this.startKnot = startKnot || 0;
    this.endKnot = endKnot || ( this.knots.length - 1 );
    for ( var i = 0; i < controlPoints.length; ++ i ) {

        // ensure Vector4 for control points
        var point = controlPoints[ i ];
        this.controlPoints[ i ] = new THREE.Vector4( point.x, point.y, point.z, point.w );

    }

};


THREE.NURBSCurve.prototype = Object.create( THREE.Curve.prototype );
THREE.NURBSCurve.prototype.constructor = THREE.NURBSCurve;


THREE.NURBSCurve.prototype.getPoint = function ( t ) {

    var u = this.knots[ this.startKnot ] + t * ( this.knots[ this.endKnot ] - this.knots[ this.startKnot ] ); // linear mapping t->u

    // following results in (wx, wy, wz, w) homogeneous point
    var hpoint = THREE.NURBSUtils.calcBSplinePoint( this.degree, this.knots, this.controlPoints, u );

    if ( hpoint.w != 1.0 ) {

        // project to 3D space: (wx, wy, wz, w) -> (x, y, z, 1)
        hpoint.divideScalar( hpoint.w );

    }

    return new THREE.Vector3( hpoint.x, hpoint.y, hpoint.z );

};


THREE.NURBSCurve.prototype.getTangent = function ( t ) {

    var u = this.knots[ 0 ] + t * ( this.knots[ this.knots.length - 1 ] - this.knots[ 0 ] );
    var ders = THREE.NURBSUtils.calcNURBSDerivatives( this.degree, this.knots, this.controlPoints, u, 1 );
    var tangent = ders[ 1 ].clone();
    tangent.normalize();

    return tangent;

};

THREE.NURBSUtils = {

    /*
    Finds knot vector span.

    p : degree
    u : parametric value
    U : knot vector

    returns the span
    */
    findSpan: function( p,  u,  U ) {

        var n = U.length - p - 1;

        if ( u >= U[ n ] ) {

            return n - 1;

        }

        if ( u <= U[ p ] ) {

            return p;

        }

        var low = p;
        var high = n;
        var mid = Math.floor( ( low + high ) / 2 );

        while ( u < U[ mid ] || u >= U[ mid + 1 ] ) {

            if ( u < U[ mid ] ) {

                high = mid;

            } else {

                low = mid;

            }

            mid = Math.floor( ( low + high ) / 2 );

        }

        return mid;

    },


    /*
    Calculate basis functions. See The NURBS Book, page 70, algorithm A2.2

    span : span in which u lies
    u    : parametric point
    p    : degree
    U    : knot vector

    returns array[p+1] with basis functions values.
    */
    calcBasisFunctions: function( span, u, p, U ) {

        var N = [];
        var left = [];
        var right = [];
        N[ 0 ] = 1.0;

        for ( var j = 1; j <= p; ++ j ) {

            left[ j ] = u - U[ span + 1 - j ];
            right[ j ] = U[ span + j ] - u;

            var saved = 0.0;

            for ( var r = 0; r < j; ++ r ) {

                var rv = right[ r + 1 ];
                var lv = left[ j - r ];
                var temp = N[ r ] / ( rv + lv );
                N[ r ] = saved + rv * temp;
                saved = lv * temp;

            }

            N[ j ] = saved;

        }

        return N;

    },


    /*
    Calculate B-Spline curve points. See The NURBS Book, page 82, algorithm A3.1.

    p : degree of B-Spline
    U : knot vector
    P : control points (x, y, z, w)
    u : parametric point

    returns point for given u
    */
    calcBSplinePoint: function( p, U, P, u ) {

        var span = this.findSpan( p, u, U );
        var N = this.calcBasisFunctions( span, u, p, U );
        var C = new THREE.Vector4( 0, 0, 0, 0 );

        for ( var j = 0; j <= p; ++ j ) {

            var point = P[ span - p + j ];
            var Nj = N[ j ];
            var wNj = point.w * Nj;
            C.x += point.x * wNj;
            C.y += point.y * wNj;
            C.z += point.z * wNj;
            C.w += point.w * Nj;

        }

        return C;

    },


    /*
    Calculate basis functions derivatives. See The NURBS Book, page 72, algorithm A2.3.

    span : span in which u lies
    u    : parametric point
    p    : degree
    n    : number of derivatives to calculate
    U    : knot vector

    returns array[n+1][p+1] with basis functions derivatives
    */
    calcBasisFunctionDerivatives: function( span,  u,  p,  n,  U ) {

        var zeroArr = [];
        for ( var i = 0; i <= p; ++ i )
            zeroArr[ i ] = 0.0;

        var ders = [];
        for ( var i = 0; i <= n; ++ i )
            ders[ i ] = zeroArr.slice( 0 );

        var ndu = [];
        for ( var i = 0; i <= p; ++ i )
            ndu[ i ] = zeroArr.slice( 0 );

        ndu[ 0 ][ 0 ] = 1.0;

        var left = zeroArr.slice( 0 );
        var right = zeroArr.slice( 0 );

        for ( var j = 1; j <= p; ++ j ) {

            left[ j ] = u - U[ span + 1 - j ];
            right[ j ] = U[ span + j ] - u;

            var saved = 0.0;

            for ( var r = 0; r < j; ++ r ) {

                var rv = right[ r + 1 ];
                var lv = left[ j - r ];
                ndu[ j ][ r ] = rv + lv;

                var temp = ndu[ r ][ j - 1 ] / ndu[ j ][ r ];
                ndu[ r ][ j ] = saved + rv * temp;
                saved = lv * temp;

            }

            ndu[ j ][ j ] = saved;

        }

        for ( var j = 0; j <= p; ++ j ) {

            ders[ 0 ][ j ] = ndu[ j ][ p ];

        }

        for ( var r = 0; r <= p; ++ r ) {

            var s1 = 0;
            var s2 = 1;

            var a = [];
            for ( var i = 0; i <= p; ++ i ) {

                a[ i ] = zeroArr.slice( 0 );

            }
            a[ 0 ][ 0 ] = 1.0;

            for ( var k = 1; k <= n; ++ k ) {

                var d = 0.0;
                var rk = r - k;
                var pk = p - k;

                if ( r >= k ) {

                    a[ s2 ][ 0 ] = a[ s1 ][ 0 ] / ndu[ pk + 1 ][ rk ];
                    d = a[ s2 ][ 0 ] * ndu[ rk ][ pk ];

                }

                var j1 = ( rk >= - 1 ) ? 1 : - rk;
                var j2 = ( r - 1 <= pk ) ? k - 1 :  p - r;

                for ( var j = j1; j <= j2; ++ j ) {

                    a[ s2 ][ j ] = ( a[ s1 ][ j ] - a[ s1 ][ j - 1 ] ) / ndu[ pk + 1 ][ rk + j ];
                    d += a[ s2 ][ j ] * ndu[ rk + j ][ pk ];

                }

                if ( r <= pk ) {

                    a[ s2 ][ k ] = - a[ s1 ][ k - 1 ] / ndu[ pk + 1 ][ r ];
                    d += a[ s2 ][ k ] * ndu[ r ][ pk ];

                }

                ders[ k ][ r ] = d;

                var j = s1;
                s1 = s2;
                s2 = j;

            }

        }

        var r = p;

        for ( var k = 1; k <= n; ++ k ) {

            for ( var j = 0; j <= p; ++ j ) {

                ders[ k ][ j ] *= r;

            }
            r *= p - k;

        }

        return ders;

    },


    /*
        Calculate derivatives of a B-Spline. See The NURBS Book, page 93, algorithm A3.2.

        p  : degree
        U  : knot vector
        P  : control points
        u  : Parametric points
        nd : number of derivatives

        returns array[d+1] with derivatives
        */
    calcBSplineDerivatives: function( p,  U,  P,  u,  nd ) {

        var du = nd < p ? nd : p;
        var CK = [];
        var span = this.findSpan( p, u, U );
        var nders = this.calcBasisFunctionDerivatives( span, u, p, du, U );
        var Pw = [];

        for ( var i = 0; i < P.length; ++ i ) {

            var point = P[ i ].clone();
            var w = point.w;

            point.x *= w;
            point.y *= w;
            point.z *= w;

            Pw[ i ] = point;

        }
        for ( var k = 0; k <= du; ++ k ) {

            var point = Pw[ span - p ].clone().multiplyScalar( nders[ k ][ 0 ] );

            for ( var j = 1; j <= p; ++ j ) {

                point.add( Pw[ span - p + j ].clone().multiplyScalar( nders[ k ][ j ] ) );

            }

            CK[ k ] = point;

        }

        for ( var k = du + 1; k <= nd + 1; ++ k ) {

            CK[ k ] = new THREE.Vector4( 0, 0, 0 );

        }

        return CK;

    },


    /*
    Calculate "K over I"

    returns k!/(i!(k-i)!)
    */
    calcKoverI: function( k, i ) {

        var nom = 1;

        for ( var j = 2; j <= k; ++ j ) {

            nom *= j;

        }

        var denom = 1;

        for ( var j = 2; j <= i; ++ j ) {

            denom *= j;

        }

        for ( var j = 2; j <= k - i; ++ j ) {

            denom *= j;

        }

        return nom / denom;

    },


    /*
    Calculate derivatives (0-nd) of rational curve. See The NURBS Book, page 127, algorithm A4.2.

    Pders : result of function calcBSplineDerivatives

    returns array with derivatives for rational curve.
    */
    calcRationalCurveDerivatives: function ( Pders ) {

        var nd = Pders.length;
        var Aders = [];
        var wders = [];

        for ( var i = 0; i < nd; ++ i ) {

            var point = Pders[ i ];
            Aders[ i ] = new THREE.Vector3( point.x, point.y, point.z );
            wders[ i ] = point.w;

        }

        var CK = [];

        for ( var k = 0; k < nd; ++ k ) {

            var v = Aders[ k ].clone();

            for ( var i = 1; i <= k; ++ i ) {

                v.sub( CK[ k - i ].clone().multiplyScalar( this.calcKoverI( k, i ) * wders[ i ] ) );

            }

            CK[ k ] = v.divideScalar( wders[ 0 ] );

        }

        return CK;

    },


    /*
    Calculate NURBS curve derivatives. See The NURBS Book, page 127, algorithm A4.2.

    p  : degree
    U  : knot vector
    P  : control points in homogeneous space
    u  : parametric points
    nd : number of derivatives

    returns array with derivatives.
    */
    calcNURBSDerivatives: function( p,  U,  P,  u,  nd ) {

        var Pders = this.calcBSplineDerivatives( p, U, P, u, nd );
        return this.calcRationalCurveDerivatives( Pders );

    },


    /*
    Calculate rational B-Spline surface point. See The NURBS Book, page 134, algorithm A4.3.

    p1, p2 : degrees of B-Spline surface
    U1, U2 : knot vectors
    P      : control points (x, y, z, w)
    u, v   : parametric values

    returns point for given (u, v)
    */
    calcSurfacePoint: function( p, q, U, V, P, u, v ) {

        var uspan = this.findSpan( p, u, U );
        var vspan = this.findSpan( q, v, V );
        var Nu = this.calcBasisFunctions( uspan, u, p, U );
        var Nv = this.calcBasisFunctions( vspan, v, q, V );
        var temp = [];

        for ( var l = 0; l <= q; ++ l ) {

            temp[ l ] = new THREE.Vector4( 0, 0, 0, 0 );
            for ( var k = 0; k <= p; ++ k ) {

                var point = P[ uspan - p + k ][ vspan - q + l ].clone();
                var w = point.w;
                point.x *= w;
                point.y *= w;
                point.z *= w;
                temp[ l ].add( point.multiplyScalar( Nu[ k ] ) );

            }

        }

        var Sw = new THREE.Vector4( 0, 0, 0, 0 );
        for ( var l = 0; l <= q; ++ l ) {

            Sw.add( temp[ l ].multiplyScalar( Nv[ l ] ) );

        }

        Sw.divideScalar( Sw.w );
        return new THREE.Vector3( Sw.x, Sw.y, Sw.z );

    }

};


( function () {

    THREE.FBXLoader = function ( manager ) {

        this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

    };

    Object.assign( THREE.FBXLoader.prototype, {

        load: function ( url, onLoad, onProgress, onError ) {

            var self = this;

            var resourceDirectory = THREE.Loader.prototype.extractUrlBase( url );

            var loader = new THREE.FileLoader( this.manager );
            loader.setResponseType( 'arraybuffer' );
            loader.load( url, function ( buffer ) {

                try {


                    var scene = self.parse( buffer, resourceDirectory );
                    onLoad( scene );

                } catch ( error ) {

                    window.setTimeout( function () {

                        if ( onError ) onError( error );

                        self.manager.itemError( url );

                    }, 0 );

                }

            }, onProgress, onError );

        },

        parse: function ( FBXBuffer, resourceDirectory ) {

            var FBXTree;

            if ( isFbxFormatBinary( FBXBuffer ) ) {

                FBXTree = new BinaryParser().parse( FBXBuffer );

            } else {

                var FBXText = convertArrayBufferToString( FBXBuffer );

                if ( ! isFbxFormatASCII( FBXText ) ) {

                    throw new Error( 'THREE.FBXLoader: Unknown format.' );

                }

                if ( getFbxVersion( FBXText ) < 7000 ) {

                    throw new Error( 'THREE.FBXLoader: FBX version not supported, FileVersion: ' + getFbxVersion( FBXText ) );

                }

                FBXTree = new TextParser().parse( FBXText );

            }

            // console.log( FBXTree );

            var connections = parseConnections( FBXTree );
            var images = parseImages( FBXTree );
            var textures = parseTextures( FBXTree, new THREE.TextureLoader( this.manager ).setPath( resourceDirectory ), images, connections );
            var materials = parseMaterials( FBXTree, textures, connections );
            var deformers = parseDeformers( FBXTree, connections );
            var geometryMap = parseGeometries( FBXTree, connections, deformers );
            var sceneGraph = parseScene( FBXTree, connections, deformers, geometryMap, materials );

            return sceneGraph;

        }

    } );

    // Parses FBXTree.Connections which holds parent-child connections between objects (e.g. material -> texture, model->geometry )
    // and details the connection type
    function parseConnections( FBXTree ) {

        var connectionMap = new Map();

        if ( 'Connections' in FBXTree ) {

            var connectionArray = FBXTree.Connections.properties.connections;
            for ( var connectionArrayIndex = 0, connectionArrayLength = connectionArray.length; connectionArrayIndex < connectionArrayLength; ++ connectionArrayIndex ) {

                var connection = connectionArray[ connectionArrayIndex ];

                if ( ! connectionMap.has( connection[ 0 ] ) ) {

                    connectionMap.set( connection[ 0 ], {
                        parents: [],
                        children: []
                    } );

                }

                var parentRelationship = { ID: connection[ 1 ], relationship: connection[ 2 ] };
                connectionMap.get( connection[ 0 ] ).parents.push( parentRelationship );

                if ( ! connectionMap.has( connection[ 1 ] ) ) {

                    connectionMap.set( connection[ 1 ], {
                        parents: [],
                        children: []
                    } );

                }

                var childRelationship = { ID: connection[ 0 ], relationship: connection[ 2 ] };
                connectionMap.get( connection[ 1 ] ).children.push( childRelationship );

            }

        }

        return connectionMap;

    }


    // Parses map of images referenced in FBXTree.Objects.subNodes.Video
    // Images can either be referenced externally or embedded in the file
    // These images are connected to textures in FBXTree.Objects.subNodes.Textures
    // via FBXTree.Connections. Note that images can be duplicated here, in which case only one
    // will will have a .Content field
    function parseImages( FBXTree ) {

        var imageMap = new Map();

        if ( 'Video' in FBXTree.Objects.subNodes ) {

            var videoNodes = FBXTree.Objects.subNodes.Video;

            for ( var nodeID in videoNodes ) {

                var videoNode = videoNodes[ nodeID ];

                // raw image data is in videoNode.properties.Content
                if ( 'Content' in videoNode.properties ) {

                    var image = parseImage( videoNodes[ nodeID ] );
                    imageMap.set( parseInt( nodeID ), image );

                }

            }

        }

        return imageMap;

    }

    // Parse embedded image data in FBXTree.Video.properties.Content
    function parseImage( videoNode ) {

        var content = videoNode.properties.Content;
        var fileName = videoNode.properties.RelativeFilename || videoNode.properties.Filename;
        var extension = fileName.slice( fileName.lastIndexOf( '.' ) + 1 ).toLowerCase();

        var type;

        switch ( extension ) {

            case 'bmp':

                type = 'image/bmp';
                break;

            case 'jpg':
            case 'jpeg':

                type = 'image/jpeg';
                break;

            case 'png':

                type = 'image/png';
                break;

            case 'tif':

                type = 'image/tiff';
                break;

            default:

                console.warn( 'FBXLoader: Image type "' + extension + '" is not supported.' );
                return;

        }

        if ( typeof content === 'string' ) {

            return 'data:' + type + ';base64,' + content;

        } else {

            var array = new Uint8Array( content );
            return window.URL.createObjectURL( new Blob( [ array ], { type: type } ) );

        }

    }

    // Parse nodes in FBXTree.Objects.subNodes.Texture
    // These contain details such as UV scaling, cropping, rotation etc and are connected
    // to images in FBXTree.Objects.subNodes.Video
    function parseTextures( FBXTree, loader, imageMap, connections ) {

        var textureMap = new Map();

        if ( 'Texture' in FBXTree.Objects.subNodes ) {

            var textureNodes = FBXTree.Objects.subNodes.Texture;
            for ( var nodeID in textureNodes ) {

                var texture = parseTexture( textureNodes[ nodeID ], loader, imageMap, connections );
                textureMap.set( parseInt( nodeID ), texture );

            }

        }

        return textureMap;

    }

    // Parse individual node in FBXTree.Objects.subNodes.Texture
    function parseTexture( textureNode, loader, imageMap, connections ) {

        var FBX_ID = textureNode.id;

        var name = textureNode.attrName;

        var fileName;

        var filePath = textureNode.properties.FileName;
        var relativeFilePath = textureNode.properties.RelativeFilename;

        var children = connections.get( FBX_ID ).children;

        if ( children !== undefined && children.length > 0 && imageMap.has( children[ 0 ].ID ) ) {

            fileName = imageMap.get( children[ 0 ].ID );

        } else if ( relativeFilePath !== undefined && relativeFilePath[ 0 ] !== '/' && relativeFilePath.match( /^[a-zA-Z]:/ ) === null ) {

            // use textureNode.properties.RelativeFilename
            // if it exists and it doesn't seem an absolute path

            fileName = relativeFilePath;

        } else {

            var split = filePath.split( /[\\\/]/ );

            if ( split.length > 0 ) {

                fileName = split[ split.length - 1 ];

            } else {

                fileName = filePath;

            }

        }

        var currentPath = loader.path;

        if ( fileName.indexOf( 'blob:' ) === 0 || fileName.indexOf( 'data:' ) === 0 ) {

            loader.setPath( undefined );

        }

        var texture = loader.load( fileName );
        texture.name = name;
        texture.FBX_ID = FBX_ID;

        var wrapModeU = textureNode.properties.WrapModeU;
        var wrapModeV = textureNode.properties.WrapModeV;

        var valueU = wrapModeU !== undefined ? wrapModeU.value : 0;
        var valueV = wrapModeV !== undefined ? wrapModeV.value : 0;

        // http://download.autodesk.com/us/fbx/SDKdocs/FBX_SDK_Help/files/fbxsdkref/class_k_fbx_texture.html#889640e63e2e681259ea81061b85143a
        // 0: repeat(default), 1: clamp

        texture.wrapS = valueU === 0 ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
        texture.wrapT = valueV === 0 ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;

        if ( 'Scaling' in textureNode.properties ) {

            var values = textureNode.properties.Scaling.value;

            texture.repeat.x = values[ 0 ];
            texture.repeat.y = values[ 1 ];

        }

        loader.setPath( currentPath );

        return texture;

    }


    // Parse nodes in FBXTree.Objects.subNodes.Material
    function parseMaterials( FBXTree, textureMap, connections ) {

        var materialMap = new Map();

        if ( 'Material' in FBXTree.Objects.subNodes ) {

            var materialNodes = FBXTree.Objects.subNodes.Material;
            for ( var nodeID in materialNodes ) {

                var material = parseMaterial( materialNodes[ nodeID ], textureMap, connections );
                if ( material !== null ) materialMap.set( parseInt( nodeID ), material );

            }

        }

        return materialMap;

    }

    // Parse single node in FBXTree.Objects.subNodes.Material
    // Materials are connected to texture maps in FBXTree.Objects.subNodes.Textures
    // FBX format currently only supports Lambert and Phong shading models
    function parseMaterial( materialNode, textureMap, connections ) {

        var FBX_ID = materialNode.id;
        var name = materialNode.attrName;
        var type = materialNode.properties.ShadingModel;

        //Case where FBX wraps shading model in property object.
        if ( typeof type === 'object' ) {

            type = type.value;

        }

        // Ignore unused materials which don't have any connections.
        if ( ! connections.has( FBX_ID ) ) return null;

        var children = connections.get( FBX_ID ).children;

        var parameters = parseParameters( materialNode.properties, textureMap, children );

        var material;

        switch ( type.toLowerCase() ) {

            case 'phong':
                material = new THREE.MeshPhongMaterial();
                break;
            case 'lambert':
                material = new THREE.MeshLambertMaterial();
                break;
            default:
                console.warn( 'THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.', type );
                material = new THREE.MeshPhongMaterial( { color: 0x3300ff } );
                break;

        }

        material.setValues( parameters );
        material.name = name;

        return material;

    }

    // Parse FBX material and return parameters suitable for a three.js material
    // Also parse the texture map and return any textures associated with the material
    function parseParameters( properties, textureMap, childrenRelationships ) {

        var parameters = {};

        if ( properties.BumpFactor ) {

            parameters.bumpScale = properties.BumpFactor.value;

        }
        if ( properties.Diffuse ) {

            parameters.color = parseColor( properties.Diffuse );

        }
        if ( properties.DisplacementFactor ) {

            parameters.displacementScale = properties.DisplacementFactor.value;

        }
        if ( properties.ReflectionFactor ) {

            parameters.reflectivity = properties.ReflectionFactor.value;

        }
        if ( properties.Specular ) {

            parameters.specular = parseColor( properties.Specular );

        }
        if ( properties.Shininess ) {

            parameters.shininess = properties.Shininess.value;

        }
        if ( properties.Emissive ) {

            parameters.emissive = parseColor( properties.Emissive );

        }
        if ( properties.EmissiveFactor ) {

            parameters.emissiveIntensity = parseFloat( properties.EmissiveFactor.value );

        }
        if ( properties.Opacity ) {

            parameters.opacity = parseFloat( properties.Opacity.value );

        }
        if ( parameters.opacity < 1.0 ) {

            parameters.transparent = true;

        }

        for ( var childrenRelationshipsIndex = 0, childrenRelationshipsLength = childrenRelationships.length; childrenRelationshipsIndex < childrenRelationshipsLength; ++ childrenRelationshipsIndex ) {

            var relationship = childrenRelationships[ childrenRelationshipsIndex ];

            var type = relationship.relationship;

            switch ( type ) {

                case 'Bump':
                    parameters.bumpMap = textureMap.get( relationship.ID );
                    break;

                case 'DiffuseColor':
                    parameters.map = textureMap.get( relationship.ID );
                    break;

                case 'DisplacementColor':
                    parameters.displacementMap = textureMap.get( relationship.ID );
                    break;


                case 'EmissiveColor':
                    parameters.emissiveMap = textureMap.get( relationship.ID );
                    break;

                case 'NormalMap':
                    parameters.normalMap = textureMap.get( relationship.ID );
                    break;

                case 'ReflectionColor':
                    parameters.envMap = textureMap.get( relationship.ID );
                    parameters.envMap.mapping = THREE.EquirectangularReflectionMapping;
                    break;

                case 'SpecularColor':
                    parameters.specularMap = textureMap.get( relationship.ID );
                    break;

                case 'TransparentColor':
                    parameters.alphaMap = textureMap.get( relationship.ID );
                    parameters.transparent = true;
                    break;

                case 'AmbientColor':
                case 'ShininessExponent': // AKA glossiness map
                case 'SpecularFactor': // AKA specularLevel
                case 'VectorDisplacementColor': // NOTE: Seems to be a copy of DisplacementColor
                default:
                    console.warn( 'THREE.FBXLoader: %s map is not supported in three.js, skipping texture.', type );
                    break;

            }

        }

        return parameters;

    }

    // Parse nodes in FBXTree.Objects.subNodes.Deformer
    // Deformer node can contain skinning or Vertex Cache animation data, however only skinning is supported here
    // Generates map of Skeleton-like objects for use later when generating and binding skeletons.
    function parseDeformers( FBXTree, connections ) {

        var deformers = {};

        if ( 'Deformer' in FBXTree.Objects.subNodes ) {

            var DeformerNodes = FBXTree.Objects.subNodes.Deformer;

            for ( var nodeID in DeformerNodes ) {

                var deformerNode = DeformerNodes[ nodeID ];

                if ( deformerNode.attrType === 'Skin' ) {

                    var conns = connections.get( parseInt( nodeID ) );
                    var skeleton = parseSkeleton( conns, DeformerNodes );
                    skeleton.FBX_ID = parseInt( nodeID );

                    deformers[ nodeID ] = skeleton;

                }

            }

        }

        return deformers;

    }

    // Parse single nodes in FBXTree.Objects.subNodes.Deformer
    // Generates a "Skeleton Representation" of FBX nodes based on an FBX Skin Deformer's connections
    // and an object containing SubDeformer nodes.
    function parseSkeleton( connections, DeformerNodes ) {

        var subDeformers = {};
        var children = connections.children;

        for ( var i = 0, l = children.length; i < l; ++ i ) {

            var child = children[ i ];

            var subDeformerNode = DeformerNodes[ child.ID ];

            var subDeformer = {
                FBX_ID: child.ID,
                index: i,
                indices: [],
                weights: [],
                transform: new THREE.Matrix4().fromArray( subDeformerNode.subNodes.Transform.properties.a ),
                transformLink: new THREE.Matrix4().fromArray( subDeformerNode.subNodes.TransformLink.properties.a ),
                linkMode: subDeformerNode.properties.Mode
            };

            if ( 'Indexes' in subDeformerNode.subNodes ) {

                subDeformer.indices = subDeformerNode.subNodes.Indexes.properties.a;
                subDeformer.weights = subDeformerNode.subNodes.Weights.properties.a;

            }

            subDeformers[ child.ID ] = subDeformer;

        }

        return {
            map: subDeformers,
            bones: []
        };

    }

    // Parse nodes in FBXTree.Objects.subNodes.Geometry
    function parseGeometries( FBXTree, connections, deformers ) {

        var geometryMap = new Map();

        if ( 'Geometry' in FBXTree.Objects.subNodes ) {

            var geometryNodes = FBXTree.Objects.subNodes.Geometry;

            for ( var nodeID in geometryNodes ) {

                var relationships = connections.get( parseInt( nodeID ) );
                var geo = parseGeometry( geometryNodes[ nodeID ], relationships, deformers );
                geometryMap.set( parseInt( nodeID ), geo );

            }

        }

        return geometryMap;

    }

    // Parse single node in FBXTree.Objects.subNodes.Geometry
    function parseGeometry( geometryNode, relationships, deformers ) {

        switch ( geometryNode.attrType ) {

            case 'Mesh':
                return parseMeshGeometry( geometryNode, relationships, deformers );
                break;

            case 'NurbsCurve':
                return parseNurbsGeometry( geometryNode );
                break;

        }

    }

    // Parse single node mesh geometry in FBXTree.Objects.subNodes.Geometry
    function parseMeshGeometry( geometryNode, relationships, deformers ) {

        for ( var i = 0; i < relationships.children.length; ++ i ) {

            var deformer = deformers[ relationships.children[ i ].ID ];
            if ( deformer !== undefined ) break;

        }

        return genGeometry( geometryNode, deformer );

    }

    // Generate a THREE.BufferGeometry from a node in FBXTree.Objects.subNodes.Geometry
    function genGeometry( geometryNode, deformer ) {

        var subNodes = geometryNode.subNodes;

        var vertexPositions = subNodes.Vertices.properties.a;
        var vertexIndices = subNodes.PolygonVertexIndex.properties.a;

        // create arrays to hold the final data used to build the buffergeometry
        var vertexBuffer = [];
        var normalBuffer = [];
        var colorsBuffer = [];
        var uvsBuffer = [];
        var materialIndexBuffer = [];
        var vertexWeightsBuffer = [];
        var weightsIndicesBuffer = [];

        if ( subNodes.LayerElementColor ) {

            var colorInfo = getColors( subNodes.LayerElementColor[ 0 ] );

        }

        if ( subNodes.LayerElementMaterial ) {

            var materialInfo = getMaterials( subNodes.LayerElementMaterial[ 0 ] );

        }

        if ( subNodes.LayerElementNormal ) {

            var normalInfo = getNormals( subNodes.LayerElementNormal[ 0 ] );

        }

        if ( subNodes.LayerElementUV ) {

            var uvInfo = [];
            var i = 0;
            while ( subNodes.LayerElementUV[ i ] ) {

                uvInfo.push( getUVs( subNodes.LayerElementUV[ i ] ) );
                i ++;

            }

        }


        var weightTable = {};

        if ( deformer ) {

            var subDeformers = deformer.map;

            for ( var key in subDeformers ) {

                var subDeformer = subDeformers[ key ];
                var indices = subDeformer.indices;

                for ( var j = 0; j < indices.length; j ++ ) {

                    var index = indices[ j ];
                    var weight = subDeformer.weights[ j ];

                    if ( weightTable[ index ] === undefined ) weightTable[ index ] = [];

                    weightTable[ index ].push( {
                        id: subDeformer.index,
                        weight: weight
                    } );

                }

            }

        }

        var polygonIndex = 0;
        var faceLength = 0;
        var displayedWeightsWarning = false;

        // these will hold data for a single face
        var vertexPositionIndexes = [];
        var faceNormals = [];
        var faceColors = [];
        var faceUVs = [];
        var faceWeights = [];
        var faceWeightIndices = [];

        for ( var polygonVertexIndex = 0; polygonVertexIndex < vertexIndices.length; polygonVertexIndex ++ ) {

            var vertexIndex = vertexIndices[ polygonVertexIndex ];

            var endOfFace = false;

            // Face index and vertex index arrays are combined in a single array
            // A cube with quad faces looks like this:
            // PolygonVertexIndex: *24 {
            //  a: 0, 1, 3, -3, 2, 3, 5, -5, 4, 5, 7, -7, 6, 7, 1, -1, 1, 7, 5, -4, 6, 0, 2, -5
            //  }
            // Negative numbers mark the end of a face - first face here is 0, 1, 3, -3
            // to find index of last vertex multiply by -1 and subtract 1: -3 * - 1 - 1 = 2
            if ( vertexIndex < 0 ) {

                vertexIndex = vertexIndex ^ - 1; // equivalent to ( x * -1 ) - 1
                vertexIndices[ polygonVertexIndex ] = vertexIndex;
                endOfFace = true;

            }

            var weightIndices = [];
            var weights = [];

            vertexPositionIndexes.push( vertexIndex * 3, vertexIndex * 3 + 1, vertexIndex * 3 + 2 );

            if ( colorInfo ) {

                var data = getData( polygonVertexIndex, polygonIndex, vertexIndex, colorInfo );

                faceColors.push( data[ 0 ], data[ 1 ], data[ 2 ] );

            }

            if ( deformer ) {

                if ( weightTable[ vertexIndex ] !== undefined ) {

                    var array = weightTable[ vertexIndex ];

                    for ( var j = 0, jl = array.length; j < jl; j ++ ) {

                        weights.push( array[ j ].weight );
                        weightIndices.push( array[ j ].id );

                    }

                }

                if ( weights.length > 4 ) {

                    if ( ! displayedWeightsWarning ) {

                        console.warn( 'THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights.' );
                        displayedWeightsWarning = true;

                    }

                    var WIndex = [ 0, 0, 0, 0 ];
                    var Weight = [ 0, 0, 0, 0 ];

                    weights.forEach( function ( weight, weightIndex ) {

                        var currentWeight = weight;
                        var currentIndex = weightIndices[ weightIndex ];

                        Weight.forEach( function ( comparedWeight, comparedWeightIndex, comparedWeightArray ) {

                            if ( currentWeight > comparedWeight ) {

                                comparedWeightArray[ comparedWeightIndex ] = currentWeight;
                                currentWeight = comparedWeight;

                                var tmp = WIndex[ comparedWeightIndex ];
                                WIndex[ comparedWeightIndex ] = currentIndex;
                                currentIndex = tmp;

                            }

                        } );

                    } );

                    weightIndices = WIndex;
                    weights = Weight;

                }

                // if the weight array is shorter than 4 pad with 0s
                for ( var i = weights.length; i < 4; ++ i ) {

                    weights[ i ] = 0;
                    weightIndices[ i ] = 0;

                }

                for ( var i = 0; i < 4; ++ i ) {

                    faceWeights.push( weights[ i ] );
                    faceWeightIndices.push( weightIndices[ i ] );

                }

            }

            if ( normalInfo ) {

                var data = getData( polygonVertexIndex, polygonIndex, vertexIndex, normalInfo );

                faceNormals.push( data[ 0 ], data[ 1 ], data[ 2 ] );

            }

            if ( uvInfo ) {

                for ( var i = 0; i < uvInfo.length; i ++ ) {

                    var data = getData( polygonVertexIndex, polygonIndex, vertexIndex, uvInfo[ i ] );

                    if ( faceUVs[ i ] === undefined ) {

                        faceUVs[ i ] = [];

                    }

                    faceUVs[ i ].push(
                        data[ 0 ],
                        data[ 1 ]
                    );

                }

            }

            faceLength ++;

            // we have reached the end of a face - it may have 4 sides though
            // in which case the data is split into to represent 3 sides faces
            if ( endOfFace ) {

                for ( var i = 2; i < faceLength; i ++ ) {

                    vertexBuffer.push( vertexPositions[ vertexPositionIndexes[ 0 ] ] );
                    vertexBuffer.push( vertexPositions[ vertexPositionIndexes[ 1 ] ] );
                    vertexBuffer.push( vertexPositions[ vertexPositionIndexes[ 2 ] ] );

                    vertexBuffer.push( vertexPositions[ vertexPositionIndexes[ ( i - 1 ) * 3 ] ] );
                    vertexBuffer.push( vertexPositions[ vertexPositionIndexes[ ( i - 1 ) * 3 + 1 ] ] );
                    vertexBuffer.push( vertexPositions[ vertexPositionIndexes[ ( i - 1 ) * 3 + 2 ] ] );

                    vertexBuffer.push( vertexPositions[ vertexPositionIndexes[ i * 3 ] ] );
                    vertexBuffer.push( vertexPositions[ vertexPositionIndexes[ i * 3 + 1 ] ] );
                    vertexBuffer.push( vertexPositions[ vertexPositionIndexes[ i * 3 + 2 ] ] );

                }

                if ( deformer ) {

                    for ( var i = 2; i < faceLength; i ++ ) {

                        vertexWeightsBuffer.push( faceWeights[ 0 ] );
                        vertexWeightsBuffer.push( faceWeights[ 1 ] );
                        vertexWeightsBuffer.push( faceWeights[ 2 ] );
                        vertexWeightsBuffer.push( faceWeights[ 3 ] );

                        vertexWeightsBuffer.push( faceWeights[ ( i - 1 ) * 4 ] );
                        vertexWeightsBuffer.push( faceWeights[ ( i - 1 ) * 4 + 1 ] );
                        vertexWeightsBuffer.push( faceWeights[ ( i - 1 ) * 4 + 2 ] );
                        vertexWeightsBuffer.push( faceWeights[ ( i - 1 ) * 4 + 3 ] );

                        vertexWeightsBuffer.push( faceWeights[ i * 4 ] );
                        vertexWeightsBuffer.push( faceWeights[ i * 4 + 1 ] );
                        vertexWeightsBuffer.push( faceWeights[ i * 4 + 2 ] );
                        vertexWeightsBuffer.push( faceWeights[ i * 4 + 3 ] );

                        weightsIndicesBuffer.push( faceWeightIndices[ 0 ] );
                        weightsIndicesBuffer.push( faceWeightIndices[ 1 ] );
                        weightsIndicesBuffer.push( faceWeightIndices[ 2 ] );
                        weightsIndicesBuffer.push( faceWeightIndices[ 3 ] );

                        weightsIndicesBuffer.push( faceWeightIndices[ ( i - 1 ) * 4 ] );
                        weightsIndicesBuffer.push( faceWeightIndices[ ( i - 1 ) * 4 + 1 ] );
                        weightsIndicesBuffer.push( faceWeightIndices[ ( i - 1 ) * 4 + 2 ] );
                        weightsIndicesBuffer.push( faceWeightIndices[ ( i - 1 ) * 4 + 3 ] );

                        weightsIndicesBuffer.push( faceWeightIndices[ i * 4 ] );
                        weightsIndicesBuffer.push( faceWeightIndices[ i * 4 + 1 ] );
                        weightsIndicesBuffer.push( faceWeightIndices[ i * 4 + 2 ] );
                        weightsIndicesBuffer.push( faceWeightIndices[ i * 4 + 3 ] );

                    }

                }

                if ( normalInfo ) {

                    for ( var i = 2; i < faceLength; i ++ ) {

                        normalBuffer.push( faceNormals[ 0 ] );
                        normalBuffer.push( faceNormals[ 1 ] );
                        normalBuffer.push( faceNormals[ 2 ] );

                        normalBuffer.push( faceNormals[ ( i - 1 ) * 3 ] );
                        normalBuffer.push( faceNormals[ ( i - 1 ) * 3 + 1 ] );
                        normalBuffer.push( faceNormals[ ( i - 1 ) * 3 + 2 ] );

                        normalBuffer.push( faceNormals[ i * 3 ] );
                        normalBuffer.push( faceNormals[ i * 3 + 1 ] );
                        normalBuffer.push( faceNormals[ i * 3 + 2 ] );

                    }

                }

                if ( uvInfo ) {

                    for ( var j = 0; j < uvInfo.length; j ++ ) {

                        if ( uvsBuffer[ j ] === undefined ) uvsBuffer[ j ] = [];

                        for ( var i = 2; i < faceLength; i ++ ) {

                            uvsBuffer[ j ].push( faceUVs[ j ][ 0 ] );
                            uvsBuffer[ j ].push( faceUVs[ j ][ 1 ] );

                            uvsBuffer[ j ].push( faceUVs[ j ][ ( i - 1 ) * 2 ] );
                            uvsBuffer[ j ].push( faceUVs[ j ][ ( i - 1 ) * 2 + 1 ] );

                            uvsBuffer[ j ].push( faceUVs[ j ][ i * 2 ] );
                            uvsBuffer[ j ].push( faceUVs[ j ][ i * 2 + 1 ] );

                        }

                    }

                }

                if ( colorInfo ) {

                    for ( var i = 2; i < faceLength; i ++ ) {


                        colorsBuffer.push( faceColors[ 0 ] );
                        colorsBuffer.push( faceColors[ 1 ] );
                        colorsBuffer.push( faceColors[ 2 ] );

                        colorsBuffer.push( faceColors[ ( i - 1 ) * 3 ] );
                        colorsBuffer.push( faceColors[ ( i - 1 ) * 3 + 1 ] );
                        colorsBuffer.push( faceColors[ ( i - 1 ) * 3 + 2 ] );

                        colorsBuffer.push( faceColors[ i * 3 ] );
                        colorsBuffer.push( faceColors[ i * 3 + 1 ] );
                        colorsBuffer.push( faceColors[ i * 3 + 2 ] );

                    }

                }

                if ( materialInfo && materialInfo.mappingType !== 'AllSame' ) {

                    var materialIndex = getData( polygonVertexIndex, polygonIndex, vertexIndex, materialInfo )[ 0 ];

                    for ( var i = 2; i < faceLength; i ++ ) {

                        materialIndexBuffer.push( materialIndex );
                        materialIndexBuffer.push( materialIndex );
                        materialIndexBuffer.push( materialIndex );

                    }

                }

                polygonIndex ++;

                endOfFace = false;
                faceLength = 0;

                // reset arrays for the next face
                vertexPositionIndexes = [];
                faceNormals = [];
                faceColors = [];
                faceUVs = [];
                faceWeights = [];
                faceWeightIndices = [];

            }

        }

        var geo = new THREE.BufferGeometry();
        geo.name = geometryNode.name;

        geo.addAttribute( 'position', new THREE.Float32BufferAttribute( vertexBuffer, 3 ) );

        if ( colorsBuffer.length > 0 ) {

            geo.addAttribute( 'color', new THREE.Float32BufferAttribute( colorsBuffer, 3 ) );

        }

        if ( deformer ) {

            geo.addAttribute( 'skinIndex', new THREE.Float32BufferAttribute( weightsIndicesBuffer, 4 ) );

            geo.addAttribute( 'skinWeight', new THREE.Float32BufferAttribute( vertexWeightsBuffer, 4 ) );

            // used later to bind the skeleton to the model
            geo.FBX_Deformer = deformer;

        }

        if ( normalBuffer.length > 0 ) {

            geo.addAttribute( 'normal', new THREE.Float32BufferAttribute( normalBuffer, 3 ) );

        }
        if ( uvsBuffer.length > 0 ) {

            for ( var i = 0; i < uvsBuffer.length; i ++ ) {

                var name = 'uv' + ( i + 1 ).toString();
                if ( i == 0 ) {

                    name = 'uv';

                }

                geo.addAttribute( name, new THREE.Float32BufferAttribute( uvsBuffer[ i ], 2 ) );

            }

        }

        if ( materialInfo && materialInfo.mappingType !== 'AllSame' ) {

            // Convert the material indices of each vertex into rendering groups on the geometry.
            var prevMaterialIndex = materialIndexBuffer[ 0 ];
            var startIndex = 0;

            for ( var i = 0; i < materialIndexBuffer.length; ++ i ) {

                if ( materialIndexBuffer[ i ] !== prevMaterialIndex ) {

                    geo.addGroup( startIndex, i - startIndex, prevMaterialIndex );

                    prevMaterialIndex = materialIndexBuffer[ i ];
                    startIndex = i;

                }

            }

            // the loop above doesn't add the last group, do that here.
            if ( geo.groups.length > 0 ) {

                var lastGroup = geo.groups[ geo.groups.length - 1 ];
                var lastIndex = lastGroup.start + lastGroup.count;

                if ( lastIndex !== materialIndexBuffer.length ) {

                    geo.addGroup( lastIndex, materialIndexBuffer.length - lastIndex, prevMaterialIndex );

                }

            }

            // case where there are multiple materials but the whole geometry is only
            // using one of them
            if ( geo.groups.length === 0 ) {

                geo.addGroup( 0, materialIndexBuffer.length, materialIndexBuffer[ 0 ] );

            }

        }

        return geo;

    }

    // Parse normal from FBXTree.Objects.subNodes.Geometry.subNodes.LayerElementNormal if it exists
    function getNormals( NormalNode ) {

        var mappingType = NormalNode.properties.MappingInformationType;
        var referenceType = NormalNode.properties.ReferenceInformationType;
        var buffer = NormalNode.subNodes.Normals.properties.a;
        var indexBuffer = [];
        if ( referenceType === 'IndexToDirect' ) {

            if ( 'NormalIndex' in NormalNode.subNodes ) {

                indexBuffer = NormalNode.subNodes.NormalIndex.properties.a;

            } else if ( 'NormalsIndex' in NormalNode.subNodes ) {

                indexBuffer = NormalNode.subNodes.NormalsIndex.properties.a;

            }

        }

        return {
            dataSize: 3,
            buffer: buffer,
            indices: indexBuffer,
            mappingType: mappingType,
            referenceType: referenceType
        };

    }

    // Parse UVs from FBXTree.Objects.subNodes.Geometry.subNodes.LayerElementUV if it exists
    function getUVs( UVNode ) {

        var mappingType = UVNode.properties.MappingInformationType;
        var referenceType = UVNode.properties.ReferenceInformationType;
        var buffer = UVNode.subNodes.UV.properties.a;
        var indexBuffer = [];
        if ( referenceType === 'IndexToDirect' ) {

            indexBuffer = UVNode.subNodes.UVIndex.properties.a;

        }

        return {
            dataSize: 2,
            buffer: buffer,
            indices: indexBuffer,
            mappingType: mappingType,
            referenceType: referenceType
        };

    }

    // Parse Vertex Colors from FBXTree.Objects.subNodes.Geometry.subNodes.LayerElementColor if it exists
    function getColors( ColorNode ) {

        var mappingType = ColorNode.properties.MappingInformationType;
        var referenceType = ColorNode.properties.ReferenceInformationType;
        var buffer = ColorNode.subNodes.Colors.properties.a;
        var indexBuffer = [];
        if ( referenceType === 'IndexToDirect' ) {

            indexBuffer = ColorNode.subNodes.ColorIndex.properties.a;

        }

        return {
            dataSize: 4,
            buffer: buffer,
            indices: indexBuffer,
            mappingType: mappingType,
            referenceType: referenceType
        };

    }

    // Parse mapping and material data in FBXTree.Objects.subNodes.Geometry.subNodes.LayerElementMaterial if it exists
    function getMaterials( MaterialNode ) {

        var mappingType = MaterialNode.properties.MappingInformationType;
        var referenceType = MaterialNode.properties.ReferenceInformationType;

        if ( mappingType === 'NoMappingInformation' ) {

            return {
                dataSize: 1,
                buffer: [ 0 ],
                indices: [ 0 ],
                mappingType: 'AllSame',
                referenceType: referenceType
            };

        }

        var materialIndexBuffer = MaterialNode.subNodes.Materials.properties.a;

        // Since materials are stored as indices, there's a bit of a mismatch between FBX and what
        // we expect.So we create an intermediate buffer that points to the index in the buffer,
        // for conforming with the other functions we've written for other data.
        var materialIndices = [];

        for ( var materialIndexBufferIndex = 0, materialIndexBufferLength = materialIndexBuffer.length; materialIndexBufferIndex < materialIndexBufferLength; ++ materialIndexBufferIndex ) {

            materialIndices.push( materialIndexBufferIndex );

        }

        return {
            dataSize: 1,
            buffer: materialIndexBuffer,
            indices: materialIndices,
            mappingType: mappingType,
            referenceType: referenceType
        };

    }

    // Functions use the infoObject and given indices to return value array of geometry.
    // infoObject can be materialInfo, normalInfo, UVInfo or colorInfo
    // polygonVertexIndex - Index of vertex in draw order (which index of the index buffer refers to this vertex).
    // polygonIndex - Index of polygon in geometry.
    // vertexIndex - Index of vertex inside vertex buffer (used because some data refers to old index buffer that we don't use anymore).
    var dataArray = [];

    var GetData = {

        ByPolygonVertex: {

            Direct: function ( polygonVertexIndex, polygonIndex, vertexIndex, infoObject ) {

                var from = ( polygonVertexIndex * infoObject.dataSize );
                var to = ( polygonVertexIndex * infoObject.dataSize ) + infoObject.dataSize;

                // return infoObject.buffer.slice( from, to );
                return slice( dataArray, infoObject.buffer, from, to );

            },

            IndexToDirect: function ( polygonVertexIndex, polygonIndex, vertexIndex, infoObject ) {

                var index = infoObject.indices[ polygonVertexIndex ];
                var from = ( index * infoObject.dataSize );
                var to = ( index * infoObject.dataSize ) + infoObject.dataSize;

                // return infoObject.buffer.slice( from, to );
                return slice( dataArray, infoObject.buffer, from, to );

            }

        },

        ByPolygon: {

            Direct: function ( polygonVertexIndex, polygonIndex, vertexIndex, infoObject ) {

                var from = polygonIndex * infoObject.dataSize;
                var to = polygonIndex * infoObject.dataSize + infoObject.dataSize;

                // return infoObject.buffer.slice( from, to );
                return slice( dataArray, infoObject.buffer, from, to );

            },

            IndexToDirect: function ( polygonVertexIndex, polygonIndex, vertexIndex, infoObject ) {

                var index = infoObject.indices[ polygonIndex ];
                var from = index * infoObject.dataSize;
                var to = index * infoObject.dataSize + infoObject.dataSize;

                // return infoObject.buffer.slice( from, to );
                return slice( dataArray, infoObject.buffer, from, to );

            }

        },

        ByVertice: {

            Direct: function ( polygonVertexIndex, polygonIndex, vertexIndex, infoObject ) {

                var from = ( vertexIndex * infoObject.dataSize );
                var to = ( vertexIndex * infoObject.dataSize ) + infoObject.dataSize;

                // return infoObject.buffer.slice( from, to );
                return slice( dataArray, infoObject.buffer, from, to );

            }

        },

        AllSame: {

            IndexToDirect: function ( polygonVertexIndex, polygonIndex, vertexIndex, infoObject ) {

                var from = infoObject.indices[ 0 ] * infoObject.dataSize;
                var to = infoObject.indices[ 0 ] * infoObject.dataSize + infoObject.dataSize;

                // return infoObject.buffer.slice( from, to );
                return slice( dataArray, infoObject.buffer, from, to );

            }

        }

    };

    function getData( polygonVertexIndex, polygonIndex, vertexIndex, infoObject ) {

        return GetData[ infoObject.mappingType ][ infoObject.referenceType ]( polygonVertexIndex, polygonIndex, vertexIndex, infoObject );

    }

    // Generate a NurbGeometry from a node in FBXTree.Objects.subNodes.Geometry
    function parseNurbsGeometry( geometryNode ) {

        if ( THREE.NURBSCurve === undefined ) {

            console.error( 'THREE.FBXLoader: The loader relies on THREE.NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry.' );
            return new THREE.BufferGeometry();

        }

        var order = parseInt( geometryNode.properties.Order );

        if ( isNaN( order ) ) {

            console.error( 'THREE.FBXLoader: Invalid Order %s given for geometry ID: %s', geometryNode.properties.Order, geometryNode.id );
            return new THREE.BufferGeometry();

        }

        var degree = order - 1;

        var knots = geometryNode.subNodes.KnotVector.properties.a;
        var controlPoints = [];
        var pointsValues = geometryNode.subNodes.Points.properties.a;

        for ( var i = 0, l = pointsValues.length; i < l; i += 4 ) {

            controlPoints.push( new THREE.Vector4().fromArray( pointsValues, i ) );

        }

        var startKnot, endKnot;

        if ( geometryNode.properties.Form === 'Closed' ) {

            controlPoints.push( controlPoints[ 0 ] );

        } else if ( geometryNode.properties.Form === 'Periodic' ) {

            startKnot = degree;
            endKnot = knots.length - 1 - startKnot;

            for ( var i = 0; i < degree; ++ i ) {

                controlPoints.push( controlPoints[ i ] );

            }

        }

        var curve = new THREE.NURBSCurve( degree, knots, controlPoints, startKnot, endKnot );
        var vertices = curve.getPoints( controlPoints.length * 7 );

        var positions = new Float32Array( vertices.length * 3 );

        for ( var i = 0, l = vertices.length; i < l; ++ i ) {

            vertices[ i ].toArray( positions, i * 3 );

        }

        var geometry = new THREE.BufferGeometry();
        geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );

        return geometry;

    }


    // parse nodes in FBXTree.Objects.subNodes.Model and generate a THREE.Group
    function parseScene( FBXTree, connections, deformers, geometryMap, materialMap ) {

        var sceneGraph = new THREE.Group();

        var ModelNode = FBXTree.Objects.subNodes.Model;

        var modelArray = [];

        var modelMap = new Map();

        for ( var nodeID in ModelNode ) {

            var id = parseInt( nodeID );
            var node = ModelNode[ nodeID ];
            var conns = connections.get( id );
            var model = null;

            for ( var i = 0; i < conns.parents.length; ++ i ) {

                for ( var FBX_ID in deformers ) {

                    var deformer = deformers[ FBX_ID ];
                    var subDeformers = deformer.map;
                    var subDeformer = subDeformers[ conns.parents[ i ].ID ];

                    if ( subDeformer ) {

                        var model2 = model;
                        model = new THREE.Bone();
                        deformer.bones[ subDeformer.index ] = model;

                        // seems like we need this not to make non-connected bone, maybe?
                        // TODO: confirm
                        if ( model2 !== null ) model.add( model2 );

                    }

                }

            }

            if ( ! model ) {

                switch ( node.attrType ) {

                    // create a THREE.PerspectiveCamera or THREE.OrthographicCamera
                    case 'Camera':

                        var cameraAttribute;

                        for ( var childrenIndex = 0, childrenLength = conns.children.length; childrenIndex < childrenLength; ++ childrenIndex ) {

                            var childID = conns.children[ childrenIndex ].ID;

                            var attr = FBXTree.Objects.subNodes.NodeAttribute[ childID ];

                            if ( attr !== undefined && attr.properties !== undefined ) {

                                cameraAttribute = attr.properties;

                            }

                        }

                        if ( cameraAttribute === undefined ) {

                            model = new THREE.Object3D();

                        } else {

                            var type = 0;
                            if ( cameraAttribute.CameraProjectionType !== undefined && cameraAttribute.CameraProjectionType.value === 1 ) {

                                type = 1;

                            }

                            var nearClippingPlane = 1;
                            if ( cameraAttribute.NearPlane !== undefined ) {

                                nearClippingPlane = cameraAttribute.NearPlane.value / 1000;

                            }

                            var farClippingPlane = 1000;
                            if ( cameraAttribute.FarPlane !== undefined ) {

                                farClippingPlane = cameraAttribute.FarPlane.value / 1000;

                            }


                            var width = window.innerWidth;
                            var height = window.innerHeight;

                            if ( cameraAttribute.AspectWidth !== undefined && cameraAttribute.AspectHeight !== undefined ) {

                                width = cameraAttribute.AspectWidth.value;
                                height = cameraAttribute.AspectHeight.value;

                            }

                            var aspect = width / height;

                            var fov = 45;
                            if ( cameraAttribute.FieldOfView !== undefined ) {

                                fov = cameraAttribute.FieldOfView.value;

                            }

                            switch ( type ) {

                                case 0: // Perspective
                                    model = new THREE.PerspectiveCamera( fov, aspect, nearClippingPlane, farClippingPlane );
                                    break;

                                case 1: // Orthographic
                                    model = new THREE.OrthographicCamera( - width / 2, width / 2, height / 2, - height / 2, nearClippingPlane, farClippingPlane );
                                    break;

                                default:
                                    console.warn( 'THREE.FBXLoader: Unknown camera type ' + type + '.' );
                                    model = new THREE.Object3D();
                                    break;

                            }

                        }

                        break;


                    // Create a THREE.DirectionalLight, THREE.PointLight or THREE.SpotLight
                    case 'Light':

                        var lightAttribute;

                        for ( var childrenIndex = 0, childrenLength = conns.children.length; childrenIndex < childrenLength; ++ childrenIndex ) {

                            var childID = conns.children[ childrenIndex ].ID;

                            var attr = FBXTree.Objects.subNodes.NodeAttribute[ childID ];

                            if ( attr !== undefined && attr.properties !== undefined ) {

                                lightAttribute = attr.properties;

                            }

                        }

                        if ( lightAttribute === undefined ) {

                            model = new THREE.Object3D();

                        } else {

                            var type;

                            // LightType can be undefined for Point lights
                            if ( lightAttribute.LightType === undefined ) {

                                type = 0;

                            } else {

                                type = lightAttribute.LightType.value;

                            }

                            var color = 0xffffff;

                            if ( lightAttribute.Color !== undefined ) {

                                color = parseColor( lightAttribute.Color.value );

                            }

                            var intensity = ( lightAttribute.Intensity === undefined ) ? 1 : lightAttribute.Intensity.value / 100;

                            // light disabled
                            if ( lightAttribute.CastLightOnObject !== undefined && lightAttribute.CastLightOnObject.value === 0 ) {

                                intensity = 0;

                            }

                            var distance = 0;
                            if ( lightAttribute.FarAttenuationEnd !== undefined ) {

                                if ( lightAttribute.EnableFarAttenuation !== undefined && lightAttribute.EnableFarAttenuation.value === 0 ) {

                                    distance = 0;

                                } else {

                                    distance = lightAttribute.FarAttenuationEnd.value / 1000;

                                }

                            }

                            // TODO: could this be calculated linearly from FarAttenuationStart to FarAttenuationEnd?
                            var decay = 1;

                            switch ( type ) {

                                case 0: // Point
                                    model = new THREE.PointLight( color, intensity, distance, decay );
                                    break;

                                case 1: // Directional
                                    model = new THREE.DirectionalLight( color, intensity );
                                    break;

                                case 2: // Spot
                                    var angle = Math.PI / 3;

                                    if ( lightAttribute.InnerAngle !== undefined ) {

                                        angle = THREE.Math.degToRad( lightAttribute.InnerAngle.value );

                                    }

                                    var penumbra = 0;
                                    if ( lightAttribute.OuterAngle !== undefined ) {

                                        // TODO: this is not correct - FBX calculates outer and inner angle in degrees
                                        // with OuterAngle > InnerAngle && OuterAngle <= Math.PI
                                        // while three.js uses a penumbra between (0, 1) to attenuate the inner angle
                                        penumbra = THREE.Math.degToRad( lightAttribute.OuterAngle.value );
                                        penumbra = Math.max( penumbra, 1 );

                                    }

                                    model = new THREE.SpotLight( color, intensity, distance, angle, penumbra, decay );
                                    break;

                                default:
                                    console.warn( 'THREE.FBXLoader: Unknown light type ' + lightAttribute.LightType.value + ', defaulting to a THREE.PointLight.' );
                                    model = new THREE.PointLight( color, intensity );
                                    break;

                            }

                            if ( lightAttribute.CastShadows !== undefined && lightAttribute.CastShadows.value === 1 ) {

                                model.castShadow = true;

                            }

                        }

                        break;

                    case 'Mesh':

                        var geometry = null;
                        var material = null;
                        var materials = [];

                        for ( var childrenIndex = 0, childrenLength = conns.children.length; childrenIndex < childrenLength; ++ childrenIndex ) {

                            var child = conns.children[ childrenIndex ];

                            if ( geometryMap.has( child.ID ) ) {

                                geometry = geometryMap.get( child.ID );

                            }

                            if ( materialMap.has( child.ID ) ) {

                                materials.push( materialMap.get( child.ID ) );

                            }

                        }
                        if ( materials.length > 1 ) {

                            material = materials;

                        } else if ( materials.length > 0 ) {

                            material = materials[ 0 ];

                        } else {

                            material = new THREE.MeshPhongMaterial( { color: 0xcccccc } );
                            materials.push( material );

                        }
                        if ( 'color' in geometry.attributes ) {

                            for ( var materialIndex = 0, numMaterials = materials.length; materialIndex < numMaterials; ++ materialIndex ) {

                                materials[ materialIndex ].vertexColors = THREE.VertexColors;

                            }

                        }
                        if ( geometry.FBX_Deformer ) {

                            for ( var materialsIndex = 0, materialsLength = materials.length; materialsIndex < materialsLength; ++ materialsIndex ) {

                                materials[ materialsIndex ].skinning = true;

                            }
                            model = new THREE.SkinnedMesh( geometry, material );

                        } else {

                            model = new THREE.Mesh( geometry, material );

                        }
                        break;

                    case 'NurbsCurve':
                        var geometry = null;

                        for ( var childrenIndex = 0, childrenLength = conns.children.length; childrenIndex < childrenLength; ++ childrenIndex ) {

                            var child = conns.children[ childrenIndex ];

                            if ( geometryMap.has( child.ID ) ) {

                                geometry = geometryMap.get( child.ID );

                            }

                        }

                        // FBX does not list materials for Nurbs lines, so we'll just put our own in here.
                        material = new THREE.LineBasicMaterial( { color: 0x3300ff, linewidth: 5 } );
                        model = new THREE.Line( geometry, material );
                        break;

                    default:
                        model = new THREE.Group();
                        break;

                }

            }

            model.name = THREE.PropertyBinding.sanitizeNodeName( node.attrName );
            model.FBX_ID = id;

            modelArray.push( model );
            modelMap.set( id, model );

        }

        for ( var modelArrayIndex = 0, modelArrayLength = modelArray.length; modelArrayIndex < modelArrayLength; ++ modelArrayIndex ) {

            var model = modelArray[ modelArrayIndex ];

            var node = ModelNode[ model.FBX_ID ];

            if ( 'Lcl_Translation' in node.properties ) {

                model.position.fromArray( node.properties.Lcl_Translation.value );

            }

            if ( 'Lcl_Rotation' in node.properties ) {

                var rotation = node.properties.Lcl_Rotation.value.map( THREE.Math.degToRad );
                rotation.push( 'ZYX' );
                model.rotation.fromArray( rotation );

            }

            if ( 'Lcl_Scaling' in node.properties ) {

                model.scale.fromArray( node.properties.Lcl_Scaling.value );

            }

            if ( 'PreRotation' in node.properties ) {

                var array = node.properties.PreRotation.value.map( THREE.Math.degToRad );
                array[ 3 ] = 'ZYX';

                var preRotations = new THREE.Euler().fromArray( array );

                preRotations = new THREE.Quaternion().setFromEuler( preRotations );
                var currentRotation = new THREE.Quaternion().setFromEuler( model.rotation );
                preRotations.multiply( currentRotation );
                model.rotation.setFromQuaternion( preRotations, 'ZYX' );

            }

            // allow transformed pivots - see https://github.com/mrdoob/three.js/issues/11895
            if ( 'GeometricTranslation' in node.properties ) {

                var array = node.properties.GeometricTranslation.value;

                model.traverse( function ( child ) {

                    if ( child.geometry ) {

                        child.geometry.translate( array[ 0 ], array[ 1 ], array[ 2 ] );

                    }

                } );

            }

            if ( 'LookAtProperty' in node.properties ) {

                var conns = connections.get( model.FBX_ID );

                for ( var childrenIndex = 0, childrenLength = conns.children.length; childrenIndex < childrenLength; ++ childrenIndex ) {

                    var child = conns.children[ childrenIndex ];

                    if ( child.relationship === 'LookAtProperty' ) {

                        var lookAtTarget = FBXTree.Objects.subNodes.Model[ child.ID ];

                        if ( 'Lcl_Translation' in lookAtTarget.properties ) {

                            var pos = lookAtTarget.properties.Lcl_Translation.value;

                            // DirectionalLight, SpotLight
                            if ( model.target !== undefined ) {

                                model.target.position.set( pos[ 0 ], pos[ 1 ], pos[ 2 ] );
                                sceneGraph.add( model.target );


                            } else { // Cameras and other Object3Ds

                                model.lookAt( new THREE.Vector3( pos[ 0 ], pos[ 1 ], pos[ 2 ] ) );

                            }

                        }

                    }

                }

            }

            var conns = connections.get( model.FBX_ID );
            for ( var parentIndex = 0; parentIndex < conns.parents.length; parentIndex ++ ) {

                var pIndex = findIndex( modelArray, function ( mod ) {

                    return mod.FBX_ID === conns.parents[ parentIndex ].ID;

                } );
                if ( pIndex > - 1 ) {

                    modelArray[ pIndex ].add( model );
                    break;

                }

            }
            if ( model.parent === null ) {

                sceneGraph.add( model );

            }

        }


        // Now with the bones created, we can update the skeletons and bind them to the skinned meshes.
        sceneGraph.updateMatrixWorld( true );

        var worldMatrices = new Map();

        // Put skeleton into bind pose.
        if ( 'Pose' in FBXTree.Objects.subNodes ) {

            var BindPoseNode = FBXTree.Objects.subNodes.Pose;
            for ( var nodeID in BindPoseNode ) {

                if ( BindPoseNode[ nodeID ].attrType === 'BindPose' ) {

                    BindPoseNode = BindPoseNode[ nodeID ];
                    break;

                }

            }

            var PoseNode = BindPoseNode.subNodes.PoseNode;

            for ( var PoseNodeIndex = 0, PoseNodeLength = PoseNode.length; PoseNodeIndex < PoseNodeLength; ++ PoseNodeIndex ) {

                var node = PoseNode[ PoseNodeIndex ];

                var rawMatWrd = new THREE.Matrix4().fromArray( node.subNodes.Matrix.properties.a );

                worldMatrices.set( parseInt( node.properties.Node ), rawMatWrd );

            }

        }

        for ( var FBX_ID in deformers ) {

            var deformer = deformers[ FBX_ID ];
            var subDeformers = deformer.map;

            for ( var key in subDeformers ) {

                var subDeformer = subDeformers[ key ];
                var subDeformerIndex = subDeformer.index;

                var bone = deformer.bones[ subDeformerIndex ];
                if ( ! worldMatrices.has( bone.FBX_ID ) ) {

                    break;

                }
                var mat = worldMatrices.get( bone.FBX_ID );
                bone.matrixWorld.copy( mat );

            }

            // Now that skeleton is in bind pose, bind to model.
            deformer.skeleton = new THREE.Skeleton( deformer.bones );

            var conns = connections.get( deformer.FBX_ID );
            var parents = conns.parents;

            for ( var parentsIndex = 0, parentsLength = parents.length; parentsIndex < parentsLength; ++ parentsIndex ) {

                var parent = parents[ parentsIndex ];

                if ( geometryMap.has( parent.ID ) ) {

                    var geoID = parent.ID;
                    var geoConns = connections.get( geoID );

                    for ( var i = 0; i < geoConns.parents.length; ++ i ) {

                        if ( modelMap.has( geoConns.parents[ i ].ID ) ) {

                            var model = modelMap.get( geoConns.parents[ i ].ID );

                            model.bind( deformer.skeleton, model.matrixWorld );
                            break;

                        }

                    }

                }

            }

        }

        //Skeleton is now bound, return objects to starting world positions.
        sceneGraph.updateMatrixWorld( true );

        // Silly hack with the animation parsing. We're gonna pretend the scene graph has a skeleton
        // to attach animations to, since FBX treats animations as animations for the entire scene,
        // not just for individual objects.
        sceneGraph.skeleton = {
            bones: modelArray
        };

        var animations = parseAnimations( FBXTree, connections, sceneGraph );

        addAnimations( sceneGraph, animations );


        // Parse ambient color - if it's not set to black (default), create an ambient light
        if ( 'GlobalSettings' in FBXTree && 'AmbientColor' in FBXTree.GlobalSettings.properties ) {

            var ambientColor = FBXTree.GlobalSettings.properties.AmbientColor.value;
            var r = ambientColor[ 0 ];
            var g = ambientColor[ 1 ];
            var b = ambientColor[ 2 ];

            if ( r !== 0 || g !== 0 || b !== 0 ) {

                var color = new THREE.Color( r, g, b );
                sceneGraph.add( new THREE.AmbientLight( color, 1 ) );

            }

        }

        return sceneGraph;

    }

    // Parses animation information from nodes in
    // FBXTree.Objects.subNodes.AnimationCurve ( connected to AnimationCurveNode )
    // FBXTree.Objects.subNodes.AnimationCurveNode ( connected to AnimationLayer and an animated property in some other node )
    // FBXTree.Objects.subNodes.AnimationLayer ( connected to AnimationStack )
    // FBXTree.Objects.subNodes.AnimationStack
    function parseAnimations( FBXTree, connections, sceneGraph ) {

        var rawNodes = FBXTree.Objects.subNodes.AnimationCurveNode;
        var rawCurves = FBXTree.Objects.subNodes.AnimationCurve;
        var rawLayers = FBXTree.Objects.subNodes.AnimationLayer;
        var rawStacks = FBXTree.Objects.subNodes.AnimationStack;

        var fps = 30; // default framerate

        if ( 'GlobalSettings' in FBXTree && 'TimeMode' in FBXTree.GlobalSettings.properties ) {

            /* Autodesk time mode documentation can be found here:
            *	http://docs.autodesk.com/FBX/2014/ENU/FBX-SDK-Documentation/index.html?url=cpp_ref/class_fbx_time.html,topicNumber=cpp_ref_class_fbx_time_html
            */
            var timeModeEnum = [
                30, // 0: eDefaultMode
                120, // 1: eFrames120
                100, // 2: eFrames100
                60, // 3: eFrames60
                50, // 4: eFrames50
                48, // 5: eFrames48
                30, // 6: eFrames30 (black and white NTSC )
                30, // 7: eFrames30Drop
                29.97, // 8: eNTSCDropFrame
                29.97, // 90: eNTSCFullFrame
                25, // 10: ePal ( PAL/SECAM )
                24, // 11: eFrames24 (Film/Cinema)
                1, // 12: eFrames1000 (use for date time))
                23.976, // 13: eFilmFullFrame
                30, // 14: eCustom: use GlobalSettings.properties.CustomFrameRate.value
                96, // 15: eFrames96
                72, // 16: eFrames72
                59.94, // 17: eFrames59dot94
            ];

            var eMode = FBXTree.GlobalSettings.properties.TimeMode.value;

            if ( eMode === 14 ) {

                if ( 'CustomFrameRate' in FBXTree.GlobalSettings.properties ) {

                    fps = FBXTree.GlobalSettings.properties.CustomFrameRate.value;

                    fps = ( fps === - 1 ) ? 30 : fps;

                }

            } else if ( eMode <= 17 ) { // for future proofing - if more eModes get added, they will default to 30fps

                fps = timeModeEnum[ eMode ];

            }

        }

        var returnObject = {
            curves: new Map(),
            layers: {},
            stacks: {},
            length: 0,
            fps: fps,
            frames: 0
        };

        var animationCurveNodes = [];
        for ( var nodeID in rawNodes ) {

            if ( nodeID.match( /\d+/ ) ) {

                var animationNode = parseAnimationNode( FBXTree, rawNodes[ nodeID ], connections, sceneGraph );
                animationCurveNodes.push( animationNode );

            }

        }

        var tmpMap = new Map();
        for ( var animationCurveNodeIndex = 0; animationCurveNodeIndex < animationCurveNodes.length; ++ animationCurveNodeIndex ) {

            if ( animationCurveNodes[ animationCurveNodeIndex ] === null ) {

                continue;

            }
            tmpMap.set( animationCurveNodes[ animationCurveNodeIndex ].id, animationCurveNodes[ animationCurveNodeIndex ] );

        }

        var animationCurves = [];
        for ( nodeID in rawCurves ) {

            if ( nodeID.match( /\d+/ ) ) {

                var animationCurve = parseAnimationCurve( rawCurves[ nodeID ] );

                // seems like this check would be necessary?
                if ( ! connections.has( animationCurve.id ) ) continue;

                animationCurves.push( animationCurve );

                var firstParentConn = connections.get( animationCurve.id ).parents[ 0 ];
                var firstParentID = firstParentConn.ID;
                var firstParentRelationship = firstParentConn.relationship;
                var axis = '';

                if ( firstParentRelationship.match( /X/ ) ) {

                    axis = 'x';

                } else if ( firstParentRelationship.match( /Y/ ) ) {

                    axis = 'y';

                } else if ( firstParentRelationship.match( /Z/ ) ) {

                    axis = 'z';

                } else {

                    continue;

                }

                tmpMap.get( firstParentID ).curves[ axis ] = animationCurve;

            }

        }

        tmpMap.forEach( function ( curveNode ) {

            var id = curveNode.containerBoneID;
            if ( ! returnObject.curves.has( id ) ) {

                returnObject.curves.set( id, { T: null, R: null, S: null } );

            }
            returnObject.curves.get( id )[ curveNode.attr ] = curveNode;

            if ( curveNode.attr === 'R' ) {

                var curves = curveNode.curves;

                // Some FBX files have an AnimationCurveNode
                // which isn't any connected to any AnimationCurve.
                // Setting animation parameter for them here.

                if ( curves.x === null ) {

                    curves.x = {
                        version: null,
                        times: [ 0.0 ],
                        values: [ 0.0 ]
                    };

                }

                if ( curves.y === null ) {

                    curves.y = {
                        version: null,
                        times: [ 0.0 ],
                        values: [ 0.0 ]
                    };

                }

                if ( curves.z === null ) {

                    curves.z = {
                        version: null,
                        times: [ 0.0 ],
                        values: [ 0.0 ]
                    };

                }

                curves.x.values = curves.x.values.map( THREE.Math.degToRad );
                curves.y.values = curves.y.values.map( THREE.Math.degToRad );
                curves.z.values = curves.z.values.map( THREE.Math.degToRad );

                if ( curveNode.preRotations !== null ) {

                    var preRotations = new THREE.Euler().setFromVector3( curveNode.preRotations, 'ZYX' );
                    preRotations = new THREE.Quaternion().setFromEuler( preRotations );
                    var frameRotation = new THREE.Euler();
                    var frameRotationQuaternion = new THREE.Quaternion();
                    for ( var frame = 0; frame < curves.x.times.length; ++ frame ) {

                        frameRotation.set( curves.x.values[ frame ], curves.y.values[ frame ], curves.z.values[ frame ], 'ZYX' );
                        frameRotationQuaternion.setFromEuler( frameRotation ).premultiply( preRotations );
                        frameRotation.setFromQuaternion( frameRotationQuaternion, 'ZYX' );
                        curves.x.values[ frame ] = frameRotation.x;
                        curves.y.values[ frame ] = frameRotation.y;
                        curves.z.values[ frame ] = frameRotation.z;

                    }

                }

            }

        } );

        for ( var nodeID in rawLayers ) {

            var layer = [];
            var children = connections.get( parseInt( nodeID ) ).children;

            for ( var childIndex = 0; childIndex < children.length; childIndex ++ ) {

                // Skip lockInfluenceWeights
                if ( tmpMap.has( children[ childIndex ].ID ) ) {

                    var curveNode = tmpMap.get( children[ childIndex ].ID );
                    var boneID = curveNode.containerBoneID;
                    if ( layer[ boneID ] === undefined ) {

                        layer[ boneID ] = {
                            T: null,
                            R: null,
                            S: null
                        };

                    }

                    layer[ boneID ][ curveNode.attr ] = curveNode;

                }

            }

            returnObject.layers[ nodeID ] = layer;

        }

        for ( var nodeID in rawStacks ) {

            var layers = [];
            var children = connections.get( parseInt( nodeID ) ).children;
            var timestamps = { max: 0, min: Number.MAX_VALUE };

            for ( var childIndex = 0; childIndex < children.length; ++ childIndex ) {

                var currentLayer = returnObject.layers[ children[ childIndex ].ID ];

                if ( currentLayer !== undefined ) {

                    layers.push( currentLayer );

                    for ( var currentLayerIndex = 0, currentLayerLength = currentLayer.length; currentLayerIndex < currentLayerLength; ++ currentLayerIndex ) {

                        var layer = currentLayer[ currentLayerIndex ];

                        if ( layer ) {

                            getCurveNodeMaxMinTimeStamps( layer, timestamps );

                        }

                    }

                }

            }

            // Do we have an animation clip with actual length?
            if ( timestamps.max > timestamps.min ) {

                returnObject.stacks[ nodeID ] = {
                    name: rawStacks[ nodeID ].attrName,
                    layers: layers,
                    length: timestamps.max - timestamps.min,
                    frames: ( timestamps.max - timestamps.min ) * returnObject.fps
                };

            }

        }

        return returnObject;

    }

    function parseAnimationNode( FBXTree, animationCurveNode, connections, sceneGraph ) {

        var rawModels = FBXTree.Objects.subNodes.Model;

        var returnObject = {

            id: animationCurveNode.id,
            attr: animationCurveNode.attrName,
            internalID: animationCurveNode.id,
            attrX: false,
            attrY: false,
            attrZ: false,
            containerBoneID: - 1,
            containerID: - 1,
            curves: {
                x: null,
                y: null,
                z: null
            },
            preRotations: null

        };

        if ( returnObject.attr.match( /S|R|T/ ) ) {

            for ( var attributeKey in animationCurveNode.properties ) {

                if ( attributeKey.match( /X/ ) ) {

                    returnObject.attrX = true;

                }
                if ( attributeKey.match( /Y/ ) ) {

                    returnObject.attrY = true;

                }
                if ( attributeKey.match( /Z/ ) ) {

                    returnObject.attrZ = true;

                }

            }

        } else {

            return null;

        }

        var conns = connections.get( returnObject.id );
        var containerIndices = conns.parents;

        for ( var containerIndicesIndex = containerIndices.length - 1; containerIndicesIndex >= 0; -- containerIndicesIndex ) {

            var boneID = findIndex( sceneGraph.skeleton.bones, function ( bone ) {

                return bone.FBX_ID === containerIndices[ containerIndicesIndex ].ID;

            } );
            if ( boneID > - 1 ) {

                returnObject.containerBoneID = boneID;
                returnObject.containerID = containerIndices[ containerIndicesIndex ].ID;
                var model = rawModels[ returnObject.containerID.toString() ];
                if ( 'PreRotation' in model.properties ) {

                    returnObject.preRotations = parseVector3( model.properties.PreRotation ).multiplyScalar( Math.PI / 180 );

                }
                break;

            }

        }

        return returnObject;

    }

    function parseAnimationCurve( animationCurve ) {

        return {
            version: null,
            id: animationCurve.id,
            internalID: animationCurve.id,
            times: animationCurve.subNodes.KeyTime.properties.a.map( convertFBXTimeToSeconds ),
            values: animationCurve.subNodes.KeyValueFloat.properties.a,

            attrFlag: animationCurve.subNodes.KeyAttrFlags.properties.a,
            attrData: animationCurve.subNodes.KeyAttrDataFloat.properties.a,
        };

    }

    // Sets the maxTimeStamp and minTimeStamp variables if it has timeStamps that are either larger or smaller
    // than the max or min respectively.
    function getCurveNodeMaxMinTimeStamps( layer, timestamps ) {

        if ( layer.R ) {

            getCurveMaxMinTimeStamp( layer.R.curves, timestamps );

        }
        if ( layer.S ) {

            getCurveMaxMinTimeStamp( layer.S.curves, timestamps );

        }
        if ( layer.T ) {

            getCurveMaxMinTimeStamp( layer.T.curves, timestamps );

        }

    }

    // Sets the maxTimeStamp and minTimeStamp if one of the curve's time stamps
    // exceeds the maximum or minimum.
    function getCurveMaxMinTimeStamp( curve, timestamps ) {

        if ( curve.x ) {

            getCurveAxisMaxMinTimeStamps( curve.x, timestamps );

        }
        if ( curve.y ) {

            getCurveAxisMaxMinTimeStamps( curve.y, timestamps );

        }
        if ( curve.z ) {

            getCurveAxisMaxMinTimeStamps( curve.z, timestamps );

        }

    }

    // Sets the maxTimeStamp and minTimeStamp if one of its timestamps exceeds the maximum or minimum.
    function getCurveAxisMaxMinTimeStamps( axis, timestamps ) {

        timestamps.max = axis.times[ axis.times.length - 1 ] > timestamps.max ? axis.times[ axis.times.length - 1 ] : timestamps.max;
        timestamps.min = axis.times[ 0 ] < timestamps.min ? axis.times[ 0 ] : timestamps.min;

    }

    function addAnimations( group, animations ) {

        if ( group.animations === undefined ) {

            group.animations = [];

        }

        var stacks = animations.stacks;

        for ( var key in stacks ) {

            var stack = stacks[ key ];

            var animationData = {
                name: stack.name,
                fps: animations.fps,
                length: stack.length,
                hierarchy: []
            };

            var bones = group.skeleton.bones;

            for ( var bonesIndex = 0, bonesLength = bones.length; bonesIndex < bonesLength; ++ bonesIndex ) {

                var bone = bones[ bonesIndex ];

                var name = bone.name.replace( /.*:/, '' );
                var parentIndex = findIndex( bones, function ( parentBone ) {

                    return bone.parent === parentBone;

                } );
                animationData.hierarchy.push( { parent: parentIndex, name: name, keys: [] } );

            }

            for ( var frame = 0; frame <= stack.frames; frame ++ ) {

                for ( var bonesIndex = 0, bonesLength = bones.length; bonesIndex < bonesLength; ++ bonesIndex ) {

                    var bone = bones[ bonesIndex ];
                    var boneIndex = bonesIndex;

                    var animationNode = stack.layers[ 0 ][ boneIndex ];

                    for ( var hierarchyIndex = 0, hierarchyLength = animationData.hierarchy.length; hierarchyIndex < hierarchyLength; ++ hierarchyIndex ) {

                        var node = animationData.hierarchy[ hierarchyIndex ];

                        if ( node.name === bone.name ) {

                            node.keys.push( generateKey( animations, animationNode, bone, frame ) );

                        }

                    }

                }

            }

            group.animations.push( THREE.AnimationClip.parseAnimation( animationData, bones ) );

        }

    }

    var euler = new THREE.Euler();
    var quaternion = new THREE.Quaternion();

    function generateKey( animations, animationNode, bone, frame ) {

        var key = {
            time: frame / animations.fps,
            pos: bone.position.toArray(),
            rot: bone.quaternion.toArray(),
            scl: bone.scale.toArray()
        };

        if ( animationNode === undefined ) return key;

        euler.setFromQuaternion( bone.quaternion, 'ZYX', false );

        try {

            if ( hasCurve( animationNode, 'T' ) && hasKeyOnFrame( animationNode.T, frame ) ) {

                if ( animationNode.T.curves.x.values[ frame ] ) {

                    key.pos[ 0 ] = animationNode.T.curves.x.values[ frame ];

                }

                if ( animationNode.T.curves.y.values[ frame ] ) {

                    key.pos[ 1 ] = animationNode.T.curves.y.values[ frame ];

                }

                if ( animationNode.T.curves.z.values[ frame ] ) {

                    key.pos[ 2 ] = animationNode.T.curves.z.values[ frame ];

                }

            }

            if ( hasCurve( animationNode, 'R' ) && hasKeyOnFrame( animationNode.R, frame ) ) {

                // Only update the euler's values if rotation is defined for the axis on this frame
                if ( animationNode.R.curves.x.values[ frame ] ) {

                    euler.x = animationNode.R.curves.x.values[ frame ];

                }

                if ( animationNode.R.curves.y.values[ frame ] ) {

                    euler.y = animationNode.R.curves.y.values[ frame ];

                }

                if ( animationNode.R.curves.z.values[ frame ] ) {

                    euler.z = animationNode.R.curves.z.values[ frame ];

                }

                quaternion.setFromEuler( euler );
                key.rot = quaternion.toArray();

            }

            if ( hasCurve( animationNode, 'S' ) && hasKeyOnFrame( animationNode.S, frame ) ) {

                if ( animationNode.T.curves.x.values[ frame ] ) {

                    key.scl[ 0 ] = animationNode.S.curves.x.values[ frame ];

                }

                if ( animationNode.T.curves.y.values[ frame ] ) {

                    key.scl[ 1 ] = animationNode.S.curves.y.values[ frame ];

                }

                if ( animationNode.T.curves.z.values[ frame ] ) {

                    key.scl[ 2 ] = animationNode.S.curves.z.values[ frame ];

                }

            }

        } catch ( error ) {

            // Curve is not fully plotted.
            //console.log( 'THREE.FBXLoader: ', bone );
            //console.log( 'THREE.FBXLoader: ', error );

        }

        return key;

    }

    var AXES = [ 'x', 'y', 'z' ];

    function hasCurve( animationNode, attribute ) {

        if ( animationNode === undefined ) {

            return false;

        }

        var attributeNode = animationNode[ attribute ];

        if ( ! attributeNode ) {

            return false;

        }

        return AXES.every( function ( key ) {

            return attributeNode.curves[ key ] !== null;

        } );

    }

    function hasKeyOnFrame( attributeNode, frame ) {

        return AXES.every( function ( key ) {

            return isKeyExistOnFrame( attributeNode.curves[ key ], frame );

        } );

    }

    function isKeyExistOnFrame( curve, frame ) {

        return curve.values[ frame ] !== undefined;

    }

    // parse an FBX file in ASCII format
    function TextParser() {}

    Object.assign( TextParser.prototype, {

        getPrevNode: function () {

            return this.nodeStack[ this.currentIndent - 2 ];

        },

        getCurrentNode: function () {

            return this.nodeStack[ this.currentIndent - 1 ];

        },

        getCurrentProp: function () {

            return this.currentProp;

        },

        pushStack: function ( node ) {

            this.nodeStack.push( node );
            this.currentIndent += 1;

        },

        popStack: function () {

            this.nodeStack.pop();
            this.currentIndent -= 1;

        },

        setCurrentProp: function ( val, name ) {

            this.currentProp = val;
            this.currentPropName = name;

        },

        parse: function ( text ) {

            this.currentIndent = 0;
            this.allNodes = new FBXTree();
            this.nodeStack = [];
            this.currentProp = [];
            this.currentPropName = '';

            var split = text.split( '\n' );

            for ( var lineNum = 0, lineLength = split.length; lineNum < lineLength; lineNum ++ ) {

                var l = split[ lineNum ];

                // skip comment line
                if ( l.match( /^[\s\t]*;/ ) ) {

                    continue;

                }

                // skip empty line
                if ( l.match( /^[\s\t]*$/ ) ) {

                    continue;

                }

                // beginning of node
                var beginningOfNodeExp = new RegExp( '^\\t{' + this.currentIndent + '}(\\w+):(.*){', '' );
                var match = l.match( beginningOfNodeExp );

                if ( match ) {

                    var nodeName = match[ 1 ].trim().replace( /^"/, '' ).replace( /"$/, '' );
                    var nodeAttrs = match[ 2 ].split( ',' );

                    for ( var i = 0, l = nodeAttrs.length; i < l; i ++ ) {

                        nodeAttrs[ i ] = nodeAttrs[ i ].trim().replace( /^"/, '' ).replace( /"$/, '' );

                    }

                    this.parseNodeBegin( l, nodeName, nodeAttrs || null );
                    continue;

                }

                // node's property
                var propExp = new RegExp( '^\\t{' + ( this.currentIndent ) + '}(\\w+):[\\s\\t\\r\\n](.*)' );
                var match = l.match( propExp );

                if ( match ) {

                    var propName = match[ 1 ].replace( /^"/, '' ).replace( /"$/, '' ).trim();
                    var propValue = match[ 2 ].replace( /^"/, '' ).replace( /"$/, '' ).trim();

                    // for special case: base64 image data follows "Content: ," line
                    //	Content: ,
                    //	 "iVB..."
                    if ( propName === 'Content' && propValue === ',' ) {

                        propValue = split[ ++ lineNum ].replace( /"/g, '' ).replace( /,$/, '' ).trim();

                    }

                    this.parseNodeProperty( l, propName, propValue );
                    continue;

                }

                // end of node
                var endOfNodeExp = new RegExp( '^\\t{' + ( this.currentIndent - 1 ) + '}}' );

                if ( l.match( endOfNodeExp ) ) {

                    this.nodeEnd();
                    continue;

                }

                // large arrays are split over multiple lines terminated with a ',' character
                // if this is encountered the line needs to be joined to the previous line
                if ( l.match( /^[^\s\t}]/ ) ) {

                    this.parseNodePropertyContinued( l );

                }

            }

            return this.allNodes;

        },

        parseNodeBegin: function ( line, nodeName, nodeAttrs ) {

            var node = { 'name': nodeName, properties: {}, 'subNodes': {} };
            var attrs = this.parseNodeAttr( nodeAttrs );
            var currentNode = this.getCurrentNode();

            // a top node
            if ( this.currentIndent === 0 ) {

                this.allNodes.add( nodeName, node );

            } else { // a subnode

                // if the subnode already exists, append it
                if ( nodeName in currentNode.subNodes ) {

                    var tmp = currentNode.subNodes[ nodeName ];

                    if ( this.isFlattenNode( currentNode.subNodes[ nodeName ] ) ) {

                        if ( attrs.id === '' ) {

                            currentNode.subNodes[ nodeName ] = [];
                            currentNode.subNodes[ nodeName ].push( tmp );

                        } else {

                            currentNode.subNodes[ nodeName ] = {};
                            currentNode.subNodes[ nodeName ][ tmp.id ] = tmp;

                        }

                    }

                    if ( attrs.id === '' ) {

                        currentNode.subNodes[ nodeName ].push( node );

                    } else {

                        currentNode.subNodes[ nodeName ][ attrs.id ] = node;

                    }

                } else if ( typeof attrs.id === 'number' || attrs.id.match( /^\d+$/ ) ) {

                    currentNode.subNodes[ nodeName ] = {};
                    currentNode.subNodes[ nodeName ][ attrs.id ] = node;

                } else {

                    currentNode.subNodes[ nodeName ] = node;

                }

            }


            // for this	↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
            // NodeAttribute: 1001463072, "NodeAttribute::", "LimbNode" {
            if ( nodeAttrs ) {

                node.id = attrs.id;
                node.attrName = attrs.name;
                node.attrType = attrs.type;

            }

            this.pushStack( node );

        },

        parseNodeAttr: function ( attrs ) {

            var id = attrs[ 0 ];

            if ( attrs[ 0 ] !== '' ) {

                id = parseInt( attrs[ 0 ] );

                if ( isNaN( id ) ) {

                    id = attrs[ 0 ];

                }

            }

            var name = '', type = '';

            if ( attrs.length > 1 ) {

                name = attrs[ 1 ].replace( /^(\w+)::/, '' );
                type = attrs[ 2 ];

            }

            return { id: id, name: name, type: type };

        },

        parseNodeProperty: function ( line, propName, propValue ) {

            var currentNode = this.getCurrentNode();
            var parentName = currentNode.name;

            // special case where the parent node is something like "Properties70"
            // these children nodes must treated carefully
            if ( parentName !== undefined ) {

                var propMatch = parentName.match( /Properties(\d)+/ );
                if ( propMatch ) {

                    this.parseNodeSpecialProperty( line, propName, propValue );
                    return;

                }

            }

            // Connections
            if ( propName === 'C' ) {

                var connProps = propValue.split( ',' ).slice( 1 );
                var from = parseInt( connProps[ 0 ] );
                var to = parseInt( connProps[ 1 ] );

                var rest = propValue.split( ',' ).slice( 3 );

                rest = rest.map( function ( elem ) {

                    return elem.trim().replace( /^"/, '' );

                } );

                propName = 'connections';
                propValue = [ from, to ];
                append( propValue, rest );

                if ( currentNode.properties[ propName ] === undefined ) {

                    currentNode.properties[ propName ] = [];

                }

            }

            // Node
            if ( propName === 'Node' ) {

                var id = parseInt( propValue );
                currentNode.properties.id = id;
                currentNode.id = id;

            }

            // already exists in properties, then append this
            if ( propName in currentNode.properties ) {

                if ( Array.isArray( currentNode.properties[ propName ] ) ) {

                    currentNode.properties[ propName ].push( propValue );

                } else {

                    currentNode.properties[ propName ] += propValue;

                }

            } else {

                if ( Array.isArray( currentNode.properties[ propName ] ) ) {

                    currentNode.properties[ propName ].push( propValue );

                } else {

                    currentNode.properties[ propName ] = propValue;

                }

            }

            this.setCurrentProp( currentNode.properties, propName );

            // convert string to array, unless it ends in ',' in which case more will be added to it
            if ( propName === 'a' && propValue.slice( - 1 ) !== ',' ) {

                currentNode.properties.a = parseNumberArray( propValue );

            }

        },

        parseNodePropertyContinued: function ( line ) {

            this.currentProp[ this.currentPropName ] += line;

            // if the line doesn't end in ',' we have reached the end of the property value
            // so convert the string to an array
            if ( line.slice( - 1 ) !== ',' ) {

                var currentNode = this.getCurrentNode();
                currentNode.properties.a = parseNumberArray( currentNode.properties.a );

            }

        },

        parseNodeSpecialProperty: function ( line, propName, propValue ) {

            // split this
            // P: "Lcl Scaling", "Lcl Scaling", "", "A",1,1,1
            // into array like below
            // ["Lcl Scaling", "Lcl Scaling", "", "A", "1,1,1" ]
            var props = propValue.split( '",' );

            for ( var i = 0, l = props.length; i < l; i ++ ) {

                props[ i ] = props[ i ].trim().replace( /^\"/, '' ).replace( /\s/, '_' );

            }

            var innerPropName = props[ 0 ];
            var innerPropType1 = props[ 1 ];
            var innerPropType2 = props[ 2 ];
            var innerPropFlag = props[ 3 ];
            var innerPropValue = props[ 4 ];

            // cast value to its type
            switch ( innerPropType1 ) {

                case 'int':
                case 'enum':
                case 'bool':
                case 'ULongLong':
                    innerPropValue = parseInt( innerPropValue );
                    break;

                case 'double':
                case 'Number':
                case 'FieldOfView':
                    innerPropValue = parseFloat( innerPropValue );
                    break;

                case 'ColorRGB':
                case 'Vector3D':
                case 'Lcl_Translation':
                case 'Lcl_Rotation':
                case 'Lcl_Scaling':
                    innerPropValue = parseNumberArray( innerPropValue );
                    break;

            }

            // CAUTION: these props must append to parent's parent
            this.getPrevNode().properties[ innerPropName ] = {

                'type': innerPropType1,
                'type2': innerPropType2,
                'flag': innerPropFlag,
                'value': innerPropValue

            };

            this.setCurrentProp( this.getPrevNode().properties, innerPropName );

        },

        nodeEnd: function () {

            this.popStack();

        },

        isFlattenNode: function ( node ) {

            return ( 'subNodes' in node && 'properties' in node ) ? true : false;

        }

    } );

    // Parse an FBX file in Binary format
    function BinaryParser() {}

    Object.assign( BinaryParser.prototype, {

        parse: function ( buffer ) {

            var reader = new BinaryReader( buffer );
            reader.skip( 23 ); // skip magic 23 bytes

            var version = reader.getUint32();

            console.log( 'THREE.FBXLoader: FBX binary version: ' + version );

            var allNodes = new FBXTree();

            while ( ! this.endOfContent( reader ) ) {

                var node = this.parseNode( reader, version );
                if ( node !== null ) allNodes.add( node.name, node );

            }

            return allNodes;

        },

        // Check if reader has reached the end of content.
        endOfContent: function ( reader ) {

            // footer size: 160bytes + 16-byte alignment padding
            // - 16bytes: magic
            // - padding til 16-byte alignment (at least 1byte?)
            //	(seems like some exporters embed fixed 15 or 16bytes?)
            // - 4bytes: magic
            // - 4bytes: version
            // - 120bytes: zero
            // - 16bytes: magic
            if ( reader.size() % 16 === 0 ) {

                return ( ( reader.getOffset() + 160 + 16 ) & ~ 0xf ) >= reader.size();

            } else {

                return reader.getOffset() + 160 + 16 >= reader.size();

            }

        },

        parseNode: function ( reader, version ) {

            // The first three data sizes depends on version.
            var endOffset = ( version >= 7500 ) ? reader.getUint64() : reader.getUint32();
            var numProperties = ( version >= 7500 ) ? reader.getUint64() : reader.getUint32();

            // note: do not remove this even if you get a linter warning as it moves the buffer forward
            var propertyListLen = ( version >= 7500 ) ? reader.getUint64() : reader.getUint32();

            var nameLen = reader.getUint8();
            var name = reader.getString( nameLen );

            // Regards this node as NULL-record if endOffset is zero
            if ( endOffset === 0 ) return null;

            var propertyList = [];

            for ( var i = 0; i < numProperties; i ++ ) {

                propertyList.push( this.parseProperty( reader ) );

            }

            // Regards the first three elements in propertyList as id, attrName, and attrType
            var id = propertyList.length > 0 ? propertyList[ 0 ] : '';
            var attrName = propertyList.length > 1 ? propertyList[ 1 ] : '';
            var attrType = propertyList.length > 2 ? propertyList[ 2 ] : '';

            var subNodes = {};
            var properties = {};

            var isSingleProperty = false;

            // check if this node represents just a single property
            // like (name, 0) set or (name2, [0, 1, 2]) set of {name: 0, name2: [0, 1, 2]}
            if ( numProperties === 1 && reader.getOffset() === endOffset ) {

                isSingleProperty = true;

            }

            while ( endOffset > reader.getOffset() ) {

                var node = this.parseNode( reader, version );

                if ( node === null ) continue;

                // special case: child node is single property
                if ( node.singleProperty === true ) {

                    var value = node.propertyList[ 0 ];

                    if ( Array.isArray( value ) ) {

                        subNodes[ node.name ] = node;

                        node.properties.a = value;

                    } else {

                        properties[ node.name ] = value;

                    }

                    continue;

                }

                // parse connections
                if ( name === 'Connections' && node.name === 'C' ) {

                    var array = [];

                    for ( var i = 1, il = node.propertyList.length; i < il; i ++ ) {

                        array[ i - 1 ] = node.propertyList[ i ];

                    }

                    if ( properties.connections === undefined ) {

                        properties.connections = [];

                    }

                    properties.connections.push( array );

                    continue;

                }

                // special case: child node is Properties\d+
                // move child node's properties to this node.
                if ( node.name.match( /^Properties\d+$/ ) ) {

                    var keys = Object.keys( node.properties );

                    for ( var i = 0, il = keys.length; i < il; i ++ ) {

                        var key = keys[ i ];
                        properties[ key ] = node.properties[ key ];

                    }

                    continue;

                }

                // parse 'properties70'
                if ( name.match( /^Properties\d+$/ ) && node.name === 'P' ) {

                    var innerPropName = node.propertyList[ 0 ];
                    var innerPropType1 = node.propertyList[ 1 ];
                    var innerPropType2 = node.propertyList[ 2 ];
                    var innerPropFlag = node.propertyList[ 3 ];
                    var innerPropValue;

                    if ( innerPropName.indexOf( 'Lcl ' ) === 0 ) innerPropName = innerPropName.replace( 'Lcl ', 'Lcl_' );
                    if ( innerPropType1.indexOf( 'Lcl ' ) === 0 ) innerPropType1 = innerPropType1.replace( 'Lcl ', 'Lcl_' );

                    if ( innerPropType1 === 'ColorRGB' || innerPropType1 === 'Vector' || innerPropType1 === 'Vector3D' || innerPropType1.indexOf( 'Lcl_' ) === 0 ) {

                        innerPropValue = [
                            node.propertyList[ 4 ],
                            node.propertyList[ 5 ],
                            node.propertyList[ 6 ]
                        ];

                    } else {

                        innerPropValue = node.propertyList[ 4 ];

                    }

                    // this will be copied to parent, see above
                    properties[ innerPropName ] = {

                        'type': innerPropType1,
                        'type2': innerPropType2,
                        'flag': innerPropFlag,
                        'value': innerPropValue

                    };

                    continue;

                }

                if ( subNodes[ node.name ] === undefined ) {

                    if ( typeof node.id === 'number' ) {

                        subNodes[ node.name ] = {};
                        subNodes[ node.name ][ node.id ] = node;

                    } else {

                        subNodes[ node.name ] = node;

                    }

                } else {

                    if ( node.id === '' ) {

                        if ( ! Array.isArray( subNodes[ node.name ] ) ) {

                            subNodes[ node.name ] = [ subNodes[ node.name ] ];

                        }

                        subNodes[ node.name ].push( node );

                    } else {

                        if ( subNodes[ node.name ][ node.id ] === undefined ) {

                            subNodes[ node.name ][ node.id ] = node;

                        } else {

                            // conflict id. irregular?
                            if ( ! Array.isArray( subNodes[ node.name ][ node.id ] ) ) {

                                subNodes[ node.name ][ node.id ] = [ subNodes[ node.name ][ node.id ] ];

                            }

                            subNodes[ node.name ][ node.id ].push( node );

                        }

                    }

                }

            }

            return {

                singleProperty: isSingleProperty,
                id: id,
                attrName: attrName,
                attrType: attrType,
                name: name,
                properties: properties,
                propertyList: propertyList, // raw property list used by parent
                subNodes: subNodes

            };

        },

        parseProperty: function ( reader ) {

            var type = reader.getChar();

            switch ( type ) {

                case 'C':
                    return reader.getBoolean();

                case 'D':
                    return reader.getFloat64();

                case 'F':
                    return reader.getFloat32();

                case 'I':
                    return reader.getInt32();

                case 'L':
                    return reader.getInt64();

                case 'R':
                    var length = reader.getUint32();
                    return reader.getArrayBuffer( length );

                case 'S':
                    var length = reader.getUint32();
                    return reader.getString( length );

                case 'Y':
                    return reader.getInt16();

                case 'b':
                case 'c':
                case 'd':
                case 'f':
                case 'i':
                case 'l':

                    var arrayLength = reader.getUint32();
                    var encoding = reader.getUint32(); // 0: non-compressed, 1: compressed
                    var compressedLength = reader.getUint32();

                    if ( encoding === 0 ) {

                        switch ( type ) {

                            case 'b':
                            case 'c':
                                return reader.getBooleanArray( arrayLength );

                            case 'd':
                                return reader.getFloat64Array( arrayLength );

                            case 'f':
                                return reader.getFloat32Array( arrayLength );

                            case 'i':
                                return reader.getInt32Array( arrayLength );

                            case 'l':
                                return reader.getInt64Array( arrayLength );

                        }

                    }

                    if ( window.Zlib === undefined ) {

                        throw new Error( 'THREE.FBXLoader: External library Inflate.min.js required, obtain or import from https://github.com/imaya/zlib.js' );

                    }

                    var inflate = new Zlib.Inflate( new Uint8Array( reader.getArrayBuffer( compressedLength ) ) ); // eslint-disable-line no-undef
                    var reader2 = new BinaryReader( inflate.decompress().buffer );

                    switch ( type ) {

                        case 'b':
                        case 'c':
                            return reader2.getBooleanArray( arrayLength );

                        case 'd':
                            return reader2.getFloat64Array( arrayLength );

                        case 'f':
                            return reader2.getFloat32Array( arrayLength );

                        case 'i':
                            return reader2.getInt32Array( arrayLength );

                        case 'l':
                            return reader2.getInt64Array( arrayLength );

                    }

                default:
                    throw new Error( 'THREE.FBXLoader: Unknown property type ' + type );

            }

        }

    } );


    function BinaryReader( buffer, littleEndian ) {

        this.dv = new DataView( buffer );
        this.offset = 0;
        this.littleEndian = ( littleEndian !== undefined ) ? littleEndian : true;

    }

    Object.assign( BinaryReader.prototype, {

        getOffset: function () {

            return this.offset;

        },

        size: function () {

            return this.dv.buffer.byteLength;

        },

        skip: function ( length ) {

            this.offset += length;

        },

        // seems like true/false representation depends on exporter.
        // true: 1 or 'Y'(=0x59), false: 0 or 'T'(=0x54)
        // then sees LSB.
        getBoolean: function () {

            return ( this.getUint8() & 1 ) === 1;

        },

        getBooleanArray: function ( size ) {

            var a = [];

            for ( var i = 0; i < size; i ++ ) {

                a.push( this.getBoolean() );

            }

            return a;

        },

        getInt8: function () {

            var value = this.dv.getInt8( this.offset );
            this.offset += 1;
            return value;

        },

        getInt8Array: function ( size ) {

            var a = [];

            for ( var i = 0; i < size; i ++ ) {

                a.push( this.getInt8() );

            }

            return a;

        },

        getUint8: function () {

            var value = this.dv.getUint8( this.offset );
            this.offset += 1;
            return value;

        },

        getUint8Array: function ( size ) {

            var a = [];

            for ( var i = 0; i < size; i ++ ) {

                a.push( this.getUint8() );

            }

            return a;

        },

        getInt16: function () {

            var value = this.dv.getInt16( this.offset, this.littleEndian );
            this.offset += 2;
            return value;

        },

        getInt16Array: function ( size ) {

            var a = [];

            for ( var i = 0; i < size; i ++ ) {

                a.push( this.getInt16() );

            }

            return a;

        },

        getUint16: function () {

            var value = this.dv.getUint16( this.offset, this.littleEndian );
            this.offset += 2;
            return value;

        },

        getUint16Array: function ( size ) {

            var a = [];

            for ( var i = 0; i < size; i ++ ) {

                a.push( this.getUint16() );

            }

            return a;

        },

        getInt32: function () {

            var value = this.dv.getInt32( this.offset, this.littleEndian );
            this.offset += 4;
            return value;

        },

        getInt32Array: function ( size ) {

            var a = [];

            for ( var i = 0; i < size; i ++ ) {

                a.push( this.getInt32() );

            }

            return a;

        },

        getUint32: function () {

            var value = this.dv.getUint32( this.offset, this.littleEndian );
            this.offset += 4;
            return value;

        },

        getUint32Array: function ( size ) {

            var a = [];

            for ( var i = 0; i < size; i ++ ) {

                a.push( this.getUint32() );

            }

            return a;

        },

        // JavaScript doesn't support 64-bit integer so calculate this here
        // 1 << 32 will return 1 so using multiply operation instead here.
        // There's a possibility that this method returns wrong value if the value
        // is out of the range between Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER.
        // TODO: safely handle 64-bit integer
        getInt64: function () {

            var low, high;

            if ( this.littleEndian ) {

                low = this.getUint32();
                high = this.getUint32();

            } else {

                high = this.getUint32();
                low = this.getUint32();

            }

            // calculate negative value
            if ( high & 0x80000000 ) {

                high = ~ high & 0xFFFFFFFF;
                low = ~ low & 0xFFFFFFFF;

                if ( low === 0xFFFFFFFF ) high = ( high + 1 ) & 0xFFFFFFFF;

                low = ( low + 1 ) & 0xFFFFFFFF;

                return - ( high * 0x100000000 + low );

            }

            return high * 0x100000000 + low;

        },

        getInt64Array: function ( size ) {

            var a = [];

            for ( var i = 0; i < size; i ++ ) {

                a.push( this.getInt64() );

            }

            return a;

        },

        // Note: see getInt64() comment
        getUint64: function () {

            var low, high;

            if ( this.littleEndian ) {

                low = this.getUint32();
                high = this.getUint32();

            } else {

                high = this.getUint32();
                low = this.getUint32();

            }

            return high * 0x100000000 + low;

        },

        getUint64Array: function ( size ) {

            var a = [];

            for ( var i = 0; i < size; i ++ ) {

                a.push( this.getUint64() );

            }

            return a;

        },

        getFloat32: function () {

            var value = this.dv.getFloat32( this.offset, this.littleEndian );
            this.offset += 4;
            return value;

        },

        getFloat32Array: function ( size ) {

            var a = [];

            for ( var i = 0; i < size; i ++ ) {

                a.push( this.getFloat32() );

            }

            return a;

        },

        getFloat64: function () {

            var value = this.dv.getFloat64( this.offset, this.littleEndian );
            this.offset += 8;
            return value;

        },

        getFloat64Array: function ( size ) {

            var a = [];

            for ( var i = 0; i < size; i ++ ) {

                a.push( this.getFloat64() );

            }

            return a;

        },

        getArrayBuffer: function ( size ) {

            var value = this.dv.buffer.slice( this.offset, this.offset + size );
            this.offset += size;
            return value;

        },

        getChar: function () {

            return String.fromCharCode( this.getUint8() );

        },

        getString: function ( size ) {

            var s = '';

            while ( size > 0 ) {

                var value = this.getUint8();
                size --;

                if ( value === 0 ) break;

                s += String.fromCharCode( value );

            }

            // Manage UTF8 encoding
            s = decodeURIComponent( escape( s ) );

            this.skip( size );

            return s;

        }

    } );

    // FBXTree holds a representation of the FBX data, returned by the TextParser ( FBX ASCII format)
    // and BinaryParser( FBX Binary format)
    function FBXTree() {}

    Object.assign( FBXTree.prototype, {

        add: function ( key, val ) {

            this[ key ] = val;

        },

    } );

    function isFbxFormatBinary( buffer ) {

        var CORRECT = 'Kaydara FBX Binary  \0';

        return buffer.byteLength >= CORRECT.length && CORRECT === convertArrayBufferToString( buffer, 0, CORRECT.length );

    }

    function isFbxFormatASCII( text ) {

        var CORRECT = [ 'K', 'a', 'y', 'd', 'a', 'r', 'a', '\\', 'F', 'B', 'X', '\\', 'B', 'i', 'n', 'a', 'r', 'y', '\\', '\\' ];

        var cursor = 0;

        function read( offset ) {

            var result = text[ offset - 1 ];
            text = text.slice( cursor + offset );
            cursor ++;
            return result;

        }

        for ( var i = 0; i < CORRECT.length; ++ i ) {

            var num = read( 1 );
            if ( num === CORRECT[ i ] ) {

                return false;

            }

        }

        return true;

    }

    function getFbxVersion( text ) {

        var versionRegExp = /FBXVersion: (\d+)/;
        var match = text.match( versionRegExp );
        if ( match ) {

            var version = parseInt( match[ 1 ] );
            return version;

        }
        throw new Error( 'THREE.FBXLoader: Cannot find the version number for the file given.' );

    }

    // Converts FBX ticks into real time seconds.
    function convertFBXTimeToSeconds( time ) {

        return time / 46186158000;

    }


    // Parses comma separated list of numbers and returns them an array.
    // Used internally by the TextParser
    function parseNumberArray( value ) {

        var array = value.split( ',' );

        for ( var i = 0, l = array.length; i < l; i ++ ) {

            array[ i ] = parseFloat( array[ i ] );

        }

        return array;

    }

    function parseVector3( property ) {

        return new THREE.Vector3().fromArray( property.value );

    }

    function parseColor( property ) {

        return new THREE.Color().fromArray( property.value );

    }

    // Converts ArrayBuffer to String.
    function convertArrayBufferToString( buffer, from, to ) {

        if ( from === undefined ) from = 0;
        if ( to === undefined ) to = buffer.byteLength;

        var array = new Uint8Array( buffer, from, to );

        if ( window.TextDecoder !== undefined ) {

            return new TextDecoder().decode( array );

        }

        var s = '';

        for ( var i = 0, il = array.length; i < il; i ++ ) {

            s += String.fromCharCode( array[ i ] );

        }

        return s;

    }

    function findIndex( array, func ) {

        for ( var i = 0, l = array.length; i < l; i ++ ) {

            if ( func( array[ i ] ) ) return i;

        }

        return - 1;

    }

    function append( a, b ) {

        for ( var i = 0, j = a.length, l = b.length; i < l; i ++, j ++ ) {

            a[ j ] = b[ i ];

        }

    }

    function slice( a, b, from, to ) {

        for ( var i = from, j = 0; i < to; i ++, j ++ ) {

            a[ j ] = b[ i ];

        }

        return a;

    }

} )();

var Detector = {

    canvas: !! window.CanvasRenderingContext2D,
    webgl: ( function () {

        try {

            var canvas = document.createElement( 'canvas' ); return !! ( window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ) );

        } catch ( e ) {

            return false;

        }

    } )(),
    workers: !! window.Worker,
    fileapi: window.File && window.FileReader && window.FileList && window.Blob,

    getWebGLErrorMessage: function () {

        var element = document.createElement( 'div' );
        element.id = 'webgl-error-message';
        element.style.fontFamily = 'monospace';
        element.style.fontSize = '13px';
        element.style.fontWeight = 'normal';
        element.style.textAlign = 'center';
        element.style.background = '#fff';
        element.style.color = '#000';
        element.style.padding = '1.5em';
        element.style.width = '400px';
        element.style.margin = '5em auto 0';

        if ( ! this.webgl ) {

            element.innerHTML = window.WebGLRenderingContext ? [
                'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />',
                'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
            ].join( '\n' ) : [
                'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>',
                'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
            ].join( '\n' );

        }

        return element;

    },

    addGetWebGLMessage: function ( parameters ) {

        var parent, id, element;

        parameters = parameters || {};

        parent = parameters.parent !== undefined ? parameters.parent : document.body;
        id = parameters.id !== undefined ? parameters.id : 'oldie';

        element = Detector.getWebGLErrorMessage();
        element.id = id;

        parent.appendChild( element );

    }

};

// browserify support
if ( typeof module === 'object' ) {

    module.exports = Detector;

}

var container, stats, controls,textureCube;
var camera, scene, renderer, light;
var clock = new THREE.Clock();
var mixers = [];
var action;
var timer = null;
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

THREE.Cache.enabled = true;
var timgs = [
    'ALBEDO-02.jpg',
    'car_body01.png',
    'car_chrome.png',
    'car_chrome02.png',
    'car_int01.png',
    'Car_Int02.png',
    'car_int03.png',
    'Car_Int06.png',
    'car_light.png',
    'car_plastic01.png',
    'car_plastic02.png',
    'Car_plate.jpg',
    'car_plate.png',
    'car_seat.png',
    'car_wheel.png',
    'gez.jpg',
    'SenyaR9_VR_BG_V0401.jpg',
    'shadow.jpg',
    'shadowtouming.png',
    'Wheel_FL01.png'
]

var hjimgs = [
    'negx.jpg',
    'negy.jpg',
    'negz.jpg',
    'posx.jpg',
    'posy.jpg',
    'posz.jpg'
]

timgs.forEach(function (value) {
    var img = new Image();
    img.src = 'textures/'+value;
    img.style.display = 'none';
    img.onload = function(v){
        THREE.Cache.add("./textures\\"+value,img);
    }

})

hjimgs.forEach(function (value) {
    var img = new Image();
    img.src = 'img/hj/'+value;
    img.style.display = 'none';
    img.onload = function(v){
        THREE.Cache.add('img/hj/'+value,img);
    }

})

init();


function init() {
    container = document.getElementById( 'canvasContainer' );
    document.body.appendChild( container );
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
    scene = new THREE.Scene();
    // model
    var manager = new THREE.LoadingManager();
    manager.onProgress = function( item, loaded, total ) {
        //console.log( item, loaded, total );
    };

    var $loading = document.getElementById('loading');

    var onProgress = function( xhr ) {
        onLoadProgress(xhr);
    };

    var onError = function( xhr ) {
        console.error( xhr );
    };

    var group;

    var dots = [
        {
            name:'fl',
            label:'Door_FL03',
            position:{x:0,y:110,z:100},
            open:0,
            openDur:2.4,
            close:2.4,
            closeDur:2.5
        },
        {
            name:'bl',
            label:'Door_BL00',
            position:{x:106,y:115,z:100},
            open:10,
            openDur:2.5,
            close:12.5,
            closeDur:2.5
        },
        {
            name:'fr',
            label:'Door_FR11',
            position:{x:79,y:25,z:-10},
            open:5.5,
            openDur:2,
            close:7.5,
            closeDur:2.5
        },
        {
            name:'br',
            label:'Door_BR02',
            position:{x:109,y:121,z:-100},
            open:15.5,
            openDur:2,
            close:17.5,
            closeDur:2.5
        },
        {
            name:'truck',
            label:'Car_truck07',
            position:{x:250,y:230,z:-3},
            open:20,
            openDur:2.3,
            close:22.3,
            closeDur:4
        }
    ];

    function closeOther(object){
        group.traverse(function(child){
            if ( child instanceof THREE.Sprite ) {
                if(object.name !== child.name){
                    child.status = 'close';
                }
            }
        })
    }


    var loader = new THREE.FBXLoader( manager );
    var fbxSrc = /github\.io/.test(location.href) ? 'https://raw.githubusercontent.com/bobby169/3dcar/master/R9V43.fbx' : 'R9v43.fbx';
    loader.load( fbxSrc, function( object ) {
        //目前解析这个模型要花大约2.5秒
        console.info('parseOK!');
        group = object;
        object.scale.multiplyScalar(1);
        object.mixer = new THREE.AnimationMixer( object );
        mixers.push( object.mixer );
        action = object.mixer.clipAction( object.animations[ 0 ] );
        object.scale.set(.0034,.0034,.0034);
        object.position.set(0,-0.25,0)
        scene.add( object );

        var r = "img/hj/";
        var urls = [ r + "posx.jpg", r + "negx.jpg",
                     r + "posy.jpg", r + "negy.jpg",
                     r + "posz.jpg", r + "negz.jpg" ];

        textureCube = new THREE.CubeTextureLoader().load( urls );

        object.traverse( function ( child ) {
            if ( child instanceof THREE.Mesh ) {
                change(child);
                dots.forEach(function(v,k){
                    if(new RegExp(v.label).test(child.name)){
                        var sprite = createSpriteShape();
                        sprite.name = v.name;
                        sprite.open = v.open;
                        sprite.openDur = v.openDur * 1000;
                        sprite.close = v.close;
                        sprite.closeDur = v.closeDur * 1000;
                        sprite.status = 'close';
                        sprite.scale.set(40,40,40);
                        sprite.position.copy(v.position);
                        child.add(sprite);
                    }
                })
            }
        } );


    }, onProgress, onError );

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );
    controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.minPolarAngle = -Math.PI / 1.90;
    controls.maxPolarAngle = Math.PI / 1.9;
    controls.target.set( 0, 0, 0 );
    controls.addEventListener('change',function(e){
        //console.info(e.target.object.position)
    })
    controls.enableZoom = false;
    camera.position.set(-1.7077679027035708, -0.043401824895598545,0.9930627089978632);
    controls.update();
    window.addEventListener( 'resize', onWindowResize, false );

    light = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
    light.position.set(0, 1, 0);
    scene.add(light);

    var lightColor = 0xffffff;
    var ambient = new THREE.AmbientLight( 0x050505 );
    // scene.add( ambient );

    var pointLight = new THREE.PointLight( lightColor, 1 );
    pointLight.position.set( 2000, 1200, 10000 );
    scene.add( pointLight );

    var pointLight2 = new THREE.PointLight( lightColor, 1 );
    pointLight2.position.set( 2000, 1200, -10000 );
    scene.add( pointLight2 );

    var directionalLight = new THREE.DirectionalLight( lightColor, 1 );
    directionalLight.position.set( 0, 10, 0 ).normalize();
    directionalLight.rotation.z = 90 * ( Math.PI / 180 );
    scene.add( directionalLight );


    function onMouseDown( event ) {
        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        raycaster.setFromCamera( mouse, camera );
        group.traverse(function(child){
            if ( child instanceof THREE.Sprite ) {
                var intersects = raycaster.intersectObjects(child.parent.children);
                for ( var i = 0; i < intersects.length; i++ ) {
                    if(timer) clearTimeout(timer);
                    var object = intersects[i].object;
                    var status = object.status;
                    if(status  === 'close'){
                        action.time = object.open;
                        action.paused = false;
                        action.play();
                        object.status = 'open';
                        closeOther(object);
                        timer = setTimeout(function(){
                            action.paused = true;
                            if(object.name == 'fl' || object.name == 'fr'){
                                openDoor();
                            }
                        },object.openDur);
                    }else{
                        action.time = object.close;
                        action.paused = false;
                        action.play();
                        object.status = 'close';
                        timer = setTimeout(function(){
                            action.paused = true;
                        },object.closeDur);
                    }
                }
            }
        })

    }
    window.addEventListener( 'mousedown', onMouseDown, false );
    animate();
}

