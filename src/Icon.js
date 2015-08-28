/**
 * Icon Component for tinglejs
 * @auther hanyu
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
class Icon extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <svg className={this.props.className}
             dangerouslySetInnerHTML={{__html: '<use xlink:href="#' + this.props.id + '"/>'}}/>
        );
    }
}

Icon.defaultProps = {
    className: 'tIcon'
}

// http://facebook.github.io/react/docs/reusable-components.html
Icon.propTypes = {
    className:  React.PropTypes.string,
    id       :  React.PropTypes.string.isRequired
}

module.exports = Icon;