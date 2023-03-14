# Bruin Laundry
_Laundry Room Maintenance Portal for UCLA Students and Staffs_

This web application is aiming at informing students about the availability of laundry machines in various dorms, and reporting the issues to the staffs. In addition, staffs can also use this web application to change washers' status once they are fixed, and receive students' report in time. We hope that this application will help the students locate working washers quickly, and facilitate the communication between students and staffs. 

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
If you are a student, you will first need to create an account via the signup page ```http://localhost:3000/signup```. If you have already logged in before, you can directly log in. 
If you are a staff, you should use the admin account to log in. You should first click on the "staff" button, and enter username (admin), email (admin@admin.com), and password (123456).

If you want to see how different clients interact (e.g., real-time notification of message), you can log in one account one browser (e.g., Chrome) and another account (staff account) via another browser (e.g., Safari)

### Step 3. On the Home Page
Once you logged in, you will be directed to the home page. You will be directed to ```http://localhost:3000/home``` if you logged in as a student, and will be directed to ```http://localhost:3000/home_staff``` if you are a staff. 

### There are several universal features for both students and the staff
1. You can view the status of all the washers in all dorms. You can search for a dorm for its own particular dorm status

2. You can click on the ```Access Report Page``` button and be redirected to the report page

3. You can access the current time

4. You can log out at any time

### There are also several distinct features for both students and the staff
### If you logged in as a student......
1. The dorm status on the home page will be rendered based on the dorm you are in. For example, if you live in Hedrick, you will see the status of Hedrick washers once you log in. You can also view other dorms via the search bar.

2. You can change your profile by clicking on ```Edit Profile```. This is useful if you change your dorm.

3. Instead of accessing the page directly, you can also click on a specific washer to report. If you haven't established a chat with the staff, being redirected to the report page, you will be created a chat box with the staff for you. If you have established a chat with the staff, you will be able to see all the previous conversation, and report the new problem.

### If you logged in as a staff......
1. In addition to searching for washers by dorm, you can also search for washers by its status. This is useful if you want to have a direct view of which washers need to be fixed. 

2. You can click on "Allow changes", and change the status of the washer from “WORKING” to “IN MAINTENANCE” and vice versa by clicking on its status.

### Step 4. On the Report Page
On this page, the staff and the students can communicate with each other, and the students can report problems conveniently. If you logged in as a staff, you can also see a list of student report on the left side, and click on a particular report to view.

You can also go back to the home page at any time. 

Note that the notification of message is real time, meaning that you don't need to refresh the browser once a new message comes! Try to log in two accounts and send messages to each other to view 😛



