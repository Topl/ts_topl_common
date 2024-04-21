/* eslint-disable */

export const protobufPackage = "co.topl.brambl.models.box";

export enum FungibilityType {
  /** GROUP_AND_SERIES - `group-and-series` means that both the series and the group are considered for fungibility. */
  GROUP_AND_SERIES = 0,
  /** SERIES - `series` means that only the series is considered for fungibility. */
  SERIES = 1,
  /** GROUP - `group` means that only the group is considered for fungibility */
  GROUP = 2,
  UNRECOGNIZED = -1,
}

export function fungibilityTypeFromJSON(object: any): FungibilityType {
  switch (object) {
    case 0:
    case "GROUP_AND_SERIES":
      return FungibilityType.GROUP_AND_SERIES;
    case 1:
    case "SERIES":
      return FungibilityType.SERIES;
    case 2:
    case "GROUP":
      return FungibilityType.GROUP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FungibilityType.UNRECOGNIZED;
  }
}

export function fungibilityTypeToJSON(object: FungibilityType): string {
  switch (object) {
    case FungibilityType.GROUP_AND_SERIES:
      return "GROUP_AND_SERIES";
    case FungibilityType.SERIES:
      return "SERIES";
    case FungibilityType.GROUP:
      return "GROUP";
    case FungibilityType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum QuantityDescriptorType {
  /** LIQUID - `liquid` If it is fungible one can fraction it in smaller tokens or merge two smaller tokens to make a bigger one. */
  LIQUID = 0,
  /** ACCUMULATOR - `accumulator` means that the token can only be merged with other fungible tokens. Once two tokens are merged they can never be separated and will always share the same UTXO. */
  ACCUMULATOR = 1,
  /** FRACTIONABLE - `fractionable` means that the token can only be split but not merged with other fungible tokens. Once the token was split it can never be put together again. */
  FRACTIONABLE = 2,
  /** IMMUTABLE - `immutable` means that a token can neither be accumulated nor split, it always keeps the same quantity. */
  IMMUTABLE = 3,
  UNRECOGNIZED = -1,
}

export function quantityDescriptorTypeFromJSON(object: any): QuantityDescriptorType {
  switch (object) {
    case 0:
    case "LIQUID":
      return QuantityDescriptorType.LIQUID;
    case 1:
    case "ACCUMULATOR":
      return QuantityDescriptorType.ACCUMULATOR;
    case 2:
    case "FRACTIONABLE":
      return QuantityDescriptorType.FRACTIONABLE;
    case 3:
    case "IMMUTABLE":
      return QuantityDescriptorType.IMMUTABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return QuantityDescriptorType.UNRECOGNIZED;
  }
}

export function quantityDescriptorTypeToJSON(object: QuantityDescriptorType): string {
  switch (object) {
    case QuantityDescriptorType.LIQUID:
      return "LIQUID";
    case QuantityDescriptorType.ACCUMULATOR:
      return "ACCUMULATOR";
    case QuantityDescriptorType.FRACTIONABLE:
      return "FRACTIONABLE";
    case QuantityDescriptorType.IMMUTABLE:
      return "IMMUTABLE";
    case QuantityDescriptorType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
