#https://www.modb.pro/db/396519

# 1. 构建基础镜像
FROM node:16-alpine AS base
#纯净版镜像

#ENV NODE_ENV=production \
#  APP_PATH=/app

ENV APP_PATH=/app

ARG PNPM_VERSION=7.1.9

RUN npm -g install pnpm@${PNPM_VERSION} --registry=https://registry.npm.taobao.org/

WORKDIR $APP_PATH

# 2. 基于基础镜像安装项目依赖
FROM base AS install

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN pnpm i --registry=https://registry.npm.taobao.org/ --frozen-lockfile

# 3. 基于基础镜像进行最终构建
FROM base

# 拷贝 上面生成的 node_modules 文件夹复制到最终的工作目录下
COPY --from=install $APP_PATH/node_modules ./node_modules

# 拷贝当前目录下的所有文件(除了.dockerignore里排除的)，都拷贝到工作目录下
COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
