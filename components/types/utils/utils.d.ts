declare const dayOfWeekStr: (start: 'monday' | 'sunday' | 0 | 1, index: number) => "日" | "月" | "火" | "水" | "木" | "金" | "土" | undefined;
declare function sortItems(key: string, order?: 'asc' | 'desc', escape?: string | RegExp): (a: any, b: any) => number;
export { dayOfWeekStr, sortItems };
//# sourceMappingURL=utils.d.ts.map