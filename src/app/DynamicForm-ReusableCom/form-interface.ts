export interface FieldConfig {
  data: FormField[];
}

export interface FormField {
  id?: string;
  name?: string;
  label?: string;
  palceholder?: string;
  type?: string;
  fieldType?: string;
  value?: string;
  required?: boolean;
  options?: Option[];
  validations?: Validator[];
}

interface Option {
  key?: string;
  value?: string;
  name?: string;
  sortname?: string;
  _id?: string;
}

export interface Validator {
  name: string;
  validator: any;
  message: string;
}
