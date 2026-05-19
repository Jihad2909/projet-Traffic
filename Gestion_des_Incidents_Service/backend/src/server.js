require("dotenv").config()

const http = require("http")
const { ApolloServer } = require("apollo-server-express")
const { Server } = require("socket.io")

const sequelize = require("./config/database")
const app = require("./app")

const { typeDefs, resolvers } = require("./graphql")
const { setSocketIo } = require("./graphql/resolvers/incidentResolver")

const startServer = async () => {

  await sequelize.sync()
  console.log("MySQL connected")

  const httpServer = http.createServer(app)

  const io = new Server(httpServer, {
    cors: { origin: "*" }
  })

  setSocketIo(io)

  io.on("connection", () => {
    console.log("Client connected")
  })

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
  })

  await apolloServer.start()

  apolloServer.applyMiddleware({
    app,
    path: "/graphql"
  })

  httpServer.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`)
  })
}

startServer()