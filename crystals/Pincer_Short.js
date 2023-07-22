import {
  addVectorLine,
  returnEndPosition,
  degreesToRadians,
  phi,
  addCurve,
  addLine,
  unit,
  addSphere,
} from '../js/utilities.js'

function Pincer_Short(origin, unitLength) {

  const [orgX, orgY, orgZ] = origin;

  /*****************/

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
  );

  addVectorLine(
    'X_Pos_Y_Pos',
    [orgX + 3 * unitLength, orgY + 2 * unitLength, orgZ],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi);

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

  addCurve(coordinatesXPosYPos);

  /*****************/

  //  X Pos Y Nue Z Pos Mid

  // Base
  addLine(
    [
      orgX + 3 * unitLength,
      orgY,
      orgZ + .5 * unitLength
    ],
    [
      orgX + 3 * unitLength,
      orgY,
      orgZ + 1.5 * unitLength
    ]
  );

  addVectorLine(
    'X_Pos_Y_Nue_Z_Pos_Mid',
    [orgX + 3 * unitLength, orgY, orgZ + 1.5 * unitLength],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XPosYNueZPosMid = returnEndPosition(
    [orgX + unitLength, orgY, orgZ + 1.5 * unitLength],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXPosYNueZPosMid = [
    [endPoint1XPosYNueZPosMid[0] + 2 * unitLength, orgY, orgZ + 1.5 * unitLength],
    [endPoint1XPosYNueZPosMid[0] + 2 * unitLength, orgY, orgZ + unitLength * 3.125],
    [endPoint1XPosYNueZPosMid[0] + unitLength * 4, orgY, orgZ + unitLength * 3.125],
  ]

  addCurve(coordinatesXPosYNueZPosMid);

  /*****************/

  //  X Pos Y Nue Z Pos Pos Mid

  // Base
  addLine(
    [
      orgX + .5 * unitLength,
      orgY,
      orgZ + 3 * unitLength
    ],
    [
      orgX + 1.5 * unitLength,
      orgY,
      orgZ + 3 * unitLength,
    ]
  );

  addVectorLine(
    'X_Pos_Y_Nue_Z_Pos_Pos_Mid',
    [orgX + 1.5 * unitLength, orgY, orgZ + 3 * unitLength],
    [
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(0))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XPosYNueZPosPosMid = returnEndPosition(
    [orgX + 1.5 * unitLength, orgY,orgZ + unitLength],
    [
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(0))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXPosYNueZPosPosMid = [
    [orgX + 1.5 * unitLength, orgY,endPoint1XPosYNueZPosPosMid[2] + 2 * unitLength],
    [orgX + unitLength * 3.125, orgY,endPoint1XPosYNueZPosPosMid[2] + 2 * unitLength],
    [orgX + unitLength * 3.125, orgY,endPoint1XPosYNueZPosPosMid[2] + unitLength * 4],
  ]

  addCurve(coordinatesXPosYNueZPosPosMid);

  /*****************/

  //  X Neg Y Nue Z Pos Pos Mid

  // Base
  addLine(
    [
      orgX - .5 * unitLength,
      orgY,
      orgZ + 3 * unitLength
    ],
    [
      orgX - 1.5 * unitLength,
      orgY,
      orgZ + 3 * unitLength,
    ]
  );

  addVectorLine(
    'X_Neg_Y_Nue_Z_Pos_Pos_Mid',
    [  orgX - 1.5 * unitLength, orgY, orgZ + 3 * unitLength],
    [
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(0))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XNegYNueZPosPosMid = returnEndPosition(
    [orgX - 1.5 * unitLength, orgY, orgZ + unitLength],
    [
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(0))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXNegYNueZPosPosMid = [
    [orgX - 1.5 * unitLength, orgY,endPoint1XNegYNueZPosPosMid[2] + 2 * unitLength],
    [orgX - unitLength * 3.125, orgY,endPoint1XNegYNueZPosPosMid[2] + 2 * unitLength],
    [orgX - unitLength * 3.125, orgY,endPoint1XNegYNueZPosPosMid[2] + unitLength * 4],
  ]

  addCurve(coordinatesXNegYNueZPosPosMid);

  /*****************/

  //  X Neg Y Nue Z Neg Neg Mid

  // Base
  addLine(
    [
      orgX - .5 * unitLength,
      orgY,
      orgZ - 3 * unitLength
    ],
    [
      orgX - 1.5 * unitLength,
      orgY,
      orgZ - 3 * unitLength,
    ]
  );

  addVectorLine(
    'X_Neg_Y_Nue_Z_Neg_Neg_Mid',
    [  orgX - 1.5 * unitLength, orgY, orgZ - 3 * unitLength],
    [
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(180))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XNegYNueZNegNegMid = returnEndPosition(
    [orgX - 1.5 * unitLength, orgY, orgZ - unitLength],
    [
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(180))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXNegYNueZNegNegMid = [
    [orgX - 1.5 * unitLength, orgY,endPoint1XNegYNueZNegNegMid[2] - 2 * unitLength],
    [orgX - unitLength * 3.125, orgY,endPoint1XNegYNueZNegNegMid[2] - 2 * unitLength],
    [ orgX - unitLength * 3.125, orgY,endPoint1XNegYNueZNegNegMid[2] - unitLength * 4],
  ]

  addCurve(coordinatesXNegYNueZNegNegMid);

  /*****************/

  //  X Pos Y Nue Z Neg Neg Mid

  // Base
  addLine(
    [
      orgX + .5 * unitLength,
      orgY,
      orgZ - 3 * unitLength
    ],
    [
      orgX + 1.5 * unitLength,
      orgY,
      orgZ - 3 * unitLength,
    ]
  );

  addVectorLine(
    'X_Pos_Y_Nue_Z_Neg_Neg_Mid',
    [  orgX + 1.5 * unitLength, orgY, orgZ - 3 * unitLength],
    [
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(180))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XPosYNueZNegNegMid = returnEndPosition(
    [orgX + 1.5 * unitLength, orgY, orgZ - unitLength],
    [
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(180))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXPosYNueZNegNegMid = [
    [orgX + 1.5 * unitLength, orgY,endPoint1XPosYNueZNegNegMid[2] - 2 * unitLength],
    [orgX + unitLength * 3.125, orgY,endPoint1XPosYNueZNegNegMid[2] - 2 * unitLength],
    [orgX + unitLength * 3.125, orgY,endPoint1XPosYNueZNegNegMid[2] - unitLength * 4],
  ]

  addCurve(coordinatesXPosYNueZNegNegMid);




  /*****************/

  //  X Pos Y Nue Z Neg Mid

  // Base
  addLine(
    [
      orgX + 3 * unitLength,
      orgY,
      orgZ - .5 * unitLength
    ],
    [
      orgX + 3 * unitLength,
      orgY,
      orgZ - 1.5 * unitLength
    ]
  );

  addVectorLine(
    'X_Pos_Y_Nue_Z_Neg_Mid',
    [orgX + 3 * unitLength, orgY, orgZ - 1.5 * unitLength],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(270))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XPosYNueZNegMid = returnEndPosition(
    [orgX + unitLength, orgY, orgZ - unitLength],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(270))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXPosYNueZNegMid = [
    [endPoint1XPosYNueZNegMid[0] + 2 * unitLength, orgY, orgZ - 1.5 * unitLength],
    [endPoint1XPosYNueZNegMid[0] + 2 * unitLength, orgY, orgZ - unitLength * 3.125],
    [endPoint1XPosYNueZNegMid[0] + unitLength * 4, orgY, orgZ - unitLength * 3.125],
  ]

  addCurve(coordinatesXPosYNueZNegMid);

  /*****************/

  //  X Neg Y Nue Z Neg Mid

  // Base
  addLine(
    [
      orgX - 3 * unitLength,
      orgY,
      orgZ - .5 * unitLength
    ],
    [
      orgX - 3 * unitLength,
      orgY,
      orgZ - 1.5 * unitLength
    ]
  );

  addVectorLine(
    'X_Neg_Y_Nue_Z_Neg_Mid',
    [orgX - 3 * unitLength, orgY, orgZ - 1.5 * unitLength],
    [
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(270))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XNegYNueZNegMid = returnEndPosition(
    [orgX - unitLength, orgY, orgZ - 1.5 * unitLength],
    [
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(270))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXNegYNueZNegMid = [
    [endPoint1XNegYNueZNegMid[0] - 2 * unitLength, orgY, orgZ - 1.5 * unitLength],
    [endPoint1XNegYNueZNegMid[0] - 2 * unitLength, orgY, orgZ - unitLength * 3.125],
    [endPoint1XNegYNueZNegMid[0] - unitLength * 4, orgY, orgZ - unitLength * 3.125],
  ]

  addCurve(coordinatesXNegYNueZNegMid);

  /*****************/

  //  X Neg Y Nue Z Pos Mid

  // Base
  addLine(
    [
      orgX - 3 * unitLength,
      orgY,
      orgZ + .5 * unitLength
    ],
    [
      orgX - 3 * unitLength,
      orgY,
      orgZ + 1.5 * unitLength
    ]
  );

  addVectorLine(
    'X_Neg_Y_Nue_Z_Pos_Mid',
    [orgX - 3 * unitLength, orgY, orgZ + 1.5 * unitLength],
    [
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XNegYNueZPosMid = returnEndPosition(
    [orgX - unitLength, orgY, orgZ + 1.5 * unitLength],
    [
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXNegYNueZPosMid = [
    [endPoint1XNegYNueZPosMid[0] - 2 * unitLength, orgY, orgZ + 1.5 * unitLength],
    [endPoint1XNegYNueZPosMid[0] - 2 * unitLength, orgY, orgZ + unitLength * 3.125],
    [endPoint1XNegYNueZPosMid[0] - unitLength * 4, orgY, orgZ + unitLength * 3.125],
  ]

  addCurve(coordinatesXNegYNueZPosMid);




  //  X Nue Y Pos Z Pos

  // Base
  addLine(
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
  );

  addVectorLine(
    'X_Nue_Y_Pos_Z_Pos',
    [orgX, orgY + 2 * unitLength, orgZ + 3 * unitLength],
    [
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(0))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XNueYPosZPos = returnEndPosition(
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

  addCurve(coordinatesXNueYPosZPos);

  /*****************/

  //  X Nue Y Neg Z Neg

  // Base
  addLine(
    [
      orgX,
      orgY - 2 * unitLength,
      orgZ - 3 * unitLength
    ],
    [
      orgX,
      orgY,
      orgZ - 3 * unitLength
    ]
  );

  addVectorLine(
    'X_Nue_Y_Neg_Z_Neg',
    [orgX, orgY - 2 * unitLength, orgZ - 3 * unitLength],
    [
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(180))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XNueYNegZNeg = returnEndPosition(
    [orgX, orgY, orgZ - unitLength],
    [
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(180))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXNueYNegZNeg = [
    [orgX, orgY - 2 * unitLength, endPoint1XNueYNegZNeg[2] - 2 * unitLength],
    [orgX, orgY - unitLength * 4.25, endPoint1XNueYNegZNeg[2] - 2 * unitLength],
    [orgX, orgY - unitLength * 4.25, endPoint1XNueYNegZNeg[2] - unitLength * 4],
  ]

  addCurve(coordinatesXNueYNegZNeg);

    /*****************/

  //  X Nue Y Neg Z Pos

  // Base
  addLine(
    [
      orgX,
      orgY - 2 * unitLength,
      orgZ + 3 * unitLength
    ],
    [
      orgX,
      orgY,
      orgZ + 3 * unitLength
    ]
  );

  addVectorLine(
    'X_Nue_Y_Neg_Z_Pos',
    [orgX, orgY - 2 * unitLength, orgZ + 3 * unitLength],
    [
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(0))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XNueYNegZPos = returnEndPosition(
    [orgX, orgY, orgZ + unitLength],
    [
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(0))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXNueYNegZPos = [
    [orgX, orgY - 2 * unitLength, endPoint1XNueYNegZPos[2] + 2 * unitLength],
    [orgX, orgY - unitLength * 4.25, endPoint1XNueYNegZPos[2] + 2 * unitLength],
    [orgX, orgY - unitLength * 4.25, endPoint1XNueYNegZPos[2] + unitLength * 4],
  ]

  addCurve(coordinatesXNueYNegZPos);

  /*****************/

  //  X Nue Y Pos Z Neg

  // Base
  addLine(
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
  );

  addVectorLine(
    'X_Nue_Y_Pos_Z_Neg',
    [orgX, orgY + 2 * unitLength, orgZ - 3 * unitLength],
    [
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(180))
    ],
    unitLength * 1.25 * phi);

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

  addCurve(coordinatesXNueYPosZNeg);


  /*****************/

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
  );
  addVectorLine(
    'X_Pos_Y_Neg',
    [orgX + 3 * unitLength, orgY - 2 * unitLength, orgZ],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi);

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

  addCurve(coordinatesXPosYNeg);

  /*****************/

  //  X Pos Y Neg Z Pos

  /*****************/

  // Base
  /*addLine(
    [
      orgX + 1.5 * unitLength,
      orgY - 4 * unitLength,
      orgZ + 1.5 * unitLength,
    ],
    [
      orgX + 1.5 * unitLength,
      orgY - 2 * unitLength,
      orgZ + 1.5 * unitLength,
    ]
  );
  addVectorLine(
    'X_Pos_Y_Neg_Z_Pos',
    [orgX + 1.5 * unitLength, orgY - 4 * unitLength, orgZ + unitLength * 1.5],
    [
      Math.cos(degreesToRadians(45)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(45))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XPosYNegZPos = returnEndPosition(
    [orgX + unitLength / 2, orgY - unitLength, orgZ + unitLength * 1.5],
    [
      Math.cos(degreesToRadians(45)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(45))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXPosYNegZPos = [
    [endPoint1XPosYNegZPos[0] +  unitLength, orgY - 4 * unitLength, endPoint1XPosYNegZPos[2]],
    [endPoint1XPosYNegZPos[0] +  unitLength, orgY - unitLength * 6.25, endPoint1XPosYNegZPos[2]],
    [endPoint1XPosYNegZPos[0] + unitLength * 3, orgY - unitLength * 6.25, endPoint1XPosYNegZPos[0] + unitLength * 3],
  ]

  addCurve(coordinatesXPosYNegZPos);
  */

  //  X Pos Y Neg Z Neg

  /*****************/

  // Base
  /*addLine(
    [
      orgX + 1.5 * unitLength,
      orgY - 4 * unitLength,
      orgZ - unitLength * 1.5,
    ],
    [
      orgX + 1.5 * unitLength,
      orgY - 2 * unitLength,
      orgZ - unitLength * 1.5,
    ]
  );
  addVectorLine(
    'X_Pos_Y_Neg_Z_Neg',
    [orgX + 1.5 * unitLength, orgY - 4 * unitLength, orgZ - unitLength * 1.5],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(135))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XPosYNegZNeg = returnEndPosition(
    [orgX + unitLength / 2, orgY - unitLength, orgZ - unitLength * 1.5],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(135))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXPosYNegZNeg = [
    [endPoint1XPosYNegZNeg[0] +  unitLength, orgY - 4 * unitLength, endPoint1XPosYNegZNeg[2]],
    [endPoint1XPosYNegZNeg[0] +  unitLength, orgY - unitLength * 6.25, endPoint1XPosYNegZNeg[2]],
    [endPoint1XPosYNegZNeg[0] + unitLength * 3, orgY - unitLength * 6.25, endPoint1XPosYNegZNeg[2] - unitLength * 1.5],
  ]

  addCurve(coordinatesXPosYNegZNeg);

  //  X Neg Y Neg Z Neg

  */

  /*****************/

  // Base
  /*addLine(
    [
      orgX - 1.5 * unitLength,
      orgY - 4 * unitLength,
      orgZ - unitLength * 1.5,
    ],
    [
      orgX - 1.5 * unitLength,
      orgY - 2 * unitLength,
      orgZ - unitLength * 1.5,
    ]
  );
  addVectorLine(
    'X_Neg_Y_Neg_Z_Neg',
    [orgX - 1.5 * unitLength, orgY - 4 * unitLength, orgZ - unitLength * 1.5],
    [
      Math.cos(degreesToRadians(135)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(135))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XNegYNegZNeg = returnEndPosition(
    [orgX - unitLength / 2, orgY - unitLength, orgZ - unitLength * 1.5],
    [
      Math.cos(degreesToRadians(135)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(135))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXNegYNegZNeg = [
    [endPoint1XNegYNegZNeg[0] -  unitLength, orgY - 4 * unitLength, endPoint1XNegYNegZNeg[2]],
    [endPoint1XNegYNegZNeg[0] -  unitLength, orgY - unitLength * 6.25, endPoint1XNegYNegZNeg[2]],
    [endPoint1XNegYNegZNeg[0] - unitLength * 3, orgY - unitLength * 6.25, endPoint1XNegYNegZNeg[0] - unitLength * 3],
  ]

  addCurve(coordinatesXNegYNegZNeg);

  */



  //  X Neg Y Neg Z Pos

  /*****************/

  // Base
  /*addLine(
    [
      orgX - 1.5 * unitLength,
      orgY - 4 * unitLength,
      orgZ + unitLength * 1.5,
    ],
    [
      orgX - 1.5 * unitLength,
      orgY - 2 * unitLength,
      orgZ + unitLength * 1.5,
    ]
  );
  addVectorLine(
    'X_Neg_Y_Neg_Z_Pos',
    [orgX - 1.5 * unitLength, orgY - 4 * unitLength, orgZ + unitLength * 1.5],
    [
      Math.cos(degreesToRadians(135)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(45))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XNegYNegZPos = returnEndPosition(
    [orgX - unitLength / 2, orgY - unitLength, orgZ + unitLength * 1.5],
    [
      Math.cos(degreesToRadians(135)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(45))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXNegYNegZPos = [
    [endPoint1XNegYNegZPos[0] -  unitLength, orgY - 4 * unitLength, endPoint1XNegYNegZPos[2]],
    [endPoint1XNegYNegZPos[0] -  unitLength, orgY - unitLength * 6.25, endPoint1XNegYNegZPos[2]],
    [endPoint1XNegYNegZPos[0] - unitLength * 3, orgY - unitLength * 6.25, Math.abs(endPoint1XNegYNegZPos[0]) + unitLength * 3],
  ]

  addCurve(coordinatesXNegYNegZPos);

  */

  //  X Neg Y Pos Z Pos

  /*****************/

  // Base
  /*addLine(
    [
      orgX - 1.5 * unitLength,
      orgY + 4 * unitLength,
      orgZ + 1.5 * unitLength,
    ],
    [
      orgX - 1.5 * unitLength,
      orgY + 2 * unitLength,
      orgZ + 1.5 * unitLength,
    ]
  );
  addVectorLine(
    'X_Neg_Y_Pos_Z_Pos',
    [orgX - 1.5 * unitLength, orgY + 4 * unitLength, orgZ + unitLength * 1.5],
    [
      Math.cos(degreesToRadians(135)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(45))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XNegYPosZPos = returnEndPosition(
    [orgX - unitLength / 2, orgY + unitLength, orgZ + unitLength * 1.5],
    [
      Math.cos(degreesToRadians(135)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(45))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXNegYPosZPos = [
    [endPoint1XNegYPosZPos[0] -  unitLength, orgY + 4 * unitLength, endPoint1XNegYPosZPos[2]],
    [endPoint1XNegYPosZPos[0] -  unitLength, orgY + unitLength * 6.25, endPoint1XNegYPosZPos[2]],

    [endPoint1XNegYPosZPos[0] - unitLength * 3, orgY + unitLength * 6.25, Math.abs(endPoint1XNegYPosZPos[0]) + unitLength * 3],

  ]

  addCurve(coordinatesXNegYPosZPos);

  */


  //  X Neg Y Pos Z Neg

  /*****************/

  // Base
  /*addLine(
    [
      orgX - 1.5 * unitLength,
      orgY + 4 * unitLength,
      orgZ - 1.5 * unitLength,
    ],
    [
      orgX - 1.5 * unitLength,
      orgY + 2 * unitLength,
      orgZ - 1.5 * unitLength,
    ]
  );
  addVectorLine(
    'X_Neg_Y_Pos_Z_Neg',
    [orgX - 1.5 * unitLength, orgY + 4 * unitLength, orgZ - unitLength * 1.5],
    [
      Math.cos(degreesToRadians(135)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(135))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XNegYPosZNeg = returnEndPosition(
    [orgX - unitLength / 2, orgY + unitLength, orgZ - unitLength * 1.5],
    [
      Math.cos(degreesToRadians(135)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(135))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXNegYPosZNeg = [
    [endPoint1XNegYPosZNeg[0] -  unitLength, orgY + 4 * unitLength, endPoint1XNegYPosZNeg[2]],
    [endPoint1XNegYPosZNeg[0] -  unitLength, orgY + unitLength * 6.25, endPoint1XNegYPosZNeg[2]],
    [endPoint1XNegYPosZNeg[0] - unitLength * 3, orgY + unitLength * 6.25, endPoint1XNegYPosZNeg[0] - unitLength * 3],
  ]

  addCurve(coordinatesXNegYPosZNeg);

  */

  //  X Pos Y Pos Z Neg

  /*****************/

  // Base
  /*addLine(
    [
      orgX + 1.5 * unitLength,
      orgY + 4 * unitLength,
      orgZ - unitLength * 1.5,
    ],
    [
      orgX + 1.5 * unitLength,
      orgY + 2 * unitLength,
      orgZ - unitLength * 1.5,
    ]
  );
  addVectorLine(
    'X_Pos_Y_Pos_Z_Neg',
    [orgX + 1.5 * unitLength, orgY + 4 * unitLength, orgZ - unitLength * 1.5],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(135))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XPosYPosZNeg = returnEndPosition(
    [orgX + unitLength / 2, orgY + unitLength, orgZ - unitLength * 1.5],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(135))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXPosYPosZNeg = [
    [endPoint1XPosYPosZNeg[0] +  unitLength, orgY + 4 * unitLength, endPoint1XPosYPosZNeg[2]],
    [endPoint1XPosYPosZNeg[0] +  unitLength, orgY + unitLength * 6.25, endPoint1XPosYPosZNeg[2]],
    [endPoint1XPosYPosZNeg[0] + unitLength * 3, orgY + unitLength * 6.25, endPoint1XPosYPosZNeg[2] - unitLength * 1.5],
  ]

  addCurve(coordinatesXPosYPosZNeg);

  */

  //  X Pos Y Pos Z Pos

  /*****************/

  // Base
  /*addLine(
    [
      orgX + 1.5 * unitLength,
      orgY + 4 * unitLength,
      orgZ + 1.5 * unitLength,
    ],
    [
      orgX + 1.5 * unitLength,
      orgY + 2 * unitLength,
      orgZ + 1.5 * unitLength,
    ]
  );
  addVectorLine(
    'X_Pos_Y_Pos_Z_Pos',
    [orgX + 1.5 * unitLength, orgY + 4 * unitLength, orgZ + unitLength * 1.5],
    [
      Math.cos(degreesToRadians(45)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(45))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XPosYPosZPos = returnEndPosition(
    [orgX + unitLength / 2, orgY + unitLength, orgZ + unitLength * 1.5],
    [
      Math.cos(degreesToRadians(45)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(45))
    ],
    unitLength * 1.25 * phi)


  const coordinatesXPosYPosZPos = [
    [endPoint1XPosYPosZPos[0] +  unitLength, orgY + 4 * unitLength, endPoint1XPosYPosZPos[2]],
    [endPoint1XPosYPosZPos[0] +  unitLength, orgY + unitLength * 6.25, endPoint1XPosYPosZPos[2]],
    [endPoint1XPosYPosZPos[0] + unitLength * 3, orgY + unitLength * 6.25, endPoint1XPosYPosZPos[0] + unitLength * 3],
  ]

  addCurve(coordinatesXPosYPosZPos);

  */


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
    ]
  );

  addVectorLine(
    'X_Neg_Y_Neg',
    [orgX - 3 * unitLength, orgY - 2 * unitLength, orgZ],
    [
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90))
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

  const coordinatesXNegYNeg = [
    [endPoint1XNegYNeg[0] - 2 * unitLength, orgY - 2 * unitLength, orgZ],
    [endPoint1XNegYNeg[0] - 2 * unitLength, orgY - unitLength * 4.25, orgZ],
    [endPoint1XNegYNeg[0] - unitLength * 4, orgY - unitLength * 4.25, orgZ],
  ]

  addCurve(coordinatesXNegYNeg);



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
  );

  addVectorLine(
    'X_Neg_Y_Pos',
    [orgX - 3 * unitLength, orgY + 2 * unitLength, orgZ],
    [
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi);

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

  addCurve(coordinatesXNegYPos);

  addSphere(origin);



}

export {
  Pincer_Short
}