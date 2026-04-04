# Installation Guide

## Win64-first release target

Esta version de `DiscordOps for Unreal` esta validada en `UE 5.7` para `Win64`.

## Instalar como plugin de proyecto

1. Cierra Unreal Editor.
2. Copia la carpeta `DiscordOps` dentro de `YourProject/Plugins/DiscordOps`.
3. Abre el `.uproject`.
4. Si Unreal lo solicita, permite compilar el plugin.
5. Verifica que aparezcan:
   - `Edit > Project Settings > Plugins > DiscordOps`
   - `Window > DiscordOps` dentro del editor

## Configuracion minima para v1

1. Abre `Project Settings > Plugins > DiscordOps`.
2. Pega un `Webhook URL` de Discord.
3. Ajusta `Default Channel Label` si quieres un nombre logico para el destino.
4. Deja activados:
   - `Enable Screenshot Capture`
   - `Enable Log Attachment`
   - `Include Project Metadata`
   - `Enable Runtime Reports`
   - `Enable Editor Reports`
5. Guarda los settings.
6. Abre el panel `Window > DiscordOps`.
7. Ejecuta `Validate Setup`.
8. Ejecuta `Send Test Report`.

## Bot mode

`Bot mode` es opcional en v1.0.

Configuralo solo si necesitas validar el camino equivalente al webhook:

1. Activa `Enable Bot Mode`.
2. Completa `Bot Token`.
3. Completa `Bot Channel ID`.
4. Completa `Bot Guild ID` si tu flujo interno lo requiere.
5. Ejecuta `Validate Setup`.

## Seguridad

- No commitees `Webhook URL`, `Bot Token` ni IDs sensibles en archivos versionados.
- Para demos internas, usa overrides locales no trackeados o configura credenciales directamente desde el editor.
