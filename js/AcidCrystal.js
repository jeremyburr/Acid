
import { Hex_Anvil} from '../crystals/Hex_Anvil.js';

// Acid Crystal 

export class AcidCrystal {

  constructor(name, segments, curvature, origin, unitLength, position) {

    const [orgX, orgY, orgZ] = origin;

    // Hex Anvil 
    
    if ((curvature === 'hex_anvil')) {
      Hex_Anvil(origin, unitLength, position);
    }

  }

}