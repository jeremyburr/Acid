
import { Reflection_Refactor} from '../crystals/Reflection_Refactor.js';

// Acid Crystal 

export class AcidCrystal {

  constructor(name, segments, curvature, origin, unitLength, position, color) {

    const [orgX, orgY, orgZ] = origin;

    // Hex Anvil 
    
    if ((curvature === 'Reflection_Refactor')) {
      Reflection_Refactor(origin, unitLength, position, color);
    }

  }

}