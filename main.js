const students = [];
const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
const exspelled = [];


const printToDom = (divId, textToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};



const domStringBuilder = () => {
    let domString = ``;
    let students = [];
    students = document.getElementById('hoggyName').value;
    // students.forEach((student) => {
    // domString += `<p>${student}</p>`;
    // houses.forEach((house) => {
    //     domString += `<p>${Math.floor(Math.random)}</p>`;
    // });
    
    //     domString += ``;
    // });
        const hogSort = Math.ceil(Math.random() * 4);

  
        domString += `<div class="card" style="width: 18rem;">`;
        domString += `  <img src="..." class="card-img-top" alt="...">
        `;
        domString += ``;
        domString += ``;
        // House Sorter 
        // console.log(hogSort);
        if (hogSort === 1) {
            console.log('Gryffindor');
            domString += `<p>'Gryffindor'</p>`;
            domString += `<img class="card-img-top src="https://images.pottermore.com/bxd3o8b291gf/49zkCzoZlekCmSq6OsycAm/da6278c1af372f18f8b6a71b226e0814/PM_House_Pages_400_x_400_px_FINAL_CREST2.png?w=550&h=550&fit=thumb&f=center&q=85">`;
        } else if (hogSort === 2) {
            console.log('Hufflepuff');
            domString += `<p>'Hufflepuff'</p>`;
            domString += `<img class="card-img-top src="https://images.pottermore.com/bxd3o8b291gf/2GyJvxXe40kkkG0suuqUkw/e1a64ec404cf5f19afe9053b9d375230/PM_House_Pages_400_x_400_px_FINAL_CREST3.png?w=550&h=550&fit=thumb&f=center&q=85">`;
        } else if (hogSort === 3) {
            console.log('Ravenclaw');
            domString += `<p>'Ravenclaw'</p>`;
            domString += `<img class="card-img-top src="https://images.pottermore.com/bxd3o8b291gf/5pnnQ5puTuywEEW06w2gSg/91abff3d923b4785ed79e9abda07bd07/PM_House_Pages_400_x_400_px_FINAL_CREST.png?w=550&h=550&fit=thumb&f=center&q=85">`;
        } else if (hogSort === 4) {
            console.log('Slytherin');
            domString += `<p>'Slytherin';</p>`;
            domString += `<img class="card-img-top src="https://images.pottermore.com/bxd3o8b291gf/4U98maPA5aEUWcO8uOisOq/e01e17cc414b960380acbf8ace1dc1d5/PM_House_Pages_400_x_400_px_FINAL_CREST4.png?w=550&h=550&fit=thumb&f=center&q=85">`;
        };
        domString += `</div>`;


  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>








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


// const hoggyForm = () => {

// }

const buttonEvents = () => {
    document.getElementById('letsGetSorting').addEventListener('click', domFormBuilder);
};

const init = () => {
    buttonEvents();
};
init();