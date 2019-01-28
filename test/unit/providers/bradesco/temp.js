import test from 'ava'
import sinon from 'sinon'
import moment from 'moment'
import { isBradescoOff } from '../../../../src/providers/bradesco/temp'

test('isBradescoOff when Bradesco is online', (t) => {
  const time = moment('2019-01-28 23:29:59').valueOf()
  const timer = sinon.useFakeTimers(time)

  t.is(isBradescoOff(), false)

  timer.restore()
})

test('isBradescoOff when Bradesco is offline', (t) => {
  const time = moment('2019-01-28 23:30:01').valueOf()
  const timer = sinon.useFakeTimers(time)

  t.is(isBradescoOff(), true)

  timer.restore()
})
