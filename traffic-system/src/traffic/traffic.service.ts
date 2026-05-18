import { Injectable, NotFoundException } from '@nestjs/common';
import { Zone, TrafficStatus } from './entities/zone.entity';
import { CreateZoneInput } from './dto/create-zone.input';
import { UpdateZoneInput } from './dto/update-zone.input';
@Injectable()
export class TrafficService {

  // 🧠 stockage en mémoire (comme TP Ticket)
  private zones: Zone[] = [];

  private idCounter = 1;

  //  calcul automatique du statut
  private classify(density: number): TrafficStatus {

    if (density < 30) {
      return TrafficStatus.FAIBLE;
    }

    if (density < 70) {
      return TrafficStatus.MOYEN;
    }

    return TrafficStatus.ELEVE;
  }

  //  CREATE ZONE (TP style)
  create(input: CreateZoneInput): Zone {

    const zone: Zone = {

      //  id auto-incrémenté
      id: this.idCounter++,

      //  données du client
      name: input.name,
      location: input.location,
      density: input.trafficDensity,

      //  calcul automatique (IMPORTANT)
      status: this.classify(input.trafficDensity),
    };

    // stockage en mémoire
    this.zones.push(zone);

    return zone;
  }

  //  READ ALL
  findAll(): Zone[] {
    return this.zones;
  }

  //  READ ONE
  findOne(id: number): Zone {
    //recherche dans le tableau
    const zone = this.zones.find(z => z.id === id);

    if (!zone) {
      throw new NotFoundException(
        `Zone with ID ${id} not found`,
      );
    }

    return zone;
  }

  //  afficher uniquement les zones congestionnées, zones critiques
  findCongested(): Zone[] {
    //filtre les zones avec trafic élevé
    return this.zones.filter(
      z => z.status === TrafficStatus.ELEVE,
    );
  }
  //update
   update(id: number, input: UpdateZoneInput): Zone {

   // 🔍 chercher la zone
   const zone = this.findOne(id);

   // ✏️ mise à jour des champs reçus
    Object.assign(zone, input);

   // 🧠 IMPORTANT :
  // recalcul automatique du status si density change
   if (input.trafficDensity !== undefined) {
    zone.density = input.trafficDensity;
    zone.status = this.classify(input.trafficDensity);
    }

   return zone;
 }

  //  DELETE (optionnel comme TP Ticket)
  remove(id: number): Zone {

    const zone = this.findOne(id);

    this.zones = this.zones.filter(
      z => z.id !== id,
    );

    return zone;
  }
}