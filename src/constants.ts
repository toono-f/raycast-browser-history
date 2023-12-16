import { SupportedBrowsers } from "./interfaces";

export const defaultProfilePathChrome = ["Application Support", "Google", "Chrome", "Default", "History"];
export const defaultProfilePathSidekick = ["Application Support", "Sidekick", "Default", "History"];

const DownloadTextChrome = `
  # 🚨Error: Google Chrome browser is not installed
  ## This extension depends on Google Chrome browser. You must install it to continue.

  If you have [Homebrew](https://brew.sh/) installed then press ⏎ (Enter Key) to install Google Chrome browser.

  [Click here](https://www.google.com/chrome/) if you want to download manually.

  [![Google Chrome](https://www.google.com/chrome/static/images/chrome-logo-m100.svg)]()
`;

const DownloadTextSidekick = `
  # 🚨Error: Sidekick browser is not installed
  ## This extension depends on Sidekick browser. You must install it to continue.

  If you have [Homebrew](https://brew.sh/) installed then press ⏎ (Enter Key) to install Sidekick browser.

  [Click here](https://www.meetsidekick.com/) if you want to download manually.

  [![Sidekick](https://www.meetsidekick.com/wp-content/uploads/2021/12/cropped-Frame-8505-180x180.png)]()
`;

export const DOWNLOAD_TEXT = {
  [SupportedBrowsers.Chrome]: DownloadTextChrome,
  [SupportedBrowsers.Sidekick]: DownloadTextSidekick,
};

export const INSTALL_COMMAND = {
  [SupportedBrowsers.Chrome]: "brew cask install google-chrome",
  [SupportedBrowsers.Sidekick]: "brew cask install sidekick",
};

export const UnknownErrorText = `
  # 🚨Error: Something happened while trying to run your command
`;

export const DEFAULT_ERROR_TITLE = "An Error Occurred";

export const NOT_INSTALLED_MESSAGE = "Browser not installed";
