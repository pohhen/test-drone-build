FROM        node:lts-alpine

# Create app directory
RUN         mkdir -p /usr/src/app/public/images
RUN         chown -R node:node /usr/src/app
WORKDIR     /usr/src/app

USER        node

COPY        --chown=node:node package*.json /usr/src/app/
RUN         npm install --no-audit
COPY        --chown=node:node app.js /usr/src/app/app.js

EXPOSE      3000
CMD         [ "npm", "run", "start" ]
