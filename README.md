# Task Manager (Angular + Java)

This project is a Task Manager application built with Angular for the frontend and Java (Spring Boot) for the backend.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Usage](#usage)
  - [Frontend](#frontend-1)
  - [Backend](#backend-1)
- [Development](#development)
  - [Running Unit Tests](#running-unit-tests)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The Task Manager application allows users to efficiently manage their tasks with functionalities such as creating, reading, updating, and deleting tasks. The frontend is built using Angular while the backend is powered by Java Spring Boot.

## Features
- CRUD operations for tasks
- User authentication and authorization
- RESTful API integration
- Responsive design

## Installation

### Frontend
1. Clone the repository:
    ```bash
    git clone https://github.com/luanmxz/Task-Manager-Angular-Java.git
    cd Task-Manager-Angular-Java
    ```
2. Navigate to the Angular project directory:
    ```bash
    cd frontend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the Angular development server:
    ```bash
    ng serve
    ```

### Backend
1. Navigate to the backend project directory:
    ```bash
    cd backend
    ```
2. Ensure you have JDK and Maven installed.
3. Build the project using Maven:
    ```bash
    mvn clean install
    ```
4. Start the Spring Boot application:
    ```bash
    mvn spring-boot:run
    ```

## Usage

### Frontend
To run the Angular development server:
```bash
ng serve
