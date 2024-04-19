#!/bin/bash

# Variables
DOCKER_USERNAME="jeep2198"
DOCKER_PASSWORD="clave2198"
DOCKER_REPO="prueba-weather-app"

# Construir la imagen Docker
docker build -t $DOCKER_REPO .

# Iniciar sesión en Docker Hub
echo "$DOCKER_PASSWORD" | docker login --username $DOCKER_USERNAME --password-stdin

# Subir la imagen al registro público de Docker Hub
docker tag $DOCKER_REPO $DOCKER_USERNAME/$DOCKER_REPO
docker push $DOCKER_USERNAME/$DOCKER_REPO

