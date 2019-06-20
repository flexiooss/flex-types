import {assert, isNull} from '@flexio-oss/assert'

const datetimePattern = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.(\d*))?(Z)?$/
const zonedDatetimePattern = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.(\d*))?(Z)?([+-](\d{2}):(\d{2}))?$/
const datePattern = /^(\d{4})-(\d{2})-(\d{2})$/
const timePattern = /^(\d{2}):(\d{2}):(\d{2})(\.(\d*))?(Z)?/

export class FlexZonedDateTime {
  constructor(dateStr) {
    let found = dateStr.match(zonedDatetimePattern)
    assert(!isNull(found), 'Invalid tz datetime format: ' + dateStr)
    let arrayDate = dateStr.split('Z')
    this.__zonedDateTime = (found[10] ? arrayDate.join('') : arrayDate[0] + '+00:00')
  }

  toJSON() {
    return this.__zonedDateTime
  }
}

export class FlexDateTime {
  constructor(dateStr) {
    let found = dateStr.match(datetimePattern)
    assert(!isNull(found), 'Invalid datetime format: ' + dateStr)
    this.__dateTime = dateStr.split('Z')[0]
  }

  toJSON() {
    return this.__dateTime
  }
}

export class FlexDate {
  constructor(dateStr) {
    let found = dateStr.match(datePattern)
    assert(!isNull(found), 'Invalid date format: ' + dateStr)
    this.__date = dateStr
  }

  toJSON() {
    return this.__date
  }
}

export class FlexTime {
  constructor(dateStr) {
    let found = dateStr.match(timePattern)
    assert(!isNull(found), 'Invalid time format: ' + dateStr)
    this.__time = dateStr.split('Z')[0]
  }

  toJSON() {
    return this.__time
  }
}
