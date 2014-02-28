
# domstack

  Stack your dom nodes into a document fragment.

## Installation

with [component](http://component.io):

    $ component install bredele/domstack

with [nodejs](http://nodejs.org):

    $ npm install domstack

## API

### Stack(parent)

  Stack constructor. Create a stack from a `parent` dom element.

```js
var Stack = require('domstack');
var stack = new Stack(document.body);
```

### add(name, dom [, bool])

  Identify a dom element by name and push it into the stack.
  The optional boolean allows to set the current child in the stack (visible one).

```js
stack.add('olivier', document.querySelector('.olivier'));
```

### show(name)

  Display a stacked element into the `parent` dom element.

```js
stack.show('olivier');
```


## License

  MIT
