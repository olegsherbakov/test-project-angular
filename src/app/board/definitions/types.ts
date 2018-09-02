export const Statuses: string[] = ['open', 'pending', 'dev', 'test', 'qa', 'done'];

export interface ICard {
  id: number
  title: string
  state: string
  status: 'open' | 'pending' | 'dev' | 'test' | 'qa' | 'done'
  description: string
  tags: string[]
}

export interface IPanel {
  status: 'open' | 'pending' | 'dev' | 'test' | 'qa' | 'done'
  title: string
  elements: ICard[]
}


