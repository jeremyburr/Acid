import {
  addVectorLine,
  returnEndPosition,
  addLine,
  degreesToRadians,
  phi,
  addCurve
} from '../js/utilities.js'

function Eight_Curved(origin, unitLength) {

const [orgX, orgY, orgZ] = origin;

  /*****************/

  //  X Pos Y Neg

  // Base
    addLine(
      [
        orgX + unitLength,
        orgY + unitLength,
        orgZ
      ],
      [
        orgX + unitLength,
        orgY - unitLength,
        orgZ
      ]
    );

  addVectorLine(
  'X_Pos_Y_Neg', 
  [orgX + unitLength, orgY - unitLength, orgZ],
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
    [endPoint1XPosYNeg[0], orgY - unitLength, orgZ],
    [endPoint1XPosYNeg[0]+unitLength, orgY - unitLength * 3, orgZ],
    [endPoint1XPosYNeg[0]+unitLength*3, orgY - unitLength * 3.75, orgZ],
  ]

  addCurve(coordinatesXPosYNeg);

  /*****************/

  // X Neg Y Neg

    // Base
    addLine(
      [
        orgX - unitLength,
        orgY + unitLength,
        orgZ
      ],
      [
        orgX - unitLength,
        orgY - unitLength,
        orgZ
      ]
    );

  addVectorLine(
  'X_Neg_Y_Neg',
  [orgX - unitLength, orgY - unitLength, orgZ],
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
    [endPoint1XNegYNeg[0], orgY - unitLength, orgZ],
    [endPoint1XNegYNeg[0]-unitLength, orgY - unitLength * 3, orgZ],
    [endPoint1XNegYNeg[0]-unitLength*3, orgY - unitLength * 3.75, orgZ],
  ]

  addCurve(coordinatesXNegYNeg);

  /*****************/

  //  X Pos Y Pos

  // Base
    addLine(
      [
        orgX + unitLength,
        orgY + unitLength,
        orgZ
      ],
      [
        orgX + unitLength,
        orgY + unitLength,
        orgZ
      ]
    );

  addVectorLine(
  'X_Pos_Y_Pos', 
  [orgX + unitLength, orgY + unitLength, orgZ],
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
    [endPoint1XPosYNeg[0], orgY + unitLength, orgZ],
    [endPoint1XPosYNeg[0]+unitLength, orgY + unitLength * 3, orgZ],
    [endPoint1XPosYNeg[0]+unitLength*3, orgY + unitLength * 3.75, orgZ],
  ]

  addCurve(coordinatesXPosYPos);

  /*****************/

  //  X Neg Y Pos

  // Base
    addLine(
      [
        orgX - unitLength,
        orgY + unitLength,
        orgZ
      ],
      [
        orgX - unitLength,
        orgY + unitLength,
        orgZ
      ]
    );

  addVectorLine(
  'X_Neg_Y_Pos', 
  [orgX - unitLength, orgY + unitLength, orgZ],
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
    [endPoint1XNegYNeg[0], orgY + unitLength, orgZ],
    [endPoint1XNegYNeg[0]-unitLength, orgY + unitLength * 3, orgZ],
    [endPoint1XNegYNeg[0]-unitLength*3, orgY + unitLength * 3.75, orgZ],
  ]

  addCurve(coordinatesXNegYPos);

  /*****************/

  //  X Pos Y Neg

  // Base
    addLine(
      [
        orgX + unitLength / 2,
        orgY + unitLength,
        orgZ + unitLength / 2
      ],
      [
        orgX + unitLength / 2,
        orgY - unitLength,
        orgZ + unitLength / 2
      ]
    );

    
  addVectorLine(
  'X_Pos_Y_Neg_Z_Pos', 
  [orgX + unitLength / 2, orgY - unitLength, orgZ + unitLength / 2],
    [
      Math.cos(degreesToRadians(45)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(45))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XPosYNegZPos = returnEndPosition(
    [orgX + unitLength / 2, orgY - unitLength, orgZ + unitLength / 2],
    [
      Math.cos(degreesToRadians(45)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(45))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXPosYNegZPos = [
    [endPoint1XPosYNegZPos[0], orgY - unitLength, endPoint1XPosYNegZPos[2]],
    [endPoint1XPosYNegZPos[0]+unitLength/2, orgY - unitLength * 3, endPoint1XPosYNegZPos[2] + unitLength  / 2],
    [endPoint1XPosYNegZPos[0]+unitLength*3/2, orgY - unitLength * 3.75, endPoint1XPosYNegZPos[2] + unitLength * 3 / 2],
  ]

  addCurve(coordinatesXPosYNegZPos);

  


  // Segment X-

  // X Neg

  /*

  // Base
  addLine(
    [
      orgX - unitLength,
      orgY + unitLength,
      orgZ
    ],
    [
      orgX - unitLength,
      orgY - unitLength,
      orgZ
    ]);

  // Y Pos
  addVectorLine('X_Neg_Y_Pos', [orgX - unitLength, orgY + unitLength, orgZ],
    [
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(45)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * Math.sqrt(3)
  );

  // Y Neg
  addVectorLine('X_Neg_Y_Neg', [orgX - unitLength, orgY - unitLength, orgZ],
    [
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(135)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * Math.sqrt(3)
  );

  */

  /* 

  // Segment Z+ 
  // Base
  addLine(
    [
      orgX,
      orgY + unitLength,
      orgZ + unitLength
    ],
    [
      orgX,
      orgY - unitLength,
      orgZ + unitLength
    ]
  );
  // Y Pos
  addVectorLine('Z_Pos_Y_Pos', [orgX, orgY + unitLength, orgZ + unitLength],
    [
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(45)),
      Math.cos(degreesToRadians(0))
    ],
    unitLength * Math.sqrt(3)
  );
  // Y Neg
  addVectorLine('Z_Pos_Y_Neg', [orgX, orgY - unitLength, orgZ + unitLength],
    [
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(135)),
      Math.cos(degreesToRadians(0))
    ],
    unitLength * Math.sqrt(3));

  // Segment Z- 
  // Base
  addLine(
    [
      orgX,
      orgY + unitLength,
      orgZ - unitLength
    ],
    [
      orgX,
      orgY - unitLength,
      orgZ - unitLength
    ]
  );
  // Y Pos
  addVectorLine('Z_Pos_Y_Pos', [orgX, orgY + unitLength, orgZ - unitLength],
    [
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(45)),
      Math.cos(degreesToRadians(180))
    ],
    unitLength * Math.sqrt(3)
  );
  // Y Neg
  addVectorLine('Z_Pos_Y_Neg', [orgX, orgY - unitLength, orgZ - unitLength],
    [
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(135)),
      Math.cos(degreesToRadians(180))
    ],
    unitLength * Math.sqrt(3));

  // Segment X+Z+

  // Base
  addLine(
    [
      orgX + unitLength / 2,
      orgY + unitLength,
      orgZ + unitLength / 2
    ],
    [
      orgX + unitLength / 2,
      orgY - unitLength,
      orgZ + unitLength / 2
    ]
  );
  // Y Pos
  addVectorLine('XZ_Pos_Y_Pos', [orgX + unitLength / 2, orgY + unitLength, orgZ + unitLength / 2],
    [
      Math.cos(degreesToRadians(45)),
      Math.cos(degreesToRadians(45)),
      Math.cos(degreesToRadians(0))
    ],
    unitLength * Math.sqrt(3)
  );
  // Y Neg
  addVectorLine('XZ_Pos_Y_Neg', [orgX + unitLength / 2, orgY - unitLength, orgZ + unitLength / 2],
    [
      Math.cos(degreesToRadians(45)),
      Math.cos(degreesToRadians(135)),
      Math.cos(degreesToRadians(0))
    ],
    unitLength * Math.sqrt(3));

  // Segment X+Z-

  // Base
  addLine(
    [
      orgX + unitLength / 2,
      orgY + unitLength,
      orgZ - unitLength / 2
    ],
    [
      orgX + unitLength / 2,
      orgY - unitLength,
      orgZ - unitLength / 2
    ]
  );
  // Y Pos
  addVectorLine('X_Pos_Z_Neg_Y_Pos', [orgX + unitLength / 2, orgY + unitLength, orgZ - unitLength / 2],
    [
      Math.cos(degreesToRadians(45)),
      Math.cos(degreesToRadians(45)),
      Math.cos(degreesToRadians(235))
    ],
    unitLength * Math.sqrt(3)
  );
  // Y Neg
  addVectorLine('X_Pos_Z_Neg_Y_Neg', [orgX + unitLength / 2, orgY - unitLength, orgZ - unitLength / 2],
    [
      Math.cos(degreesToRadians(45)),
      Math.cos(degreesToRadians(135)),
      Math.cos(degreesToRadians(235))
    ],
    unitLength * Math.sqrt(3));


  // Segment X-Z-

  // Base
  addLine(
    [
      orgX - unitLength / 2,
      orgY + unitLength,
      orgZ - unitLength / 2
    ],
    [
      orgX - unitLength / 2,
      orgY - unitLength,
      orgZ - unitLength / 2
    ]
  );
  // Y Pos
  addVectorLine('X_Neg_Z_Neg_Y_Pos', [orgX - unitLength / 2, orgY + unitLength, orgZ - unitLength / 2],
    [
      Math.cos(degreesToRadians(235)),
      Math.cos(degreesToRadians(45)),
      Math.cos(degreesToRadians(235))
    ],
    unitLength * Math.sqrt(3)
  );
  // Y Neg
  addVectorLine('X_Neg_Z_Neg_Y_Neg', [orgX - unitLength / 2, orgY - unitLength, orgZ - unitLength / 2],
    [
      Math.cos(degreesToRadians(235)),
      Math.cos(degreesToRadians(135)),
      Math.cos(degreesToRadians(235))
    ],
    unitLength * Math.sqrt(3));

  // Segment X-Z+

  // Base
  addLine(
    [
      orgX - unitLength / 2,
      orgY + unitLength,
      orgZ + unitLength / 2
    ],
    [
      orgX - unitLength / 2,
      orgY - unitLength,
      orgZ + unitLength / 2
    ]
  );
  // Y Pos
  addVectorLine('X_Neg_Z_Pos_Y_Pos', [orgX - unitLength / 2, orgY + unitLength, orgZ + unitLength / 2],
    [
      Math.cos(degreesToRadians(235)),
      Math.cos(degreesToRadians(45)),
      Math.cos(degreesToRadians(45))
    ],
    unitLength * Math.sqrt(3)
  );
  // Y Neg
  addVectorLine('X_Neg_Z_Pos_Y_Neg', [orgX - unitLength / 2, orgY - unitLength, orgZ + unitLength / 2],
    [
      Math.cos(degreesToRadians(235)),
      Math.cos(degreesToRadians(135)),
      Math.cos(degreesToRadians(45))
    ],
    unitLength * Math.sqrt(3));

    */

}

export {
  Eight_Curved 
}