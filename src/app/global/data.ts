import { ICard } from './types';

export default [
  <ICard>{
    id: 1,
    title: 'RNS Web',
    state: 'new',
    status: 'open',
    description: '"Важность" в сообщении',
    tags: ['С.М.']
  },
  <ICard>{
    id: 2,
    title: 'Компания МЗИК',
    state: 'error',
    status: 'open',
    description: 'При согласовании договора с руководителем выходит сообщение об обишке',
    tags: ['С.М.']
  },
  <ICard>{
    id: 3,
    title: 'Компания Роснефть',
    state: 'error',
    status: 'open',
    description: 'Изменения формирования выгрузки архива заявок участников',
    tags: ['С.М.', 'Б.Е.']
  }
];
