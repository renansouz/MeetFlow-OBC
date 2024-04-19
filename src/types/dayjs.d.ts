import 'dayjs';

declare module 'dayjs' {
  function utc(date?: dayjs.ConfigType, format?: string, strict?: boolean): dayjs.Dayjs;
}
