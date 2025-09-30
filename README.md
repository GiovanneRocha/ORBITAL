# ORBITAL v7.3 — Histórico/Favoritos, Missões, Nova animada, Economia ajustada

## Destaques
- **Loja aprimorada**:
  - **Favoritos** (⭐) por item — opção "favoritos primeiro" nas Configurações.
  - **Histórico**: últimas **vistas** e **compras** (até 20 cada), com exibição resumida na Loja.
  - Mantidos: **Ofertas limitadas** (-20% por sessão), **Reroll** com **Fichas**, **Lock** e **Undo (3s)**.
- **Missões diárias** (overlay dedicado):
  - 3 missões básicas por dia: *Defletir 50*, *Derrotar 1 Boss*, *Alcançar Fase 6*.
  - Recompensas: **Bits**, **Fichas**, **Células** (bits são aplicados na próxima run se não estiver jogando).
- **Barra da Nova (HUD)**: cooldown com animação e destaque visual quando pronta.
- **Economia ajustada**:
  - **Bits por deflect** escalam levemente com a **Fase** (até +40%).
  - **Boss** concede bits escalonados pelo **Tier/Fase** e **Fichas** (2 fichas no Tier III).
  - **Células por run** combinam pontuação, bosses derrotados e progresso de fase.

## Como rodar
1. Servir em **localhost**: `python -m http.server 5500` (ou Live Server).
2. Abrir `http://localhost:5500/` e instalar como **PWA** (opcional).
3. Fluxo recomendado: **Menu** → **Pré‑Partida** → **Iniciar** → Explore **Loja** e **Missões**.

## Persistência (localStorage)
- `orbital_lifetime_v7_3`, `orbital_upgrades_v7_3`, `orbital_cells_v7_3`, `orbital_prefs_v7_3`
- `orbital_shop_history_v7_3` (vistas/compras/favoritos), `orbital_daily_v7_3` (missões), `orbital_bank_v7_3` (bits pendentes de missões), `orbital_highscore` (recorde)

