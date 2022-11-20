# 0T1JP
> 从0开始学到N1。

## 安装
[入门教程](https://www.nextjs.cn/learn/basics/create-nextjs-app/setup)

如果不成功，请查看 [此页面](https://github.com/vercel/next-learn/blob/master/basics/errors/install.md)。

### 运行
```
pnpm run dev
```

当前分支使用的静态资源部署,所以：
- Dockerfile也不同

### docker 步骤
> http://www.dockerone.com/article/8834
1. 获取 Nginx 镜像
`docker pull nginx`
2. 创建 Nginx Config配置文件
3. 创建 Dockerfile 文件
4. 基于该 Dockerfile 构建 应用镜像
5. 启动 app 容器
