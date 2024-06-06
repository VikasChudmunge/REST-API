## API Documentation

### Endpoints

#### GET /tasks
- Retrieves a list of all tasks.
- Response: 200 OK

#### GET /tasks/:id
- Retrieves a specific task by ID.
- Response: 200 OK, 404 Not Found

#### POST /tasks
- Creates a new task.
- Request Body: { "title": "Task title", "description": "Task description" }
- Response: 201 Created, 400 Bad Request

#### PUT /tasks/:id
- Updates an existing task by ID.
- Request Body: { "title": "Updated title", "description": "Updated description" }
- Response: 200 OK, 400 Bad Request, 404 Not Found

#### DELETE /tasks/:id
- Deletes a task by ID.
- Response: 200 OK, 404 Not Found

### Instructions to Run the API Locally

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the server with `node index.js`.
4. Use Postman or curl to test the endpoints.
