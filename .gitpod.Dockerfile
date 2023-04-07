FROM gitpod/workspace-full:latest

USER gitpod

RUN npm i @learnpack/learnpack@2.1.20 -g && learnpack plugins:install @learnpack/node@1.0.0
