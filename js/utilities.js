    import * as THREE from './three.module.js';

      let unit = new THREE.Group();

      const tubeMaterial = new THREE.MeshPhongMaterial({
        color: 0x00ff44,
        shininess: 150,
        side: THREE.DoubleSide,
        //emissive: 'red'
      });

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

      function addSegment(name, start, direction, magnitude) {
        const coordinates = [];
        coordinates.push(new THREE.Vector3(start[0], start[1], start[2]));
        const end = returnEndPosition(start, direction, magnitude);
        coordinates.push(new THREE.Vector3(end[0], end[1], end[2]));
        const curve = new THREE.CatmullRomCurve3(coordinates);
        const geometry = new THREE.TubeGeometry(curve, 64, .25, 16, false)
        globalThis[name] = new THREE.Mesh(geometry, tubeMaterial);
        //console.log(name,start,direction,magnitude);
        unit.add(globalThis[name]);
      }

      // Test Segment

      function testSegment(start,end) {
        const coordinates = [];
        coordinates.push(new THREE.Vector3(...start));
        coordinates.push(new THREE.Vector3(...end));
        const curve = new THREE.CatmullRomCurve3(coordinates);
        const geometry = new THREE.TubeGeometry(curve, 64, .25, 16, false)
        const testSegment = new THREE.Mesh(geometry, tubeMaterial);
        unit.add(testSegment);
      }

      // Degrees To Radians

      function degreesToRadians(degrees) {
        var pi = Math.PI;
        return degrees * (Math.PI / 180);
      }

      export {unit, tubeMaterial, returnEndPosition, addSegment, testSegment, degreesToRadians}