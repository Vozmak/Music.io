export interface FormField {
  name: string;
  type: string;
  defaultValue?: string | number;
  labelIcon?: string;
  placeholder?: string;
  required?: boolean;
  max?: number;
  min?: number;
  maxLength?: number;
  minLength?: number;
}
