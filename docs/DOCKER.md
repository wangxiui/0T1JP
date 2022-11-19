### 构建docker镜像
```
docker build -t nextjs-basic ./
```
- -t或tag，为镜像明名
- ./选中的是当前目录

最后一个是我们放在那里启动容器的命令，
只会在我们使用docker now启动正字运行的容器时执行。

docker images
查看是否创建完成。

容器创建成功后，下一步是通过在容器上运行它来测试它。
```
docker run -p 3000:3000 nextjs-basic
```
