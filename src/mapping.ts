import {
	ApproverSet,
	ConstitutionSet,
	ProposalQueued,
	ProposalUpvoted,
	ProposalUpvoteRevoked,
	ProposalVoted
} from '../generated/Governance/Governance';
import { Event, Field, ArrayField, Item } from '../generated/schema';
import { ethereum } from '@graphprotocol/graph-ts';
import { handleEvent } from './utils/utils';

export function handleApproverSet(event: ApproverSet): void {
  handleEvent(event,"ApproverSet");
}

export function handleConstitutionSet(event: ConstitutionSet): void {
  handleEvent(event,"ConstitutionSet");
}

export function handleProposalQueued(event: ProposalQueued): void {
  handleEvent(event,"ProposalQueued");
}

export function handleProposalUpvoted(event: ProposalUpvoted): void {
  handleEvent(event,"ProposalUpvoted");
}

export function handleProposalUpvoteRevoked(event: ProposalUpvoteRevoked): void {
  handleEvent(event,"ProposalUpvoteRevoked");
}

export function handleProposalVoted(event: ProposalVoted): void {
  handleEvent(event,"ProposalVoted");
}