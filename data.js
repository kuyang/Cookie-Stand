let PaperArray = [];

let WhichHour = ['6a-7a', '7a-8a', '8a-9a', '9a-10a', '10a-11a', '11a-12p', '12p-1p', '1p-2p', '2p-3p', '3p-4p', '4p-5p', '5p-6p', '7p-8p'];

//let elBody = document.getElementById('my-body');
//let elStoreTitle = document.getElementById('store-title');
//find table by id
let elTable = document.getElementById('store-table');
let elForm = document.getElementById('store-form');

//Declaring a variable to assign("=") a function.
let PaperCo = function(name, minCustomer, maxCustomer, avg){
    this.storeName = name;
    //creating a new property giving a new value within the object constructor.
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgSales = avg;
    this.totalSalesPerDay = 0;
    this.totalSalesPerHour = function(){
        return (Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer) * this.avgSales;
    };
};
//Math.floor((Math.random() * 100) + 1);
//(Math.floor(Math.random() * (this.maxCasters - this.minCasters)) + this.minCasters) * this.spellsPerCaster; 

let PaperOG = new PaperCo('Rice Paper: OG', 23, 90, 3);
let PaperUptown = new PaperCo('Rice Paper: Uptown', 7, 45, 2);
let PaperEvo = new PaperCo('Rice Paper: Evolution Park', 12, 75, 2);

PaperArray.push(PaperOG, PaperUptown, PaperEvo);

console.log(PaperOG);
console.log(PaperUptown);
console.log(PaperEvo);
console.log(PaperArray);
console.log(PaperEvo.totalSalesPerHour);


function displayTableHeader(){
    let elRow = document.createElement('tr');
    elTable.appendChild(elRow);
    let elNameHeader = document.createElement('th');
    elRow.appendChild(elNameHeader);
    elNameHeader.innerHTML = 'Name of School';
    for(let i = 0; i<WhichHour.length; i++){
        let elTableHeader = document.createElement('th');
        elRow.appendChild(elTableHeader);
        elTableHeader.innerHTML = WhichHour[i];
    }
    let elTotalHeader = document.createElement('th');
    elRow.appendChild(elTotalHeader);
    elTotalHeader.innerHTML = 'Total';
}

function displayTotalCookies(store) {
    let elRow = document.createElement('tr');
    elTable.appendChild(elRow);
    let elRowHeader = document.createElement('th');
    elRow.appendChild(elRowHeader);
    elRowHeader.innerHTML = store.storeName;
    for(let i = 0; i < WhichHour.length; i ++) {
        let result = store.totalSalesPerHour();
        let elTableData = document.createElement('td');
        elRow.appendChild(elTableData);
        elTableData.innerHTML = result;
        store.totalSalesPerDay += result;
        //elTableData.innerHTML = store.totalSalesPerHour;
    }
    let elTotalTableData = document.createElement('th');
    elRow.appendChild(elTotalTableData);
    elTotalTableData.innerHTML = store.totalSalesPerDay;
}

let storeName = elForm.storeName;

function createNewStore(event){
    event.preventDefault();
    let newStore = new PaperCo(storeName.value, 20, 300, 3);
    console.log(newStore);
    displayTotalCookies(newStore);
}

elForm.addEventListener('submit', createNewStore);

function populateTable() {
    displayTableHeader();
    for(let i = 0; i < PaperArray.length; i++) {
        displayTotalCookies(PaperArray[i]);
    }
}

populateTable();



// function displayTotalSalesPerHourPerHour(store){
//     let elRow = document.createElement('tr');
//     elTable.appendChild(elRow);
//     for(let i = 1; i<WhichHour.length; i++){
//         let elTableData = document.createElement('td');
//         elRow.appendChild(elTableData);
//         elTableData.innerHTML = store.totalSalesPerHour;
//     }
// }
// displayTotalSalesPerHourPerHour();
// console.log(displayTotalSalesPerHourPerHour);


// function displayStoreTitles() {
//     for(let i = 1; i < PaperArray.length; i++) {
//         let elStoreTitle = document.createElement('h2');
//         elStoreTitle.setAttribute('class', 'store-title');
//         elBody.appendChild(elStoreTitle);
//         elStoreTitle.innerHTML = PaperArray[i].name;
//     }
// }

// displayStoreTitles();


// function populateTable(){
//     for(let i = 0; i<PaperArray; i++){
//         displayTotalSalesPerHourPerHour(PaperArray[i]);
//     }
// }

// populateTable();


// // PaperCo.prototype.gethourlyCookies = function(){
// //     for(var i=1; i < WhichHour.length; i++) {
// //         var total =  this.randomCustomer * this.avgSales;
// //         console.log('hourly sales: ', this.gethourlyCookies);
// //         this.hourlyCookies.push(total);
// //         this.totalCookies += total;
// //     }
// // };

// //initiating new instances of our store constructor

// // PaperArray.push(PaperOG, PaperUptown, PaperEvo);

// // PaperCo.prototype.render = function() {
// //     var storeSection = document.getElementById('store-table');
// //     var row = document.createElement('tr');
// //     var td = document.createElement('td');
// //     td.innerHTML = this.name;
// //     row.appendChild(td);

// //     for (var i = 0; i < this.hourlyCookies.length; i++) {
// //         var tdHourly = document.createElement('td');
// //         tdHourly.innerHTML = this.hourlyCookies[i];
// //         row.appendChild(tdHourly);
// //     }

// //     var total = document.createElement('td');
// //     total.innerHTML = this.totalCookies;
// //     row.appendChild(total);

// //     storeSection.appendChild(row);
// // };

// // function generateTableHeading(){
// //     var storeSection = document.getElementById('store-table');
// //     var thead = document.createElement('thead');
// //     storeSection.appendChild(thead);
// //     var row = document.createElement('tr');
// //     thead.appendChild(row);
// //     var td = document.createElement('td');
// //     td.innerHTML = 'Location';
// //     row.appendChild(td);

// //     for (var i = 0; i < WhichHour.length; i++) {
// //         var tdHourly = document.createElement('td');
// //         tdHourly.innerHTML = WhichHour[i];
// //         row.appendChild(td);
// //     }

// //     var tdTotal = document.createElement('th');
// //     tdTotal.textContent = this.totalCookies;
// //     tdTotal.innerHTML = 'Total';
// //     row.appendChild(tdTotal);
// //     storeSection.appendChild(row);
// // }

// // generateTableHeading();

// // PaperArray.forEach(function(store){
// //     console.log(store);
// //     PaperArray.gethourlyCookies();
// //     PaperArray.render();
// // 