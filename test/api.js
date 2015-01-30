var cnHbs= require('../');
var Handlebars= require('handlebars');
var source = "{{{name}}}<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
             "{{kids.length}} kids:</p>" +
             "<ul>{{#each kids}}<li>{{name}} is {{age}}</li>, also have {{#each toy}}*{{this}}{{/each}}{{/each}}</ul>, so hometown: {{hometown}}";
var data = { "name": "Alan", "hometown": "Somewhere, TX",
             "kids": [{"name": "Jimmy", "age": "12", "toy": [1,2,3]}, {"name": "Sally", "age": "4","toy": [2,3,4,5]}]};
var template= Handlebars.compile(cnHbs.cnWrap(source), {trackIds: true});
console.log(template(data))
/*
// find all mustache, include inblock mustaches
var matches= cnHbs.findMustache(source);
console.log(matches);

// wrapWith
var newstring= cnHbs.warpWith(source, "##", "##");
console.log(newstring);

// enclose with html tag
console.log(
	cnHbs.encloseHtmlTag(source, 
		'x-cn', 
		{ class: "cn-key pupu me", ur: 'test', key: '$' }
		)
	);*/