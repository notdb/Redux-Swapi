import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getPeople } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  loadPeople = () => {
    this.props.getPeople();
  };

  componentDidMount() {
    this.loadPeople(); // call our action
  }

  render() {
    console.log(this.props.characters);
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <div>Loading...</div>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching
});

export default connect(
  /* action creators go here */
  mapStateToProps,
  { getPeople }
)(CharacterListView);
