function main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );

    var light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    scene.add( light );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    var vertices = [
        [ -1, -1, -1 ], // v0
        [ -1, -1,  1 ], // v1
        [ -1,  1, -1 ], // v2
        [  1, -1, -1 ], // v3
        [ -1,  1,  1 ], // v4
        [  1, -1,  1 ], // v5
        [  1,  1, -1 ], // v6
        [  1,  1,  1 ]  // v7
    ];

    var faces = [
        //[ 0, 1, 3 ], // f0
        //[ 0, 3, 5 ], // f1
        //[ 3, 5, 7 ], // f2
        //[ 3, 6, 7 ], // f3
        //[ 2, 6, 7 ], // f4
        //[ 2, 4, 7 ], // f5
        //[ 0, 2, 4 ], // f6
        //[ 0, 1, 4 ], // f7
        //[ 1, 4, 5 ], // f8
        //[ 4, 5, 7 ], // f9
        //[ 0, 2, 3 ], // f10
        //[ 2, 3, 6 ], // f11
        [ 0, 1, 2 ]
    ];

    var v0 = new THREE.Vector3().fromArray( vertices[0] );
    var v1 = new THREE.Vector3().fromArray( vertices[1] );
    var v2 = new THREE.Vector3().fromArray( vertices[2] );
    var id = faces[0];
    var f0 = new THREE.Face3( id[0], id[1], id[2] );

    var geometry = new THREE.Geometry();
    geometry.vertices.push( v0 );
    geometry.vertices.push( v1 );
    geometry.vertices.push( v2 );
    geometry.vertices.push( v3 );
    geometry.vertices.push( v4 );
    geometry.vertices.push( v5 );
    geometry.vertices.push( v6 );
    geometry.vertices.push( v7 );
    geometry.faces.push( f0  );
    //geometry.faces.push( f1  );
    //geometry.faces.push( f2  );
    //geometry.faces.push( f3  );
    //geometry.faces.push( f4  );
    //geometry.faces.push( f5  );
    //geometry.faces.push( f6  );
    //geometry.faces.push( f7  );
    //geometry.faces.push( f8  );
    //geometry.faces.push( f9  );
    //geometry.faces.push( f10 );
    //geometry.faces.push( f11 );
    //    var material = new THREE.MeshBasicMaterial();
    var material = new THREE.MeshLambertMaterial();
    material.vertexColors = THREE.FaceColors;
    geometry.faces[0].color = new THREE.Color( 1, 1, 1 );

    geometry.computeFaceNormals();
    material.side = THREE.FrontSide;

    var triangle = new THREE.Mesh( geometry, material );
    scene.add( triangle );

    //loop();

    function loop()
    {
        requestAnimationFrame( loop );
        triangle.rotation.x += 0.001;
        triangle.rotation.y += 0.001;
        renderer.render( scene, camera );
    }
}
