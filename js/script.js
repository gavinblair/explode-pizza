/* Author:

*/


$(document).ready(function(){
	var languages = [
		{
			name: "Python",
			url: "http://www.python.org/"
		},
		{
			name: "Django",
			url: "https://www.djangoproject.com/"
		},
		{
			name: "Bottle",
			url: "http://bottlepy.org/"
		},
		{
			name: "Pyramid",
			url: "http://www.pylonsproject.org/"
		},
		{
			name: "Ruby",
			url: "http://ruby-lang.org/"
		},
		{
			name: "Rails",
			url: "http://rubyonrails.org/"
		},
		{
			name: "Sinatra",
			url: "http://www.sinatrarb.com/"
		},
		{
			name: "Java",
			url: "http://oracle.com/java"
		},
		{
			name: "ASP.NET",
			url: "http://www.asp.net/"
		},
		{
			name: "PHP",
			url: "http://php.net/"
		},
		{
			name: "Objective-C",
			url: "http://developer.apple.com/library/mac/#documentation/Cocoa/Conceptual/ObjectiveC/Introduction/introObjectiveC.html"
		},
		{
			name: "PhoneGap",
			url: "http://phonegap.com/"
		},
		{
			name: "Flex",
			url: "http://www.adobe.com/products/flex.html"
		},
		{
			name: "jQuery",
			url: "http://jquery.com/"
		},
		{
			name: "CodeIgniter",
			url: "http://codeigniter.com/"
		},
		{
			name: "CakePHP",
			url: "http://cakephp.org/"
		},
		{
			name: "PERL",
			url: "http://www.perl.org/"
		},
		{
			name: "Node.js",
			url: "http://nodejs.org/"
		},
		{
			name: "Sencha",
			url: "http://www.sencha.com/"
		},
		{
			name: "Flash",
			url: "http://www.adobe.com/devnet/flash.html"
		},
		{
			name: "Processing",
			url: "http://processing.org/"
		},
		{
			name: "Codea",
			url: "http://twolivesleft.com/Codea/"
		}
	];
	var ideas = [
		"Calculator",
		"To-Do List",
		"Address Book",
		"Nickname Generator",
		"Anagram Solver",
		"Text-Based RPG",
		"Password Generator",
		"Elevator Simulator"
	];
	var l = Math.floor(Math.random()*languages.length);
	$("#randomlanguage").click(function(){
		var language = languages[l];
		$("#therandomlanguage").fadeOut('slow', function(){
			$("#therandomlanguage").text(language.name);
			$("#therandomlanguage").attr("href", language.url);
			$("#therandomlanguage").fadeIn('slow');
		});
		l++;
		if(l > languages.length-1) {
			l = 0;
		}
	});
	var i = Math.floor(Math.random()*ideas.length);
	$("#randomidea").click(function(){
		var idea = ideas[i];
		$("#therandomidea").fadeOut('slow', function(){
			$("#therandomidea").text(idea);
			$("#therandomidea").fadeIn('slow');
		});
		i++;
		if(i > ideas.length-1) {
			i = 0;
		}
	});
});


