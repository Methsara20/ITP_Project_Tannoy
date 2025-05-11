# Employee Management System for Tannoy Electrical Industries

A full-stack web application built to streamline employee management, attendance tracking, and payroll processing for Tannoy Electrical Industries.

# 🎯 Project Overview
The Employee Management System is a robust, user-friendly platform designed to simplify workforce management. 
It enables businesses to efficiently handle employee data, track attendance, and automate payroll calculations with precision and ease. 
From generating unique employee IDs to calculating net salaries with EPF/EFT deductions, the system ensures accuracy and scalability for modern organizations.

# Key Features





Employee Onboarding: Add new employees with details like name, email, phone, position (e.g., manager, trainee), and type (full-time, part-time). Automatically generates unique IDs (e.g., EMP00001).



Data Validation: Ensures valid inputs (e.g., proper email/phone formats, non-empty fields) for reliable data entry.



Employee Dashboard: Displays employee profiles and total employee count for quick insights.



Search Functionality: Instantly locate employees by their unique ID.



Profile Management: Update or delete employee records with ease.



Attendance Tracking: Mark daily attendance (present/absent) with validations:





Absent employees cannot receive overtime (OT), allowances, or incentives.



Maximum 5 OT hours per day.



Attendance restricted to the current day.



Attendance Reports: Filter records by employee ID, month, or status (present/absent) for detailed tracking.



Payroll Automation: Calculates salaries based on:





Employee position and type for daily wages and OT rates.



Attendance, OT hours, allowances (e.g., meal, transport), and incentives.



Automatic deductions for EPF/EFT to compute net salary.


# 🛠️ Technologies & Tools





MongoDB: NoSQL database for scalable storage of employee and attendance data.



Express.js: Backend framework for handling API requests and server logic.



React: Dynamic, component-based frontend for a responsive user interface.



Node.js: Server-side runtime for efficient backend operations.



Visual Studio Code: Primary IDE for development and debugging.



GitHub: Version control and collaboration platform for the team.



Postman: API testing tool to ensure robust backend endpoints.

# 🚀 Getting Started
Prerequisites





Node.js and npm installed.



MongoDB (local or cloud instance, e.g., MongoDB Atlas).



A modern web browser (e.g., Chrome, Firefox).


Installation





Clone the Repository:

git clone https://github.com/your-username/employee-management-system.git
cd employee-management-system



Install Dependencies:





Backend:

cd backend
npm install



Frontend:

cd ../frontend
npm install



Configure Environment Variables:





Create a .env file in the backend folder with:

MONGO_URI=your-mongodb-connection-string
PORT=5000



Replace your-mongodb-connection-string with your MongoDB URI.



Run the Application:





Start the backend:

cd backend
npm start



Start the frontend:

cd frontend
npm start



Open http://localhost:3000 in your browser to access the app.
