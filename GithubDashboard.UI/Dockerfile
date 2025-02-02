FROM node:18
WORKDIR /app
COPY github-dashboard/package.json ./
COPY github-dashboard/package-lock.json ./
RUN npm install
COPY github-dashboard ./
RUN npm run build
CMD ["npm", "start"]