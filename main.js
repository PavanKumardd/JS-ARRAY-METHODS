const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
//FOR LOOP
// for(i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// };

//FOREACH
// companies.forEach(function(company) {
//     console.log(company);
//     console.log(company.name);
// });

//FILTER
//GET 21 AND OLDER USING FOR LOOP
// let candrink = [];
// for(let i = 0; i < ages.length; i++) {   
//     if(ages[i] >= 21) {
//         candrink.push(ages[i]);
//     }
// }

//USING FILTER
// const candrink = ages.filter(function(age) {     
//     if(age >= 21) {
//         return true;
//     }
// });
// console.log(candrink);

//USING FILTER AND ARROW FUNCTION
// const candrink = ages.filter(age => age >= 21);

// console.log(candrink);

//FILTER RETAIL COMPANIES
// const retailcompanies = companies.filter(function(company) {
//     if(company.category === "Retail") {
//         return true;
//     }
// });
// console.log(retailcompanies);

// const retailcompanies = companies.filter(company => company.category === "Retail");
// console.log(retailcompanies);

//GET COMPANIES STARTED IN 80'S
// const companies80 = companies.filter(company => (company.start >= 1980 && 
//     company.start < 1990));

// console.log(companies80);

//AGE OF COMPANY MORE THAN 10 YEARS
// const age = companies.filter(company => (company.end - company.start) >= 10);

// console.log(age);

//MAP
//CREATE ARRAY OF COMPANY NAMES
// const companynames = companies.map(function(company) {
//     return company.name;
// });
// console.log(companynames);

// const testmap = companies.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`;
// });

// const testmap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(testmap);

//SQURE ROOT OF AGES
// const agessqure = ages.map(age => Math.sqrt(age));
// const agestimestwo = ages.map(age => age*2);
// console.log(agessqure);
// console.log(agestimestwo);

//MULTIPLE CALCULATIONS WITH MULTIPLE MAP
// const agemap = ages.map(age => Math.sqrt(age))
//   .map(age => age*2);

// console.log(agemap);

//SORT
//SORT COMPANIES BY START YEAR
// const sortedcompanies = companies.sort(function(c1, c2){
//     if(c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1
//     }
// });
// const sortedcompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedcompanies);

// SORT AGES
// const sortages = ages.sort((a, b) => a-b);
// const sortagesrev = ages.sort((a, b) => b-a);

// console.log(sortages);
// console.log(sortagesrev);

//REDUCE
// let agesum = 0;
// for(let i=0; i < ages.length; i++) {
//     agesum += ages[i];
// }
// console.log(agesum);

// const agesum = ages.reduce(function(total, age) {
//     return total + age;
// }, 0);

// const agesum = ages.reduce((total,age)=> total + age,0);

// console.log(agesum);

//GET TOTAL YEARS FOR ALL COMPANIES AND ADD
// const totalyears = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
// },0);

// const totalyears = companies.reduce((total,company) => total + (company.end-company.start),0);

// console.log(totalyears);

//COMBINE METHODS
const combined = ages
    .map(age => age*2)
    .filter(age => age >= 40)
    .sort((a,b) => a-b)
    .reduce((a,b)=> a+b, 0);

console.log(combined);



