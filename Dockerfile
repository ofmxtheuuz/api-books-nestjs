# Usa uma imagem do Node v19
FROM node:19

# Cria o diretório da aplicação e define-o como o diretório de trabalho
WORKDIR /app

# Copia o package.json e o package-lock.json para o diretório da aplicação
COPY package*.json ./

# Instala as dependências da aplicação
RUN npm install

# Copia todo o resto para o diretório da aplicação
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# Executa o comando "npm run start" quando o contêiner for iniciado
CMD [ "npm", "run", "start" ]
