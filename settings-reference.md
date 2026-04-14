# Settings Reference

This page intentionally focuses on the settings that matter most for normal setup and day-to-day use.

## Start here

For most teams, the essential path is simple:

1. choose a destination in `Route Setup`
2. paste a webhook into `Local Webhook Override`
3. click `Save Local Webhook`
4. click `Validate Setup`
5. fill the report and click `Send Report`

## Most important settings

### `Destination`

- Selects where the report should go
- common choices are `Default`, `QA`, `Bugs`, or a custom destination

### `Local Webhook Override`

- The webhook URL used by the currently selected destination
- this is the main setting most users need
- each destination can keep its own local webhook

### `Save Local Webhook`

- Saves the webhook for the currently selected destination
- use this after pasting or replacing a URL

### `Validate Setup`

- Verifies the currently selected route before sending
- use this every time you configure a new destination

### `Live Check`

- Fast route check for the selected destination
- use it after `Validate Setup` when you want one more confirmation

## Report settings that matter most

### `Template`

- Chooses the report style, such as `Custom` or `Crash`

### `Title`

- Short summary of the issue

### `Description`

- Write only the details the team needs to act on

### `Video / Reference Link`

- Optional external link for context
- useful for YouTube clips, repro references, or supporting material

### `Attach editor screenshot on send`

- Adds the current editor screenshot when available

### `Attach log`

- Adds a recent log snippet as an attachment

## Recommended defaults

These settings are usually the best defaults to keep enabled:

- screenshot capture
- log attachment
- project metadata
- editor reports
- runtime reports
- sensitive data redaction

## Optional advanced settings

Most users can ignore these at first:

- `Bot mode`
- follow-up thread creation
- ensure/crash automation
- extra privacy redaction lists
- advanced destination routing outside the normal panel workflow

If your main goal is to get working fast, stay on the compact panel workflow first and only expand into advanced settings when your route is already validated.
