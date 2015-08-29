/**
 * Icon Component for tinglejs
 * @auther hanyu
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
var classnames = require('classnames');
class Icon extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var t = this;
        return <svg className={classnames('tIcon', {
            [t.props.className]: !!t.props.className
        })} dangerouslySetInnerHTML={{
            __html: '<use xlink:href="#' + t.props.id + '"/>'
        }}/>
    }
}

Icon.defaultProps = {
}

// http://facebook.github.io/react/docs/reusable-components.html
Icon.propTypes = {
    className: React.PropTypes.string,
    id:        React.PropTypes.string.isRequired
}

module.exports = Icon;