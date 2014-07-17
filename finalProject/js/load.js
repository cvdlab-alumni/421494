function importObject(obj) {
	var pivot = new THREE.Object3D(); 
  	loader1 = new THREE.OBJLoader();
    loader1.load(obj, function (obj) {
    	global_o = obj;
        var multiMaterial = [
          new THREE.MeshLambertMaterial({color: 0x999999, metal: true})
        ];
        mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
        pivot.add(mesh);
    });
    return pivot;
}

function loading (pathOBJ, pathMTL){
  var hook = new THREE.Object3D();
  var loader = new THREE.OBJMTLLoader();
  loader.addEventListener('load', function (event){
    var object = event.content;
    hook.add(object);
  });
  loader.load(pathOBJ, pathMTL, {side: THREE.DoubleSide});
  return hook;
}

function loadingObjects(apartment){
	
	var v = loading('models/vase/vase.obj','models/vase/vase.mtl');
	var vase = new THREE.Object3D();
	v.scale.set(0.5,0.5,0.5);
	v.rotation.x=Math.PI/2;
	v.rotation.y=Math.PI;
	vase.add(v);
	vase.position.set(5.7,7,0.31);
	
	var b = loading('models/bath/bath.obj','models/bath/bath.mtl');
	var bath = new THREE.Object3D();
	b.scale.set(0.009,0.009,0.009);
	b.rotation.x=Math.PI/2;
	b.rotation.y=Math.PI;
	bath.add(b);
	bath.position.set(4.8,9.15,0.31);
	
	var wash = loading('models/bath/washbasin.obj','models/bath/washbasin.mtl');
	var washHook = new THREE.Object3D();
	wash.scale.set(0.009,0.009,0.009);
	wash.rotation.x=Math.PI/2;
	wash.rotation.y=Math.PI;
	washHook.add(wash);
	washHook.rotation.z=-Math.PI/2;
	washHook.position.set(4,8.2,0.31);
	
	var water = loading('models/bath/water.obj','models/bath/water.mtl');
	var waterHook = new THREE.Object3D();
	water.scale.set(0.009,0.009,0.009);
	water.rotation.x=Math.PI/2;
	water.rotation.y=Math.PI;
	waterHook.add(water);
	waterHook.rotation.z=-Math.PI/2;
	waterHook.position.set(4.25,8.75,0.31);
	
	var ang = loading('models/bath/angolo.obj','models/bath/angolo.mtl');
	var angoloHook = new THREE.Object3D();
	ang.scale.set(0.009,0.009,0.009);
	ang.rotation.x=Math.PI/2;
	ang.rotation.y=Math.PI;
	angoloHook.add(ang);
	angoloHook.rotation.z=Math.PI/2;
	angoloHook.position.set(3.8,14.4,0.31);
	
	var tab = loading('models/kitchen/Table.obj','models/kitchen/Table.mtl');
	var tabHook = new THREE.Object3D();
	tab.scale.set(0.25,0.25,0.25);
	tab.rotation.x=Math.PI/2;
	tab.rotation.y=Math.PI;
	tabHook.add(tab);
//	tabHook.rotation.z=Math.PI/2;
	tabHook.position.set(1.8,8.85,0.59);
	
	var desk = loading('models/room/desk.obj','models/room/desk.mtl');
	var deskHook = new THREE.Object3D();
	desk.scale.set(0.01,0.01,0.012);
	desk.rotation.x=Math.PI/2;
	desk.rotation.y=Math.PI;
	deskHook.add(desk);
	deskHook.rotation.z=-Math.PI/2;
	deskHook.position.set(0.8,4.2,0.65);
	
	var PC = loading('models/room/computer.obj','models/room/computer.mtl');
	var PCHook = new THREE.Object3D();
	PC.scale.set(0.2,0.2,0.19);
	PC.rotation.x=Math.PI/2;
	PC.rotation.y=Math.PI;
	PCHook.add(PC);
	PCHook.rotation.z=-Math.PI;
	PCHook.position.set(3.6,4.35,1.04);
	
	var el = loading('models/room/element.obj','models/room/element.mtl');
	var elHook = new THREE.Object3D();
	el.scale.set(0.01,0.01,0.01);
	el.rotation.x=Math.PI/2;
	el.rotation.y=Math.PI;
	elHook.add(el);
	//elHook.rotation.z=-Math.PI;
	elHook.position.set(2.5,3.5,0.3);
	
	var jv = loading('models/room/Java.obj','models/room/Java.mtl');
	var javaHook = new THREE.Object3D();
	jv.scale.set(0.01,0.01,0.01);
	jv.rotation.x=Math.PI/2;
	jv.rotation.y=Math.PI;
	javaHook.add(jv);
	javaHook.rotation.z=-Math.PI;
	javaHook.position.set(2.5,3.5,1.96);
	
	var ch = loading('models/room/chair.obj','models/room/chair.mtl');
	var chairHook = new THREE.Object3D();
//	ch.scale.set(0.01,0.01,0.01);
	ch.rotation.x=Math.PI/2;
	ch.rotation.y=Math.PI;
	chairHook.add(ch);
	chairHook.rotation.z=Math.PI/2.5;
	chairHook.position.set(1.25,3.4,0.31);
	
	var cornerSofa = loading('models/livRoom/cornerSofa.obj','models/livRoom/cornerSofa.mtl');
	var cornerSofaHook = new THREE.Object3D();
	cornerSofa.scale.set(0.01,0.01,0.01);
	cornerSofa.rotation.x=Math.PI/2;
	cornerSofa.rotation.y=Math.PI;
	cornerSofaHook.add(cornerSofa);
	cornerSofaHook.rotation.z=Math.PI;
	cornerSofaHook.position.set(0.35,3.1,0.31);
	
	var mebel = loading('models/livRoom/mebel.obj','models/livRoom/mebel.mtl');
	var mebelHook = new THREE.Object3D();
	mebel.scale.set(0.015,0.012,0.008);
	mebel.rotation.x=Math.PI/2;
	mebel.rotation.y=Math.PI;
	mebelHook.add(mebel);
	mebelHook.rotation.z=Math.PI;
	mebelHook.position.set(1.5,0.6,0.7);
	
	var fireside = importObject('models/livRoom/fireside.obj');
	var firesideHook = new THREE.Object3D();
	fireside.scale.set(0.25,0.25,0.25);
	fireside.rotation.x=Math.PI/2;
	fireside.rotation.y=Math.PI;
	firesideHook.add(fireside);
//	firesideHook.rotation.z=Math.PI;
	firesideHook.position.set(3,0.8,0.85);
	
	var woodTable = loading('models/livRoom/woodTable.obj','models/livRoom/woodTable.mtl');
	var woodTableHook = new THREE.Object3D();
	woodTable.scale.set(0.005,0.005,0.005);
	woodTable.rotation.x=Math.PI/2;
	woodTable.rotation.y=Math.PI;
	woodTableHook.add(woodTable);
	woodTableHook.position.set(2.2,1.8,0.5);
	//
	var tv = loading('models/livRoom/TV.obj','models/livRoom/TV.mtl');	
	var tvHook = new THREE.Object3D();
	tv.scale.set(0.5,0.5,0.5);
	tv.rotation.x=Math.PI/2;
	tv.rotation.y=Math.PI;
	tvHook.add(tv);
	tvHook.position.set(1.55,0.7,0.71);
	//
	var kit = loading('models/kitchen/kitchen.obj','models/kitchen/kitchen.mtl');
	var kitchen = new THREE.Object3D();
	kit.rotation.x=Math.PI/2;
	kit.rotation.y=Math.PI;
	kitchen.add(kit);
	kitchen.position.set(3.2,6.3,1.4);
	
	var kit2 = loading('models/kitchen/kitchen2.obj','models/kitchen/kitchen2.mtl');
	var kitchen2 = new THREE.Object3D();
	kitchen2.scale.set(0.6,0.8,1);
	kit2.rotation.x=Math.PI/2;
	//kit2.rotation.y=Math.PI;
	//kit2.rotation.z=Math.PI;
	kitchen2.add(kit2);
	kitchen2.position.set(0.3,8.85,1.4);
	
	var CDrack = loading('models/corridoio/CDrack.obj','models/corridoio/CDrack.mtl');
	var CDrackHook = new THREE.Object3D();
	CDrack.scale.set(0.02,0.02,0.015);
	CDrack.rotation.x=Math.PI/2;
	CDrack.rotation.y=-Math.PI/2;
	CDrackHook.add(CDrack);
	CDrackHook.position.set(4.3,3.6,0.3);
	
	var agg = importObject('models/corridoio/agg.obj');
	var aggHook = new THREE.Object3D();
	agg.scale.set(0.01,0.01,0.01);
	agg.rotation.x=Math.PI/2;
	agg.rotation.y=Math.PI/3;
	aggHook.add(agg);
//	aggHook.rotation.z=Math.PI;
	aggHook.position.set(5.7,6.8,1.15);
	
	
	var radio = loading('models/kitchen/RADIO.obj','models/kitchen/RADIO.mtl');
	var radioHook = new THREE.Object3D();
	radio.scale.set(0.1,0.1,0.1);
	radio.rotation.x=Math.PI/2;
	//radio.rotation.y=-Math.PI/2;
	soundRadio = new Sound(['sound/Kalimba.mp3'], 10, 1, true);
	boxg = new THREE.BoxGeometry( 0.2,0.2,0.25 );
	boxm = new THREE.MeshPhongMaterial({color: 0x000000});
	var box = new THREE.Mesh(boxg, boxm);
	box.position.set(0.3,0.195,-0.05);
	//radio.add(box);
	radio.add(soundRadio);
	radioHook.add(radio);
	radioHook.add(box);
	radioHook.position.set(1.5,7.2,1.4);
	radio.playing=false;
	lista.push(box);	
	box.interact=function(){
		if(!box.parent.playing){
			soundRadio = new Sound(['sound/Kalimba.mp3'], 10, 1);
			soundRadio.play();
			box.parent.playing=true;
		} else {
			soundRadio.pause();
			box.parent.playing=false;
		}
	  }
	
	var umbrella = loading('models/balcony/umbrella.obj','models/balcony/umbrella.mtl');
	var umbrellaHook = new THREE.Object3D();
	umbrella.scale.set(0.016,0.013,0.006);
	umbrella.rotation.x=Math.PI/2;
	umbrella.rotation.y=-Math.PI/2;
	umbrella.castShadow=true;
	umbrellaHook.add(umbrella);
	umbrellaHook.position.set(-0.5,2,0.4);
	
	
	var deckChair = loading('models/balcony/deckChair.obj','models/balcony/deckChair.mtl');
	var deckChairHook = new THREE.Object3D();
	deckChair.scale.set(0.016,0.016,0.006);
	deckChair.rotation.x=Math.PI/2;
	deckChair.rotation.y=-Math.PI;
	deckChairHook.add(deckChair);
	deckChairHook.position.set(-1.2,0.5,0.4);
	
	apartment.add(deckChairHook);
	apartment.add(umbrellaHook);
	apartment.add(radioHook);
	apartment.add(aggHook);
	apartment.add(CDrackHook);
	apartment.add(tvHook);
	apartment.add(woodTableHook);
	apartment.add(firesideHook);
	apartment.add(mebelHook);
	apartment.add(cornerSofaHook);
	apartment.add(chairHook);
	apartment.add(javaHook);
	apartment.add(elHook);
	apartment.add(PCHook);
	apartment.add(deskHook);
	apartment.add(tabHook);
	apartment.add(angoloHook);
	apartment.add(waterHook);
	apartment.add(washHook);
	apartment.add(bath);
	apartment.add(kitchen2);
	apartment.add(kitchen);
	apartment.add(vase);
//	apartment.add(lampLivingRoom);
	return apartment;
}