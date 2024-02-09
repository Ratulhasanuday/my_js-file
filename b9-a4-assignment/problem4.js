function password(obj) {
    let newEnter={...obj};
    if(newEnter.birthYear &&newEnter.birthYear<1000){
        return 'invalid';
    }
    else if (newEnter.siteName ) {
        newEnter.siteName=newEnter.siteName.charAt(0).toUpperCase() + newEnter.siteName.slice(1);//uppercase 
         passwordCreate=newEnter.siteName+'#'+newEnter.birthYear+'@'+newEnter.name;
        return passwordCreate;
    }
    
    return newEnter;
}
const result=password({ name: "kolimuddin" ,
 birthYear: 1990, 
 siteName: "google" 
})
console.log(result)
