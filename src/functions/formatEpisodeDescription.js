// return first {count} words
function FormatEpisodeDescription(description) {
    // define count, easy to change later when necessary
    const count = 35;
    const descriptionArr = description.split(' ');
    // return first {count} number words in description.
    if(descriptionArr.length > count) {
        description = descriptionArr.splice(0, count).join(' ') + '...</p>';
    }
    return description;
}

export default FormatEpisodeDescription;