import {assertType} from '@flexio-oss/assert'
import {globalFlexioImport} from '@flexio-oss/global-import-registry'

export class TypeCheck {
  /**
   *
   * @param {FlexArray} inst
   * @return {boolean}
   */
  static assertIsFlexArray(inst) {
    assertType(
      inst instanceof globalFlexioImport.io.flexio.flex_types.FlexArray,
      'TypeCheck: `inst` should be FlexArray'
    )
  }

  /**
   *
   * @param {FlexDateTime} inst
   * @return {boolean}
   */
  static assertIsFlexDateTime(inst) {
    assertType(
      inst instanceof globalFlexioImport.io.flexio.flex_types.FlexDateTime,
      'TypeCheck: `inst` should be FlexDateTime'
    )
  }

  /**
   *
   * @param {FlexDate} inst
   * @return {boolean}
   */
  static assertIsFlexDateTime(inst) {
    assertType(
      inst instanceof globalFlexioImport.io.flexio.flex_types.FlexDate,
      'TypeCheck: `inst` should be FlexDate'
    )
  }

  /**
   *
   * @param {FlexTime} inst
   * @return {boolean}
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
   * @return {boolean}
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
   * @return {boolean}
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
   * @return {boolean}
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
   * @return {boolean}
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
   * @return {boolean}
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
   * @return {boolean}
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
   * @return {boolean}
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
   * @return {boolean}
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
   * @return {boolean}
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
   * @return {boolean}
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
   * @return {boolean}
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
   * @return {boolean}
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
   * @return {boolean}
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
   * @return {boolean}
   */
  static assertIsLongArray(inst) {
    assertType(
      inst instanceof globalFlexioImport.io.flexio.flex_types.arrays.LongArray,
      'TypeCheck: `inst` should be LongArray'
    )
  }

}
