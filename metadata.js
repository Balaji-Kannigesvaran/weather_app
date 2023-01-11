// list of DOM UI elements which will receive attribute settings from metadata values


// insert API call here and fill metadata values with response data
// example: var percentagefalse = response.data.precentagefalse;
const percentagefalse = '80%';
const percentagetrue = '20%';

// this is where the settings for the DOM UI are stored.
// DOM settings like style, display, etc.
const metadata = function (width, showstatus) {
    const progressbar = document.getElementById('progressbar');
    const divtext = document.getElementById('divtext')[0];
    // begin triggers for css transition
    //
    // change width value which 
    progressbar.style.width = width;

    // toggle progressbarcontainer's click status using true/false
    show = showstatus;

    // change text color 
    showstatus == false ? divtext.style.color = '#ffffff' : divtext.style.color = '#153687';
    //
    // end triggers for css transition
}











// // list of DOM UI elements which will receive attribute settings from metadata values
// const progressbar = document.getElementById('progressbar');
// const divtext = document.getElementById('divtext');
// var show = false;

// /* progressbarcontainer.onclick =*/ function handleProgressBar() {
//     const progressbar = document.getElementById('progressbar');
// const divtext = document.getElementById('divtext');
// var show = false;

//     // decide to grow or shrink the progress bar 
//     // dependent upon the 'var show' value of true or false
//     // if true fn1 else fn2 (JavaScript shorthand)
//     show == false 
//     ? metadata(percentagefalse, true) 
//     : metadata(percentagetrue, false);

//     console.log("helloworld");
// }

// // insert API call here and fill metadata values with response data
// // example: var percentagefalse = response.data.precentagefalse;
// const percentagefalse = '80%';
// const percentagetrue = '20%';

// // this is where the settings for the DOM UI are stored.
// // DOM settings like style, display, etc.
//  const metadata = function (width, showstatus) {
//     const progressbar = document.getElementById('progressbar');
//     const divtext = document.getElementById('divtext');
//     var show = false;
    
//     // begin triggers for css transition
//     //
//     // change width value which 
//     progressbar.style.width = width;

//     // toggle progressbarcontainer's click status using true/false
//     show = showstatus;

//     // change text color 
//     showstatus == false ? divtext.style.color = '#ffffff' : divtext.style.color = '#153687';
//     //
//     // end triggers for css transition
// }

