# materials

# How to install

main.ts etc...

```
import Vue from 'vue';

import '@simple-education-dev/components/style';
import { SimpleComponents } from '@simple-education-dev/components';
Vue.use(SimpleComponents);
```

theme 追加

```
import SomeThemeJSON from './SomeThemeJSON.json';
Vue.use(SimpleComponents, {
    sometheme: SomeThemeJSON
});
```

theme 上書き

```
Vue.use(SimpleComponents, {
    light: {
        "theme-color": "rgba(243, 12, 34, 1)",
        ...
    },
    dark: {
        "theme-color": "rgba(34, 184, 34, 1)",
        ...
    }
});
```

テーマを変更

```
// vue2,x
setup (props, context) {
    context.root.$switchTheme('dark' or 'light');
}

// vue3,x
import { inject } from 'vue';
import { switchThemeKey } from '@simple-education-dev/components';

setup (props, context) {
    const switchTheme = inject(switchThemeKey);
    switchTheme('dark' or 'light');
}
```

---

monorepo

```
materials/
├── components #components
└── icons # SVG icons
```

# Install dependencies and build workspaces

```
npm install
```

# build

```
npm run build
```

# serve

```
npm run serve -w components
```
