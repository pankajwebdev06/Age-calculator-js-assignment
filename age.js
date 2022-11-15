const calculateAge = () => {
    // getting elements value from html documents.
    let date = parseInt(document.getElementById('date').value);
    let month = parseInt(document.getElementById('month').value);
    let year = parseInt(document.getElementById('year').value);
    let name = document.getElementById('name').value;

    // getting todays date, year and month
    let newdate = new Date();
    let ldate = newdate.getDate();
    let lmonth = newdate.getMonth();
    let lyear = newdate.getFullYear();
 
    if( date > 31){ // condition if any body want to type month above 31.
        alert('Please Enter a valid date')
        return;
    }

    if(lmonth < month){  // condition if this month is less than dob month
        lmonth  = lmonth + 12
        lyear = lyear - 1
    }

    const mmonth = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (ldate < date){ // condition if this date is less than dob date
        ldate = ldate + mmonth[lmonth - 1]
        lmonth = lmonth - 1
    }

    // Formulas to get age

    let dobyear = lyear - year;
    let dobmonth = (lmonth - month) + 1;
    let dobdate = ldate - date;

    // Manuplating the html elements (DOM manuplating)
    document.getElementById('result').innerHTML = `<h4> Hi ${name} you are just ${dobyear} years ${dobmonth } months and ${dobdate} days old</h4>`


}