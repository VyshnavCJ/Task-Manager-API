# Task Manager API
  A simple task managing app
  created using nodejs as backend with mongodb as database
  
## Install
 npm install
 
## Running
 npm start
 
 ## Base url
  ### `http://localhost:3000` 

 ## Routes
  ### router.get("/api/v1/task/");

  ### router.post("/api/v1/task/");

  ### router.get("/api/v1/task/:id");

  ### router.patch("/api/v1/task/:id");

  ### router.delete("/api/v1/task/:id");


## Note
### Add a `.env `file to the root of your project with the following content:
 
  'MONGO_URI=<mongo url>'
