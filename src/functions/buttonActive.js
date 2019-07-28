// add class active when button clicks
function ButtonActive(season) {
    // find all button elements in season section
    const seasonBtn = document.getElementById('seasonBtn').querySelectorAll('button');
    // find the button which currently has class "active"
    const activeBtn = document.getElementsByClassName('active')[0];
    // add class "active" only to button that has been clicked
    seasonBtn[season].classList.add('active');
    // remove de-activate current active button
    activeBtn.classList.remove('active');
}

export default ButtonActive;