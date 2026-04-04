# 5-Minute Quick Start

## Objetivo

Enviar un bug report o QA report a Discord en menos de 5 minutos usando `webhook mode`, sin tocar codigo.

## Pasos

1. Crea un webhook en el canal de Discord donde quieres recibir reportes.
2. Instala el plugin en `Plugins/DiscordOps`.
3. Abre `Project Settings > Plugins > DiscordOps`.
4. Pega el `Webhook URL` por defecto.
5. Si quieres separar destinos, llena `QAWebhookUrl`, `BugsWebhookUrl`, `CommunitySupportWebhookUrl` o `InternalTestingWebhookUrl`.
6. Usa un `Username Override` sin la palabra `Discord`, por ejemplo `Ops Reporter`.
7. Activa screenshots, logs y metadata.
8. Abre `Window > DiscordOps`.
9. En `Webhook Quick Setup`, elige el preset que quieres configurar, pega la URL y pulsa `Save Local Webhook`.
10. Pulsa `Validate Setup`.
11. Pulsa `Live Validate` para confirmar reachability real.
12. Pulsa `Send Demo Report` o `Send Test Report`.

## Resultado esperado

Discord debe recibir:

- un embed con titulo y descripcion
- template, categoria y severidad
- proyecto, engine, plataforma, timestamp y modo de ejecucion
- screenshot si hay un viewport real disponible
- snippet de log si aplica
- report ID autogenerado si esta activo

## Flujo rapido en runtime

1. Agrega `UDiscordOpsRuntimeReportWidget` a tu HUD o crea la instancia desde tu `PlayerController`.
2. Ejecuta el juego.
3. Pulsa `Validate Setup` o `Live Validate`.
4. Pulsa `Send Demo Report`.

## Recomendacion de uso en Blueprint

- Usa `Build Template Report Request` para arrancar con `Crash`, `Gameplay Bug`, `Visual Bug`, `Performance`, `QA Pass` o `QA Fail`.
- Usa `DestinationPreset` para enviar a `QA`, `Bugs`, `Community Support` o `Internal Testing`.
- Usa `CustomFields` para ticket, branch, tester o hardware.
- Activa `bCreateThread` solo cuando tengas `bot mode` configurado.

## Nota importante sobre screenshots

- En `Editor-Cmd` o contextos sin viewport, el reporte se envia con warning y sin imagen.
- En `PIE`, `Standalone` o `packaged runtime`, el screenshot puede adjuntarse de forma real si existe `GameViewport`.
