How to run the project locally:
1. Extract the Ankush-IO-Tech-master.zip
2. If the project is downloaded from GitHub, it willl not have the .env file, you will have to create it and add the .env variables manually. I will also provide a link with .env already included, you can skip this step if you download from the link below:
LINK FOR THE PROJECT WITH .ENV INCLUDED: https://drive.google.com/file/d/1141wuzvw9ZLlQfV3qsxEJANd7Mbgnuqt/view?usp=sharing
3. Open the inner Ankush-IO-Tech-master folder with terminal
4. Run the command "npm install"
5. Run the command "node server.js"
6. The project should be running on port 8080: http://localhost:8080/

.env variables:

MONGO_URI="mongodb+srv://ankush:4p-XbZs47!Ww_7H@cluster0.3ajonzt.mongodb.net/IOTech?retryWrites=true&w=majority&appName=Cluster0"
PORT=8080

Vercel links:
backend: https://vercel-api-brown-sigma.vercel.app/
frontend: https://ankush-io-tech-frontend.vercel.app/


Since there was no option to use static files in vercel, the create endpoints sometimes don't work as expected. I believe that the current version of CORS is not yet supported by vercel. So I also deployed the project on Render. It works as expected on render, but can take upto 1 or 2 minutes to load. 

Render Link: 
https://ankush-io-tech-task.onrender.com/

GitHub: https://github.com/Anku5hn/Ankush-IO-Tech-Task.git

