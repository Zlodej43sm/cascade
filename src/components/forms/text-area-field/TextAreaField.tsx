import TextArea, { TextAreaProps } from '../text-area/TextArea';
import FormControl, { FormControlProps } from '../form-control/FormControl';

export type TextAreaFieldProps = Omit<FormControlProps, 'children'> & TextAreaProps;

function TextAreaField({ id, label, ...rest }: TextAreaFieldProps) {
  return (
    <FormControl id={id} label={label}>
      <TextArea id={id} {...rest} />
    </FormControl>
  );
}

export default TextAreaField;
