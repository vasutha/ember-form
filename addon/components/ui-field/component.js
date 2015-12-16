import Ember from 'ember';
import layout from './template';
import FormComponent from '../ui-form/component';

const {
  computed
} = Ember;

// EMBER::TODO:
// To Move FieldType specific logic to the related component.js
// Eg: Instead of handling set label logic && computed properties
// here better move those thinks to label/component.js will make sense

export default Ember.Component.extend({
  layout: layout,
  classNames: 'ui-field',
  isRequired: computed({
    get() {
      var hasObject = this.get('formValidations')[this.get('name')];
      return (hasObject && hasObject.hasOwnProperty('presence')) ? true : false;
    }
  }),

  setLabel: function () {
    if (!(this.hasOwnProperty('label'))) {
      return this.set('label', this.get('for'));
    } else if (this.hasOwnProperty('label') && !(this.get('label'))) {
      // If Label set to false then label won't render label
      return this.set('label', null);
    }
  }.on('init'),

  setupBindings: function () {
    var fieldProp = this.get('for');
    this.bindValue = Ember.Binding.from(`formModel.${fieldProp}`).to('value').connect(this);
  }.on('init'),

  setupField: function() {
    var type = this.get('type');
    var templateValue = ['text', 'number', 'password'].contains(type) ?
                                      'isBasicInput' : ('is_'+ type).camelize();
    Ember.defineProperty(this, templateValue, Ember.computed({
      get: function() {
        return true;
      }
    }));
  }.on('init'),

  skipLabel: computed.oneWay('isCheckbox', 'isRadio'),

  removeBindings: function () {
    this.bindValue.disconnect(this);
  }.on('willDestroyElement'),

  id: computed('for', {
    get() {
      if(this.get('label')) {
        return `${this.get('for')}_${this.get('elementId')}`;
      }
      return this.get('for');
    },
    set(key, value) {
      return value;
    }
  }),
  name: computed.alias('for'),
  labelClass: 'control-label',
  inputClass: 'form-control',
  placeholder: null,
  form: computed({
    get: function () {
      return this.nearestOfType(FormComponent);
    }
  }),
  formModel: computed.alias('form.for'),
  formValidations: computed.alias('formModel.validations'),
  formValidationErrors: computed.alias('formModel.errors'),
  hasValidation: computed('name', 'form', 'form.startValidate', 'errors', {
    get: function () {
      if (Object.keys(this.get('formValidations')).length !== 0) {
        return this.get('name') in this.get('formValidations') && this.get('form.startValidate') && this.get('errors').length > 0;
      }
    }
  }),

  classNameBindings: ['hasValidation:has-error', 'isRequired:form-field-required'],

  errors: computed('value', {
    get: function () {
      var name = this.get('for');
      return this.get(`formValidationErrors.${name}`);
    }
  }),

  sanitizedName: computed('name', {
    get: function () {
      return this.sanitizeAttr(this.get('name'), 'name');
    }
  }),
  sanitizedID: computed('id', {
    get: function () {
      return this.sanitizeAttr(this.get('id'));
    }
  }),
  sanitizedLabel: computed('label', {
    get: function () {
      return this.sanitizeAttr(this.get('label'), 'label');
    }
  }),
  sanitizeAttr: function (value, attrName) {
    if (attrName === 'name') {
      return value
        .split('.')
        .map(function (prop, idx) {
          if (idx === 0) {
            return prop.underscore();
          }
          return '['+ prop.underscore() +']';
        }).join('');
    } else if (attrName === 'label') {
        return (this.get('label') === this.get('for')) ? value.underscore() : value;
    } else {
        return value.underscore();
    }
  }
});
