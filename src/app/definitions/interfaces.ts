import { TStatus } from '@definitions/types'

export interface ICard {
  id: number
  title: string
  state: string
  status: TStatus
  description: string
  tags: string[]
}

export interface IPanel {
  status: TStatus
  title: string
  elements: ICard[]
}
