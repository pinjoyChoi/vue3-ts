# vue3-ts

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 文档
1.  ts 定义数据类型的语法
  a.  ref: 定义相应的基础数据类型
    获取值是通过 .value 获取。

    const count = ref<number>(10);
    console.log(count.value);

  b.  reactive: 定义响应的对象类型

    interface FormState {
      user: string;
      password: string;
    };
    const formState = reactive<FormState>({
      user: '',
      password: '',
    });

  c.  toRefs: 将响应式的对象转化为普通对象

    import { toRefs } from 'vue';
      b.内定义的对象...
    const data = toRefs(formState);