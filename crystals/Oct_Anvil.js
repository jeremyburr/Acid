import {
  addVectorLine,
  degreesToRadians,
  generateCurveFromVector,
} from '../js/utilities.js'


function Oct_Anvil(origin, unitLength, position) {

  const [orgX, orgY, orgZ] = origin;

  /*****************/
  
  // L2 X+Y+Z

  addVectorLine(
    '3',
    [1,1,0],
    [
      orgX + 1 * unitLength,
      orgY + unitLength,
      orgZ
    ],
    [90,0,90],
    unitLength,
    0,
    'L2_X+Y+Z',
  )

  // L3 X+Y+Z
  generateCurveFromVector(
    '3',
    [1,1,0],
    [
      orgX + 1 * unitLength,
      orgY + 2 * unitLength,
      orgZ
    ],
    [0,45,90],
    unitLength,
    unitLength,
    "curved",
    'L3_X+Y+Z',
  )

  // L2 X+Y-Z

  addVectorLine(
    '3',
    [1,1,0],
    [
      orgX + 1 * unitLength,
      orgY - unitLength,
      orgZ
    ],
    [90,180,90],
    unitLength,
    0,
    'L2_X+Y-Z',
  )

  // L3 X+Y-Z
  generateCurveFromVector(
    '3',
    [1,-1,0],
    [
      orgX + 1 * unitLength,
      orgY - 2 * unitLength,
      orgZ
    ],
    [0,135,90],
    unitLength,
    unitLength,
    "curved",
    'L3_X+Y-Z',
  )

  








}

export {
  Oct_Anvil
}

