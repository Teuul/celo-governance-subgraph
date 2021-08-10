import { Exchanged} from '../generated/Exchange/Exchange';
import { Event, Field, ArrayField, Item } from '../generated/schema';
import { log, ethereum } from '@graphprotocol/graph-ts';
import { handleEvent } from './utils/utils';

export function handleNewExchange(event: Exchanged): void {
  handleEvent(event,"GoldLocked");
}