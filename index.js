'use strict';

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
