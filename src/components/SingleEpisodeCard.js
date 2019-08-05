import React, { Component } from "react";
import FormatEpisodeDescription from '../functions/formatEpisodeDescription';
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';

class SingleEpisodeCard extends Component {
    render() {   
        return (
            <a className="card" href={this.props.episode.url} key={this.props.episode.id}>
                <div><img src={this.props.episode.image.medium} alt={this.props.episode.name} /></div>
                <div className="episodeTitle">{this.props.episode.name}</div>
                <div>{ReactHtmlParser(FormatEpisodeDescription(this.props.episode.summary))}</div>
                <div className="info">Date: {moment(this.props.episode.airdate).format("DD MMMM YY")} | Season: {this.props.episode.season} | Episode: {this.props.episode.number}</div>
            </a>
        );
    }
}

export default SingleEpisodeCard;