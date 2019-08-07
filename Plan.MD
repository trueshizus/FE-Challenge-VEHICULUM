# Plan

## General Steps

1) Migrate all Jokes to firestore adding the fields createdAt, Upvotes, Downvotes and Author.

2) Create a basic list of links with no functionality for each of the sections and add a Route to them:
Home
Single Joke View
Publish New Joke
My Published Jokes
My Saved Jokes
Acount Information.

3) Create Empty components to define a skeleton for the application and to work with them individually later:

* Header -> Contains the Menu, the search bar, and the user profile links.
  * Menu -> Links to different sections.
  * Search -> Search with suggestion as the user types.
* Home
  * JokeList -> Display 6 jokes, includes show more buttom.
  * FilterList -> Option to filter the list of jokes.
  * Filter -> Individual filter.
* JokePage
  * Joke -> Show Individual joke with Upvote/Downvote option.
  * Prev/Next joke links
  * Top 10 jokes this week.
  * Footer -> Background image, and link to create jokes.
  
4) Add firebase integration and fetch actual data.
5) Work in each section to achieve the desired functionality.
6) Add user authentication, login, logout, and favorites.
7) Add styling to each component and the main layout.

## Questions

* Where does the Joke titles come from?
