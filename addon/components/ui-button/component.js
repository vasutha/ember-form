import Ember from 'ember';
import layout from './template';
import FormComponent from '../ui-form/component';

const {
  computed,
  isEqual
} = Ember;

export default Ember.Component.extend({
  layout: layout,
  formModel: computed({
    get: function () {
      return this.nearestOfType(FormComponent);
    }
  }),
  tagName: 'button',
  classNames: ['btn'],
  classNameBindings: ['animateSaving:btn-saving'],
  attributeBindings: ['disabled', 'typeAttribute:type'],

  typeAttribute: computed('type', {
    get() {
      return isEqual(this.get('type'), 'save') ? 'submit' : 'button';
    }
  }),

  animateSaving: computed('formModel.for.isSaving', {
    get() {
      if(isEqual(this.get('type'),"save")) {
        return this.get('formModel.for.isSaving');
      }
      return;
    }
  }),
  disabled: computed.oneWay('formModel.for.isSaving'),

  click: function (event) {
    event.preventDefault();
    var buttonType = this.get('type');

    this.send(buttonType && buttonType === 'cancel' ? 'cancel' : 'formSubmit');
  },
  actions: {
    formSubmit: function () {
      this.get('formModel').send('validate', this.get('action'));
    },
    cancel: function () {
      this.get('formModel').send('cancel', this.get('action'));
    }
  }
});
