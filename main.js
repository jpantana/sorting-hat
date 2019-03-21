const students = [];
const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
const exspelled = [];


const printToDom = (divId, textToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};


const domStringBuilder = () => {
    let domString = ``;
    // let students = [];
    students = document.getElementById('hoggyName').value;
    // students.forEach((student) => {
    domString += `<p>${student}</p>`;
        // domString += `<p>(math.random</p>`;
    // });
    printToDom('studentCards', domString);
};


const domFormBuilder = () => {
    let domString = ``;
        domString += `<form>`;
        domString += `  <div class="form-group">`;
        domString += `     <label for="hoggyName">Full Name</label>`;
        domString += `     <input type="text" class="form-control" id="hoggyName" aria-describedby="emailHelp" placeholder="Enter full name">`;
        domString += `  </div>`;
        domString += `      <button type="submit" id="sortMe" class="btn btn-primary">Let's Get Sorted!</button>`;
        domString += `</form>`;
    

    printToDom('sortingForm', domString);
    document.getElementById('sortMe').addEventListener('click', domStringBuilder);
};


const hoggyForm = () => {

}

const buttonEvents = () => {
    document.getElementById('letsGetSorting').addEventListener('click', domFormBuilder);
};

const init = () => {
    buttonEvents();
};
init();