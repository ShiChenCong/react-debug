// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// // import Home from './home';
// import { Provider } from 'react-redux';
// import store from './store';
// import reportWebVitals from './reportWebVitals';
// const OtherComponent = React.lazy(() => import('./home'));
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <React.Suspense fallback={() => <div>开始渲染</div>}>
//         <OtherComponent />
//       </React.Suspense>
//     </Provider>
//   </React.StrictMode>,
//   // <div>2</div>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import * as ReactDOM from './kreact/react-dom';
import Component from './kreact/Component';
import './index.css';

class ClassComponent extends Component {
  render() {
    return (
      <div className="border">
        <p>类组件-{this.props.name}</p>
      </div>
    )
  }
}

function FunctionComponent(props) {
  return (
    <div className="border">
      <p>函数组件-{props.name}</p>
    </div>
  )
}

const jsx = (
  <div className="border">
    <h1>全栈</h1>
    <a href="baidu.com">kkb</a>
    {/* <FunctionComponent name='function' /> */}
    {/* <ClassComponent name='class' /> */}
  </div>
)

ReactDOM.render(
  jsx,
  document.getElementById('root')
);
