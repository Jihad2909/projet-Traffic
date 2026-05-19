// src/graphql/index.js
const typeDefs = require("./schemas/incidentSchema")
const { resolvers } = require("./resolvers/incidentResolver")

module.exports = { typeDefs, resolvers }