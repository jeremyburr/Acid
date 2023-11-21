import {
  addVectorLine,
  degreesToRadians,
  generateCurveFromVector,
} from '../js/utilities.js'


function Oct_Anvil(origin, unitLength, position) {

  const [orgX, orgY, orgZ] = origin;

  /*****************/

  // L1_X+Y+Z

  /*addVectorLine(
    'L1_X+Y+Z',
    [
      orgX + unitLength,
      orgY + unitLength,
      orgZ
    ],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength,
    0
  )
  */

  addVectorLine(
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

  /*  // L1_X+Y-Z+
  

  addVectorLine(
    'L1_X+Y-Z',
    [
      orgX + unitLength,
      orgY - unitLength,
      orgZ
    ],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength,
    0
  )

  addVectorLine(
    'L2_X+Y-Z',
    [
      orgX + 2 * unitLength,
      orgY - unitLength,
      orgZ
    ],
    [
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength,
    0
  )*/

  /*generateCurveFromVector(
    'L3_X+Y-Z',
    [
      orgX + 2 * unitLength,
      orgY - 2 * unitLength,
      orgZ
    ],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(135)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength,
    unitLength,
    "curved"
  )*/


}

export {
  Oct_Anvil
}

