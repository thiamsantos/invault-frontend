import _ from 'lodash'

const texts = {
  en: {
    home: {
      title: () => 'Home',
      aboutLink: () => 'Go to about',
      registerLink: () => 'Create an account',
      pokemon: {
        id: id => `ID: ${id}`,
        name: name => `Name: ${name}`,
        number: number => `Number: ${number}`
      }
    },
    about: {
      title: () => 'About',
      homeLink: () => 'Go to home'
    },
    register: {
      title: () => 'Register',
      homeLink: () => 'Go to home',
      form: {
        validation: {
          email: {
            required: () => 'Required',
            invalid: () => 'Invalid email address',
            tooLong: () => 'Has more than 255 characters'
          },
          name: {
            required: () =>  'Required',
            tooLong: () => 'Has more than 255 characters'
          },
          password: {
            required: () => 'Required',
            tooShort: () => 'Has less than 10 characters',
            tooLong: () =>  'Has more than 255 characters'
          },
          totpCode: {
            required: () => 'Required',
            invalid: () => 'Invalid code'
          }
        }
      }
    }
  }
}

export function getText(lang, path, args = []) {
  if (!_.isString(lang)) {
    throw new TypeError(`Argument lang is not a String!`)
  }

  if (!_.isString(path)) {
    throw new TypeError(`Argument path is not a String!`)
  }

  if (!_.isArray(args)) {
    throw new TypeError(`Argument args is not an Array!`)
  }

  const langTexts = _.get(texts, lang)

  if (langTexts === undefined) {
    throw new Error(`Language ${lang} was not found on the translations text!`)
  }

  const textFunction = _.get(langTexts, path)

  if (textFunction === undefined) {
    throw new Error(`Path ${path} was not found for the language ${lang}!`)
  }

  if (!_.isFunction(textFunction)) {
    throw new TypeError(
      `Translation ${path} for the language ${lang} is not a function!`
    )
  }

  return Reflect.apply(textFunction, undefined, args)
}
