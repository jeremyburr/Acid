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


function Hex_Anvil(origin, unitLength,position) {

  const [orgX, orgY, orgZ] = origin;

  /*****************/

  // TOP

  //  X Pos Y Pos

  // Base
  addLine(
    [
      orgX + 3 * unitLength,
      orgY + 2 * unitLength,
      orgZ
    ],
    [
      orgX + 3 * unitLength,
      orgY,
      orgZ
    ]
    ,"normal",position
  );


  const endPoint1XPosYPos = returnEndPosition(
    [orgX + unitLength, orgY, orgZ],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXPosYPos = [
    [endPoint1XPosYPos[0] + 2 * unitLength, orgY + 2 * unitLength, orgZ],
    [endPoint1XPosYPos[0] + 2 * unitLength, orgY + unitLength * 4.25, orgZ],
    [endPoint1XPosYPos[0] + unitLength * 4, orgY + unitLength * 4.25, orgZ],
  ]

  addCurve(coordinatesXPosYPos, position);


  //  X Nue Y Pos Z Pos

  // Base
  /*addLine(
    [
      orgX,
      orgY + 2 * unitLength,
      orgZ + 3 * unitLength
    ],
    [
      orgX,
      orgY,
      orgZ + 3 * unitLength
    ]
    ,"normal",position
  );*/
  

  /*const endPoint1XNueYPosZPos = returnEndPosition(
    [orgX, orgY, orgZ + unitLength],
    [
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(0))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXNueYPosZPos = [
    [orgX, orgY + 2 * unitLength, endPoint1XNueYPosZPos[2] + 2 * unitLength],
    [orgX, orgY + unitLength * 4.25, endPoint1XNueYPosZPos[2] + 2 * unitLength],
    [orgX, orgY + unitLength * 4.25, endPoint1XNueYPosZPos[2] + unitLength * 4],
  ]

  //addCurve(coordinatesXNueYPosZPos, position);

  /*****************/

  //  X Nue Y Pos Z Neg

  // Base
/*  addLine(
    [
      orgX,
      orgY + 2 * unitLength,
      orgZ - 3 * unitLength
    ],
    [
      orgX,
      orgY,
      orgZ - 3 * unitLength
    ]
    ,"normal",position
  );

  const endPoint1XNueYPosZNeg = returnEndPosition(
    [orgX, orgY, orgZ - unitLength],
    [
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(180))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXNueYPosZNeg = [
    [orgX, orgY + 2 * unitLength, endPoint1XNueYPosZNeg[2] - 2 * unitLength],
    [orgX, orgY + unitLength * 4.25, endPoint1XNueYPosZNeg[2] - 2 * unitLength],
    [orgX, orgY + unitLength * 4.25, endPoint1XNueYPosZNeg[2] - unitLength * 4],
  ]

  addCurve(coordinatesXNueYPosZNeg, position) ;*/

  /*****************/

  //  X Neg Y Pos

  // Base
  addLine(
    [
      orgX - 3 * unitLength,
      orgY,
      orgZ
    ],
    [
      orgX - 3 * unitLength,
      orgY + 2 * unitLength,
      orgZ
    ]
    ,"normal",position
  );

  addVectorLine(
    'X_Neg_Y_Pos',
    [orgX - 3 * unitLength, orgY + 2 * unitLength, orgZ],
    [
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi,position);

  const endPoint1XNegYPos = returnEndPosition(
    [orgX - unitLength, orgY, orgZ],
    [
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXNegYPos = [
    [endPoint1XNegYPos[0] - 2 * unitLength, orgY + 2 * unitLength, orgZ],
    [endPoint1XNegYPos[0] - 2 * unitLength, orgY + unitLength * 4.25, orgZ],
    [endPoint1XNegYPos[0] - unitLength * 4, orgY + unitLength * 4.25, orgZ],
  ]

  addCurve(coordinatesXNegYPos, position);


  // BOTTOM

  //  X Pos Y Neg

  /*****************/

  // Base
  addLine(
    [
      orgX + 3 * unitLength,
      orgY - 2 * unitLength,
      orgZ
    ],
    [
      orgX + 3 * unitLength,
      orgY,
      orgZ
    ]
    ,"normal",position
  );

    // Return Curve End Positions

    // Y Neg X Pos

  const endPoint1XPosYNeg = returnEndPosition(
    [orgX + unitLength, orgY, orgZ],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXPosYNeg = [
    [endPoint1XPosYNeg[0] + 2 * unitLength, orgY - 2 * unitLength, orgZ],
    [endPoint1XPosYNeg[0] + 2 * unitLength, orgY - unitLength * 4.25, orgZ],
    [endPoint1XPosYNeg[0] + unitLength * 4, orgY - unitLength * 4.25, orgZ],
  ]

  // Y Neg Z Pos
  
  const endPoint1XNueYNegZPos = returnEndPosition(
    [orgX, orgY, orgZ + unitLength],
    [
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(0))
    ],
    unitLength * 1.25 * phi)

  // Y Neg X Neg

    const endPoint1XNegYNeg = returnEndPosition(
    [orgX - unitLength, orgY, orgZ],
    [
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi)


    // Y Neg Z Neg

const endPoint1XNueYNegZNeg = returnEndPosition(
    [orgX, orgY, orgZ - unitLength],
    [
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(180))
    ],
    unitLength * 1.25 * phi)

  addCurve(coordinatesXPosYNeg, position);
  

    /*****************/

  // Base
  addLine(
    [
      orgX - 3 * unitLength,
      orgY - 2 * unitLength,
      orgZ
    ],
    [
      orgX - 3 * unitLength,
      orgY,
      orgZ
    ],
    'medium',
    position

  );

  addVectorLine(
    'X_Neg_Y_Neg',
    [orgX - 3 * unitLength, orgY - 2 * unitLength, orgZ],
    [
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi,position);
  
  const coordinatesXNegYNeg = [
    [endPoint1XNegYNeg[0] - 2 * unitLength, orgY - 2 * unitLength, orgZ],
    [endPoint1XNegYNeg[0] - 2 * unitLength, orgY - unitLength * 4.25, orgZ],
    [endPoint1XNegYNeg[0] - unitLength * 4, orgY - unitLength * 4.25, orgZ],
  ]

  addCurve(coordinatesXNegYNeg, position);

  addSphere(origin);


}

export {
  Hex_Anvil
}