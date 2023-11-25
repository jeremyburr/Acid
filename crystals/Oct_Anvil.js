import {
  addVectorLine,
  degreesToRadians,
  generateCurveFromVector,
} from '../js/utilities.js'


function Oct_Anvil(origin, unitLength, position, color) {

  const [orgX, orgY, orgZ] = origin;

  /*****************/

  // Anvil X+Z_

  // Y+

  // L1 

  addVectorLine(
    'L1_X+Y+Z_',
    1,
    [1,1,0],
    [
      orgX + unitLength * 2,
      orgY + unitLength * 2,
      orgZ
    ],
    [0,90,90],
    unitLength,
    0,
    color
  )
  
  // L2 

  addVectorLine(
    'L2_X+Y+Z_',
    2,
    [1,1,0],
    [
      orgX + 3 * unitLength,
      orgY + unitLength * 2,
      orgZ
    ],
    [90,0,90],
    unitLength,
    0,
    color
  )

  // L3 

  generateCurveFromVector(
    'L3_X+Y+Z_',
    3,
    [1,1,0],
    [
      orgX + 3 * unitLength,
      orgY + 3 * unitLength,
      orgZ
    ],
    [0,45,90],
    unitLength,
    unitLength,
    "curved",
    color
  )

  // Y-

  // L1 

  addVectorLine(
    'L1_X+Y+Z_',
    1,
    [1,-1,0],
    [
      orgX + unitLength * 2,
      orgY - unitLength * 2,
      orgZ
    ],
    [0,90,90],
    unitLength,
    0,
    color
  )
  // L2 

  addVectorLine(
    'L2_X+Y-Z_',
    2,
    [1,1,0],
    [
      orgX + 3 * unitLength,
      orgY - unitLength * 2,
      orgZ
    ],
    [90,180,90],
    unitLength,
    0,
    color
  )

  // L3 

  generateCurveFromVector(
    'L3_X+Y-Z_',
    3,
    [1,-1,0],
    [
      orgX + 3 * unitLength,
      orgY - 3 * unitLength,
      orgZ
    ],
    [0,135,90],
    unitLength,
    unitLength,
    "curved",
    color
  )

  // Anvil X+Z+

  // Y+

  // L1 

  addVectorLine(
    'L1_X+Y+Z+',
    1,
    [1,1,1],
    [
      orgX + Math.cos(degreesToRadians(45)) * unitLength,
      orgY + unitLength * 2,
      orgZ + Math.cos(degreesToRadians(45))* unitLength
    ],
    [45,90,45],
    unitLength,
    0,
    color
  )


  // L2 

  addVectorLine(
    'L2_X+Y+Z+',
    2,
    [1,1,1],
    [
      orgX + Math.cos(degreesToRadians(45)) * 3 * unitLength,
      orgY + unitLength * 2,
      orgZ + Math.cos(degreesToRadians(45)) * 3 * unitLength
    ],
    [90,0,90],
    unitLength,
    0,
    color
  )


  // L3 

  generateCurveFromVector(
    'L3_X+Y+Z+',
    3,
    [1,1,1],
    [
      orgX + Math.cos(degreesToRadians(45)) * 3 * unitLength,
      orgY + 3 * unitLength,
      orgZ + Math.cos(degreesToRadians(45)) * 3 * unitLength
    ],
    [45,45,45],
    unitLength,
    unitLength,
    "curved",
    color
  )


  // Y-

  // L1 

  addVectorLine(
    'L1_X+Y-Z+',
    1,
    [1,-1,1],
    [
      orgX + Math.cos(degreesToRadians(45)) * unitLength,
      orgY - unitLength * 2,
      orgZ + Math.cos(degreesToRadians(45))* unitLength
    ],
    [45,90,45],
    unitLength,
    0,
    color
  )


  // L2 

  addVectorLine(
    'L2_X+Y-Z+',
    2,
    [1,-1,1],
    [
      orgX + Math.cos(degreesToRadians(45)) * 3 * unitLength,
      orgY - unitLength * 2,
      orgZ + Math.cos(degreesToRadians(45)) * 3 * unitLength
    ],
    [90,180,90],
    unitLength,
    0,
    color
  )

  // L3 

  generateCurveFromVector(
    'L3_X+Y-Z+',
    3,
    [1,-1,1],
    [
      orgX + Math.cos(degreesToRadians(45)) * 3 * unitLength,
      orgY - 3 * unitLength,
      orgZ + Math.cos(degreesToRadians(45)) * 3 * unitLength
    ],
    [45,135,45],
    unitLength,
    unitLength,
    "curved",
    color
  )

  // Anvil X_Z+

  // Y+

  // L1 

  addVectorLine(
    'L1_X_Y+Z+',
    1,
    [0,1,1],
    [
      orgX,
      orgY + unitLength * 2,
      orgZ + unitLength * 2
    ],
    [90,90,0],
    unitLength,
    0,
    color
  )

  
  // L2 

  addVectorLine(
    'L2_X_Y+Z+',
    2,
    [0,1,1],
    [
      orgX,
      orgY + unitLength * 2,
      orgZ + 3 * unitLength
    ],
    [90,0,90],
    unitLength,
    0,
    color
  )

  // L3 

  generateCurveFromVector(
    'L3_X_Y+Z+',
    3,
    [0,1,1],
    [
      orgX,
      orgY + 3 * unitLength,
      orgZ + 3 * unitLength
    ],
    [90,45,45],
    unitLength,
    unitLength,
    "curved",
    color
  )

  // Y-

  // L1 

  addVectorLine(
    'L1_X_Y-Z+',
    1,
    [0,-1,1],
    [
      orgX,
      orgY - unitLength * 2,
      orgZ + unitLength * 2
    ],
    [90,90,0],
    unitLength,
    0,
    color
  )

  // L2 

  addVectorLine(
    'L2_X_Y-Z+',
    2,
    [0,-1,1],
    [
      orgX,
      orgY - unitLength * 2,
      orgZ + 3 * unitLength
    ],
    [90,180,90],
    unitLength,
    0,
    color
  )

  // L3 

  generateCurveFromVector(
    'L3_X_Y-Z+',
    3,
    [0,-1,1],
    [
      orgX,
      orgY - 3 * unitLength,
      orgZ + 3 * unitLength
    ],
    [90,135,45],
    unitLength,
    unitLength,
    "curved",
    color
  )

  // Anvil X_Z-

  // Y+

  // L1 

  addVectorLine(
    'L1_X_Y+Z-',
    1,
    [0,1,-1],
    [
      orgX,
      orgY + unitLength * 2,
      orgZ - unitLength * 2
    ],
    [90,90,180],
    unitLength,
    0,
    color
  )

  
  // L2 

  addVectorLine(
    'L2_X_Y+Z-',
    2,
    [0,1,-1],
    [
      orgX,
      orgY + unitLength * 2,
      orgZ - 3 * unitLength
    ],
    [90,0,90],
    unitLength,
    0,
    color
  )

  // L3 

  generateCurveFromVector(
    'L3_X_Y+Z-',
    3,
    [0,1,-1],
    [
      orgX,
      orgY + 3 * unitLength,
      orgZ - 3 * unitLength
    ],
    [90,45,135],
    unitLength,
    unitLength,
    "curved",
    color
  )

  // Y-

  // L1 

  addVectorLine(
    'L1_X_Y-Z-',
    1,
    [0,-1,-1],
    [
      orgX,
      orgY - unitLength * 2,
      orgZ - unitLength * 2
    ],
    [90,90,180],
    unitLength,
    0,
    color
  )

  // L2 

  addVectorLine(
    'L2_X_Y-Z-',
    2,
    [0,-1,-1],
    [
      orgX,
      orgY - unitLength * 2,
      orgZ - 3 * unitLength
    ],
    [90,180,90],
    unitLength,
    0,
    color
  )

  // L3 

  generateCurveFromVector(
    'L3_X_Y-Z-',
    3,
    [0,-1,-1],
    [
      orgX,
      orgY - 3 * unitLength,
      orgZ - 3 * unitLength
    ],
    [90,135,135],
    unitLength,
    unitLength,
    "curved",
    color
  )

  // Anvil X+Z-

  // Y+

  // L1 

  addVectorLine(
    'L1_X+Y+Z-',
    1,
    [1,1,-1],
    [
      orgX + Math.cos(degreesToRadians(45)) * unitLength,
      orgY + unitLength * 2,
      orgZ - Math.cos(degreesToRadians(45))* unitLength
    ],
    [45,90,135],
    unitLength,
    0,
    color
  )


  // L2 

  addVectorLine(
    'L2_X+Y+Z-',
    2,
    [1,1,-1],
    [
      orgX + Math.cos(degreesToRadians(45)) * 3 * unitLength,
      orgY + unitLength * 2,
      orgZ - Math.cos(degreesToRadians(45)) * 3 * unitLength
    ],
    [90,0,90],
    unitLength,
    0,
    color
  )


  // L3 

  generateCurveFromVector(
    'L3_X+Y+Z-',
    3,
    [1,1,-1],
    [
      orgX + Math.cos(degreesToRadians(45)) * 3 * unitLength,
      orgY + 3 * unitLength,
      orgZ - Math.cos(degreesToRadians(45)) * 3 * unitLength
    ],
    [45,45,135],
    unitLength,
    unitLength,
    "curved",
    color
  )


  // Y-

  // L1 

  addVectorLine(
    'L1_X+Y-Z-',
    1,
    [1,-1,-1],
    [
      orgX + Math.cos(degreesToRadians(45)) * unitLength,
      orgY - unitLength * 2,
      orgZ - Math.cos(degreesToRadians(45))* unitLength
    ],
    [45,90,135],
    unitLength,
    0,
    color
  )


  // L2 

  addVectorLine(
    'L2_X+Y-Z-',
    2,
    [1,-1,-1],
    [
      orgX + Math.cos(degreesToRadians(45)) * 3 * unitLength,
      orgY - unitLength * 2,
      orgZ - Math.cos(degreesToRadians(45)) * 3 * unitLength
    ],
    [90,180,90],
    unitLength,
    0,
    color
  )

  // L3 

  generateCurveFromVector(
    'L3_X+Y-Z-',
    3,
    [1,-1,-1],
    [
      orgX + Math.cos(degreesToRadians(45)) * 3 * unitLength,
      orgY - 3 * unitLength,
      orgZ - Math.cos(degreesToRadians(45)) * 3 * unitLength
    ],
    [45,135,135],
    unitLength,
    unitLength,
    "curved",
    color
  )

  // Anvil X-Z-

  // Y+

  // L1 

  addVectorLine(
    'L1_X-Y+Z-',
    1,
    [-1,1,-1],
    [
      orgX - Math.cos(degreesToRadians(45)) * unitLength,
      orgY + unitLength * 2,
      orgZ - Math.cos(degreesToRadians(45))* unitLength
    ],
    [135,90,135],
    unitLength,
    0,
    color
  )


  // L2 

  addVectorLine(
    'L2_X-Y+Z-',
    2,
    [-1,1,-1],
    [
      orgX - Math.cos(degreesToRadians(45)) * 3 * unitLength,
      orgY + unitLength * 2,
      orgZ - Math.cos(degreesToRadians(45)) * 3 * unitLength
    ],
    [90,0,90],
    unitLength,
    0,
    color
  )


  // L3 

  generateCurveFromVector(
    'L3_X-Y+Z-',
    3,
    [-1,1,-1],
    [
      orgX - Math.cos(degreesToRadians(45)) * 3 * unitLength,
      orgY + 3 * unitLength,
      orgZ - Math.cos(degreesToRadians(45)) * 3 * unitLength
    ],
    [135,45,135],
    unitLength,
    unitLength,
    "curved",
    color
  )


  // Y-

  // L1 

  addVectorLine(
    'L1_X-Y-Z-',
    1,
    [-1,-1,-1],
    [
      orgX - Math.cos(degreesToRadians(45)) * unitLength,
      orgY - unitLength * 2,
      orgZ - Math.cos(degreesToRadians(45))* unitLength
    ],
    [135,90,135],
    unitLength,
    0,
    color
  )


  // L2 

  addVectorLine(
    'L2_X-Y-Z-',
    2,
    [-1,-1,-1],
    [
      orgX - Math.cos(degreesToRadians(45)) * 3 * unitLength,
      orgY - unitLength * 2,
      orgZ - Math.cos(degreesToRadians(45)) * 3 * unitLength
    ],
    [90,180,90],
    unitLength,
    0,
    color
  )

  // L3 

  generateCurveFromVector(
    'L3_X-Y-Z-',
    3,
    [-1,-1,-1],
    [
      orgX - Math.cos(degreesToRadians(45)) * 3 * unitLength,
      orgY - 3 * unitLength,
      orgZ - Math.cos(degreesToRadians(45)) * 3 * unitLength
    ],
    [135,135,135],
    unitLength,
    unitLength,
    "curved",
    color
  )

  // Anvil X-Z-

  // Y+

  // L1 

  addVectorLine(
    'L1_X-Y+Z+',
    1,
    [-1,1,1],
    [
      orgX - Math.cos(degreesToRadians(45)) * unitLength,
      orgY + unitLength * 2,
      orgZ + Math.cos(degreesToRadians(45))* unitLength
    ],
    [135,90,45],
    unitLength,
    0,
    color
  )


  // L2 

  addVectorLine(
    'L2_X-Y+Z+',
    2,
    [-1,1,1],
    [
      orgX - Math.cos(degreesToRadians(45)) * 3 * unitLength,
      orgY + unitLength * 2,
      orgZ + Math.cos(degreesToRadians(45)) * 3 * unitLength
    ],
    [90,0,90],
    unitLength,
    0,
    color
  )


  // L3 

  generateCurveFromVector(
    'L3_X-Y+Z+',
    3,
    [-1,1,1],
    [
      orgX - Math.cos(degreesToRadians(45)) * 3 * unitLength,
      orgY + 3 * unitLength,
      orgZ + Math.cos(degreesToRadians(45)) * 3 * unitLength
    ],
    [135,45,45],
    unitLength,
    unitLength,
    "curved",
    color
  )


  // Y-

  // L1 

  addVectorLine(
    'L1_X-Y-Z+',
    1,
    [-1,-1,1],
    [
      orgX - Math.cos(degreesToRadians(45)) * unitLength,
      orgY - unitLength * 2,
      orgZ + Math.cos(degreesToRadians(45))* unitLength
    ],
    [135,90,45],
    unitLength,
    0,
    color
  )


  // L2 

  addVectorLine(
    'L2_X-Y-Z+',
    2,
    [-1,-1,1],
    [
      orgX - Math.cos(degreesToRadians(45)) * 3 * unitLength,
      orgY - unitLength * 2,
      orgZ + Math.cos(degreesToRadians(45)) * 3 * unitLength
    ],
    [90,180,90],
    unitLength,
    0,
    color
  )

  // L3 

  generateCurveFromVector(
    'L3_X-Y-Z+',
    3,
    [-1,-1,1],
    [
      orgX - Math.cos(degreesToRadians(45)) * 3 * unitLength,
      orgY - 3 * unitLength,
      orgZ + Math.cos(degreesToRadians(45)) * 3 * unitLength
    ],
    [135,135,45],
    unitLength,
    unitLength,
    "curved",
    color
  )

  // Anvil X-Z_

  // Y+

  // L1 

  addVectorLine(
    'L1_X-Y+Z_',
    1,
    [-1,1,0],
    [
      orgX - unitLength * 2,
      orgY + unitLength * 2,
      orgZ
    ],
    [180,90,90],
    unitLength,
    0,
    color
  )
  
  // L2 

  addVectorLine(
    'L2_X-Y+Z_',
    2,
    [-1,1,0],
    [
      orgX - 3 * unitLength,
      orgY + unitLength * 2,
      orgZ
    ],
    [90,0,90],
    unitLength,
    0,
    color
  )

  // L3 

  generateCurveFromVector(
    'L3_X-Y+Z_',
    3,
    [-1,1,0],
    [
      orgX - 3 * unitLength,
      orgY + 3 * unitLength,
      orgZ
    ],
    [180,45,90],
    unitLength,
    unitLength,
    "curved",
    color
  )

  // Y-

  // L1 

  addVectorLine(
    'L1_X-Y+Z_',
    1,
    [-1,-1,0],
    [
      orgX - unitLength * 2,
      orgY - unitLength * 2,
      orgZ
    ],
    [180,90,90],
    unitLength,
    0,
    color
  )
  // L2 

  addVectorLine(
    'L2_X-Y-Z_',
    2,
    [-1,1,0],
    [
      orgX - 3 * unitLength,
      orgY - unitLength * 2,
      orgZ
    ],
    [90,180,90],
    unitLength,
    0,
    color
  )

  // L3 

  generateCurveFromVector(
    'L3_X-Y-Z_',
    3,
    [-1,-1,0],
    [
      orgX - 3 * unitLength,
      orgY - 3 * unitLength,
      orgZ
    ],
    [180,135,90],
    unitLength,
    unitLength,
    "curved",
    color
  )



}

export {
  Oct_Anvil
}

