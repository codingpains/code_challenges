var m1 = [
        [0,9,2,3,5,6],
        [2,4,3,5,4,6],
        [9,0,2,1,6,6],
        [7,8,5,3,2,6],
        [9,0,2,1,6,6],
        [0,0,5,6,3,6]
    ],
    peelCortex,
    spinLayer,
    spinMatrix,
    mergeLayer;

peelCortex = function (matrix) {
    var arr = [],
        top = [],
        bottom = [],
        right = [],
        left = [],
        i;

    top = matrix.shift();//Get top line
    bottom = matrix.pop();//Get bottom line
    for (i = 0; i < matrix.length; i += 1) {
        right.push(matrix[i].pop());
        left.push(matrix[i].shift());
    }

    arr = arr.concat(top, right, bottom.reverse(), left.reverse());

    return arr;
};

spinLayer = function (layer, positions) {
    var move, res;

    if (positions === layer.length) {
        res = layer;
    }
    else if (positions > layer.length) {
        positions = layer.length - (positions % layer.length);
        move = layer.splice(0, positions);
        res = layer.concat(move);
    } 
    else {
        move = layer.splice(layer.length - positions, positions);
        res = move.concat(layer);
    }

    return res;
};

mergeLayer2 = function (layer, matrix, level) {
    var top,
        right,
        bottom,
        left,
        current = 0,
        i;

    top = layer.splice(current, matrix.length);
    current = matrix.length;
    right = layer.splice(current, matrix.length);
    current += matrix.length;
    bottom = layer.splice(current, matrix.length).reverse();
    current += matrix.length;
    left = layer.splice(current, matrix.length).reverse();

    matrix[level] = top;
    matrix[matrix.length-1] = bottom;
    for (i = level; i < matrix.length - 3; i +=1 ) {
        matrix[i][level] = left.shift();
        matrix[level][matrix.length - 1] = right.shift();
    };
}

mergeLayer = function (layer, matrix, level) {
    var top,
        right,
        bottom,
        left,
        current = 0,
        i;

    console.log("\nMerging", level, layer.length);
    top = layer.splice(current, matrix.length - 2 * level);
    console.log("Top ", top, top.length);
    right = layer.splice(0, matrix.length - 2 - (2 * level));
    console.log("Right ", right, right.length);
    bottom = layer.splice(0, matrix.length - 2 * level).reverse();
    console.log("Bottom ", bottom, bottom.length);
    left = layer.splice(0, matrix.length - 2  - (2 * level)).reverse();
    console.log("Left ", left, left.length);

    console.log("Merging top");
    top.forEach(function (value, index) {
        index+=level;
        console.log("matrix[" + level + "][" + index + "]=", value);
        matrix[level][index] = value;
    });
    
    console.log("Merging right", right);
    right.forEach(function (value, index) {
        index+=(1+level);
        console.log("matrix[" + index + "][" + (matrix.length - level - 1) + "]=",value);
        matrix[index][matrix.length - level - 1] = value;
    });

    console.log("Merging bottom");
    bottom.forEach(function (value, index) {
        index+=level;
        console.log("matrix[" + (matrix.length - level - 1) + "][" + index + "]=",value);
        matrix[matrix.length - level - 1][index] = value;
    });

    console.log("Merging left", left);
    left.forEach(function (value, index) {
        index+=(1+level);
        console.log("matrix[" + index + "][" + level + "]=",value);
        matrix[index][level] = value;
    });
}

spinMatrix = function (matrix, positions) {
    var levels = Math.floor(matrix.length / 2),
        spinned = JSON.parse(JSON.stringify(matrix)),
        layer,
        resulting,
        i;
    console.log("Spin " + positions + "times");
    for (i = 0; i < levels; i++) {
        layer = peelCortex(matrix);
        console.log("unspinned ", layer, layer.length);
        layer = spinLayer(layer, positions);
        console.log("spinned   ", layer, layer.length);
        mergeLayer(layer, spinned, i);
        console.log("Spinned matrix");
        spinned.forEach(function (row) {
            console.log(row);
        });    
    }
    console.log("Spinned matrix");
    spinned.forEach(function (row) {
        console.log(row);
    });

    return spinned;
}

spinMatrix(m1, 3)