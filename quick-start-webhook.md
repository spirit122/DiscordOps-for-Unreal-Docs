# 5-Minute Quick Start

## Goal

Send a bug report or QA report to Discord in less than five minutes using `webhook mode`, without touching code.

## Steps

1. Install `DiscordOps for Unreal` from the Epic Games Launcher.
2. Select the Unreal Engine version you want to use and install the plugin for that version.
3. Open your Unreal project.
4. Go to `Edit > Plugins`.
5. Search for `DiscordOps` and enable it.
6. Restart the editor if Unreal asks for it.
7. Open `Window > DiscordOps` and confirm the widget appears.
8. Create a webhook in the Discord channel where you want reports to arrive.
9. Open `Edit > Project Settings > Plugins > DiscordOps`.
10. Paste the default `Webhook URL`.
11. If you want separate destinations, fill in `QAWebhookUrl`, `BugsWebhookUrl`, `CommunitySupportWebhookUrl`, or `InternalTestingWebhookUrl`.
12. Use a `Username Override` that does not contain the word `Discord`, for example `Ops Reporter`.
13. Enable screenshots, logs, and metadata.
14. Return to `Window > DiscordOps`.
15. In `Webhook Quick Setup`, choose the preset you want to configure, paste the URL, and press `Save Local Webhook`.
16. Press `Validate Setup`.
17. Press `Live Validate` to confirm real reachability.
18. Press `Send Demo Report` or `Send Test Report`.

## Expected Result

Discord should receive:

- an embed with title and description
- template, category, and severity
- project, engine, platform, timestamp, and execution mode
- a screenshot when a real viewport is available
- a log snippet when enabled
- an auto-generated report ID when that option is enabled

## Fast Runtime Flow

1. Add `UDiscordOpsRuntimeReportWidget` to your HUD or create an instance from your `PlayerController`.
2. Run the game.
3. Press `Validate Setup` or `Live Validate`.
4. Press `Send Demo Report`.

## Recommended Blueprint Usage

- Use `Build Template Report Request` to start from `Crash`, `Gameplay Bug`, `Visual Bug`, `Performance`, `QA Pass`, or `QA Fail`.
- Use `DestinationPreset` to route to `QA`, `Bugs`, `Community Support`, or `Internal Testing`.
- Use `CustomFields` for ticket number, branch, tester, or hardware details.
- Enable `bCreateThread` only when `bot mode` is configured.

## Important Screenshot Note

- In `Editor-Cmd` or any context without a viewport, the report is sent with a warning and no image.
- In `PIE`, `Standalone`, or `packaged runtime`, the screenshot can be attached for real when a `GameViewport` exists.
