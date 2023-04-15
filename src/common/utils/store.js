const supported =(()=>{
    try{
        localStorage.getItem('compatibility-check')
        return true
    }catch{
        return false
    }
})()

function setItem(...args){
    if(!supported){return ;}
    try{
        localStorage.setItem(...args)
    }catch{

    }
}
function getItem(key){
    if(!supported){return ;}
    try{
       return  localStorage.getItem(key)
    }catch{

    }
}

function removeItem(key){
    if(!supported) {return ;}
    try{
        return localStorage.removeItem(key)
    }catch{}
}

export default {
    setItem,
    getItem,
    removeItem,
    supported
}