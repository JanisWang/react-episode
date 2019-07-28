// return episode objects by sort type (date or name) with order type (ASC/DESC)
function SortEpisodeList(episodeList, sortType, order) {

    episodeList.sort(function(a, b) {
        // default to sort by date ASC
        let nameA = a.airdate.toUpperCase();
        let nameB = b.airdate.toUpperCase();
        if (sortType === 'name') {
          nameA = a.name.toUpperCase();
          nameB = b.name.toUpperCase();
        }
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // when name values are equal
        return 0;
    });
    // reverse sorted episodeList when order by DESC
    if (order === 'desc') {
        episodeList.reverse();
    }
    return episodeList;
}

export default SortEpisodeList;