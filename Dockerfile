# Etapa 1: Build do Vue.js
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build # Comando padrão do Vue CLI para build

# Etapa 2: Servir com Nginx
FROM nginx:alpine
# Copia a configuração personalizada do Nginx (criaremos a seguir)
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Copia os arquivos buildados do Vue (geralmente na pasta 'dist')
# VERIFIQUE QUAL PASTA SEU 'npm run build' GERA! Pode ser 'dist' ou 'build'.
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]