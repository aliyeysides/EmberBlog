App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.Router.map(function() {
	this.resource('blogs', function(){
		this.resource('blog', {path: '/:title'});
	});
});

// App.AboutController = Ember.Controller.extend({
// 	// define logic and decorate front end
// })

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

App.BLOGS = [{
	title: 'This is a test article',
	body: 'One fine day stuff happened laddy daahh',
},
{
	title: 'this is the second test article',
	body: 'the enddddddddddd .......or is it?'
}];