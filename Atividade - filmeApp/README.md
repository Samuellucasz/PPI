# Cineteca

Projeto da **primeira aula de React**. Uma pequena coleção de filmes que
demonstra três conceitos fundamentais: **componentes**, **props** e **estado**.

## Como rodar

### 1. Clonar o projeto

Abra o terminal na pasta onde quer guardar o projeto e clone o repositório:

```bash
git clone https://github.com/JefersonQueiroga/filmeApp.git
```

Depois entre na pasta que foi criada:

```bash
cd filmeApp
```

### 2. Instalar as dependências

Só na primeira vez. Baixa tudo que o projeto precisa (cria a pasta
`node_modules`):

```bash
npm install
```

### 3. Rodar o projeto

```bash
npm run dev
```

Vai aparecer um endereço, geralmente <http://localhost:5173>. Abra-o no
navegador. Para **parar** o projeto, aperte **Ctrl + C** no terminal.

> Dica: enquanto o projeto está rodando, ao editar um arquivo e salvar, a
> página se atualiza sozinha no navegador.

## Conceitos mostrados

### Componente

Um componente é um pedaço reutilizável da tela, escrito como uma função que
retorna o que deve aparecer (JSX). Quebrar a tela em componentes pequenos
deixa o código mais fácil de ler e reaproveitar.

### Props

Props são as informações que um componente recebe "de fora", como os parâmetros
de uma função. Dentro do `.map()`, cada filme é passado para um `CartaoFilme`
(`filme={...}`). Props seguem sempre de cima para baixo: do componente pai para
o filho.

### Estado (useState)

Estado é a "memória" de um componente — um valor que pode mudar com a interação
do usuário e faz a tela se redesenhar sozinha. Cada `CartaoFilme` guarda em
estado se o filme foi assistido; ao clicar no botão, `setAssistido` troca esse
valor e o React atualiza o cartão na hora. A navegação entre as telas "Filmes"
e "Sobre" também usa `useState`.

## Estrutura dos arquivos

```
src/
├── data/
│   └── filmes.js           # os dados (separados da interface)
├── components/
│   ├── CartaoFilme.jsx     # mostra 1 filme + botão com useState
│   ├── PaginaFilmes.jsx    # a tela com a lista de filmes
│   └── PaginaSobre.jsx     # a tela "Sobre"
├── App.jsx                 # componente principal (menu + navegação)
├── App.css                 # estilos
├── index.css               # estilo global básico
└── main.jsx                # ponto de partida da aplicação
```
