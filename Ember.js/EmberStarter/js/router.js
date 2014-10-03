Todos.Router.map(function(){
	this.resource('todos', {path: '/'});
});

//This grabs the model todo from model/todo.js
Todos.TodosRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('todo');
	}
});