//This acts like a constructor where we create a generic todo item
//There are two points to the todo item: title and isCompleted
Todos.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});

//This is a sample data in the fixtures array
//We will create an adapter to grab this info and place it into the app.
Todos.Todo.FIXTURES = [
	{
		id: 1,
		title: 'Learn Ember.js',
		isCompleted: true
	},
	{
		id: 2,
		title: 'This is the second task',
		isCompleted: false
	},
	{
		id: 3,
		title: '...',
		isCompleted: false
	},
	{
		id: 4,
		title: 'Profit!',
		isCompleted: false
	}
];