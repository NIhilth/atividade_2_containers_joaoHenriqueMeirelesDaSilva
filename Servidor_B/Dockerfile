#imagem que vamos usar de base
FROM node:14.17.6

#diretório padrão
WORKDIR /

#variáveis de ambiente durante o build do dockerfile
ARG PORT=3001

#variável de ambiente da aplicação
ENV PORT=$PORT

#deixar a porta da máquina visível
EXPOSE $PORT

#copiar os arquivos do diretório que a gente está para a imagem que está sendo criada
COPY ./ .

#comando em bash para pre-inicializar a aplicação
RUN npm install

#comando para iniciar a aplicação
ENTRYPOINT npm start  