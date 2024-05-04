FROM node:alpine3.18
RUN mkdir -p /home/app
WORKDIR /home/app
COPY . /home/app
RUN npm install
EXPOSE 3000
CMD [ "node","/home/app/index.js" ]