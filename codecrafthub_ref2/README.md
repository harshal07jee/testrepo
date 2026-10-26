# CodeCraftHub – Learning Platform API

CodeCraftHub is a simple learning platform backend project developed to demonstrate how REST APIs can be built using different technologies.

The repository contains two implementations of the same API concept:

* Node.js + Express implementation
* Python + Flask implementation

The project demonstrates how to design and implement CRUD-based REST APIs, store data in JSON format, and manage a project using Git and GitHub.

---

## Project Overview

The CodeCraftHub API allows users to manage learning courses.

Each course contains the following information:

* id (auto-generated)
* name
* description
* target completion date
* current learning status
* creation timestamp

The API supports full CRUD operations:

* Create courses
* Retrieve courses
* Update courses
* Delete courses

---

## Project Version 1 – Node.js REST API

The first implementation of the project uses **Node.js with Express**.

### Technologies

* Node.js
* Express.js
* JSON file storage

### Main File

app.js

### Dependencies

package.json

---

## Project Version 2 – Python Flask REST API

The second implementation of the project uses **Python and Flask**.

This version was created as part of a **Skills Network Lab exercise** to demonstrate REST API development with Python.

### Technologies

* Python 3
* Flask
* JSON file storage

### Main File

app.py

### Dependencies

requirements.txt

---

## Project Structure

codecrafthub
│
├── app.js
├── package.json
├── package-lock.json
│
├── app.py
├── requirements.txt
│
├── README.md
└── .gitignore

---

## Installation

Clone the repository:

git clone https://github.com/davidbarone1970-dotcom/codecrafthub.git

cd codecrafthub

---

## Running the Node.js Version

Install dependencies:

npm install

Start the server:

node app.js

The API will run at:

http://localhost:5000

---

## Running the Python Version

Install dependencies:

pip install -r requirements.txt

Start the server:

python app.py

The API will run at:

http://localhost:5000

---

## API Endpoints

### Get all courses

GET /api/courses

### Get a specific course

GET /api/courses/{id}

### Create a new course

POST /api/courses

Example request body:

{
"name": "Python Basics",
"description": "Learn Python fundamentals",
"target_date": "2025-12-31",
"status": "Not Started"
}

### Update a course

PUT /api/courses/{id}

Example request body:

{
"status": "In Progress"
}

### Delete a course

DELETE /api/courses/{id}

### Course statistics (optional endpoint)

GET /api/courses/stats

Returns statistics about courses by status.

---

## Example Course Data

{
"id": 1,
"name": "Python Basics",
"description": "Learn Python fundamentals",
"target_date": "2025-12-31",
"status": "Not Started",
"created_at": "2026-03-16 14:20:00"
}

---

## Error Handling

The API includes validation and error handling for:

* Missing required fields
* Invalid status values
* Invalid date format
* Course not found
* File read/write errors

---

## Learning Goals

This project demonstrates:

* REST API design
* Backend development
* JSON data handling
* CRUD operations
* Git & GitHub workflow
* Implementation of the same API using different technologies

---

## Author

David Barone
GitHub:
https://github.com/davidbarone1970-dotcom

---

## License

This project is created for educational purposes as part of a Skills Network Lab.