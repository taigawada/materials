interface CyclePeriod {
    weekIndex: number;
    dayOfWeekIndex: number;
}
declare type BooleanArray = [boolean, boolean, boolean, boolean, boolean, boolean, boolean][];
declare type CyclePeriodArray = CyclePeriod[];
declare function cyclePeriodConverter(array: unknown[], start?: 'monday' | 'sunday', isEachWeek?: boolean): [boolean, boolean, boolean, boolean, boolean, boolean, boolean][] | CyclePeriodArray;
export { cyclePeriodConverter, CyclePeriod, BooleanArray };
//# sourceMappingURL=useWeeklySelector.d.ts.map