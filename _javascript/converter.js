//Grabbing the relevent data from the DOM
const pSection = document.querySelector("#wrapperP");
const pSide = document.querySelector(".poundSide");
const mSection = document.querySelector("#wrapperM");
const mSide = document.querySelector(".metricSide");

//Convert function to take the entered data on the pound side and convert it to metric on the metric side.
function convert() {
    //grabbing the data from the page
    let currentAmountsP = pSection.querySelectorAll(".amount");
    let currentAmountsM = mSection.querySelectorAll(".amount");
    let currentTypeP = pSection.querySelectorAll(".type");
    let currentTypeM = mSection.querySelectorAll(".type");
    let currentIngredientP = pSection.querySelectorAll(".ingredient");
    let currentIngredientM = mSection.querySelectorAll(".ingredient");
    
    var i=0;
    //Checking to see the inputed type and converting accordingly
    for(i = 0; i <currentAmountsP.length; i++){
        switch (currentTypeP[i].value) {
        case "tsp":
            currentAmountsM[i].innerHTML = (currentAmountsP[i].value * 5);
            break;
        case "tbsp":
            currentAmountsM[i].innerHTML = (currentAmountsP[i].value * 15);
            break;
        case "cups":
            currentAmountsM[i].innerHTML = (currentAmountsP[i].value * 237);  
            break;
        case "oz":
            currentAmountsM[i].innerHTML = (currentAmountsP[i].value * 28);
            break;
        case "floz":
            currentAmountsM[i].innerHTML = (currentAmountsP[i].value * 30);
            break;
        case "pt":
            currentAmountsM[i].innerHTML = (currentAmountsP[i].value * 473); 
            break;
        case "qt":
            currentAmountsM[i].innerHTML = (currentAmountsP[i].value * 946);
            break;
        case "gal":
            currentAmountsM[i].innerHTML = (currentAmountsP[i].value * 3784);
            break;
        default:
        console.log("nothing selected");
        }
        //Setting the new type based on previous type and new amount
        if (currentTypeP[i].value == "oz") {
            currentTypeM[i].innerHTML = "gram";
        } 
        else if (currentAmountsM[i].innerHTML > 999) {
            let amountInLiters = (currentAmountsM[i].innerHTML/1000);
            currentAmountsM[i].innerHTML = amountInLiters;
            currentTypeM[i].innerHTML = "liters";
        } 
        else {
            currentTypeM[i].innerHTML = "ml";            
        }
        currentIngredientM[i].innerHTML = currentIngredientP[i].value;
    }
}
//Function to create a new line on the page
function addLine() {
    let currentContent = pSection.innerHTML;
    let newContent = (currentContent + "<div class='line poundSide'>" + pSide.innerHTML + "</div>");
    pSection.innerHTML= newContent;
    
    currentContent = mSection.innerHTML;
    newContent = (currentContent + "<div class='line metricSide'>" + mSide.innerHTML + "</div>");
    mSection.innerHTML= newContent;
}
//Function to reset the number of lines to just one
function reset() {
    let newContent = ("<div class='line poundSide'" + ">" + pSide.innerHTML + "</div>");
    pSection.innerHTML= newContent;
    
    newContent = ("<div class='line metricSide'" + ">" + mSide.innerHTML + "</div>");
    mSection.innerHTML= newContent;
}

//Site where I got all of my conversion data
//https://www.infoplease.com/science-health/weights-measures/us-metric-cooking-conversions