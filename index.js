
/**
 * Expose 'Stack'
 */

module.exports = Stack;


/**
 * Stack constructor.
 * @api public
 */

function Stack(el) {
  this.el = el;
  this.fragment = document.createDocumentFragment();
  this.current = null;
  this.nodes = {};
}

function append(parent, child) {
  if(child) return !!parent.appendChild(child);
  return false;
}

Stack.prototype.get = function(name) {
  return this.nodes[name];
};

Stack.prototype.add = function(name, node) {
  this.nodes[name] = node;
  append(this.fragment, node);
  return this;
};

Stack.prototype.show = function(name) {
  if(!append(this.el, this.get(name))) return;
  append(this.fragment, this.get(this.current));
  this.current = name;
  return this;
};

