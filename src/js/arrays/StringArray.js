import { globalFlexioImport } from '@flexio-oss/global-import-registry'
import { assertType, isNull } from '@flexio-oss/assert'
import { FlexArray } from '@flexio-oss/flex-types'
/**
 * @extends {FlexArray<?string>}
 */
class StringArray extends FlexArray {
  constructor(...args) {
    super(...args)
  }

  /**
   * @param {number} index
  * @returns {string}
   */
  get(index) {
    return this[index]
  }

  _validate(element) {
    if (!isNull(element)) {
      assertType(isString(element), 'element should be a string')
    }
  }

}
export { StringArray }
