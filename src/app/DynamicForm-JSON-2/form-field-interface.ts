export interface FieldJSON {
  data: FieldJSON[];
}

export interface FieldJSON {
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
  name?: string;
  sortname?: string;
  _id?: string;
  key?: string;
  value?: string;
}

export interface Validator {
  name: string;
  validator: any;
  message: string;
}
