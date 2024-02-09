function deleteInvalids(array) {
    if(Array.isArray(array)){
        
        const newArray=array.filter(function(value){
            return !isNaN(value) && value!==null
        })
        return newArray;
    }
    else{
        return 'Invalid Array '
    }
   
}
// // const array=[ NaN, 1,12,0 ,-1,undefined,null ]
// const array={name:'ratul'}
// console.log(deleteInvalids(array))





// problem4


function password(enter) {
    let newEnter = { ...enter }; // Create a copy of the object
    if (newEnter.birthYear && newEnter.birthYear < 1000) { // Check if birthYear is less than 1000
        return 'invalid'; // Return 'invalid' if birthYear is invalid
    }
    else if (newEnter.siteName) { // Check if siteName is present
        // Capitalize the first letter of siteName
        newEnter.siteName = newEnter.siteName.charAt(0).toUpperCase() + newEnter.siteName.slice(1);
        
        // Concatenate siteName, '#', birthYear, '@', and name
        return newEnter.siteName + '#' + newEnter.birthYear + '@' + newEnter.name;
    }
    return newEnter; // Return the modified object
}

const result = password({ 
    name: "kolimuddin" ,
    birthYear: 199, 
    siteName: "google" 
});

console.log(result);





