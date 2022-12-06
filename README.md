# Capstone-Foundations
It's always been my dream to create a Spanish reading app for kids in Central and South America. For my capstone project, I decided to build the account creation process for users. A user will be able to create an account, a personal avatar, login to the app, and see their avatar placed at the starting point in the map. The map is where kids would begin to complete activities and progress through levels, but that's not part of this project. Since my app is in Spanish, I've included a few screenshots for you to understand what each feature does. 


![Homepage](https://user-images.githubusercontent.com/97368143/205778388-7bbf2dab-606e-4e92-a9d3-95aacf96b012.png)
From the landing page users can click on "Inicia" in the top right corner if they are an existing user and would like to login. If they are not an existing user they can create an account by clicking on "Inscribete" or "Juega Gratis".  There's also a "Dona" button on this page, which will be set up for PayPal donations in the future. 

![image](https://user-images.githubusercontent.com/97368143/205778739-7fb98b86-25c3-48ed-96af-4caa3221ddc7.png)
This is where users can create an account. They are prompted to add a username, email, password, and password confirmation. They can click "Inscribete" to create their account, however if they already have an account they can click "Inicia Sesion" to be re-routed to the login page. I hosted my user's database in firebase. They offer user authentification, password recovery, and flexible databases. 

![image](https://user-images.githubusercontent.com/97368143/205779210-a93f6151-02ae-4836-8e4d-c707bd447aed.png)
Once a user creates an account, they are prompted to create their personal avatar. To do so, they can click on one of the six options below the avatar: body, arms, legs, mouth, face, and eyes. Once they click on a category, it will display four different options within that category. When the user is done editing their avatar they have to click the checkmark, which will take a screenshot of the avatar (using html2canvas) and send the image link to the users database. 

![image](https://user-images.githubusercontent.com/97368143/205779549-242eb87a-7e88-4fa6-af07-0396de995542.png)
This is the login page for users. If they have not created an account, they can click "Inscribete" to be re-routed to the sign-up page. Additionally, they could click "tu contraseña" to be routed to the password recovery page. 

![image](https://user-images.githubusercontent.com/97368143/205779813-9fd50a13-36c4-44e4-a5e4-fcdf0e782b82.png)
This is the password recovery page. 

Since I used CDNs for firebase and html2canvas, you can use my app by cloning my repository or clicking on my hosted page. I hosted my app on Netlify, if you'd like to give it a try, <a href='https://moonlit-lolly-359bc4.netlify.app/index.html' target='_blank'> click here </a> . 
