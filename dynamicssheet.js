/**
 * Dynamicssheet
 * Created by DomRamirez for fun on 8/1/14.
 * Free for anyone for any reason, but completely without warranty.
 *
 * Contribute, complain, or borrow at https://github.com/domramirez/dynamicssheet
 */

function Dynamicssheet()
{
	var _this = this;

	var styleElem = document.createElement('style');
	styleElem.setAttribute('type', 'text/css');

	var styles = {};

	// *.add(ruleSetObj) - multiple styles at once
	// *.add(rule, [styleObj]) - multiple styles at once
	// *.add(rule, property, value) - one at a time

	this.add = function(rule, property, value)
	{
		if(rule && typeof rule === 'string')
		{
			styles[rule] = styles[rule] || {};

			if(property instanceof 'string' && value)
			{
				styles[property] = value;
			}
			else if(property instanceof 'object')
			{
				for(var prop in property)
					if(rule.hasOwnProperty(rl) && property[prop])
						styles[rule][prop] = property[prop];
			}
			else
			{
				invalidArgsWarning();
				return _this;
			}
		}
		else if(typeof rule === 'object')
		{
			for(var rl in rule)
			{
				if(rule.hasOwnProperty(rl))
				{
					styles[rl] = styles[rl] || {};

					for(var prop in rule[rl])
						if(rule[rl].hasOwnProperty(prop) && rule[rl][prop])
							styles[rl][prop] = rule[rl][prop];
				}
			}
		}
		else
		{
			invalidArgsWarning();
			return _this;
		}

		writeStyles();
		return _this;
	};

	// *.remove(ruleArray) - remove multiple rules at once
	// *.remove(ruleString) - remove one full rule
	// *.remove(ruleString, propertyString) - remove a single style

	this.remove = function(rule, property)
	{
		if(rule instanceof Array)
		{
			for(var i = 0; i < rule.length; i++)
				delete styles[rule[i]];
		}
		else if(rule && !property)
		{
			delete styles[rule];
		}
		else if(rule && property)
		{
			if(styles[rule])
				delete styles[rule][property]
		}
		else
		{
			invalidArgsWarning();
			return _this;
		}

		writeStyles();
		return _this;
	};

	function writeStyles()
	{
		var cssContents = '';

		for(var rule in styles)
		{
			cssContents += rule + ' { \n';

			if(styles.hasOwnProperty(rule))
				for(var property in styles[rule])
					cssContents += '\t' + property + ': ' + styles[rule][property] + ';\n';

			cssContents += '} \n\n';
		}

		styleElem.innerHTML = cssContents;
	}

	function invalidArgsWarning()
	{
		console.warn('Invalid arguments passed to Dynamicssheet instance. Try again?');
	}

	document.getElementsByTagName('head')[0].appendChild(styleElem);
}