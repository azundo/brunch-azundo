# Brunch Eggs and Bacon
My favorite brunch, fat and Tasty!

[Twitter Bootstrap](http://twitter.github.com/bootstrap/) Javascript skeleton for [Brunch.io](http://brunch.io) with support for [SASS](http://sass-lang.com/), [LESS](http://lesscss.org/) and [Handlebars](http://handlebarsjs.com/). Also include [Backbone.Mediator](https://github.com/chalbert/Backbone-Mediator) for Pub/Sub patterns.

## Getting started

Make sure to have [Brunch.io](http://brunch.io) installed.

Create your project using Eggs and Bacon with:

		brunch new <your-project-name> -s git@github.com:nezoomie/brunch-eggs-and-bacon.git
		
Or simply copy the repository on your hard drive and rename it.

## Customize Bootstrap Stylesheets

All Bootstrap stylesheet files can be found separated into:

		vendor/styles/bootstrap
		
They're in original [LESS](http://lesscss.org/) format in order to be easily customized, and compiled together with the app build.

## Exclude Bootstrap jQuery plugins

jQuery plugins used by Bootstrap are all listed (in the right order) inside the config.coffee file. Comment them with an # if you don't want to include them in the final build. (Pay attention to dependencies!)

