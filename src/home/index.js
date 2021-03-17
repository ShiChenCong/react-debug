import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { add } from './slice';

class Home extends Component {
  static defaultProps = {
    name: 'scc'
  }
  constructor(props) {
    super()
    // const { dispatch, info } = props;
    // this.state={
    //   age:22,
    // }
    // this.add = bindActionCreators(add, dispatch)
    // fetch('www.baidu.com').then(res => {
    //   console.log(res);
    //   this.setState({age:23})
    // })
    this.state = {
      count:0,
    }
  }

  incrementCount() {
    // this.setState((prevState) => {
    //   return { count: prevState.count + 1 }
    // })
    this.setState({ count: this.state.count + 1 });
  }


  handleIncrement = () => {
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  }

  componentDidMount() {
    // document.getElementsByClassName('scc')[0].addEventListener('click',this.handleIncrement,)
  }

  render() {
    console.log(this.props);
    const { count } = this.state;
    return (
      <div
        key='2343'
        className='scc'
        onClick={() => {
          // this.props.dispatch(add())
          // add()
          // import('./a')
          //   .then(({ moduleA }) => {
          //     console.log(moduleA);
          //     // Use moduleA
          //   })
          //   .catch(err => {
          //     // Handle failure
          //   });
          // this.add();
          // this.handleIncrement();
          this.incrementCount();

        }}
        >
        {/* {this.props.home.value} */}
        {/* <ul>
          {[1, 2].map(item => <li key={item}>{item}</li>)}
        </ul> */}
        {count}
      </div>
    )
  }
}

export default connect(
  state => state
)(Home)