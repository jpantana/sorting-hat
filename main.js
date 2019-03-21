const students = [];

const printToDom = (divId, textToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};


const domStringBuilder = () => {
    let domString = ``;
    students.forEach((student) => {
        domString += ``;
    });
    printToDom(divId, domString);
};

const buttonEvents = () => {
    document.getElementById('').addEventListener('click', function())
};

const init = () => {
    
};
init();