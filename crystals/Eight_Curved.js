import {
  addVectorLine,
  addLine,
  degreesToRadians,
  phi,
  addCurve
} from '../js/utilities.js'

function Eight_Curved(origin, unitLength) {

const [orgX, orgY, orgZ] = origin;

  // Segment - Center
  //addLine([orgX, orgY + unitLength, orgZ], [orgX, orgY - unitLength, orgZ]);

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
  );

  /*

  // Y Pos
  addVectorLine('X_Pos_Y_Pos', [orgX + unitLength, orgY + unitLength, orgZ],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(45)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * Math.sqrt(3)
  );

  */

  // Thigh - X Pos Y Neg


  addVectorLine('X_Pos_Y_Neg', [orgX + unitLength, orgY - unitLength, orgZ],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 2 * phi);

  /*

  const coordinates = [
    [unitLength * 2 * phi, orgY - unitLength, orgZ],
    //[10,10,10],[20,20,20],
    [unitLength * 2 * phi, 0, 0]
  ];

  */

  const coordinates = [
    [33.88, orgY - unitLength, orgZ],
    //[40, orgY - unitLength * 2.5, orgZ],
    [40, orgY - unitLength * 3, orgZ],
    [60, orgY - unitLength * 4, orgZ],
    //[unitLength * 2 * phi, orgY - unitLength, orgZ],
    //[10,10,10],[20,20,20],
    //[unitLength * 2 * phi, 0, 0]
  ]

  addCurve(coordinates);

  


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