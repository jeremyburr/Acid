import {
	LineBasicMaterial,
  Vector3,
  BufferGeometry,
  Line,
} from './three.module.js';

      const blueLineMaterial = new LineBasicMaterial( { color: 0x0000ff } );
      const bluePoints = [];
      bluePoints.push( new Vector3( -8, 0, 0 ) );
      bluePoints.push( new Vector3( 0, 0, 0 ) );
      bluePoints.push( new Vector3( 8, 0, 0 ) );
      const blueLineGeometry = new BufferGeometry().setFromPoints( bluePoints )
      const x = new Line( blueLineGeometry, blueLineMaterial );

      const redLineMaterial = new LineBasicMaterial( { color: 'red' } );
      const redPoints = [];
      redPoints.push( new Vector3( 0, -8, 0 ) );
      redPoints.push( new Vector3( 0, 0, 0 ) );
      redPoints.push( new Vector3( 0, 8, 0 ) );
      const redLineGeometry = new BufferGeometry().setFromPoints( redPoints )
      const y = new Line( redLineGeometry, redLineMaterial );

      const greenLineMaterial = new LineBasicMaterial( { color: 'green' } );
      const greenPoints = [];
      greenPoints.push( new Vector3( 0, 0, -8 ) );
      greenPoints.push( new Vector3( 0, 0, 0 ) );
      greenPoints.push( new Vector3( 0, 0, 8 ) );
      const greenLineGeometry = new BufferGeometry().setFromPoints( greenPoints )
      const z = new Line( greenLineGeometry, greenLineMaterial );

      export {x,y,z}