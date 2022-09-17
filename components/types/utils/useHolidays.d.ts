export declare type Holidays = [Date, string];
/**
 * 内閣府HPから、祝日データCSVを取得し、パースして返します。未来の祝日は1年分になります。
 * @param {number} yearRange 前後何年分の祝日を取得するか
 * @returns {Promise<Holidays[]>} Promise<[Date, string][]>
 */
export declare const useHolidays: (yearRange?: number) => Promise<Holidays[]>;
//# sourceMappingURL=useHolidays.d.ts.map