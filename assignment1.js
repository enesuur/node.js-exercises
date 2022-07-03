const radius = process.argv.slice(2);

function circleArea(radius){
    const area  = Math.PI *Math.pow(radius,2);
    console.log("radius: " + radius );
    console.log("area: " + area );
}
circleArea(radius);
