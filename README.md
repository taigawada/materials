# materials

---

monorepo

```
materials/
├── components #component repo
└── icons # SVG アイコンのソースと VueComponent
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

install

```
import '@simple-education-dev/components/style';
import { SimpleComponents } from '@simple-education-dev/components';
Vue.use(SimpleComponents);
```
