import Ember from 'ember';
import layout from './template';
import FocusField from '../../mixins/focus-field';

export default Ember.Select.extend(FocusField, {
  layout: layout,
  classNames: ['form-control'],
  init: function() {
    if(this.get('parentView.forAttribute')) {
      this.set('elementId', this.get('parentView.forAttribute'));
    }
    if(!this.get('optionValuePath')) {
      this.set('optionValuePath', 'content.value');
    }
    if(!this.get('optionLabelPath')) {
      this.set('optionLabelPath', 'content.label');
    }

    this._super(this);
  }
});
