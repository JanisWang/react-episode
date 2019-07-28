import React, { Component } from "react";
import MovieInfo from './MovieInfo';
import EpisodeList from './EpisodeList';

class PageLoad extends Component {
    render() {
        return(
            <main>
                <MovieInfo />
                <EpisodeList />
            </main>
        );
    }
}

export default PageLoad;