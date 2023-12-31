import { ReactNode } from "react";

export interface Preferences {
  readonly enableChrome: boolean;
  readonly enabaleSidekick: boolean;
  readonly profilePathChrome?: string;
  readonly profilePathSidekick?: string;
  readonly firstInResults: SupportedBrowsers;
  readonly defaultBrowser?: SupportedBrowsers & "Default";
}

export interface SearchResult {
  readonly browser: SupportedBrowsers;
  readonly isLoading: boolean;
  readonly permissionView?: ReactNode;
  readonly data?: HistoryEntry[] | undefined;
}
export interface HistoryEntry {
  readonly id: string;
  readonly url: string;
  readonly title: string;
  readonly lastVisited: Date;
  readonly browser: SupportedBrowsers;
}

export enum SupportedBrowsers {
  Chrome = "Chrome",
  Sidekick = "Sidekick",
}

export type HistoryQueryFunction = (
  table: string,
  date_field: string,
  terms: string[]
) => string;
