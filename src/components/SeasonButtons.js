import React, { Component } from "react";
import ButtonActive from '../functions/buttonActive';

class SeasonButtons extends Component {
    render() {
        let UpdateCurrentSeason = this.props.UpdateCurrentSeason;
        let UpdateSortType = this.props.UpdateSortType;
        let UpdateOrderType = this.props.UpdateOrderType;
        let seasonNumber = this.props.seasonNumber;

        let seasonButtons = [];
        // generate season buttons by loop
        for(let i = 1; i<= seasonNumber; i++){
            seasonButtons.push(
                <button className="button" key={i} onClick={() => {UpdateCurrentSeason(i); ButtonActive(i);}}>{i}</button>
            );
        }
        
        return (
            <section id="seasons">
                <header>
                    <h2>Seasons</h2>
                    {/* Sort type selection: sort by name or date */}
                    <select onChange={(e) => UpdateSortType(e.target.value)}>
                        <option value="date">Sort by date</option>
                        <option value="name">Sort by Name</option>
                    </select>
                    {/* Order selection: order by asc or desc */}
                    <select onChange={(e) => UpdateOrderType(e.target.value)}>
                        <option value="asc">⥣</option>
                        <option value="desc">⥥</option>
                    </select>
                </header>
                <div id="seasonBtn" className="seasons">
                    <button className="button active" key="all" onClick={() => {UpdateCurrentSeason(0); ButtonActive(0);}}>All</button>
                    {seasonButtons}
                </div>
            </section>
        );
    }
}

export default SeasonButtons;