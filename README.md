# validator-forms

A pack of validation rules and helpers built on top of [validator.js](https://github.com/chriso/validator.js), focused on making forms validation more flexible and easier. Validator Forms will be handy if you use form libraries like [react-final-form](https://github.com/final-form/react-final-form), [redux-form](https://github.com/erikras/redux-form), [formik](https://github.com/jaredpalmer/formik) and others.

## Installation

You might need to use Validator itself, so it is a peer dependency and should be installed separately.

    npm install --save validator-forms validator

or

    yarn add validator-forms validator

## Getting Started

All the validation rules provided by Validator Forms have signature `(msg, ...opts) => val => [null | msg]`. `msg` is a message to be displayed if validation fails, `opts` are the validation rule's properties. The returned function takes one parameter `val` which is a value to be validated, and returns `null` if the value passed the validation, `msg` otherwise.

A simple example of how it works with react-final-form:

    import React from 'react';
    import { Form, Field } from 'react-final-form';
    import { required } from 'validator-forms';

    const validatedFieldRequired = required('This field is required');

    const MyValidatedForm = ({ onSubmit }) => (
      <Form
        onSubmit={onSubmit}
        render={({ form, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="validatedField" validate={validatedFieldRequired}>
            {({ input, meta }) => (
              <div>
                <label>Required Field</label>
                <input type="text" {...input} />
                {meta.error && <span>{meta.error}</span>}
              </div>
            )}
            </Field>
            <button type="submit">Submit</button>
          </form>
        )}
      />
    );

Now if the the field is empty, `This field is required` will appear.

### Validation Rules

Validator Forms provides all the validation rules from Validator as well as a few more, covering common form validation cases. For example, if you want to use `isAlpha(str [, locale])` rule from Validator, the corresponding rule will be

    import { isAlpha } from 'validator-forms';
    // under the hood it's pretty much
    // (msg, locale) => val => validator.isAlpha(val, locale) ? null : msg;

The first parameter of a helper is always `msg` which will be returned if validation fails. The rest of the parameters are parameters of the original validation rule. You can check them in [documentation](https://github.com/chriso/validator.js#validators).
The returned value is a function taking a single argument `val` and returning `null` if `val` passes the validation, `msg` otherwise.

**You don't have to sanitize input values for validation rules, `null`s, `undefined`s and everything else will be processed correctly.**

## API

#### Validator-like rules

All the validation rules from Validator have equivalents in Validator Forms with signature `(msg, ...opts) => val => [null | msg]` (read more in [Validation Rules](#validation-rules) section).
You can check them in [documentation](https://github.com/chriso/validator.js#validators) for Validator.

#### Custom rules

| Rule                                         | Description                                                                             |
| -------------------------------------------- | --------------------------------------------------------------------------------------- |
| **required(msg)**                            | checks if applied string is not null or whitespace.                                     |
| **maxLength(msg, maxLength)**                | checks if applied string's length is less than `maxLength`                              |
| **minLength(msg, minLength)**                | checks if applied string's length is greater than `minLength`                           |
| **lengthBetween(msg, minLength, maxLength)** | checks if applied string's length falls in a range between `minLength` and `maxLength`. |

#### Helpers for Complex Validation Cases

In many cases you need to do multiple checks for a single value. For example, you want to show `This field is required` if the input is empty and `This field must be shorter than 10 symbols` if it's too long. For such situations Validator Forms provides helpers.

**applyRules(rules) => val => [null | msg]** where `rules` is a single Validator Forms rule or an array of rules. Returns a function taking a single argument `val` and applying it to all the provided validation rules. Returns `null` if all the checks are passed or `msg` of the first failed check.

**applyIfNotEmpty(rules) => val => [null | msg]** where `rules` is a singleValidator Forms rule or an array of rules. Returns a function taking a single argument `val` and applying it to all the provided validation rules **only if `val` is not empty**. The returned function returns `null` if all the checks are passed or `msg` of the first failed check.

Note that `val` is considered empty if it contains only whitespaces.

## License

MIT
