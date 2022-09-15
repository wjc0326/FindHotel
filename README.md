# FindHotel
MERN stack hotel reservation app project. 

## Build With
* __Frontend__: HTML, CSS, JavaScript, React
* __Backend__: NodeJS, Express, RESTful API
* __Database__: MongoDB, Mongoose, Compass
* __Authentication & Authorization__: JWT
* __Cloud Platform__: Git, Atlas
* __Other Tools__: Postman, Context API, custom hooks, [React calendar](https://github.com/hypeserver/react-date-range)

## How To Use
### Sign Up & Log In
* When the user hasn't logged in, the navbar at the top of the page will look like this:
<div>
  <img src="https://github.com/wjc0326/FindHotel/blob/main/readme-img/login_navbar.png" alt="login_navbar" width="800"> 
</div>

* By clicking the "Login" button, the user will be directed to the "/login" page (log in with username Ani and password 12345 to test):
<div>
  <img src="https://github.com/wjc0326/FindHotel/blob/main/readme-img/login_page.png" alt="login_page" width="300"> 
</div>


* After login, the navbar will contain username and Logout button, instead of Register and Login buttons:
<div>
  <img src="https://github.com/wjc0326/FindHotel/blob/main/readme-img/logout_navbar.png" alt="logout_navbar" width="800"> 
</div>

### Home Page
<div>
  <img src="https://github.com/wjc0326/FindHotel/blob/main/readme-img/homepage.jpg" alt="homepage" width="800"> 
</div>

* The lowest part of the header is the search area, where user can enter the location, choose the time range, and change options. After clicking the "Search" button, user will be directed to the "/hotel" page, which is the list of hotels that meet the requirements.
<div>
  <img src="https://github.com/wjc0326/FindHotel/blob/main/readme-img/search.gif" alt="search" width="800"> 
</div>

### Hotel List Page
<div>
  <img src="https://github.com/wjc0326/FindHotel/blob/main/readme-img/hotellist_page.png" alt="hotellist_page" width="800"> 
</div>

* The left part of this list page is the search area, where user can change their choices. And after clicking the "Search" button, this page will reload and show the corresponding hotels.

* The "See availability" button will direct the user to the hotel details page.

### Hotel Details Page
<div>
  <img src="https://github.com/wjc0326/FindHotel/blob/main/readme-img/hotel_page.jpg" alt="hotel_page" width="800"> 
</div>

* Here shows the details of a single hotel. User can click on any picture to enlarge it, click the left and right arrow buttons to switch between pictures, and click the x button to close the slider part:
<div>
  <img src="https://github.com/wjc0326/FindHotel/blob/main/readme-img/window_slide.gif" alt="window_slide" width="800"> 
</div>

* User can reserve the room by clicking any "Reserve or Book Now!" button. Select room part will show up, where the unavailable rooms (which has been occupied by other users in the chosen time range) will turn grey and not be selected: 
<div>
  <img src="https://github.com/wjc0326/FindHotel/blob/main/readme-img/select_room.png" alt="select_room" width="800"> 
</div>

### Admin Page
* User can switch the theme between light mode and dark mode by clicking the moon icon in the navbar
<div>
  <img src="https://github.com/wjc0326/FindHotel/blob/main/readme-img/admin_page.JPG" alt="admin_page" width="800"> 
</div>

* Admin can view users, hotels and rooms, delete current ones and add new ones in this admin page. Take users as example:

1. View and delete current users
<div>
  <img src="https://github.com/wjc0326/FindHotel/blob/main/readme-img/user_page.png" alt="user_page" width="800"> 
</div>

2. Add new user
<div>
  <img src="https://github.com/wjc0326/FindHotel/blob/main/readme-img/add_new_user.png" alt="add_new_user" width="800"> 
</div>

## Installation
This project uses [node](http://nodejs.org) and [yarn](https://yarnpkg.com/).
### Environment variables
```
MONGODB_URL=
JWT_SECRET=
```
### Install steps
```
$ yarn install
create .env in api folder and set your environment variables
$ cd api
$ yarn start
open another terminal
$ cd ..
if you want to test FindHotel app, cd to client; otherwise, cd to admin to test anitadmin app
$ cd client/admin
$ yarn start
```

## Future Updates
* Implement the links both at the footer in FindHotel app and at the sidebar in anitadmin app
* Expand the database to make the pages of FindHotel look richer
* Implement register and logout function
* Add payment function with [Stripe](https://stripe.com/) and implement cashflow function of anitadmin app
* Deploy the websites using Heroku
