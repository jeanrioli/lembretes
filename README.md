# Sobre o sistema de Lembretes

Este projeto foi desenvolvido com ReactJS.

## Como executar

Desde que você tenha Node e Yarn instalados, instale as dependências com o comando `yarn install` na pasta do projeto.
Para iniciá-lo, execute o comando `yarn start`.

O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).

## Premissas assumidas

- Uma vez que o desafio apresentava uma imagem ilustrativa da tela, assumi que poderia propor uma interface nova.
- Considerei que os lembretes só podem ser criados para a partir do próximo dia, respeitando a exigência de a data estar no futuro.
- Optei por iniciar o projeto com lembretes já criados.

## Decisões de projeto

- Escolhi ReactJS por já ter tido contato anteriormente em projetos pessoais e por ser uma escolha comum no mercado.
- Decidi editar os estilos usando Styled Components, visto que tem ampla abrangência no mercado, facilidade de implementação e fácil legibilidade no código.
- Optei por mobile first, criando @medias em alguns elementos para quebras de tablet e telas maiores.
- Escolhi não utilizar bibliotecas de componentes ou de quaisquer outras soluções.
- Decidi exibir uma mensagem de erro quando as entradas para criação do lembrete não são válidas.
- Escolhi não desenvolver uma API devido ao tempo dado para o desafio e por não ter tanta familiaridade com o tema.
