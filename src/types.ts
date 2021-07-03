export enum ClearProxyEnum {
  CLEAR_ALL = 1,
  CLEAR_FAILED = 2,
  PING_OVER_3 = 3,
  PING_OVER_5 = 4,
}

export enum ExportProxyEnum {
  EXPORT_WORKING = 1,
  EXPORT_ALL = 2,
  PING_UNDER_3 = 3,
  PING_UNDER_5 = 4,
}

export enum TestProxyEnum {
  TEST_3 = 1,
  TEST_5 = 2,
  TEST_ALL = 3,
}

export type DropDownOption = {
  text: string;
  value: ClearProxyEnum | ExportProxyEnum | TestProxyEnum | string;
};

export type Proxy = {
  ip: string;
  port: string;
  username?: string;
  password?: string;
  country?: string;
  isp?: string;
  speed: number;
};
