const {
  React,
  ReactDOM,
  ReactRouter,

  IndexPage,
} = window;

const {
  Router,
  Route,
  browserHistory,
} = ReactRouter;

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={IndexPage}></Route>
  </Router>,
  document.getElementById('render-target')
);
