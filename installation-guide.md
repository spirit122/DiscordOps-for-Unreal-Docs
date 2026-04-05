# Installation Guide

## Win64-First Release Target

This version of `DiscordOps for Unreal` is validated for `UE 5.7` on `Win64`.

## Install in the Unreal Engine

1. Close Unreal Editor.
2. Copy the `DiscordOps` folder into your Unreal Engine plugin location.
3. Open your Unreal project.
4. Go to `Edit > Plugins`.
5. Search for `DiscordOps`.
6. Enable the plugin.
7. Restart the editor if Unreal asks for it.
8. Confirm that these entries appear:
   - `Edit > Project Settings > Plugins > DiscordOps`
   - `Window > DiscordOps`

## Minimum v1 Configuration

1. Open `Window > DiscordOps` and confirm the widget appears.
2. Open `Edit > Project Settings > Plugins > DiscordOps`.
3. Paste a valid Discord `Webhook URL`.
4. Adjust `Default Channel Label` if you want a friendlier destination name.
5. Leave these enabled:
   - `Enable Screenshot Capture`
   - `Enable Log Attachment`
   - `Include Project Metadata`
   - `Enable Runtime Reports`
   - `Enable Editor Reports`
6. Save the settings.
7. Return to `Window > DiscordOps`.
8. Run `Validate Setup`.
9. Run `Send Test Report`.

## What You Should See

After the plugin is enabled correctly:

- `DiscordOps` appears in the Unreal plugin list
- `Edit > Project Settings > Plugins > DiscordOps` becomes available
- `Window > DiscordOps` opens the plugin widget

## Bot Mode

`Bot mode` is optional in v1.

Configure it only if you need to validate the equivalent delivery path:

1. Enable `Enable Bot Mode`.
2. Fill in `Bot Token`.
3. Fill in `Bot Channel ID`.
4. Fill in `Bot Guild ID` if your internal workflow needs it.
5. Run `Validate Setup`.

## Security

- Do not commit `Webhook URL`, `Bot Token`, or sensitive IDs in versioned files.
- For internal demos, use untracked local overrides or configure credentials directly from the editor.
