import {
	Shape,
	ShapeGeometry,
	MeshBasicMaterial,
	Mesh,
	DoubleSide,
} from './three.module.js';

      const shapeHex0 = new Shape();

      shapeHex0.moveTo(0,0);
      shapeHex0.lineTo(-Math.sqrt(3),1)
      shapeHex0.lineTo(-Math.sqrt(3),3)
      shapeHex0.lineTo(0,4)
      shapeHex0.lineTo(Math.sqrt(3),3)
      shapeHex0.lineTo(Math.sqrt(3),1)

      const shapeHex1 = new Shape();

      shapeHex1.moveTo(0,0);
      shapeHex1.lineTo(Math.sqrt(3),-1)
      shapeHex1.lineTo(Math.sqrt(3),-3)
      shapeHex1.lineTo(0,-4)
      shapeHex1.lineTo(-Math.sqrt(3),-3)
      shapeHex1.lineTo(-Math.sqrt(3),-1)

      const geometryHex0 = new ShapeGeometry( shapeHex0 );
      const geometryHex1 = new ShapeGeometry( shapeHex1 );

      const material = new MeshBasicMaterial({ 
          color: 0x00ff00,
          /*transparent: true,
          opacity: .1*/
      });
      material.side = DoubleSide;

      const hex0 = new Mesh( geometryHex0, material ) ;
      const hex1 = new Mesh( geometryHex1, material ) ;

      export {hex0, hex1}