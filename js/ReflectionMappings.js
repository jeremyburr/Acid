const unitLength = 20;

function Compute_Reflection_Mappings(unitLength, origin, offset) {

  const [offsetX, offsetY, offsetZ] = offset;

  const mappings = {

    'X+Y+Z+': {
      notation: [1,1,1],
      direction: [offsetX+(1/Math.sqrt(3)),offsetY+(1/Math.sqrt(3)),offsetZ+(1/Math.sqrt(3))],
    },
    /*'X+Y-Z+': {
      notation: [1, -1, 1],
      direction: [offsetX,-offsetY,offsetZ],
    },*/
    'X+Y+Z_': {
      notation: [1, 1, 0],
      //direction: [1/Math.sqrt(2),1/Math.sqrt(2),0],
      direction:[offsetX+(1/Math.sqrt(2)),offsetY+(1/Math.sqrt(2)),0]
    },
    /*
    'X+Y-Z_': {
      notation: [1, -1, 0],
      direction: [0,dirY+90,dirZ+45],
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

    notation.map((axis, index) => {

      if (axis === 1) {
        startPosition.push(origin[index] + unitLength);
      }
      if (axis === -1) {
        startPosition.push(origin[index] - unitLength);
      }
      if (axis === 0) {
        startPosition.push(origin[index]);
      }

    })

    mappings[mapping].startPosition = startPosition;

  }

  return mappings;
}

export default Compute_Reflection_Mappings;