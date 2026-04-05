# Settings Reference

## Discord Webhook

### `Webhook URL`

- Required for the main v1 workflow.
- Must point to a real Discord webhook endpoint.
- Acts as the default route when a preset does not have its own override.

### `Default Channel Label`

- Logical name shown in the payload.
- Recommended default: `QA Reports`.

### `Username Override`

- Applies only in webhook mode.
- Recommended default: `Ops Reporter`.
- Discord rejects usernames that contain the word `Discord`.

### `Icon URL Override`

- Optional.
- Applies only in webhook mode.

## Destinations

### `QADestinationLabel`

- Label shown for the `QA` preset.
- Recommended default: `QA Reports`.

### `QAWebhookUrl`

- Dedicated override for the `QA` preset.
- If empty, it falls back to the default `Webhook URL`.

### `BugsDestinationLabel`

- Label shown for the `Bugs` preset.
- Recommended default: `Bug Reports`.

### `BugsWebhookUrl`

- Dedicated override for the `Bugs` preset.

### `CommunitySupportDestinationLabel`

- Label shown for the `Community Support` preset.

### `CommunitySupportWebhookUrl`

- Dedicated override for the `Community Support` preset.

### `InternalTestingDestinationLabel`

- Label shown for the `Internal Testing` preset.

### `InternalTestingWebhookUrl`

- Dedicated override for the `Internal Testing` preset.

## Capture

### `Enable Screenshot Capture`

- Default: `true`.
- If capture fails, the report is still sent with a warning.

### `Enable Log Attachment`

- Default: `true`.
- Attaches a log snippet and a `.txt` file when appropriate.

### `Max Attached Log Lines`

- Default: `120`.
- Suggested current range: `10-500`.

## Metadata

### `Include Project Metadata`

- Default: `true`.
- Includes project, version, engine, platform, map, mode, and build configuration.

## Privacy

### `Enable Sensitive Data Redaction`

- Default: `true`.
- Cleans sensitive information before sending text or logs.

### `bRedactFilePaths`

- Default: `true`.
- Replaces known local file paths with placeholders.

### `bRedactUserNames`

- Default: `true`.
- Replaces the local username when it appears in logs or extra text.

### `AdditionalSensitiveTerms`

- Extra list of terms to hide in text, context, and logs.

## Reports

### `bAutoGenerateReportIds`

- Default: `true`.
- Generates IDs such as `BUG-0001`, `QA-0004`, or `CRASH-0002`.

### `MaxStoredHistoryEntries`

- Default: `25`.
- Limits recent history and replay storage so the list does not grow forever.

## Bot

### `Enable Bot Mode`

- Default: `false`.
- In v1.1 this covers validation, delivery to dedicated channels, and follow-up threads.

### `Bot Token`

- Required when `Enable Bot Mode` is enabled.

### `Bot Guild ID`

- Optional in the current transport flow.
- Recommended for future compatibility.

### `Bot Channel ID`

- Required when `Enable Bot Mode` is enabled.

### `QABotChannelId`

- Dedicated override for the `QA` channel.

### `BugsBotChannelId`

- Dedicated override for the `Bugs` channel.

### `CommunitySupportBotChannelId`

- Dedicated override for the `Community Support` channel.

### `InternalTestingBotChannelId`

- Dedicated override for the `Internal Testing` channel.

### `bAllowThreadCreationInBotMode`

- Default: `true`.
- Allows a follow-up thread when `bCreateThread` is enabled in the report request.

### `ThreadAutoArchiveDurationMinutes`

- Default: `1440`.
- Current range: `60-10080`.
- Applies only in `bot mode`.

## Runtime / Editor

### `Enable Runtime Reports`

- Default: `true`.
- Must stay enabled for packaged builds.

### `Enable Editor Reports`

- Default: `true`.
- Enables the editor panel and delivery from the editor.

## Automation

### `bEnableEnsureReports`

- Default: `true`.
- When Unreal fires an `ensure`, DiscordOps attempts to send an automatic follow-up report.

### `bEnableCrashMarkerReports`

- Default: `true`.
- Stores a local marker after a fatal error so it can be reported on the next startup.

### `bAutoSendPendingCrashReportsOnStartup`

- Default: `true`.
- Retries the pending crash marker on the next project start.
