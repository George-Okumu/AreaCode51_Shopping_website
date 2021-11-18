//Add Item
$('.add-to-cart').click(function(event) {
    event.preventDefault();
    var name = $(this).data('name');
    var price = parseInt($(this).data('price'));
    shoppingLaptop.addItemToCart(name, price, 1);
    displayTheCart();
});
//clear items
$('.clear-cart').click(function() {
    shoppingLaptop.clearCart();
    displayTheCart();
});

//function for displaying everything to the user
function displayTheCart() {
    var cartArray = shoppingLaptop.listCart();
    var output = "";
    for (var i in cartArray) {
        output += "<tr>" +
            "<td>" + cartArray[i].name + "</td>" +
            "<td>(" + cartArray[i].price + ")</td>" +
            "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>" +
            "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>" +
            "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>" +
            "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>" +
            " = " +
            "<td>" + cartArray[i].total + "</td>" +
            "</tr>";
    }
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingLaptop.totalCart());
    $('.total-count').html(shoppingLaptop.totalCount());
}


//Overall function that host major things
var shoppingLaptop = (function() {

    cart = [];

    //constructor
    function Item(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }
    //store the values to session storage
    function saveCart() {
        sessionStorage.setItem('shoppingLaptop', JSON.stringify(cart));
    }

    //Get items / Load added items from session storage
    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem('shoppingLaptop'));
    }
    if (sessionStorage.getItem("shoppingLaptop") != null) {
        loadCart();
    }


    var obj = {};
    //Add item to cart
    obj.addItemToCart = function(name, price, count) {
            for (var item in cart) {
                if (cart[item].name === name) {
                    cart[item].count++;
                    saveCart();
                    return;
                }
            }
            var item = new Item(name, price, count);
            cart.push(item);
            saveCart();
        }
        // Set count from item
    obj.setCountForItem = function(name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
    };
    // Remove single item from an array of single ordered multiple times product


    // Remove the whole ordered object from cart


    // Clear cart
    obj.clearCart = function() {
        cart = [];
        saveCart();
    }

    obj.totalCount = function() {
        var totalCount = 0;
        for (var item in cart) {
            totalCount += cart[item].count;
        }
        return totalCount;
    }

    // Total cart
    obj.totalCart = function() {
            var totalCart = 0;
            for (var item in cart) {
                totalCart += cart[item].price * cart[item].count;
            }
            return parseFloat(totalCart.toFixed(2));
        }
        // List of the items held here
    obj.listCart = function() {
        var newCartArray = [];
        for (i in cart) {
            item = cart[i];
            newItem = {};
            for (j in item) {
                newItem[j] = item[j];

            }
            newItem.total = parseFloat(item.price * item.count).toFixed(2);
            newCartArray.push(newItem)
        }
        return newCartArray;
    }


    return obj;
})();

displayTheCart();