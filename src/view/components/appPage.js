import React, { Component } from 'react';
import SearchBar from './searchBar';
import ItemsList from './itemsList';

export class AppPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      searchCriteria: ''
    }
  }

  render() {
    return (
      <div>
        <SearchBar searchCriteria = {searchInput => this.setState({searchCriteria : searchInput})}/>
        <ItemsList 
          searchResults = {this.props.searchCriteria}
          videos = {this.state.videos}
          onUserSelected = {(selectedItem => this.setState({selectedVideo: selectedItem}))}
        />
        <p>{this.state.searchCriteria}</p>
      </div>
    );
  }
}

export default AppPage;
