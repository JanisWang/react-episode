import React, { Component } from "react";
import ReactHtmlParser from 'react-html-parser';
import '../index.scss';

// component: MovieInfo
// description: this component contains GOT feature image, and description
class MovieInfo extends Component {
  render() {
    const name = this.props.data.name;
    const genre = this.props.data.genres.join(', ');
    const rating = this.props.data.rating.average;
    const summary = ReactHtmlParser(this.props.data.summary);
    const officialSiteUrl = this.props.data.officialSite;
    const imageUrlOriginal = this.props.data.image.original;
    const imageUrlMedium = this.props.data.image.medium;

    return (
      <section id="movieInfo">
        <picture className="featureImage">
          <source srcSet={imageUrlMedium} media="(min-width: 769px)" />
          <img src= {imageUrlOriginal} alt={name}/>
        </picture>
        <div className="infoDetails">
          <h1>{name}</h1>
          <p className="info">Genre: {genre} | Rating: {rating}</p>
          {summary}
          <a className="button" href={officialSiteUrl}>Official Site</a>
        </div>
      </section>
    );
  }
}

export default MovieInfo;
