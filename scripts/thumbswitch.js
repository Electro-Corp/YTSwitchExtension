/*
    waitForEl(el) is a modified version of: https://stackoverflow.com/a/60062546
*/
function waitForEl(el) {
    return new Promise((resolve, reject) => {
        const intervalId = setInterval(() => {
        console.log("polling!!")
        if (document.querySelectorAll(el).length > 0) {
            clearInterval(intervalId);
            resolve();
        }
        }, 500);
    });
}

function randomize(){
    waitForEl(".yt-core-image").then(() => {
        const images = document.querySelectorAll(".yt-core-image")

        if(images){
            console.log(images.length)
        }

        images.forEach(img => {
            console.log(img.src)
        });

        console.log("done!!")
        //randomize();
    });
}


randomize();