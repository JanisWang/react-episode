// add class active when button clicks
function ButtonActive(season) {
    let btnID = season;
    const seasonBtn = document.getElementById('seasonBtn').querySelectorAll('button');
    const activeBtn = document.getElementsByClassName('active')[0];
    seasonBtn[btnID].classList.add('active'); 
    activeBtn.classList.remove('active');
}

export default ButtonActive;