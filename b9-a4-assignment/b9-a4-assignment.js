
function calculateMoney(ticketSele) {
    const  ticketPrice=120;
    let totalPrice=ticketSele*ticketPrice;
    const costDaruar=500;
    const costStaff=50;
    let costStaffTotal=costStaff*8;
    let totalCost=costDaruar+costStaffTotal;
    let totalOwn=totalPrice-totalCost;
    if (ticketSele<0) {
        return 'Invalid Number';
    }
    return totalOwn;
   
}




function checkName(name) {
    const sonName=name[name.length -1]
    if(sonName.toLowerCase()==='a'||sonName.toLowerCase()==='y'||sonName.toLowerCase()==='i'||sonName.toLowerCase()==='e'||sonName.toLowerCase()==='o'||sonName.toLowerCase()==='u'||sonName.toLowerCase()==='w'){
        return 'Good name';
    }
    else if(typeof name==="number"){
        return 'Invalid';
    }
    else if(typeof name.isArray===true){
        return 'Invalid';
        
    }
    else {
        return 'Bad name';
    }
}




function deleteInvalids(array) {
    if(Array.isArray(array)){
        
        const newArray=array.filter(function(value){
            return !isNaN(value) && value!==null
        })
        return newArray;
    }
    else{
        return 'Invalid Array ';
    }
   
}



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




function monthlySavings(arr,livingCost) {
    let savings=0;
    if ( arr.isArray!==false &&  livingCost!=="number") {
        return 'invalid input';
    }
 
    for(const newArray of arr){
        if(newArray >= 3000){
            savings= savings + newArray-(newArray*0.20) ;
        }
        else{
            savings= savings + newArray;
        }
    }
    savings = savings-livingCost;
    if (savings<0) {
        return 'earn more';
    }
    return savings;  
}