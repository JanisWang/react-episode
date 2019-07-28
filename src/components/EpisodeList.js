import React, { Component } from "react";
import ReactHtmlParser from 'react-html-parser';
import FormatDate from '../functions/formatDate';
import SortEpisodeList from '../functions/sortEpisodeList';
import FormatEpisodeDescription from '../functions/formatEpisodeDescription';
import ButtonActive from '../functions/buttonActive';
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
    const episodes = data._embedded.episodes;
    let items = [];
    let newEpisodes = SortEpisodeList(episodes, props.sortType, props.order);
    newEpisodes.forEach(element => {
        if (props.season === 0) {
            items.push(<EpisodeItem episode={element} />);
        } else if (element.season === props.season) {
            items.push(<EpisodeItem episode={element} />);
        }
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
          sortType: 'date',
          order: 'asc',
        };
    }

    render() {
        const seasonButtons = [];
        for(let i = 1; i<= 8; i++){
            seasonButtons.push(
                <button className="button" key={i} onClick={() => this.setState({value: i}, ButtonActive(i))}>{i}</button>
            );
        }
        return (
            <section id="episodeCards">
                <div id="seasons">
                    <header>
                        <h2>Seasons</h2>
                        <select onChange={(e) => this.setState({ sortType: e.target.value })}>
                            <option value="date">Sort by date</option>
                            <option value="name">Sort by Name</option>
                        </select>
                        <select onChange={(e) => this.setState({ order: e.target.value })}>
                            <option value="asc">⥣</option>
                            <option value="desc">⥥</option>
                        </select>
                    </header>
                    <div id="seasonBtn" className="seasons">
                        <button className="button active" onClick={() => this.setState({value: 0}, ButtonActive(0))}>All</button>
                        {seasonButtons}
                    </div>

                </div>
                <ListEpisode season={this.state.value} sortType={this.state.sortType} order={this.state.order} />
            </section>
        );
    }
}

export default EpisodeList;