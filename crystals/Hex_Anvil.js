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
  /*addLine(

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
    ,"thin",position
  );*/


  /*const endPoint1XPosYPos = returnEndPosition(
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

  addCurve(coordinatesXPosYPos, position);*/

  
  /*****************/

  //  X Neg Y Pos

  // Base
  /*addLine(
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
    ,"thin",position
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
  */


  // BOTTOM

  //  X Pos Y Neg

  /*****************/

  // Base
/*  addLine(
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
    ,"thin",position
  );*/

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

  /*// Y Neg Z Pos
  
  const endPoint1XNueYNegZPos = returnEndPosition(
    [orgX, orgY, orgZ + unitLength],
    [
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(0))
    ],
    unitLength * 1.25 * phi)
    */

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

/*const endPoint1XNueYNegZNeg = returnEndPosition(
    [orgX, orgY, orgZ - unitLength],
    [
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(180))
    ],
    unitLength * 1.25 * phi)*/

  //addCurve(coordinatesXPosYNeg, position);
  

    /*****************/

  // Base
/*  addLine(
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
    'thin',
    position

  );
  */

  /*addVectorLine(
    'X_Neg_Y_Neg',
    [orgX - 3 * unitLength, orgY - 2 * unitLength, orgZ],
    [
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi,position);
    */
  
  /*const coordinatesXNegYNeg = [
    [orgX - 3 * unitLength, orgY - 2 * unitLength, orgZ],
    [orgX - 3 * unitLength, orgY - unitLength * 2.25, orgZ],
    [endPoint1XNegYNeg[0] - unitLength * 4, orgY - unitLength * 4.25, orgZ],
  ]

  addCurve(coordinatesXNegYNeg, position);*/

  //addSphere(origin);


  // AC-6 Resurrected

    //if (segments === 6) {

      // Segment - Center
      addLine([orgX, orgY + unitLength, orgZ], [orgX, orgY - unitLength, orgZ],'thin',position);

      // Segment X+ 
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
      ,'thin',position);

      // Y Pos
      /*addVectorLine('X_Pos_Y_Pos', [orgX + unitLength, orgY + unitLength, orgZ],
        [
          Math.cos(degreesToRadians(0)),
          Math.cos(degreesToRadians(45)),
          Math.cos(degreesToRadians(90))
        ],
        unitLength * Math.sqrt(3)
      );*/

      /*
      // Y Bisect
      addLine(
        [
          orgX + unitLength,
          orgY,
          orgZ
        ],
        [orgX + (unitLength) + unitLength * Math.sqrt(3),
          orgY,
          orgZ
        ],position);
      // Y Neg
      addVectorLine('X_Pos_Y_Neg', [orgX + unitLength, orgY - unitLength, orgZ],
        [
          Math.cos(degreesToRadians(0)),
          Math.cos(degreesToRadians(135)),
          Math.cos(degreesToRadians(90))
        ],
        unitLength * Math.sqrt(3));

      // XZ Pos 

      */
      // Base
      addLine(
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
      ,"thin",position);

      /*

      // XZ Pos

      // Y Pos
      addVectorLine('XZ_Pos_Y_Pos', [orgX + (unitLength / 2), orgY + unitLength, orgZ + (unitLength * Math.sqrt(3)) / 2],
        [
          Math.cos(degreesToRadians(60)),
          Math.cos(degreesToRadians(45)),
          Math.cos(degreesToRadians(30))],
        unitLength * Math.sqrt(3));

      // Y Neg
      addVectorLine('XZ_Pos_Y_Neg', [orgX + (unitLength / 2), orgY - unitLength, orgZ + (unitLength * Math.sqrt(3)) / 2],
        [
          Math.cos(degreesToRadians(60)),
          Math.cos(degreesToRadians(135)),
          Math.cos(degreesToRadians(30))],
        unitLength * Math.sqrt(3));

      // Y Bisect
      addVectorLine('XZ_Pos_Y_Bisect', [orgX + (unitLength / 2), orgY, orgZ + (unitLength * Math.sqrt(3)) / 2],
        [
          Math.cos(degreesToRadians(60)),
          Math.cos(degreesToRadians(90)),
          Math.cos(degreesToRadians(30))],
        unitLength * Math.sqrt(3));

      // X Neg
      */

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
        ],'thin',position);

        /*

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

      // Y Bisect
      addLine([orgX - unitLength, orgY, orgZ], [orgX - unitLength - unitLength * Math.sqrt(3), orgY, orgZ],position);

      */
      // XZ Neg 

      // Base
      addLine(
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
      ,'thin',position);

      /*

      // Y Pos
      addVectorLine('XZ_Neg_Y_Pos', [orgX - (unitLength / 2), orgY + unitLength, orgZ - (unitLength * Math.sqrt(3)) / 2],
        [Math.cos(degreesToRadians(240)),
        Math.cos(degreesToRadians(45)),
        Math.cos(degreesToRadians(210))],
        unitLength * Math.sqrt(3));

      // Y Neg
      addVectorLine('XZ_Neg_Y_Neg', [orgX - (unitLength / 2), orgY - unitLength, orgZ - (unitLength * Math.sqrt(3)) / 2],
        [Math.cos(degreesToRadians(240)),
        Math.cos(degreesToRadians(135)),
        Math.cos(degreesToRadians(215))],
        unitLength * Math.sqrt(3));

      // Y Bisect
      addVectorLine('XZ_Neg_Y_Bisect', [orgX - (unitLength / 2), orgY, orgZ - (unitLength * Math.sqrt(3)) / 2],
        [Math.cos(degreesToRadians(240)),
        Math.cos(degreesToRadians(90)),
        Math.cos(degreesToRadians(210))],
        unitLength * Math.sqrt(3));

        */
      // X Neg Z Pos 

      // Base
      addLine(
        [orgX - unitLength / 2, orgY + unitLength, orgZ + (unitLength * Math.sqrt(3)) / 2], 
        [orgX - (unitLength / 2), orgY - unitLength, orgZ + (unitLength * Math.sqrt(3)) / 2],
        'thin',
        position);

      /*

      // Y Pos
      addVectorLine('X_Neg_Z_Pos_Y_Pos', [orgX - (unitLength / 2), orgY + unitLength, orgZ + (unitLength * Math.sqrt(3)) / 2],
        [Math.cos(degreesToRadians(120)),
        Math.cos(degreesToRadians(45)),
        Math.cos(degreesToRadians(30))],
        unitLength * Math.sqrt(3));

      // Y Neg

      addVectorLine('X_Neg_Z_Pos_Y_Neg', [orgX - (unitLength / 2), orgY - unitLength, orgZ + (unitLength * Math.sqrt(3)) / 2],
        [Math.cos(degreesToRadians(120)),
        Math.cos(degreesToRadians(135)),
        Math.cos(degreesToRadians(30))],
        unitLength * Math.sqrt(3));

      // Y Bisect 
      addVectorLine('X_Pos_Z_Neg_Y_Bisect', [orgX - (unitLength / 2), orgY, orgZ + (unitLength * Math.sqrt(3)) / 2],
        [Math.cos(degreesToRadians(120)),
        Math.cos(degreesToRadians(90)),
        Math.cos(degreesToRadians(30))],
        unitLength * Math.sqrt(3));

      // X Pos Z Neg 

      */

      // Base
      addLine(
        [orgX + (unitLength / 2), orgY + unitLength, orgZ - (unitLength * Math.sqrt(3)) / 2], 
        [orgX + (unitLength / 2), orgY - unitLength, orgZ - (unitLength * Math.sqrt(3)) / 2],
        'thin', position);
       /* 

      // Y Pos
      addVectorLine('X_Pos_Z_Neg_Y_Pos', [orgX + (unitLength / 2), orgY + unitLength, orgZ - (unitLength * Math.sqrt(3)) / 2],
        [Math.cos(degreesToRadians(300)),
        Math.cos(degreesToRadians(45)),
        Math.cos(degreesToRadians(210))],
        unitLength * Math.sqrt(3));

      // Y Bisect
      addVectorLine('X_Pos_Z_Neg_Y_Bisect', [orgX + (unitLength / 2), orgY, orgZ - (unitLength * Math.sqrt(3)) / 2],
        [Math.cos(degreesToRadians(300)),
        Math.cos(degreesToRadians(90)),
        Math.cos(degreesToRadians(210))],
        unitLength * Math.sqrt(3));

      // Y Neg
      addVectorLine('X_Pos_Z_Neg_Y_Neg', [orgX + (unitLength / 2), orgY - unitLength, orgZ - (unitLength * Math.sqrt(3)) / 2],
        [Math.cos(degreesToRadians(300)),
        Math.cos(degreesToRadians(135)),
        Math.cos(degreesToRadians(210))],
        unitLength * Math.sqrt(3));
    */
      //}


}

export {
  Hex_Anvil
}