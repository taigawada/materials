type weekBoolean = [boolean, boolean, boolean, boolean, boolean, boolean, boolean];
type monthBoolean = weekBoolean[];
interface TimeObject {
    meridiem?: null | '午前' | '午後';
    hours: number;
    minutes: number;
}

export { weekBoolean, monthBoolean, TimeObject };
