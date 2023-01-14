import styles from './mailform.module.css';

import { useFormik } from 'formik';
import { LanguageContext, LanguageContextI } from '../../../context/language';
import { useContext, useState } from 'react';
import React from 'react';
import axios from 'axios';
import cN from 'classnames';
import {
  MailModalContext,
  MailModalContextI,
} from '../../../context/mailmodal';

interface KeyStringI {
  [key: string]: string;
}

interface ValuesI {
  firstname: string;
  lastname: string;
  email: string;
  subject: string;
  message: string;
  [key: string]: string;
}

interface ErrorsI<T> {
  firstname: T;
  lastname: T;
  email: T;
  subject: T;
  message: T;
  [key: string]: T;
}

interface LanguageChoiceI {
  fr: string | undefined;
  en: string | undefined;
  [key: string]: string | undefined;
}

export default function MailForm() {
  const { language } = useContext(LanguageContext) as LanguageContextI;
  const { setIsOpen } = useContext(MailModalContext) as MailModalContextI;
  const [sendLimit, setSendLimit] = useState(1);

  const validate = (values: ValuesI) => {
    const errors: ErrorsI<LanguageChoiceI> = {
      firstname: { fr: undefined, en: undefined },
      lastname: { fr: undefined, en: undefined },
      email: { fr: undefined, en: undefined },
      subject: { fr: undefined, en: undefined },
      message: { fr: undefined, en: undefined },
    };

    if (values.firstname.length > 15) {
      errors.firstname = {
        fr: '15 caractères max !',
        en: '15 characters max!',
      };
    }
    if (values.lastname.length > 25) {
      errors.lastname = {
        fr: '25 caractères max !',
        en: '25 characters max!',
      };
    }
    if (!values.email) {
      errors.email = {
        fr: "l'email est requis !",
        en: "email's required!",
      };
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = {
        fr: 'adresse email invalide',
        en: 'invalid email address',
      };
    }
    if (values.subject.length > 25) {
      errors.subject = {
        fr: '25 caractères max !',
        en: '25 characters max!',
      };
    }
    if (!values.message) {
      errors.message = {
        fr: 'écrivez moi quelque chose !',
        en: 'write me something!',
      };
    } else if (values.message.length > 200) {
      errors.message = {
        fr: '200 caractères max !',
        en: '200 characters max!',
      };
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      subject: '',
      message: '',
    } as ValuesI,
    validate,
    onSubmit: (values: ValuesI) => {
      axios
        .post('/api/email', { ...values, language: language })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  });

  const inputs = [
    {
      name: 'firstname',
      type: 'text',
      autocomplete: 'given-name',
      required: false,
      placeholder: {
        fr: 'prénom',
        en: 'firstname',
      } as KeyStringI,
    },
    {
      name: 'lastname',
      type: 'text',
      autocomplete: 'family-name',
      required: false,
      placeholder: {
        fr: 'nom',
        en: 'lastname',
      } as KeyStringI,
    },
    {
      name: 'email',
      type: 'email',
      autocomplete: 'email',
      required: true,
      placeholder: {
        fr: 'email',
        en: 'email',
      } as KeyStringI,
    },
    {
      name: 'subject',
      type: 'text',
      autocomplete: 'off',
      required: false,
      placeholder: {
        fr: 'sujet',
        en: 'subject',
      } as KeyStringI,
    },
    {
      name: 'message',
      type: 'textarea',
      autocomplete: 'off',
      required: true,
      placeholder: {
        fr: '✒️...',
        en: '✒️...',
      } as KeyStringI,
    },
  ];

  const handleClose = () => {
    setIsOpen((prevState) => false);
  };

  return (
    <form
      className={styles.mailform}
      onSubmit={formik.handleSubmit}
      id="mailform"
    >
      <div className={styles.mailform__close_ctn}>
        <button
          type="button"
          className={styles.mailform__close}
          onClick={handleClose}
        >
          {`${language === 'fr' ? 'fermer' : 'close'} ❌`}
        </button>
      </div>
      {formik.submitCount < sendLimit &&
        inputs.map((input) => (
          <React.Fragment key={input.name}>
            <label
              htmlFor={input.name}
              className={cN(
                styles.mailform__label,
                styles[`mailform__label--${input.name}`]
              )}
            >
              {input.name !== 'message' && (
                <input
                  type={input.type}
                  id={input.name}
                  name={input.name}
                  onChange={formik.handleChange}
                  value={formik.values[input.name]}
                  autoComplete={input.autocomplete}
                  required={input.required}
                  placeholder={input.placeholder[language]}
                  onBlur={formik.handleBlur}
                  className={cN(
                    styles.mailform__input,
                    styles[`mailform__input--${input.name}`]
                  )}
                />
              )}
              {input.name === 'message' && (
                <>
                  <textarea
                    name={input.name}
                    id={input.name}
                    rows={4}
                    onChange={formik.handleChange}
                    value={formik.values[input.name]}
                    autoComplete={input.autocomplete}
                    required={input.required}
                    placeholder={input.placeholder[language]}
                    onBlur={formik.handleBlur}
                    className={cN(
                      styles.mailform__input,
                      styles[`mailform__input--${input.name}`]
                    )}
                    maxLength={200}
                    spellCheck
                  ></textarea>
                  <span className={styles.mailform__limit}>
                    {formik.values.message.length} / 200
                  </span>
                </>
              )}
              {formik.touched[input.name] && formik.errors[input.name] && (
                <p className={styles.mailform__error}>
                  {(() => {
                    const errObj = formik.errors[
                      input.name
                    ] as unknown as LanguageChoiceI;
                    if (errObj?.[language]) {
                      return `⛔ ${errObj[language]}`;
                    }
                    return;
                  })()}
                </p>
              )}
            </label>
          </React.Fragment>
        ))}
      {formik.submitCount < sendLimit && (
        <button
          type="submit"
          className={styles.mailform__button}
          disabled={formik.submitCount >= sendLimit}
          // make :active works on touch devices.
          onTouchStart={() => {}}
        >
          {language === 'fr' ? 'envoyer ' : 'send '}
          <i
            className={cN(
              styles.mailform__button__icon,
              `${'fa-regular fa-paper-plane'}`
            )}
          ></i>
        </button>
      )}
      {formik.submitCount >= sendLimit && (
        <p className={styles.mailform__confirmation}>
          {language === 'fr' ? (
            <>
              Merci pour votre message !<br />
              Vous devriez recevoir une confirmation d&apos;ici peu.
            </>
          ) : (
            <>
              Thanks for your message!
              <br />
              You should receive a confirmation mail soon.
            </>
          )}
        </p>
      )}
    </form>
  );
}
