import { addVectorLine, addLine, degreesToRadians, phi, addCurve } from '../js/utilities.js';

import { Eight_Curved } from '../crystals/Eight_Curved.js';
import { Eight_Curved_Lattice } from '../crystals/Eight_Curved_Lattice.js';
import { Pincer } from '../crystals/Forty_Pincer.js';
import { Pincer_Short } from '../crystals/Pincer_Short.js';

import * as THREE from '../js/three.module.js';

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