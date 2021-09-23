class VendingMachine 	{
	constructor(newName, newLocation) {
		this.name = newName
		this.location = newLocation
		this.allMyCoins = []
		this.allMyProducts = []
		this.allMyCustomers = []
		this.hasMoney = false
		this.hasChange = false
		this.noMoney = false
		this.purchase = Number
		this.change = Number
		this.insertedCoin = ''
		this.selectedProduct = ''
		this.selectedCustomer = ''


		
	}
	// creating coin object
	addCoin(newCoinId, newValue, newAmount) {
		let aNewCoin = new Coin(newCoinId, newValue, newAmount)
		this.allMyCoins.push(aNewCoin)

	
	}

	// creating product object
	addProduct(newProductID, newName, newPrice, newQuantity) {
		let aNewProduct = new Product(newProductID, newName, newPrice, newQuantity)
		this.allMyProducts.push(aNewProduct)

	}
	// creating customer object
	addCustomer(newCustomerID, newCustomerAmount) {
		let anewCustomer = new Customer(newCustomerID, newCustomerAmount)
		this.allMyCustomers.push(anewCustomer)


	}
    findProduct(targetProductId) {
         let result = this.allMyProducts.find(aProduct => aProduct.id === targetProductId)
         return result
	}

	findCustomer(targetCustomerId) {
		let result = this.allMyCustomers.find(aCustomer => aCustomer.id === targetCustomerId)
		return result
	}
	findCoin(targetCoinId) {
		let result = this.allMyCoins.find(aCoin => aCoin.id === targetCoinId)
		return result
	}
	


	calculateChange() {
		this.change = this.purchase - this.selectedProduct.price
		this.hasChange = true

	}
	dispenseProduct() {
		this.selectedProduct.quantity -= 1
	}

	updateCoin() {
		let coin2 = this.allMyCoins[0]
		let coin1 = this.allMyCoins[1]
		let coin05 = this.allMyCoins[2]
		let coin02 = this.allMyCoins[3]
		let coin01 = this.allMyCoins[4]
		let tempChange = this.change
		while (tempChange >= coin2.value){
			coin2.amount -= 1 
			tempChange -=200
		}
		while (tempChange >= coin1.value){
			coin1.amount -= 1 
			tempChange -=100
		}
		while (tempChange >= coin05.value){
			coin05.amount -= 1 
			tempChange -=50
		}
		while (tempChange >= coin02.value){
			coin02.amount -= 1 
			tempChange -=20
		}
		while (tempChange >= coin01.value){
			coin01.amount -= 1 
			tempChange -=10
		}
	}

	updateCustomer() {
		this.selectedCustomer.amount -= this.selectedProduct.price
	}


	conditionsOfPurchase(){
			
		 if (this.purchase > this.selectedProduct.price) {
			this.dispenseProduct()
			this.hasMoney = true
			this.calculateChange()
			this.noMoney = false
			this.updateCoin()
			this.updateCustomer()
		 }
		if 	(this.purchase == this.selectedProduct.price){
			this.dispenseProduct()
			this.hasMoney = true
			this.hasChange = false
			this.noMoney = false
			this.updateCoin()
			this.updateCustomer()
		}
		if (this.purchase < this.selectedProduct.price){
			this.noMoney = true
			this.hasChange = false
			this.hasMoney = false
			}
		 }
		
}

