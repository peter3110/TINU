const {
  React,
  ReactDOM,

} = window;

class Selection extends React.Component {
  render() {
    return (
      <div className="col-xs-offset-4 col-xs-4 selection" role="button">
        <div className="col-xs-12 selection-text">{this.props.title}</div>
      </div>
    );
  }
}

Selection.propTypes = {
  title: React.PropTypes.string.isRequired,
};

window.Selection = Selection;
