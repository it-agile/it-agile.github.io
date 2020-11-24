      function addToBasket(id) {
        console.log(sessionStorage.basket)
        if(sessionStorage.basket === undefined)
          sessionStorage.basket = JSON.stringify({})
        
        var basket = JSON.parse(sessionStorage.basket)
        if(!(id in basket))
          basket[id] = 1
        else
          if(basket[id]<5)
            basket[id] += 1
        sessionStorage.basket = JSON.stringify(basket)
      }
      
      function setInBasket(id, quantity) {
        var basket = JSON.parse(sessionStorage.basket)
        if(quantity === 0)
          delete basket[id]
        else {
          basket[id] = quantity
        }
        sessionStorage.basket = JSON.stringify(basket)
      }
      
      function getBasket() {
          return JSON.parse(sessionStorage.basket)
      }