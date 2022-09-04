declare const dayOfWeekStr: (start: 'monday' | 'sunday' | 0 | 1, index: number) => "日" | "月" | "火" | "水" | "木" | "金" | "土" | undefined;
declare function sortItems(key: string, order?: 'asc' | 'desc', escape?: string | RegExp): (a: any, b: any) => number;
interface CyclePeriod {
    weekIndex: number;
    dayOfWeekIndex: number;
}
declare type BooleanArray = [boolean, boolean, boolean, boolean, boolean, boolean, boolean][];
declare type CyclePeriodArray = CyclePeriod[];
declare function cyclePeriodConverter(array: unknown[], start?: 'monday' | 'sunday', isEachWeek?: boolean): [boolean, boolean, boolean, boolean, boolean, boolean, boolean][] | CyclePeriodArray;
export { dayOfWeekStr, sortItems, cyclePeriodConverter, CyclePeriod, BooleanArray };
//# sourceMappingURL=utils.d.ts.map