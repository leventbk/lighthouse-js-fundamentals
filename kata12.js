const chooseRecipe = function(bakeryA, bakeryB, recipes) {
	// Code here!
	let totalIngredient = bakeryA.concat(bakeryB);

	const matchedRecipes = [];

	for ( let i = 0; i < recipes.length; i++) {
		let match = 0;
		let currentRecipe = recipes[i]
		for( let j = 0; j < currentRecipe.ingredients.length; j++) {
			const currentIngredient = currentRecipe.ingredients[j]
			if (totalIngredient.includes(currentIngredient)) {
				match++;
				if (match === recipes[i].ingredients.length) {
					matchedRecipes.push(recipes[i].name);
				}
			}
		}
	}

	return matchedRecipes;
  }
  




  let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
  let bakeryB = ['milk', 'butter', 'cream cheese'];
  let recipes = [
	  {
		  name: 'Coconut Sponge Cake',
		  ingredients: ['coconut', 'cake base']
	  },
	  {
		  name: 'Persian Cheesecake',
		  ingredients: ['saffron', 'cream cheese']
	  },
	  {
		  name: 'Custard Surprise',
		  ingredients: ['custard', 'ground beef']
	  }
  ];
  
  console.log(chooseRecipe(bakeryA, bakeryB, recipes));
  
  bakeryA = ['potatoes', 'bay leaf', 'raisins'];
  bakeryB = ['red bean', 'dijon mustard', 'apples'];
  recipes = [
	  {
		  name: 'Potato Ganache',
		  ingredients: ['potatoes', 'chocolate']
	  },
	  {
		  name: 'Sweet Fish',
		  ingredients: ['anchovies', 'honey']
	  },
	  {
		  name: "Nima's Famous Dijon Raisins",
		  ingredients: ['dijon mustard', 'raisins']
	  }
  ];
  
  console.log(chooseRecipe(bakeryA, bakeryB, recipes));