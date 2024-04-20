DOCKER_USERNAME='jeep2198'


DOCKER_REPO="prueba-weather-app"

PORT=80

# Subir la imagen al registro público de Docker Hub

docker pull $DOCKER_USERNAME/$DOCKER_REPO:latest
docker stop app-web || true && docker rm app-web || true

docker run --rm -d --name app-web -p $PORT:80 $DOCKER_USERNAME/$DOCKER_REPO:latest

echo "para acceder a la aplicacion debe cargar en su navegador el siguiente enlace \n http://locahost:"$PORT