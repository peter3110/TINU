const {
  React,
  ReactDOM,

  Selection,
} = window;

class IndexLayout extends React.Component {
  renderSelections() {
    const SELECTIONS = ['TODAY', 'THIS WEEK', 'THIS MONTH'];
    return SELECTIONS.map((selection, index) => {
      return (
        <Selection
          key={index}
          title={selection}
        />
      )
    });
  }

  render() {
    return (
      <div>
        <div className="col-xs-12">

        </div>
        <div className="col-xs-12">
          {this.renderSelections()}
        </div>
        <div className="col-xs-12">

        </div>
      </div>
    );
  }
}

window.IndexLayout = IndexLayout;
