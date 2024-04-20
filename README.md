# weather


Para poder ejecutar el script es necesario primero tener una cuenta de Dockerhub segundo  definir dos secretos en el repositorio de github denominados DOCKER_USERNAME y DOCKER_PASSWORD este activador se efectuara cada vez que se haga un commit 

# Despliegue
para desplegar el aplicativo en un entorno es necesario definir en el script script_despliegue.sh la variable DOCKER_USERNAME del usuario que clono el repo en otra cuenta de github accion que completara la imagen por defecto aparecera el nombre de usuario del creador "jeep2198"

en un entorno local al ejecutar el script script_despliegue.sh se desplegara la aplicacion por defencto en el puerto 80 el cual puede ser modificado desde la variable PORT

Para un clúster de Kubernetes se deben hacer algunos preparativos ya que el proyecto no tiene despliegue continio 
el primer paso es definir la imagen en el archivo deploy/deploy.yaml luego se deben ejecutar los comandos kubectl apply -f deploy/deploy.yaml, kubectl apply -f deploy/service.yaml y kubectl apply -f deploy/ingress.yaml en tu terminal. y creara los tres recursos en el namespace default.

Si se desea implementar un escalado horizontal se debe ejecutar el archivo deploy/ingress.yaml de este modo kubectl apply -f deploy/hpa.yaml 


#directorio docker hub
https://hub.docker.com/repository/docker/jeep2198/prueba-weather-app/general

docker pull jeep2198/prueba-weather-app:latest