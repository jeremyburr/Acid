import {
	Shape,
	ShapeGeometry,
	MeshBasicMaterial,
	Mesh,
	DoubleSide,
} from '../three.module.js';

    // Inner

    const shapeHex0 = new Shape();
    shapeHex0.moveTo(0,0);
    shapeHex0.lineTo(-Math.sqrt(3),1)
    shapeHex0.lineTo(-Math.sqrt(3),3)
    shapeHex0.lineTo(0,4)
    shapeHex0.lineTo(Math.sqrt(3),3)
    shapeHex0.lineTo(Math.sqrt(3),1)
    const geometryHex0 = new ShapeGeometry( shapeHex0 );

    const shapeHex1 = new Shape();
    shapeHex1.moveTo(0,0);
    shapeHex1.lineTo(Math.sqrt(3),-1)
    shapeHex1.lineTo(Math.sqrt(3),-3)
    shapeHex1.lineTo(0,-4)
    shapeHex1.lineTo(-Math.sqrt(3),-3)
    shapeHex1.lineTo(-Math.sqrt(3),-1)
    const geometryHex1 = new ShapeGeometry( shapeHex1 );

    const greenMaterial = new MeshBasicMaterial({ 
        color: 0x00ff00,
        /*transparent: true, opacity: .1*/
    });
    greenMaterial.side = DoubleSide;

    const _0 = new Mesh( geometryHex0, greenMaterial ) ;
    const _1 = new Mesh( geometryHex1, greenMaterial ) ;

    // Outer

    const shapeHexTop = new Shape();
    /*shapeHexTop.moveTo(0,0);
    shapeHexTop.lineTo(-Math.sqrt(3),1)
    shapeHexTop.lineTo(-Math.sqrt(3),3)
    shapeHexTop.lineTo(0,4)
    shapeHexTop.lineTo(Math.sqrt(3),3)
    shapeHexTop.lineTo(Math.sqrt(3),1)*/
    const geometryHexTop = new ShapeGeometry( shapeHexTop );

    const blueMaterial = new MeshBasicMaterial({ 
        color: 0x0000FF,
        /*transparent: true, opacity: .1*/
    });

    blueMaterial.side = DoubleSide;

    const _Top = new Mesh( geometryHexTop, blueMaterial ) ;


    export {_0, _1, _Top}