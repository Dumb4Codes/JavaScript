// async makes a function return a Promise.
// await makes a function wait for a Promise.

async function loadFile(){
    
    let fileLoaded = false;

    if(fileLoaded){
        return "File loaded";
    }
    else{
        throw "File is NOT loaded";
    }
}

loadFile().then((val) => console.log(val))
          .catch((error) => console.log(error));