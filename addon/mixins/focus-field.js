import Ember from 'ember';

const {
  isEqual,
  run
} = Ember;

export default Ember.Mixin.create({
  becomeFocused: function () {
    var _self = this;
    /*
     * Ember.run.later to ensure the field gets focussed after some time delay. Without this, the focus will work only
     * for the first time it is inserted into the DOM
     */
    run.later(function() {
      if(isEqual(_self.get('autofocus'), true)) {
        _self.$().focus();
      }
    }, 100);
  }.on('didInsertElement'),
});
