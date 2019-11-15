import {assertType} from '@flexio-oss/assert'
import {globalFlexioImport} from '@flexio-oss/global-import-registry'

export class TypeCheck {
  /**
   *
   * @param {ObjectValue} inst
   * @throws {TypeError}
   */
  static assertIsObjectValue(inst) {
    assertType(
      inst instanceof globalFlexioImport.io.flexio.flex_types.ObjectValue,
      'TypeCheck: `inst` should be ObjectValue'
    )
  }

  /**
   *
   * @param {FlexArray} inst
   * @throws {TypeError}
   */
  static assertIsFlexArray(inst) {
    assertType(
      inst instanceof globalFlexioImport.io.flexio.flex_types.FlexArray,
      'TypeCheck: `inst` should be FlexArray'
    )
  }

  /**
   *
   * @param {FlexDate} inst
   * @throws {TypeError}
   */
  static assertIsFlexDate(inst) {
    assertType(
      inst instanceof globalFlexioImport.io.flexio.flex_types.FlexDate,
      'TypeCheck: `inst` should be FlexDate'
    )
  }

  /**
   *
   * @param {FlexDateTime} inst
   * @throws {TypeError}
   */
  static assertIsFlexDateTime(inst) {
    assertType(
      inst instanceof globalFlexioImport.io.flexio.flex_types.FlexDateTime,
      'TypeCheck: `inst` should be FlexDateTime'
    )
  }

  /**
   *
   * @param {FlexTime} inst
   * @throws {TypeError}
   */
  static assertIsFlexTime(inst) {
    assertType(
      inst instanceof globalFlexioImport.io.flexio.flex_types.FlexTime,
      'TypeCheck: `inst` should be FlexTime'
    )
  }

  /**
   *
   * @param {FlexZonedDateTime} inst
   * @throws {TypeError}
   */
  static assertIsFlexZonedDateTime(inst) {
    assertType(
      inst instanceof globalFlexioImport.io.flexio.flex_types.FlexZonedDateTime,
      'TypeCheck: `inst` should be FlexZonedDateTime'
    )
  }

  /**
   *
   * @param {FlexEnum} inst
   * @throws {TypeError}
   */
  static assertIsFlexEnum(inst) {
    assertType(
      inst instanceof globalFlexioImport.io.flexio.flex_types.FlexEnum,
      'TypeCheck: `inst` should be FlexEnum'
    )
  }

  /**
   *
   * @param {FlexMap} inst
   * @throws {TypeError}
   */
  static assertIsFlexMap(inst) {
    assertType(
      inst instanceof globalFlexioImport.io.flexio.flex_types.FlexMap,
      'TypeCheck: `inst` should be FlexMap'
    )
  }

  /**
   *
   * @param {StringArray} inst
   * @throws {TypeError}
   */
  static assertIsStringArray(inst) {
    assertType(
      inst instanceof globalFlexioImport.io.flexio.flex_types.arrays.StringArray,
      'TypeCheck: `inst` should be StringArray'
    )
  }

  /**
   *
   * @param {BooleanArray} inst
   * @throws {TypeError}
   */
  static assertIsBooleanArray(inst) {
    assertType(
      inst instanceof globalFlexioImport.io.flexio.flex_types.arrays.BooleanArray,
      'TypeCheck: `inst` should be BooleanArray'
    )
  }

  /**
   *
   * @param {DateArray} inst
   * @throws {TypeError}
   */
  static assertIsDateArray(inst) {
    assertType(
      inst instanceof globalFlexioImport.io.flexio.flex_types.arrays.DateArray,
      'TypeCheck: `inst` should be DateArray'
    )
  }

  /**
   *
   * @param {DateTimeArray} inst
   * @throws {TypeError}
   */
  static assertIsDateTimeArray(inst) {
    assertType(
      inst instanceof globalFlexioImport.io.flexio.flex_types.arrays.DateTimeArray,
      'TypeCheck: `inst` should be DateArray'
    )
  }

  /**
   *
   * @param {DoubleArray} inst
   * @throws {TypeError}
   */
  static assertIsDoubleArray(inst) {
    assertType(
      inst instanceof globalFlexioImport.io.flexio.flex_types.arrays.DoubleArray,
      'TypeCheck: `inst` should be DoubleArray'
    )
  }

  /**
   *
   * @param {TzDateTimeArray} inst
   * @throws {TypeError}
   */
  static assertIsTzDateTimeArray(inst) {
    assertType(
      inst instanceof globalFlexioImport.io.flexio.flex_types.arrays.TzDateTimeArray,
      'TypeCheck: `inst` should be TzDateTimeArray'
    )
  }

  /**
   *
   * @param {TimeArray} inst
   * @throws {TypeError}
   */
  static assertIsTimeArray(inst) {
    assertType(
      inst instanceof globalFlexioImport.io.flexio.flex_types.arrays.TimeArray,
      'TypeCheck: `inst` should be TimeArray'
    )
  }

  /**
   *
   * @param {IntegerArray} inst
   * @throws {TypeError}
   */
  static assertIsIntegerArray(inst) {
    assertType(
      inst instanceof globalFlexioImport.io.flexio.flex_types.arrays.IntegerArray,
      'TypeCheck: `inst` should be IntegerArray'
    )
  }

  /**
   *
   * @param {ObjectArray} inst
   * @throws {TypeError}
   */
  static assertIsObjectArray(inst) {
    assertType(
      inst instanceof globalFlexioImport.io.flexio.flex_types.arrays.ObjectArray,
      'TypeCheck: `inst` should be ObjectArray'
    )
  }

  /**
   *
   * @param {FloatArray} inst
   * @throws {TypeError}
   */
  static assertIsFloatArray(inst) {
    assertType(
      inst instanceof globalFlexioImport.io.flexio.flex_types.arrays.FloatArray,
      'TypeCheck: `inst` should be FloatArray'
    )
  }

  /**
   *
   * @param {LongArray} inst
   * @throws {TypeError}
   */
  static assertIsLongArray(inst) {
    assertType(
      inst instanceof globalFlexioImport.io.flexio.flex_types.arrays.LongArray,
      'TypeCheck: `inst` should be LongArray'
    )
  }

  /**
   *
   * @param {IndexError} inst
   * @return {boolean}
   */
  static isIndexError(inst) {
    return inst instanceof globalFlexioImport.io.flexio.flex_types.IndexError
  }

}
