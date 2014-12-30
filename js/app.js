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
	name: 'Pinpoint',
	imgUrl: 'css/img/pinpoint.png',
	deployUrl: "https://chrome.google.com/webstore/detail/pinpoint/khcfpddiephakfkdhfnbbdihopbdopam",
	description: "PinPoint is a Chrome extension that allows you to leave notes on a YouTube video. It saves you time by helping you remember what sections are important. Shut down your computer, come back to the video.. and your notes are still there! Clicking on a PinPoint takes you to that moment of the video. Simple UI and disappears when you mouse away from the video(fullscreen functionality)."
},{
	name: 'Livehub',
	imgUrl: 'css/img/livehub.png',
	deployUrl: "https://github.com/aliyeysides/LiveHub",
	description: "LiveHub is a social medium for musicians. Users can rate and review artists based on their past performances. Built with Ruby on Rails, jQuery, AJAX, Travis CI, Paperclip, RSpec, FactoryGirl, ActiveRecord, and Bootstrap."
},{
	name: 'BeaxIt',
	imgUrl: 'css/img/beaxit.png',
	deployUrl: 'http://beaxit.herokuapp.com/',
	description: "BeaxIt allows you to search your favorite artists and create playlists. Built with Sinatra, Javascript, jQuery, AJAX, iTunes API, ActiveRecord, and Bootstrap."
},{
	name: 'Super-Working-Title',
	imgUrl: 'css/img/swt.png',
	deployUrl: 'http://wizardworld.herokuapp.com/',
	description: "Super-Working-Title is a platformer game created from the JS Phaser engine. Inspired by Super Smash and Final Fantasy. Built with Sinatra, Javascript, and Phaser."
}]

// App.ABOUT = {
// 	summary: "blah"
// }

// Extensions
Array.prototype.last = function() {
    return this[this.length-1];
}

// Disqus
// App.DisqusComponent = Ember.Component.extend({
//   elementId: 'disqus_thread',
//   tagName: 'div',
//   didInsertElement: function () {
//     if (window.DISQUS) { // Simply reload disqus
//       var id = this.get('post.id'),
//           title = this.get('post.title');        
//       DISQUS.reset({
//         reload: true,
//         config: function () {  
//           this.page.identifier = id;
//           this.page.title = title;
//           this.page.url = window.location.toString();
//         }
//       });
//     } else {
//       window.disqus_shortname = 'aliyeysides';
//       window.disqus_identifier = this.get('post.id');
//       window.disqus_url = window.location.toString();
//       window.disqus_title = this.get('post.title');
//       var dsq = document.createElement('script');
//       dsq.type = 'text/javascript';
//       dsq.async = true;
//       dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
//       (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
//     }
//   }
// });