## Icon

icon图标展示

![icon viewer](http://gtms01.alicdn.com/tps/i1/TB1LYlgIVXXXXcWXXXXHXIoYFXX-285-253.png)

## Best Practice 最佳实践

这是一个 tingle 组件，使用SVG来制作icon系统的解决方案。


## 样式依赖

```
<link rel="stylesheet" href="./node_modules/tingle-style/src/tingle.css">
<link rel="stylesheet" href="./src/Icon.css">
```

### JSX

```
<Icon className="icon" id="baby"/>
<Icon className="icon customCls" id="headphones"/>
...
```


### 可用配置

| 配置项 | 必填 | 默认值 | 功能/备注 |
|---|----|---|----|
|id|required| --- | 需要引用的svg的ID值 |
|className|optional|tIcon| 自定义样式名 |


> 注1: id的值默认情况下是根据SVG资源名称相对应的
>


## Links 相关链接

- [Fire a bug/Issues 提Bug](http://github.com/tinglejs/tingle-icon/issues)