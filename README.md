# Consulta Transportes

Projeto desenvolvido em Angular que busca dados de linhas de ônibus e lotação de Porto Alegre e permite visualizar seus itinerários no Google Maps.

# Instalação

Clone o repositório

`git clone https://github.com/alison664/consulta-transportes.git`

Instale as dependências na pasta do projeto

`npm install`

Para rodar a aplicação e visualizar em um navegador execute:

`ng serve --open`

Isso fará a aplicação ser executada no endereço `http://localhost:4200/`

# Docker

Para fazer a build e executar uma imagem, execute os seguintes comandos:

`docker build -t consulta-transportes
 docker run -p 8081:80 consulta-transportes`
