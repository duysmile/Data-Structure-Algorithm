// https://www.hackerrank.com/challenges/jim-and-the-orders/problem

function jimOrders(orders) {
    const times = orders.map((order, index) => {
        return {
            index,
            time: order[0] + order[1]
        };
    });

    const result = times.sort((a, b) => {
        return a.time - b.time;
    });
    console.log(result);

    return result.map(item => item.index + 1);
}

const arr = [ 
[122470, 725261],
[193218, 693005],
[355776, 603340],
[830347, 284246],
[974815, 823134],
[251206, 572501],
[55509 ,927152],
[299590, 651593],
[222305, 641645],
[984018, 463771],
[494787, 286091],
[217190, 833029],
[820867, 380896],
[744986, 630663],
[875880, 667],
[449199, 520904],
[924615, 511326],
[862614, 890277],
[959638, 373599],
[685864, 923011],
[922324, 407528],
[157354, 943714],
[380643, 714960],
[269853, 608576],
[290422, 195768],
 ];

console.log(jimOrders(arr));