import { globalFlexioImport } from '@flexio-oss/global-import-registry'
import { assertType, isNull , isString} from '@flexio-oss/assert'
import {FlexArray} from '../FlexArray'

/**
 * @extends {FlexArray<?string>}
 */
class StringArray extends FlexArray {

  _validate(element) {
    if (!isNull(element)) {
      assertType(isString(element), 'element should be a string')
    }
  }

}
export { StringArray }
