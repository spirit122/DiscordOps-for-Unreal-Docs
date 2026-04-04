# Blueprint Workflow

## Flujo recomendado para Bug Report

1. Recolecta titulo y descripcion desde tu UI o herramienta de debug.
2. Usa `Build Template Report Request` si quieres arrancar desde `Gameplay Bug`, `Visual Bug` o `Crash`.
3. Llena tags, severidad y categoria.
4. Elige `DestinationPreset` para `Bugs`, `QA`, `Community Support` o `Internal Testing`.
5. Decide si adjuntar screenshot.
6. Decide si adjuntar log snippet.
7. Agrega `CustomFields` para branch, ticket, tester o hardware.
8. Llama `Send Bug Report`.
9. En `OnSuccess` muestra confirmacion al usuario/tester.
10. En `OnFailure` muestra mensaje entendible y registra warnings.

## Flujo recomendado para QA Report

1. Recolecta resumen de la sesion.
2. Agrega contexto adicional:
   - feature area
   - build label
   - tester
   - branch o ticket
3. Decide si quieres `QA Pass` o `QA Fail`.
4. Usa `CustomFields` para casos de prueba, branch, milestone o plataforma.
5. Activa `bCreateThread` si quieres seguimiento automatico en `bot mode`.
6. Llama `Send QA Report`.
7. Usa `Capture And Send Screenshot` cuando quieras priorizar evidencia visual.
8. Usa `Send Output Log Snippet` para errores rapidos sin crear un flujo extra.

## Widget runtime reusable

El plugin ya incluye `UDiscordOpsRuntimeReportWidget` para meter el flujo en cualquier juego sin escribir una UI desde cero.

Uso recomendado:

1. Crea el widget desde tu `PlayerController`, HUD o menu debug.
2. Deja visibles `Validate Setup`, `Live Validate`, `Send Demo Report`, `Send Bug Report`, `Send QA Report`, `Capture Screenshot`, `Send Log Snippet` y `Replay Last`.
3. Usa ese widget para demos, builds internas o soporte QA.

## Nodos publicos del v1

- `Validate Discord Setup`
- `Get DiscordOps Status`
- `Get DiscordOps Destinations`
- `Get DiscordOps Report Templates`
- `Get Recent DiscordOps History`
- `Build Template Report Request`
- `Build Bug Report Payload`
- `Build QA Report Payload`
- `Build Discord Embed Payload`
- `Send Discord Message`
- `Send Discord Embed`
- `Send Bug Report`
- `Send QA Report`
- `Capture And Send Screenshot`
- `Send Output Log Snippet`
