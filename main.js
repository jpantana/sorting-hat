const students = [];
const house = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
const deathEaters = [];


const printToDom = (divId, textToPrint) => {
    // console.log('print to dom is running');
    // console.log(textToPrint);
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

// this works for sorting
const studentSort = () => {
    students.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;  
    })
};

const domStringBuilder = () => {
        let domString = ``;
        students.forEach((student) => { // House Sorter 
        if (student.house === 'Gryffindor') {
            domString += `<div class="gryfCard card col-4 m">`;
        }
        else if (student.house === 'Hufflepuff') {
            domString += `<div class="huffCard card col-4 m">`;
        }
        else if (student.house === 'Ravenclaw') {
            domString += `<div class="raveCard card col-4 m">`;
        }
        else if (student.house === 'Slytherin') {
            domString += `<div class="slytCard card col-4 m">`;
        }
        domString += `  <h2 class="card-title">${student.name}</h2>`;
        domString += `  <h5 class="card-text">${student.house}</h5>`;
        if (student.house === 'Gryffindor') {
            domString += `<img class="card-img-top" src="https://images.pottermore.com/bxd3o8b291gf/49zkCzoZlekCmSq6OsycAm/da6278c1af372f18f8b6a71b226e0814/PM_House_Pages_400_x_400_px_FINAL_CREST2.png?w=550&h=550&fit=thumb&f=center&q=85">`;
        } else if (student.house === 'Hufflepuff') {
            domString += `<img class="card-img-top" src="https://images.pottermore.com/bxd3o8b291gf/2GyJvxXe40kkkG0suuqUkw/e1a64ec404cf5f19afe9053b9d375230/PM_House_Pages_400_x_400_px_FINAL_CREST3.png?w=550&h=550&fit=thumb&f=center&q=85">`;
        } else if (student.house === 'Ravenclaw') {
            domString += `<img class="card-img-top" src="https://images.pottermore.com/bxd3o8b291gf/5pnnQ5puTuywEEW06w2gSg/91abff3d923b4785ed79e9abda07bd07/PM_House_Pages_400_x_400_px_FINAL_CREST.png?w=550&h=550&fit=thumb&f=center&q=85">`;
        } else if (student.house === 'Slytherin') {
            domString += `<img class="card-img-top" src="https://images.pottermore.com/bxd3o8b291gf/4U98maPA5aEUWcO8uOisOq/e01e17cc414b960380acbf8ace1dc1d5/PM_House_Pages_400_x_400_px_FINAL_CREST4.png?w=550&h=550&fit=thumb&f=center&q=85">`;
        }
        domString += `  <button type="button" id="${student.name}" class="btn expel btn-danger">Expel</button>`;
        domString += `</div>`;
    }); // end forEach    
    printToDom('studentCards', domString);
    expelEvent();
};


const domFormBuilder = () => {
    let domString = ``;
        domString += `<form>`;
        domString += `  <div class="form-group">`;
        domString += `     <label for="hoggyName"><em>Witch's</em> or <em>Wizard's</em> Full Name</label>`;
        domString += `     <input autocomplete="off" type="text" class="form-control" id="hoggyName" aria-describedby="emailHelp" placeholder="Enter full name">`;
        domString += `  </div>`;
        domString += `      <button type="submit" id="sortMe" class="btn btn-primary">Let's Get Sorted!</button>`;
        domString += `</form>`;
        printToDom('sortingForm', domString);
        secondButtonEvent();
};

//modal attempt
// const expelStudent = () => {
//     let domString = '';
//     // modal
//     domString += `<div id="myDialog" class="modal" tabindex="-1" role="dialog">`;
//     domString +=    `<div class="modal-dialog" role="document">`;
//     domString += `    <div class="modal-content">`;
//     domString += `      <div class="modal-header">`;
//     domString += `        <h5 class="modal-title">Modal title</h5>`;
//     domString += `        <button type="button" class="close" data-dismiss="modal" aria-label="Close">`;
//     domString += `          <span aria-hidden="true">&times;</span>`;
//     domString += `        </button>`;
//     domString += `      </div>`;
//     domString += `      <div class="modal-body">`;
//     domString += `        <p>Modal body text goes here.</p>`;
//     domString += `      </div>`;
//     domString += `      <div class="modal-footer">`;
//     domString += `        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>`;
//     domString += `        <button type="button" class="btn btn-primary">Save changes</button>`;
//     domString += `      </div>`;
//     domString += `    </div>`;
//     domString += `  </div>`;
//     domString += `</div>`;

//     // document.getElementById("myDialog").showModal(domString);
// };

const studentAdd = () => {
    let newStudent = {
        name: document.getElementById('hoggyName').value,
        house: selectHouse(),
    }
    let testInput = document.getElementById('hoggyName').value;
    if (testInput.value !== null && testInput === "") {
        alert(`You must enter a student name.`);
    } else {
        students.push(newStudent);
        studentSort();
        domStringBuilder();
    }
};


const selectHouse = () => {
    const hogSort = (Math.floor(Math.random() * 4) +1);
    // console.log(hogSort);
    if (hogSort === 1) {
        return 'Gryffindor';
    } else if (hogSort === 2) {
        return 'Hufflepuff';
    } else if (hogSort === 3) {
        return 'Ravenclaw';
    } else if (hogSort === 4) {
        return 'Slytherin';
    }
};

const expelEvent = () => {
    let everyCard = document.querySelectorAll('.expel');
    // console.log(everyCard);
    everyCard.forEach((card) => {
    card.addEventListener('click', removeStudent);
    });
};


const removeStudent = (e) => {
    // console.log(e.currentTarget.id);
    students.forEach((object, i) => {
        if (object.name === e.currentTarget.id) {;
            deathEaters.push(object);
            students.splice(i, 1);
        }
    })
    // console.log(removeStudent);
    domStringBuilder();
    deathEatersDom();
};


const deathEatersDom = () => {
    let domString = ``;
        deathEaters.forEach((deathEater) => {
            domString += `<div class="card col-4 m deathEaterCard">`;
            domString += `  <span class="badge badge-secondary" style="margin: auto;height: 1.7em;font-size: 1.5em;">Death Eater</span>`
            domString += `  <h3 class="h3 card-title text-center">${deathEater.name}</h3>`;
            domString += `  <h5 class="card-text"><strike>${deathEater.house}</strike></h5>`;
            domString += `</div>`;
        }); 
    // console.log("death eaters dom is working");
    printToDom('deathEatersDiv', domString);
};


const buttonEvents = () => {
    document.getElementById('letsGetSorting').addEventListener('click', domFormBuilder);
};


const secondButtonEvent = () => {
    document.getElementById('sortMe').addEventListener('click', studentAdd);
};


const init = () => {
    buttonEvents();
};

init();