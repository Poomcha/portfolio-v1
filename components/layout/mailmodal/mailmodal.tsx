import styles from './mailmodal.module.css';

import cN from 'classnames';
import { useContext } from 'react';
import { MailModalContext, MailModalContextI } from '../../context/mailmodal';
import MailForm from './mailform/mailform';

export default function MailModal() {
  const { isOpen } = useContext(MailModalContext) as MailModalContextI;
  return (
    <dialog
      className={cN(styles.mailmodal, { [styles.mailmodal_hide]: !isOpen })}
    >
      <MailForm />
    </dialog>
  );
}
