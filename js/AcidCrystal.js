
import { Pincer_Short } from '../crystals/Pincer_Short.js';

// Acid Crystal 

export class AcidCrystal {

  constructor(name, segments, curvature, origin, unitLength, position) {

    const [orgX, orgY, orgZ] = origin;

    // Pincer Short

    if ((curvature === 'pincer_short')) {
      Pincer_Short(origin, unitLength, position);
    }

  }

}