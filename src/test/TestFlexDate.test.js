/* global runTest */
import {FlexDate, FlexTime, FlexDateTime, FlexZonedDateTime} from '../js/FlexDate'
import {TestCase} from 'code-altimeter-js'

const assert = require('assert')

export class TestFlexDate extends TestCase {
  testDateCreation() {
    let date = new FlexDate('1992-10-17')
    assert.strictEqual(date.toJSON(), '1992-10-17', 'test date creation')
  }

  testTimeCreation() {
    let time = new FlexTime('04:17:32.527')
    assert.strictEqual(time.toJSON(), '04:17:32.527', 'test time creation')

    time = new FlexTime('04:17:32.527Z')
    assert.strictEqual(time.toJSON(), '04:17:32.527', 'test time creation')

    time = new FlexTime('04:17:32')
    assert.strictEqual(time.toJSON(), '04:17:32', 'test time creation')

    time = new FlexTime('04:17:32Z')
    assert.strictEqual(time.toJSON(), '04:17:32', 'test time creation')
  }

  testDateTimeCreation() {
    let time = new FlexDateTime('1992-12-17T04:17:32')
    assert.strictEqual(time.toJSON(), '1992-12-17T04:17:32', 'test datetime creation')

    time = new FlexDateTime('1992-10-17T04:17:32Z')
    assert.strictEqual(time.toJSON(), '1992-10-17T04:17:32', 'test datetime creation')

    time = new FlexDateTime('1992-10-17T04:17:32.174')
    assert.strictEqual(time.toJSON(), '1992-10-17T04:17:32.174', 'test datetime creation')

    time = new FlexDateTime('1992-10-17T04:17:32.174Z')
    assert.strictEqual(time.toJSON(), '1992-10-17T04:17:32.174', 'test datetime creation')
  }

  testTzDateTimeCreation(){
    let time = new FlexZonedDateTime('1992-10-17T04:17:32Z+03:00')
    assert.strictEqual(time.toJSON(), '1992-10-17T04:17:32+03:00', 'test tz datetime creation')

    time = new FlexZonedDateTime('1992-10-17T04:17:32+03:00')
    assert.strictEqual(time.toJSON(), '1992-10-17T04:17:32+03:00', 'test tz datetime creation')

    time = new FlexZonedDateTime('1992-10-17T04:17:32')
    assert.strictEqual(time.toJSON(), '1992-10-17T04:17:32+00:00', 'test tz datetime creation')

    time = new FlexZonedDateTime('1992-10-17T04:17:32Z')
    assert.strictEqual(time.toJSON(), '1992-10-17T04:17:32+00:00', 'test tz datetime creation')
  }
}

runTest(TestFlexDate)
