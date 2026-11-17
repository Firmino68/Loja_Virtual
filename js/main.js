(() => {
  const $ = (id) => document.getElementById(id);
  const fmt = (n) => n.toLocaleString("pt-PT").replace(/\u00a0/g, " ") + " AOA";
  const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // ---- Carrinho (guardado no localStorage) ----
  let cart = [];
  try { cart = JSON.parse(localStorage.getItem("bukapp-cart")) || []; } catch { cart = []; }
  const save = () => { try { localStorage.setItem("bukapp-cart", JSON.stringify(cart)); } catch {} };
  const byId = (id) => PRODUCTS.find((p) => p.id === id);

  function renderCart() {
    const items = cart.map((c) => ({ ...c, p: byId(c.id) })).filter((c) => c.p);
    $("cartCount").textContent = items.reduce((s, c) => s + c.qty, 0);
    $("cartList").innerHTML = items.length
      ? items.map((c) => `<li><span>${esc(c.p.name)} × ${c.qty}</span>
          <span>${c.p.price ? fmt(c.p.price * c.qty) : "Sob consulta"}</span>
          <button data-rm="${c.id}" aria-label="Remover ${esc(c.p.name)}">✕</button></li>`).join("")
      : "<li>O carrinho está vazio.</li>";
    const total = items.reduce((s, c) => s + (c.p.price || 0) * c.qty, 0);
    const pending = items.some((c) => !c.p.price);
    $("cartTotal").textContent = items.length ? `Total: ${fmt(total)}${pending ? " + itens sob consulta" : ""}` : "";
  }

  function add(id) {
    const item = cart.find((c) => c.id === id);
    item ? item.qty++ : cart.push({ id, qty: 1 });
    save(); renderCart();
  }

  function toggleCart(open) {
    $("cart").classList.toggle("open", open);
    $("cart").setAttribute("aria-hidden", String(!open));
    $("overlay").hidden = !open;
  }

  // ---- Catálogo ----
  function renderGrid() {
    const q = norm($("search").value.trim());
    const cat = $("category").value;
    const sort = $("sort").value;
    let list = PRODUCTS.filter((p) =>
      (!cat || p.category === cat) && (!q || norm(`${p.name} ${p.desc} ${p.category}`).includes(q)));
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name, "pt"));
    if (sort === "asc" || sort === "desc") {
      list.sort((a, b) => {
        const x = a.price ?? Infinity, y = b.price ?? Infinity; // sem preço vai para o fim
        if (x === y) return 0;
        if (x === Infinity) return 1;
        if (y === Infinity) return -1;
        return sort === "asc" ? x - y : y - x;
      });
    }
    $("resultInfo").textContent = `${list.length} produto${list.length === 1 ? "" : "s"} encontrado${list.length === 1 ? "" : "s"}`;
    $("grid").innerHTML = list.length
      ? list.map((p) => `<article class="card">
          <img src="img/${p.img}.webp" alt="${esc(p.name)}" loading="lazy" />
          <div class="card-body">
            <span class="tag">${p.category}</span>
            <h3>${esc(p.name)}</h3>
            <p>${esc(p.desc)}</p>
            <p class="price">${p.price ? fmt(p.price) : "Preço sob consulta"}</p>
            <button class="btn" data-add="${p.id}">Adicionar ao carrinho</button>
          </div></article>`).join("")
      : '<p class="empty">Nenhum produto corresponde à sua pesquisa.</p>';
  }

  $("filters").addEventListener("submit", (e) => e.preventDefault());
  ["search", "category", "sort"].forEach((id) => $(id).addEventListener("input", renderGrid));
  $("grid").addEventListener("click", (e) => {
    const b = e.target.closest("[data-add]");
    if (!b) return;
    add(Number(b.dataset.add));
    b.textContent = "Adicionado ✓";
    setTimeout(() => (b.textContent = "Adicionar ao carrinho"), 1200);
  });
  $("cartList").addEventListener("click", (e) => {
    const b = e.target.closest("[data-rm]");
    if (!b) return;
    cart = cart.filter((c) => c.id !== Number(b.dataset.rm));
    save(); renderCart();
  });
  $("cartClear").addEventListener("click", () => { cart = []; save(); renderCart(); });
  $("cartBtn").addEventListener("click", () => toggleCart(true));
  $("cartClose").addEventListener("click", () => toggleCart(false));
  $("overlay").addEventListener("click", () => toggleCart(false));
  document.addEventListener("keydown", (e) => e.key === "Escape" && toggleCart(false));

  $("year").textContent = new Date().getFullYear();
  renderGrid(); renderCart();
})();
