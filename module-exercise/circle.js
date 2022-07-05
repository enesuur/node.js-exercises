function circleArea(radius){
    return "Circle Area: " +  Math.PI * Math.pow(radius,2);
}

function circumference(radius){
    return  "Circumference: " + 2 * Math.PI * radius;
}


module.exports = {
    circleArea,
    circumference
};