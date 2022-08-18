declare const dayOfWeekStr: (start: 'monday' | 'sunday' | 0 | 1, index: number) => "日" | "月" | "火" | "水" | "木" | "金" | "土" | undefined;
declare const useScroll: () => {
    isUp: import("@vue/composition-api").Ref<boolean>;
    isDown: import("@vue/composition-api").Ref<boolean>;
    x: import("@vue/composition-api").Ref<number>;
    y: import("@vue/composition-api").Ref<number>;
};
declare function sortFn(key: string, order?: 'asc' | 'desc', escape?: string | RegExp): (a: any, b: any) => number;
export { dayOfWeekStr, useScroll, sortFn };
//# sourceMappingURL=utils.d.ts.map