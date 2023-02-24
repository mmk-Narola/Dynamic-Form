export interface FormField {
  data: FormFieldJSON[];
}

export interface FormFieldJSON {
  name: string;
  label: string;
  value: string;
  type: string;
  fieldType: string;
  validators: ValidatorJSON;
  options: OptionJSON[];
  nullValidator?: boolean;
}

export interface ValidatorJSON {
  required?: boolean;
  email?: boolean;
  minLength?: boolean;
  maxLength?: boolean;
  pattern?: string;
  requiredTrue?: boolean;
}

interface OptionJSON {
  name?: string;
  sortname?: string;
  _id?: string;
  key?: string;
  value?: string;
}
