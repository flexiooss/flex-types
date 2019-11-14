import {FlexMap} from './FlexMap'

import {deepFreezeSeal} from '@flexio-oss/js-generator-helpers'
import {assertType, isObject, isNull, isString, isBoolean, isNumber, isStrictArray, isArray} from '@flexio-oss/assert'
import {FlexArray} from './FlexArray'

const __map = Symbol('__map')
/**
 *
 * @param {*} a
 * @return {boolean}
 */
const isJsonSpec = a => isNull(a) || isString(a) || isBoolean(a) || isNumber(a) || isStrictArray(a) || a instanceof ObjectValue

export class ObjectValue {
  /**
   *
   * @param {ObjectValueFlexMap} data
   * @private
   */
  constructor(data) {

    assertType(
      data instanceof ObjectValueFlexMap,
      this.constructor.name + ': `data` should be ObjectValueFlexMap'
    )
    /**
     *
     * @type {ObjectValueFlexMap}
     */
    this[__map] = data
    this.__freeze()

  }

  /**
   *
   * @private
   */
  __freeze() {
    deepFreezeSeal(this)
    this[__map].forEach((v) => {
      deepFreezeSeal(v)
    })
    this[__map].set = function(key) {
      throw new Error('Can\'t add property ' + key + ', map is not extensible')
    }

    this[__map].delete = function(key) {
      throw new Error('Can\'t delete property ' + key + ', map is frozen')
    }

    this[__map].clear = function() {
      throw new Error('Can\'t clear map, map is frozen')
    }
  }

  /**
   *
   * @param {string} key
   * @return {boolean}
   */
  has(key) {
    return this[__map].has(key)
  }

  /**
   *
   * @param {string} key
   * @return {(null | string | number | boolean | Array | ObjectValue)}
   * @throws {OffsetError}
   */
  rawValue(key) {
    if (!this.has(key)) {
      throw new OffsetError('key `' + key + '` not in ObjectValue')
    }
    return this[__map].get(key)
  }

  /**
   *
   * @param {string} key
   * @param {(null | string | number | boolean | Array | ObjectValue)} [defaultValue=null]
   * @return {(null | string | number | boolean | Array | ObjectValue)}
   */
  rawValueOr(key, defaultValue = null) {
    if (!this.has(key)) {
      return defaultValue
    }
    return this[__map].get(key)
  }

  /**
   *
   * @param {string} key
   * @return {?string}
   * @throws {OffsetError, TypeError}
   */
  stringValue(key) {
    const val = this.rawValue(key)
    assertType(
      isString(val) || isNull(val),
      this.constructor.name + ': `val` should be string or null'
    )
    return val
  }

  /**
   *
   * @param {string} key
   * @param {?string} [defaultValue=null]
   * @return {?string}
   * @throws {TypeError}
   */
  stringValueOr(key, defaultValue = null) {
    if (!this.has(key)) {
      assertType(
        isString(defaultValue) || isNull(defaultValue),
        this.constructor.name + ': `defaultValue` should be string or null'
      )
      return defaultValue
    }
    const val = this[__map].get(key)
    assertType(
      isString(val) || isNull(val),
      this.constructor.name + ': `val` should be string or null'
    )

    return val
  }

  /**
   *
   * @param {string} key
   * @return {?number}
   * @throws {OffsetError, TypeError}
   */
  numberValue(key) {
    const val = this.rawValue(key)
    assertType(
      isNumber(val) || isNull(val),
      this.constructor.name + ': `val` should be number or null'
    )
    return val
  }

  /**
   *
   * @param {string} key
   * @param {?number} [defaultValue=null]
   * @return {?number}
   * @throws {TypeError}
   */
  nbooleanalueOr(key, defaultValue = null) {
    if (!this.has(key)) {
      assertType(
        isNumber(defaultValue) || isNull(defaultValue),
        this.constructor.name + ': `defaultValue` should be number or null'
      )
      return defaultValue
    }
    const val = this[__map].get(key)
    assertType(
      isNumber(val) || isNull(val),
      this.constructor.name + ': `val` should be number or null'
    )

    return val
  }

  /**
   *
   * @param {string} key
   * @return {?boolean}
   * @throws {OffsetError, TypeError}
   */
  booleanValue(key) {
    const val = this.rawValue(key)
    assertType(
      isBoolean(val) || isNull(val),
      this.constructor.name + ': `val` should be boolean or null'
    )
    return val
  }

  /**
   *
   * @param {string} key
   * @param {?array} [defaultValue=null]
   * @return {?array}
   * @throws {TypeError}
   */
  arrayValueOr(key, defaultValue = null) {
    if (!this.has(key)) {
      assertType(
        isBoolean(defaultValue) || isNull(defaultValue),
        this.constructor.name + ': `defaultValue` should be array or null'
      )
      return defaultValue
    }
    const val = this[__map].get(key)
    assertType(
      isBoolean(val) || isNull(val),
      this.constructor.name + ': `val` should be array or null'
    )

    return val
  }

  /**
   *
   * @param {string} key
   * @return {?Array}
   * @throws {OffsetError, TypeError}
   */
  arrayValue(key) {
    const val = this.rawValue(key)
    assertType(
      isStrictArray(val) || isNull(val),
      this.constructor.name + ': `val` should be array(strict) or null'
    )
    return val
  }

  /**
   *
   * @param {string} key
   * @param {?Array} [defaultValue=null]
   * @return {?Array}
   * @throws {TypeError}
   */
  arrayValueOr(key, defaultValue = null) {
    if (!this.has(key)) {
      assertType(
        isStrictArray(defaultValue) || isNull(defaultValue),
        this.constructor.name + ': `defaultValue` should be array(strict) or null'
      )
      return defaultValue
    }
    const val = this[__map].get(key)
    assertType(
      isStrictArray(val) || isNull(val),
      this.constructor.name + ': `val` should be array(strict) or null'
    )

    return val
  }

  /**
   *
   * @param {string} key
   * @return {?ObjectValue}
   * @throws {OffsetError, TypeError}
   */
  objectValueValue(key) {
    const val = this.rawValue(key)
    assertType(
      val instanceof ObjectValue || isNull(val),
      this.constructor.name + ': `val` should be objectValue or null'
    )
    return val
  }

  /**
   *
   * @param {string} key
   * @param {?ObjectValue} [defaultValue=null]
   * @return {?ObjectValue}
   * @throws {TypeError}
   */
  objectValueValueOr(key, defaultValue = null) {
    if (!this.has(key)) {
      assertType(
        val instanceof ObjectValue || isNull(defaultValue),
        this.constructor.name + ': `defaultValue` should be objectValue or null'
      )
      return defaultValue
    }
    const val = this[__map].get(key)
    assertType(
      val instanceof ObjectValue || isNull(val),
      this.constructor.name + ': `val` should be objectValue or null'
    )

    return val
  }

  /**
   *
   * @return {number}
   */
  size() {
    return this[__map].size
  }

  /**
   *
   * @return {(null | string | number | boolean | Array | ObjectValue)[]}
   */
  properties() {
    return this[__map].values()
  }

  /**
   * @return {StringArray}
   */
  propertyNames() {
    return this[__map].keys()
  }

  /**
   *
   * @param {ObjectValue} to
   * @return {boolean}
   */
  equals(to) {
    assertType(to instanceof ObjectValue, '`to` should be an instance of ObjectValue')

    if (this == to) {
      return true
    }

    if (this.size() !== to.size()) {
      return false
    }

    for (const key of this.propertyNames()) {
      if (this.rawValue(key) instanceof ObjectValue) {
        if (!to.rawValue(key) instanceof ObjectValue) {
          return false
        }
        return this.rawValue(key).equals(to.rawValue(key))
      } else if (this.rawValue(key) !== to.rawValue(key)) {
        return false
      }
    }
    return true
  }

  /**
   *
   * @return {Object}
   */
  toJSON() {
    return this.toObject()
  }

  /**
   *
   * @return {Object}
   */
  toObject() {
    const ret = {}
    this[__map].forEach((v, k) => {
      ret[k] = (v instanceof ObjectValue) ? v.toObject() : v
    })
    return ret
  }

  /**
   *
   * @return {{key:string, value:(null | string | number | boolean | Array | ObjectValue)}[]}
   */
  toArray() {
    const ret = []
    this[__map].forEach((v, k) => {
      ret.push({
        key: k,
        value: (v instanceof ObjectValue) ? v.toArray() : v
      })
    })
    return ret
  }

  /**
   *
   * @param {string} key
   * @param {?string} value
   * @return {ObjectValue}
   */
  withStringValue(key, value) {
    const builder = ObjectValueBuilder.from(this)
    builder.stringValue(key, value)
    return builder.build()
  }

  /**
   *
   * @param {string} key
   * @param {?number} value
   * @return {ObjectValue}
   */
  withNumberValue(key, value) {
    const builder = ObjectValueBuilder.from(this)
    builder.numberValue(key, value)
    return builder.build()
  }

  /**
   *
   * @param {string} key
   * @param {?boolean} value
   * @return {ObjectValue}
   */
  withBooleanValue(key, value) {
    const builder = ObjectValueBuilder.from(this)
    builder.booleanValue(key, value)
    return builder.build()
  }

  /**
   *
   * @param {string} key
   * @param {?Array} value
   * @return {ObjectValue}
   */
  withArrayValue(key, value) {
    const builder = ObjectValueBuilder.from(this)
    builder.arrayValue(key, value)
    return builder.build()
  }

  /**
   *
   * @param {string} key
   * @param {?ObjectValue} value
   * @return {ObjectValue}
   */
  witObjectValueValue(key, value) {
    const builder = ObjectValueBuilder.from(this)
    builder.objectValueValue(key, value)
    return builder.build()
  }

  /**
   * @returns {ObjectValueBuilder}
   */
  static builder() {
    return new ObjectValueBuilder()
  }

  /**
   * @param {ObjectValue} instance
   * @returns {ObjectValueBuilder}
   */
  static from(instance) {
    return ObjectValueBuilder.from(instance)
  }

  /**
   * @param {Object} jsonObject
   * @returns {ObjectValueBuilder}
   */
  static fromObject(jsonObject) {
    return ObjectValueBuilder.fromObject(jsonObject)
  }

  /**
   * @param {string} json
   * @returns {ObjectValueBuilder}
   */
  static fromJson(json) {
    return ObjectValueBuilder.fromJson(json)
  }
}

export class ObjectValueBuilder {
  constructor() {
    /**
     *
     * @type {ObjectValueFlexMap}
     * @private
     */
    this[__map] = new ObjectValueFlexMap()
  }

  /**
   *
   * @param {ObjectValueFlexMap} map
   * @return {ObjectValueBuilder}
   */
  data(map) {
    assertType(
      map instanceof ObjectValueFlexMap,
      this.constructor.name + ': `map` should be ObjectValueFlexMap'
    )
    this[__map] = map
    return this
  }

  /**
   *
   * @param {string} key
   * @param {string} value
   * @return {ObjectValueBuilder}
   */
  stringValue(key, value) {
    assertType(
      isString(key) && (isNull(value) || isString(value)),
      this.constructor.name + ': `key` should be string, `value` should be null or string'
    )
    this[__map].set(key, value)
    return this
  }

  /**
   *
   * @param {string} key
   * @param {number} value
   * @return {ObjectValueBuilder}
   */
  numberValue(key, value) {
    assertType(
      isString(key) && (isNull(value) || isNumber(value)),
      this.constructor.name + ': `key` should be string, `value` should be null or number'
    )
    this[__map].set(key, value)
    return this
  }

  /**
   *
   * @param {string} key
   * @param {boolean} value
   * @return {ObjectValueBuilder}
   */
  booleanValue(key, value) {
    assertType(
      isString(key) && (isNull(value) || isBoolean(value)),
      this.constructor.name + ': `key` should be string, `value` should be null or boolean'
    )
    this[__map].set(key, value)
    return this
  }

  /**
   *
   * @param {string} key
   * @param {Array} value
   * @return {ObjectValueBuilder}
   */
  arrayValue(key, value) {
    assertType(
      isString(key) && (isNull(value) || isStrictArray(value)),
      this.constructor.name + ': `key` should be string, `value` should be null or Array(strict)'
    )
    this[__map].set(key, value)
    return this
  }

  /**
   *
   * @param {string} key
   * @param {ObjectValue} value
   * @return {ObjectValueBuilder}
   */
  objectValueValue(key, value) {
    assertType(
      isString(key) && (isNull(value) || value instanceof ObjectValue),
      this.constructor.name + ': `key` should be string, `value` should be null or ObjectValue'
    )
    this[__map].set(key, value)
    return this
  }

  /**
   *
   * @param {string} key
   * @param {(null | string | number | boolean | Array | ObjectValue)} value
   * @return {ObjectValueBuilder}
   */
  value(key, value) {
    assertType(
      isString(key),
      this.constructor.name + ': `key` should be string'
    )
    this[__map].set(key, value)
    return this
  }

  /**
   * @returns {ObjectValue}
   */
  build() {
    return new ObjectValue(this[__map])
  }

  /**
   * @param {Object} jsonObject
   * @returns {ObjectValueBuilder}
   */
  static fromObject(jsonObject) {
    assertType(isObject(jsonObject), 'input should be an object')
    let builder = new ObjectValueBuilder()
    for (const key in jsonObject) {
      if (jsonObject.hasOwnProperty(key)) {
        if (isObject(jsonObject[key])) {
          builder.objectValueValue(
            key,
            ObjectValueBuilder.fromObject(jsonObject[key]).build()
          )
        } else {
          builder.value(key, jsonObject[key])
        }
      }
    }
    return builder
  }

  /**
   * @param {string} json
   * @returns {ObjectValueBuilder}
   */
  static fromJson(json) {
    assertType(isString(json), 'input should be a string')
    let jsonObject = JSON.parse(json)
    return this.fromObject(jsonObject)
  }

  /**
   * @param {ObjectValue} instance
   * @returns {ObjectValueBuilder}
   */
  static from(instance) {
    assertType(instance instanceof ObjectValue, 'input should be an instance of ObjectValue')

    let builder = new ObjectValueBuilder()
    for (const item of instance.toArray()) {
      builder.value(item.key, item.value)
    }
    return builder
  }
}

/**
 * @extends {FlexMap<(null | string | number | boolean | Array | ObjectValue)>}
 */
class ObjectValueFlexMap extends FlexMap {
  /**
   *
   * @param {*} v
   * @protected
   * @throws Error
   */
  _validate(v) {
    if (isArray(v)) {
      new ObjectValueArray(...v)
    } else {

      assertType(
        isJsonSpec(v),
        this.constructor.name + ': `v` should be null or string or number or boolean or Array or ObjectValue'
      )
    }
  }
}

/**
 * @extends {FlexArray<(null | string | number | boolean | Array | ObjectValue)>}
 */
class ObjectValueArray extends FlexArray {
  /**
   *
   * @param {*} v
   * @protected
   * @throws Error
   */
  _validate(v) {
    if (isArray(v)) {
      new ObjectValueArray(...v)
    } else {
      assertType(
        isJsonSpec(v),
        this.constructor.name + ': `v` should be null or string or number or boolean or Array or ObjectValue'
      )
    }
  }
}
