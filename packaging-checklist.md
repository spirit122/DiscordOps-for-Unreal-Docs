# Packaging Checklist

## What We Took from the Fab Reference Material

The reference material used during this review was useful for two things:

- automating parts of the publisher workflow
- documenting practical limits for the listing and the final zip structure

It should not be copied into the Unreal plugin that customers receive. That includes:

- `.claude-plugin/`
- `commands/`
- `skills/`
- internal publisher snippets
- portal-specific automation files

That material is useful for the seller, not as part of the final product.

## Zip Structure for Fab

The final zip should contain a single plugin root folder:

```text
DiscordOps_v1.0.0_Fab_Win64.zip
\-- DiscordOps/
    +-- DiscordOps.uplugin
    +-- Config/
    +-- Content/        (only if it exists)
    +-- Resources/      (only if it exists)
    +-- Shaders/        (only if it exists)
    \-- Source/
```

The packaging workflow already follows this rule and builds from a clean plugin source before running the final package step.

## Exclude from the Final Zip

These items should not be included in the Fab package:

- `Binaries/`
- `Intermediate/`
- `Saved/`
- `.git/`
- `.gitattributes`
- `.gitignore`
- `README.md`
- `Docs/`
- `Scripts/`
- any unrelated folder at the root of the workspace

## Before Publishing

- Verify the plugin build with `RunUAT BuildPlugin`.
- Compile a real project with the plugin installed.
- Create a demo project and an example map with the bug reporting flow.
- Capture real listing media showing:
  - setup validation
  - sending a test report
  - a report with a screenshot
  - a report with output log
- Review the Fab listing text:
  - main value: QA + bug reporting
  - webhook-first
  - editor + runtime
  - Blueprint-first
- Include screenshots of Project Settings, Blueprint nodes, and the editor panel.

## Useful Listing Limits

These limits are practical constraints worth remembering while preparing the final listing:

- title: `80` characters
- description: `10,000` HTML characters
- technical details: `1,900` HTML characters
- tags: `25`
- changelog: `2,000`
- FAQ: `20` entries
- media images: `1920x1080`, `jpg/jpeg/png`, under `3 MB`

## Current Source Limitations

- This public documentation package does not include `.uasset` files or a demo map created in Unreal Editor.
- Listing media must be captured after compiling and installing the plugin in a real example project.
- The Fab package should contain only the plugin; documentation and production material should stay outside the customer zip.
