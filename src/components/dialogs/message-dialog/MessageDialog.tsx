import React from 'react';

import DialogWrapper, { DialogWrapperProps } from 'lib/components/dialog-wrapper/DialogWrapper';
import InputField from 'lib/components/forms/input-field/InputField';
import TextAreaField from 'lib/components/forms/text-area-field/TextAreaField';
import Button, { ButtonSizes } from 'lib/components/buttons/button/Button';

import styles from './MessageDialog.scss';

enum FieldProps {
  MemberInputName = 'member',
  MemberInputLabel = 'Members',
  MemberInputPlaceholder = 'Please enter member name',
  MessageName = 'message',
  MessageTextareaLabel = 'Message',
  MessageTextareaPlaceholder = 'Can I please get an update today?',
}

export type MessageDialogProps = DialogWrapperProps & {
  onSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => void
};

function MessageDialog({ onSubmit, ...wrapperProps }: MessageDialogProps) {
  return (
    <DialogWrapper title="Message" width={568} {...wrapperProps}>
      <div className={styles.container}>
        <InputField
          name={FieldProps.MemberInputName}
          label={FieldProps.MemberInputLabel}
          placeholder={FieldProps.MemberInputPlaceholder}
        />
        <TextAreaField
          name={FieldProps.MessageName}
          label={FieldProps.MessageTextareaLabel}
          placeholder={FieldProps.MessageTextareaPlaceholder}
        />
      </div>
      <footer className={styles.footer}>
        <Button onClick={onSubmit} size={ButtonSizes.Compact}>Send</Button>
      </footer>
    </DialogWrapper>
  );
}

export default MessageDialog;
