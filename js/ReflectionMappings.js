const unitLength = 20;

function Compute_Reflection_Mappings(unitLength, origin, direction) {

  const [dirX, dirY, dirZ] = direction;

  const mappings = {

    'X+Y+Z+': {
      notation: [1,1,1],
      direction: [dirX,dirY,dirZ],
    },
    'X+Y-Z+': {
      notation: [1, -1, 1],
      direction: [dirX,dirY+90,dirZ],
    },
    'X+Y+Z_': {
      notation: [1, 1, 0],
      direction: [dirX-45,dirY,dirZ+45],
    },
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
    },
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