import general from './theme/assets/general.json';
import light from './theme/assets/light.json';
import dark from './theme/assets/dark.json';
import { isVue2, InjectionKey } from 'vue-demi';

import useToastTimerStore, { ToastTimerKey } from '@/components/SimpleToast/useToastStore';
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
    Object.keys(option).map((theme: string) => {
        if (theme === 'light' || theme === 'dark') {
            Object.assign(themes[theme], option[theme]);
        } else {
            Object.assign(themes, { [theme]: option[theme] });
        }
    });
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
        app.prototype.$toastStore = useToastTimerStore();
    } else {
        app.config.globalProperties.$switchTheme = switchTheme;
        app.provide(switchThemeKey, switchTheme);
        app.provide(ToastTimerKey, useToastTimerStore());
    }
};
export default { install: install };
