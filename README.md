# Bruin Laundry
_Laundry Room Maintenance Portal for UCLA Students and Staffs_

## Getting Started

### Step 0. Clone the repository
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
4. You can log out 

### There are also several distinct features for both students and the staff
### If you logged in as a student......
1. You can change your profile by clicking on ```Edit profile```. This is useful if you change your dorm.
2. Instead of accessing the page directly, you can also click on a specific washer to report. If you haven't established a chat with the staff, being redirected to the report page, you will be created a chat box with the staff for you. If you have established a chat with the staff, you will be able to see all the previous conversation, and report the new problem.

### If you logged in as a staff......
1. In addition to searching for washers by dorm, you can also search for washers by its status. This is useful if you want to have a direct view of which washers need to be fixed. 
2. You can click on "Allow changes", and change the status of the washer, by clicking on its status.








