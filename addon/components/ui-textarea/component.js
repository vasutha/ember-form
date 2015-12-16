import Ember from 'ember';
import layout from './template';
import FocusField from '../../mixins/focus-field';

export default Ember.TextArea.extend(FocusField, {
  layout: layout,
  init: function() {
    if(this.get('parentView.forAttribute')) {
      this.set('elementId', this.get('parentView.forAttribute'));
    }
    this._super(arguments);
  },
  classNames: ['form-control']
});
