import { ICard } from '../app/board/definitions/interfaces'
import { TStatus } from '../app/board/definitions/types'

export const statuses: TStatus[] = [
  'open',
  'pending',
  'dev',
  'test',
  'qa',
  'done',
]

export const boards = [
  {
    status: <TStatus>'open',
    title: 'Согласование',
    elements: new Array<ICard>(),
  },
  {
    status: <TStatus>'pending',
    title: 'В ожидании',
    elements: new Array<ICard>(),
  },
  {
    status: <TStatus>'dev',
    title: 'Разработка',
    elements: new Array<ICard>(),
  },
  {
    status: <TStatus>'test',
    title: 'Тестирование',
    elements: new Array<ICard>(),
  },
  {
    status: <TStatus>'qa',
    title: 'Корректировка',
    elements: new Array<ICard>(),
  },
  {
    status: <TStatus>'done',
    title: 'Готово',
    elements: new Array<ICard>(),
  },
]

export const cards = [
  <ICard>{
    id: 1,
    title: 'Card #1',
    state: 'new',
    status: 'open',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: ['С.М.'],
  },
  <ICard>{
    id: 2,
    title: 'Card #2',
    state: 'error',
    status: 'open',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    tags: ['С.М.'],
  },
  <ICard>{
    id: 3,
    title: 'Card #3',
    state: 'error',
    status: 'open',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    tags: ['С.М.', 'Б.Е.'],
  },
]
