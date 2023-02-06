import { FormElementControls } from './formsEle-control';

export class textArea extends FormElementControls<string> {
  override controlType = 'textarea';
}
