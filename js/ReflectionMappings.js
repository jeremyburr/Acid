const unitLength = 20;

function Compute_Reflection_Mappings (level, unitLength, magnitude, origin) {

  return {
    'X+Y+Z+': {
    notation: [1,1,0],
    direction: [90,0,90],
    startPosition: [
        origin[0] + unitLength,
        origin[1] + unitLength,
        origin[2]
      ],
    magnitude: unitLength,
    unitPosition: 0,
    },
    'X+Y-Z+': {
    notation: [1,-1,0],
    direction: [90,180,90],
    startPosition: [
        origin[0] + unitLength,
        origin[1] - unitLength,
        origin[2]
      ],
      magnitude: unitLength,
      unitPosition: 0
    }
  }
}

export default Compute_Reflection_Mappings;