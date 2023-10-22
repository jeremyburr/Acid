import {
  addVectorLine,
  returnEndPosition,
  degreesToRadians,
  phi,
  addCurve,
  addLine,
  addSphere,
  addPane,
} from '../js/utilities.js'


function Hex_Anvil(origin, unitLength, position) {

  const [orgX, orgY, orgZ] = origin;

  /*****************/

  // L1 X+ Y+ 

  addLine(
    [
      orgX + unitLength,
      orgY,
      orgZ
    ],
    [
      orgX + unitLength,
      orgY + unitLength,
      orgZ
    ]
    , 'thin', position);
    

    // L2 X+ Y+

    addVectorLine('X_Pos_Y_Pos', [orgX + unitLength, orgY + unitLength, orgZ],
      [
        Math.cos(degreesToRadians(0)),
        Math.cos(degreesToRadians(45)),
        Math.cos(degreesToRadians(90))
      ],
      unitLength * Math.sqrt(3),0
    );

  // XZ Pos 

  // Base
  /*addLine(
    [
      orgX + unitLength / 2,
      orgY + unitLength,
      orgZ + (unitLength * Math.sqrt(3)) / 2
    ],
    [
      orgX + unitLength / 2,
      orgY - unitLength,
      orgZ + (unitLength * Math.sqrt(3)) / 2
    ]
    , "thin", position);*/


  // Base
  /*addLine(
    [
      orgX - unitLength,
      orgY + unitLength,
      orgZ
    ],
    [
      orgX - unitLength,
      orgY - unitLength,
      orgZ
    ], 'thin', position);*/

  // XZ Neg 

  // Base
  /*addLine(
    [
      orgX - (unitLength / 2),
      orgY + unitLength,
      orgZ - (unitLength * Math.sqrt(3)) / 2
    ],
    [
      orgX - (unitLength / 2),
      orgY - unitLength,
      orgZ - (unitLength * Math.sqrt(3)) / 2
    ]
    , 'thin', position);*/


  // X Neg Z Pos 

  // Base
  /*addLine(
    [orgX - unitLength / 2, 
     orgY + unitLength, orgZ + (unitLength * Math.sqrt(3)) / 2],
    [orgX - (unitLength / 2), orgY - unitLength, orgZ + (unitLength * Math.sqrt(3)) / 2],
    'thin',
    position);*/


  // X Pos Z Neg 

  // Base
  /*addLine(
    [orgX + (unitLength / 2), orgY + unitLength, orgZ - (unitLength * Math.sqrt(3)) / 2],
    [orgX + (unitLength / 2), orgY - unitLength, orgZ - (unitLength * Math.sqrt(3)) / 2],
    'thin', position);*/

}

export {
  Hex_Anvil
}

// L0 Center Rod

//addLine([orgX, orgY + unitLength, orgZ], [orgX, orgY - unitLength, orgZ],'thin',position);

/*const endPoint1XPosYNeg = returnEndPosition(
    [orgX + unitLength, orgY, orgZ],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi);

    const endPoint1XNueYNegZPos = returnEndPosition(
    [orgX, orgY, orgZ + unitLength],
    [
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(0))
    ],
    unitLength * 1.25 * phi);

    const endPoint1XNegYNeg = returnEndPosition(
    [orgX - unitLength, orgY, orgZ],
    [
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi)

    const YNegXPosZPosPaneInnerCoordinates  =   [
      endPoint1XPosYNeg[0] + 2 * unitLength, orgY - 2 * unitLength, orgZ,
      orgX, orgY - 2 * unitLength, endPoint1XNueYNegZPos[2] + 2 * unitLength,
      endPoint1XNegYNeg[0] - 2 * unitLength, orgY - 2 * unitLength, orgZ
    ];
  

  addPane(YNegXPosZPosPaneInnerCoordinates,"default",position);*/