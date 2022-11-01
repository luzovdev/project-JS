const ingridientLists = document.querySelectorAll('.ingredients-pizza__list');
const orderList = document.querySelector('.pizza__list');
const orderBtn = document.querySelector('.pizza__btn');





function showOrders(item) {
   let li = document.createElement('li');
   li.innerText = `${item.textContent}`;
   orderList.append(li);
   item.style.color = 'rgb(170, 29, 29)';
}


ingridientLists.forEach((item) => {
   let ingridientList = item;
   let countOfClicked = 0;

   ///------------------------
   function addIngridient(event) {
      let ingredientToAdd = event.target;

      if (ingredientToAdd !== this) {
         showOrders(ingredientToAdd);
      }

      if (ingredientToAdd.closest('.osnova') || ingredientToAdd.closest('.sous')) {
         this.classList.add('oneClick');
         if (ingredientToAdd.closest('.oneClick')) {
            this.removeEventListener('click', addIngridient);
         }
      }
   }
   ///------------------------------
   ingridientList.addEventListener('click', addIngridient);

})





// // remove Ingridient
// function removeIngridient(event) {
//    let ingredientToRemove = event.target;
//    if (ingredientToRemove !== this) {
//       ingredientToRemove.remove();
//    }
// }
// orderList.addEventListener('click', removeIngridient);













