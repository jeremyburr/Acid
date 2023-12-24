const unitLength = 20;

const origin = { x: 0, y: 0, z: 0 };
const {x,y,z} = origin;

const Reflection_Mappings = {
  'X+Y+Z+': {
   notation: [1,1,0],
   direction: [90,0,90],
   startPosition: [
      origin.x + unitLength,
      origin.y + unitLength,
      origin.z
    ],
  magnitude: unitLength,
  unitPosition: 0,
  },
  'X+Y-Z+': {
   notation: [1,-1,0],
   direction: [90,180,90],
   startPosition: [
      origin.x + unitLength,
      origin.y - unitLength,
      origin.z
    ],
    magnitude: unitLength,
    unitPosition: 0
  }
}

export default Reflection_Mappings;