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
	},
	//Adding remaining and inflection controller actions
	remaining: function(){
		return this.filterBy('isCompleted', false).get('length')
	}.property('@each.isCompleted'),
	
	inflection: function() {
		var remaining = this.get('remaining');
		return remaining === 1 ? 'item' : 'items';
	}.property('remaining')
});

//Todos isCompleted check box controller
Todos.TodoController = Ember.ObjectController.extend({
	//Edit todo controller
	actions:{
		editTodo: function() {
			this.set('isEditing', true)
		},
		acceptChanges: function() {
			this.set('isEditing', false);
			
			if(Ember.isEmpty(this.get('model.title'))){
				this.send('removeTodo');
			}else{
				this.get('model').save();
			}
		},
		removeTodo: function(){
			var todo = this.get('model');
			todo.deleteRecord();
			todo.save();
		}
	},
	
	isEditing: false,
	
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

































