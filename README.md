# Ember-form

An Ember cli addon which allows you to create forms and validations quick & hassle free.

## Installation

* `ember install git+ssh://git@github.com:freshdesk/ember-form.git --save`

## Usage:

This example snippet will show us how to use the form & fields components inside template

```
{{#ui-form for=model onValidationFailed="errorFieldFocus"}}
	{{ui-field type="text"
    	for="firstName"
        label="First name"
        placeholder="Enter first name"
	    autofocus=true}}

	{{ui-field type="text"
    	for="lastName"
        label="Last name"
        placeholder="Enter last name"}}

	{{ui-field type="text"
    	for="email"
        label="Email"
        placeholder="Enter email"}}

	{{ui-field type="date"
    	for="dob"
        label="Date of birth"
        clearBtn=true
        enablePreviousDate=true}}
        
    {{ui-field type="select"
    	for=age
        content=listOfAges
        placeholder="Select your age"}}

	{{ui-field type="radio" 
    	for="gender" 
        label="Male" 
        class="class-xyz"}}
        
	{{ui-field type="radio"
    	for="gender" 
        label="Female" 
        class="class-xyz"}}

	{{ui-field type="checkbox" 
    	for="doNotDisturb" 
        label="Do not disturb" 
        class="class-xyz"}}
        
    {{ui-field type="textArea"
    	for="moreInfo"
        label="Addl Info"}}

    {{ui-button type="cancel" value="Cancel" class="btn-default"}}
	{{ui-button type="save" value="Save" class="btn-primary"}}
{{/ui-form}}
```

###Brief about components & attributes :###
_______

#### ui-form Component ####

*** for (@object)** - Ember Object / Ember model Record.

**onValidationFailed (@string)** - action to invoke on on Validation Failed.
________

#### ui-field Component ####

**type (@string)** - [ text / number/ email / radio / checkbox / select / textArea ].

*** for (@string)** - form (object/model)'s keys to map the field.

**value** - value of the field.

**label** - implicitly will take the for="value" but can also explicitly provide the label text.

**cssClasses** - css classes to apply.

**placeholder** - placeholder text of the field.

**The below attributes are only applicable for type=( "select" / "radio" )** for more detail kindly ref [Ember Select Class](http://emberjs.com/api/classes/Ember.Select.html#toc_the-content-property-array-of-objects)

**content(@array / @array[@objects])** - array / array of objects.

**optionValuePath(@string)** - Must be the key of the content object.

**optionLabelPath(@string)** - Must be the key of the content object.
________
#### ui-button Component ####

**type (@string)** - cancel (will fire the default cancel action without validate) / whatever (action to trigger) will get fired after validate if anything provided.
________

***** fields are mandatory.

## RFC

* {{ui-field type="AutoComplete"}} - work in progress.
* planned to introduce {{ui-field type="richTextEditor"}} wrapper for redactor / nice one.
* Default validations like field="number/email" validate (input === {number/email}).
* for now field values are in two-way binding. will be change to one-way binding in near future.

* This addon internally using [dockyard's ember-validation](https://github.com/dockyard/ember-validations) addon so kindly ref the linked repo for validation examples. Right now validations will be taken from the model provided for ui-form "for" but soon this part will be set free for developers comfort.




## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
