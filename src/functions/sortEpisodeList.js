// return episode objects by name ASC/DESC
function SortEpisodeList(episodeList, sortType, order) {

    episodeList.sort(function(a, b) {
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
        // names must be equal
        return 0;
      });
    
    if (order === 'desc') {
        episodeList.reverse();
    }
    return episodeList;
}

export default SortEpisodeList;