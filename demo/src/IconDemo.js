import Icon from '../../src';

// build之后, 测试一下下面一行, 把上面一行注释掉
//const Icon = require('../../dist');

Icon.config = {
  ionicons_svg_url : './src/ionicons.svg',
  tingle_svg_url: './src/tingle.svg'
}

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

module.exports = Demo;
