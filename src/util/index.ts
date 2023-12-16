import path from "path";
import { Preferences, SupportedBrowsers } from "../interfaces";
import { getPreferenceValues } from "@raycast/api";
import { defaultProfilePathChrome, defaultProfilePathSidekick } from "../constants";
import { AccountType } from "../search-history";

const userLibraryDirectoryPath = () => {
  if (!process.env.HOME) {
    throw new Error("$HOME environment variable is not set.");
  }

  return path.join(process.env.HOME, "Library");
};

export const getHistoryDbPath = (browser: SupportedBrowsers, account: AccountType) => {
  const { profilePathChrome, profilePathSidekick } = getPreferenceValues<Preferences>();
  const userDataDirectory = userLibraryDirectoryPath();

  switch (browser) {
    case SupportedBrowsers.Chrome:
      return profilePathChrome
        ? path.join(profilePathChrome, "History")
        : path.join(userDataDirectory, ...defaultProfilePathChrome);
    case SupportedBrowsers.Sidekick:
      return profilePathSidekick && account === "profile"
        ? path.join(profilePathSidekick, "History")
        : path.join(userDataDirectory, ...defaultProfilePathSidekick);
    default:
      throw new Error("Unsupported browser.");
  }
};

export const getHistoryTable = (): string => {
  return "urls";
};

export const getHistoryDateColumn = (): string => {
  return "last_visit_time";
};
