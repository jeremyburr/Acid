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

import * as THREE from '../js/three.module.js';

function Pincer_Short(origin, unitLength) {

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

  addCurve(coordinatesXNueYPosZNeg) ;

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

  addCurve(coordinatesXPosYNeg);

        
  // Extend Y-X+Z+

  // Y-X+Z+ Inner
  const YNegXPosZPosPaneInnerCoordinates  =   [
    endPoint1XPosYNeg[0] + 2 * unitLength, orgY - 2 * unitLength, orgZ,
    orgX, orgY - 2 * unitLength, endPoint1XNueYNegZPos[2] + 2 * unitLength,
    endPoint1XNegYNeg[0] - 2 * unitLength, orgY - 2 * unitLength, orgZ
  ]
  addPane(YNegXPosZPosPaneInnerCoordinates);
  
  // Y-X+Z+ Outer
  const YNegXPosZPosPaneOuterCoordinates  =   [

    endPoint1XPosYNeg[0] + unitLength * 4, orgY - unitLength * 4.25, orgZ,
    orgX, orgY - unitLength * 4.25, endPoint1XNueYNegZPos[2] + unitLength * 4,
    endPoint1XNegYNeg[0] - unitLength * 4, orgY - unitLength * 4.25, orgZ
  ]

  
  addPane(YNegXPosZPosPaneOuterCoordinates);


  // Inner
  addLine(
    [endPoint1XPosYNeg[0] + 2 * unitLength, orgY - 2 * unitLength, orgZ],
    [orgX, orgY - 2 * unitLength, endPoint1XNueYNegZPos[2] + 2 * unitLength],
    "thin"
  );
  // Outer
  addLine(
    [endPoint1XPosYNeg[0] + unitLength * 4, orgY - unitLength * 4.25, orgZ],
    [orgX, orgY - unitLength * 4.25, endPoint1XNueYNegZPos[2] + unitLength * 4],
    "thin"
  );

  // Extend Y-Z+X-

  // Y-X+Z- inner
  const YNegXPosZNegInnerPaneCoordinates  =   [endPoint1XPosYNeg[0] + 2 * unitLength, orgY - 2 * unitLength, orgZ,
    orgX, orgY - 2 * unitLength, endPoint1XNueYNegZNeg[2] - 2 * unitLength,
    endPoint1XNegYNeg[0] - 2 * unitLength, orgY - 2 * unitLength, orgZ
  ]

  addPane(YNegXPosZNegInnerPaneCoordinates);

  //Top
  addLine(
    [orgX, orgY - 2 * unitLength, endPoint1XNueYNegZPos[2] + 2 * unitLength],
    [endPoint1XNegYNeg[0] - 2 * unitLength, orgY - 2 * unitLength, orgZ],
    "thin"
  );
  //Bottom
  addLine(
    [orgX, orgY - unitLength * 4.25, endPoint1XNueYNegZPos[2] + unitLength * 4],
    [endPoint1XNegYNeg[0] - unitLength * 4, orgY - unitLength * 4.25, orgZ],
    "thin"
  );

  // Extend Y-X-Z- 

  //Top
  addLine(
    [endPoint1XNegYNeg[0] - 2 * unitLength, orgY - 2 * unitLength, orgZ],
    [orgX, orgY - 2 * unitLength, endPoint1XNueYNegZNeg[2] - 2 * unitLength],
    "thin"
  );
  //Bottom
  addLine(
    [endPoint1XNegYNeg[0] - unitLength * 4, orgY - unitLength * 4.25, orgZ],
    [orgX, orgY - unitLength * 4.25, endPoint1XNueYNegZNeg[2] - unitLength * 4],
    "thin"
  );

  // Extend Y-Z- 

  //Top
  addLine(
    [orgX, orgY - 2 * unitLength, endPoint1XNueYNegZNeg[2] - 2 * unitLength],
    [endPoint1XPosYNeg[0] + 2 * unitLength, orgY - 2 * unitLength, orgZ],
    "thin"
  );
  //Bottom
  addLine(
    [orgX, orgY - unitLength * 4.25, endPoint1XNueYNegZNeg[2] - unitLength * 4],
    [endPoint1XPosYNeg[0] + unitLength * 4, orgY - unitLength * 4.25, orgZ],
    "thin"
  );

  // Extend Y+X+Z+

  // Top
  addLine(
    [endPoint1XPosYNeg[0] + 2 * unitLength, orgY + 2 * unitLength, orgZ],
    [orgX, orgY + 2 * unitLength, endPoint1XNueYNegZPos[2] + 2 * unitLength],
    "thin"
  );
  // Bottom
  addLine(
    [endPoint1XPosYNeg[0] + unitLength * 4, orgY + unitLength * 4.25, orgZ],
    [orgX, orgY + unitLength * 4.25, endPoint1XNueYNegZPos[2] + unitLength * 4],
    "thin"
  );

  // Extend Y-Z+X-

  //Top
  addLine(
    [orgX, orgY + 2 * unitLength, endPoint1XNueYNegZPos[2] + 2 * unitLength],
    [endPoint1XNegYNeg[0] - 2 * unitLength, orgY + 2 * unitLength, orgZ],
    "thin"
  );
  //Bottom
  addLine(
    [orgX, orgY + unitLength * 4.25, endPoint1XNueYNegZPos[2] + unitLength * 4],
    [endPoint1XNegYNeg[0] - unitLength * 4, orgY + unitLength * 4.25, orgZ],
    "thin"
  );

  // Extend Y-X-Z- 

  //Top
  addLine(
    [endPoint1XNegYNeg[0] - 2 * unitLength, orgY + 2 * unitLength, orgZ],
    [orgX, orgY + 2 * unitLength, endPoint1XNueYNegZNeg[2] - 2 * unitLength],
    "thin"
  );
  //Bottom
  addLine(
    [endPoint1XNegYNeg[0] - unitLength * 4, orgY + unitLength * 4.25, orgZ],
    [orgX, orgY + unitLength * 4.25, endPoint1XNueYNegZNeg[2] - unitLength * 4],
    "thin"
  );

  // Extend Y-Z- 

  //Top
  addLine(
    [orgX, orgY + 2 * unitLength, endPoint1XNueYNegZNeg[2] - 2 * unitLength],
    [endPoint1XPosYNeg[0] + 2 * unitLength, orgY + 2 * unitLength, orgZ],
    "thin"
  );
  //Bottom
  addLine(
    [orgX, orgY + unitLength * 4.25, endPoint1XNueYNegZNeg[2] - unitLength * 4],
    [endPoint1XPosYNeg[0] + unitLength * 4, orgY + unitLength * 4.25, orgZ],
    "thin"
  );



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

  
  const coordinatesXNueYNegZPos = [
    [orgX, orgY - 2 * unitLength, endPoint1XNueYNegZPos[2] + 2 * unitLength],
    [orgX, orgY - unitLength * 4.25, endPoint1XNueYNegZPos[2] + 2 * unitLength],
    [orgX, orgY - unitLength * 4.25, endPoint1XNueYNegZPos[2] + unitLength * 4],
  ]

  addCurve(coordinatesXNueYNegZPos);


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

  const coordinatesXNueYNegZNeg = [
    [orgX, orgY - 2 * unitLength, endPoint1XNueYNegZNeg[2] - 2 * unitLength],
    [orgX, orgY - unitLength * 4.25, endPoint1XNueYNegZNeg[2] - 2 * unitLength],
    [orgX, orgY - unitLength * 4.25, endPoint1XNueYNegZNeg[2] - unitLength * 4],
  ]

  addCurve(coordinatesXNueYNegZNeg);

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
  
  const coordinatesXNegYNeg = [
    [endPoint1XNegYNeg[0] - 2 * unitLength, orgY - 2 * unitLength, orgZ],
    [endPoint1XNegYNeg[0] - 2 * unitLength, orgY - unitLength * 4.25, orgZ],
    [endPoint1XNegYNeg[0] - unitLength * 4, orgY - unitLength * 4.25, orgZ],
  ]

  addCurve(coordinatesXNegYNeg);

  addSphere(origin);


}

export {
  Pincer_Short
}