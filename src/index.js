module.exports = function reverse (n) {

string = String(n);
var i, a = [];
var arr = string.split('');
    for (i = 0; i < arr.length; i++) {
        if(arr[i] >= 0) {
        a.push(arr[i]);
        }
    }

    return a.reverse().join('');
}
