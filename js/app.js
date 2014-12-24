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
	test: 1,
	recentBlog: function(){
		return App.BLOGS.last().title;
	}.property()
})

App.ProjectsController = Ember.ArrayController.extend({
	test: 2,
	recentProject: function(){
		return App.PROJECTS.last().name;
	}.property()
})

App.HomeController = Ember.ArrayController.extend({
	recentProject: function(){
		return App.PROJECTS.last().name;
	}.property(),
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
	body: 'One fine day stuff happened laddy daahh',
},
{
	title: 'this is the second test article',
	body: 'the enddddddddddd .......or is it?'
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