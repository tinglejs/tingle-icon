/**
 * Icon Component Demo for tingle
 * @author hanyu
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');

let Icon = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div id="style1">
                    <Icon id="quill"/>
                    <Icon className="icon" id="iconfont-search"/>
                    <Icon className="icon" id="tingle-icon-fangdajing"/>
                    <Icon className="icon" id="tingle-icon-fanhui"/>
                    <Icon className="icon" id="tingle-icon-sousuo"/>
                    128PX
                </div>
                <div id="style2" className="tMT20">
                    <Icon className="icon2" id="baby"/>
                    <Icon className="icon2" id="iconfont-search"/>
                    <Icon className="icon2" id="tingle-icon-fangdajing"/>
                    <Icon className="icon2" id="tingle-icon-fanhui"/>
                    <Icon className="icon2" id="tingle-icon-sousuo"/>
                    64PX
                </div>
                <div id="style3" className="tMT20">
                    <Icon className="icon3" id="film"/>
                    <Icon className="icon3" id="iconfont-search"/>
                    <Icon className="icon3" id="tingle-icon-fangdajing"/>
                    <Icon className="icon3" id="tingle-icon-fanhui"/>
                    <Icon className="icon3" id="tingle-icon-sousuo"/>
                    32PX
                </div>
                <div id="style4" className="tMT20">
                    <Icon className="icon4" id="home"/>
                    <Icon className="icon4" id="iconfont-search"/>
                    <Icon className="icon4" id="tingle-icon-fangdajing"/>
                    <Icon className="icon4" id="tingle-icon-fanhui"/>
                    <Icon className="icon4" id="tingle-icon-sousuo"/>
                    16PX
                </div>
            </div>
        );
    }
};

module.exports = Demo;
