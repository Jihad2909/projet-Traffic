import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
// 1. Définir les niveaux de trafic
export enum TrafficStatus {
  FAIBLE = 'FAIBLE',
  MOYEN = 'MOYEN',
  ELEVE = 'ELEVE',
}
// Enregistrer l'Enum pour GraphQL
registerEnumType(TrafficStatus, {
  name: 'TrafficStatus',
});

@ObjectType()// Pour GraphQL
export class Zone {
  @Field(() => Int)
  id!: number;

  @Field()
  name!: string;
  
  @Field()
  location!: string;

  @Field(() => Int)
  density!: number;// Pourcentage (0-100)

  @Field(() => TrafficStatus)
  status!: TrafficStatus; // Calculé automatiquement
}