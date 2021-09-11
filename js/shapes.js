import {
	Shape,
	ShapeGeometry,
	MeshBasicMaterial,
	Mesh,
	DoubleSide,
	LineBasicMaterial,
  Vector3,
  BufferGeometry,
  Line,
} from './three.module.js';

      const heartShape = new Shape();
      heartShape.moveTo(0,2);
      heartShape.lineTo(-Math.sqrt(3),1)
      heartShape.lineTo(-Math.sqrt(3),-1)
      heartShape.lineTo(0,-2)
      heartShape.lineTo(Math.sqrt(3),-1)
      heartShape.lineTo(Math.sqrt(3),1)
      const geometry = new ShapeGeometry( heartShape );
      const material = new MeshBasicMaterial({ 
          color: 0x00ff00,
          /*transparent: true,
          opacity: .1*/
      });
      material.side = DoubleSide;

      const mesh = new Mesh( geometry, material ) ;

      const blueLineMaterial = new LineBasicMaterial( { color: 0x0000ff } );
      const bluePoints = [];
      bluePoints.push( new Vector3( -8, 0, 0 ) );
      bluePoints.push( new Vector3( 0, 0, 0 ) );
      bluePoints.push( new Vector3( 8, 0, 0 ) );
      const blueLineGeometry = new BufferGeometry().setFromPoints( bluePoints )
      const blueLine = new Line( blueLineGeometry, blueLineMaterial );

      const redLineMaterial = new LineBasicMaterial( { color: 'red' } );
      const redPoints = [];
      redPoints.push( new Vector3( 0, -8, 0 ) );
      redPoints.push( new Vector3( 0, 0, 0 ) );
      redPoints.push( new Vector3( 0, 8, 0 ) );
      const redLineGeometry = new BufferGeometry().setFromPoints( redPoints )
      const redLine = new Line( redLineGeometry, redLineMaterial );

      const greenLineMaterial = new LineBasicMaterial( { color: 'green' } );
      const greenPoints = [];
      greenPoints.push( new Vector3( 0, 0, -8 ) );
      greenPoints.push( new Vector3( 0, 0, 0 ) );
      greenPoints.push( new Vector3( 0, 0, 8 ) );
      const greenLineGeometry = new BufferGeometry().setFromPoints( greenPoints )
      const greenLine = new Line( greenLineGeometry, greenLineMaterial );

      export { mesh, blueLine, redLine, greenLine}