import { colorReducer} from './color-slice'
import { uiReducer} from './ui-slice'

export const rootReducer = {
  color: colorReducer,
  ui: uiReducer
}