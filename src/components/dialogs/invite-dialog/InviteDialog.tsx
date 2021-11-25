import React from 'react';

import DialogWrapper, { DialogWrapperProps } from 'lib/components/dialog-wrapper/DialogWrapper';
import InputField from 'lib/components/forms/input-field/InputField';
import TextAreaField from 'lib/components/forms/text-area-field/TextAreaField';
import Button, { ButtonSizes } from 'lib/components/buttons/button/Button';

import styles from './InviteDialog.scss';

enum FieldProps {
  EmailName = 'email',
  EmailInputLabel = 'Email invite to',
  EmailInputPlaceholder = 'Please enter valid email',
  MessageName = 'message',
  MessageTextareaLabel = 'Message',
  MessageTextareaPlaceholder = 'Can you please take the lead on these?',
}

export type InviteDialogProps = DialogWrapperProps & {
  onSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => void
};

function InviteDialog({ onSubmit, ...wrapperProps }: InviteDialogProps) {
  return (
    <DialogWrapper title="Invite your Team" width={568} {...wrapperProps}>
      <div className={styles.container}>
        <InputField
          name={FieldProps.EmailName}
          label={FieldProps.EmailInputLabel}
          placeholder={FieldProps.EmailInputPlaceholder}
        />
        <TextAreaField
          name={FieldProps.MessageName}
          label={FieldProps.MessageTextareaLabel}
          placeholder={FieldProps.MessageTextareaPlaceholder}
        />
      </div>
      <footer className={styles.footer}>
        <Button onClick={onSubmit} size={ButtonSizes.Compact}>Invite</Button>
      </footer>
    </DialogWrapper>
  );
}

export default InviteDialog;
