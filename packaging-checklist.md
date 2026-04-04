# Packaging Checklist

## Que aprendimos del material de referencia de Fab

El material de referencia usado para esta revision sirve para dos cosas:

- automatizar tareas del portal de publicacion
- documentar limites practicos del listing y la estructura del zip

No debe copiarse dentro del plugin Unreal que compra el cliente. Eso incluye:

- `.claude-plugin/`
- `commands/`
- `skills/`
- snippets internos del portal
- automatizaciones especificas de un publisher

Ese material sirve como herramienta interna del vendedor, no como parte del producto final.

## Estructura del zip para Fab

El zip final debe contener una sola carpeta raiz del plugin:

```text
DiscordOps_v1.0.0_Fab_Win64.zip
\-- DiscordOps/
    +-- DiscordOps.uplugin
    +-- Config/
    +-- Content/        (solo si existe)
    +-- Resources/      (solo si existe)
    +-- Shaders/        (solo si existe)
    \-- Source/
```

El script [Build-FabPackage.ps1](../Scripts/Build-FabPackage.ps1) ya sigue esta regla y crea una fuente limpia antes de llamar a `BuildPlugin`.

## Excluir del zip final

No deben entrar al package de Fab:

- `Binaries/`
- `Intermediate/`
- `Saved/`
- `.git/`
- `.gitattributes`
- `.gitignore`
- `README.md`
- `Docs/`
- `Scripts/`
- cualquier carpeta ajena al plugin en la raiz del workspace

## Antes de publicar

- Verificar build del plugin con `RunUAT BuildPlugin`.
- Hacer una compilacion de proyecto real con el plugin instalado.
- Crear proyecto demo y map de ejemplo con flujo de bug report.
- Capturar media gallery real mostrando:
  - validacion de setup
  - envio de test report
  - reporte con screenshot
  - reporte con output log
- Revisar textos del Fab listing:
  - valor principal QA + bug reporting
  - webhook first
  - editor + runtime
  - Blueprint-first
- Incluir screenshots de Project Settings, Blueprint nodes y panel editor.

## Limites utiles del listing

Estos limites salen del material de referencia del portal y son utiles para preparar contenido sin pasarse del flujo de publicacion:

- titulo: `80` caracteres
- descripcion: `10,000` caracteres HTML
- technical details: `1,900` caracteres HTML
- tags: `25`
- changelog: `2,000`
- FAQ: `20` entradas
- imagenes de media: `1920x1080`, `jpg/jpeg/png`, menos de `3 MB`

## Limitaciones de esta base fuente

- No incluye assets `.uasset` ni demo map generado desde Unreal Editor.
- La media del listing debe capturarse despues de compilar e instalar el plugin en un proyecto de ejemplo.
- El package de Fab debe ser solo el plugin; la documentacion comercial y el material de produccion viven fuera del zip.
