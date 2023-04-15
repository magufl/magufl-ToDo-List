<!-- hide -->
# Second Part of the TODO list, adding fetch
<!-- endhide -->

This exercise is meant to be completed after the [TODO list react application](https://4geeks.com/interactive-coding-tutorial/junior/todo-list) because the first part is the perfect boilerplate to start using API's.

For this second part, we will sync our todo list with a real database, using the following [RESTful](https://content.breatheco.de/lesson/understanding-rest-apis) and public API made for this exercise.

🔗 Click here to access to the [TODO-list API documentation](http://assets.breatheco.de/apis/fake/todos/).

This whole exercise is about asynchronous programming because the interactions `from` and `to` the server need to be done async. That way, the user does not have to wait for the information to arrive.

## 📝 Instructions:

- Make your to-do list sync with the backend API every time a task is added or deleted.
- Add a clean all tasks button that will delete the entire list from the server and update the empty list on the front-end.

There are 3 critical moments in the application timeline (a.k.a. The runtime) to focus on your integration:
- **After the list loads empty for the first time (componentDidMount)**: you should fetch (GET) the data from the API and update the tasks when the information finally arrives.
- **When a new task is added**: You should PUT the new list on the server.
- **When a task is deleted**: You should PUT the new list on the server.


This and many other projects are built by students as part of the 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) by [Alejandro Sanchez](https://twitter.com/alesanchezr) and many other contributors. Find out more about our [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).
