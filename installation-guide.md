# Installation Guide

## Win64-First Release Target

This version of `DiscordOps for Unreal` is validated for `UE 5.7` on `Win64`.

## Install as a Project Plugin

1. Close Unreal Editor.
2. Copy the `DiscordOps` folder into `YourProject/Plugins/DiscordOps`.
3. Open the `.uproject`.
4. If Unreal asks to build the plugin, allow it.
5. Confirm that these entries appear:
   - `Edit > Project Settings > Plugins > DiscordOps`
   - `Window > DiscordOps`

## Minimum v1 Configuration

1. Open `Project Settings > Plugins > DiscordOps`.
2. Paste a valid Discord `Webhook URL`.
3. Adjust `Default Channel Label` if you want a friendlier destination name.
4. Leave these enabled:
   - `Enable Screenshot Capture`
   - `Enable Log Attachment`
   - `Include Project Metadata`
   - `Enable Runtime Reports`
   - `Enable Editor Reports`
5. Save the settings.
6. Open `Window > DiscordOps`.
7. Run `Validate Setup`.
8. Run `Send Test Report`.

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
