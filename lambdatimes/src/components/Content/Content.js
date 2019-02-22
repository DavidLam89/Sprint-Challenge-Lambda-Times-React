import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({cards: cardData, tabs: tabData});
  }

  changeSelected = tab => {
    this.setState({selected: tab });
  };

  filterCards = () => {
    let myCards = cardData;
    if (this.state.selected === 'all') return myCards;
    else {
      myCards = myCards.filter(e => e.tab === this.state.selected);
      return myCards;
    }
  };

  render() {
    return (
      <div className="content-container">
        <Tabs tabs={this.state.tabs} 
            selectTabHandler={this.changeSelected}
            selectedTab={this.state.selected} />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
