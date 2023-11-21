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

  addVectorLine(
    'L2_X+Y+Z',
    [
      orgX + 2 * unitLength,
      orgY + unitLength,
      orgZ
    ],
    [
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength,
    0
  )*/

  generateCurveFromVector(
    'L3_X+Y+Z',
    [
      orgX + 2 * unitLength,
      orgY + 2 * unitLength,
      orgZ
    ],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(45)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength,
    unitLength,
    "curved"
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

