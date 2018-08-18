var PaperArray = [];

var WhichHour = ['6a-7a', '7a-8a', '8a-9a', '9a-10a', '10a-11a', '11a-12p', '12p-1p', '1p-2p', '2p-3p', '3p-4p', '4p-5p', '5p-6p', '7p-8p'];


let PaperCo = function(name, minCustomer, maxCustomer, avg){
    this.storeName = name;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.avgSales = avg;
    this.hourlyCookies = [];
    this.totalCookies = 0;
    this.randomCustomer = function(){
        return Math.floor(Math.random()) * (this.maxCustomer - this.minCustomer) + this.minCustomer;
    };
};

PaperCo.prototype.getHourlySales = function(){
    for(var i=1; i < WhichHour.length; i++) {
    var total =  this.randomCustomer * this.avgSales;
    console.log("hourly sales: ", this.getHourlySales);
    this.hourlyCookies.push(total);
    this.totalCookies += total;
};

let PaperOG = new PaperCo('Rice Paper: OG', 23, 90, 3.6);
let PaperUptown = new PaperCo('Rice Paper: Uptown', 7, 45, 2.7);
let PaperEvo = new PaperCo('Rice Paper: Evolution Park', 12, 75, 2.8);

//PaperArray.push(PaperOG, PaperUptown, PaperEvo);

// function populateTotals(){
//     let elRow = document.createElement('tr')
// }
