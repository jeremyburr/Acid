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


function Oct_Anvil(origin, unitLength, position) {

  const [orgX, orgY, orgZ] = origin;

  /*****************/

    /*

    // L0 Center Rod

    addLine([orgX, orgY + unitLength, orgZ], [orgX, orgY - unitLength, orgZ],'thin',position);

    */


  // L1_X+Y+ 

  /*addLine(
    [
      orgX + unitLength,
      orgY,
      orgZ
    ],
    [
      orgX + unitLength,
      orgY + unitLength,
      orgZ
    ]
    , 'thin', position);*/

    addVectorLine(
      'L1_X+Y+',
      [
        orgX + unitLength,
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
    )
    

    // L2_X+Y+

    /*addVectorLine('X_Pos_Y_Pos', [orgX + unitLength, orgY + unitLength, orgZ],
      [
        Math.cos(degreesToRadians(0)),
        Math.cos(degreesToRadians(45)),
        Math.cos(degreesToRadians(90))
      ],
      unitLength * Math.sqrt(3),0
    );*/
    

  
}

export {
 Oct_Anvil
}

// L0 Center Rod

//addLine([orgX, orgY + unitLength, orgZ], [orgX, orgY - unitLength, orgZ],'thin',position);
