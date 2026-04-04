# Troubleshooting

## `Validate Discord Setup` marca invalido

Revisa:

- `Webhook URL` vacio
- URL que no apunta a `discord.com/api/webhooks/...`
- destino por preset sin webhook valido y sin fallback por defecto
- `Bot Token` vacio con `Enable Bot Mode` activo
- `Bot Channel ID` vacio o no numerico
- runtime y editor reports ambos desactivados

## `Live Validate` responde con error claro

Mensajes comunes:

- `Unknown Webhook`: el webhook fue borrado, la URL esta rota o apunta a un destino viejo.
- `Bot is missing access or permissions`: el bot existe, pero no puede escribir en ese canal.
- `Bot token is invalid`: el token no sirve o esta incompleto.
- `Discord validation failed before a response was received`: problema de red local o Discord no respondio.
- `rate-limited`: Discord respondio, pero aplico rate limit a la validacion.

## El screenshot no se adjunta

Posibles causas:

- no hay `GameViewport` activo
- el proyecto esta en un contexto sin captura disponible, como `Editor-Cmd`
- fallo al serializar PNG

Comportamiento esperado del plugin:

- el reporte sigue enviandose
- devuelve warning claro
- `PIE`, `Standalone` y `packaged runtime` son los mejores contextos para validar la imagen real.

## Runtime sin editor

El flujo base no depende del editor.

Si un build runtime no envia:

- confirma `Enable Runtime Reports`
- confirma conectividad de red
- confirma que el webhook es valido

## Error HTTP de Discord

Casos comunes:

- `401/403`: token o permisos invalidos en bot mode
- `404`: webhook borrado o URL incorrecta
- `429`: rate limit
- `5xx`: Discord respondio, pero con error del lado del servicio

El plugin no debe crashear y debe devolver mensaje entendible.

## Threads no se crean

Revisa:

- `bCreateThread` activo en el request
- `Enable Bot Mode` activo
- token y canal validos
- permisos del bot para crear thread

En `webhook mode` el reporte se envia igual, pero DiscordOps devuelve un warning porque el follow-up thread requiere `bot mode`.

## El reporte va al canal incorrecto

Revisa:

- `DestinationPreset` del request
- webhook o bot channel dedicado para ese preset
- fallback al `Webhook URL` por defecto si el preset no tiene override valido
- `Webhook Quick Setup` del panel, porque ahora guarda por preset

## Ensure o crash marker no llegan

Revisa:

- `bEnableEnsureReports`
- `bEnableCrashMarkerReports`
- `bAutoSendPendingCrashReportsOnStartup`
- conectividad al arrancar, porque el crash marker se reintenta al siguiente inicio

## Credenciales sensibles

- no guardes secretos en archivos versionados
- usa configuracion local no trackeada para demos y pruebas internas
- si empaquetas el proyecto demo, inyecta el `.local.ini` solo en la copia de prueba, no en el package publico
