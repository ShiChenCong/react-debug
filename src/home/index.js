import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { add } from './slice';

class Home extends React.Component {
  constructor(props) {
    super()
    console.log(props);
    const { dispatch } = props;
    this.add = bindActionCreators({add}, dispatch)
    console.log(this.add);
  }
  render() {
    return (
      <div onClick={() => {
        // this.props.dispatch(add())
        // add()
        // this.add();
      }}>
        2
      </div>
    )
  }
}

export default connect(
  state => state
)(Home)