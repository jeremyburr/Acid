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

  addVectorLine(
    'X_Pos_Y_Pos',
    [orgX + 3 * unitLength, orgY + 2 * unitLength, orgZ],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi,position);

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
    ,"normal",position
  );

  addVectorLine(
    'X_Nue_Y_Pos_Z_Pos',
    [orgX, orgY + 2 * unitLength, orgZ + 3 * unitLength],
    [
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(0))
    ],
    unitLength * 1.25 * phi,position);

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

  addCurve(coordinatesXNueYPosZPos, position);

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
    ,"normal",position
  );

  addVectorLine(
    'X_Nue_Y_Pos_Z_Neg',
    [orgX, orgY + 2 * unitLength, orgZ - 3 * unitLength],
    [
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(180))
    ],
    unitLength * 1.25 * phi,position);

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

  addCurve(coordinatesXNueYPosZNeg, position) ;

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
  addVectorLine(
    'X_Pos_Y_Neg',
    [orgX + 3 * unitLength, orgY - 2 * unitLength, orgZ],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi,position);

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

        
  // Extend Y-X+Z+

  // Y-X+Z+ Inner
  const YNegXPosZPosPaneInnerCoordinates  =   [
    endPoint1XPosYNeg[0] + 2 * unitLength, orgY - 2 * unitLength, orgZ,
    orgX, orgY - 2 * unitLength, endPoint1XNueYNegZPos[2] + 2 * unitLength,
    endPoint1XNegYNeg[0] - 2 * unitLength, orgY - 2 * unitLength, orgZ
  ]
  addPane(YNegXPosZPosPaneInnerCoordinates,"default",position);
  
  // Y-X+Z+ Outer
  const YNegXPosZPosPaneOuterCoordinates  =   [
    endPoint1XPosYNeg[0] + unitLength * 4, orgY - unitLength * 4.25, orgZ,
    orgX, orgY - unitLength * 4.25, endPoint1XNueYNegZPos[2] + unitLength * 4,
    endPoint1XNegYNeg[0] - unitLength * 4, orgY - unitLength * 4.25, orgZ
  ]
  addPane(YNegXPosZPosPaneOuterCoordinates,"default",position);

  // Y+X+Z+ Inner
  const YPosXPosZPosPaneInnerCoordinates  =   [
    endPoint1XPosYPos[0] + 2 * unitLength, orgY + 2 * unitLength, orgZ,
    orgX, orgY + 2 * unitLength, endPoint1XNueYPosZPos[2] + 2 * unitLength,
    endPoint1XNegYPos[0] - 2 * unitLength, orgY + 2 * unitLength, orgZ
  ]
  addPane(YPosXPosZPosPaneInnerCoordinates,"default",position);
  
  // Y+X+Z+ Outer
  const YPosXPosZPosPaneOuterCoordinates  =   [
    endPoint1XPosYPos[0] + unitLength * 4, orgY + unitLength * 4.25, orgZ,
    orgX, orgY + unitLength * 4.25, endPoint1XNueYPosZPos[2] + unitLength * 4,
    endPoint1XNegYPos[0] - unitLength * 4, orgY + unitLength * 4.25, orgZ
  ]
  addPane(YPosXPosZPosPaneOuterCoordinates,"default",position);


  // Inner
  addLine(
    [endPoint1XPosYNeg[0] + 2 * unitLength, orgY - 2 * unitLength, orgZ],
    [orgX, orgY - 2 * unitLength, endPoint1XNueYNegZPos[2] + 2 * unitLength],
    "thin",
    position
  );
  // Outer
  addLine(
    [endPoint1XPosYNeg[0] + unitLength * 4, orgY - unitLength * 4.25, orgZ],
    [orgX, orgY - unitLength * 4.25, endPoint1XNueYNegZPos[2] + unitLength * 4],
    "thin",
    position
  );

  // Extend Y-Z+X-

  // Y-X+Z- inner
  const YNegXPosZNegInnerPaneCoordinates  =   [endPoint1XPosYNeg[0] + 2 * unitLength, orgY - 2 * unitLength, orgZ,
    orgX, orgY - 2 * unitLength, endPoint1XNueYNegZNeg[2] - 2 * unitLength,
    endPoint1XNegYNeg[0] - 2 * unitLength, orgY - 2 * unitLength, orgZ
  ]
  addPane(YNegXPosZNegInnerPaneCoordinates,"default",position);

  // Y-X+Z- Outer
  const YNegXNegZPosPaneOuterCoordinates  =   [
    endPoint1XPosYNeg[0] + unitLength * 4, orgY - unitLength * 4.25, orgZ,

    //orgX, orgY - unitLength * 4.25, endPoint1XNueYNegZPos[2] + unitLength * 4,
    orgX, orgY - unitLength * 4.25, endPoint1XNueYNegZNeg[2] - unitLength * 4,

    endPoint1XNegYNeg[0] - unitLength * 4, orgY - unitLength * 4.25, orgZ
  ]
  addPane(YNegXNegZPosPaneOuterCoordinates,"default",position);

  // Y+X+Z- inner
  const YPosXPosZNegInnerPaneCoordinates  =   [endPoint1XPosYPos[0] + 2 * unitLength, orgY + 2 * unitLength, orgZ,
    orgX, orgY + 2 * unitLength, endPoint1XNueYPosZNeg[2] - 2 * unitLength,
    endPoint1XNegYPos[0] - 2 * unitLength, orgY + 2 * unitLength, orgZ
  ]
  addPane(YPosXPosZNegInnerPaneCoordinates,"default",position);

  // Y+X+Z- Outer
  const YPosXNegZPosPaneOuterCoordinates  =   [
    endPoint1XPosYPos[0] + unitLength * 4, orgY + unitLength * 4.25, orgZ,

    //orgX, orgY - unitLength * 4.25, endPoint1XNueYPosZPos[2] + unitLength * 4,
    orgX, orgY + unitLength * 4.25, endPoint1XNueYPosZNeg[2] - unitLength * 4,

    endPoint1XNegYPos[0] - unitLength * 4, orgY + unitLength * 4.25, orgZ
  ]
  addPane(YPosXNegZPosPaneOuterCoordinates,"default",position);


  //Top
  addLine(
    [orgX, orgY - 2 * unitLength, endPoint1XNueYNegZPos[2] + 2 * unitLength],
    [endPoint1XNegYNeg[0] - 2 * unitLength, orgY - 2 * unitLength, orgZ],
    "thin",
    position
  );
  //Bottom
  addLine(
    [orgX, orgY - unitLength * 4.25, endPoint1XNueYNegZPos[2] + unitLength * 4],
    [endPoint1XNegYNeg[0] - unitLength * 4, orgY - unitLength * 4.25, orgZ],
    "thin",
    position
  );

  // Extend Y-X-Z- 

  //Top
  addLine(
    [endPoint1XNegYNeg[0] - 2 * unitLength, orgY - 2 * unitLength, orgZ],
    [orgX, orgY - 2 * unitLength, endPoint1XNueYNegZNeg[2] - 2 * unitLength],
    "thin",
    position
  );
  //Bottom
  addLine(
    [endPoint1XNegYNeg[0] - unitLength * 4, orgY - unitLength * 4.25, orgZ],
    [orgX, orgY - unitLength * 4.25, endPoint1XNueYNegZNeg[2] - unitLength * 4],
    "thin",
    position
  );

  // Extend Y-Z- 

  //Top
  addLine(
    [orgX, orgY - 2 * unitLength, endPoint1XNueYNegZNeg[2] - 2 * unitLength],
    [endPoint1XPosYNeg[0] + 2 * unitLength, orgY - 2 * unitLength, orgZ],
    "thin",
    position
  );
  //Bottom
  addLine(
    [orgX, orgY - unitLength * 4.25, endPoint1XNueYNegZNeg[2] - unitLength * 4],
    [endPoint1XPosYNeg[0] + unitLength * 4, orgY - unitLength * 4.25, orgZ],
    "thin",
    position
  );

  // Extend Y+X+Z+

  // Top
  addLine(
    [endPoint1XPosYNeg[0] + 2 * unitLength, orgY + 2 * unitLength, orgZ],
    [orgX, orgY + 2 * unitLength, endPoint1XNueYNegZPos[2] + 2 * unitLength],
    "thin",
    position
  );
  // Bottom
  addLine(
    [endPoint1XPosYNeg[0] + unitLength * 4, orgY + unitLength * 4.25, orgZ],
    [orgX, orgY + unitLength * 4.25, endPoint1XNueYNegZPos[2] + unitLength * 4],
    "thin",
    position
  );

  // Extend Y-Z+X-

  //Top
  addLine(
    [orgX, orgY + 2 * unitLength, endPoint1XNueYNegZPos[2] + 2 * unitLength],
    [endPoint1XNegYNeg[0] - 2 * unitLength, orgY + 2 * unitLength, orgZ],
    "thin",
    position
  );
  //Bottom
  addLine(
    [orgX, orgY + unitLength * 4.25, endPoint1XNueYNegZPos[2] + unitLength * 4],
    [endPoint1XNegYNeg[0] - unitLength * 4, orgY + unitLength * 4.25, orgZ],
    "thin",
    position
  );

  // Extend Y-X-Z- 

  //Top
  addLine(
    [endPoint1XNegYNeg[0] - 2 * unitLength, orgY + 2 * unitLength, orgZ],
    [orgX, orgY + 2 * unitLength, endPoint1XNueYNegZNeg[2] - 2 * unitLength],
    "thin",
    position
  );
  //Bottom
  addLine(
    [endPoint1XNegYNeg[0] - unitLength * 4, orgY + unitLength * 4.25, orgZ],
    [orgX, orgY + unitLength * 4.25, endPoint1XNueYNegZNeg[2] - unitLength * 4],
    "thin",
    position
  );

  // Extend Y-Z- 

  //Top
  addLine(
    [orgX, orgY + 2 * unitLength, endPoint1XNueYNegZNeg[2] - 2 * unitLength],
    [endPoint1XPosYNeg[0] + 2 * unitLength, orgY + 2 * unitLength, orgZ],
    "thin",
    position
  );
  //Bottom
  addLine(
    [orgX, orgY + unitLength * 4.25, endPoint1XNueYNegZNeg[2] - unitLength * 4],
    [endPoint1XPosYNeg[0] + unitLength * 4, orgY + unitLength * 4.25, orgZ],
    "thin",
    position
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
    ],
    'medium',
    position
  );

  addVectorLine(
    'X_Nue_Y_Neg_Z_Pos',
    [orgX, orgY - 2 * unitLength, orgZ + 3 * unitLength],
    [
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(0))
    ],
    unitLength * 1.25 * phi,position);

  
  const coordinatesXNueYNegZPos = [
    [orgX, orgY - 2 * unitLength, endPoint1XNueYNegZPos[2] + 2 * unitLength],
    [orgX, orgY - unitLength * 4.25, endPoint1XNueYNegZPos[2] + 2 * unitLength],
    [orgX, orgY - unitLength * 4.25, endPoint1XNueYNegZPos[2] + unitLength * 4],
  ]

  addCurve(coordinatesXNueYNegZPos, position);


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
    ],
    'medium',
    position
  );

  addVectorLine(
    'X_Nue_Y_Neg_Z_Neg',
    [orgX, orgY - 2 * unitLength, orgZ - 3 * unitLength],
    [
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(180))
    ],
    unitLength * 1.25 * phi,position);

  const coordinatesXNueYNegZNeg = [
    [orgX, orgY - 2 * unitLength, endPoint1XNueYNegZNeg[2] - 2 * unitLength],
    [orgX, orgY - unitLength * 4.25, endPoint1XNueYNegZNeg[2] - 2 * unitLength],
    [orgX, orgY - unitLength * 4.25, endPoint1XNueYNegZNeg[2] - unitLength * 4],
  ]

  addCurve(coordinatesXNueYNegZNeg, position);

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