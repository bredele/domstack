/**
 * Test dependencies.
 */

var assert = require('assert');
var Stack = require('domstack');

function create(inner, el) {
	var div = document.createElement('div');
	if(inner) div.innerHTML = inner;
	if(el) el.appendChild(div);
	return div;
}

describe("stack", function() {

	var stack, parent, foo, bar, beep;
	beforeEach(function() {
		parent = create();
		foo = create('foo', parent);
		bar = create('bar', parent);
		beep = create('beep', parent);
		stack = new Stack(parent);
	});

	it('should hide nodes in stack fragment', function() {
		stack.add('foo', foo);
		stack.add('bar', bar);
		stack.add('beep', beep);

		assert(!parent.hasChildNodes());
	});

	it('should show node in stack element', function() {
		stack.add('foo', foo);
		stack.add('bar', bar);
		stack.add('beep', beep);

		stack.show('foo');
		assert(parent.hasChildNodes());
		assert.equal(parent.firstChild, foo);
	});

	it('should only show one node at a time', function() {
		stack.add('foo', foo);
		stack.add('bar', bar);
		stack.add('beep', beep);

		stack.show('foo');
		stack.show('bar');

		assert(parent.childElementCount, 1);
		assert.equal(parent.firstChild, bar);
	});

	it('should not show a node who is not stacked', function() {
		stack.add('foo', foo);
		stack.add('bar', bar);
		stack.add('beep', beep);

		stack.show('foo');
		stack.show('bob');

		assert(parent.hasChildNodes());
		assert.equal(parent.firstChild, foo);
	});

	
});

