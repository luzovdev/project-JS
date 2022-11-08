const ingredientsLists = document.querySelectorAll('.ingredients-pizza__list'),
   ingredients = document.querySelectorAll('.ingredients-pizza__item'),
   orderList = document.querySelector('.pizza__list'),
   orderBtn = document.querySelector('.pizza__btn'),
   imageWrapper = document.querySelector('.pizza__image');




function addToOrderList(ingredient) {
   let li = document.createElement('li');
   li.innerText = `${ingredient.textContent}`;
   orderList.append(li);
}


function addImage(imageBlock, part) {
   let img = document.createElement('img');
   img.classList.add('pizza__image-item');
   let imgSrc = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png'];
   img.src = imgSrc[part];
   imageBlock.append(img);
}


/*Adding Ingredients */

const addingIngredients = function (ingredientsLists) {

   for (let ingredientsList of ingredientsLists) {
      ingredientsList.addEventListener('click', function (event) {

         const ingredietnToAdd = event.target;
         // let itemsOfIngredientList = this.children;
         if (ingredietnToAdd.classList.contains('ingredients-pizza__item')) {
            ingredietnToAdd.classList.add('checked');
            addToOrderList(ingredietnToAdd);

            if (this.classList.contains('one')) {
               this.classList.add('lock');
               console.log('one');
            }
         }
      });
   }
}

addingIngredients(ingredientsLists);






/*Removing Ingredients */


/*calculate summ */



