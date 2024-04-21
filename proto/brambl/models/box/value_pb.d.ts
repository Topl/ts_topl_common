// @generated by protoc-gen-es v1.8.0
// @generated from file brambl/models/box/value.proto (package co.topl.brambl.models.box, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Struct } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Int128, Ratio } from "../../../quivr/models/shared_pb.js";
import type { StakingRegistration } from "../../../consensus/models/staking_pb.js";
import type { GroupId, SeriesId } from "../identifier_pb.js";
import type { FungibilityType, QuantityDescriptorType } from "./asset_pb.js";

/**
 * The value contained in a box
 *
 * @generated from message co.topl.brambl.models.box.Value
 */
export declare class Value extends Message<Value> {
  /**
   * @generated from oneof co.topl.brambl.models.box.Value.value
   */
  value: {
    /**
     * @generated from field: co.topl.brambl.models.box.Value.LVL lvl = 1;
     */
    value: Value_LVL;
    case: "lvl";
  } | {
    /**
     * @generated from field: co.topl.brambl.models.box.Value.TOPL topl = 2;
     */
    value: Value_TOPL;
    case: "topl";
  } | {
    /**
     * @generated from field: co.topl.brambl.models.box.Value.Asset asset = 3;
     */
    value: Value_Asset;
    case: "asset";
  } | {
    /**
     * @generated from field: co.topl.brambl.models.box.Value.Group group = 4;
     */
    value: Value_Group;
    case: "group";
  } | {
    /**
     * @generated from field: co.topl.brambl.models.box.Value.Series series = 5;
     */
    value: Value_Series;
    case: "series";
  } | {
    /**
     * @generated from field: co.topl.brambl.models.box.Value.UpdateProposal updateProposal = 6;
     */
    value: Value_UpdateProposal;
    case: "updateProposal";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<Value>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "co.topl.brambl.models.box.Value";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Value;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Value;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Value;

  static equals(a: Value | PlainMessage<Value> | undefined, b: Value | PlainMessage<Value> | undefined): boolean;
}

/**
 * A payment token
 *
 * @generated from message co.topl.brambl.models.box.Value.LVL
 */
export declare class Value_LVL extends Message<Value_LVL> {
  /**
   * @generated from field: quivr.models.Int128 quantity = 1;
   */
  quantity?: Int128;

  constructor(data?: PartialMessage<Value_LVL>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "co.topl.brambl.models.box.Value.LVL";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Value_LVL;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Value_LVL;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Value_LVL;

  static equals(a: Value_LVL | PlainMessage<Value_LVL> | undefined, b: Value_LVL | PlainMessage<Value_LVL> | undefined): boolean;
}

/**
 * A staking token
 *
 * @generated from message co.topl.brambl.models.box.Value.TOPL
 */
export declare class Value_TOPL extends Message<Value_TOPL> {
  /**
   * @generated from field: quivr.models.Int128 quantity = 1;
   */
  quantity?: Int128;

  /**
   * Optional.  If provided, the registration will take effect at the start of 2 epochs from now. If not provided, this token will not be used for staking purposes.
   *
   * @generated from field: co.topl.consensus.models.StakingRegistration registration = 3;
   */
  registration?: StakingRegistration;

  constructor(data?: PartialMessage<Value_TOPL>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "co.topl.brambl.models.box.Value.TOPL";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Value_TOPL;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Value_TOPL;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Value_TOPL;

  static equals(a: Value_TOPL | PlainMessage<Value_TOPL> | undefined, b: Value_TOPL | PlainMessage<Value_TOPL> | undefined): boolean;
}

/**
 * A user-defined token
 *
 * @generated from message co.topl.brambl.models.box.Value.Asset
 */
export declare class Value_Asset extends Message<Value_Asset> {
  /**
   * The group identifier of the group token that was used to mint this asset. When there is a groupAlloy this field is not used.
   *
   * @generated from field: co.topl.brambl.models.GroupId groupId = 1;
   */
  groupId?: GroupId;

  /**
   * The series identifier of the series token that was used to mint this asset. When there is a seriesAlloy this field is not used.
   *
   * @generated from field: co.topl.brambl.models.SeriesId seriesId = 2;
   */
  seriesId?: SeriesId;

  /**
   * A quantity
   *
   * @generated from field: quivr.models.Int128 quantity = 3;
   */
  quantity?: Int128;

  /**
   * This field is optional and represents a Merkle root of the alloy of groups in this asset. This is only valid for tokens that are series fungible.
   * length = 32
   *
   * @generated from field: google.protobuf.BytesValue groupAlloy = 4;
   */
  groupAlloy?: Uint8Array;

  /**
   * This field is optional and represents a Merkle root of the alloy of series in this asset. This is only valid for tokens that are group fungible.
   * length = 32
   *
   * @generated from field: google.protobuf.BytesValue seriesAlloy = 5;
   */
  seriesAlloy?: Uint8Array;

  /**
   * Describes the fungibility of the asset..
   *
   * @generated from field: co.topl.brambl.models.box.FungibilityType fungibility = 6;
   */
  fungibility: FungibilityType;

  /**
   * Describes the quantity behavior of this asset.
   *
   * @generated from field: co.topl.brambl.models.box.QuantityDescriptorType quantityDescriptor = 7;
   */
  quantityDescriptor: QuantityDescriptorType;

  /**
   * This is the ephemeral metadata of an asset. It follows the schema defined in the ephemeral metadata schema of the series policy corresponding to the token being minted.
   * The conformance of this field to the schema is not checked by the node. This field is managed by the user.
   *
   * @generated from field: google.protobuf.Struct ephemeralMetadata = 8;
   */
  ephemeralMetadata?: Struct;

  /**
   * This field is optional and meant to store a commitment in the form of a hash. This field is managed by the user.
   * Metadata concerning this field can be added to the metadata.
   *
   * @generated from field: google.protobuf.BytesValue commitment = 9;
   */
  commitment?: Uint8Array;

  constructor(data?: PartialMessage<Value_Asset>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "co.topl.brambl.models.box.Value.Asset";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Value_Asset;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Value_Asset;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Value_Asset;

  static equals(a: Value_Asset | PlainMessage<Value_Asset> | undefined, b: Value_Asset | PlainMessage<Value_Asset> | undefined): boolean;
}

/**
 * A group constructor token
 *
 * @generated from message co.topl.brambl.models.box.Value.Group
 */
export declare class Value_Group extends Message<Value_Group> {
  /**
   * The ID of _this_ Group. It is the digest of the Group Policy.
   *
   * @generated from field: co.topl.brambl.models.GroupId groupId = 1;
   */
  groupId?: GroupId;

  /**
   * The quantity of group constructor tokens stored in a given UTXO.
   *
   * @generated from field: quivr.models.Int128 quantity = 2;
   */
  quantity?: Int128;

  /**
   * An optional series identifier. When this series identifier is defined, this groups that implement this policy can only be used to mint assets with the aforementioned series identifier
   *
   * @generated from field: co.topl.brambl.models.SeriesId fixedSeries = 3;
   */
  fixedSeries?: SeriesId;

  constructor(data?: PartialMessage<Value_Group>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "co.topl.brambl.models.box.Value.Group";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Value_Group;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Value_Group;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Value_Group;

  static equals(a: Value_Group | PlainMessage<Value_Group> | undefined, b: Value_Group | PlainMessage<Value_Group> | undefined): boolean;
}

/**
 * A series constructor token
 *
 * @generated from message co.topl.brambl.models.box.Value.Series
 */
export declare class Value_Series extends Message<Value_Series> {
  /**
   * The ID of _this_ Series. It is the digest of the Series Policy.
   *
   * @generated from field: co.topl.brambl.models.SeriesId seriesId = 1;
   */
  seriesId?: SeriesId;

  /**
   * The quantity of series constructor tokens stored in a given UTXO.
   *
   * @generated from field: quivr.models.Int128 quantity = 2;
   */
  quantity?: Int128;

  /**
   * This is an optional field. When provided it fixes the quantity of tokens that will be minted when this series is consumed,
   * and the series constructor is burned by the minting transaction.
   * When not provided, the series constructor is not burned, thus making the token supply unlimited.
   *
   * @generated from field: google.protobuf.UInt32Value tokenSupply = 3;
   */
  tokenSupply?: number;

  /**
   * Describes the behavior of the quantity field of the assets minted using the series constructor derived from this policy.
   *
   * @generated from field: co.topl.brambl.models.box.QuantityDescriptorType quantityDescriptor = 4;
   */
  quantityDescriptor: QuantityDescriptorType;

  /**
   * Describes the fungibility of the assets minted using the series constructor token derived from this policy.
   *
   * @generated from field: co.topl.brambl.models.box.FungibilityType fungibility = 5;
   */
  fungibility: FungibilityType;

  constructor(data?: PartialMessage<Value_Series>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "co.topl.brambl.models.box.Value.Series";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Value_Series;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Value_Series;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Value_Series;

  static equals(a: Value_Series | PlainMessage<Value_Series> | undefined, b: Value_Series | PlainMessage<Value_Series> | undefined): boolean;
}

/**
 * @generated from message co.topl.brambl.models.box.Value.UpdateProposal
 */
export declare class Value_UpdateProposal extends Message<Value_UpdateProposal> {
  /**
   * Update proposal label for humans (do not confuse with the actual update proposal identifier)
   *
   * @generated from field: string label = 1;
   */
  label: string;

  /**
   * fEffective
   *
   * @generated from field: quivr.models.Ratio fEffective = 2;
   */
  fEffective?: Ratio;

  /**
   * vrfLddCutoff
   * Verifiable Random Function: mechanism for leader election in Ouroboros proof-of-stake
   * Local dynamic difficulty, Short timescale variation of the block production eligibility threshold.
   *
   * @generated from field: google.protobuf.UInt32Value vrfLddCutoff = 3;
   */
  vrfLddCutoff?: number;

  /**
   * vrfPrecision
   *
   * @generated from field: google.protobuf.UInt32Value vrfPrecision = 4;
   */
  vrfPrecision?: number;

  /**
   * vrfBaselineDifficulty
   *
   * @generated from field: quivr.models.Ratio vrfBaselineDifficulty = 5;
   */
  vrfBaselineDifficulty?: Ratio;

  /**
   * vrfAmplitude
   *
   * @generated from field: quivr.models.Ratio vrfAmplitude = 6;
   */
  vrfAmplitude?: Ratio;

  /**
   * chainSelectionKLookback
   *
   * @generated from field: google.protobuf.UInt64Value chainSelectionKLookback = 7;
   */
  chainSelectionKLookback?: bigint;

  /**
   * slotDuration, Slot: Atomic time unit in Ouroboros, smallest piece of time (~1 second for Topl, 2 for Cardano)
   *
   * @generated from field: google.protobuf.Duration slotDuration = 8;
   */
  slotDuration?: Duration;

  /**
   * forwardBiasedSlotWindow
   *
   * @generated from field: google.protobuf.UInt64Value forwardBiasedSlotWindow = 9;
   */
  forwardBiasedSlotWindow?: bigint;

  /**
   * operationalPeriodsPerEpoch, Epoch: Long time scale in Ouroboros, epochs are composed of many slots
   *
   * @generated from field: google.protobuf.UInt64Value operationalPeriodsPerEpoch = 10;
   */
  operationalPeriodsPerEpoch?: bigint;

  /**
   * kesKeyHours Key-Evolving Signature: mechanism for securing chain selection process in Ouroboros proof-of-stake
   *
   * @generated from field: google.protobuf.UInt32Value kesKeyHours = 11;
   */
  kesKeyHours?: number;

  /**
   * kesKeyMinutes Key-Evolving Signature: mechanism for securing chain selection process in Ouroboros proof-of-stake
   *
   * @generated from field: google.protobuf.UInt32Value kesKeyMinutes = 12;
   */
  kesKeyMinutes?: number;

  constructor(data?: PartialMessage<Value_UpdateProposal>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "co.topl.brambl.models.box.Value.UpdateProposal";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Value_UpdateProposal;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Value_UpdateProposal;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Value_UpdateProposal;

  static equals(a: Value_UpdateProposal | PlainMessage<Value_UpdateProposal> | undefined, b: Value_UpdateProposal | PlainMessage<Value_UpdateProposal> | undefined): boolean;
}

