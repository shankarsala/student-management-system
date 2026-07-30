# 🎓 Student Management System

A Full Stack Student Management System built with **Spring Boot**, **React.js**, and **MySQL**. The application allows users to add new student records and retrieve all student data through a RESTful API, demonstrating frontend-backend integration in a modern web application.

> 🚧 **Project Status:** Currently under development. Student creation and retrieval functionalities have been implemented, with additional CRUD features planned.

---

## 📌 Features

### Current Features

- Add new student records
- View all student records
- Store student information in MySQL database
- RESTful API built with Spring Boot
- React-based user interface
- Material UI components
- Controlled forms using React Hooks
- Frontend and backend integration using Fetch API

---

## 🛠 Tech Stack

### Frontend

- React.js
- JavaScript (ES6+)
- Material UI
- HTML5
- CSS3
- Fetch API

### Backend

- Java
- Spring Boot
- Spring MVC
- Spring Data JPA
- Hibernate
- RESTful API

### Database

- MySQL

### Tools

- IntelliJ IDEA
- VS Code
- Postman
- Maven
- Git
- GitHub

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/shankarsala/student-management-system.git
cd student-management-system
```

---

## Backend Setup

### Create MySQL Database

```sql
CREATE DATABASE student_management;
```

Update the `application.properties` file.

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/student_management
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

Run the Spring Boot application.

```bash
mvn spring-boot:run
```

Backend Server:

```
http://localhost:8080
```

---

## Frontend Setup

Navigate to the frontend directory.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Start the React application.

```bash
npm start
```

Frontend Server:

```
http://localhost:3000
```

<h2>👨‍💻 Author</h2>

<p><b>Shankar Sala</b></p>

<ul>
  <li>
    GitHub:
    <a href="https://github.com/shankarsala" target="_blank">
      https://github.com/shankarsala
    </a>
  </li>

  <li>
    LinkedIn:
    <a href="https://www.linkedin.com/in/shankarsala/" target="_blank">
      https://www.linkedin.com/in/shankarsala/
    </a>
  </li>

</ul>

<hr>

<h2>⭐ Support</h2>

<p>
If you like this project, give it a ⭐ on GitHub!
</p>
