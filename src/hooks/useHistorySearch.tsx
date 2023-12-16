import { existsSync } from "fs";
import { useSQL } from "@raycast/utils";
import {
  HistoryEntry,
  HistoryQueryFunction,
  SearchResult,
  SupportedBrowsers,
} from "../interfaces";
import {
  getHistoryDateColumn,
  getHistoryDbPath,
  getHistoryTable,
} from "../util";
import { NotInstalledError } from "../components";
import { AccountType } from "../search-history";

const whereClauses = (tableTitle: string, terms: string[]) => {
  return terms.map((t) => `${tableTitle}.title LIKE '%${t}%'`).join(" AND ");
};

const getChromiumGeckoHistoryQuery = (
  table: string,
  date_field: string,
  terms: string[]
) => `SELECT
    id, url, title,
    datetime(${date_field} / 1000000 + (strftime('%s', '1601-01-01')), 'unixepoch', 'localtime') as lastVisited
  FROM ${table}
  WHERE ${whereClauses(table, terms)}
  ORDER BY ${date_field} DESC LIMIT 50;`;

const getHistoryQuery = (): HistoryQueryFunction => {
  return getChromiumGeckoHistoryQuery;
};

const searchHistory = (
  browser: SupportedBrowsers,
  table: string,
  date_field: string,
  queryBuilder: (table: string, date_field: string, terms: string[]) => string,
  account: AccountType,
  query?: string
): SearchResult => {
  const terms = query ? query.trim().split(" ") : [""];
  const queries = queryBuilder(table, date_field, terms);
  const dbPath = getHistoryDbPath(browser, account);

  if (!existsSync(dbPath)) {
    return {
      browser,
      data: [],
      isLoading: false,
      permissionView: <NotInstalledError browser={browser} />,
    };
  }

  const { data, isLoading, permissionView } = useSQL<HistoryEntry>(
    dbPath,
    queries
  );
  return {
    browser,
    data: data?.map((d) => ({
      ...d,
      id: `${browser}-${d.id}`,
      browser: browser,
    })),
    isLoading,
    permissionView,
  };
};

export function useHistorySearch(
  browser: SupportedBrowsers,
  query: string | undefined,
  account: AccountType
): SearchResult {
  return searchHistory(
    browser,
    getHistoryTable(),
    getHistoryDateColumn(),
    getHistoryQuery(),
    account,
    query
  );
}
