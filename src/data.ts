import {
  DropDownOption,
  ClearProxyEnum,
  ExportProxyEnum,
  TestProxyEnum,
} from './types';

export const clearProxySetting: DropDownOption[] = [
  { text: 'Clear all proxies', value: ClearProxyEnum.CLEAR_ALL },
  { text: 'Clear failed proxies', value: ClearProxyEnum.CLEAR_FAILED },
  { text: 'Ping > 3 seconds', value: ClearProxyEnum.PING_OVER_3 },
  { text: 'Ping > 5 seconds', value: ClearProxyEnum.PING_OVER_5 },
];

export const exportProxySetting: DropDownOption[] = [
  { text: 'All working proxies', value: ExportProxyEnum.EXPORT_WORKING },
  { text: 'all proxies', value: ExportProxyEnum.EXPORT_ALL },
  { text: 'Ping < 3 seconds', value: ExportProxyEnum.PING_UNDER_3 },
  { text: 'Ping < 5 seconds', value: ExportProxyEnum.PING_UNDER_5 },
];

export const testProxySettings: DropDownOption[] = [
  { text: 'Test 3 random proxies', value: TestProxyEnum.TEST_3 },
  { text: 'Test 5 random proxies', value: TestProxyEnum.TEST_5 },
  { text: 'Test all proxies', value: TestProxyEnum.TEST_5 },
];

export const sitesSettings: DropDownOption[] = [
  { text: 'Amazon', value: 'https://www.amazon.com' },
  { text: 'Target', value: 'https://www.target.com' },
  { text: 'Walmart', value: 'https://www.walmart.com' },
];
