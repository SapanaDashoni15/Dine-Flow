let year = new Date().getFullYear();
document.getElementById("year").textContent = year;


const container = document.querySelector(".container");
const ingredients = document.querySelector(".ingredients");
const btn = document.querySelector(".btn");
const receipeResult = document.querySelector(".receipeResult");
const apikey = "213649eff1814fabb438d83f1a0f47a6";

// need 2 function
// first to fetch data
//latter to display card on ui

btn.addEventListener("click" , ()=> {
    const ingredientInput = ingredients.value.trim(); 
    fetchReceipes(ingredientInput);
});

const fetchReceipes = async(ingredientInput) => {
    try {
        const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientInput}&number=10&apiKey=${apikey}`

    );
    const receipes = await response.json();
    displayReceipes(receipes);
    } catch (error) {
        console.log(error);
    }
};

const displayReceipes = (receipes)=> {
    receipeResult.innerHTML = "";
    if(receipes.length === 0) {
        alert("Recipe ghosted! Try writing valid ingredient.")
        return
    }
    receipes.forEach((receipe)=> {
        const receipeCard = document.createElement("div");
        receipeCard.classList.add('card')
        receipeCard.innerHTML = `
        <div class="img"> 
            <img src="${receipe.image}" alt="" />
        </div>

        <p>${receipe.title}</p> 

        <button class="btn"> View Receipe</button>

        `;

        receipeResult.appendChild(receipeCard);
        
    });

    
};

