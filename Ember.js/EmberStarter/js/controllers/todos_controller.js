//Todos create a new todo in our list
Todos.TodosController = Ember.ArrayController.extend({
	actions: {
		createTodo: function(){
			// Get the todo title set by the "New Todo" text field
			var title = this.get('newTitle');
			if(!title) {return false;}
			if(!title.trim()){return;}
			
			//create new todo model
			var todo = this.store.createRecord('todo', {
				title: title,
				isCompleted: false
			});
			
			//Clear the 'New Todo' text field
			this.set('newTitle', '');
			
			//Save the new model
			todo.save();
		}
	}
});

//Todos isCompleted check box controller
Todos.TodoController = Ember.ObjectController.extend({
	isCompleted: function(key, value){
		var model = this.get('model');
		
		if(value === undefined){
			// property being used as a getter
			return model.get('isCompleted');
		} else {
			// property being used as a setter
			model.set('isCompleted', value);
			model.save();
			return value;
		}
	}.property('model.isCompleted')
});