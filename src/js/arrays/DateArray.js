import { globalFlexioImport } from '@flexio-oss/global-import-registry'
import { assertType, isNull } from '@flexio-oss/assert'
import {FlexArray} from '../FlexArray'

/**
 * @extends {FlexArray<?FlexDate>}
 */
class DateArray extends FlexArray {

  _validate(element) {
    if (!isNull(element)) {
      assertType(element instanceof  globalFlexioImport.io.flexio.flex_types.FlexDate, 'element should be a FlexDate')
    }
  }

}
export { DateArray }
