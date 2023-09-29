
async function loadFile(){
    let fileLoaded = false;

    if(fileLoaded){
        return "File loaded";
    }
    else{
        throw "File is not loaded";
    }
}
loadFile().then((a)=>console.log(a)).catch((e)=>console.log(e));

//let message = await loadFile(); -------------- error ------------
//console.log(message);

async function startProgram(){
    try{
        let message = await loadFile();
        console.log(message);
    }
    catch(error){
        console.log(error);
    }
    
}

startProgram();