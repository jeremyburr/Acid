const unitLength = 20;

function Compute_Reflection_Mappings(level, unitLength, magnitude, origin) {

  return {

    'X+Y+Z+': {
      notation: [1, 1, 1],
      direction: [45, 45, 45],
      startPosition: [
        origin[0] + unitLength,
        origin[1] + unitLength,
        origin[2] + unitLength
      ],
      magnitude: unitLength,
      unitPosition: 0,
    },
    'X+Y-Z+': {
      notation: [1, -1, 1],
      direction: [45, 135, 45],
      startPosition: [
        origin[0] + unitLength,
        origin[1] - unitLength,
        origin[2] + unitLength
      ],
      magnitude: unitLength,
      unitPosition: 0,
    },
    'X+Y+Z_': {
      notation: [1, 1, 0],
      direction: [0, 45, 90],
      startPosition: [
        origin[0] + unitLength,
        origin[1] + unitLength,
        origin[2] 
      ],
      magnitude: unitLength,
      unitPosition: 0,
    },
    'X+Y-Z_': {
      notation: [1, -1, 0],
      direction: [0, 135, 90],
      startPosition: [
        origin[0] + unitLength,
        origin[1] - unitLength,
        origin[2] 
      ],
      magnitude: unitLength,
      unitPosition: 0,
    },
    'X+Y+Z-': {
      notation: [1, 1, -1],
      direction: [45, 45, 135],
      startPosition: [
        origin[0] + unitLength,
        origin[1] + unitLength,
        origin[2] - unitLength
      ],
      magnitude: unitLength,
      unitPosition: 0,
    },
    'X+Y-Z-': {
      notation: [1, -1, -1],
      direction: [45, 135, 135],
      startPosition: [
        origin[0] + unitLength,
        origin[1] - unitLength,
        origin[2] - unitLength
      ],
      magnitude: unitLength,
      unitPosition: 0,
    },
    'X_Y+Z-': {
      notation: [0, 1, -1],
      direction: [90, 45, 180],
      startPosition: [
        origin[0],
        origin[1] + unitLength,
        origin[2] - unitLength
      ],
      magnitude: unitLength,
      unitPosition: 0,
    },
    'X_Y-Z-': {
      notation: [0, -1, -1],
      direction: [90, 135, 180],
      startPosition: [
        origin[0],
        origin[1] - unitLength,
        origin[2] - unitLength
      ],
      magnitude: unitLength,
      unitPosition: 0,
    },
    'X-Y+Z-': {
      notation: [-1, 1, -1],
      direction: [135, 45, 135],
      startPosition: [
        origin[0] - unitLength,
        origin[1] + unitLength,
        origin[2] - unitLength
      ],
      magnitude: unitLength,
      unitPosition: 0,
    },
    'X-Y-Z-': {
      notation: [-1, -1, -1],
      direction: [135, 135, 135],
      startPosition: [
        origin[0] - unitLength,
        origin[1] - unitLength,
        origin[2] - unitLength
      ],
      magnitude: unitLength,
      unitPosition: 0,
    },
    'X-Y+Z_': {
      notation: [-1, 1, 0],
      direction: [180, 45, 90],
      startPosition: [
        origin[0] - unitLength,
        origin[1] + unitLength,
        origin[2] 
      ],
      magnitude: unitLength,
      unitPosition: 0,
    },
    'X-Y-Z_': {
      notation: [-1, -1, 0],
      direction: [180, 135, 90],
      startPosition: [
        origin[0] - unitLength,
        origin[1] - unitLength,
        origin[2] 
      ],
      magnitude: unitLength,
      unitPosition: 0,
    },
    'X-Y+Z+': {
      notation: [-1, 1, +1],
      direction: [135, 45, 45],
      startPosition: [
        origin[0] - unitLength,
        origin[1] + unitLength,
        origin[2] + unitLength
      ],
      magnitude: unitLength,
      unitPosition: 0,
    },
    'X-Y-Z+': {
      notation: [-1, -1, +1],
      direction: [135, 135, 45],
      startPosition: [
        origin[0] - unitLength,
        origin[1] - unitLength,
        origin[2] + unitLength
      ],
      magnitude: unitLength,
      unitPosition: 0,
    },
    'X_Y+Z+': {
      notation: [0, 1, +1],
      direction: [90, 45, 0],
      startPosition: [
        origin[0],
        origin[1] + unitLength,
        origin[2] + unitLength
      ],
      magnitude: unitLength,
      unitPosition: 0,
    },
    'X_Y-Z+': {
      notation: [0, -1, +1],
      direction: [90, 135, 0],
      startPosition: [
        origin[0],
        origin[1] - unitLength,
        origin[2] + unitLength
      ],
      magnitude: unitLength,
      unitPosition: 0,
    },
  }
}

export default Compute_Reflection_Mappings;