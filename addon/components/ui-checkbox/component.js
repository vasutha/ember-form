import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,
  init: function() {
    this._super();

    if(this.get('parentView.sanitizedID')) {
      this.set('elementId', this.get('parentView.sanitizedID'));
    }
  }
});
