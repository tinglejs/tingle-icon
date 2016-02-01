/**
 * Icon Component for tinglejs
 * @auther hanyu
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
const classnames = require('classnames');
const Context = require('tingle-context');

class Icon extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let t = this;

    let {className, width, height, fill, ...other} = t.props;
    return <svg className={classnames('tIcon', {
      [className]: !!className
    })} fill={fill} width={width} height={height} {...other}>
      <use xlinkHref={(Context.getGlobal('icon.src') || t.props.src || '') + '#' + t.props.id}/>
    </svg>
  }
}

Icon.defaultProps = {
  src: '',
  className: '',
  id: '',
  width: 32,
  height: 32,
  fill: '#000'
}

// http://facebook.github.io/react/docs/reusable-components.html
Icon.propTypes = {
  src: React.PropTypes.string,
  className: React.PropTypes.string,
  id: React.PropTypes.string.isRequired
}

module.exports = Icon;