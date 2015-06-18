function solve(first, second) {
    var start = new Date();
    var arr = second.split(' ').map(function (item) {
            return parseInt(item, 10);
        }),
        dif = parseInt(first.split(' ')[1], 10),
        j,i,
        count = 0,
        current,
        key;
    
    for (j = arr.length - 1; j >= 0; j--) {
        for(i = j - 1; i >= 0; i--) {

                if (Math.abs(current[0] - current[1]) === dif) {
                    count +=1;
                }
            }
        }        
    }
    console.log("Finished in ", new Date() - start);
    return count;
}

var nums = [];

for(var i=0; i < 10000; i++) {
    nums.push(Math.round(Math.random() * 1000000000) % 1000000000);
}

console.log("Created ", nums.length)
var res = solve(Math.abs(nums[3] - nums[6753]).toString(), nums.join(' '));
console.log("REs", res);