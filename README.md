# Getting Started

First in the terminal `npm install` to install all the dependencies. Then `npm start` to start the project. The project will be running on `http://localhost:3000/` by default.

## Considerations building the project

-Mappers:
Useed mappers to transform the data from the api to the format that the components need, or viceversa.
With this approach the data is more consistant and it is strictly typed ensuring the contract between the components and the api.

-Api classes:
The api class provides a common base url, api call logic and error handling for all the api calls.
Extended this class with static methods to encapsulate the api calls, this way the components are not aware of the api call details so it looks more clean. In case in the future there is a new entites, it will be scalable and still clean and easy.

-Error handling:
The entire app is wrapped with an error boundary because I think it is a good practice to show an error page in production in case something breaks. I used a library because error boundaries are not yet available for functional components in react.
Api errors are handled first through the Api class and in last instance by react-query.

-Caching:
The data is cached by react-query, with a stale time of 5 minutes.

-Components:
The components are not very refactored, they could be even cleaner, but at some point I think that it is sometimes better to find all the code in the same page than to have to jump between files to understand the logic unless the moment they need to be reused by another component. It is always a compromise but even that I tried not to make them too long.

-Typescript:
I have the personal preference use immplicit types as much as possible so the code is easier to maintain. The only part I used return types are the mappers because they strictly need to follow a contract.

-Snackbar:
I created a snack bar to show the errors in a more user friendly without using a library. I used react context, because the state wouldn't change too often. I also could have used a third party library, but I preffer to rely as much as possible on the native react features.

## Libraries used

-material UI for the design of the project.
-react-router-dom for the routing of the project.
-react-query for the data fetching.
-react-hook-form for the form validation.
-CRA because I am more confident with it than NextJs but
I have some experience with NextJS.
-react-error-boundary for error boundary handling.
