'use strict';

var animate = require('ianstormtaylor/animate');
var goTo = require('component/scroll-to');
var events = require('component/event');
var viewport = require('pazguille/viewport');

/**
 * Make element span over the viewport
 *
 * @param {Element} el
 */

function whole(el) {
	el.style.width = viewport.width + 'px';
	el.style.height = viewport.height + 'px';

	viewport.on('resize', function () {
		el.style.width = viewport.width + 'px';
		el.style.height = viewport.height + 'px';
	});
}

/**
 * Set header height
 */

whole(document.querySelector('.Header'));

/**
 * Animate logo
 */

animate(document.querySelector('.Header-logo'), 'fade-down-in');

/**
 * Scroll to content
 */

events.bind(document.querySelector('.Header-scrollTo'), 'click', function () {
	goTo(0, viewport.height + 1, {
		duration: 500
	});
});
