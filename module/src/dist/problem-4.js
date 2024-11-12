"use strict";
const calculateShapeArea = (shape) => {
    if (shape.shape == "circle") {
        return parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2));
    }
    else if (shape.shape == "rectangle") {
        return shape.width * shape.height;
    }
    else {
        return 0;
    }
};
const circle = {
    shape: "circle",
    radius: 5
};
const rectangle = {
    shape: "rectangle",
    width: 4,
    height: 6
};
const circleArea = calculateShapeArea(circle);
const rectangleArea = calculateShapeArea(rectangle);
console.log("Circle area:", circleArea);
console.log("Rectangle area:", rectangleArea);
