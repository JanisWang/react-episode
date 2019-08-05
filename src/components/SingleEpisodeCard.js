import React, { Component } from "react";
import FormatDate from '../functions/formatDate';
import FormatEpisodeDescription from '../functions/formatEpisodeDescription';
import ReactHtmlParser from 'react-html-parser';

class SingleEpisodeCard extends Component {
    render() {   
        return (
            <a className="card" href={this.props.episode.url} key={this.props.episode.id}>
                <div><img src={this.props.episode.image.medium} alt={this.props.episode.name} /></div>
                <div className="episodeTitle">{this.props.episode.name}</div>
                <div>{ReactHtmlParser(FormatEpisodeDescription(this.props.episode.summary))}</div>
                <div className="info">Date: {FormatDate(this.props.episode.airdate)} | Season: {this.props.episode.season} | Episode: {this.props.episode.number}</div>
            </a>
        );
    }
}

export default SingleEpisodeCard;