let PaperArray = [];

let WhichHour = ['6a-7a', '7a-8a', '8a-9a', '9a-10a', '10a-11a', '11a-12p', '12p-1p', '1p-2p', '2p-3p', '3p-4p', '4p-5p', '5p-6p', '7p-8p'];

let elBody = document.getElementById('my-body');
let elStoreTitle = document.getElementById('store-title');
//find table by id
let elTable = document.getElementById('store-table');

//Declaring
let PaperCo = function(name, minCustomer, maxCustomer, avg){
    this.storeName = name;
    //creating a new property giving a new value
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgSales = avg;
    this.totalSales = function(){
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

function displayTotalCookies(store) {
    let elRow = document.createElement('tr');
    elTable.appendChild(elRow);
    for(let i = 0; i < WhichHour.length; i ++) {
        let elTableData = document.createElement('td');
        elRow.appendChild(elTableData);
        elTableData.innerHTML = store.totalSales();
    }
}

function populateTable() {
    for(let i = 0; i < PaperArray.length; i++) {
        displayTotalCookies(PaperArray[i]);
    }
}

populateTable();




// function displayStoreTitles() {
//     for(let i = 0; i < PaperArray.length; i++) {
//         let elStoreTitle = document.createElement('h1');
//         elBody.appendChild(elStoreTitle);
//         elStoreTitle.innerHTML = PaperArray[i].name;
//     }
// }

// displayStoreTitles();
// console.log(displayStoreTitles);

// function displayTotalSales(store){
//     let elRow = document.createElement('tr');
//     elTable.appendChild(elRow);
//     for(let i = 1; i<WhichHour.length; i++){
//         let elTableData = document.createElement('td');
//         elRow.appendChild(elTableData);
//         elTableData.innerHTML = store.totalSales;
//     }
// }
// displayTotalSales();
// console.log(displayTotalSales);

// function populateTable(){
//     for(let i = 0; i<PaperArray; i++){
//         displayTotalSales(PaperArray[i]);
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