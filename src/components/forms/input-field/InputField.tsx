import Input, { InputProps } from '../input/Input';
import FormControl, { FormControlProps } from '../form-control/FormControl';

export type InputFieldProps = Omit<FormControlProps, 'children'> & InputProps;

function InputField({ id, label, ...rest }: InputFieldProps) {
  return (
    <FormControl id={id} label={label}>
      <Input id={id} {...rest} />
    </FormControl>
  );
}

export default InputField;
