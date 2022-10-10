import general from './assets/general.json';
import light from './assets/light.json';
import dark from './assets/dark.json';
import { isVue2, InjectionKey } from 'vue-demi';
import { usePreferredDark } from '@vueuse/core';

interface Theme {
    [key: string]: { [key: string]: string };
}
// eslint-disable-next-line no-unused-vars
export const switchThemeKey: InjectionKey<(theme: string) => void> = Symbol('switchTheme');
const install = (app: any, option: Theme = {}) => {
    Object.keys(general).map((key: string) => {
        // @ts-ignore
        document.documentElement.style.setProperty(key, general[key]);
    });
    const themes: Theme = { light: light, dark: dark };
    console.log(Object.assign({}, themes));
    Object.keys(option).map((theme: string) => {
        if (theme === 'light' || theme === 'dark') {
            Object.assign(themes[theme], option[theme]);
        } else {
            Object.assign(themes, { [theme]: option[theme] });
        }
    });
    console.log(themes);
    const switchTheme = (theme: string) => {
        if (themes[theme]) {
            Object.keys(themes[theme]).map((key: string) => {
                document.documentElement.style.setProperty(key, themes[theme][key]);
            });
        }
    };
    const isDark = usePreferredDark();
    switchTheme(isDark.value ? 'dark' : 'light');
    if (isVue2) {
        app.prototype.$switchTheme = switchTheme;
    } else {
        app.config.globalProperties.$switchTheme = switchTheme;
        app.provide(switchThemeKey, switchTheme);
    }
};
export default { install: install };
