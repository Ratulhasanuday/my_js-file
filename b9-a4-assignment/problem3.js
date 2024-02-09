function deleteInvalids(array) {
    const result=array.filter(element => {
        return !isNaN(element)&& element!==null&& element!==undefined})
    return result;
}
const array=[ NaN, 1,12,0 ,-1,undefined ]
console.log(deleteInvalids(array))