
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
    if (Array.isArray(matrix) && matrix.length) {
        let sort = matrix.map(function (value, index, array) {
            if (index % 2) return value.reverse();
            else return value;
        })
        result = sort.reduce((array,item)=>array.concat(item))

    }
    return result;
}

