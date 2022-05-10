import { FormField } from '../../../../core/interfaces/form-field';

export const startGameForm: FormField[] = [
  {
    name: 'name',
    required: true,
    labelIcon: 'text-outline',
    type: 'text',
    placeholder: 'Game name',
  },
  {
    name: 'description',
    type: 'text',
    labelIcon: 'globe-2-outline',
    placeholder: 'Game description',
  },
  {
    name: 'roomSize',
    type: 'number',
    labelIcon: 'person-add-outline',
    min: 1,
    max: 4,
    placeholder: 'User size',
    required: true
  },
  {
    name: 'answerTime',
    type: 'number',
    labelIcon: 'clock-outline',
    min: 5,
    max: 30,
    placeholder: 'Answer time',
    required: true,
  },
]
