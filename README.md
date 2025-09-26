# ORBITAL v7.1 — Melhorias gerais (Loja, Start, Menu)

## Novidades desta build
- **Menu Principal** (overlay): Acesso a Jogar, Laboratório, Configurações e Créditos.
- **Pré‑Partida**: seleção de dificuldade (Casual, Clássico, Extremo) com efeitos em vida, ritmo de spawn, pontos e bits.
- **Menu de Pausa** (Esc/P): Retomar, Loja, Lab, Configurações, Recomeçar, Menu Principal.
- **Loja aprimorada**:
  - **Tiers** por fase + **pesos de raridade** escalam com Nível (Lifetime).
  - **Fichas de Rerrol**: ganhas ao derrotar boss; consumidas antes dos bits.
  - **Confirmação de compra** (opcional em Configurações), Lock por slot, custo de Rerrol progressivo.
- **Configurações**: Volume, Reduzir movimento, Confirmar compras, Pausa automática ao trocar de aba, reset de progresso.
- **Qualidade de vida**: Toaster consistente, badges de Tier/Nível/Recorde no HUD e Menu, PWA mantido.

## Como rodar
1. Servir a pasta em **localhost** (PWA/Service Worker exigem HTTPS/localhost):
   - VS Code Live Server, `npx serve`, `python -m http.server 5500`, etc.
2. Abrir `http://localhost:PORT/index.html` e, se quiser, instalar como **PWA**.
3. No Menu: **Jogar** → escolha a dificuldade no **Pré‑Partida** → Iniciar.

## Persistência (localStorage)
- `orbital_lifetime_v7_1` (Lifetime Pontos), `orbital_upgrades_v7_1` (upgrades), `orbital_cells_v7_1` (células), `orbital_highscore` (recorde), `orbital_prefs_v7_1` (preferências).

