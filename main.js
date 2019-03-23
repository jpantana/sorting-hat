const students = [];
const house = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
const exspelled = [];


const printToDom = (divId, textToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};


const domStringBuilder = () => {
        let domString = ``;
        students.forEach((student) => { // House Sorter 
        domString += `<div class="card col-4 m">`;
        domString += `<h2 class="card-title">${student.name}</h2>`;
        domString += `<h5 id="sortedHouse" class="card-text">${student.house}</h5>`;
        if (student.house === 'Gryffindor') {
            domString += `<img class="card-img-top" src="https://images.pottermore.com/bxd3o8b291gf/49zkCzoZlekCmSq6OsycAm/da6278c1af372f18f8b6a71b226e0814/PM_House_Pages_400_x_400_px_FINAL_CREST2.png?w=550&h=550&fit=thumb&f=center&q=85">`;
        } else if (student.house === 'Hufflepuff') {
            domString += `<img class="card-img-top" src="https://images.pottermore.com/bxd3o8b291gf/2GyJvxXe40kkkG0suuqUkw/e1a64ec404cf5f19afe9053b9d375230/PM_House_Pages_400_x_400_px_FINAL_CREST3.png?w=550&h=550&fit=thumb&f=center&q=85">`;
        } else if (student.house === 'Ravenclaw') {
            domString += `<img class="card-img-top" src="https://images.pottermore.com/bxd3o8b291gf/5pnnQ5puTuywEEW06w2gSg/91abff3d923b4785ed79e9abda07bd07/PM_House_Pages_400_x_400_px_FINAL_CREST.png?w=550&h=550&fit=thumb&f=center&q=85">`;
        } else if (student.house === 'Slytherin') {
            domString += `<img class="card-img-top" src="https://images.pottermore.com/bxd3o8b291gf/4U98maPA5aEUWcO8uOisOq/e01e17cc414b960380acbf8ace1dc1d5/PM_House_Pages_400_x_400_px_FINAL_CREST4.png?w=550&h=550&fit=thumb&f=center&q=85">`;
        }
        domString += `<button type="button" id="expel" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
        Launch demo modal>Expel</button>`;
        domString += `</div>`;
    }); // end forEach
    printToDom('studentCards', domString);
    document.getElementById('expel').addEventListener('click', expelStudent);
};

const expelStudent = () => {
    alert("underage magic is prohibited and punished by expulsion");
    let domString = '';
    // modal
    domString += `<div class="modal" tabindex="-1" role="dialog">`;
    domString +=    `<div class="modal-dialog" role="document">`;
    domString += `    <div class="modal-content">`;
    domString += `      <div class="modal-header">`;
    domString += `        <h5 class="modal-title">Modal title</h5>`;
    domString += `        <button type="button" class="close" data-dismiss="modal" aria-label="Close">`;
    domString += `          <span aria-hidden="true">&times;</span>`;
    domString += `        </button>`;
    domString += `      </div>`;
    domString += `      <div class="modal-body">`;
    domString += `        <p>Modal body text goes here.</p>`;
    domString += `      </div>`;
    domString += `      <div class="modal-footer">`;
    domString += `        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>`;
    domString += `        <button type="button" class="btn btn-primary">Save changes</button>`;
    domString += `      </div>`;
    domString += `    </div>`;
    domString += `  </div>`;
    domString += `</div>`;
  

};

const studentAdd = () => {
    let newStudent = {
        name: document.getElementById('hoggyName').value,
        house: selectHouse(),
    }
     students.push(newStudent);   
     domStringBuilder();
};


const selectHouse = () => {
    const hogSort = Math.ceil(Math.random() * 4);
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
    document.getElementById('sortMe').addEventListener('click', studentAdd);
};


const buttonEvents = () => {
    document.getElementById('letsGetSorting').addEventListener('click', domFormBuilder);
};


const init = () => {
    buttonEvents();
};

init();