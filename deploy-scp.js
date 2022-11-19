/**
* @name: deploy-scp
* @description：deploy-scp
* @author: wkk
* @date: 2022-11-19
*/
/*如果没有使用 github 等工具进行代码托管，可以使用 scp 进行产物构建后的传输*/
/*只需要将 server 修改为服务器相关的信息，使用 node.js 执行一下这个脚本就可以将构建产物发送到服务器上指定的位置。*/

// 部署服务器
(async () => {
  const client = require("scp2")
  const ora = await import("ora")
  const chalk = require("chalk")
  const spinner = ora.default(chalk.green("正在发布。。。"))

  /*
   host: 服务器ip
   port：scp上传的端口号 （默认：22）
   username：服务器账号
   password：服务器密码
   path：部署到服务器的路径
   */

  spinner.start()
  client.scp(
    "./dist/",
    {
      host: server.host,
      port: server.port,
      username: server.username,
      password: server.password,
      path: server.path,
    },
    (err) => {
      spinner.stop()
      if (!err) {
        console.log(chalk.green("成功"))
      } else {
        console.log(err)
      }
    }
  )
})()
