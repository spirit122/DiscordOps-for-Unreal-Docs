# Validation Checklist

## Technical

- `Validate Discord Setup` returns valid for a real webhook
- `Validate Discord Setup` returns invalid for empty config
- an invalid webhook path returns a clear failure without crashing
- an invalid default webhook no longer fakes a valid route
- `Send Discord Message` posts successfully
- `Send Bug Report` works with text only
- `Send QA Report` works with text and metadata
- `Capture And Send Screenshot` sends image evidence when a real viewport exists
- `Send Output Log Snippet` sends a readable log preview and attachment
- preset-specific webhook routes work without a default webhook
- `Replay Last` resends the latest report
- `Live Validate` reports useful messages such as `Unknown Webhook` and missing permissions
- a packaged Win64 runtime build can send a report

## Automated Validation Currently Covered in the Local Demo Harness

- `Validate Setup (Valid Webhook)`
- `Send Discord Message`
- `Send Bug Report (Text Only)`
- `Send Output Log Snippet`
- `Capture And Send Screenshot`
- `Send QA Report (Screenshot + Log + Metadata)`
- `Validate Setup (Invalid Webhook Format)`
- `Validate Setup (Missing Transport)`
- `Send Discord Message (Editor Disabled Gate)`
- `Send Discord Message (Rejected Webhook)`
- `Validate Setup (QA Preset Route Only)`
- `Live Validate (QA Preset Route)`
- `Send QA Report (QA Preset Route)`
- `Replay Recent History (Last Report)`
- `DiscordOpsDemo.RunViewportValidation` for packaged or standalone viewport proof

## Manual and Semi-Manual Launch Helpers

- `DiscordOpsDemo.SendLiveValidation`
- `DiscordOpsDemo.RunDeepValidation`
- `DiscordOpsDemo.RunViewportValidation`
- `DiscordOpsDemo.RunPIEViewportValidation` for editor-side experimentation

## Commercial

- README included in the plugin package
- installation guide included
- quick start included
- settings reference included
- troubleshooting included
- listing copy drafted
- media shot list drafted

## Launch Gating

- If Mac or Linux have not been validated with real smoke tests, do not claim them as supported in the Fab listing.
- Do not publish with real webhook or bot credentials inside the package.
- Before Fab launch, capture one real screenshot from `PIE` or `packaged runtime` with a visible PNG attachment in Discord.
