# Troubleshooting

## `Validate Discord Setup` returns invalid

Check for:

- an empty `Webhook URL`
- a URL that does not point to `discord.com/api/webhooks/...`
- a preset destination with no valid webhook and no default fallback
- an empty `Bot Token` while `Enable Bot Mode` is enabled
- an empty or non-numeric `Bot Channel ID`
- both runtime and editor reports being disabled

## `Live Validate` returns a clear error

Common messages:

- `Unknown Webhook`: the webhook was deleted, the URL is broken, or it points to an old destination.
- `Bot is missing access or permissions`: the bot exists, but it cannot post in that channel.
- `Bot token is invalid`: the token is wrong or incomplete.
- `Discord validation failed before a response was received`: local network issue or no reply from Discord.
- `rate-limited`: Discord replied, but the request hit a rate limit.

## The screenshot is not attached

Possible causes:

- there is no active `GameViewport`
- the project is running in a context without capture support, such as `Editor-Cmd`
- PNG serialization failed

Expected plugin behavior:

- the report is still sent
- a clear warning is returned
- `PIE`, `Standalone`, and `packaged runtime` are the best contexts for validating a real image attachment

## Runtime without the editor

The base workflow does not depend on the editor.

If a runtime build does not send reports:

- confirm `Enable Runtime Reports`
- confirm network connectivity
- confirm that the webhook is valid

## Discord HTTP error

Common cases:

- `401/403`: invalid token or missing permissions in bot mode
- `404`: deleted webhook or incorrect URL
- `429`: rate limit
- `5xx`: Discord responded with a service-side error

The plugin should not crash and should return a readable error message.

## Threads are not created

Check:

- `bCreateThread` is enabled in the request
- `Enable Bot Mode` is enabled
- token and channel are valid
- the bot has permission to create threads

In `webhook mode`, the report is still sent, but DiscordOps returns a warning because follow-up threads require `bot mode`.

## The report goes to the wrong channel

Check:

- the request `DestinationPreset`
- the dedicated webhook or bot channel for that preset
- fallback to the default `Webhook URL` when the preset has no valid override
- `Webhook Quick Setup`, because it now stores data per preset

## Ensure or crash marker reports do not arrive

Check:

- `bEnableEnsureReports`
- `bEnableCrashMarkerReports`
- `bAutoSendPendingCrashReportsOnStartup`
- startup connectivity, because crash markers retry on the next launch

## Sensitive credentials

- do not store secrets in versioned files
- use untracked local configuration for demos and internal testing
- if you package a demo project, inject the `.local.ini` only into the private test copy, not into the public package
