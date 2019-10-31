import { globalFlexioImport } from '@flexio-oss/global-import-registry'
import { assertType, isBoolean, isNull } from '@flexio-oss/assert'
import {FlexArray} from '../FlexArray'

/**
 * @extends {FlexArray<?boolean>}
 */
class BooleanArray extends FlexArray {

  _validate(element) {
    if (!isNull(element)) {
      assertType(isBoolean(element), 'element should be a bool')
    }
  }

}
export { BooleanArray }
