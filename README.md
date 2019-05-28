# 野花鼓励师

forked form [formulahendry/vscode-ycy](https://github.com/formulahendry/vscode-ycy)

在 VS Code 中连续不写代码30分钟（时间可配置），会有野花提醒你别颓啦~

## 使用

除了不输入30分钟会自动弹出提醒页面，也可以按 `F1`, 然后输入 `flower: 打开提醒页面`来打开提醒页面

![usage](images/usage.png)

## 配置

* `flower.name`: 窗口标题（默认值为**野花**）
* `flower.reminderViewIntervalInMinutes`: 展示提醒页面的时间间隔（分钟）(重新加载窗口后起效）。(默认值为**30**)
* `flower.title`: 提示文字。 (默认值为**又无聊啦？**)
* `flower.type`: 指定图片类型：default (默认图)；url (网络图)。(默认值为**default**)
* `flower.customImages`: 配置图片数组（需要搭配flower.type为url） (默认值为**默认图片**)

```
如下例子，使用自定义图片：
"flower.type": "url",
"flower.customImages": [
    "https://github.io/mxdh/vscode-flower/image/flower/01.jpg"
]
```
## 如何使用本地图片作为展示图片

* vscode不允许读取外部文件路径，所以只能自己去替换插件内的图片。替换步骤如下：
  
  1、找到vscode插件安装的地方 (如mac 在~/.vscode/extensions/mxdh.flower-{version})
  
  2、替换images/flower内图片
