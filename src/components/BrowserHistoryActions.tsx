import { Action, ActionPanel, getPreferenceValues, Icon, openCommandPreferences } from "@raycast/api";
import { openNewTab } from "../actions";
import { HistoryEntry, Preferences, SupportedBrowsers } from "../interfaces";

export class BrowserHistoryActions {
  public static HistoryItem = HistoryItemAction;
  public static OpenPreferences = ActionOpenPreferences;
}

function HistoryItemAction({ entry: { url, browser } }: { entry: HistoryEntry }) {
  const { defaultBrowser } = getPreferenceValues<Preferences>();
  const actions = {
    [SupportedBrowsers.Chrome]: (
      <ActionPanel.Item
        title={"Open in Chrome"}
        icon={"chrome-logo.png"}
        shortcut={{ modifiers: ["cmd"], key: "c" }}
        onAction={() => openNewTab(SupportedBrowsers.Chrome, url)}
      />
    ),
    [SupportedBrowsers.Sidekick]: (
      <ActionPanel.Item
        title={"Open in Sidekick"}
        icon={"sidekick-logo.png"}
        shortcut={{ modifiers: ["cmd"], key: "c" }}
        onAction={() => openNewTab(SupportedBrowsers.Sidekick, url)}
      />
    ),
  };
  return (
    <ActionPanel>
      {defaultBrowser && defaultBrowser !== "Default" ? (
        defaultBrowser == "Originator" ? (
          actions[browser]
        ) : (
          actions[defaultBrowser]
        )
      ) : (
        <Action.OpenInBrowser title="Open in Default Browser" url={url} />
      )}

      <ActionPanel.Section title={"Copy"}>
        <Action.CopyToClipboard title="Copy URL" content={url} shortcut={{ modifiers: ["cmd", "shift"], key: "c" }} />
      </ActionPanel.Section>
      <ActionPanel.Section title={"Open In"}>{actions[SupportedBrowsers.Chrome]}</ActionPanel.Section>
      <ActionPanel.Section title={"Open In"}>{actions[SupportedBrowsers.Sidekick]}</ActionPanel.Section>
    </ActionPanel>
  );
}

function ActionOpenPreferences() {
  return (
    <ActionPanel.Section>
      <Action
        icon={Icon.Gear}
        title="Open Command Preferences"
        shortcut={{ modifiers: ["cmd"], key: "," }}
        onAction={openCommandPreferences}
      />
    </ActionPanel.Section>
  );
}
