✅ Task Manager Web Application

A Full-Stack Task Management Web Application that allows users to create, manage, update, and track daily tasks efficiently.

This project demonstrates internship-level full-stack development skills including frontend UI design, REST API development, database integration, and structured project architecture.

🚀 Project Overview

The Task Manager application helps users organize their daily activities by providing essential task management features such as:

Creating tasks

Viewing task list

Updating task details

Deleting tasks

Marking tasks as Completed or Pending

The application follows a client–server architecture where the frontend communicates with the backend using RESTful APIs.

🏗️ Tech Stack
🎨 Frontend

React.js

Tailwind CSS

Axios

JavaScript (ES6)

⚙️ Backend

Node.js

Express.js

REST API Architecture

🗄️ Database

MongoDB

Mongoose ODM

🧰 Tools & Technologies

Git & GitHub

Postman (API Testing)

VS Code

npm

📂 Project Structure
task-manager/
│
├── client/                 # React Frontend
│   └── src/
│       ├── components/
│       │   ├── TaskForm.jsx
│       │   ├── TaskList.jsx
│       │   └── TaskItem.jsx
│       ├── api.js
│       └── App.jsx
│
├── server/                 # Node.js Backend
│   ├── models/
│   │   └── Task.js
│   ├── controllers/
│   │   └── taskController.js
│   ├── routes/
│   │   └── taskRoutes.js
│   └── server.js
│
└── README.md

✨ Features

✅ Create a new task with title and description
✅ View all tasks
✅ Edit existing tasks
✅ Delete tasks
✅ Mark task as Completed / Pending
✅ RESTful API communication
✅ Form validation & error handling
✅ Clean UI with Tailwind CSS

🔄 Application Data Flow
User Interface (React)
        ↓
API Request (Axios)
        ↓
Express Backend (Routes → Controllers)
        ↓
MongoDB Database
        ↓
Response Sent Back to Frontend
        ↓
UI Updates Automatically

⚡ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/anjali-purohit16/TaskManager.git
cd TaskManager

🖥️ Backend Setup
cd server
npm install

Create .env file
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/taskmanager

Start Backend
npm start


Server runs at:

http://localhost:5000

💻 Frontend Setup

Open new terminal:

cd client
npm install
npm run dev


Frontend runs at:

http://localhost:5173

📡 API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create new task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task
PATCH	/api/tasks/:id/status	Toggle task status
🧠 Development Approach

This project was developed using a professional software development workflow:

Requirement Analysis

Data Modeling

API Design

Backend Implementation

Frontend UI Development

API Integration

Testing & Validation

🧪 Testing

APIs tested using Postman

CRUD operations verified

Error handling validated

UI responsiveness checked

📸 Screenshots

Add screenshots here:
[Home Page](./screenshots/home.png)


[Create-Task](./screenshots/create-task.png)

/screenshots/create-task.png

📈 Evaluation Criteria Covered

✔ Functional Requirements Implemented
✔ Clean Code Structure
✔ RESTful API Design
✔ Data Persistence
✔ Proper Error Handling
✔ User-Friendly UI

🎯 Learning Outcomes

Full-Stack MERN Development

REST API Design Principles

MongoDB Data Modeling

React Component Architecture

Professional Project Structuring

👩‍💻 Author
Anjali Purohit
GitHub: https://github.com/anjali-purohit16
Role: Internship Candidate – Full Stack Developer
