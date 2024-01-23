

var ArrayOfCoordinates = [[1,4], [-2,-4],[4,7],[12,2],[20,-3],[2,-15]]
//TacoLocation = [x0,y0];

function distance(point1, point2)
{
    var a = Math.abs((point2[0]-point1[0]),2);
    var b = Math.abs((point2[1]-point1[1]),2);
    var distance = a+b;
    console.log(distance);
    return a+b;
}

function avgDistance(pointCloud)
{
    var avgPosition = [0,0];
    var center = [0,0];
    for(i=0; i < pointCloud.length; i++)
    {
        avgPosition[0] += pointCloud[i][0];
        avgPosition[1] += pointCloud[i][1];
    }
    avgPosition[0] = Math.round(avgPosition[0]/pointCloud.length);
    avgPosition[1] = Math.round(avgPosition[1]/pointCloud.length);

    return avgPosition;
}

var position1 = [2,-2];
var position2 = [0,0];
console.log(distance(position1, position2));
console.log(avgDistance(ArrayOfCoordinates))

var sum = 0;
for(var i = 0; i < ArrayOfCoordinates.length; i++)
{   
    distance([14, -1], ArrayOfCoordinates[i]);
    sum += distance;
}

console.log(sum);

// distance 1 = sqrt((x1-x0)^2+(y1-y0)^2)