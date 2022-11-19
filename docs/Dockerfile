#自己仿写一个dockerfile

#第一步
# base Image:基础镜像，
#因为我们需要使用npm 和 nodejs。方便运行：npm install 和 npm build
#16-alpine是版本号
FROM node:16-alpine AS deps

#有了基础镜像后，就可以使用run，在文件系统中创建一个名为 usr app 的新文件夹。
#run 可以执行任何 shell 指令
RUN mkdir -p /usr/app

#/usr/app/ 用来存储源代码
#同时希望这个目录成为 "工作目录"
#应用程序代码将被复制
#1、WORKDIR允许定义当前工作目录
#2、COPY会复制所有源代码，除了.dockerfile内的文件夹
WORKDIR /usr/app
#. 代表要复制的路径 和 想复制到哪的路径
#第一个path代表源码文件夹；第二个path代表docker image系统的文件夹
COPY ./ ./

#第二步
#安装依赖
RUN npm install
#接着构建
RUN npm run build

#EXPOSE 定义这个容器应该监听的端口
EXPOSE 3000

#用这个镜像定义创建的任何容器 定义入口点
#CMD设置执行容器的默认参数
CMD['npm', 'start']
