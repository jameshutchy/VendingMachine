/* globals describe beforeEach expect it Controller */

describe('Coin Product + Logic', () => {
  describe('Coin', () => {
      
    let aCoin
    beforeEach(() => {
      aCoin = new Coin(2, 200, 10)
    })
    it('should have a .value property', () => {
      expect('value' in aCoin).to.be.true
    })
    it('should be 200', () => {
      expect(aCoin.value).to.equal(200)
    })

      it('should have an .amount property', () => {
        expect('amount' in aCoin).to.be.true
      })
      it('should be 10', () => {
        expect(aCoin.amount).to.equal(10)
      })

    })

  describe('Product', () => {
      
    let aProduct
    beforeEach(() => {
      aProduct = new Product(123, 'Dilbert', 150, 12)
    })
    it('should have a .id property', () => {
      expect('id' in aProduct).to.be.true
    })
    it('should be 123', () => {
      expect(aProduct.id).to.equal(123)
    })

      it('should have an .name property', () => {
        expect('name' in aProduct).to.be.true
      })
      it('should be Dilbert', () => {
        expect(aProduct.name).to.equal('Dilbert')
      })

      it('should have an .price property', () => {
        expect('price' in aProduct).to.be.true
      })
      it('should be 150', () => {
        expect(aProduct.price).to.equal(150)
      })

      it('should have an .quantity property', () => {
        expect('quantity' in aProduct).to.be.true
      })
      it('should be 12', () => {
        expect(aProduct.quantity).to.equal(12)
      })
    })

  describe('Array of Products and Coins', () => {
          let theVM
          beforeEach(() => {
            theVM = new VendingMachine
          })
      it('should have an .allMyProducts property that is an array', () => {
        expect(theVM.allMyProducts).to.be.an('array')
      })
      it('should have an .allMyCoins property that is an array', () => {
        expect(theVM.allMyCoins).to.be.an('array')
      })
    })

  describe('Calculate change', () => {
    let theVM
    beforeEach(() => {
      theVM = new VendingMachine
      theVM.addProduct(123, 'chips', 150, 20)
      theVM.selectedProduct = theVM.findProduct(123)
      theVM.purchase = 200
      theVM.calculateChange()
    })
    it('calculateChange method to exist', () => {
      expect(theVM.calculateChange).to.exist
    })
    describe('Calculate change test 1', () => {
    it('product price = 150 input = 200 so change should = 50', () => {
      expect(theVM.change).to.equal(50)
    })
  })
  describe('Calculate change test 2', () =>{
    beforeEach(() => {
      theVM = new VendingMachine
      theVM.addProduct(123, 'chips', 150, 20)
      theVM.selectedProduct = theVM.findProduct(123)
      theVM.purchase = 100
      theVM.conditionsOfPurchase()
    })
    it('product price = 150 input = 100 so change should not be updated.', () =>{
    expect(theVM.change).to.equal(Number)
    })
  })
  })

  describe('Update coin quantity (product price 100 and purchase input 200 so coin 100 should be 29)', () => {
    let theVM
    let coin1
    beforeEach(() => {
      theVM = new VendingMachine
      theVM.purchase = 200
      theVM.addProduct(123, 'chips', 100, 20)
      theVM.selectedProduct = theVM.findProduct(123)
      theVM.addCoin(2, 200, 30)
      theVM.addCoin(1, 100, 30)
      theVM.addCoin(05, 50, 30)
      theVM.addCoin(02, 20, 30)
      theVM.addCoin(01, 10, 30)
      coin1 = theVM.allMyCoins[1]
      theVM.change = 100
      theVM.updateCoin()
    })
    it('updateCoin method to exist', () => {
      expect(theVM.updateCoin).to.exist
    })
    it('update qauntity correctly (should be 29)', () => {
      expect(coin1.amount).to.equal(29)
    })
})
describe('Update coin quantity (product price 120 and purchase input 200 so coin 50 should be 29, coin 20 should be 29 and coin 10 should be 29)', () => {
  let theVM, coin05,
  coin02, coin01

  beforeEach(() => {
    theVM = new VendingMachine
    theVM.purchase = 200
    theVM.addProduct(123, 'chips', 120, 20)
    theVM.selectedProduct = theVM.findProduct(123)
    theVM.addCoin(2, 200, 30)
    theVM.addCoin(1, 100, 30)
    theVM.addCoin(05, 50, 30)
    theVM.addCoin(02, 20, 30)
    theVM.addCoin(01, 10, 30)
    coin05 = theVM.allMyCoins[2]
    coin02 = theVM.allMyCoins[3]
    coin01 = theVM.allMyCoins[4]
    theVM.change = 80
    theVM.updateCoin()
  })
  it('update qauntity correctly (should be 29)', () => {
    expect(coin05.amount).to.equal(29)
    expect(coin02.amount).to.equal(29)
    expect(coin01.amount).to.equal(29)
  })
})

describe('update product quantity (product quantity 5, product price 100 and purchase input 100)', () => {
  let theVM, coin05, coin01, coin02, coin1, coin2
  beforeEach(() => {
    theVM = new VendingMachine
    theVM.addCoin(200, 30)
    theVM.addCoin(100, 30)
    theVM.addCoin(50, 30)
    theVM.addCoin(20, 30)
    theVM.addCoin(10, 30)
    coin05 = theVM.allMyCoins[2]
    coin02 = theVM.allMyCoins[3]
    coin01 = theVM.allMyCoins[4]
    coin1 = theVM.allMyCoins[1]
    coin2 = theVM.allMyCoins[0]
    theVM.purchase = 100
    theVM.addProduct(123, 'chips', 100, 5)
    theVM.selectedProduct = theVM.findProduct(123)
    theVM.addCustomer(1, 500)
    theVM.selectedCustomer = theVM.findCustomer(1)
    theVM.conditionsOfPurchase()
    
  })
  it('dispenseProduct method to exist', () => {
    expect(theVM.dispenseProduct).to.exist
  })
  it('product quantity should be 4', () => {
    expect(theVM.selectedProduct.quantity).to.equal(4)
  })
})

})
/// had to fix some test as i changed variable names and the layout to work better in the model.
// definetley going to change the way i write test code i seem to be writing same line heaps..... 
/// need to before each "everything" then check tests where i can LOL

//// now tests for iteration 2 new stuff (even tho i have parsed tests in ^ that i updated in iteration 2)
describe('Customer + Logic', () => {
describe('Customer', () => {
      
  let aCustomer
  beforeEach(() => {
    aCustomer = new Customer(123, 500)
  })
  it('should have a .id property', () => {
    expect('id' in aCustomer).to.be.true
  })
  it('should be 123', () => {
    expect(aCustomer.id).to.equal(123)
  })

    it('should have an .amount property', () => {
      expect('amount' in aCustomer).to.be.true
    })
    it('should be 500', () => {
      expect(aCustomer.amount).to.equal(500)
    })

  })
  describe('Vending Machine', () => {

  let theVM, coin05, coin01, coin02, coin1, coin2
  beforeEach(() => {
    theVM = new VendingMachine
    theVM.addCoin(200, 30)
    theVM.addCoin(100, 30)
    theVM.addCoin(50, 30)
    theVM.addCoin(20, 30)
    theVM.addCoin(10, 30)
    coin05 = theVM.allMyCoins[2]
    coin02 = theVM.allMyCoins[3]
    coin01 = theVM.allMyCoins[4]
    coin1 = theVM.allMyCoins[1]
    coin2 = theVM.allMyCoins[0]
    theVM.purchase = 100
    theVM.addProduct(123, 'chips', 100, 5)
    theVM.selectedProduct = theVM.findProduct(123)
    theVM.addCustomer(1, 500)
    theVM.selectedCustomer = theVM.findCustomer(1)
    theVM.conditionsOfPurchase()
  })
  it('should have an .allMyCustomers property that is an array', () => {
    expect(theVM.allMyCustomers).to.be.an('array')
  })
  it('should have a findProduct method', () => {
    expect(theVM.findProduct).to.exist
  })
  it('should have a selectedProduct', () => {
    expect(theVM.selectedProduct).to.exist
  })
  it('should have a selectedCustomer', () => {
    expect(theVM.selectedCustomer).to.exist
  })
  it('should have a updateCustomer method', () => {
    expect(theVM.updateCustomer).to.exist
  })
  it('selectedProduct should = 100 so selectedCustomer amount should = 400 after purchase', () => {
    expect(theVM.selectedProduct.price).to.equal(100)
    expect(theVM.selectedCustomer.amount).to.equal(400)
  })
  })
})