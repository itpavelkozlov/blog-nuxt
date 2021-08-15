FROM node:16-alpine

ENV APP_ROOT /src

WORKDIR ${APP_ROOT}
COPY . ${APP_ROOT}

RUN npm run build

ENV HOST 0.0.0.0