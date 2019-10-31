import {globalFlexioImport} from '@flexio-oss/global-import-registry'
import {assertType, isInteger, isNull} from '@flexio-oss/assert'
import {FlexArray} from '../FlexArray'

/**
 * @extends {FlexArray<?number>}
 */
class IntegerArray extends FlexArray {

  _validate(element) {
    if (!isNull(element)) {
      assertType(isInteger(element), 'element should be a number')
    }
  }

}

export {IntegerArray}
