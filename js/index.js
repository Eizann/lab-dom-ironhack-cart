
// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('input');
  const subtotal = product.querySelector('.subtotal');
  let priceValue = price.innerHTML;
  let quantityValue = quantity.value;
  let subTotalPrice = priceValue * quantityValue;
  subtotal.innerHTML = `$<span>${subTotalPrice.toFixed(2)}</span>`;

  return Number(subTotalPrice.toFixed(2));
  //... your code goes here
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  let totalPrice = 0;
  const products = document.getElementsByClassName('product');
  for (const item of products) {
    updateSubtotal(item);
    totalPrice += updateSubtotal(item);
  }
  // ITERATION 3
  //... your code goes here
  const totalSelector = document.getElementById('total-value');
  totalSelector.innerHTML = `Total: $<span>${totalPrice}</span>`;
}

// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const productElement = target.parentNode.parentNode;
  const totalSelectorDelete = document.querySelector('#total-value span');
  const subtotalDelete = productElement.querySelector('.subtotal span').innerHTML;
  totalSelectorDelete.innerHTML -= subtotalDelete;
  productElement.innerHTML = "";
}


// ITERATION 5

function createProduct() {
  //... your code goes here
  const productName = document.querySelector('.create-product input').value;
  const price = document.querySelectorAll('.create-product input')[1].value;
  if (typeof productName !== "string" || productName.length == 0) {
    return alert('You must type a product name');
  }
  const tableBody = document.querySelector('tbody');
  tableBody.innerHTML += `<tr class="product">
  <td class="name">
  <span>${productName}</span></td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity"> 
  <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
  <button class="btn btn-remove">Remove</button>
  </td>
  </tr>`;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtns = document.getElementsByClassName('btn btn-remove');
  for (const button of removeBtns) {
    button.addEventListener('click', removeProduct);
  };

  const createProductButton = document.getElementById('create');
  console.log(document.querySelector('.create-product input'))
  createProductButton.addEventListener('click', createProduct);
})