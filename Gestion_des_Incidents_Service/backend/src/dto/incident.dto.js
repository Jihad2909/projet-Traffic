const VALID_TYPES = [
  "Accident",
  "Travaux",
  "Route fermée",
  "Embouteillage"
]

const VALID_STATUS = [
  "Signalé",
  "En cours",
  "Résolu"
]

const validateIncidentInput = (input) => {

  if (!input.type) {
    throw new Error("Type is required")
  }

  if (!VALID_TYPES.includes(input.type)) {
    throw new Error("Invalid incident type")
  }

  if (!input.description) {
    throw new Error("Description is required")
  }

  if (
    input.latitude &&
    typeof input.latitude !== "number"
  ) {
    throw new Error("Latitude must be a number")
  }

  if (
    input.longitude &&
    typeof input.longitude !== "number"
  ) {
    throw new Error("Longitude must be a number")
  }
}

const validateStatusInput = (input) => {

  if (!input.id) {
    throw new Error("ID is required")
  }

  if (!VALID_STATUS.includes(input.status)) {
    throw new Error("Invalid status")
  }
}

module.exports = {
  validateIncidentInput,
  validateStatusInput
}