# ECommerce_Amaxon

E-commerce app, built with React &amp; Redux then to be updated with Context &amp; some CSS framework

## To Do

### Multi-Vendors (Sellers dashboard)

As a seller, I can sell my own products Scenario:

1. Click Become Seller on header menu
2. Sign-in or Register as seller
3. Show seller dashboard including products and orders
4. Manage products
5. Manage orders
6. Seller page as /seller/:sellerId
7. Manage commissions and payouts

### Pagination

As a user, I can switch between product list so that I have not to see them in one page Scenario:

1. Open home page
2. Search for a keyword
3. There is load more button at the end if items are more than 20
4. click on load more button and it shows more 20 items until it is done.

### Choose location on map

As a user, I can choose my location on map so that I have not to enter it manually. scenario:

1. Add item to cart
2. Proceed to checkout
3. Sign-in or Register
4. Enter Shipping data
5. Beside entering address manual, there should be a button to choose location on map. when use select an address the address field will be filled automatically.

### Calculate Shipping Cost

As a user, I can see shipping cost based on my location so that I pay fairly the shipping cost. scenario:

1. User select location on the map
2. It saves gps point
3. It calculates distance between e-commerce location and user location
4. It uses a shipping rate based on distance to calculate the shipping cost.

### Save user address in profile

As a user, I can save my address in my profile so that I have not to enter it every time I have an order scenario:

1. Add item to cart
2. Proceed to checkout
3. Sign-in or Register
4. Enter Shipping data
5. Address information will be loaded from user profile. if it does not exist, show empty form.
6. when user place an order, the user address will be saved on user profile as user.address {city:'XX', country: 'XX', ... }

### Send Email to customer

As a user, I can get email from e-commerce website so that I notice of any change to my order or account.

1. Place an order
2. Send email for order details

### Forget and Reset Password

As a user I want to reset my password.

1. Click forget password
2. Get reset email from e-commerce
3. Click on the link and enter new password

### Logout Menu

As a user, I can see logout link on header menu so that I have not to go to profile page to logout

1. Click or move mouse over user name on the header menu
2. show account setting, order history and logout
3. click on logout
4. all login information removed from the browser.

### Refund and cancel order

As a user, I can refund an order so I have not pay for a product that I do not want anymore

1. Click on profile
2. Select order
3. Click Refund button
4. Enter reasons for refund
5. Change state to pending for refund
6. Admin view orders
7. Add select order to refund
8. Add Accept or Reject the refund
9. User will be informed from the result.

### Guest Checkout

As a user, I can checkout as guest user so I do not need to create account to buy from the website.

1. Click product
2. Add to cart
3. Checkout
4. Show checkout as guest in sign-in form
5. Enter email and name
6. Login as guest user
7. Complete the order
