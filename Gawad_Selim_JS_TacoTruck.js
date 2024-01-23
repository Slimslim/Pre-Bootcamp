
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

var TestArray1 = [[1,4], [-2,-4],[4,7],[12,2],[20,-3],[2,-15]];
var TestArray2 = [[2,2], [-2,-2]];
var TestArray3 = [[10,4], [-4,0],[4,7]];
var TestArray4 = [[5,0], [3,4], [-3,4], [-5,0], [-3,-4], [3,-4]];

console.log(avgDistance(TestArray1));
console.log(avgDistance(TestArray2));
console.log(avgDistance(TestArray3));
console.log(avgDistance(TestArray4));