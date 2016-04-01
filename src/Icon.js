/**
* Icon Component for tinglejs
* @auther hanyu
*
* Copyright 2014-2015, Tingle Team, Alinw.
* All rights reserved.
*/
const classnames = require('classnames');

const Icon = React.createClass({
  getDefaultProps() {
    return {
      className: '',
      name: '',
      type: 'ionicons',
      width: 30,
      height: 30,
      src: ''
    }
  },

  propTypes: {
    className: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    width: React.PropTypes.number,
    height: React.PropTypes.number
  },

  render() {
    let {type, name, width, height, className} = this.props

    let myClassName = classnames('icon', {
      [className] : !!className
    })

    let svgUrl = Icon.config[`${type}_svg_url`]
    if (!svgUrl) {
      throw new Error(`Icon.config.${type}_svg_url is not set.`);
    }

    return (
      <svg width={width} height={height} className={myClassName}>
        <use xlinkHref={`${svgUrl}#${name}`}/>
      </svg>
    )
  }
})

export default Icon;
export {Icon};
