import {
  addVectorLine,
  degreesToRadians,
  generateCurveFromVector,
} from '../js/utilities.js'


function Oct_Anvil(origin, unitLength, position) {

  const [orgX, orgY, orgZ] = origin;

  /*****************/

  // Anvil X+Z_

  // Y+
  
  // L2 

  addVectorLine(
    '3',
    [1,1,0],
    [
      orgX + 2 * unitLength,
      orgY + unitLength,
      orgZ
    ],
    [90,0,90],
    unitLength,
    0,
    'L2_X+Y+Z_',
  )

  // L3 

  generateCurveFromVector(
    '3',
    [1,1,0],
    [
      orgX + 2 * unitLength,
      orgY + 2 * unitLength,
      orgZ
    ],
    [0,45,90],
    unitLength,
    unitLength,
    "curved",
    'L3_X+Y+Z_',
  )

  // Y-

  // L2 

  addVectorLine(
    '3',
    [1,1,0],
    [
      orgX + 2 * unitLength,
      orgY - unitLength,
      orgZ
    ],
    [90,180,90],
    unitLength,
    0,
    'L2_X+Y-Z_',
  )

  // L2 

  generateCurveFromVector(
    '3',
    [1,-1,0],
    [
      orgX + 2 * unitLength,
      orgY - 2 * unitLength,
      orgZ
    ],
    [0,135,90],
    unitLength,
    unitLength,
    "curved",
    'L3_X+Y-Z_',
  )

  // Anvil X+Z+

  // Y+
  
  // L2 

  addVectorLine(
    '3',
    [1,1,1],
    [
      orgX + 1 * unitLength,
      orgY + unitLength,
      orgZ + 1 * unitLength
    ],
    [90,0,90],
    unitLength,
    0,
    'L2_X+Y+Z+',
  )

  // L3 

  generateCurveFromVector(
    '3',
    [1,1,1],
    [
      orgX + 1 * unitLength,
      orgY + 2 * unitLength,
      orgZ + 1 * unitLength
    ],
    [45,45,45],
    unitLength,
    unitLength,
    "curved",
    'L3_X+Y+Z+',
  )

  // Y-
  
  // L2 

  addVectorLine(
    '3',
    [1,-1,1],
    [
      orgX + 1 * unitLength,
      orgY - unitLength,
      orgZ + 1 * unitLength
    ],
    [90,180,90],
    unitLength,
    0,
    'L2_X+Y-Z+',
  )

  // L3 

  generateCurveFromVector(
    '3',
    [1,-1,1],
    [
      orgX + 1 * unitLength,
      orgY - 2 * unitLength,
      orgZ + 1 * unitLength
    ],
    [45,135,45],
    unitLength,
    unitLength,
    "curved",
    'L3_X+Y-Z+',
  )


  








}

export {
  Oct_Anvil
}

