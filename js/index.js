// Iteration 1: Names and Input

let hacker1 = "Bruno";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Anna";

console.log(`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){

    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)

} else if (hacker1.length < hacker2.length) {

    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

} else if (hacker2.length && hacker1.length) {

    console.log(`Wow, you both have equally long names, ${hacker2.length} characters`)

}


// Iteration 3: Loops

//3.1
let spaceBetweenChars  = ` `;

console.log(hacker1.split('').join(spaceBetweenChars).toUpperCase());



//3.2
function reverseString(name) {
    return name
      .split('') // separa em um array
      .reverse() // inverte a ordem dos itens do array
      .join(''); // junta o array de volta para uma string
}

console.log(reverseString(hacker2))


//3.3

if (hacker1 < hacker2){
    console.log(`The driver's name goes first`)
}
else if (hacker2 < hacker1){
    console.log(`Yo, the navigator goes first definitely`)
}
else {
    console.log(`What?! You both have the same name?`)
}



// Bonus 1
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet odio orci, sed tincidunt nisl dignissim quis. Nam tellus risus, ultricies in velit id, ultrices hendrerit orci. Integer ac luctus lectus. Quisque at pellentesque justo. Curabitur aliquam rutrum gravida. In venenatis, justo eget tincidunt viverra, mi felis placerat ante, nec iaculis ante ex vitae nulla. Donec ut nibh pulvinar, placerat eros at, imperdiet metus. In libero velit, condimentum ut turpis vitae, tincidunt commodo tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc interdum nibh ut tempor sagittis. Sed vitae auctor mauris. Aenean massa nunc, consectetur egestas pretium ut, fermentum nec lacus. Fusce venenatis neque a aliquet feugiat.

Praesent mi sem, consequat sed consectetur eu, vulputate sit amet risus. Etiam quis enim sit amet dui suscipit molestie ut ut odio. Vivamus vitae vulputate turpis, eget aliquet lorem. Etiam feugiat, orci vitae venenatis bibendum, enim orci iaculis purus, ornare finibus erat nibh at dolor. Sed congue at tellus sit amet dignissim. Morbi aliquet, dolor quis condimentum vestibulum, felis orci interdum tortor, eu aliquet metus justo sit amet mauris. Nunc auctor elit ut neque aliquam, vel lobortis magna ullamcorper. In at hendrerit ligula. Suspendisse varius augue a diam ultrices, sit amet egestas magna condimentum. Donec mattis, ante eget fringilla rutrum, mi velit dapibus sapien, in volutpat mauris neque ut ex. Nulla eleifend id lectus a consequat. Vestibulum sodales justo quis ultrices tincidunt. Duis finibus auctor tincidunt. Aliquam sit amet ligula arcu.

Curabitur blandit felis pharetra volutpat mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed pharetra aliquet nulla, ac ultricies dui viverra id. Sed vel semper felis, sit amet ultricies urna. Vestibulum tortor augue, lacinia sed placerat nec, aliquet vitae libero. Donec semper turpis a dui pellentesque facilisis. Ut iaculis iaculis purus. Phasellus pulvinar urna et lorem mattis feugiat. Curabitur varius nibh in lorem ornare, vitae elementum est lacinia. Vivamus et nibh nisi. Duis facilisis magna at libero faucibus egestas.`

console.log(lorem.length)

var wordEt = ' et ';
var etCounter = lorem.split(wordEt).length - 1;
console.log(etCounter);



// Bonus 2
let phraseToChecke = `Murder for a jar of red rum`
phraseToChecke = phraseToChecke.replace(/\s+/g, '').toUpperCase();

let phraseReverse = phraseToChecke.replace(/\s+/g, '').split("").reverse().join("").toUpperCase();


if (phraseToChecke === phraseReverse) {
  console.log("The string is a palindrome");
} else {
  console.log("NOT a palindrome");
}