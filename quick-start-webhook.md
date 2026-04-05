# 5-Minute Quick Start

## Goal

Send a bug report or QA report to Discord in less than five minutes using `webhook mode`, without touching code.

## Steps

1. Create a webhook in the Discord channel where you want reports to arrive.
2. Install the plugin in `Plugins/DiscordOps`.
3. Open `Project Settings > Plugins > DiscordOps`.
4. Paste the default `Webhook URL`.
5. If you want separate destinations, fill in `QAWebhookUrl`, `BugsWebhookUrl`, `CommunitySupportWebhookUrl`, or `InternalTestingWebhookUrl`.
6. Use a `Username Override` that does not contain the word `Discord`, for example `Ops Reporter`.
7. Enable screenshots, logs, and metadata.
8. Open `Window > DiscordOps`.
9. In `Webhook Quick Setup`, choose the preset you want to configure, paste the URL, and press `Save Local Webhook`.
10. Press `Validate Setup`.
11. Press `Live Validate` to confirm real reachability.
12. Press `Send Demo Report` or `Send Test Report`.

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
