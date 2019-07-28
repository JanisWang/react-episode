// format datetime from "YYYY-MM-DD" to "DD {Month name} YYYY"
function FormatDate(date) {
    let dateArr = date.split('-');
    let year = dateArr[0];
    let month = dateArr[1];
    let day = dateArr[2];

    switch(month){
        case '01':
            month = 'January';
            break;
        case '02':
            month = 'Feburary';
            break;
        case '03':
            month = 'March';
            break;
        case '04':
            month = 'April';
            break;
        case '05':
            month = 'May';
            break;
        case '06':
            month = 'June';
            break;
        case '07':
            month = 'July';
            break;
        case '08':
            month = 'August';
            break;
        case '09':
            month = 'September';
            break;
        case '10':
            month = 'Octomber';
            break;
        case '11':
            month = 'November';
            break;
        case '12':
            month = 'December';
            break;
    }
 
    return day + ' ' + month + ' ' + year;
}

export default FormatDate;