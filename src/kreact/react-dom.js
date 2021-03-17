// vnode 虚拟dom对象
// node 真实dom节点

// work in progress 进行当中的fiber
let wipRoot = null;
function render(vnode, container) {
  // console.log(vnode);
  // const node = createNode(vnode);
  // container.appendChild(node);
  wipRoot = {
    type: 'div',
    props: {
      children: { ...vnode },
    },
    stateNode: container,
  }

  nextUnitOfWork = wipRoot;
}

function createNode(vnode) {
  const { type, props } = vnode;
  const node = document.createElement(type);
  updateNode(node, props);
  return node;
}

// create node
function updateHostComponent(workInProgress) {
  const { props } = workInProgress;
  if (!workInProgress.stateNode) {
    workInProgress.stateNode = createNode(workInProgress)
  }
  reconceileChildren(workInProgress, props.children); // recuresion children

  // console.log('workInProgress', workInProgress);
}

// add attribute
function updateNode(node, nextVal) {
  Object.keys(nextVal).forEach((k) => {
    if (k === "children") {
      if (typeof nextVal[k] === 'string') {
        node.textContent = nextVal[k];
      }
    } else {
      node[k] = nextVal[k];
    }
  });
}

// 协调子节点 生成每个子节点的fiber节点
function reconceileChildren(workInProgress, children) {
  if (typeof children === 'string' || typeof children === 'number') {
    return;
  }
  const newChildren = Array.isArray(children) ? children : [children];

  let previousNewFiber = null;
  for (let i = 0; i < newChildren.length; i++) {
    console.log(1);
    let child = newChildren[i];
    let newFiber = {
      type: child.type,
      props: { ...child.props },
      stateNode: null,
      child: null,
      sibling: null,
      return: workInProgress,
    }
    if (i === 0) {
      // 第一个fiber
      workInProgress.child = newFiber;
    } else {
      previousNewFiber.sibling = newFiber;
    }

    // 记录上一个fiber
    previousNewFiber = newFiber;
  }
}

// 下一个单元任务
let nextUnitOfWork = null;

// fiber js对象
// type 类型
// key
// props 属性
// stateNode
// child 第一个子节点
// sibling 下一个兄弟节点
// return 父节点
function performUnitOfWork(workInProgress) {
  // step1 perform task
  const { type } = workInProgress;
  if (typeof type === 'string') {
    updateHostComponent(workInProgress);
  }

  // step2 return next task
  if (workInProgress.child) {
    return workInProgress.child
  }

  let nextFiber = workInProgress;
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }
    nextFiber = nextFiber.return;
  }
}

function workLoop(IdelDeadline) {
  while (nextUnitOfWork && IdelDeadline.timeRemaining() > 1) {
    // 执行任务，并且返回下一个执行任务
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
  }

  // 提交
  if (!nextUnitOfWork && wipRoot) {
    commitRoot();
  }
}

function commitRoot() {
  commitWorker(wipRoot.child);
  wipRoot = null;
}

function commitWorker(workInProgress) {
  // 提交自己
  if (!workInProgress) {
    return
  }
  let parentNodeFiber = workInProgress.return;
  let parentNode = parentNodeFiber.stateNode;
  if (workInProgress.stateNode) {
    parentNode.appendChild(workInProgress.stateNode);
  }
  // 提交子节点
  commitWorker(workInProgress.child);
  // 提交兄弟节点
  commitWorker(workInProgress.sibling);
}

// pure text node
// function updateTextComponent(vnode) {
//   const node = document.createTextNode(vnode)
//   return node;
// }
// function updateFunctionComponent(vnode) {
//   const { type, props } = vnode;
//   const vvnode = type(props);
//   const node = createNode(vvnode);
//   return node;
// }
// function updateClassComponent(vnode) {
//   const { type, props } = vnode;
//   const instance = new type(props);
//   const vvnode = instance.render();
//   const node = createNode(vvnode);
//   return node
// }


requestIdleCallback(workLoop)

export { render }