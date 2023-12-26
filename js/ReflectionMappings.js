const unitLength = 20;

function Compute_Reflection_Mappings(unitLength, origin, direction) {

  const [dirX, dirY, dirZ] = direction;


  const mappings = {

    'X+Y+Z+': {
      notation: [1,1,1],
      direction: [dirX,dirY,dirZ],
      /*startPosition: [
        origin[0] + unitLength,
        origin[1] + unitLength,
        origin[2] + unitLength
      ],*/
    },
    /*'X+Y-Z+': {
      notation: [1, -1, 1],
      direction: [dirX, dirY+90, dirZ],
      startPosition: [
        origin[0] + unitLength,
        origin[1] - unitLength,
        origin[2] + unitLength
      ],
    },*/
    /*'X+Y+Z_': {
      notation: [1, 1, 0],
      direction: [0, 45, 90],
      startPosition: [
        origin[0] + unitLength,
        origin[1] + unitLength,
        origin[2] 
      ],
    },
    'X+Y-Z_': {
      notation: [1, -1, 0],
      direction: [0, 135, 90],
      startPosition: [
        origin[0] + unitLength,
        origin[1] - unitLength,
        origin[2] 
      ],
    },
    'X+Y+Z-': {
      notation: [1, 1, -1],
      direction: [45, 45, 135],
      startPosition: [
        origin[0] + unitLength,
        origin[1] + unitLength,
        origin[2] - unitLength
      ],
    },
    'X+Y-Z-': {
      notation: [1, -1, -1],
      direction: [45, 135, 135],
      startPosition: [
        origin[0] + unitLength,
        origin[1] - unitLength,
        origin[2] - unitLength
      ],
    },
    'X_Y+Z-': {
      notation: [0, 1, -1],
      direction: [90, 45, 180],
      startPosition: [
        origin[0],
        origin[1] + unitLength,
        origin[2] - unitLength
      ],
    },
    'X_Y-Z-': {
      notation: [0, -1, -1],
      direction: [90, 135, 180],
      startPosition: [
        origin[0],
        origin[1] - unitLength,
        origin[2] - unitLength
      ],
    },
    'X-Y+Z-': {
      notation: [-1, 1, -1],
      direction: [135, 45, 135],
      startPosition: [
        origin[0] - unitLength,
        origin[1] + unitLength,
        origin[2] - unitLength
      ],
    },
    'X-Y-Z-': {
      notation: [-1, -1, -1],
      direction: [135, 135, 135],
      startPosition: [
        origin[0] - unitLength,
        origin[1] - unitLength,
        origin[2] - unitLength
      ],
    },
    'X-Y+Z_': {
      notation: [-1, 1, 0],
      direction: [180, 45, 90],
      startPosition: [
        origin[0] - unitLength,
        origin[1] + unitLength,
        origin[2] 
      ],
    },
    'X-Y-Z_': {
      notation: [-1, -1, 0],
      direction: [180, 135, 90],
      startPosition: [
        origin[0] - unitLength,
        origin[1] - unitLength,
        origin[2] 
      ],
    },
    'X-Y+Z+': {
      notation: [-1, 1, +1],
      direction: [135, 45, 45],
      startPosition: [
        origin[0] - unitLength,
        origin[1] + unitLength,
        origin[2] + unitLength
      ],
    },
    'X-Y-Z+': {
      notation: [-1, -1, +1],
      direction: [135, 135, 45],
      startPosition: [
        origin[0] - unitLength,
        origin[1] - unitLength,
        origin[2] + unitLength
      ],
    },
    'X_Y+Z+': {
      notation: [0, 1, +1],
      direction: [90, 45, 0],
      startPosition: [
        origin[0],
        origin[1] + unitLength,
        origin[2] + unitLength
      ],
    },
    'X_Y-Z+': {
      notation: [0, -1, +1],
      direction: [90, 135, 0],
      startPosition: [
        origin[0],
        origin[1] - unitLength,
        origin[2] + unitLength
      ],
    },*/
  }

  for (const mapping in mappings) {

    const notation = mappings[mapping].notation;

    console.log('notation',notation);

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

    console.log(startPosition);

    mappings[mapping].startPosition = startPosition;

  }

  console.log('mappings',mappings);
  return mappings;
}

export default Compute_Reflection_Mappings;