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

*Settings → Pages → Deploy from a branch → `main` / `(root)`*.

## Adicionar produtos

Acrescente um objeto em `js/products.js` e coloque a imagem (`.webp`) em `img/`.

## Autor

Projeto desenvolvido no curso Unitel Code Web.
