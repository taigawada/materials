import { InjectionKey } from 'vue-demi';
interface Theme {
    [key: string]: {
        [key: string]: string;
    };
}
export declare const switchThemeKey: InjectionKey<(theme: string) => void>;
declare const _default: {
    install: (app: any, option?: Theme) => void;
};
export default _default;
//# sourceMappingURL=themeInstall.d.ts.map