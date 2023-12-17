# Furniture Shop

## Project Description
FurnitureShop is a Single Page Application (SPA) designed for selling furniture online. The website is constructed using ReactJS, with HTML and CSS for the frontend. The backend utilizes the Softuni Practice Server, built on NodeJS.

**The application comprises two main parts:**

**-Public Part**

**-Private Part**

### Public Part

The public section is accessible without authentication, catering to users referred to as "guests." 
Guests can explore the following features:

•	**Home Page:** Displays an image and a button redirecting users to the catalog page.

•	**Catalog Page:** Showcases all available furniture on the website. Each product includes an image and a details button. In the absence of available furniture, a message is displayed: "No furniture yet," accompanied by a button redirecting users to the home page.

•	**Details Page:** Presents detailed information about a selected product, including an image, product model, price, description, and a back button redirecting users to the catalog page. Guests can also view available comments and likes for the selected product but cannot add or delete comments and likes.

•	**Login Page:** Features a form where guests must enter their email and password to log in as registered users and access the private section of the application. The login form includes input validations for email (valid email required) and password (minimum of 3 characters).

•	**Register Page:** Provides a form for guests to create a profile by entering an email, password, and repeating the password. Input validations for the register form include a valid email, a password with a minimum of 3 characters, and matching passwords.


### Private Part

The private section becomes accessible after successful login and caters to two types of authenticated users:

• **Admin User:** Admin user, identified by the email "hristo@abv.bg" has additional privileges.

•	**Non-Admin Users:** Authenticated users without admin privileges.

#### Admin Access

Admin user has access to the following features:

•	**Create Page:** Contains a form to input image, model, price, and description to create new furniture on the site. Only admin can create furniture. Input validations for the form include a minimum of 3 characters for the model, a positive number for the price, a valid URL for the image starting with "http://" or "https://," and a minimum of 5 characters for the description.

•	**Messages Page:** Displays data filled by users in the contact form, including name, email, and message. If no messages have been sent, it shows "No messages yet" with a button redirecting users to the home page.

•	**Purchases Page:** Provides information about purchases made by users. If no purchases have been made, it shows "No purchases yet" with a button redirecting users to the home page.

•	**Details Page:** In addition to the information visible to guests, admin users can edit and delete furniture. The edit page loads a form with pre-filled data for the selected furniture. A delete button prompts confirmation or refusal to delete the specific furniture piece. The admin can also see available total number of likes but cannot add or delete likes. The comments section includes a field to add a comment and a publish button. After adding a comment, its content is displayed, and a delete button.

#### Non-Admin User Access

Non-admin users have access to the following features:

•	**Details Page:** In addition to the information visible to guests, a buy button is displayed. Clicking the button adds the product to the user's basket. The comments section includes a field to write a comment and a publish button. After adding a comment, its content is displayed, and a delete button.

•	**Basket Page:** Visualizes all furniture bought by the user. Each piece of furniture includes "product details" and "remove" buttons. A "confirm order" button opens a page stating "YOUR PURCHASE IS COMPLETED!" before redirecting users to the catalog page.

•	**Contact Us Page:** A form where users can fill in their name, email, message, and send it to the admin.



**Logout** 

Both admin and non-admin users have a logout button to exit their accounts.

**Not Found**

If someone attempts to access an undefined link, they are redirected to the "Not Found" page.

**Guards**

The guards to manage user access:

•	If an unauthenticated user (guest) attempts to enter a page requiring authentication, they are redirected to the login page.

•	If a user tries to log in to a page requiring admin privileges, they are redirected to the home page.

•	If an admin attempts to enter a page requiring user privileges, they are redirected to the home page.

### Functionalities access

| Functionality      |   Admin   |   User    |   Guest   |
| ------------------ |:---------:|:---------:|:---------:|
| Home page          |     ✅     |     ✅     |     ✅     |
| Catalog page       |     ✅     |     ✅     |     ✅     |
| Details page       |     ✅     |     ✅     |     ✅     |
| Create furniture   |     ✅     |     ❌     |     ❌     |
| Edit furniture     |     ✅     |     ❌     |     ❌     |
| Delete furniture   |     ✅     |     ❌     |     ❌     |
| Buy furniture      |     ❌     |     ✅     |     ❌     |
| View comments      |     ✅     |     ✅     |     ✅     |
| Create comment     |     ✅     |     ✅     |     ❌     |
| Delete own comment  |     ✅     |     ✅     |     ❌     |
| Message page       |     ✅     |     ❌     |     ❌     |
| Purchases page     |     ✅     |     ❌     |     ❌     |
| Contact us page    |     ❌     |     ✅     |     ❌     |
| Basket page        |     ❌     |     ✅     |     ❌     |
| Completed order page        |     ❌     |     ✅     |     ❌     |
| Not Found page     |     ✅     |     ✅     |     ✅     |
| Login page         |     ❌     |     ❌     |     ✅     |
| Register page      |     ❌     |     ❌     |     ✅     |
| Logout             |     ✅     |     ✅     |     ❌     |



### Validation

Input field validation occurs when exiting a field, thanks to the "onBlur" event. This validation is facilitated by the "useValidation" custom hook.

## Installation and usage

**To run client app**

Type in the terminal:

   cd client 
   
   npm install
   
   npm start

   

**To run server app**

Type in the new terminal:

cd server

npm install

npm run dev


