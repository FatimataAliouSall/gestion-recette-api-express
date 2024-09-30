FROM node
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3090
CMD ["npm", "start"]
