# 1. 构建基础镜像
FROM alpine:3.15 AS base
#纯净版镜像

ENV NODE_ENV=production \
  APP_PATH=/app

ARG PNPM_VERSION=7.1.9

WORKDIR $APP_PATH

# 使用国内镜像，加速下面 apk add下载安装alpine不稳定情况
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories

# 使用apk命令安装 nodejs(最新) 和 pnpm（https://github.com/pnpm/pnpm/issues/784）
#apk add --no-cache nodejs-current --repository="http://dl-cdn.alpinelinux.org/alpine/edge/community"
RUN apk add --no-cache --update nodejs yarn && \
    yarn global add pnpm --registry=https://registry.npm.taobao.org/

#You can use this URL to get the latest pnpm release (REF):
#https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64
#RUN apk add --no-cache curl && \
#  curl -fsSL "https://github.com/pnpm/pnpm/releases/download/v${PNPM_VERSION}/pnpm-linuxstatic-x64" -o /bin/pnpm && chmod +x /bin/pnpm && \
#  apk del curl


# 2. 基于基础镜像安装项目依赖
FROM base AS install

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --registry=https://registry.npm.taobao.org/

# 3. 基于基础镜像进行最终构建
FROM base

# 拷贝 上面生成的 node_modules 文件夹复制到最终的工作目录下
COPY --from=install $APP_PATH/node_modules ./node_modules

# 拷贝当前目录下的所有文件(除了.dockerignore里排除的)，都拷贝到工作目录下
COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
