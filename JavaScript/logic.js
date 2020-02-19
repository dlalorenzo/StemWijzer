// console.log(subjects);
// var counter = 0;

// function start(){
// 	subjects.[counter](element => {
// 		console.log(element.title);
// 	});
// }



// console.log(subjects);
// console.log(parties);

// console.log(parties[0].name);
// console.log(subjects[0].statement);



function test(){

var statement = subjects[0].statement;	
var title = subjects[0].title;
console.log(statement);
console.log(title);
document.getElementById("title").innerHTML = title;
document.getElementById("statement").innerHTML = statement;
}

test();