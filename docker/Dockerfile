FROM docker.frogfather.sas.jfrog.internal/node:10-alpine 
 
LABEL maintainer="yannc@jfrog.com"

ARG ARTY_URL="http://frogfather.sas.jfrog.internal/artifactory"
ARG REGISTRY_URL="http://frogfather.sas.jfrog.internal/artifactory/api/npm/npm/"
ARG BUILD_NUM
ARG APP_VERS

RUN apk update && \
    apk upgrade && \
    apk add git

RUN git clone https://github.com/cyan21/BackApp-JS.git   
WORKDIR  BackApp-JS

# install JFrog CLI
# TO DO : use "curl -fL https://getcli.jfrog.io | sh" instead
COPY jfrog /usr/local/bin/

RUN jfrog rt c arty --interactive=false --url=$ARTY_URL --user=admin --password=password

# specify Artifactory as NPM registry 
# COPY .npmrc /root/
RUN npm config set registry $REGISTRY_URL

#RUN npm install 
RUN jfrog rt npmi npm --build-name=back-app --build-number=$BUILD_NUM

RUN tar -czvf back-app.$APP_VERS.tar.gz public app.js  
RUN jfrog rt u back-app.$APP_VERS.tar.gz generic-local/super-back-app/ --build-name=back-app --build-number=$BUILD_NUM
RUN jfrog rt bce back-app $BUILD_NUM
RUN jfrog rt bp  back-app $BUILD_NUM

EXPOSE 4000

CMD ["npm", "start"]
