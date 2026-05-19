# image Node.js officielle
FROM node:18

# dossier de travail
WORKDIR /app

# copier package.json
COPY package*.json ./

# installer dépendances
RUN npm install

# copier code source
COPY . .

# port backend
EXPOSE 4000

# start server
CMD ["npm", "start"]