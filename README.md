# Bruin Laundry
_Laundry Room Maintenance Portal for UCLA Students and Staff_

This web application aims to inform students about the working statuses of laundry machines in various dorms on The Hill, and reporting the issues to housing staff. In addition, the staff can use the platform to change laundry machine statuses after repairs, and receive students' report in real time. We hope that this application will help students locate working washers quickly, and facilitate communication between students and staff. 

## Technologies Used
Client: ```React.js```

Server: ```Node.js```, ```Express.js```

Database: ```MongoDB```

Others: ```Socket.io``` for real time communication, ```Material UI``` for User Interface Framework

## Getting Started

### Step 0. Clone the Repository
```bash
git clone https://github.com/jiayini1119/Laundry-Room-Maintenance-Portal.git
cd Laundry-Room-Maintenance-Portal
```

### Step 1. Install Dependencies and Compile the Frontend and the Backend

Open two terminals.

In one terminal:
1. ```cd frontend```
2. ```npm install```
3. ```npm start```

In the other terminal:
1. ```cd backend```
2. ```npm install```
3. ```npm start```

### Step 2. Check Out in Your Brower
Navigate to ```http://localhost:3000/```. 
If you are a student and have yet to create an account, you will first need to register via the signup page ```http://localhost:3000/signup```. If you have already created an account, you can log in directly. 
If you are a staff, you should use the admin account to log in. You should first click on the "staff" button, and enter username (admin), email (admin@admin.com), and password (123456).

If you want to see how different clients interact (e.g., real-time notification of message), you can log in with one account (student account) on one browser (e.g., Chrome) and another account (staff account) via another browser (e.g., Safari)

### Step 3. On the Home Page
Once you have logged in, you will be redirected to the home page. You will be redirected to ```http://localhost:3000/home``` if you logged in as a student, and ```http://localhost:3000/home_staff``` if you are a staff. 

### There are several universal features for both students and staff
1. You can view the statuses of all washers in all dorms. You can search for a dorm to view the statuses of washers in that particular dorm

2. You can view the report page by clicking on the ```Access Report Page``` button

3. You can check out the current time

4. You can log out at any time

### There are also several distinct features for both students and the staff
### If you are logged in as a student......
1. The dorm status on the home page will be rendered based on the dorm you are in. For example, if you live in Hedrick, you will see the statuses of Hedrick washers once you log in. You can also view other dorms via the search bar.

2. You can change your profile by clicking on ```Edit Profile```. This is useful if you change your dorm.

3. Instead of navigating to the report page, you can also click on a specific washer to report it directly. If you have not established a chat with the staff, a chatbox will be created automatically once you have entered the report page to allow you to start a new conversation with the staff. If you have established a chat with the staff before, you will be able to see all past conversations.

### If you are logged in as a staff......
1. In addition to searching for washers by dorm, you can also search for washers by status. This is useful if you wish to have a summary of all washers that need to be fixed. 

2. You can click on ```Allow changes``` to enable changes in washer status. A status can be toggled between “WORKING” and “IN MAINTENANCE” by clicking on the washer's status.

### Step 4. On the Report Page
On this page, the staff and students can communicate with each other, and students can report problems conveniently. If you are logged in as a staff, you can also see a list of student reports on the left. Simply click on the button associated with a particular report to view the full conversation history.

You can also go back to the home page at any time. 

Note that messages are sent and fetched in real time, which means that you do not need to refresh the browser to view a new message! Try to log in with two separate accounts and send messages between each other to test this out 😛
