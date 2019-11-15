/* global runTest */
import {TestCase} from 'code-altimeter-js'
import '../../index'
import {globalFlexioImport} from '@flexio-oss/global-import-registry'
import {IndexError} from '../js/IndexError'

const assert = require('assert')

export class TestObjectValue extends TestCase {
  testBuildAndGet() {

    /**
     * @type {ObjectValue}
     */
    const ob = globalFlexioImport.io.flexio.flex_types.ObjectValue
      .builder()
      .stringValue('string', 'toto')
      .booleanValue('bool', true)
      .numberValue('number', 12)
      .arrayValue('array', ['tutu', 'roro', 12])
      .build()

    /**
     * @type {ObjectValue}
     */
    const ob3 = globalFlexioImport.io.flexio.flex_types.ObjectValue
      .builder()
      .stringValue('string', 'titi')
      .booleanValue('bool', false)
      .numberValue('number', 42)
      .arrayValue('array', ['tutu', 'bibi', 12])
      .build()

    /**
     * @type {ObjectValue}
     */
    const ob2 = globalFlexioImport.io.flexio.flex_types.ObjectValue
      .builder()
      .stringValue('string', 'toto')
      .booleanValue('bool', true)
      .numberValue('number', 12)
      .arrayValue('primitiveArray', ['tutu', true, null, 12])
      .arrayValue('complexArray', [ob3, ['tutu', true, null, 12, ob]])
      .objectValueValue('object', ob)
      .build()

    assert.ok(ob.stringValue('string') === 'toto', 'stringValue')
    assert.ok(ob.stringValueOr('BadKey', 'default') === 'default', 'stringValueOr')

    assert.ok(ob2.booleanValue('bool') === true, 'booleanValue')
    assert.ok(ob2.booleanValueOr('badKey', false) === false, 'booleanValueOr')

    assert.ok(ob2.numberValue('number') === 12, 'numberValue')
    assert.ok(ob2.numberValueOr('badKey', 14) === 14, 'numberValueOr')

    assert.deepStrictEqual(ob2.arrayValue('primitiveArray').toArray(), ['tutu', true, null, 12], 'arrayValue')
    assert.deepStrictEqual(ob2.arrayValueOr('badKey', ['bad', 'bad', 12]), ['bad', 'bad', 12], 'arrayValueOr')

    assert.deepStrictEqual(ob2.objectValueValue('object'), ob, 'objectValueValue')
    assert.deepStrictEqual(ob2.objectValueValueOr('badKey', ob3), ob3, 'objectValueValueOr')
  }

  testBuilder() {
    /**
     * @type {ObjectValue}
     */
    const ob = globalFlexioImport.io.flexio.flex_types.ObjectValue
      .builder()
      .stringValue('string', 'toto')
      .booleanValue('bool', true)
      .numberValue('number', 12)
      .arrayValue('array', ['tutu', true, 12])
      .build()

    /**
     * @type {ObjectValue}
     */
    const ob2 = globalFlexioImport.io.flexio.flex_types.ObjectValue
      .builder()
      .stringValue('string', 'toto')
      .booleanValue('bool', true)
      .numberValue('number', 12)
      .arrayValue('array', ['tutu', false, 12, ob, ['tutu', true, 12]])
      .objectValueValue('object', ob)
      .build()

    assert.deepStrictEqual(ob2, globalFlexioImport.io.flexio.flex_types.ObjectValue.from(ob2).build(), 'ObjectValue.from')

    assert.deepStrictEqual(ob2, globalFlexioImport.io.flexio.flex_types.ObjectValue.fromObject(ob2.toObject()).build(), 'ObjectValue.fromObject')

    assert.deepStrictEqual(ob2, globalFlexioImport.io.flexio.flex_types.ObjectValue.fromJson(JSON.stringify(ob2.toJSON())).build(), 'ObjectValue.fromJson')

    assert.ok(JSON.stringify(ob2.toJSON()) === '{"string":"toto","bool":true,"number":12,"array":["tutu",false,12,{"string":"toto","bool":true,"number":12,"array":["tutu",true,12]},["tutu",true,12]],"object":{"string":"toto","bool":true,"number":12,"array":["tutu",true,12]}}', 'toJSON')

  }

  testEquals() {
    /**
     * @type {ObjectValue}
     */
    const ob = globalFlexioImport.io.flexio.flex_types.ObjectValue
      .builder()
      .stringValue('string', 'toto')
      .booleanValue('bool', true)
      .numberValue('number', 12)
      .arrayValue('array', ['tutu', true, 12])
      .build()

    /**
     * @type {ObjectValue}
     */
    const ob2 = globalFlexioImport.io.flexio.flex_types.ObjectValue
      .builder()
      .stringValue('string', 'toto')
      .booleanValue('bool', true)
      .numberValue('number', 12)
      .arrayValue('array', ['tutu', false, 12, ob, ['tutu', true, 12]])
      .objectValueValue('object', ob)
      .build()

    const ob2Bis = globalFlexioImport.io.flexio.flex_types.ObjectValue.from(ob2).build()

    assert.ok(ob2 === ob2, 'strict equality')
    assert.ok(ob2 !== ob2Bis, 'not strict equality')
    assert.ok(ob2.equals(ob2Bis), 'equals')

  }

  testWith() {
    /**
     * @type {ObjectValue}
     */
    const ob = globalFlexioImport.io.flexio.flex_types.ObjectValue
      .builder()
      .stringValue('string', 'toto')
      .booleanValue('bool', true)
      .numberValue('number', 12)
      .arrayValue('array', ['tutu', true, 12])
      .build()

    /**
     * @type {ObjectValue}
     */
    const ob2 = globalFlexioImport.io.flexio.flex_types.ObjectValue
      .builder()
      .stringValue('string', 'toto')
      .booleanValue('bool', true)
      .numberValue('number', 12)
      .arrayValue('array', ['tutu', false, 12, ob, ['tutu', true, 12]])
      .objectValueValue('object', ob)
      .build()

    const ob3 = ob2.withBooleanValue('bool', false)

    assert.ok(ob3.rawValue('bool') === false, 'get')
    assert.deepStrictEqual(ob3, globalFlexioImport.io.flexio.flex_types.ObjectValue
      .builder()
      .stringValue('string', 'toto')
      .booleanValue('bool', false)
      .numberValue('number', 12)
      .arrayValue('array', ['tutu', false, 12, ob, ['tutu', true, 12]])
      .objectValueValue('object', ob)
      .build(), 'compare instance')

    const ob4 = ob2.withBooleanValue('bool', true)
    assert.ok(ob2 !== ob4, 'immutability : not same instance')
    assert.ok(ob2.equals(ob4), 'immutability : equals')

  }

  testSize() {
    /**
     * @type {ObjectValue}
     */
    const ob = globalFlexioImport.io.flexio.flex_types.ObjectValue
      .builder()
      .stringValue('string', 'toto')
      .booleanValue('bool', true)
      .numberValue('number', 12)
      .arrayValue('array', ['tutu', true, 12])
      .build()

    assert.ok(ob.size() === 4, 'size')
  }

  testProperties() {
    /**
     * @type {ObjectValue}
     */
    const ob = globalFlexioImport.io.flexio.flex_types.ObjectValue
      .builder()
      .stringValue('string', 'toto')
      .booleanValue('bool', true)
      .numberValue('number', 12)
      .arrayValue('array', ['tutu', true, 12])
      .build()

    const size = ob.size()
    const properties = ob.properties()

    const propertyNames = ob.propertyNames()

    for (let i = 0; i < size; ++i) {
      assert.deepStrictEqual(properties[i], ob.rawValue(propertyNames[i]), 'key : ' + propertyNames[i])
    }
  }

  testException() {
    const ob = globalFlexioImport.io.flexio.flex_types.ObjectValue
      .builder()
      .stringValue('string', 'toto')
      .booleanValue('bool', true)
      .numberValue('number', 12)
      .arrayValue('array', ['tutu', true, 12])
      .build()

    assert.throws(() => {
      ob.stringValue('number'),
        TypeError
    })

    assert.throws(() => {
      ob.stringValue('badKey'),
        IndexError
    })

    assert.throws(() => {
      ob.rawValue('badKey'),
        IndexError
    })
  }

}

runTest(TestObjectValue)