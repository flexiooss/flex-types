import {globalFlexioImport} from '@flexio-oss/global-import-registry'
import {assertType, isNull} from '@flexio-oss/assert'
import {FlexArray} from '../FlexArray'

/**
 * @extends {FlexArray<?object>}
 */
class ObjectArray extends FlexArray {

  _validate(element) {
    if (!isNull(element)) {
      assertType(element instanceof globalFlexioImport.io.flexio.flex_types.ObjectValue, 'element should be an ObjectValue')
    }
  }

}

export {ObjectArray}
