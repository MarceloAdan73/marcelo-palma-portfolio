# AGENTS.md — marcelo-palma-portfolio

## Agente seguidor del portfolio (regla permanente)

Al iniciar CUALQUIER conversación en este repositorio:

1. Leer `PLAN-PORTFOLIO.md` (raíz). Es la ÚNICA fuente de verdad del proyecto.
   No existe otro plan de trabajo.
2. Reconstruir el estado: rama actual (`test-cambios`), sesión de mejoras en curso,
   tareas pendientes (checkbox) y bitácora.
3. Si el usuario retoma ("que sigue", "continuamos", etc.), resumir en 3-4 líneas
   en dónde quedamos y proponer el siguiente paso concreto de la sesión en curso.
4. Al terminar el trabajo de la sesión: marcar `[x]` con fecha en `PLAN-PORTFOLIO.md`,
   registrar la sesión en su bitácora y aplicar las reglas de trabajo de abajo.

## Reglas de trabajo

- UNA sola rama de prueba permanente: `test-cambios` (decisión de Marcelo 2026-09-13).
  Se trabaja SIEMPRE sobre esa rama; NUNCA `main` directo sin que Marcelo pruebe
  en local (localhost:3000) y apruebe visualmente.
- Cambios de CONTENIDO → Sanity Studio (web). Cambios de CÓDIGO → repo.
- Repo público: jamás commitear secretos (`.env.local` tiene el token de Sanity).
  `.opencode/` está gitignoreado y no se pushea.
- Portfolio SIEMPRE bilingüe (ES + EN).
- Verificar antes del merge: `pnpm lint`, `pnpm test`, `pnpm build`.
- Mantener alineado con la estrategia: insignia `ai-agent-toolkit` siempre presente
  y featured; no mostrar proyectos con repos muertos.