const playVideo = ()=>{
    const thalaVideo = document.getElementById("status");
    document.getElementById("tagline-2").innerText = "Woh You Got A thala ! ";
    // thalaVideo.play = true;
    thalaVideo.play();
}

const pauseVideo = ()=>{
    var vid = document.getElementById("status");
    // thalaVideo.play = false;
    document.getElementById("tagline-2").innerText = "You Not Got a thala ! ";
    vid.pause();
}

function checkSum7(input) {
    // Extract all digits from the input string
    let digits = input.match(/\d/g);
    
    // If no digits are found, return false
    if (!digits) {
        return false;
    }
    
    // Convert the digits to integers and calculate the sum
    let sum = digits.map(Number).reduce((a, b) => a + b, 0);
    
    // Check if the sum equals 7
    return sum === 7;
}

function checkForThala() {
    let us = document.getElementById("thala").value;
    if(us.length == 7 || us === "7" || checkSum7(us)){
        playVideo();

    }
    else
    {
        pauseVideo();
    }
}