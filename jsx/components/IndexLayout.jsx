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
        {this.renderSelections()}
      </div>
    );
  }
}

window.IndexLayout = IndexLayout;
