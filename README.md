# Projeto Next Level Week 3 (Discovery)
 Projeto feito no evento da RocketSeat para criar um aplicativo coletivamente dentro de uma semana.
 
 Neste repositorio você pode encontrar meu projeto e algumas notas durante o ocorrer da workshop!
 
 O tema desta workshop é: __Conectar pessoas com orfanatos proximos.__
 
 Este é um projeto desenvolvido durante a Next Level Week, realizada pela @Rocketseat durante os dias 12 a 18 de Outubro de 2020.
 
 
 Note que todas as informações sobre localizações neste projeto são somente testes e não representa significado algum, nem seus nomes, fotos, numeros, comentários ou descrições, todos os dados deste genero são ficticios...
 
 ---
 ## Dia 01
  #### O Inicio do projeto: 
 <img src="https://user-images.githubusercontent.com/68889180/95921166-2eb08b00-0d87-11eb-88ba-ef215b94f01b.png" 
 width="400px" title="Layout da landingpage" alt="Layout da landingpage">
 
 Neste dia aprendemos um pouco sobre o front-end e seus conceitos/aplicações.
 
 Estudos: HTML; CSS;
 
 Primeira pagina do aplicativo configurada, com informações sobre HTML5 e CSS3.
 
 2:15:10 de aula.
 
 ---
 ## Dia 02
  #### Configurando as paginas:
<p>
  <img src="https://user-images.githubusercontent.com/68889180/95921513-ce6e1900-0d87-11eb-8641-09692da20ead.png" 
       width="380px" title="Landing page finalizada" alt="Landing page finalizada">
  <img src="https://user-images.githubusercontent.com/68889180/95921882-81d70d80-0d88-11eb-9b3b-13d2750421d2.png" 
       width="380px" title="Mapa dos orfanatos" alt="Mapa dos orfanatos">
  <img src="https://user-images.githubusercontent.com/68889180/95929926-98d32b00-0d9b-11eb-85ad-2187b5c6a8a9.png" 
       width="380px" title="Pagina do orfanato" alt="Pagina do orfanato">
  <img src="https://user-images.githubusercontent.com/68889180/95930316-8dccca80-0d9c-11eb-8444-4f4a0f53a9a6.png" 
       width="320px" title="Pagina do orfanato" alt="Pagina do orfanato #2">
</p>

 Neste dia terminamos por completo a landing page do projeto, criamos a pagina de escolha de orfanatos a partir de um mapa disponibilizado pela leaflet gratuitamente, além de criar uma pagina para a visita de orfanatos contendo informações sobre a visita e o orfanato em si.

 Estudos: CSS; HTML; Javascript;
 
 3:08:50 de aula.
 
 --- 
 ## Dia 03
  #### Paginas de cadastramento:
 
 <p>
   <img src="https://user-images.githubusercontent.com/68889180/96069219-18342d80-0e74-11eb-856b-cabc283af910.png" 
        width="400px" title="Cadastramento de orfanatos" alt="Cadastramento de orfanatos">
   <img src="https://user-images.githubusercontent.com/68889180/96069265-3732bf80-0e74-11eb-9c82-31986fa8c200.png" 
        width="400px" title="Cadastramento de orfanatos" alt="Cadastramento de orfanatos #2">
 </p>
 
  Neste dia criamos a pagina para se cadastrar um novo orfanato com sistema de validação e envio de formulário para ser utilizado no backend.
 
 Estudos: CSS; HTML; Javascript;
 
 1:58:35 de aula
 
 ---
 ## Dia 04
  #### O Back-end
  
  <p>
   <img src="https://user-images.githubusercontent.com/68889180/96159866-8ec04200-0eeb-11eb-9204-341cbb4f5094.png" 
        width="400px" title="Orfanatos obtidos pelo servidor" alt="Orfanatos obtidos pelo servidor">
   <img src="https://user-images.githubusercontent.com/68889180/96160184-01312200-0eec-11eb-8c2b-8c011dee97fc.png" 
        width="400px" title="Servidor sendo executado" alt="Servidor sendo executado">
 </p>
  
 Neste dia aprendemos os conceitos de back-end, instalamos as dependencias e os pacotes no projeto, renomeamos os arquivos html para terminar com hbs, além de pegarmos dados de teste criados em nosso servidor.
 
 Estudos: Back-end; Javascript; HBS(html);
 
 #### Comandos utilizados:
  * npm init -y  > Cria um package.json para as dependencias. (json > JavascriptObjectNotation)
  * npm install express  > Instala o pacote para rodar o backend.
  * node src/server.js  > executar o servidor...
  * npm install nodemon  > Instala o pacote para atualizar o backend de forma dinâmica.
  * no package.json  > mudamos o "test" para "start" e colocamos o argumento "nodemon src/server.js"
  * npm start  > diz no arquivo json para executar o script start que chama o nodemon. (inicia o backend)
  * npm install hbs > Handlebars, templateEngine pacote para os html ter variaveis! com o formato hbs.
 
 1:53:45 de aula
 
 ---
 ## Dia 05
  #### Banco de dados (Final)
  
  <p>
 <img src="https://user-images.githubusercontent.com/68889180/96321576-4fc5e580-0fec-11eb-8710-203100b8843c.png" 
        width="400px" title="novos orfanatos cadastrados já o mapa!" alt="Novos orfanatos cadastrados!">
 <img src="https://user-images.githubusercontent.com/68889180/96321617-77b54900-0fec-11eb-878a-3299cef0c396.png" 
        width="400px" title="Servidor sendo executado" alt="Servidor sendo executado">
 </p>
  
 Neste video terminamos a parte de pegar os dados do banco de dados, de salvar no banco de dados e de cadastrar novos orfanatos, e depois disso nos, ah, pera ai... o projeto já está pronto!
 
 Estudos: Back-end; Banco de dados; Sql; Sqlite; Javascript
 
 2:00:15 de aula.
 
 ---
 ## Dia 06
  #### O Desafio...
  
  Neste dia, não tivemos aula, porém na live da milha extra, tivemos um desafio muito interessante, que seria adicionar uma nova funcionalizade a aplicação, por nossa escolha, e eu escolhi acrescentar comentários aos orfanatos!

Isso foi incrivel, pois eu não entendi direito os bancos de dados e aplicar algo assim ,mesmo que seja simples, foi de grande ajuda pra eu notar a simplicidade do fluxo dos dados na aplicação! consegui terminar em umas 5hrs.

Neste sistema podemso fazer um comentário a qualquer orfanato (cada um tendo seus comentarios), colocando para qualquer um ver nosso relato, os comentarios tem um nome, e data, fazendo com que você saiba quem comentou e quando comentou e os comentarios mais recentes aparecem primeiro!


Claro, ainda falta um sistema de cadastro para os comentarios não serem muito vazios, também não sei se a minha maneira de resolver esse problema foi a melhor, porem ele foi resolvido.

  <h3>Os Comentários:</h3>
  <img src="https://user-images.githubusercontent.com/68889180/96353062-0bdfe880-109f-11eb-88c0-cc19caf44d07.png" 
        width="400px" title="Seção de comentários" alt="Seção de comentários">
 
  <h3>Criando um comentário:</h3>
  <img src="https://user-images.githubusercontent.com/68889180/96353378-bb1dbf00-10a1-11eb-876f-189cc3012d04.png" 
        width="400px" title="Seção de comentários" alt="Seção de comentários">

  <h3>Comentário aplicado na pagina do orfanato especifico!:</h3>
  <img src="https://user-images.githubusercontent.com/68889180/96353399-0637d200-10a2-11eb-8d29-da270fb18c2c.png" 
        width="400px" title="Seção de comentários" alt="Seção de comentários">


 ---
 
 ## Encerramento
 
 ---

 ### Live 01 (Acelerando sua Evolução)
 Nesta live vimos tres pilares basicos (foco, pratica e grupo) e poder destesconceitos em seu aprendizado!
 
 ### Live 02 (Olhando as Oportunidades)
 Nesta live foi comentado as oportunidades dos mercados de trabalho e a necessidade de ter confiança a se aplicar em uma vaga.
 
 ### Live 03 (A Escolha da Stack)
 Nesta live houve uma separação sobre oque é stack, framework e tecnologia, e quando utilizar para a ansiedade ou o hype de uma nova tecnologia não interferir em sua aplicação ou aprendizado.
 
 ### Live 04 (Até dois Anos em Dois Messes)
 Nesta live vimos como acelerar nossa evolução, novamente falando sobre o foco a pratica e o grupo, também comentado o site roadmap.sh para ter um caminho para seguir, o começo pode ser lento se sua estrada estiver cheia de obstaculos.
 
 ### Live 05 (A Milha Extra)
 Nesta aula tivemos os conceitos dos proximos passos, de não somente ter os conceitos na teoria, mais sim aplica-los na pratica, aplicar o conhecimento é a melhor forma de praticar!
 
