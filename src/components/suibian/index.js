import React, { Component } from 'react';
import {contextContent} from '../../common/context';
class Suibian extends Component {
    render() {
        console.log('this.context',this.context,contextContent);
        return (
            <div className="suibian">
                随便一个组件
            </div>
        );
    }
}
Suibian.contextType = contextContent;

export default Suibian;