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

const sonInput=checkName('sakib')
console.log(sonInput)