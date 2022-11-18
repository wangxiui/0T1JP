# 0T1JP
> 从0开始学到N1

## 安装
[入门教程](https://www.nextjs.cn/learn/basics/create-nextjs-app/setup)

如果不成功，请查看 [此页面](https://github.com/vercel/next-learn/blob/master/basics/errors/install.md)。

### 运行
```
pnpm run dev
```

项目基础路径
> 不能用相对路径`./`。
> 也不能以`/`结尾。

设置基础路径是有必要的。  
这样，图片资源 可以直接从指定目录找到。  
不设置的话，nginx没有好方法直接指定目录。（html、css好像没这个问题。）
