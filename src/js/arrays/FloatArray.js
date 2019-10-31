import { globalFlexioImport } from '@flexio-oss/global-import-registry'
import { assertType, isNumber, isNull } from '@flexio-oss/assert'
import {FlexArray} from '../FlexArray'


/**
 * @extends {FlexArray<?number>}
 */
class FloatArray extends FlexArray {

  _validate(element) {
    if (!isNull(element)) {
      assertType(isNumber(element), 'element should be a number')
    }
  }

}
export { FloatArray }
