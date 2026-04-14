# Usage Guide

## Goal

Use DiscordOps with the current compact panel workflow: configure a destination, validate the route, and send a focused report.

## Basic flow

1. Install `DiscordOps for Unreal` and enable the plugin in Unreal.
2. Create a Discord webhook in the channel that should receive reports.
3. Open Unreal and go to `Window > DiscordOps`.
4. In `Route Setup`, choose `Default`, `QA`, `Bugs`, or a custom destination.
5. Paste the webhook into `Local Webhook Override`.
6. Click `Save Local Webhook`.
7. Click `Validate Setup`.
8. Fill the report in the `Report` section.
9. Click `Send Report`.

## Route Setup

Use `Route Setup` to control where the report goes.

- choose the destination
- paste the webhook into `Local Webhook Override`
- click `Save Local Webhook`
- click `Validate Setup`

## Report section

Use `Report` to send only the details that matter:

- choose a `Template`
- write a short `Title`
- write a concise `Description`
- optionally add a `Video / Reference Link`
- optionally attach a screenshot or recent log

## Custom destinations

If you need a dedicated custom route:

1. Enter a name in `New Destination > Label`
2. Click `Save Destination`
3. Select that destination in `Route Setup`
4. Paste its webhook in `Local Webhook Override`
5. Click `Save Local Webhook`

Important:

- custom destinations do not fall back to the default route when they have no webhook
- always run `Validate Setup` before sending to a new destination

## Expected result

Discord should receive a compact report that can include:

- title and description
- category and severity from the selected template
- report ID
- optional screenshot attachment
- optional recent log snippet
- optional reference link preview

## Runtime note

Runtime reporting support exists, but the fastest onboarding flow is the editor panel. Validate the route there first, then use runtime widgets or Blueprint flows when your route is already confirmed.
