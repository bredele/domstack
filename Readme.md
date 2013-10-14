
# stack

  Stack your dom nodes

## Installation

  Install with [component(1)](http://component.io):

    $ component install bredele/stack

## API

### Stack(parent)

  Stack constructor. Create a stack from a `parent` dom element.

```js
var stack = new Stack(document.body);
```

### add(name, dom)

  Identify a dom element by name and push it into the stack

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
