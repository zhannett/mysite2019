export React, {Component} from 'react';

class ToolTip extends Component{
	constructor(props) {
  	super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
  	let {state} = this;
    return (
        <div id="tooltip" className="on right">
            <div className="tooltip-arrow"></div>
            <div className="tooltip-inner">ToolTip Component</div>
        </div>
    );
  }
}

export default ToolTip;