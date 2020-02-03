###############################################################################
# DOCKER IMAGE TO DEPLOY FRONTEND ON DEBUG WITH LIVE RELOAD
################################################################################

### STAGE 1: Build ###

# We label our stage as 'builder'.Create image based on the official Node
# image from dockerhub
FROM node:10.16.3-alpine as builder

COPY package.json package-lock.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app

WORKDIR /ng-app

# Angular App Port
EXPOSE 4200
# Webpack Port to do live reload
EXPOSE 49153
# Test Port
EXPOSE 9876
# e2e Port
EXPOSE 49152


## Build the angular app in production mode and store the artifacts in dist folder
## Just for production environments
# RUN $(npm bin)/ng build -c debug

# ENTRYPOINT [ "npm", "run", "serve-host" ]
# ENTRYPOINT /bin/bash

#####################
# DEPLOY WITH NGINX
#####################

### STAGE 2: Setup ###

# FROM nginx:1.13.3-alpine
#
# ## Copy our default nginx config
# COPY nginx.conf /etc/nginx/conf.d/
#
# ## Remove default nginx website
# RUN rm -rf /usr/share/nginx/html/*
#
# ## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
# COPY --from=builder /ng-app/dist /usr/share/nginx/html
#
# CMD ["nginx", "-g", "daemon off;"]
