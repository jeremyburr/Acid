import {
	Shape,
	ShapeGeometry,
	MeshBasicMaterial,
	Mesh,
	DoubleSide,
} from '../three.module.js';

    // Top

    const shapeHexTop = new Shape();
    shapeHexTop.moveTo(0,0);
    shapeHexTop.lineTo(-Math.sqrt(3),1)
    shapeHexTop.lineTo(-Math.sqrt(3),3)
    shapeHexTop.lineTo(0,4)
    shapeHexTop.lineTo(Math.sqrt(3),3)
    shapeHexTop.lineTo(Math.sqrt(3),1)
    const geometryHexTop = new ShapeGeometry( shapeHexTop );

    // Bottom

    const shapeHexBottom = new Shape();
    shapeHexBottom.moveTo(0,0);
    shapeHexBottom.lineTo(Math.sqrt(3),-1)
    shapeHexBottom.lineTo(Math.sqrt(3),-3)
    shapeHexBottom.lineTo(0,-4)
    shapeHexBottom.lineTo(-Math.sqrt(3),-3)
    shapeHexBottom.lineTo(-Math.sqrt(3),-1)
    const geometryHexBottom = new ShapeGeometry( shapeHexBottom );

    // Back
    
    const shapeHexBack = new Shape();
    shapeHexBack.moveTo(0,0);
    shapeHexBack.lineTo(Math.sqrt(3),-1)
    shapeHexBack.lineTo(Math.sqrt(3),-3)
    shapeHexBack.lineTo(0,-4)
    shapeHexBack.lineTo(-Math.sqrt(3),-3)
    shapeHexBack.lineTo(-Math.sqrt(3),-1)
    const geometryHexBack = new ShapeGeometry( shapeHexBack );

    const greenMaterial = new MeshBasicMaterial({ 
        color: 0x00ff00,
        /*transparent: true, opacity: .1*/
    });
    greenMaterial.side = DoubleSide;

    const Top = new Mesh( geometryHexTop, greenMaterial ) ;
    const Bottom = new Mesh( geometryHexBottom, greenMaterial ) ;
    const Back = new Mesh( geometryHexBack, greenMaterial ) ;

    export {Top, Bottom, Back}