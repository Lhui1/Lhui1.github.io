# 启始文档（暂未完成）

这是一个起始文档，大概就是用来让你知道怎么搭建这个网站，我只是帮你搭建个架子的，剩下的得你自己来

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

## 写文章
### 创建分类
你需要在`Docs`文件夹下创建一个文件夹，那个新建的文件夹则是一个分类文件夹，在分类文件夹下创建一个文件，那个文件的名称就是分类的名称
>  ### 例如：
> 你在`Docs`文件夹下创建了一个名为`Notes`的文件夹，但是你希望这个分类在侧边栏中显示为“笔记”，你就得在`Notes`文件夹下创建一个名为`笔记`的文件，这样侧边栏中，这个分类将显示为“笔记”
### 创建文章
你需要在分类文件夹下创建一个文件夹，文件夹的名称就是文档在侧边栏里显示的名称，而文档文件夹下需创建一个名为`index.md`的文件，然后到`index.md`里写你的文档
> ### 例如：
> 你在`Notes`文件夹下创建了一个名为`My Doc`的文件夹，然后你在`My Doc`下创建了一个名为`index.md`的文件，你需要在该文件里用Markdown文档格式来写文章
### 撰写文章
在index.md中，使用Markdown写你的文章，Markdown写起来非常简单，比HTML还要简单
> #### 例如
> ~~~markdown
> # 标题
> ## 二级标题
> ### 三级标题，总之就是看#多不多，以此类推
> 你好，这是文本
> ```text
> 这是代码块
> ```
> ~~~
