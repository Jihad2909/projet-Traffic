// src/graphql/schemas/incidentSchema.js
const typeDefs = `#graphql

type Incident {
  id: ID!
  type: String!
  description: String!
  status: String!
  latitude: Float
  longitude: Float
}

input IncidentInput {
  type: String!
  description: String!
  latitude: Float
  longitude: Float
}

input UpdateStatusInput {
  id: ID!
  status: String!
}

type Query {
  getIncidents: [Incident]
  getIncident(id: ID!): Incident
}

type Mutation {
  createIncident(input: IncidentInput): Incident
  updateIncidentStatus(input: UpdateStatusInput): Incident
  deleteIncident(id: ID!): String
}
`

module.exports = typeDefs