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
    this.salesPerHourArray = [];
    this.totalSalesPerHour = function(){
        return (Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer) * Math.floor(this.avgSales)
        ;
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
    elNameHeader.innerHTML = 'Name of Store';
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
        store.salesPerHourArray.push(result);
    }
    let elTotalTableData = document.createElement('th');
    elRow.appendChild(elTotalTableData);
    elTotalTableData.innerHTML = store.totalSalesPerDay;
}

//Display footer info
function displayFooter(){
    let elFooterRow = document.createElement('tr');
    elTable.appendChild(elFooterRow);
    let elFooterTitle = document.createElement('th');
    elFooterRow.appendChild(elFooterTitle);
    elFooterTitle.setAttribute('class', 'footer');
    elFooterTitle.innerHTML = 'Total';
    let total = 0;
    for(let i=0; i<WhichHour.length; i++){
        let totalSalesPerHour = 0;
        for(let j=0; j<PaperArray.length; j++){
            totalSalesPerHour += PaperArray[j].salesPerHourArray[i];
        }
        let elTotalSalesPerHourFooter = document.createElement('th');
        elFooterRow.appendChild(elTotalSalesPerHourFooter);
        elTotalSalesPerHourFooter.innerHTML = totalSalesPerHour;
        total += totalSalesPerHour;
    }
    console.log(total);
    let elTotalSalesPerDayFooter = document.createElement('th');
    elTotalSalesPerDayFooter.setAttribute('class','footer');

    elFooterRow.appendChild(elTotalSalesPerDayFooter);
    elTotalSalesPerDayFooter.innerHTML = total;

}



let storeName = elForm.storeName;
let storeMinimum = elForm.storeMinimum;
let storeMaximum = elForm.storeMaximum;
let avgSales = elForm.avgSales;

function createNewStore(event){
    event.preventDefault();
    elTable.removeChild(elTable.childNodes[elTable.childNodes.length - 1]);
    let newStore = new PaperCo('Rice Paper: ' + storeName.value, storeMinimum.value, storeMaximum.value, avgSales.value);
    console.log(newStore);
    PaperArray.push(newStore);
    displayTotalCookies(newStore);
    displayFooter();
}

elForm.addEventListener('submit', createNewStore);

function populateTable() {
    displayTableHeader();
    for(let i = 0; i < PaperArray.length; i++) {
        displayTotalCookies(PaperArray[i]);
    }
    displayFooter();
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