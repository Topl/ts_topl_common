// @generated by protoc-gen-es v1.8.0
// @generated from file brambl/models/box/value.proto (package co.topl.brambl.models.box, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { BytesValue, Duration, proto3, Struct, UInt32Value, UInt64Value } from "@bufbuild/protobuf";
import { Int128, Ratio } from "../../../quivr/models/shared_pb.js";
import { StakingRegistration } from "../../../consensus/models/staking_pb.js";
import { GroupId, SeriesId } from "../identifier_pb.js";
import { FungibilityType, QuantityDescriptorType } from "./asset_pb.js";

/**
 * The value contained in a box
 *
 * @generated from message co.topl.brambl.models.box.Value
 */
export const Value = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.brambl.models.box.Value",
  () => [
    { no: 1, name: "lvl", kind: "message", T: Value_LVL, oneof: "value" },
    { no: 2, name: "topl", kind: "message", T: Value_TOPL, oneof: "value" },
    { no: 3, name: "asset", kind: "message", T: Value_Asset, oneof: "value" },
    { no: 4, name: "group", kind: "message", T: Value_Group, oneof: "value" },
    { no: 5, name: "series", kind: "message", T: Value_Series, oneof: "value" },
    { no: 6, name: "updateProposal", kind: "message", T: Value_UpdateProposal, oneof: "value" },
  ],
);

/**
 * A payment token
 *
 * @generated from message co.topl.brambl.models.box.Value.LVL
 */
export const Value_LVL = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.brambl.models.box.Value.LVL",
  () => [
    { no: 1, name: "quantity", kind: "message", T: Int128 },
  ],
  {localName: "Value_LVL"},
);

/**
 * A staking token
 *
 * @generated from message co.topl.brambl.models.box.Value.TOPL
 */
export const Value_TOPL = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.brambl.models.box.Value.TOPL",
  () => [
    { no: 1, name: "quantity", kind: "message", T: Int128 },
    { no: 3, name: "registration", kind: "message", T: StakingRegistration },
  ],
  {localName: "Value_TOPL"},
);

/**
 * A user-defined token
 *
 * @generated from message co.topl.brambl.models.box.Value.Asset
 */
export const Value_Asset = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.brambl.models.box.Value.Asset",
  () => [
    { no: 1, name: "groupId", kind: "message", T: GroupId },
    { no: 2, name: "seriesId", kind: "message", T: SeriesId },
    { no: 3, name: "quantity", kind: "message", T: Int128 },
    { no: 4, name: "groupAlloy", kind: "message", T: BytesValue },
    { no: 5, name: "seriesAlloy", kind: "message", T: BytesValue },
    { no: 6, name: "fungibility", kind: "enum", T: proto3.getEnumType(FungibilityType) },
    { no: 7, name: "quantityDescriptor", kind: "enum", T: proto3.getEnumType(QuantityDescriptorType) },
    { no: 8, name: "ephemeralMetadata", kind: "message", T: Struct },
    { no: 9, name: "commitment", kind: "message", T: BytesValue },
  ],
  {localName: "Value_Asset"},
);

/**
 * A group constructor token
 *
 * @generated from message co.topl.brambl.models.box.Value.Group
 */
export const Value_Group = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.brambl.models.box.Value.Group",
  () => [
    { no: 1, name: "groupId", kind: "message", T: GroupId },
    { no: 2, name: "quantity", kind: "message", T: Int128 },
    { no: 3, name: "fixedSeries", kind: "message", T: SeriesId },
  ],
  {localName: "Value_Group"},
);

/**
 * A series constructor token
 *
 * @generated from message co.topl.brambl.models.box.Value.Series
 */
export const Value_Series = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.brambl.models.box.Value.Series",
  () => [
    { no: 1, name: "seriesId", kind: "message", T: SeriesId },
    { no: 2, name: "quantity", kind: "message", T: Int128 },
    { no: 3, name: "tokenSupply", kind: "message", T: UInt32Value },
    { no: 4, name: "quantityDescriptor", kind: "enum", T: proto3.getEnumType(QuantityDescriptorType) },
    { no: 5, name: "fungibility", kind: "enum", T: proto3.getEnumType(FungibilityType) },
  ],
  {localName: "Value_Series"},
);

/**
 * @generated from message co.topl.brambl.models.box.Value.UpdateProposal
 */
export const Value_UpdateProposal = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.brambl.models.box.Value.UpdateProposal",
  () => [
    { no: 1, name: "label", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "fEffective", kind: "message", T: Ratio },
    { no: 3, name: "vrfLddCutoff", kind: "message", T: UInt32Value },
    { no: 4, name: "vrfPrecision", kind: "message", T: UInt32Value },
    { no: 5, name: "vrfBaselineDifficulty", kind: "message", T: Ratio },
    { no: 6, name: "vrfAmplitude", kind: "message", T: Ratio },
    { no: 7, name: "chainSelectionKLookback", kind: "message", T: UInt64Value },
    { no: 8, name: "slotDuration", kind: "message", T: Duration },
    { no: 9, name: "forwardBiasedSlotWindow", kind: "message", T: UInt64Value },
    { no: 10, name: "operationalPeriodsPerEpoch", kind: "message", T: UInt64Value },
    { no: 11, name: "kesKeyHours", kind: "message", T: UInt32Value },
    { no: 12, name: "kesKeyMinutes", kind: "message", T: UInt32Value },
  ],
  {localName: "Value_UpdateProposal"},
);
