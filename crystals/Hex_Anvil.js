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

  // Y Neg X Neg

    const endPoint1XNegYNeg = returnEndPosition(
    [orgX - unitLength, orgY, orgZ],
    [
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi)


  // AC-6 Resurrected

    //if (segments === 6) {

      // Segment - Center
      //addLine([orgX, orgY + unitLength, orgZ], [orgX, orgY - unitLength, orgZ],'thin',position);

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
      ,"thin",position);

      
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

      
      // X Neg Z Pos 

      // Base
      addLine(
        [orgX - unitLength / 2, orgY + unitLength, orgZ + (unitLength * Math.sqrt(3)) / 2], 
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