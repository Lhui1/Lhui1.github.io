# 开始进行深度编辑

## 配置Git

你需要用Git来管理你的网站，目前我最推荐的方法是用GitHub Desktop

[Windows、MacOS请到这里下载GitHubDesktop](https://github.com/zetaloop/desktop/releases/)

[Linux版GitHubDesktop](https://github.com/shiftkey/desktop)，[LinuxGitHubDesktop汉化工具](https://github.com/robotze/GithubDesktopZhTool)

把仓库克隆下来，然后用代码编辑器打开

## 初始化项目

你需要在你的电脑上安装NodeJS和Yarn，那怎么安装呢？~~好~~问题：

### Linux 初始化项目

#### 首先安装 NodeJS 
::: code-group

```sh [Fedora]
sudo dnf install nodejs
```

```sh [Debian]
sudo apt install nodejs
```
:::

装好NodeJS后，输入`node -v`，如果输出版本号就代表安装好了

如果没装好，自己找教程去

#### 然后安装 Yarn

```sh
sudo npm install -g corepack
sudo corepack enable
sudo corepack prepare yarn@stable --activate
```

然后，运行`yarn -v`，如果输出版本号为1开头，则装错了版本，如果是4开头，则装对了版本，但如果啥都不输出还报错了，那就是没装好

#### Windows 初始化项目

打开管理员PowerShell，运行：
```powershell
winget install nodejs
```
然后重新开启PowerShell，运行：
```powershell
corepack enable
```
重启PowerShell，运行：
```powershell
yarn config set enableGlobalCache false
corepack prepare yarn@stable --activate
```
然后，运行`yarn -v`，如果输出版本号为1开头，则装错了版本，如果是4开头，则装对了版本，但如果啥都不输出还报错了，那就是没装好

## 预览与编译

### 预览

当你觉得改的差不多打算看看成果时，可以在终端运行：
```sh
yarn docs:dev
```
来预览网站，你甚至可以边改代码边预览，因为预览是实时渲染的

### 编译（其实你可以不这样，我甚至不推荐这样）

你觉得已经万事大吉了，打算更新网站时，仅需运行：
```sh
yarn docs:build
```
这样dist就会更新为最新的

但我其实并不推荐你这样，因为该仓库配置了husky，会在提交时自动编译，而手动编译可能会和husky冲突，因此更推荐的做法是直接提交代码，让husky进行编译（如果husky炸了，请确保你`yarn install`过了，如果还不行那就手动编译吧）

## 更新

打开GitHubDesktop，随便填几下摘要，然后点击提交，husky自动完成编译，再点击推送，更新就会发送到GitHub上，GitHub的服务器会自动部署并更新网站，一般只需要等一分钟左右就能看到更新