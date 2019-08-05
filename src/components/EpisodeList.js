import React, { Component } from "react";
import SingleEpisodeCard from './SingleEpisodeCard';
import SortEpisodeList from '../functions/sortEpisodeList';
import '../index.scss';

// component: EpisodeList
// description: this component contains season select options, and episode list
class EpisodeList extends Component {
    render() {
        let items = [];
        let newEpisodes = SortEpisodeList(this.props.episodes, this.props.sortType, this.props.order);
        newEpisodes.forEach(element => {
            if (this.props.currentSeason === 0) {
                items.push(<SingleEpisodeCard episode={element} />);
            } else if (element.season === this.props.currentSeason) {
                items.push(<SingleEpisodeCard episode={element} />);
            }
        });
        return (
            <section id="episodeCards">
                <h2>Episodes</h2>
                <article>{items}</article>
            </section>
        );
    }
}

export default EpisodeList;