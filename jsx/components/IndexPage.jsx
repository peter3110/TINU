const {
  React,
  ReactDOM,

  IndexLayout,
} = window;

class IndexPage extends React.Component {
  render() {
    return (
      <IndexLayout {...this.props} />
    );
  }
}

window.IndexPage = IndexPage;
