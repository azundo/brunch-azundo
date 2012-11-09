// Application bootstrapper.
Application = {
  initialize: function() {
    // initialization code goes here
    if (typeof Object.freeze === 'function') Object.freeze(this);
  }
}

module.exports = Application;
