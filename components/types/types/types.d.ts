declare type weekBoolean = [boolean, boolean, boolean, boolean, boolean, boolean, boolean];
declare type monthBoolean = weekBoolean[];
interface TimeObject {
    meridiem?: null | '午前' | '午後';
    hours: number;
    minutes: number;
}
export { weekBoolean, monthBoolean, TimeObject };
//# sourceMappingURL=types.d.ts.map