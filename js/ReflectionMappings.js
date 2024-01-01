const unitLength = 20;

function Compute_Reflection_Mappings(unitLength, origin, offset) {

  const [offsetX, offsetY, offsetZ] = offset;

  const coef2D = 1/Math.sqrt(2);
  const coef3D = 1/Math.sqrt(3);

  const mappings = {

    'X+Y+Z+': {
      notation: [1,1,1],
      direction: [offsetX+coef3D,offsetY+coef3D,offsetZ+coef3D],
    },
    'X+Y-Z+': {
      notation: [1,-1,1],
      direction: [offsetX+coef3D,-(offsetY+coef3D),offsetZ+coef3D],
    },
    'X+Y+Z_': {
      notation: [1, 1, 0],
      direction:[offsetX+coef2D,offsetY+coef2D,0]
    },
    /*
    'X+Y-Z_': {
      notation: [1, -1, 0],
      //direction: [1/Math.sqrt(2),1/Math.sqrt(2),0],
      direction:[offsetX+coef2D,-(offsetY+coef2D),0]
    },
    'X+Y+Z-': {
      notation: [1, 1, -1],
      direction: [dirX,dirY,dirZ+90],
    },
    'X+Y-Z-': {
      notation: [1, -1, -1],
      direction: [dirX,dirY+90,dirZ+90],
    },
    'X_Y+Z-': {
      notation: [0, 1, -1],
      direction: [dirX+45, dirY, dirZ+135],
    },
    'X_Y-Z-': {
      notation: [0, -1, -1],
      direction: [dirX+45,dirY+90,dirZ+135],
    },
    'X-Y+Z-': {
      notation: [-1, 1, -1],
      direction: [dirX+90,dirY,dirZ+90],
    },
    'X-Y-Z-': {
      notation: [-1, -1, -1],
      direction: [dirX+90,dirY+90,dirZ+90],
    },
    'X-Y+Z_': {
      notation: [-1, 1, 0],
      direction: [dirX+135,dirY,dirZ+45],
    },
    'X-Y-Z_': {
      notation: [-1, -1, 0],
      direction: [dirX+135,dirY+135,dirZ+45],
    },
    'X-Y+Z+': {
      notation: [-1, 1, 1],
      direction: [dirX+90,dirY,dirZ],
    },
    'X-Y-Z+': {
      notation: [-1, -1, 1],
      direction: [dirX+90,dirY+90,dirZ],
    },
    'X_Y+Z+': {
      notation: [0, 1, 1],
      direction: [dirX+45,dirY,dirZ-45],
    },
    'X_Y-Z+': {
      notation: [0, -1, 1],
      direction: [dirX+45, dirY+90, dirZ-45],
    },*/
  }

  for (const mapping in mappings) {

    const notation = mappings[mapping].notation;

    const startPosition = [];
    const direction = [];

    notation.map((orientation, index) => {

      const dirCoef = notation.indexOf(0) === -1 ? coef3D : coef2D;

      if (orientation === 1) {
        startPosition.push(origin[index] + unitLength);
        direction.push(offset[index]+dirCoef);
      }
      if (orientation === -1) {
        startPosition.push(origin[index] - unitLength);
        direction.push(offset[index]-dirCoef);
      }
      if (orientation === 0) {
        startPosition.push(origin[index]);
        direction.push(0);
      }

    })

    mappings[mapping].startPosition = startPosition;
    mappings[mapping].direction = direction;

  }

  return mappings;
}

export default Compute_Reflection_Mappings;