const ingredientsLists = document.querySelectorAll('.ingredients-pizza__list'),
   ingredients = document.querySelectorAll('.ingredients-pizza__item'),
   orderList = document.querySelector('.pizza__list'),
   orderBtn = document.querySelector('.pizza__btn'),
   imageWrapper = document.querySelector('.pizza__image'),
   price = document.getElementById('price'),
   modalWindow = document.getElementById('modal'),
   confirmBtn = document.getElementById('confirm-btn');

let totalPrice = 0;

class OrderInfo {
   constructor(ingredients, price) {
      this.ingredients = ingredients;
      this.price = price;
   }
}

let orderArray = [];


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
let images = imageWrapper.children;
let countOfImage = images.length;

function addingIngredients(event) {
   const ingredietnToAdd = event.target;
   if (ingredietnToAdd.classList.contains('ingredients-pizza__item')) {
      if (!ingredietnToAdd.classList.contains('checked')) {
         ingredietnToAdd.classList.add('checked');
         orderArray.push(ingredietnToAdd.textContent);
         addToOrderList(ingredietnToAdd);
         calculatePricePlus(ingredietnToAdd);
      }
      if (this.classList.contains('one')) {
         this.classList.add('lock');
      }


      if (!this.classList.contains('active') && countOfImage !== 4) {
         this.classList.add('active');
         addImage(imageWrapper, countOfImage);
         countOfImage++;
      }
   }

   if (countOfImage === 4) {
      orderBtn.classList.remove('off')
   }
}

for (let ingredientsList of ingredientsLists) {
   ingredientsList.addEventListener('click', addingIngredients);
}


/*Removing Ingredients */
let orderItems = orderList.getElementsByTagName('li');
let ingredientsChecked = document.getElementsByClassName('ingredients-pizza__item checked');

function removeIngredients(event) {
   for (let orderItem of orderItems) {
      if (event.target === orderItem) {
         for (itemChecked of ingredientsChecked) {
            let ul = itemChecked.parentElement;
            let ulChildrens = [...ul.children];
            let liWithChecked = ulChildrens.filter(li => li.classList.contains('checked'));
            if (orderItem.textContent === itemChecked.textContent) {

               if (liWithChecked.length === 1) {
                  ul.classList.remove('active');
                  ul.classList.remove('lock');
                  orderItem.remove();
                  itemChecked.classList.remove('checked');
                  countOfImage--;
                  imageWrapper.lastChild.remove();
                  orderBtn.classList.add('off');
                  calculatePriceMinus(itemChecked);
                  orderArray.splice(orderArray.indexOf(orderItem.textContent), 1);
                  console.log();
               } else {
                  itemChecked.classList.remove('checked');
                  orderItem.remove();
                  orderArray.splice(orderArray.indexOf(orderItem.textContent), 1);
                  calculatePriceMinus(itemChecked);
               }
            }
         }
      }
   }
}
orderList.addEventListener('click', removeIngredients);

/*calculate summ */

const calculatePricePlus = function (ing) {
   totalPrice += +ing.dataset.price
   price.innerText = `${totalPrice}$`;
};
const calculatePriceMinus = function (ing) {
   totalPrice -= +ing.dataset.price
   price.innerText = `${totalPrice}$`;
};


/*show Modal */
orderBtn.addEventListener('click', function () {
   if (!orderBtn.classList.contains('off')) {
      modalWindow.classList.remove('none');
      let orderInfo = new OrderInfo(orderArray, totalPrice);
      console.log(orderInfo);
   }
});

modalWindow.addEventListener('click', function (event) {
   if (event.target === confirmBtn) {
      location.reload();
   }
});



