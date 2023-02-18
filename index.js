let text = document.querySelector(".container");
let jobs = ["Youtuber", "Freelancer" , "Web Developer", "Student"];
let jobIndex = 0;
let jobChange = 0;

updateText()
function updateText(){
    jobChange++
text.innerHTML = `<h3>mZee Dev a <u style="color: yellow;">${jobs[jobIndex].slice(0, jobChange)}</style> <h3>`;
if(jobChange == jobs[jobIndex].length){
    jobIndex++
    jobChange = 0;
}
if(jobs == jobs.length){
    jobs = 0;
}

setTimeout(updateText, 400)
}