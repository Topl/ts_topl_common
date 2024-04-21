// @generated by protoc-gen-es v1.8.0
// @generated from file brambl/models/box/asset.proto (package co.topl.brambl.models.box, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum co.topl.brambl.models.box.FungibilityType
 */
export const FungibilityType = /*@__PURE__*/ proto3.makeEnum(
  "co.topl.brambl.models.box.FungibilityType",
  [
    {no: 0, name: "GROUP_AND_SERIES"},
    {no: 1, name: "SERIES"},
    {no: 2, name: "GROUP"},
  ],
);

/**
 * @generated from enum co.topl.brambl.models.box.QuantityDescriptorType
 */
export const QuantityDescriptorType = /*@__PURE__*/ proto3.makeEnum(
  "co.topl.brambl.models.box.QuantityDescriptorType",
  [
    {no: 0, name: "LIQUID"},
    {no: 1, name: "ACCUMULATOR"},
    {no: 2, name: "FRACTIONABLE"},
    {no: 3, name: "IMMUTABLE"},
  ],
);

