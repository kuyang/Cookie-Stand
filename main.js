//declare variable called storeArray and assign it the value of an empty array
let storeArray = [];

//declaring variable called elBody and assigning it the value of the element with id of my-body
let elBody = document.getElementById('myBody');

//declaring a variable called elStoreTitle assigning it the value of the html element with id of store-title
let elStoreSales = document.getElementById('storeSales');
console.log(elStoreSales);




let storeOne = {
    name: 'Rice Paper OG',
    location: 'Downtown',
    topCookie: 'The Devil\'s Delight Cookie',
    eomSales: 8025,
    monGoal: 7000,
    staff: 15,
};

let storeTwo = {
    name: 'Rice Paper: Uptown',
    location: 'Macadamia road',
    topCookie: 'Cornflake n Marshmello cookie',
    eomSales: 7650,
    monGoal: 6500,
    staff: 16,
};

let storeThree = {
    name: 'Rice Paper: Evolution Park',
    location: 'Evolution Circle',
    topCookie: 'Oatmeal bomb cookie',
    eomSales: 9220,
    monGoal: 9000,
    staff: 26,
};

storeArray.push(storeOne, storeTwo, storeThree);

function displayStoreSales() {
    for(let i = 0; i < storeArray.length; i++) {
        let elStoreSales = document.createElement('h1');
        elStoreSales.setAttribute('Store-name', 'Location','Top-Seller','eom$','Month-Goal','Staff-Count');
        elBody.appendChild(elStoreSales);
        elStoreSales.innerHTML = (storeArray[i].name);
    }
}

displayStoreSales();

