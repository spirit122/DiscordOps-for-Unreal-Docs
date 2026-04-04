# Settings Reference

## Discord Webhook

### `Webhook URL`

- Obligatorio para el flujo principal del v1.
- Debe apuntar a un endpoint real de Discord webhook.
- Es la ruta por defecto si un preset no tiene override propio.

### `Default Channel Label`

- Nombre logico mostrado en el payload.
- Default recomendado: `QA Reports`.

### `Username Override`

- Solo aplica en webhook mode.
- Default: `Ops Reporter`.
- Discord rechaza usernames que contengan la palabra `Discord`.

### `Icon URL Override`

- Opcional.
- Solo aplica en webhook mode.

## Destinations

### `QADestinationLabel`

- Label mostrado para el preset `QA`.
- Default recomendado: `QA Reports`.

### `QAWebhookUrl`

- Override dedicado para el preset `QA`.
- Si esta vacio, cae al `Webhook URL` por defecto.

### `BugsDestinationLabel`

- Label mostrado para el preset `Bugs`.
- Default recomendado: `Bug Reports`.

### `BugsWebhookUrl`

- Override dedicado para el preset `Bugs`.

### `CommunitySupportDestinationLabel`

- Label mostrado para el preset `Community Support`.

### `CommunitySupportWebhookUrl`

- Override dedicado para el preset `Community Support`.

### `InternalTestingDestinationLabel`

- Label mostrado para el preset `Internal Testing`.

### `InternalTestingWebhookUrl`

- Override dedicado para el preset `Internal Testing`.

## Capture

### `Enable Screenshot Capture`

- Default: `true`.
- Si falla, el reporte sigue enviandose con warning.

### `Enable Log Attachment`

- Default: `true`.
- Adjunta snippet de log y archivo `.txt` cuando aplica.

### `Max Attached Log Lines`

- Default: `120`.
- Rango sugerido actual: `10-500`.

## Metadata

### `Include Project Metadata`

- Default: `true`.
- Incluye proyecto, version, engine, plataforma, mapa, modo y build config.

## Privacy

### `Enable Sensitive Data Redaction`

- Default: `true`.
- Activa limpieza de datos sensibles antes de enviar texto o logs.

### `bRedactFilePaths`

- Default: `true`.
- Reemplaza rutas locales conocidas con placeholders.

### `bRedactUserNames`

- Default: `true`.
- Reemplaza el username local cuando aparece en logs o texto.

### `AdditionalSensitiveTerms`

- Lista extra de terminos a ocultar en texto, contextos y logs.

## Reports

### `bAutoGenerateReportIds`

- Default: `true`.
- Genera IDs como `BUG-0001`, `QA-0004` o `CRASH-0002`.

### `MaxStoredHistoryEntries`

- Default: `25`.
- Limita historial y replay recientes para no crecer sin control.

## Bot

### `Enable Bot Mode`

- Default: `false`.
- En v1.1 ya cubre validacion, envio a canales dedicados y follow-up threads.

### `Bot Token`

- Obligatorio si `Enable Bot Mode` esta activo.

### `Bot Guild ID`

- Opcional en el transporte v1.
- Recomendado para compat futura.

### `Bot Channel ID`

- Obligatorio si `Enable Bot Mode` esta activo.

### `QABotChannelId`

- Override dedicado del canal `QA`.

### `BugsBotChannelId`

- Override dedicado del canal `Bugs`.

### `CommunitySupportBotChannelId`

- Override dedicado del canal `Community Support`.

### `InternalTestingBotChannelId`

- Override dedicado del canal `Internal Testing`.

### `bAllowThreadCreationInBotMode`

- Default: `true`.
- Permite crear un hilo de seguimiento cuando `bCreateThread` esta activo en el reporte.

### `ThreadAutoArchiveDurationMinutes`

- Default: `1440`.
- Rango actual: `60-10080`.
- Solo aplica en `bot mode`.

## Runtime / Editor

### `Enable Runtime Reports`

- Default: `true`.
- Debe quedar activo para builds empaquetados.

### `Enable Editor Reports`

- Default: `true`.
- Habilita panel y envio desde editor.

## Automation

### `bEnableEnsureReports`

- Default: `true`.
- Cuando Unreal dispara un ensure, DiscordOps intenta mandar un reporte automatico de seguimiento.

### `bEnableCrashMarkerReports`

- Default: `true`.
- Guarda un marker local al detectar un error fatal para reportarlo en el siguiente inicio.

### `bAutoSendPendingCrashReportsOnStartup`

- Default: `true`.
- Reintenta reportar el marker pendiente al arrancar el proyecto.
