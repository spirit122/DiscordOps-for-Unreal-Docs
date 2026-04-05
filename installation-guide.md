# Installation Guide

## Win64-First Release Target

This version of `DiscordOps for Unreal` is validated for `UE 5.7` on `Win64`.

## Install from Epic Games Launcher

1. Close Unreal Editor.
2. Download or install `DiscordOps for Unreal` from the Epic Games Launcher.
3. Choose the Unreal Engine version you want to use.
4. Install the plugin for that engine version.
5. Open your Unreal project with that engine version.
6. Go to `Edit > Plugins`.
7. Search for `DiscordOps`.
8. Enable the plugin if it is not already enabled.
9. Restart the editor if Unreal asks for it.
10. Confirm that these entries appear:
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

## Manual Install Note

If you are not using the Epic Games Launcher flow, a manual install is still possible, but that is not the primary installation path for store customers.

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
