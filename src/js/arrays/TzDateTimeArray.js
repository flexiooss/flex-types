import {globalFlexioImport} from '@flexio-oss/global-import-registry'
import {assertType, isNull} from '@flexio-oss/assert'
import {FlexArray} from '../FlexArray'

/**
 * @extends {FlexArray<?FlexZonedDateTime>}
 */
class TzDateTimeArray extends FlexArray {

  _validate(element) {
    if (!isNull(element)) {
      assertType(element instanceof globalFlexioImport.io.flexio.flex_types.FlexZonedDateTime, 'element should be a FlexZonedDateTime')
    }
  }

}

export {TzDateTimeArray}
