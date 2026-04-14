# 5-Minute Quick Start

## Goal

Send a bug report or QA report to Discord in under 5 minutes using the current webhook-based setup flow and the compact editor panel.

## Steps

1. Install `DiscordOps for Unreal` and enable the plugin in Unreal.
2. Create a Discord webhook in the channel that should receive reports.
3. Open Unreal and go to `Window > DiscordOps`.
4. In `Route Setup`, choose `Default`, `QA`, `Bugs`, or a custom destination.
5. Paste the webhook into `Local Webhook Override`.
6. Click `Save Local Webhook`.
7. Click `Validate Setup`.
8. Fill the report in the `Report` section.
9. Click `Send Report`.

## Visual flow

<div class="doc-gallery">
  <figure>
    <img src="Images/02-webhook-creation-and-route-setup.png" alt="Discord webhook creation and DiscordOps Route Setup section" />
    <figcaption>Step 1: create the webhook in Discord and save it in Route Setup.</figcaption>
  </figure>
  <figure>
    <img src="Images/03-report-section.png" alt="DiscordOps report section" />
    <figcaption>Step 2: fill the report and send only the context the team needs.</figcaption>
  </figure>
</div>

## Expected result

Discord should receive a compact report that can include:

- title and description
- category and severity from the selected template
- report ID
- optional screenshot attachment
- optional recent log snippet
- optional reference link preview

## Custom destination flow

If you want a dedicated custom route:

1. Enter a name in `New Destination > Label`
2. Click `Save Destination`
3. Select that destination in `Route Setup`
4. Paste its webhook in `Local Webhook Override`
5. Click `Save Local Webhook`

Important:

- custom destinations do not fall back to the default route when they have no webhook
- `Validate Setup` should pass before sending

## Runtime note

Runtime reporting support exists, but the fastest onboarding flow is the editor panel. Validate the route there first, then use runtime widgets or Blueprint flows when your route is already confirmed.
