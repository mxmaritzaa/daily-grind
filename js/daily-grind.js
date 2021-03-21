let myDate = new Date();
let myDay;
let today;
let coffee;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

myDay = urlParams.has('day') ? parseInt(urlParams.get('day')) : myDate.getDay();

let drinkTemplate = (drink)=>{
    let myReturn;
    myReturn = `
    <p>
      <img
        src="${drink.pic}"
        alt="${drink.alt}"
        id="coffee"
      />
      <strong id="coffeeHighlight" class="feature">${drink.day}'s Coffee Special:</strong> ${drink.day}'s daily
      coffee special is <strong>${drink.name}</strong>, ${drink.desc}
    </p>`
    return myReturn;
}

switch(myDay){
    case 0:
        today = "Sunday"
        coffee = {
            color:"green",
            name:"Caramel-Latte",
            pic:"images/caramel-latte.jpg",
            alt:"A picture of a Caramel-Latte",
            day:"Sunday",
            desc:`A delicious caremel latte. Perfect for ending a nice enjoyable weekend!`
            
        }
        break;
    case 1:
        today = "Monday"
        coffee = {
            color:"pink",
            name:"Bubble Tea",
            pic:"images/bubble-tea.jpg",
            alt:"A picture of a Bubble Tea",
            day:"Monday",
            desc:`I like me some Bubble Tea. It is so bubbly and tasty!`
            
        }
        break;
    case 2:
        today = "Tuesday"
        coffee = {
            color:"blue",
            name:"Cold Brew",
            pic:"images/cold-brew.jpg",
            alt:"A picture of a cold brew",
            day:"Tuesday",
            desc:`Made chilled, never heated, and with a higher coffee to water ratio than regular drip coffee. It's made by creating a concentrate which is then mixed with fresh water`
            
        }
        break;
    case 3:
        today = "Wednesday"
        coffee = {
            color:"brown",
            name:"Drip",
            pic:"images/drip.jpg",
            alt:"A picture of a Drip Coffee",
            day:"Wednesday",
            desc:`Sometimes you just need the drip. Rain drop, drop top!`
            
        }
        break;
    case 4:
        today = "Thursday"
        coffee = {
            color:"yellow",
            name:"Frappaccino",
            pic:"images/frappaccino.jpg",
            alt:"A picture of a frappaccino",
            day:"Thursday",
            desc:`A frapaccino contains crushed ice, espresso, milk, sugar and optional whipped cream and syrup`
            
        }
        break;
    case 5:
        today = "Friday"
        coffee = {
            color:"red",
            name:"Mocha",
            pic:"images/mocha.jpg",
            alt:"A picture of a mocha",
            day:"Friday",
            desc:`A mochoa is a full-bodied espresso combined with bittersweet mocha sauce, steamed milk and whipped cream`
            
        }
        break;
    case 6:
        today = "Saturday"
        coffee = {
            color:"grey",
            name:"Pumpkin Spice Latte",
            pic:"images/pumpkin-spice-latte.jpg",
            alt:"A picture of a pumpkin spice latte",
            day:"Saturday",
            desc:`The Pumpkin Spice Latte is a drink containing steamed milk, espresso, sugar and is topped with whipped cream`
            
        }
        break;
    
}

document.getElementById("coffee-output").innerHTML = drinkTemplate(coffee);
document.getElementsByTagName("HTML")[0].getElementsByClassName.backgroundColor = coffee.color;
document.getElementById("coffeeHighlight").style.color = coffee.color;
console.log('working')
