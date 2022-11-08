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
   let countOfImage = 0;
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

            if (this.classList.contains('active') === false) {
               this.classList.add('active');
               addImage(imageWrapper, countOfImage);
               countOfImage++;
            }
         }
      });
   }
}

addingIngredients(ingredientsLists);






/*Removing Ingredients */

const removeIngredients = function () {

   let orderItems = orderList.getElementsByTagName('li');
   let ingredientsChecked = document.getElementsByClassName('ingredients-pizza__item checked');


   orderList.addEventListener('click', function (event) {

      for (let orderItem of orderItems) {
         if (event.target === orderItem) {
            for (itemChecked of ingredientsChecked) {
               let ul = itemChecked.parentElement;

               if (orderItem.textContent === itemChecked.textContent) {

                  console.log(ul);
                  //    if (//у ul нету у дочерних элементов нету класса ckeched){
                  //       // то удалить active и удалить кусок пиццы
                  //       //также отмотать стадию пиццы--
                  //    } else {
                  //    // удалить checked 
                  //    // orderItem.remove
                  // }
               }
            }

         }
      }
   })
}


removeIngredients();

/*calculate summ */



