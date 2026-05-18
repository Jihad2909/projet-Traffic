const Incident = require("../../models/Incident")

const {
  validateIncidentInput,
  validateStatusInput
} = require("../../dto/incident.dto")

let io

const setSocketIo = (socket) => {
  io = socket
}

const resolvers = {

  Query: {

    getIncidents: async () => {
      return await Incident.findAll()
    },

    getIncident: async (_, { id }) => {
      return await Incident.findByPk(id)
    },

  },

  Mutation: {

    createIncident: async (_, { input }) => {

      validateIncidentInput(input)

      const incident = await Incident.create(input)

      if (io) {
        io.emit("newIncident", incident)
      }

      return incident
    },

   updateIncidentStatus: async (_, { input }) => {

  const incident = await Incident.findByPk(Number(input.id))

  if (!incident) {
    throw new Error("Incident not found")
  }

  incident.status = input.status
  await incident.save()

  if (io) io.emit("incidentUpdated", incident)

  return incident
},

  deleteIncident: async (_, { id }) => {

  const incident = await Incident.findByPk(Number(id))

  if (!incident) {
    throw new Error("Incident not found")
  }

  await incident.destroy()

  if (io) io.emit("incidentDeleted", id)

  return "Deleted"
}

  }

}

module.exports = {
  resolvers,
  setSocketIo
}