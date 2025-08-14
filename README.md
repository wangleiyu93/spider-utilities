测试

```
yarn add -D jest ts-jest @types/jest -W
```

命令说明 -W / --ignore-workspace-root-check：告诉 Yarn 你要在根目录安装
devDependencies。所有子包都可以直接运行 Jest

npm 先登录有发布权限的账号，目前发布的是作用域包 @your-scope/xxx

```
npm login
lerna publish
```
