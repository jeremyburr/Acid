import {
	Shape,
	ShapeGeometry,
	MeshBasicMaterial,
	Mesh,
	DoubleSide,
} from './three.module.js';


      // Hexagons

      const hex0 = new Shape();

      hex0.moveTo(0,4);
      hex0.lineTo(-Math.sqrt(3),3)
      hex0.lineTo(-Math.sqrt(3),1)
      hex0.lineTo(0,0)
      hex0.lineTo(Math.sqrt(3),1)
      hex0.lineTo(Math.sqrt(3),3)

      const hex1 = new Shape();

      hex1.moveTo(0,4);
      hex1.lineTo(-Math.sqrt(3),3)
      hex1.lineTo(-Math.sqrt(3),1)
      hex1.lineTo(0,0)
      hex1.lineTo(Math.sqrt(3),1)
      hex1.lineTo(Math.sqrt(3),3)

      const hex0Geometry = new ShapeGeometry( hex0 );
      const hex1Geometry = new ShapeGeometry( hex1 );

      const material = new MeshBasicMaterial({ 
          color: 0x00ff00,
          /*transparent: true,
          opacity: .1*/
      });
      material.side = DoubleSide;

      const hex0Mesh = new Mesh( hex0Geometry, material ) ;
      const hex1Mesh = new Mesh( hex1Geometry, material ) ;

      export { hex0Mesh, hex1Mesh, }