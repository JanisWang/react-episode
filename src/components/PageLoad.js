import React, { Component } from "react";
import data from '../data.json';
import MovieInfo from './MovieInfo';
import SeasonButtons from './SeasonButtons';
import EpisodeList from './EpisodeList';

class PageLoad extends Component {
    constructor(props) {
        super(props);
        this.state = {
          seasonNumber: 8,
          currentSeason: 0,
          sortType: 'date',
          order: 'asc',
        };
    }

    UpdateCurrentSeason(currentSeason) {
        this.setState({
          currentSeason: currentSeason
        });
    }

    UpdateSortType(sortType) {
        this.setState({
            sortType: sortType
        });
    }

    UpdateOrderType(orderType) {
        this.setState({
            order: orderType
        });
    }

    render() {
        const episodes = data._embedded.episodes;
        return(
            // load components
            <main>
                <MovieInfo data={data}/>
                <SeasonButtons 
                    seasonNumber={this.state.seasonNumber} 
                    UpdateCurrentSeason={this.UpdateCurrentSeason.bind(this)} 
                    UpdateSortType={this.UpdateSortType.bind(this)}
                    UpdateOrderType={this.UpdateOrderType.bind(this)} />
                <EpisodeList 
                    episodes={episodes} 
                    currentSeason={this.state.currentSeason} 
                    sortType={this.state.sortType} 
                    order={this.state.order}/>
            </main>
        );
    }
}

export default PageLoad;