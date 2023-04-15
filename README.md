<!-- hide -->
# Second Part of the TODO list, adding fetch
<!-- endhide -->

<p align="center">
  <img height="200" src="./src/img/todolist-anim.gif?raw=true" />
</p>

This exercise is meant to be completed after the [TODO list react application](https://4geeks.com/interactive-coding-tutorial/junior/todo-list) because the first part is the perfect boilerplate to start using API's.

For this second part, we will sync our todo list with a real database, using the following [RESTful](https://content.breatheco.de/lesson/understanding-rest-apis) and public API made for this exercise.

🔗 Click here to access to the [TODO-list API documentation](http://assets.breatheco.de/apis/fake/todos/).

This whole exercise is about asynchronous programming because the interactions `from` and `to` the server need to be done async. That way, the user does not have to wait for the information to arrive.

## Technologies
- HTML
- CSS
- Bootstrap
- React
- RESTful API 

## 📝 Features:

- To-do list sync with the backend API every time a task is added or deleted.
- Clean all tasks button that will delete the entire list from the server and update the empty list on the front-end.
- Button on each task that when clicked updates the entire list from the server and update the list on the front-end except the own task
- New task normalization:
    - must have at least one letter or number
    - trim and toLowerCase are applied so that we can get a string without surrounding white spaces and in lowercase
    - first letter is capitalized
    - must be a unique task to be added to the list


This and many other projects are built by students as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and many other contributors. Find out more about our [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).
