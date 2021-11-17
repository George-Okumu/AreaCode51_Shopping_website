//Add Item
$('add-to-cart').click(function(e) {
    e.preventDefault();
    var name = $(this).data('name');
    var price = $(this).data('price');
    //add item to cart
    //will display the added thingy
});

//clear items
$('.clear-cart').click(function() {
    //call the shopping function and call .clear on it
    ////display the list
});

//function for displaying everything to the user
function displayTheCart() {
    var cartArray = shoppingLaptop.listCart();
};

//Overall function that host major things
var shoppingLaptop = (function() {
    cart = [];

    //constructor
    function Item(name, price) {
        this.name = name;
        this.price = price;
    }

    //store the values to session storage
    function saveCart() {
        sessionStorage.setItem('shoppingLaptop', JSON.stringify(cart));
    }

    //Get items / Load added items from session storage
    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem('shoppingLaptp'))
    }

    var obj = {};
    //Add item to cart
    obj.addItemTocart = function(name, price) {
        var item = new Item(name, price);
        cart.push(item);
        saveCart();
    }

    //Total function
    obj.totalCart = function() {
        var totalCart = 0;
        //plus plus plus
        return parseFloat(totalCart).toFixed(2);
    }

    // List of the items held here
    obj.listCart = function() {
        var newCartArray = [];
        for (i in cart) {
            item = cart[i];
            newCartArray = {};

            for (j in item) {
                newCartArray[j] = item[j];
            }
            newCartArray.total = parseFloat(item.price).toFixed(2);
        }
        return newCartArray;
    }


    //Remove the entire object that contains that name
    obj.removeAllItem() = function(name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart.splice(item, 1);
                break;
            }
        }
        saveCart();
    }

    //clear Entire cart
    obj.clearCart = function() {
        cart = [];
        saveCart();
    }

    return obj;
})();

// what remain display the content
//define another function to deletethe added item
// dfine another function for counting the added item