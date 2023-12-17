/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-history` command */
  export type SearchHistory = ExtensionPreferences & {
  /** First in results - Which browser history shows up first in results */
  "firstInResults"?: "Chrome" | "Sidekick",
  /** Default browser to open in - Which browser opens upon pressing enter on an entry */
  "defaultBrowser"?: "Default" | "Originator" | "Chrome" | "Sidekick",
  /** Browsers - Enable Chrome history to show up in results */
  "enableChrome": boolean,
  /**  - Enable Firefox history to show up in results */
  "enableSidekick": boolean,
  /** Chrome Profile Path - Path to Chrome profile folder. Leave empty to use default profile. Default at /Users/username/Library/Application Support/Google/Chrome/Default */
  "profilePathChrome"?: string,
  /** Sidekick Profile Path - Path to Sidekick profile folder. Leave empty to use default profile. Default at /Users/username/Library/Application Support/Sidekick/Default */
  "profilePathSidekick"?: string
}
}

declare namespace Arguments {
  /** Arguments passed to the `search-history` command */
  export type SearchHistory = {}
}


