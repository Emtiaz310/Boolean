let day;
switch (new Date().getDay()){
    case 0:
        day = "Sunday" ;
        break;
    case 1:
        day = "Monday" ;
        break;
    case 2:
        day = "Tuesday" ;
        break;
    case 3:
        day = "Wednesday" ;
        break;
    case 4:
        day = "Thursday" ;
        break;
    case 5:
        day = "Friday" ;
        break;
    case 6:
        day = "Saturday" ;
}
document.getElementById("dayaj").innerHTML = "Today " + day ;


/////////////
function myFunction (){
    let voteable ; 
    let age = Number(document.getElementById('age').value);
    if (isNaN(age)){
        voteable = "Input is not a number ";
    }
    else if (age < 18 ){
        voteable = " Too young"  ;
    }
    else{
        voteable = "Old enough" ;
    }
    document.getElementById('ageb').innerHTML = voteable + " to vote";
};

/////////// JavaScript if else and else if /////

const hour = new Date ().getHours();
let greeting ;
if( hour < 10 ){
    greeting = " Good Morning ";
}
else if ( hour <18 ){
    greeting = "Good Day" ;
}
else {
    greeting = "Good evening " ;
}
document.getElementById('daynight').innerHTML = greeting ;