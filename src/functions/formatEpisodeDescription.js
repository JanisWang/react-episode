// return first {count} words
function FormatEpisodeDescription(description) {
    const count = 35;
    let result = description;
    const descriptionArr = description.split(' ');
    if(descriptionArr.length > count) {
        result = descriptionArr.splice(0, count).join(' ') + '...</p>';
    }

    return result;
}

export default FormatEpisodeDescription;