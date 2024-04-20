#!/bin/bash

# Variables
# DOCKER_USERNAME=$DOCKER_USERNAME
# DOCKER_PASSWORD=$DOCKER_PASSWORD

DOCKER_REPO="prueba-weather-app"

# Construir la imagen Docker
docker build -t $DOCKER_REPO:$1 .

# Iniciar sesión en Docker Hub
echo "$DOCKER_PASSWORD" | docker login --username $DOCKER_USERNAME --password-stdin

# Subir la imagen al registro público de Docker Hub
docker tag $DOCKER_REPO:$1 $DOCKER_USERNAME/$DOCKER_REPO:$1
docker push $DOCKER_USERNAME/$DOCKER_REPO:$1
docker push $DOCKER_USERNAME/$DOCKER_REPO:latest


