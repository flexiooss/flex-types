import { globalFlexioImport } from '@flexio-oss/global-import-registry'
import { assertType, isObject, isNull } from '@flexio-oss/assert'
import { FlexArray } from '@flexio-oss/flex-types'
/**
 * @extends {FlexArray<?object>}
 */
class ObjectArray extends FlexArray {
  constructor(...args) {
    super(...args)
  }

  /**
   * @param {number} index
  * @returns {object}
   */
  get(index) {
    return this[index]
  }

  _validate(element) {
    if (!isNull( element)) {
      assertType(isObject(element), 'element should be an object')
    }
  }

}
export { ObjectArray }
