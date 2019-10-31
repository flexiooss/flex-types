/* global runTest */
import {TestCase} from 'code-altimeter-js'
import {FlexArray} from '../../src/js/FlexArray'
import {assertType, isBoolean, isNull, isNumber} from '@flexio-oss/assert'

const assert = require('assert')

class TestArray extends FlexArray {
  _validate(e) {
    if (!isNull(e)) {
      assertType(isBoolean(e), '`e` should be a bool')
    }
  }
}

class TestArrayNumber extends FlexArray {
  _validate(e) {
    if (!isNull(e)) {
      assertType(isNumber(e), '`e` should be a number')
    }
  }
}

export class TestFlexArray extends TestCase {
  testEmpty() {
    let a = new TestArray()
    assert.throws(() => {
      a.get(8)
    })

  }

  testGet() {
    let a = new TestArrayNumber(10, 20, 30)

    assert(a.first() === 10)
    assert(a.get(1) === 20)
    assert(a.last() === 30)
  }

  testFilter() {
    let a = new TestArray(true, false, true)
    let res = a.filter((v) => !!v)
    assert.deepStrictEqual(res, new TestArray(true, true))
  }
}

runTest(TestFlexArray)
