import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import data from '../data.json';
import '../index.scss';

// component: MovieInfo
// description: this component contains GOT feature image, and description
function MovieInfo() {
  const name = data.name;
  const genre = data.genres.join(', ');
  const rating = data.rating.average;
  const summary = ReactHtmlParser(data.summary);
  const officialSiteUrl = data.officialSite;
  const imageUrlOriginal = data.image.original;
  const imageUrlMedium = data.image.medium;

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

export default MovieInfo;
