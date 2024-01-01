const unitLength = 20;

function Compute_Reflection_Mappings(unitLength, origin, offset) {

  const coef2D = 1/Math.sqrt(2);
  const coef3D = 1/Math.sqrt(3);

  const mappings = {

    'X+Y+Z+': { orientation: [1,1,1]},
    'X+Y-Z+': { orientation: [1,-1,1]},
    'X+Y+Z_': { orientation: [1,1,0]},
    'X+Y-Z_': { orientation: [1,-1,0]},
    'X+Y+Z-': { orientation: [1,1,-1]},
    'X+Y-Z-': { orientation: [1,-1,-1]},
    'X_Y+Z-': { orientation: [0,1,-1]},
    'X_Y-Z-': { orientation: [0,-1,-1]},
    'X-Y+Z-': { orientation: [-1,1,-1]},
    'X-Y-Z-': { orientation: [-1,-1,-1]},
    'X-Y+Z_': { orientation: [-1,1,0]},
    'X-Y-Z_': { orientation: [-1,-1,0]},
    'X-Y+Z+': { orientation: [-1,1,1]},
    'X-Y-Z+': { orientation: [-1,-1,1]},
    'X_Y+Z+': { orientation: [0,1,1]},
    'X_Y-Z+': { orientation: [0,-1,1]},
  }

  for (const mapping in mappings) {

    const orientation = mappings[mapping].orientation;

    const startPosition = [];
    const direction = [];

    orientation.map((axisOrientation, index) => {

      const is3D = orientation.indexOf(0) === -1;
      const dirCoef = is3D ? coef3D : coef2D;
      let startOffset = unitLength;

      if (is3D && index !== 1) {
        startOffset = (unitLength*Math.sqrt(2))/2;
      }

      if (axisOrientation === 1) {
          startPosition.push(origin[index] + startOffset);
          direction.push(offset[index]+dirCoef);
      }
      if (axisOrientation === -1) {
        startPosition.push(origin[index] - startOffset);
        direction.push(offset[index]-dirCoef);
      }
      if (axisOrientation === 0) {
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