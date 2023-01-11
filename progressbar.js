const progressbarcontainer = 
document.getElementById('progressbarcontainer');

// 'var show' keeps track of whether the progress 
// bar should grow or shrink in width on each click
var show = false;

/*progressbarcontainer.onclick = */function handleProgressBar() {
    
    // decide to grow or shrink the progress bar 
    // dependent upon the 'var show' value of true or false
    // if true fn1 else fn2 (JavaScript shorthand)
    show == false 
    ? metadata(percentagefalse, true) 
    : metadata(percentagetrue, false);

}


