import type { Portfolio } from '../types/portfolio'
import data from './portfolio.json' with { type: 'json' }

export const portfolio = data as Portfolio
