import {
  addVectorLine,
  returnEndPosition,
  degreesToRadians,
  phi,
  addCurve,
  addLine,
  unit,
} from '../js/utilities.js'

function Pincer(origin, unitLength) {

  const [orgX, orgY, orgZ] = origin;

  /*****************/

  //  X Pos Y Pos

  // Base
  addLine(
    [
      orgX + 3 * unitLength,
      orgY + 4 * unitLength,
      orgZ
    ],
    [
      orgX + 3 * unitLength,
      orgY + 2 * unitLength,
      orgZ
    ]
  );

  addVectorLine(
    'X_Pos_Y_Pos',
    [orgX + 3 * unitLength, orgY + 4 * unitLength, orgZ],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XPosYPos = returnEndPosition(
    [orgX + unitLength, orgY + unitLength, orgZ],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXPosYPos = [
    [endPoint1XPosYPos[0] + 2 * unitLength, orgY + 4 * unitLength, orgZ],
    [endPoint1XPosYPos[0] + 2 * unitLength, orgY + unitLength * 6.25, orgZ],
    [endPoint1XPosYPos[0] + unitLength * 4, orgY + unitLength * 6.25, orgZ],
  ]

  addCurve(coordinatesXPosYPos);

  /*****************/

  //  X Pos Y Pos Inner

  /*addVectorLine(
    'X_Pos_Y_Pos_Inner',
    [orgX + 3 * unitLength, orgY + 4 * unitLength, orgZ],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XPosYPosInner = returnEndPosition(
    [orgX + unitLength, orgY + unitLength, orgZ],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXPosYPosInner = [
    [endPoint1XPosYPosInner[0] + 2 * unitLength, orgY + 4 * unitLength, orgZ],
    [endPoint1XPosYPosInner[0] + 2 * unitLength, orgY + unitLength * 6.25, orgZ],
    [endPoint1XPosYPosInner[0] + unitLength * 4, orgY + unitLength * 6.25, orgZ],
  ]

  addCurve(coordinatesXPosYPosInner);

  */


  /*****************/

  //  X Pos Y Neg

  /*****************/

  // Base
  addLine(
    [
      orgX + 3 * unitLength,
      orgY - 4 * unitLength,
      orgZ
    ],
    [
      orgX + 3 * unitLength,
      orgY - 2 * unitLength,
      orgZ
    ]
  );
  addVectorLine(
    'X_Pos_Y_Neg',
    [orgX + 3 * unitLength, orgY - 4 * unitLength, orgZ],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XPosYNeg = returnEndPosition(
    [orgX + unitLength, orgY - unitLength, orgZ],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXPosYNeg = [
    [endPoint1XPosYNeg[0] + 2 * unitLength, orgY - 4 * unitLength, orgZ],
    [endPoint1XPosYNeg[0] + 2 * unitLength, orgY - unitLength * 6.25, orgZ],
    [endPoint1XPosYNeg[0] + unitLength * 4, orgY - unitLength * 6.25, orgZ],
  ]

  addCurve(coordinatesXPosYNeg);

  /*****************/

  //  X Pos Y Neg Z Pos

  /*****************/

  // Base
  addLine(
    [
      orgX + 1.5 * unitLength,
      orgY - 4 * unitLength,
      orgZ + unitLength,
    ],
    [
      orgX + 1.5 * unitLength,
      orgY - 2 * unitLength,
      orgZ + unitLength,
    ]
  );
  addVectorLine(
    'X_Pos_Y_Neg_Z_Pos',
    [orgX + 1.5 * unitLength, orgY - 4 * unitLength, orgZ + unitLength],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(45))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XPosYNegZPos = returnEndPosition(
    [orgX + unitLength / 2, orgY - unitLength, orgZ + unitLength],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(45))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXPosYNegZPos = [
    [endPoint1XPosYNegZPos[0] +  unitLength, orgY - 4 * unitLength, endPoint1XPosYNegZPos[2]],
    [endPoint1XPosYNegZPos[0] +  unitLength, orgY - unitLength * 6.25, endPoint1XPosYNegZPos[2]],
    [endPoint1XPosYNegZPos[0] + unitLength * 3, orgY - unitLength * 6.25, endPoint1XPosYNegZPos[2] + unitLength * 1.5],
  ]

  addCurve(coordinatesXPosYNegZPos);

  //  X Pos Y Neg Z Pos

  /*****************/

  // Base
  addLine(
    [
      orgX - 1.5 * unitLength,
      orgY - 4 * unitLength,
      orgZ + unitLength,
    ],
    [
      orgX - 1.5 * unitLength,
      orgY - 2 * unitLength,
      orgZ + unitLength,
    ]
  );
  addVectorLine(
    'X_Pos_Y_Neg_Z_Pos',
    [orgX - 1.5 * unitLength, orgY - 4 * unitLength, orgZ + unitLength],
    [
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(45))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XNegYNegZPos = returnEndPosition(
    [orgX - unitLength / 2, orgY - unitLength, orgZ + unitLength],
    [
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(45))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXNegYNegZPos = [
    [endPoint1XNegYNegZPos[0] -  unitLength, orgY - 4 * unitLength, endPoint1XNegYNegZPos[2]],
    [endPoint1XNegYNegZPos[0] -  unitLength, orgY - unitLength * 6.25, endPoint1XNegYNegZPos[2]],
    [endPoint1XNegYNegZPos[0] - unitLength * 3, orgY - unitLength * 6.25, endPoint1XNegYNegZPos[2] + unitLength * 1.5],
  ]

  addCurve(coordinatesXNegYNegZPos);


  /*****************/


  // Base
  addLine(
    [
      orgX - 3 * unitLength,
      orgY - 4 * unitLength,
      orgZ
    ],
    [
      orgX - 3 * unitLength,
      orgY - 2 * unitLength,
      orgZ
    ]
  );

  addVectorLine(
    'X_Neg_Y_Neg',
    [orgX - 3 * unitLength, orgY - 4 * unitLength, orgZ],
    [
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XNegYNeg = returnEndPosition(
    [orgX - unitLength, orgY - unitLength, orgZ],
    [
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXNegYNeg = [
    [endPoint1XNegYNeg[0] - 2 * unitLength, orgY - 4 * unitLength, orgZ],
    [endPoint1XNegYNeg[0] - 2 * unitLength, orgY - unitLength * 6.25, orgZ],
    [endPoint1XNegYNeg[0] - unitLength * 4, orgY - unitLength * 6.25, orgZ],
  ]

  addCurve(coordinatesXNegYNeg);



  /*****************/

  //  X Neg Y Pos

  // Base
  addLine(
    [
      orgX - 3 * unitLength,
      orgY + 2 * unitLength,
      orgZ
    ],
    [
      orgX - 3 * unitLength,
      orgY + 4 * unitLength,
      orgZ
    ]
  );

  addVectorLine(
    'X_Neg_Y_Pos',
    [orgX - 3 * unitLength, orgY + 4 * unitLength, orgZ],
    [
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XNegYPos = returnEndPosition(
    [orgX - unitLength, orgY + unitLength, orgZ],
    [
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXNegYPos = [
    [endPoint1XNegYPos[0] - 2 * unitLength, orgY + 4 * unitLength, orgZ],
    [endPoint1XNegYPos[0] - 2 * unitLength, orgY + unitLength * 6.25, orgZ],
    [endPoint1XNegYPos[0] - unitLength * 4, orgY + unitLength * 6.25, orgZ],
  ]

  addCurve(coordinatesXNegYPos);




}

export {
  Pincer
}