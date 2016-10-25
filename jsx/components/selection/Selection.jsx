const {
  React,
  ReactDOM,

} = window;

class Selection extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="selection">
        {this.props.title}
      </div>
    );
  }
}

Selection.propTypes = {
  title: React.PropTypes.string.isRequired,
};

window.Selection = Selection;
