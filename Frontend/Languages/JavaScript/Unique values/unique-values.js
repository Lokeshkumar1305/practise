let array = [3,5,6,3,7,1,7,9];
let uniqueValues=array.reduce((value,currentValue)=>{
    if(!value.includes(currentValue)){
        value.push(currentValue);
    }
    return value;
},[]);
console.log(uniqueValues);