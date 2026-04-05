# Blueprint Workflow

## Recommended Bug Report Flow

1. Collect the title and description from your UI or debug tool.
2. Use `Build Template Report Request` if you want to start from `Gameplay Bug`, `Visual Bug`, or `Crash`.
3. Fill in tags, severity, and category.
4. Choose a `DestinationPreset` such as `Bugs`, `QA`, `Community Support`, or `Internal Testing`.
5. Decide whether to attach a screenshot.
6. Decide whether to attach a log snippet.
7. Add `CustomFields` for branch, ticket, tester, or hardware details.
8. Call `Send Bug Report`.
9. In `OnSuccess`, show a confirmation to the user or tester.
10. In `OnFailure`, show a readable error message and log any warnings.

## Recommended QA Report Flow

1. Collect a session summary.
2. Add extra context:
   - feature area
   - build label
   - tester
   - branch or ticket
3. Decide whether this is `QA Pass` or `QA Fail`.
4. Use `CustomFields` for test cases, branch, milestone, or platform.
5. Enable `bCreateThread` if you want automatic follow-up in `bot mode`.
6. Call `Send QA Report`.
7. Use `Capture And Send Screenshot` when visual evidence matters most.
8. Use `Send Output Log Snippet` for quick errors without creating a separate flow.

## Reusable Runtime Widget

The plugin already includes `UDiscordOpsRuntimeReportWidget` so you can drop reporting into any game without building a UI from scratch.

Recommended usage:

1. Create the widget from your `PlayerController`, HUD, or debug menu.
2. Expose `Validate Setup`, `Live Validate`, `Send Demo Report`, `Send Bug Report`, `Send QA Report`, `Capture Screenshot`, `Send Log Snippet`, and `Replay Last`.
3. Use that widget for demos, internal builds, or QA support.

## Public v1 Nodes

- `Validate Discord Setup`
- `Get DiscordOps Status`
- `Get DiscordOps Destinations`
- `Get DiscordOps Report Templates`
- `Get Recent DiscordOps History`
- `Build Template Report Request`
- `Build Bug Report Payload`
- `Build QA Report Payload`
- `Build Discord Embed Payload`
- `Send Discord Message`
- `Send Discord Embed`
- `Send Bug Report`
- `Send QA Report`
- `Capture And Send Screenshot`
- `Send Output Log Snippet`
