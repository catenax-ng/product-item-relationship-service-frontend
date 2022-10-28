import dayjs from "dayjs";

export const defaultDateFormat = (value: string | Date) => dayjs(value).format("YYYY-MM-DD HH:mm:ss");
