# 0T1JP
> 从0开始学到N1

## 安装
[入门教程](https://www.nextjs.cn/learn/basics/create-nextjs-app/setup)

如果不成功，请查看 [此页面](https://github.com/vercel/next-learn/blob/master/basics/errors/install.md)。

### 运行
```
pnpm run dev
```

### 知识点
1. 文件目录+名称 = 路由url
2. [classname库](https://github.com/JedWatson/classnames)
3. tailwind和classname库不冲突
4. css Modules和sass一起用，文件名后缀：.module.sass
5. 渲染方式
    1. client-side renderß
    2. pre-render
        1. Static Generation(渲染时，有数据/无数ß据，都行)
        2. Server-side Rendering（场景：每次请求页面时都需要重新获取数据）
6. gray-matter库解析markdown内YAML的元数据格式
7. getStaticProps只运行在 **Server-side** 不会运行在 **Client-side**
8. [SWR](https://swr.vercel.app/zh-CN)用于数据请求的 React Hooks 库
9. 库：`remark、remark-html`。渲染markdown content
10. [date-fns](https://date-fns.org/v2.16.1/docs/format)。格式化日期
11. `styled-jsx`
``` 
export default () => (
  <div className="root">
    <style jsx>{`
      .root {
        color: green;
      }
    `}</style>
  </div>
)
```
12. `styled-components`
```
import Link from 'next/link'
import styled from 'styled-components'

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

export default styled(StyledLink)`
  color: #0075e0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #40a9ff;
  }

  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }
`
```
13.



we are in demo branch.
