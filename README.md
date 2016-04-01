# tingle-icon

[![npm version](https://badge.fury.io/js/tingle-icon.svg)](http://badge.fury.io/js/tingle-icon)

基于 svg symbol 的移动端 Icon 组件，tingle-icon 默认会提供一个 ionicons 的 symbol svg，源码中就有，可以下载部署到自己的服务器或cdn上。

## Install

```bash
npm install tingle-icon --save
```

## Simple Usage


在使用前配置你的 svg 文件的 url，格式规则为 `[name]_svg_url`:

```js
Icon.config = {
  ionicons_svg_url : 'http://yourcdn.com/src/ionicons.svg',
  tingle_svg_url: 'http://yourcdn.com/src/tingle.svg'
}
```

然后使用 Icon，在上一步定义的 `[name]_svg_url` 中的 **[name]** 会作为 `type` 参数传递给 icon:

```js
class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{padding: '20px'}}>
        <Icon name="social-github" type="ionicons"/>
        <Icon name="hammer" type="ionicons"/>
        <Icon name="trash-a" type="ionicons"/>
        <Icon name="trash-b" type="ionicons"/>
        <Icon name="clipboard" type="ionicons"/>

        <Icon name="idea" type="tingle" />
        <Icon name="tingle-logo-vcolor" type="tingle" />
        <Icon name="chartcolor" type="tingle" />
      </div>
    );
  }
};

```

## Props

| 配置项 | 必填 | 默认值 | 功能/备注 |
|---|----|---|----|
| className | optional | '' | 给组件添加额外的class |
| type | required |''| 按钮的类型, 对应配置中 NAME_svg_url 的 NAME |
| name | required |''| 对应 symbol svg 中的 id |


## Links 相关链接

- [Fire a bug/Issues 提Bug](http://github.com/tinglejs/tingle-icon/issues)
