
/**
 * Expose 'Stack'
 */

module.exports = Stack;


/**
 * Stack constructor.
 *
 * A stack is document fragment attached
 * to a root node (el).
 *
 * Examples:
 *
 *   var stack = new Stack(el);
 *
 * @param {Element} el
 * @api public
 */

function Stack(el) {
  this.el = el;
  this.fragment = document.createDocumentFragment();
  this.current = null;
  this.nodes = {};
}


/**
 * Append child.
 * 
 * @param  {Element} parent
 * @param  {Element} child
 * @return {Boolean} true if appenned
 * @api private
 */

function append(parent, child) {
  if(child) return !!parent.appendChild(child);
  return false;
}


/**
 * Get stacked node.
 *
 * @param  {String} name
 * @return {Element}
 * @api public
 */

Stack.prototype.get = function(name) {
  return this.nodes[name];
};


/**
 * Add node element into the 
 * stack fragment.
 *
 * Examples
 *
 *   stack.add('beep', el);
 *   
 * @param {String} name
 * @param {Element} node
 * @param {Boolean} bool
 * @api public
 */

Stack.prototype.add = function(name, node, bool) {
  this.nodes[name] = node;
  if(!visible) this.hide(node);
  else this.current = node;
  return this;
};


/**
 * Show stacked node into the stack root.
 *
 * To be shown a node has to be first added in
 * the stack.
 *
 * Examples
 *
 *   stack.show('beep');
 *   
 * @param  {String} name
 * @return {this}
 * @api public
 */

Stack.prototype.show = function(name, async) {
  this.hide(this.current);
  this.append(name);
  return this;
};


/**
 * Hide element into stack fragment.
 * 
 * @return {Element} el
 * @return {this} 
 * @api private
 */

Stack.prototype.hide = function(el) {
  if(el) this.fragment.appendChild(el);
  return this;
};

