declare type weekBoolean = [boolean, boolean, boolean, boolean, boolean, boolean, boolean];
declare type monthBoolean = weekBoolean[];
interface TimeObject {
    meridiem?: null | 'εε' | 'εεΎ';
    hours: number;
    minutes: number;
}
export { weekBoolean, monthBoolean, TimeObject };
//# sourceMappingURL=types.d.ts.map