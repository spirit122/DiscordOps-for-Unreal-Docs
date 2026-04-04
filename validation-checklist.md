# Validation Checklist

## Technical

- `Validate Discord Setup` returns valid for a real webhook
- `Validate Discord Setup` returns invalid for empty config
- invalid webhook path returns clear failure without crash
- invalid default webhook does not fake a valid route anymore
- `Send Discord Message` posts successfully
- `Send Bug Report` works with text only
- `Send QA Report` works with text + metadata
- `Capture And Send Screenshot` sends image evidence when a real viewport exists
- `Send Output Log Snippet` sends readable log preview and attachment
- preset-specific webhook routes work without a default webhook
- `Replay Last` resends the latest report
- `Live Validate` reports useful messages like `Unknown Webhook` and missing permissions
- runtime packaged Win64 build can send a report

## Automated validation currently covered in the local demo harness

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

## Manual and semi-manual launch helpers

- `DiscordOpsDemo.SendLiveValidation`
- `DiscordOpsDemo.RunDeepValidation`
- `DiscordOpsDemo.RunViewportValidation`
- `DiscordOpsDemo.RunPIEViewportValidation` for editor-side experimentation

## Commercial

- README included in plugin package
- installation guide included
- quick start included
- settings reference included
- troubleshooting included
- listing copy drafted
- media shot list drafted

## Launch Gating

- If Mac/Linux are not validated with real smoke tests, do not claim them as released support in the Fab listing.
- Do not publish with real webhook or bot credentials inside the package.
- Before Fab launch, capture one real screenshot from `PIE` or `packaged runtime` with a PNG attachment visible in Discord.
