// AJQuery: https://github.com/coolaj86/ajquery.js (modified slightly by me)
function $(sel, el) { return ((typeof el === 'string' ? $(el) : el) || document).querySelector(sel); }
function $$(sel, el) { return (el || document).querySelectorAll(sel); }

function ready(fn) {
	if (document.readyState !== 'loading') {
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

function on(eventName, elemSelector, handler, capture) {
	let events = [eventName];
	if (eventName.indexOf(',') >= 0) {
		events = eventName.split(',');
	}

	events.forEach(eventName => {
		// from youmightnotneedjquery.com
		document.addEventListener(eventName.trim(), function (e) {
			// loop parent nodes from the target to the delegation node
			for (let target = e.target; target && target != this; target = target.parentNode) {
				if (NodeList.prototype.isPrototypeOf(elemSelector)) {
					for (el of elemSelector) {
						if (el == target) {
							handler.call(target, e);
							return;
						}
					}
				} else if (!elemSelector || target.matches(elemSelector)) {
					handler.call(target, e);
					return;
				}
			}
		}, capture); // I find capture=true helpful when using :not() selectors to exclude one elem of the node tree
	});
}


// cloneTemplate does a deep clone of the <template> tag selected by tplSelector.
function cloneTemplate(tplSelector) {
	// Ohhhhhh wow, we need to use firstElementChild when cloning the content of a template tag (!!!!):
	// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template#avoiding_documentfragment_pitfall
	// I spent way too long on this.
	const elem = $(tplSelector);
	if (!elem) return;
	return elem.content.firstElementChild.cloneNode(true);
	// return document.importNode(elem.content, true);
}


// when the system theme changes, apply that to our site if system theme is configured
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches }) => {
	if (getTheme() == "system") {
		applyTheme(matches ? "dark" : "light");
	}
});

// getTheme returns the configured theme.
function getTheme() {
	return localStorage.getItem("theme") || "system";
}

// setTheme changes the configured theme to light, dark, or system and applies it.
function setTheme(theme) {
	if (theme !== "light" && theme !== "dark" && theme !== "system") {
		theme = "system";
	}
	localStorage.setItem("theme", theme);
	ready(function() { $('#current-theme span').innerText = theme; });
	let lightOrDarkTheme = theme;
	if (lightOrDarkTheme == "system") {
		lightOrDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";	
	}
	applyTheme(lightOrDarkTheme);
}

// applyTheme simply adds or removes the 'dark' class to the HTML.
function applyTheme(lightOrDark) {
	if (lightOrDark == "dark") {
		$('html').classList.add('dark');
	} else {
		$('html').classList.remove('dark');
	}
}

// nextTheme switches to the next theme in the rotation.
function nextTheme() {
	let theme = getTheme();
	if (theme == "system") {
		theme = "light";
	} else if (theme == "light") {
		theme = "dark";
	} else if (theme == "dark") {
		theme = "system";
	}
	setTheme(theme);
}


if ($('html').classList.contains('light') || $('html').classList.contains('dark')) {
	ready(function() { $('#current-theme').parentNode.remove(); });
} else {
	// immediately set the configured theme to avoid flash
	setTheme(getTheme());
}
