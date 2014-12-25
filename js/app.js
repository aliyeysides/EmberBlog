App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.Router.map(function() {
	this.resource('home', {path: '/'});
	this.resource('navbar', function(){
		this.resource('blogs');
		this.resource('about');
		this.resource('blog', {path: '/:title'});
		this.resource('projects');
		this.resource('project', {path: '/:name'});
	})
});

// App.AboutController = Ember.Controller.extend({
// 	// define logic and decorate front end
// })

App.BlogsController = Ember.ArrayController.extend({
	recentBlog: function(){
		return App.BLOGS.last().title;
	}.property()
})

App.HomeController = Ember.ArrayController.extend({
	recentBlog: function(){
		return App.BLOGS.last().title;
	}.property()
})

App.BlogsRoute = Ember.Route.extend({
  model: function() {
    return App.BLOGS;
  }
});

App.BlogRoute = Ember.Route.extend({
	model: function(params){
		return App.BLOGS.findby('title', params.title)
	}
});

App.ProjectsRoute = Ember.Route.extend({
	model: function(){
		return App.PROJECTS;
	}
})

App.ProjectRoute = Ember.Route.extend({
	model: function(params){
		return App.PROJECTS.findby('name', params.name)
	}
})

App.BLOGS = [{
	title: 'This is a test article',
	date: '2014-12-25',
	body: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
},
{
	title: 'this is the second test article',
	date: '2014-12-24',
	body: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
}];

App.PROJECTS = [{
	name: 'pinpoint',
	description: "it's a chrome extension",
	builtWith: 'javascript'
},{
	name: 'livehub',
	description: "it's a site n stuff",
	builtWith: "rails"
}]

// App.ABOUT = {
// 	summary: "blah"
// }

// Extensions
Array.prototype.last = function() {
    return this[this.length-1];
}

// Jquery
$(document).ready(function(){
	var id = $()
	$().on('click', function(){

	})

})