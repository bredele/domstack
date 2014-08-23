
# domstack

  Stack your dom nodes outside of the main DOM tree.

## Installation

with [component](http://component.io):

    $ component install bredele/domstack

with [nodejs](http://nodejs.org):

    $ npm install domstack

## API

### Stack(parent)

  Create a stack from a `root` dom element.

```js
var Stack = require('domstack');
var stack = new Stack(document.body);
```

### add(name, dom)

  Add a node element into the stack.

```js
stack.add('first', node);
```

  A stacked node is appended to a document fragment. Since a fragment is in memory and not part of the main DOM tree, computing one of its children does not cause reflow of repaint and results in better performance.

### show(name)

  Display a stacked node into the `root` dom element.

```js
stack.show('first');
```

  Only one stack child can be displayed at a time. However, you can asynchronously hide the current stack child as following:


```js
stack.show('first');
stack.show('second', function(done) {
	// hide first
	setTimeout(done, 3000);
});

```


## License

  MIT
