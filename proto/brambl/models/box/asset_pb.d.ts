// package: co.topl.brambl.models.box
// file: brambl/models/box/asset.proto

import * as jspb from "google-protobuf";

export interface FungibilityTypeMap {
  GROUP_AND_SERIES: 0;
  SERIES: 1;
  GROUP: 2;
}

export const FungibilityType: FungibilityTypeMap;

export interface QuantityDescriptorTypeMap {
  LIQUID: 0;
  ACCUMULATOR: 1;
  FRACTIONABLE: 2;
  IMMUTABLE: 3;
}

export const QuantityDescriptorType: QuantityDescriptorTypeMap;

