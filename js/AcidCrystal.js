import { addVectorLine, addLine, degreesToRadians, phi, addCurve } from '../js/utilities.js';

import { Eight_Curved } from '../crystals/Eight_Curved.js';
import { Eight_Curved_Lattice } from '../crystals/Eight_Curved_Lattice.js';
import { Pincer } from '../crystals/Forty_Pincer.js';
import { Pincer_Short } from '../crystals/Pincer_Short.js';

import * as THREE from '../js/three.module.js';

// Acid Crystal 

export class AcidCrystal {

  constructor(name, segments, curvature, origin, unitLength) {

    const [orgX, orgY, orgZ] = origin;

    // AC-4

    if (segments === 4) {

      // Segment - Center
      addLine([orgX, orgY + unitLength, orgZ], [orgX, orgY - unitLength, orgZ]);

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
      // Y Pos
      addVectorLine('X_Pos_Y_Pos', [orgX + unitLength, orgY + unitLength, orgZ],
        [
          Math.cos(degreesToRadians(0)),
          Math.cos(degreesToRadians(45)),
          Math.cos(degreesToRadians(90))
        ],
        unitLength * Math.sqrt(3)
      );
      // Y Neg
      addVectorLine('X_Pos_Y_Neg', [orgX + unitLength, orgY - unitLength, orgZ],
        [
          Math.cos(degreesToRadians(0)),
          Math.cos(degreesToRadians(135)),
          Math.cos(degreesToRadians(90))
        ],
        unitLength * Math.sqrt(3));

      // Segment X-

      // X Neg

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

      //-------------------

    }

    // AC-6

    if (segments === 6) {

      // Segment - Center
      addLine([orgX, orgY + unitLength, orgZ], [orgX, orgY - unitLength, orgZ]);

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
      // Y Pos
      addVectorLine('X_Pos_Y_Pos', [orgX + unitLength, orgY + unitLength, orgZ],
        [
          Math.cos(degreesToRadians(0)),
          Math.cos(degreesToRadians(45)),
          Math.cos(degreesToRadians(90))
        ],
        unitLength * Math.sqrt(3)
      );
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
        ]);
      // Y Neg
      addVectorLine('X_Pos_Y_Neg', [orgX + unitLength, orgY - unitLength, orgZ],
        [
          Math.cos(degreesToRadians(0)),
          Math.cos(degreesToRadians(135)),
          Math.cos(degreesToRadians(90))
        ],
        unitLength * Math.sqrt(3));

      // XZ Pos 

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
      );

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

      // Y Bisect
      addLine([orgX - unitLength, orgY, orgZ], [orgX - unitLength - unitLength * Math.sqrt(3), orgY, orgZ]);

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
      );

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

      // X Neg Z Pos 

      // Base
      addLine([orgX - unitLength / 2, orgY + unitLength, orgZ + (unitLength * Math.sqrt(3)) / 2], [orgX - (unitLength / 2), orgY - unitLength, orgZ + (unitLength * Math.sqrt(3)) / 2]);

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

      // Base
      addLine([orgX + (unitLength / 2), orgY + unitLength, orgZ - (unitLength * Math.sqrt(3)) / 2], [orgX + (unitLength / 2), orgY - unitLength, orgZ - (unitLength * Math.sqrt(3)) / 2]);

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
    }

    // AC-8 Straight

    if ((segments === 8) && (curvature === 'straight')) {

      // Segment - Center
      addLine([orgX, orgY + unitLength, orgZ], [orgX, orgY - unitLength, orgZ]);

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
      // Y Pos
      addVectorLine('X_Pos_Y_Pos', [orgX + unitLength, orgY + unitLength, orgZ],
        [
          Math.cos(degreesToRadians(0)),
          Math.cos(degreesToRadians(45)),
          Math.cos(degreesToRadians(90))
        ],
        unitLength * Math.sqrt(3)
      );
      // Y Neg
      addVectorLine('X_Pos_Y_Neg', [orgX + unitLength, orgY - unitLength, orgZ],
        [
          Math.cos(degreesToRadians(0)),
          Math.cos(degreesToRadians(135)),
          Math.cos(degreesToRadians(90))
        ],
        unitLength * Math.sqrt(3));

      // Segment X-

      // X Neg

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

    }

    // AC-8 Curved

    if ((segments === 8) && (curvature === 'curved')) {
      Eight_Curved(origin, unitLength);
    }

    // AC-8 Curved Bug Walk

    if ((segments === 8) && (curvature === 'curved_bug_walk')) {
      Eight_Curved_Lattice(origin, unitLength);
    }

    // Pincer

    if ((segments === 40) && (curvature === 'pincer')) {
      Pincer(origin, unitLength);
    }

    // Pincer Short

    if ((curvature === 'pincer_short')) {
      Pincer_Short(origin, unitLength);
    }

  }

}