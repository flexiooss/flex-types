import { globalFlexioImport } from '@flexio-oss/global-import-registry'
import { assertType, isObject, isNull } from '@flexio-oss/assert'
import {FlexArray} from '../FlexArray'

/**
 * @extends {FlexArray<?object>}
 */
class ObjectArray extends FlexArray {

  _validate(element) {
    if (!isNull( element)) {
      assertType(isObject(element), 'element should be an object')
    }
  }

  /**
   *
   * @return {Array.<?object>}
   */
  toArray() {
    return this.mapToArray(v => JSON.parse(JSON.stringify(v)))
  }


}
export { ObjectArray }
