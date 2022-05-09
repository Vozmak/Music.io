import { FormField } from '../../../../core/interfaces/form-field';

export const startGameForm: FormField[] = [
  {
    name: 'Name',
    required: true,
    labelIcon: 'text-outline',
    type: 'text',
    placeholder: 'Game name',
  },
  {
    name: 'Description',
    type: 'text',
    labelIcon: 'globe-2-outline',
    placeholder: 'Game description',
  },
]
