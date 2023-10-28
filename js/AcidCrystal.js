
import { Oct_Anvil} from '../crystals/Oct_Anvil.js';

// Acid Crystal 

export class AcidCrystal {

  constructor(name, segments, curvature, origin, unitLength, position) {

    const [orgX, orgY, orgZ] = origin;

    // Hex Anvil 
    
    if ((curvature === 'Oct_Anvil')) {
      Oct_Anvil(origin, unitLength, position);
    }

  }

}