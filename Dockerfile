

# Etapa de producción: Usa una imagen de Nginx para servir la aplicación compilada
FROM nginx:1.19.0-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY app-web /usr/share/nginx/html/

# Exponer el puerto 80 para que la aplicación sea accesible desde fuera del contenedor
EXPOSE 80

# Comando para iniciar el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
