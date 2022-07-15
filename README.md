
Lista de Tarefas 

Foi o meu projeto desafiador dentro da Comunidade Code (Discord) sob mentoria <br>
de Pedro Marins e Henrique de Andrade.

Documentação: Começamos nossa aplicação adicionando uma nova tarefa. Quando <br>
clicamos em adicionar nova tarefa a aplicação pega o texto inserido no input <br>
e adiciona em um (array) criando uma lista completa de tarefas.

Quando chamo essa função de criar nova tarefa, ela usa uma variável usando o <br>
método (forEach) para montar tarefa por tarefa e estruturar dentro de uma <br>
(ul) para depois exibir na tela.

Clicando na Lixeira chamamos uma função que usa o método (splice) para deletar <br>
o ítem clicado e clicando na Flecha chamamos uma função que pega a informação <br>
dentro do (array) e marca sinalizando que essa tarefa foi concluída.

Todas essa informações são armazenadas no (localStorage) do navegador convertidas <br>
em (string no formato JSON) para quando reiniciar o sistema ou a aplicação essas <br>
informações permaneçam salvas na tela e o usuário não perca sua Lista de Tarefas.

Usando o (localStorage.getItem) essa lista retorna para tela usando o método (JSON.parce) <br>
para retornar essas informações para o (array) listando todas as tarefas adicionadas pelo usuário.
<br><br>
Link do Projeto: https://task-list-dimas.netlify.app/
<br>
Tecnologias: HTML5 | CSS3 | JavaScript
 
