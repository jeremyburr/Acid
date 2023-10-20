import * as THREE from './three.module.js';

const phi = (1 + Math.sqrt(5)) / 2;

let unit = new THREE.Group();

let unit_0 = new THREE.Group();
let unit_1 = new THREE.Group();
let unit_2 = new THREE.Group();
let unit_3 = new THREE.Group();
let unit_4 = new THREE.Group();

let units = [unit_0, unit_1, unit_2, unit_3, unit_4];

const thinColor = 0x11a80c;

const tubeMaterialThin = new THREE.MeshPhongMaterial({
  color: thinColor,
  shininess: 200,
  side: THREE.DoubleSide,
});


const tubeMaterial = new THREE.MeshPhongMaterial({
  color: 0xad1152,
  shininess: 200,
  side: THREE.DoubleSide,
});

const tubeMaterialThick = new THREE.MeshPhongMaterial({
  color: 0x004bb5,
  shininess: 200,
  side: THREE.DoubleSide,
});

// Add Line

function addLine(start, end, size, unitPosition) {
  const coordinates = [];
  coordinates.push(new THREE.Vector3(...start));
  coordinates.push(new THREE.Vector3(...end));
  const curve = new THREE.CatmullRomCurve3(coordinates);
  let tubeWidth = size === "thin" ? 1 : 1.5;
  let tubeMaterialVar = size === "thin" ? tubeMaterialThin : tubeMaterialThick;
  const geometry = new THREE.TubeGeometry(curve, 64, tubeWidth, 16, false)
  const addLine = new THREE.Mesh(geometry, tubeMaterialVar);
  units[unitPosition].add(addLine);
}

// Find End Coordinates for New Segment

function returnEndPosition(startPosition, direction, magnitude) {
  const startX = startPosition[0];
  const startY = startPosition[1];
  const startZ = startPosition[2];
  const dirX = direction[0];
  const dirY = direction[1];
  const dirZ = direction[2];
  let endPosition = [];
  endPosition.push(dirX * magnitude + startX);
  endPosition.push(dirY * magnitude + startY);
  endPosition.push(dirZ * magnitude + startZ);
  return endPosition;
}

// Add Segment

function addVectorLine(name, start, direction, magnitude, unitPosition) {
  const coordinates = [];
  coordinates.push(new THREE.Vector3(start[0], start[1], start[2]));
  const end = returnEndPosition(start, direction, magnitude);
  coordinates.push(new THREE.Vector3(end[0], end[1], end[2]));
  const curve = new THREE.CatmullRomCurve3(coordinates);
  const geometry = new THREE.TubeGeometry(curve, 64, .80, 16, false)
  globalThis[name] = new THREE.Mesh(geometry, tubeMaterial);
  //unit.add(globalThis[name]);

  //units[unitPosition].add(globalThis[name]);
}

// Add Curve

function addCurve(coordinates, unitPosition) {
  let YNegCurveVectors = [];
  for (const coordinate of coordinates) {
    YNegCurveVectors.push(new THREE.Vector3(coordinate[0], coordinate[1], coordinate[2]));
  }
  const YNegCurve = new THREE.QuadraticBezierCurve3(YNegCurveVectors[0], YNegCurveVectors[1], YNegCurveVectors[2]);
  const YNegCurvePoints = YNegCurve.getPoints(1000);
  const YNegCurveGeometry = new THREE.TubeGeometry(YNegCurve, 64, .4, 16, false)
  const YNegCurveMaterial = new THREE.MeshPhongMaterial({ color: thinColor });
  const YNegCurveObject = new THREE.Mesh(YNegCurveGeometry, YNegCurveMaterial);
  //unit.add(YNegCurveObject);
  units[unitPosition].add(YNegCurveObject);
}


function addPane(coordinates,color, unitPosition) {

  const material = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide,
    vertexColors: true,
    transparent: true,
    opacity: .9
  });

  let colors = [
    0, 0, 1,
    1, 0, 1,
    0, 1, 1,
  ]

  const wingColors = [
    1, .46, 0,
    1, 0, 0,
    1, 1, 0,
  ]

  if (color==="orange") {
    colors = wingColors;
  }

  const geometryPane = new THREE.BufferGeometry();
  geometryPane.setAttribute('position', new THREE.Float32BufferAttribute(
    coordinates, 3)
  );
  geometryPane.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  const meshPane = new THREE.Mesh(geometryPane, material);
  //unit.add(meshPane);
  //units[unitPosition].add(meshPane);

}

// Add Sphere

function addSphere(origin) {

  const geometry = new THREE.SphereGeometry(2.75, 8);

  //const material = new THREE.MeshPhongMaterial({ color: 0xFFFFFF, opacity: 0.5 });
  /*const material = new THREE.MeshPhongMaterial({
    color: 0xFFFFFF,    // red (can also use a CSS color string here)
    shininess: 150,
    side: THREE.DoubleSide,
    metalness: 0.5,
    emissive: 'red'
  });*/

  const material = new THREE.MeshPhongMaterial({ color: 0xff8103 });
  const sphere = new THREE.Mesh(geometry, material);


  unit.add(sphere);

  sphere.position.set(...origin);

}


// Degrees To Radians

function degreesToRadians(degrees) {
  var pi = Math.PI;
  return degrees * (Math.PI / 180);
}

export {
  unit,
  unit_0,
  unit_1,
  unit_2,
  unit_3,
  unit_4,
  tubeMaterial,
  returnEndPosition,
  addVectorLine,
  addLine,
  addCurve,
  degreesToRadians,
  phi,
  addSphere,
  addPane
}