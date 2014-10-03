//This line of code creates an ember application
//Kind of like a starting point
window.Todos = Ember.Application.create();

//This allows us to access our fixtures array in model/todo.js
Todos.ApplicationAdapter = DS.FixtureAdapter.extend();
