/**
 * Icon Component Demo for tingle
 * @author hanyu
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

const classnames = require('classnames');

const Context = require('tingle-context');
const Icon = require('../../src');

// build之后, 测试一下下面一行, 把上面一行注释掉
//const Icon = require('../../dist');

const Collection = require('tingle-collection');

Context.setGlobal({
    'Icon.src': './demo/dist/svg-symbols.svg'
});

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            colorIcons: [
                'about',
                'chart',
                'picture',
                'services',
                'video'
            ],
            icons: [
                'cancel',
                'download',
                'gift',
                'idea',
                'info'
            ]
        }
    }

    render() {
        return (
            <div>
                <div className="tP20 tFAC">
                    <Icon id="tingle-logo-v" className="logo"/>
                </div>
                <div className="tBCe tFAC tLH44">多种颜色的SVG图标</div>
                <Collection col={5} square={true}>
                    {React.Children.toArray(this.state.colorIcons.map((icon) => {
                        return <Icon id={icon} className="demoIcon"/>
                    }))}
                </Collection>
                <div className="tBCe tFAC tLH44">单色SVG图标</div>
                <Collection col={5} square={true}>
                    {React.Children.toArray(this.state.icons.map((icon) => {
                        return <Icon id={icon} className="demoIcon"/>
                    }))}
                </Collection>
                <div className="tBCe tFAC tLH44">单色SVG图标, 设置尺寸和颜色</div>
                <Collection col={5} square={true}>
                    {React.Children.toArray(this.state.icons.map((icon) => {
                        return <Icon id={icon} className="demoIcon2"/>
                    }))}
                    <Icon id="cancel" fill="#4d9df0"/>
                    <Icon id="download" fill="#9462a9"/>
                    <Icon id="gift" fill="#7bc380"/>
                    <Icon id="idea" fill="#942a09"/>
                    <Icon id="info" fill="#e65100"/>
                </Collection>
            </div>
        );
    }
};

module.exports = Demo;
