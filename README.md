<h1>React Blog Project</h1>


This is a simple blog project built using React, aimed at practicing the basic concepts of React including hooks like useEffect and useState. The project is built with a focus on functionality, and aims to allow users to create, edit and delete blog posts.

Installation
To run this project on your local machine, follow these steps:

Clone this repository onto your local machine using Git:
git clone https://github.com/<your-username>/react-blog-project.git

Change directory into the cloned repository:
cd react-blog-project
<br/>

Install dependencies using npm:
npm install
<br/>
Start the development server:
npm start
<br/>
Once the server is started, the application should automatically open in your browser at http://localhost:3000.

Usage
This application allows users to perform basic CRUD (Create, Read, Update, Delete) operations on blog posts. Users can create a new blog post by clicking the "Add Post" button and filling out the form. They can view the full details of a post by clicking on its title in the list of posts. Users can also edit and delete posts using the corresponding buttons.
  
<h2>JSON Server</h2>
I am using json-server to simulate a RESTful API for adding and deleting data. The db.json file contains the data that is being served by the server.

To run the server, first install the json-server package using npm:
npm install -g json-server

Then start the server with the following command:
json-server --watch db.json --port 3000
This will start the server on port 3000 and watch the db.json file for changes. You can then make HTTP requests to the server as if it were a real API.

Contributing
Contributions to this project are welcome. If you find any bugs or would like to suggest new features, please feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License.
