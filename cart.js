///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/



//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const callBackFunctionOne = () => cart

const callBackFunctionTwo = callBackFunctionOne =>
console.log(callBackFunctionOne())



const summedPrice = cart.reduce((acc, curr) => {
    return acc + curr.price
}, 0)

console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

// function calcFinalPrice(cartTotal, couponValue, tax){
//     return cartTotal * tax
// }

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    const tax = cartToal * tax;
    const totalWithTax = cartTotal + tax;
    const finalTotal = totalWithTax - couponValue;

    return finalTotal;
}


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    They should have FirstName and LastName both of those would be strings so we can
    hold characters, this helps us identify the customers and names can 
    help us keep it unique. The most important propertity that really would make each customer
    unique that I would have is CustomerId as a number type, 
    lastly we will add an Active status which would be a boolean telling us if the customer is active or inactive. 

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const Customer = [
    {
        firstName: 'John',
        lastName: 'Doe', 
        customerId: 12345,
        isActive: false
    }
]