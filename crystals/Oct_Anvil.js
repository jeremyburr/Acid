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

  // L1 

  addVectorLine(
    '3',
    [1,1,0],
    [
      orgX + unitLength,
      orgY + unitLength,
      orgZ
    ],
    [0,90,90],
    unitLength,
    0,
    'L1_X+Y+Z_',
  )
  
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

  // L1 

  addVectorLine(
    '3',
    [1,-1,0],
    [
      orgX + unitLength,
      orgY - unitLength,
      orgZ
    ],
    [0,90,90],
    unitLength,
    0,
    'L1_X+Y+Z_',
  )
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

  // L3 

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

  // L1 

  addVectorLine(
    '3',
    [1,1,0],
    [
      orgX + Math.cos(degreesToRadians(45)) * unitLength,
      orgY + unitLength,
      orgZ + Math.cos(degreesToRadians(45))* unitLength
    ],
    [45,90,45],
    unitLength,
    0,
    'L1_X+Y+Z_',
  )



  // L2 

  addVectorLine(
    '3',
    [1,1,1],
    [
      orgX + Math.cos(degreesToRadians(45)) * 2 * unitLength,
      orgY + unitLength,
      orgZ + Math.cos(degreesToRadians(45)) * 2 * unitLength
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
      orgX + Math.cos(degreesToRadians(45)) * 2 * unitLength,
      orgY + 2 * unitLength,
      orgZ + Math.cos(degreesToRadians(45)) * 2 * unitLength
    ],
    [45,45,45],
    unitLength,
    unitLength,
    "curved",
    'L3_X+Y+Z+',
  )


  // Y-

  // L1 

  addVectorLine(
    '3',
    [1,-1,0],
    [
      orgX + Math.cos(degreesToRadians(45)) * unitLength,
      orgY - unitLength,
      orgZ + Math.cos(degreesToRadians(45))* unitLength
    ],
    [45,90,45],
    unitLength,
    0,
    'L1_X+Y-Z_',
  )


  // L2 

  addVectorLine(
    '3',
    [1,-1,1],
    [
      orgX + Math.cos(degreesToRadians(45)) * 2 * unitLength,
      orgY - unitLength,
      orgZ + Math.cos(degreesToRadians(45)) * 2 * unitLength
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
      orgX + Math.cos(degreesToRadians(45)) * 2 * unitLength,
      orgY - 2 * unitLength,
      orgZ + Math.cos(degreesToRadians(45)) * 2 * unitLength
    ],
    [45,135,45],
    unitLength,
    unitLength,
    "curved",
    'L3_X+Y-Z+',
  )




  /*

  // L2 

  addVectorLine(
    '3',
    [1,-1,1],
    [
      orgX + unitLength,
      orgY - unitLength,
      orgZ + unitLength
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
      orgX + unitLength,
      orgY - 2 * unitLength,
      orgZ + unitLength
    ],
    [45,135,45],
    unitLength,
    unitLength,
    "curved",
    'L3_X+Y-Z+',
  )

  */

  // Anvil X_Z+

  // Y+
  
  // L2 

  addVectorLine(
    '3',
    [0,1,1],
    [
      orgX,
      orgY + unitLength,
      orgZ + 2 * unitLength
    ],
    [90,0,90],
    unitLength,
    0,
    'L2_X_Y+Z+',
  )

  // L3 

  generateCurveFromVector(
    '3',
    [0,1,1],
    [
      orgX,
      orgY + 2 * unitLength,
      orgZ + 2 * unitLength
    ],
    [90,45,45],
    unitLength,
    unitLength,
    "curved",
    'L3_X_Y+Z+',
  )

  // Y-
  
  // L2 

  addVectorLine(
    '3',
    [0,-1,1],
    [
      orgX,
      orgY - unitLength,
      orgZ + 2 * unitLength
    ],
    [90,180,90],
    unitLength,
    0,
    'L2_X_Y-Z+',
  )

  // L3 

  generateCurveFromVector(
    '3',
    [0,-1,1],
    [
      orgX,
      orgY - 2 * unitLength,
      orgZ + 2 * unitLength
    ],
    [90,135,45],
    unitLength,
    unitLength,
    "curved",
    'L3_X_Y-Z+',
  )

  


  








}

export {
  Oct_Anvil
}

