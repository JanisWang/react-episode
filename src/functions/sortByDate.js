// return episode objects by date time ASC/DESC
function SortByDate(episodeList, sortType) {
    let dateArr = [];
    let newList = [];
    let dateItem, replacement;
    
    episodeList.forEach(element => {
        dateArr.push(parseInt(element.airdate.split('-').join(''))); 
    });
    for (let i=0; i < dateArr.length; i++) {
        if(sortType === 'asc') {
            dateItem = Math.min(...dateArr);
            replacement = 999999999;
        }
        if(sortType === 'desc') {
            dateItem = Math.max(...dateArr);
            replacement = 0;
        }
        let index = dateArr.indexOf(dateItem);
        newList.push(episodeList[index]);
        dateArr[index] = replacement;
    }
    return newList;
}

export default SortByDate;