//Code to accept an edit to a todo
Todos.EditTodoView = Ember.TextField.extend({
	didInsertElement: function() {
		this.$().focus();
	}
});

Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);

