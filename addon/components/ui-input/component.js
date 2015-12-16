import Ember from 'ember';
import layout from './template';
import FocusField from '../../mixins/focus-field';

export default Ember.TextField.extend(FocusField, {
  layout: layout,
  init: function() {
    if(this.get('parentView.sanitizedID')) {
      this.set('elementId', this.get('parentView.sanitizedID'));
    }
    this._super(arguments);
  },
  classNames: ['form-control'],
  attributeBindings: ['autofocus'],
  autofocus: 'autofocus'
});
