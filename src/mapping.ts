import { Exchanged} from '../generated/Exchange/Exchange'
import { Event } from '../generated/schema'
import { log } from '@graphprotocol/graph-ts'

export function handleNewExchange(event: Exchanged): void {
  let event_id = event.transaction.hash.toHex() + "-" + event.transactionLogIndex.toString() // unique id
  let e = new Event(event_id)
  e.address = event.address.toHex()
  e.type = "Exchanged"
  e.data = createJSONdata(event)
  e.save();
}

export function createJSONdata(event: Exchanged): String {
  let s = '{'
  s+='"exchanger": "' + event.params.exchanger.toHex().toString() + '", '
  s+='"sellAmount": ' + event.params.sellAmount.toString() + ', '
  s+='"buyAmount": ' + event.params.buyAmount.toString() + ', '
  if (event.params.soldGold) {
    s+='"soldGold": true'
  }
  else {
    s+='"soldGold": false'
  }
  s+='}'
  log.debug("data: {}",[s])
  return s;
}