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
  
        // House Sorter 
        const hogSort = Math.ceil(Math.random() * 4);
        // console.log(hogSort);
        if (hogSort === 1) {
            console.log('Gryffindor');
            domString += `<p>'Gryffindor'</p>`;
            domString += `<img src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwivzsnP1JThAhXqY98KHUKABSEQjRx6BAgBEAU&url=https%3A%2F%2Fwww.bhg.com%2Fshop%2Fyork-wallcoverings-harry-potter-hogwarts-house-crests-5pc-wall-accent-set-pf53d8f4a798db7160a5ed8c38864755e.html&psig=AOvVaw2WlEZUp5VeJmzO4Mg2FK5p&ust=1553306719570287">`;
        } else if (hogSort === 2) {
            console.log('Hufflepuff');
            domString += `<p>'Hufflepuff'</p>`;
            domString += `<img src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjx3o-N1ZThAhVqm-AKHRglC5QQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F159526011772866768%2F&psig=AOvVaw1CJL86Ta1-F50cjNX3HKRz&ust=1553306851624956">`;
        } else if (hogSort === 3) {
            console.log('Ravenclaw');
            domString += `<p>'Ravenclaw'</p>`;
            domString += `<img src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj16f3p1JThAhUyhuAKHYLVDBYQjRx6BAgBEAU&url=https%3A%2F%2Fwww.amazon.com%2FHarry-Potter-Magnet-Ravenclaw-Crest%2Fdp%2FB0018A390E&psig=AOvVaw1sUP9CRRZzo8cSXpQmg-hm&ust=1553306782154133">`;
        } else if (hogSort === 4) {
            console.log('Slytherin');
            domString += `<p>'Slytherin';</p>`;
            domString += `<img src="https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88362/91127/Harry-Potter-Slytherin-Crest-Official-wall-mounted-cardboard-cutout-buy-now-at-star__31920.1507640497.jpg?c=2?imbypass=on">`;
        };

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