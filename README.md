# Social-Not-work-API

## Description
The Social-Not-work-API is a node application that allows a user to create a post of their thoughts, add other users as a friend, and react to a another user's thoughts posted. Not only can these thoughts and reactions be made, but they can also be updated and deleted as well.

Please see the video link for a demo-walkthrough: 
[Demo-Walkthrough](https://drive.google.com/file/d/1khozGqAborxRoEkb7PKxKftQ2Q58zkxr/view)

## Installation
Because this particular application utilizes mongoDB, you will need to make sure you have MongoDB installed on your PC. Once you have installed MongoDB and cloned the repository, you will need to run `npm i` to install the necessary packages that support this application.

## Usage
In order to use the application, you will need to navigate to the directory where the server.js file is located and run `npm start`. Once the application has started, you are able to run the various API calls through Insomnia Core. 
- Thought Related Routes:
    - `/api/thoughts` : GET (get all thoughts)

    - `/api/thoughts/<thoughtId>` : PUT (update thought) & GET (retrieve specific thought by Id in URL)

    - `/api/thoughts/<userId>` : POST (post/add a thought for the user with the Id in URL)

    - `/api/thoughts/<userId>/<thoughtId>` : DELETE (remove a thought made by a user)

    - `/api/thoughts/<userId>/<thoughtId>/reactions`: PUT (add a reaction to a user's thought)
    - `/api/thoughts/<userId>/<thoughtId>/reactions/<reactionId>` : DELETE (remove a reaction to a user's post)

- User Related Routes:
    - `/api/users/` : GET (get all users) & POST (Create a user)
    - `/api/users/<userId>`: GET (get a specific user) & PUT (update a specified user) & DELETE (delete/remove a specified user)
    - `/api/users/<userId>/friends/<friendId>`: PUT( Add a friend/another user to a specified user's friend list) & DELETE (Remove/delete a user/friend from a specified user's friend list)