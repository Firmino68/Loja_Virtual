# 🛒 Loja Virtual — Bukapp

Loja online de computadores e acessórios, feita com **HTML, CSS e JavaScript puro** (sem frameworks nem build).

## Funcionalidades

- Catálogo gerado a partir de `js/products.js`
- Pesquisa em tempo real (ignora acentos), filtro por categoria e ordenação por preço/nome
- Carrinho com total, guardado no `localStorage`
- Design responsivo, acessível (navegação por teclado, `aria-*`, skip link) e imagens em WebP otimizadas

## Estrutura

```
├── index.html
├── css/style.css
├── js/
│   ├── products.js   # dados dos produtos
│   └── main.js       # pesquisa, filtros e carrinho
└── img/
```

## Como executar

Abra o `index.html` no navegador, ou sirva a pasta:

```bash
python -m http.server 8000
```

## Publicar no GitHub Pages

*Settings → Pages → Deploy from a branch → `master` / `(root)`*.

## Adicionar produtos

Acrescente um objeto em `js/products.js` e coloque a imagem (`.webp`) em `img/`.

## 🎓 Sobre este projeto

Este projeto foi desenvolvido por mim enquanto frequentava o curso **Unitel Code Web**, como exercício prático de criação de uma loja online. Foi o meu primeiro contacto com HTML, CSS e a estrutura de um site de comércio eletrónico. Mais tarde voltei a ele para o refatorar e aplicar boas práticas (código organizado, JavaScript, responsividade e acessibilidade).

### O que é o Unitel Code Web?

O **UNITEL Code Web** é um ciclo de formação **online e gratuito** em desenvolvimento web, promovido pela **Unitel** (Angola) com o apoio da startup **BukaApp**. Os formandos aprendem a criar websites modernos, blogs, lojas online e portfólios online, e ganham ferramentas para se tornarem empreendedores digitais ou programadores web.

- **Público-alvo:** jovens com pelo menos 16 anos, residentes em Angola, com a 9.ª classe concluída, acesso a computador e internet e vontade de aprender.
- **Origem:** foi criado em 2021, dentro da estratégia de responsabilidade social corporativa da Unitel. Faz parte da família de formações **Unitel Code**, que existe desde 2016 e começou com programação de jogos para crianças e adolescentes.
- **Alcance:** na primeira edição formou cerca de 40 jovens das províncias da Huíla, Benguela, Huambo e Luanda, e as edições seguintes foram aumentando as metas de formandos.

Fontes: [PTI](https://pti.ao/unitel-anuncia-abertura-das-inscricoes-para-a-3o-edicao-do-unitel-code-web/), [PlatinaLine](https://platinaline.com/unitel-volta-a-promover-ciclo-de-formacao-em-desenvolvimento-web-2/) e [AngoVagas](https://angovagas.net/unitel-da-inicio-as-inscricoes-para-a-2a-edicao-do-unitel-code-web/).

## Autor

** Pedro Firmino** · [GitHub](https://github.com/Firmino68)
