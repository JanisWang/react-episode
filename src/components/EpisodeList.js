import React, { Component } from "react";
import ReactHtmlParser from 'react-html-parser';
import FormatDate from '../functions/formatDate';
import SortByDate from '../functions/sortByDate';
import FormatEpisodeDescription from '../functions/formatEpisodeDescription';
import data from '../data.json';
import '../index.scss';

// load single episode item
function EpisodeItem(props) {
    return(
        <a className="card" href={props.episode.url} key={props.episode.id}>
            <div><img src={props.episode.image.medium} alt={props.episode.name} /></div>
            <div className="episodeTitle">{props.episode.name}</div>
            <div>{ReactHtmlParser(FormatEpisodeDescription(props.episode.summary))}</div>
            <div className="info">Date: {FormatDate(props.episode.airdate)} | Season: {props.episode.season} | Episode: {props.episode.number}</div>
        </a>
    );
}

// load episode list
function ListEpisode(props) {
    let episodes = data._embedded.episodes;
    let items = [];
    episodes = SortByDate(episodes, props.sortType);
    episodes.forEach(element => {
        items.push(<EpisodeItem episode={element} />);
    });
    return (
        <div id="episodes">
            <h2>Episodes</h2>
            <article>{items}</article>
        </div>
    );
}

// component: EpisodeList
// description: this component contains season select options, and episode list
class EpisodeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 0,
          sortType: 'asc',
        };
    }

    render() {
        const seasonButtons = [];
        for(let i = 1; i<= 8; i++){
            seasonButtons.push(
                <button className="button" key={i}>{i}</button>
            );
        }
        return (
            <section id="episodeCards">
                <div id="seasons">
                    <header>
                        <h2>Seasons</h2>
                        <select onChange={(e) => this.setState({ sortType: e.target.value })}>
                            <option value="asc">Sort by date ⥣ </option>
                            <option value="desc">Sort by date ⥥ </option>
                        </select>
                    </header>
                    <div id="seasonBtn" className="seasons">
                        <button className="button active">All</button>
                        {seasonButtons}
                    </div>

                </div>
                <ListEpisode season={this.state.value} sortType={this.state.sortType}/>
            </section>
        );
    }
}

export default EpisodeList;