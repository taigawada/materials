# materials

---

monorepo 構成

```
materials/
├── components #component repo
├── icons # SVG アイコンのソースと VueComponent
├── tokens # stylesheet.scss, tsconfig, eslintrc...etc
└── ... # 追加します
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
