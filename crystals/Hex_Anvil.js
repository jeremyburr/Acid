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

  // L1 X+ 

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
    , 'thin', position);


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
    , "thin", position);


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
    ], 'thin', position);

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
    , 'thin', position);


  // X Neg Z Pos 

  // Base
  addLine(
    [orgX - unitLength / 2, 
     orgY + unitLength, orgZ + (unitLength * Math.sqrt(3)) / 2],
    [orgX - (unitLength / 2), orgY - unitLength, orgZ + (unitLength * Math.sqrt(3)) / 2],
    'thin',
    position);


  // X Pos Z Neg 

  // Base
  addLine(
    [orgX + (unitLength / 2), orgY + unitLength, orgZ - (unitLength * Math.sqrt(3)) / 2],
    [orgX + (unitLength / 2), orgY - unitLength, orgZ - (unitLength * Math.sqrt(3)) / 2],
    'thin', position);

}

export {
  Hex_Anvil
}

// L0 Center Rod

//addLine([orgX, orgY + unitLength, orgZ], [orgX, orgY - unitLength, orgZ],'thin',position);
