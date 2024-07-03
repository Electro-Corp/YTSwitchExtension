currentPics = 0;


/*
    waitForEl(el) is a modified version of: https://stackoverflow.com/a/60062546
*/
function waitForEl(el) {
    return new Promise((resolve, reject) => {
        const intervalId = setInterval(() => {
        console.log("polling!!")
        if (document.querySelectorAll(el).length > 10) {
            clearInterval(intervalId);
            resolve();
        }
        }, 500);
    });
}

function waitForMore(el) {
    return new Promise((resolve, reject) => {
        const intervalId = setInterval(() => {
        if (document.querySelectorAll(el).length > currentPics) {
            clearInterval(intervalId);
            resolve();
        }
        }, 500);
    });
}


function randomize(){
    waitForEl(".yt-core-image").then(() => {
        const images = document.querySelectorAll(".yt-core-image");

        currentPics = images.length;

        if(images){
            console.log(images.length);
        }

        imagesources = [];

        images.forEach(img => {
            imagesources.push(img.src);
        });

        images.forEach(img => {
            src = null
            while(!src){
                num = randInRange(0, imagesources.length)
                src = imagesources[num];
                console.log(num)
                console.log(src);   
            }
            img.src = src;
        });
        console.log("done!!");

        waitForMore(".yt-core-image").then(() => {
            randomize();
        });

        //randomize();
    });
}

/*
    randInRange from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
function randInRange(min, max){
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}


randomize();