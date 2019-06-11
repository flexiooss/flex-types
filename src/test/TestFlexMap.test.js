/* global runTest */
import {TestCase} from 'code-altimeter-js'
import {FlexMap} from '../js/FlexMap'

const assert = require('assert')

class TestMap extends FlexMap {
  _validate(e) {

  }
}

export class TestFlexMap extends TestCase {
  testEmpty() {
    let map = new TestMap()
    assert.strictEqual(map.get(8), null)
  }

  testItem() {
    let map = new TestMap()
    map.set(8, 9)
    assert.strictEqual(map.get(8), 9)
  }
}

runTest(TestFlexMap)
