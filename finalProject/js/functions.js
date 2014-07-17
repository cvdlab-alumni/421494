var Sound = function(srcFile) {
	var audio = document.createElement('audio');
	var source = document.createElement('source');
	// var radius 
	source.src = srcFile;
	audio.appendChild(source);

	this.play = function() {
		audio.play();
	}
	this.pause = function() {
		audio.pause();
	}
}



function make_wall_moreHoles(geom,a_hole_x, b_hole_y,h2,x_hole, y_hole, z_hole){		
		var cube_geometry2 = new THREE.BoxGeometry( a_hole_x, b_hole_y, h2 );
		cube_geometry2 = new THREE.Mesh( cube_geometry2 );		
		cube_geometry2.position.x=x_hole;
		cube_geometry2.position.y=y_hole;
		cube_geometry2.position.z=z_hole;
		var cube_bsp2 = new ThreeBSP( cube_geometry2 );
		var result = geom.subtract( cube_bsp2 );
		return result;
	  }	  
	  
function geom_texture(geom, texture_wall_ext){
		texture = THREE.ImageUtils.loadTexture('textures/'+texture_wall_ext);
		texture.wrapS = THREE.RepeatWrapping; 
		texture.wrapT = THREE.RepeatWrapping;
		texture.repeat.set( 1,1 );
		var result = geom.toMesh( new THREE.MeshLambertMaterial({ shading: THREE.FlatShading, map: texture }) );
		result.geometry.computeVertexNormals();
		return result;
}

function make_wall(geom,a_hole_x, b_hole_y,h2,x_hole, y_hole, z_hole,texture_wall_ext){
		geom = new THREE.Mesh( geom );
		var cube_bsp1 = new ThreeBSP( geom );
		
		var cube_geometry2 = new THREE.BoxGeometry( a_hole_x, b_hole_y, h2 );
		cube_geometry2 = new THREE.Mesh( cube_geometry2 );
		
		cube_geometry2.position.x=x_hole;
		cube_geometry2.position.y=y_hole;
		cube_geometry2.position.z=z_hole;
		var cube_bsp2 = new ThreeBSP( cube_geometry2 );
		
		texture = THREE.ImageUtils.loadTexture('textures/'+texture_wall_ext);
		texture.wrapS = THREE.RepeatWrapping; 
		texture.wrapT = THREE.RepeatWrapping;
		texture.repeat.set( 1,1 ); 
		
		var subtract_bsp = cube_bsp1.subtract( cube_bsp2 );
		var result = subtract_bsp.toMesh( new THREE.MeshLambertMaterial({ shading: THREE.FlatShading, map: texture }) );
		result.geometry.computeVertexNormals();
		return result;
	  }
	  
	  function make_externalWalls(){
		//ext front
		var walls_external = new THREE.Object3D();
	    var cube_geometry_front_ext = new THREE.BoxGeometry( 6.3, 0.05, 3 );
	    var wall_e_front = make_wall(cube_geometry_front_ext,1.6,0.05,2.1,1.85,0,-0.15,'texture_ext.png');
	    wall_e_front.position.set(3.15,0,1.5);
		walls_external.add(wall_e_front);
	    //ext right
	    var cube_geometry_right_ext = new THREE.BoxGeometry( 0.05, 10.1, 3 );
	    var wall_e_right = make_wall(cube_geometry_right_ext,0.001,0.001,0.001,0,0,0,'textureR.png');
	    wall_e_right.position.set(6.28,5.05,1.5);
		walls_external.add(wall_e_right);
	    //ext rear
	    var wall_e_rear = make_wall(cube_geometry_front_ext,1.65,0.05,1.5,-1.1,0,0.35,'texture_ext_rear.png');
	    wall_e_rear.position.set(3.15,10.08,1.5);
		walls_external.add(wall_e_rear);
	    //ext left
	    var geom_l = new THREE.Mesh( cube_geometry_right_ext );
	    var cube_bsp1 = new ThreeBSP( geom_l );
	    var wall_e_left = make_wall_moreHoles(cube_bsp1,0.05,1.6,1.5,0,-3.35,0.35);
		wall_e_left = make_wall_moreHoles(wall_e_left,0.05,1.2,1.5,0,-0.85,0.35);
		wall_e_left = make_wall_moreHoles(wall_e_left,0.05,1.15,1.5,0,1.4,0.35);
		wall_e_left = make_wall_moreHoles(wall_e_left,0.05,1,2.1,0,3.75,-0.15);
	    var wall_e_left = geom_texture(wall_e_left,'textureL.png');
	    wall_e_left.position.set(0.02,5.05,1.5);
		walls_external.add(wall_e_left);
		return walls_external;
	  }
	  function make_internalWalls(){
	  //corridoio
		var walls_internal = new THREE.Object3D();
		var wall_i_cor_r_geom = new THREE.BoxGeometry( 0.03, 7.7, 3 );
		var wall_i_cor_r = make_wall(wall_i_cor_r_geom,0.001,0.001,0.001,0,0,0,'stuhhi1.png');
		wall_i_cor_r.position.set(6,3.9,1.5);
		walls_internal.add(wall_i_cor_r);
		
		var wall_i_cor_l_geom = new THREE.Mesh(new THREE.BoxGeometry( 0.03, 7.7, 3 ));
		var wall_geom = new ThreeBSP(wall_i_cor_l_geom);
		var wall_i_cor_l = make_wall_moreHoles(wall_geom,0.03,1,2.1,0,-2.2,-0.15);
		wall_i_cor_l = make_wall_moreHoles(wall_i_cor_l,0.03,1,2.1,0,0.3,-0.15);
		wall_i_cor_l = make_wall_moreHoles(wall_i_cor_l,0.03,1,2.1,0,2.55,-0.15);
		wall_i_cor_l = geom_texture(wall_i_cor_l,'stuhhi1.png');
		wall_i_cor_l.position.set(4,3.9,1.5);
		walls_internal.add(wall_i_cor_l);
		
		var wall_i_cor_f_geom = new THREE.BoxGeometry( 2.1, 0.03, 3 );
		var wall_i_cor_f = make_wall(wall_i_cor_f_geom,1.6,0.03,2.1,0,0,-0.15,'stuhhi1.png');
		wall_i_cor_f.position.set(5,0.3,1.5);
		walls_internal.add(wall_i_cor_f);
		
		var wall_i_cor_r = make_wall(wall_i_cor_f_geom,1,0.03,2.1,0,0,-0.15,'stuhhi1.png');
		wall_i_cor_r.position.set(5,7.59,1.5);
		walls_internal.add(wall_i_cor_r);
		
		//bagno
		var wall_i_bagno_f = make_wall(wall_i_cor_f_geom,1,0.03,2.1,0,0,-0.15,'bagnoF.png');
		wall_i_bagno_f.position.set(5,7.79,1.5);
		var bagno_geom =  new ThreeBSP( new THREE.Mesh(new THREE.BoxGeometry( 2.1, 0.03, 3 )));
		wall_i_bagno_l = geom_texture(bagno_geom,'bagno.png');
		wall_i_bagno_l.rotation.z= Math.PI/2;
		wall_i_bagno_l.position.set(4,8.8,1.5);
		wall_i_bagno_r = geom_texture(bagno_geom,'bagno.png');
		wall_i_bagno_r.rotation.z= -Math.PI/2;
		wall_i_bagno_r.position.set(6,8.8,1.5);
		wall_i_bagno_re = geom_texture(bagno_geom,'bagno.png');
		wall_i_bagno_re.position.set(5,9.79,1.5);
		var bagno = new THREE.Object3D();
		bagno.add(wall_i_bagno_f);
		bagno.add(wall_i_bagno_l);
		bagno.add(wall_i_bagno_r);
		bagno.add(wall_i_bagno_re);
		
		var wall_i_geom = new ThreeBSP( new THREE.Mesh(new THREE.BoxGeometry( 3.6, 0.03, 3 )));
		//room1
		var room1_f = geom_texture(wall_i_geom, 'stuhhi1.png');
		room1_f.position.set(2.05,0.3,1.5);
		var room1 = new THREE.Object3D();
		var room1_r = geom_texture(wall_i_geom, 'stuhhi1.png');
		room1_r.position.set(2.05,3.1,1.5);
		var room1_l_geom = new ThreeBSP(new THREE.Mesh(new THREE.BoxGeometry( 0.03, 2.9, 3 )));
		var room1_l = make_wall_moreHoles(room1_l_geom,0.03,1.6,1.5,0,0,0.35);
		room1_l= geom_texture(room1_l,'stuhhi1.png');
		room1_l.position.set(0.3,1.7,1.5);
		var room1_ri_geom = new ThreeBSP(new THREE.Mesh(new THREE.BoxGeometry( 0.03, 2.9, 3 )));
		var room1_ri = make_wall_moreHoles(room1_ri_geom,0.03,1,2.1,0,0,-0.15);
		room1_ri= geom_texture(room1_ri,'stuhhi1.png');
		room1_ri.position.set(3.8,1.7,1.5);
		room1.add(room1_ri);
		room1.add(room1_l);
		room1.add(room1_r);
		room1.add(room1_f);
		
		//room2
		var room2 = new THREE.Object3D();
		var room2_f = geom_texture(wall_i_geom, 'stuhhi2.png');
		room2_f.position.set(2.05,3.29,1.5);
		var room2_r = geom_texture(wall_i_geom, 'stuhhi2.png');
		room2_r.position.set(2.05,5.1,1.5);
		var room2_l_geom = new ThreeBSP(new THREE.Mesh(new THREE.BoxGeometry( 0.03, 1.9, 3 )));
		var room2_l = make_wall_moreHoles(room2_l_geom,0.03,1.2,1.5,0,0,0.35);
		room2_l= geom_texture(room2_l,'stuhhi2.png');
		room2_l.position.set(0.3,4.2,1.5);
		var room2_ri_geom = new ThreeBSP(new THREE.Mesh(new THREE.BoxGeometry( 0.03, 1.9, 3 )));
		var room2_ri = make_wall_moreHoles(room2_ri_geom,0.03,1,2.1,0,0,-0.15);
		room2_ri= geom_texture(room2_ri,'stuhhi2.png');
		room2_ri.position.set(3.8,4.2,1.5);
		room2.add(room2_ri);
		room2.add(room2_l);
		room2.add(room2_r);
		room2.add(room2_f);
		
		//kitchen
		var kitchen = new THREE.Object3D();
		var kitchen_f = geom_texture(wall_i_geom, 'white.png');
		kitchen_f.position.set(2.05,5.29,1.5);
		var wall_kitchen_box = new THREE.BoxGeometry( 3.6, 0.03, 3 );
		var kitchen_r = make_wall(wall_kitchen_box,1.08,0.03,2.1,1.16,0,-0.15,'white.png');
		kitchen_r.position.set(2.0,7.6,1.5);
		var kitchen_l_geom = new ThreeBSP(new THREE.Mesh(new THREE.BoxGeometry( 0.03, 2.4, 3 )));
		var kitchen_l = make_wall_moreHoles(kitchen_l_geom,0.03,1.15,1.5,0,0,0.35);
		kitchen_l= geom_texture(kitchen_l,'white.png');
		kitchen_l.position.set(0.31,6.45,1.5);
		var kitchen_ri_geom = new ThreeBSP(new THREE.Mesh(new THREE.BoxGeometry( 0.03, 2.4, 3 )));
		kitchen_ri_geom = make_wall_moreHoles(kitchen_ri_geom,0.03,1,2.1,0,0,-0.15);
		var kitchen_ri= geom_texture(kitchen_ri_geom,'white.png');
		kitchen_ri.position.set(3.8,6.45,1.5);
		kitchen.add(kitchen_ri);
		kitchen.add(kitchen_l);
		kitchen.add(kitchen_r);
		kitchen.add(kitchen_f);

		//eating room
		var room3 = new THREE.Object3D();
		var room3_f = make_wall(wall_kitchen_box,1.08,0.03,2.1,1.16,0,-0.15,'white.png');
		room3_f.position.set(2.0,7.8,1.5);
		var room3_l_geom = new ThreeBSP(new THREE.Mesh(new THREE.BoxGeometry( 0.03, 2.1, 3 )));
		var room3_l = make_wall_moreHoles(room3_l_geom,0.03,1,2.1,0,0,-0.15);
		room3_l= geom_texture(room3_l,'white.png');
		room3_l.position.set(0.3,8.8,1.5);
		var room3_r_geom = new ThreeBSP(new THREE.Mesh(new THREE.BoxGeometry( 3.6, 0.03, 3 )));
		var room3_r = make_wall_moreHoles(room3_r_geom,1.65,0.03,1.5,0,0,0.35);
		room3_r= geom_texture(room3_r,'white.png');
		room3_r.position.set(2.05,9.8,1.5);
		var room3_ri_geom = new ThreeBSP(new THREE.Mesh(new THREE.BoxGeometry( 0.03, 2.1, 3 )));
		var room3_ri= geom_texture(room3_ri_geom,'white.png');
		room3_ri.position.set(3.8,8.8,1.5);
		room3.add(room3_ri);
		room3.add(room3_r);
		room3.add(room3_l);
		room3.add(room3_f);
		
		
		walls_internal.add(room3);
		walls_internal.add(kitchen);
		walls_internal.add(room2);
		walls_internal.add(room1);
		walls_internal.add(bagno);
//		walls_internal.scale.set(2,2,1);
		return walls_internal;
	  }
	  function make_pavimento(){
		var pavimento = new THREE.Object3D();
		//corr
		var corr_geom = new ThreeBSP(new THREE.Mesh(new THREE.BoxGeometry( 2.1, 7.55, 0.02 )));
		var corr = geom_texture(corr_geom,'corridoioL.png');
		corr.position.set(4.95,3.925,0.3);
		pavimento.add(corr);
		
		var bagno_geom = new ThreeBSP(new THREE.Mesh(new THREE.BoxGeometry( 2.1, 2.1, 0.02 )));
		var bag = geom_texture(bagno_geom,'bagnoDown.png');
		bag.position.set(4.95,8.75,0.3);
		pavimento.add(bag);
		
		
		var parq_geom = new ThreeBSP(new THREE.Mesh(new THREE.BoxGeometry( 3.6, 4.8, 0.02 )));
		var roomsParq = geom_texture(parq_geom,'roomParq.png');
		roomsParq.position.set(2.1,2.7,0.3);
		pavimento.add(roomsParq);
		
		var kit_geom = new ThreeBSP(new THREE.Mesh(new THREE.BoxGeometry( 3.75, 4.5, 0.02 )));
		var kit = geom_texture(kit_geom,'corridoio.png');
		kit.position.set(2.025,7.55,0.3);
		pavimento.add(kit);
		pavimento.castShadow=true;
		pavimento.receiveShadow = true;
		return pavimento;
	  }
	 function make_doubleWindow(x,h,half){
		var window = new THREE.Object3D();
		var antL = new THREE.Object3D();
		var antR = new THREE.Object3D();
		var material = new THREE.MeshLambertMaterial({color: 0x993300});
		material.side = THREE.DoubleSide;
		
		var geom1 = new ThreeBSP( new THREE.Mesh(new THREE.BoxGeometry((x/2)-(half/2), 0.1, h)));
		x1 = (x/2)-(half/2)-0.05;
		var geom_ext = make_wall_moreHoles(geom1,x1,0.1,h-0.05,0,0,0);
		var ext1 = geom_texture(geom_ext,'lamber.png');
		var ext2 = geom_texture(geom_ext,'lamber.png');
		
		glass = new THREE.BoxGeometry(x1,0.01,h-0.05)
		var glass1 = new THREE.Mesh(glass, new THREE.MeshLambertMaterial({color: 0x99CCFF, opacity: 0.6, transparent: true}));
		var glass2 = new THREE.Mesh(glass, new THREE.MeshLambertMaterial({color: 0x99CCFF, opacity: 0.6, transparent: true}));
		ext1.add(glass1);
		ext2.add(glass2);
		ext1.glass1 = glass1;
		ext1.position.x=((x/2)/2);
		ext2.position.x=(-(x/2)/2);
		glass1.open=false;
		glass2.open=false;
		//antL.name="antaL";
		antL.add(ext1);
		antR.add(ext2);
		
		antR.position.x=2*(x/2)+half;
		
		lista.push(glass1);
		lista.push(glass2);
		
		glass1.interact=function(){
		if(!glass1.open){
			new TWEEN.Tween(glass1.parent.parent.rotation).to({z: -Math.PI*2/5},1500).start();
			glass1.open=true;
		} else {
			new TWEEN.Tween(glass1.parent.parent.rotation).to({z: 0},1500).start();
			glass1.open=false;
		}
	}
		
		glass2.interact=function(){
		if(!glass2.open){
			new TWEEN.Tween(glass2.parent.parent.rotation).to({z: Math.PI*2/5},1500).start();
			glass2.open=true;
		} else {
			new TWEEN.Tween(glass2.parent.parent.rotation).to({z: 0},1500).start();
			glass2.open=false;
		}
	}
		window.add(antL);
		window.antL=antL
		window.add(antR);
		window.antR=antR;
		window.open=false;
		window.castShadow=true;
		window.receiveShadow = true;
		
//		glass1.parent.parent.rotation.z = -Math.PI/2;
//		window.antL.rotation.z = -Math.PI/2;
		return window;
	 }
	 function make_all_windows(){
		 windows= new THREE.Object3D();	
		 win1 = make_doubleWindow(1.6,1.5,0.05);
		 win1.rotation.z=-Math.PI/2;
		 win1.position.set(0.2,2.53,1.85);
		 win2 = make_doubleWindow(1.15,1.5,0.05);
		 win2.rotation.z=-Math.PI/2;
		 win2.position.set(0.2,4.8,1.85);
		 win3 = make_doubleWindow(1.65,1.5,0.05);
		 win3.rotation.z=-Math.PI;
		 win3.position.set(2.875,10,1.85);
		 win4 = make_portaBalcony(1.5,0.2,1.2,-Math.PI/2*1/5);
		 win4.rotation.x=-Math.PI/2;
		 win4.rotation.y=Math.PI;
		 win4.t={z: -Math.PI/2*1/5};
		 win4.position.set(0.2,6.45,1.1);
		 windows.add(win4);
		 windows.add(win3);
		 windows.add(win2);
		 windows.add(win1);
		 return windows;
	 }
	 function createMesh(geom, imageFile, bump) {
            var texture = THREE.ImageUtils.loadTexture("textures/" + imageFile)
            geom.computeVertexNormals();
            var mat = new THREE.MeshPhongMaterial();
            mat.map = texture;

            if (bump) {
                var bump = THREE.ImageUtils.loadTexture("textures" + bump)
                mat.bumpMap = bump;
                mat.bumpScale = -0.6;
            }
            var mesh = new THREE.Mesh(geom, mat);
            return mesh;
        }
	 function make_blindata(){
	  var cubeGeometry = new THREE.BoxGeometry(1.6,0.3,2.1);
      var cube = createMesh(cubeGeometry,'blindata.jpg','blindataBump.jpg');
	  cube.position.set(-0.8,0,0)
	  var hook = new THREE.Object3D();
	  hook.add(cube);
	  hook.position.set(5.8,0.15,1.35);
	  //hook.rotation.z=Math.PI/2;
	  lista.push(cube);
	  cube.open=false;
	  
	  cube.interact=function(){
		if(!cube.open){
			soundRadio = new Sound(['sound/Door.mp3'], 10, 1);
			soundRadio.play();
			new TWEEN.Tween(cube.parent.rotation).to({z: -Math.PI/2},5000).start();
			cube.open=true;
		} else {
			new TWEEN.Tween(cube.parent.rotation).to({z: 0},1500).start();
			cube.open=false;
		}
	  }
	    hook.castShadow=true;
		hook.receiveShadow = true;
	  return hook;
	 }
	 function make_portaBalcony(x,y,h,a){
	    var portaBalcony = new THREE.Object3D();
		ant = new THREE.Object3D();
		
		var material = new THREE.MeshLambertMaterial({color: 0x993300});
		material.side = THREE.DoubleSide;
		
		var geom1 = new ThreeBSP( new THREE.Mesh(new THREE.BoxGeometry(y,x,h)));
		x1 = x-0.05;
		var geom_ext = make_wall_moreHoles(geom1,y,x1,h-0.05,0,0,0);
		var ext3 = geom_texture(geom_ext,'lamber.png');
		//ext3.position.set(0,-x/2,0);
		
		var geom2 = new ThreeBSP( new THREE.Mesh(new THREE.BoxGeometry(y/2,x1,h-0.05)));
		x1 = x1-0.05;
		var geom_ext2 = make_wall_moreHoles(geom2,y/2,x1,h-0.05-0.05,0,0,0);
		var ext4 = geom_texture(geom_ext2,'lamber.png');
		//ext4.position.set(0,-x/2,0);
		
		glass = new THREE.BoxGeometry(0.01,x1,h-0.05-0.05);
		var glass3 = new THREE.Mesh(glass, new THREE.MeshLambertMaterial({color: 0x99CCFF, opacity: 0.6, transparent: true}));

		ext4.add(glass3);
		ext4.glass3=glass3;
		ext4.position.y=(-x/2);
		//ant.position.y=x/2;
		ant.add(ext4);
		ext3.position.y=-x/2;
		
		glass3.open=false;
		
		portaBalcony.add(ant);
		portaBalcony.add(ext3);
		lista.push(glass3);
		portaTarget = {z: a};
		portaBalcony.t=portaTarget;
		glass3.interact=function(){
		if(!glass3.open){
			new TWEEN.Tween(glass3.parent.parent.rotation).to(portaBalcony.t,1500).start();
			glass3.open=true;
		} else {
			new TWEEN.Tween(glass3.parent.parent.rotation).to({z: 0},1500).start();
			glass3.open=false;
		}
		}
		return portaBalcony;
	}
	 function make_porta(x,y,apertura,direzione,tex1,texBump){
	  var cubeGeometry = new THREE.BoxGeometry(x-0.07,y,2.05);
      var cube = createMesh(cubeGeometry,tex1,texBump);
	  var porta = new THREE.Object3D();
	  var helper = new THREE.Object3D();
	  var mostra_box = new THREE.BoxGeometry( x, 0.2, 2.1 );
	  var mostra = make_wall(mostra_box,x-0.07,0.2,2.05,0,0,0,'lamber.png');
	  
	  
	  var hook = new THREE.Object3D();
	  
	  if (apertura==='left'){
		cube.rotation.z=Math.PI;
		cube.position.set(x/2,0,0);
		//mostra.rotation.z=Math.PI;
		mostra.position.set(x/2,0,0);
		
		
	  } else {
		cube.position.set(-x/2,0,0);
		mostra.position.set(-x/2,0,0);
	  }
	  porta.add(mostra);
	  //set hook
	  if (direzione==='yaxis'){
		hook.rotation.z=Math.PI/2;
		helper.rotation.z=Math.PI/2;
		target={z: Math.PI/2};
		if (apertura==='left'){
			target2 = { z: Math.PI};
		} else {
			target2 = { z: 0};
		}
	  } else {
		target = {z: 0};
		if (apertura==='left'){
			target2 = { z: Math.PI/2};
		} else {
			target2 = { z: -Math.PI/2};
		}
	  }
	  porta.target=target;
	  porta.target2=target2;
	  helper.add(mostra);
	  hook.add(cube);
	  porta.add(hook);
	  porta.add(helper);
	  lista.push(cube);
	  cube.open=false;
	  
	  cube.interact=function(){
		if (direzione==='yaxis'){
		  if(!cube.open){
		  	new TWEEN.Tween(cube.parent.rotation).to(porta.target2,1500).start();
		  	cube.open=true;
		  } else {
		  	new TWEEN.Tween(cube.parent.rotation).to(porta.target,1500).start();
		  	cube.open=false;
		  }
		} else {
			if(!cube.open){
		  	new TWEEN.Tween(cube.parent.rotation).to(porta.target2,1500).start();
		  	cube.open=true;
		  } else {
		  	new TWEEN.Tween(cube.parent.rotation).to(porta.target,1500).start();
		  	cube.open=false;
		  }
		}
	  }
		porta.castShadow=true;
		porta.receiveShadow = true;
	  return porta;
	 }
	 
	 function make_lamp(rad, pluG){
		var hook = new THREE.Object3D();
		
		var lampG = new THREE.SphereGeometry(rad,24,24,0,Math.PI);
		var lampM = new THREE.MeshPhongMaterial({color: 0xCCCC99, specular: 0xCCCC99, shininess: 50, side: THREE.DoubleSide, metal:true});
		var plaf = new THREE.Mesh(lampG,lampM);
		
		var lampadina_Geometry = new THREE.SphereGeometry(0.1,32,32);
		var lampadina_Material = new THREE.MeshPhongMaterial({color: 0xffef47, transparent:true, opacity:0.4,  wireframe: false});
		var lampadina = new THREE.Mesh(lampadina_Geometry,lampadina_Material);
		
		var CylGeometry = new THREE.CylinderGeometry( 0.01, 0.01, 1, 32 ); 
		var material = new THREE.MeshBasicMaterial( {color: 0x000000} ); 
		var filo = new THREE.Mesh( CylGeometry, material );
		filo.position.set(0,0,0.5);
		filo.rotation.x=Math.PI/2;
		// spotlight
		var spotlight = new THREE.SpotLight(0xffffff , 5);
		spotlight.castShadow = true;
		spotlight.position.set(0,0,0);
		spotlight.shadowCameraVisible = false;
		spotlight.shadowCameraNear = 0.1;
		spotlight.shadowMapWitdh = 1024;
		spotlight.shadowMapHeight = 1024;
		spotlight.shadowCameraFov = 600;
		spotlight.shadowDarkness = 0.2;
		spotlight.angle = Math.PI/2;
		spotlight.visible=0;

		var lightTarget = new THREE.Object3D();
		lightTarget.position.set(0,0,-20);
		lampadina.add(lightTarget);
		spotlight.target = lightTarget;

		lampadina.add(spotlight);
		lampadina.spotlight=spotlight;
		hook.add(lampadina);
		hook.lampadina=lampadina;
		hook.add(filo);
		hook.add(plaf);
		hook.pluG=pluG;
		pluG.lampadina=lampadina;
		pluG.isOn=false;
		lista.push(pluG);
		pluG.interact=function(){
		if (!pluG.isOn){
		  pluG.lampadina.spotlight.visible=1;
		  pluG.isOn=true;
		  pluG.element.rotation.y=0;
		} else {
		  pluG.lampadina.spotlight.visible=0;
		  pluG.isOn=false;
		  pluG.element.rotation.y=-Math.PI/12;
		}
	  }
		return hook;
	 }
	 function make_plug(){
		var plugG = new THREE.BoxGeometry(0.01,0.05,0.05);
		var mat = new THREE.MeshPhongMaterial({color: 0xFFFFCC, side: THREE.DoubleSide});
		var plug = new THREE.Mesh(plugG,mat);
		
		var elemG = new THREE.BoxGeometry(0.02,0.01,0.03);
		var matEl = new THREE.MeshPhongMaterial({color: 0x000000, side: THREE.DoubleSide});
		var element = new THREE.Mesh(elemG,matEl);
		element.rotation.y = Math.PI/12;
		plug.add(element);
		plug.element=element;
		
		return plug;
	 }
	 function make_lamps(){
		var lamps = new THREE.Object3D();
		
		pl1 = make_plug();
		pl1.position.set(4.012,2.4,1.2);
		lampLiv = make_lamp(0.2,pl1);
		lampLiv.position.set(2,1.6,3.7);
		lamps.add(lampLiv);
		lamps.add(pl1);
		
		pl2 = make_plug();
		pl2.position.set(4.012,3.4,1.2);
		lampRoom = make_lamp(0.2,pl2);
		lampRoom.position.set(2,4.2,3.7);
		lamps.add(lampRoom);
		lamps.add(pl2);
		
		pl3 = make_plug();
		pl3.position.set(4.012,5.8,1.2);
		lampKitchen = make_lamp(0.2,pl3);
		lampKitchen.position.set(2,6.7,3.7);
		lamps.add(lampKitchen);
		lamps.add(pl3);
		
		pl4 = make_plug();
		pl4.position.set(3.785,7.1,1.2);
		lampEating = make_lamp(0.2,pl4);
		lampEating.position.set(2,8.8,3.7);
		lamps.add(lampEating);
		lamps.add(pl4);
		
		pl5 = make_plug();
		pl5.position.set(4.3,7.81,1.2);
		pl5.rotation.z=Math.PI/2;
		lampBath = make_lamp(0.2,pl5);
		lampBath.position.set(5,8.8,3.7);
		lamps.add(lampBath);
		lamps.add(pl5);
		
		pl6 = make_plug();
		pl6.position.set(4.012,1.1,1.2);
		lampCorridoio = make_lamp(0.2,pl6);
		lampCorridoio.position.set(5,4,3.7);
		lamps.add(lampCorridoio);
		lamps.add(pl6);
		
		return lamps;
	 }
	 function make_xDoors(){
		xdoors = new THREE.Object3D();
		doorBagno = make_porta(1,0.05,'right','xaxis','portaInterna.gif','portaInternaBump.gif');
		doorBagno.position.set(5.5,7.7,1.35);
		doorBagno.castShadow=true;
		doorBagno.receiveShadow = true;
		
		xdoors.add(doorBagno);
		return xdoors;
	 }
	 
	 function make_allDoors(){
		doors = new THREE.Object3D();
		door1 = make_porta(1,0.05,'left','yaxis','portaInterna.gif','portaInternaBump.gif');
		door1.position.set(3.92,1.20,1.35);
		door2 = make_porta(1,0.05,'left','yaxis','portaInterna.gif','portaInternaBump.gif');
		door2.position.set(3.92,3.7,1.35);
		doorBagno=make_xDoors();
		door3 = make_portaBalcony(1,0.2,2.1,-Math.PI*2/5);
		door3.position.set(0.2,9.3,1.35);
		
		doors.add(door3);
		doors.add(doorBagno);
		doors.add(door2);
		doors.add(door1);
		
		return doors;
	 }
	 function make_frame(x,y,img,imgBW){
		var frame = createMesh(new THREE.BoxGeometry(x, y, 0.05), img,imgBW);
		return frame;
	 }
	 function make_frames(){
		var frames = new THREE.Object3D();
		var frame1 = make_frame(3,1,'gc.jpg','gcBW.jpg');
		frame1.rotation.x=Math.PI/2;
		frame1.rotation.y=Math.PI/2;
		frame1.position.set(6,4,2);
		
		var frame2 = make_frame(2,2,'fruit.jpg','fruitBW.jpg');
		frame2.rotation.x=Math.PI/2;
		//frame2.rotation.y=Math.PI/2;
		frame2.position.set(1.5,7.8,1.5);
		
		frames.add(frame2);
		frames.add(frame1);
		return frames;
	 }
	 
	 function make_balcony(){
		balcony = new THREE.Object3D();
		texture = THREE.ImageUtils.loadTexture( "textures/balc.jpg" );
		texture.wrapS = THREE.RepeatWrapping; 
		texture.wrapT = THREE.RepeatWrapping;
		texture.repeat.set( 1,1 ); 
		material = new THREE.MeshLambertMaterial({ map : texture });
		plane2 = new THREE.Mesh(new THREE.BoxGeometry(1.98,10,0.1), material);
		plane2.side = THREE.DoubleSide;
//		plane2.position.set = (-3,10.05,-0.5);
		
		var wall_balc_geom = new THREE.BoxGeometry( 2, 10.1, 0.8 );
		var wall_balc = make_wall(wall_balc_geom,1.8,9.9,0.8,-0.1,0,0,'base3.png');
		wall_balc.rotation.z=Math.PI;
		wall_balc.position.set(0,0,0.4);
		balcony.add(plane2);
		balcony.add(wall_balc);
//		wall_balc.visible=false;
		balcony.position.set(-1,5.05,0.1);

		return balcony;
	 }
	 
	 function make_tenda(){
		var tenda = new THREE.Object3D();
		
		var Cyl1G = new THREE.CylinderGeometry( 0.01, 0.01, 4, 32 ); 
		var mat1 = new THREE.MeshBasicMaterial( {color: 0x000000} ); 
		var trav = new THREE.Mesh( Cyl1G, mat1 );
//		trav.position.set(0,0,0);
//		trav.rotation.x=Math.PI/2;

		var Cyl3G = new THREE.CylinderGeometry( 0.01, 0.01, 3, 32 );
		var mat3 = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} );
		var trav3 = new THREE.Mesh( Cyl3G, mat3 );
		
		var textureTenda = THREE.ImageUtils.loadTexture( "textures/tenda.jpg" );
		var Cyl2G = new THREE.CylinderGeometry( 0.1, 0.1, 3, 32 ); 
		var mat2 = new THREE.MeshBasicMaterial( {map : textureTenda} ); 
		var trav2 = new THREE.Mesh( Cyl2G, mat2 );
		
		hook = new THREE.Object3D();
		
		plane3 = new THREE.Mesh(new THREE.BoxGeometry(2,3,0.01), mat2);
		plane3.rotation.y=-Math.PI/12;
		plane3.position.set(-0.1,0,0.08);
		
		trav.add(plane3);
		trav.plane3=plane3;
		trav.plane3.scale.set(0.1,1,1);
		trav2.esp=false;
		trav.add(trav2);
		tenda.add(trav);

		tenda.position.set(-0.2,8,2.9);

// target plane3.position.set(-0.98,0,-0.16);
		
		lista.push(trav2);
		trav2.interact=function(){
		if (!trav2.esp){
		  trav2.esp=true;
		  new TWEEN.Tween(trav2.parent.plane3.scale).to({ x: 1},2000).start();
		  new TWEEN.Tween(trav2.parent.plane3.position).to({ x : -0.98, y: 0, z: -0.16},2000).start();
		  new TWEEN.Tween(trav2.rotation).to({ y: -Math.PI/2},2000).start();
		} else {
		  trav2.esp=false;
		  new TWEEN.Tween(trav2.parent.plane3.scale).to({ x: 0.1},2000).start();
		  new TWEEN.Tween(trav2.parent.plane3.position).to({ x : -0.1, y: 0, z: 0.08},2000).start();
		  new TWEEN.Tween(trav2.rotation).to({ y: 0},2000).start();
		}
	  }
		
		return tenda;

	 }
	 
	 function make_tv(){
		var tvG = new THREE.BoxGeometry( 1, 0.01, 0.58, 32 ); 
		var mat1 = new THREE.MeshBasicMaterial( {color: 0x000000} ); 
		var tvN = new THREE.Mesh( tvG, mat1 );
//		trav.position.set(0,0,0);

		var tvG = new THREE.BoxGeometry( 1, 0.01, 0.58, 32 ); 
		var textureTv = THREE.ImageUtils.loadTexture( "textures/signal.jpg" );
		var mat2 = new THREE.MeshBasicMaterial( {map : textureTv} ); 
		var tvC = new THREE.Mesh( tvG, mat2 );
		tvC.visible=false;
		
		tvN.add(tvC);
		tvN.tvC=tvC;
		soundtv = new Sound(['sound/nosignal.mp3'], 10, 1);
		tvN.add(soundtv);
		tvN.vis=false;
		lista.push(tvN);
		
		tvN.interact=function(){
		if (!tvN.vis){
		  soundtv = new Sound(['sound/nosignal.mp3'], 10, 1);
		  soundtv.play();
		  tvN.visible=false;
		  tvN.tvC.visible=true;
		  tvN.vis=true;
		} else {
		  soundtv.pause();
		  tvN.visible=true;
		  tvN.vis=false;
		  tvN.tvC.visible=false;
		}
	  }
	  tvN.position.set(1.55,0.72,1.09);
	  tvN.rotation.z=Math.PI;
	  return tvN;
	 }