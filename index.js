var indexOf = require('indexof');


/**
 * Expose 'Stack'
 */

module.exports = Stack;


/**
 * Initialize a new Stack
 *
 * @param {DomElement} parent the DOM element to stack
 * @param {DomElement} doc optional document's fragment parent
 * @api public
 */

function Stack(parent, doc) {
  this.parent = parent;
  //TODO:set document
  this.fragment = document.createDocumentFragment();
  this.directory = [];
  this.current = null;
}


/**
 * Add dom in stack.
 *
 * @param {String} dom name
 * @param {DomElement} dom element
 * @param {Boolean} current visible dom (optional)
 * @api public
 */

Stack.prototype.add = function(name, dom, bool) {
  if(!bool) {
    this.directory.push(name);
    this.fragment.appendChild(dom);
    return this;
  }
  
  if(this.current) {
    this.add(this.current[0], this.current[1]);
  }
  this.current = [name, dom];
  return this;
};


/**
 * Set visible element from stack.
 *
 * @param {String} [name] dom name
 * @api public
 */

Stack.prototype.show = function(name) {
  var index = indexOf(this.directory, name);
  if(index > -1) {
    var dom = this.fragment.childNodes[index];
    this.parent.appendChild(dom);
    this.directory.splice(index, 1);

    this.add(name, dom, true);
  }
  return this;
};

