# Netflix GPT

- Create react app
- Configured Tailwindcss
- install React-router-dom
- Creating Heading
- Created Login/SignUp Logic
- Adding Regexx for data validation
- useref
- Now use Firebase and enable the email authentication 
- hosting in firebase 
    after adding the Firebase configurations in utils we hoiste it
    beofre hoisitng (firebase login) we do a CLI "npm i -g firebase-tools"

- After logging in through PowerShell by changing the settings 
 Set-ExecutionPolicy -ExecutionPolicy RemoteSigned

 - once we write firebase init we get couple of options like :- (spacebar for select )
  Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys 
 - existing one 
 - projectname 
- public directory :- build
- re-write index.html:no
automatic builds with github:- No 

run npm run build and build your dist folder
now for deployment :- firebase deploy 

Back again :- Create a SignUp 
User Account :- we send data to firebase for registration
Signout functionality is backed in.
- Now starting on Homepage
    GoTo tmdb and get the api and accesstoken
    goto documentation and search for movieList
- With the API Call we had finally fetch the Movies
- Once we fetch the Movies we add it in the Store using custom Hooks
- Now we selected any random thumbnail and filter out one 
- Once we had done then we had taken the Key / Id from the filter list use that key
- and call the videoAPI by passing the movie id and get the list
- save in state and now using the key we append the key in the youtube video player
- using the embaded and done the style.
- TMDB password:- K1234567890s Somenkr

# Features 

- Login/Logout 
    - SignIn /SIgnUp form
    - redirect to browse page
- Browse after authentication
    - Header
    - Main Movie
        - Trailer in bg
        - Title and description
        - Movie Suggestions
            - 


removed from 
"eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },