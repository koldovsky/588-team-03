class ProductList {
    constructor(cart) {
      this.cart = cart;
      this.container = document.querySelector('.products-container');
      this.productService = new ProductsService();
      this.sortDirection = 'ascending';
      this.productService
        .getProducts()
        .then(() => this.renderProducts())
        .then(() => this.addEventListeners());    
    }
    async renderProducts() {
      let productListDomString = '';
      const products = await this.productService.getProducts();
      [...products]
        .sort( (a, b) => this.sortDirection === 'ascending' 
                           ? a.price - b.price
                           : b.price - a.price)
        .forEach(product => {
          productListDomString += `<div class="card product">
            <img class="photo"  src="${product.image}" alt="${product.title}">
            <div>
                <h2>${product.title}</h2>
                <p class ="cost">${product.price}$</p>
                <div class="buttons">
                    <button class="button buy" type="button" data-id="${product.id}">Buy</button>
    
                 </div>
            </div>
        </div>`;
      });
      this.container.innerHTML = productListDomString;
    }
    async addEventListeners() {
      document
        .querySelectorAll('.product .btn-info')
        .forEach(button =>
          button.addEventListener('click', event =>
            this.handleProductInfoClick(event)
          )
        );
      document
        .querySelectorAll(
          '.card.product button.buy, #productInfoModal button.buy'
        )
        .forEach(button =>
          button.addEventListener('click', event =>
            this.handleProductBuyClick(event)
          )
        );
    }
    async handleProductInfoClick(event) {
      const button = event.target; // Button that triggered the modal
      const id = button.dataset.id; // Extract info from data-* attributes
      const product = await this.productService.getProductById(id);
      const modal = document.querySelector('#productInfoModal');
      const productImg = modal.querySelector('.modal-body .card-img-top');
      productImg.setAttribute('src', 'img/products/' + product.image);
      productImg.setAttribute('alt', product.title);
      modal.querySelector('.modal-body .card-title').innerText = product.title;
      modal.querySelector('.modal-body .card-text').innerText =
        product.description;
      const btnBuy = modal.querySelector('button.buy');
      btnBuy.innerText = `${product.price} - Buy`;
      btnBuy.dataset.id = id;
    }
    handleProductBuyClick(event) {
      const button = event.target;
      const id = button.dataset.id;
      this.cart.addProduct(id);
      window.showAlert('Product added to cart');
    }
  }
  