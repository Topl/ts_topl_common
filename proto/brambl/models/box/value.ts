/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { StakingRegistration } from "../../../consensus/models/staking";
import { Duration } from "../../../google/protobuf/duration";
import { Struct } from "../../../google/protobuf/struct";
import { BytesValue, UInt32Value, UInt64Value } from "../../../google/protobuf/wrappers";
import { Int128, Ratio } from "../../../quivr/models/shared";
import { GroupId, SeriesId } from "../identifier";
import {
  FungibilityType,
  fungibilityTypeFromJSON,
  fungibilityTypeToJSON,
  QuantityDescriptorType,
  quantityDescriptorTypeFromJSON,
  quantityDescriptorTypeToJSON,
} from "./asset";

export const protobufPackage = "co.topl.brambl.models.box";

/** The value contained in a box */
export interface Value {
  lvl?: Value_LVL | undefined;
  topl?: Value_TOPL | undefined;
  asset?: Value_Asset | undefined;
  group?: Value_Group | undefined;
  series?: Value_Series | undefined;
  updateProposal?: Value_UpdateProposal | undefined;
}

/** A payment token */
export interface Value_LVL {
  quantity: Int128 | undefined;
}

/** A staking token */
export interface Value_TOPL {
  quantity:
    | Int128
    | undefined;
  /** Optional.  If provided, the registration will take effect at the start of 2 epochs from now. If not provided, this token will not be used for staking purposes. */
  registration: StakingRegistration | undefined;
}

/** A user-defined token */
export interface Value_Asset {
  /** The group identifier of the group token that was used to mint this asset. When there is a groupAlloy this field is not used. */
  groupId:
    | GroupId
    | undefined;
  /** The series identifier of the series token that was used to mint this asset. When there is a seriesAlloy this field is not used. */
  seriesId:
    | SeriesId
    | undefined;
  /** A quantity */
  quantity:
    | Int128
    | undefined;
  /**
   * This field is optional and represents a Merkle root of the alloy of groups in this asset. This is only valid for tokens that are series fungible.
   * length = 32
   */
  groupAlloy:
    | Uint8Array
    | undefined;
  /**
   * This field is optional and represents a Merkle root of the alloy of series in this asset. This is only valid for tokens that are group fungible.
   * length = 32
   */
  seriesAlloy:
    | Uint8Array
    | undefined;
  /** Describes the fungibility of the asset.. */
  fungibility: FungibilityType;
  /** Describes the quantity behavior of this asset. */
  quantityDescriptor: QuantityDescriptorType;
  /**
   * This is the ephemeral metadata of an asset. It follows the schema defined in the ephemeral metadata schema of the series policy corresponding to the token being minted.
   * The conformance of this field to the schema is not checked by the node. This field is managed by the user.
   */
  ephemeralMetadata:
    | { [key: string]: any }
    | undefined;
  /**
   * This field is optional and meant to store a commitment in the form of a hash. This field is managed by the user.
   * Metadata concerning this field can be added to the metadata.
   */
  commitment: Uint8Array | undefined;
}

/** A group constructor token */
export interface Value_Group {
  /** The ID of _this_ Group. It is the digest of the Group Policy. */
  groupId:
    | GroupId
    | undefined;
  /** The quantity of group constructor tokens stored in a given UTXO. */
  quantity:
    | Int128
    | undefined;
  /** An optional series identifier. When this series identifier is defined, this groups that implement this policy can only be used to mint assets with the aforementioned series identifier */
  fixedSeries: SeriesId | undefined;
}

/** A series constructor token */
export interface Value_Series {
  /** The ID of _this_ Series. It is the digest of the Series Policy. */
  seriesId:
    | SeriesId
    | undefined;
  /** The quantity of series constructor tokens stored in a given UTXO. */
  quantity:
    | Int128
    | undefined;
  /**
   * This is an optional field. When provided it fixes the quantity of tokens that will be minted when this series is consumed,
   * and the series constructor is burned by the minting transaction.
   * When not provided, the series constructor is not burned, thus making the token supply unlimited.
   */
  tokenSupply:
    | number
    | undefined;
  /** Describes the behavior of the quantity field of the assets minted using the series constructor derived from this policy. */
  quantityDescriptor: QuantityDescriptorType;
  /** Describes the fungibility of the assets minted using the series constructor token derived from this policy. */
  fungibility: FungibilityType;
}

export interface Value_UpdateProposal {
  /** Update proposal label for humans (do not confuse with the actual update proposal identifier) */
  label: string;
  /** fEffective */
  fEffective:
    | Ratio
    | undefined;
  /**
   * vrfLddCutoff
   * Verifiable Random Function: mechanism for leader election in Ouroboros proof-of-stake
   * Local dynamic difficulty, Short timescale variation of the block production eligibility threshold.
   */
  vrfLddCutoff:
    | number
    | undefined;
  /** vrfPrecision */
  vrfPrecision:
    | number
    | undefined;
  /** vrfBaselineDifficulty */
  vrfBaselineDifficulty:
    | Ratio
    | undefined;
  /** vrfAmplitude */
  vrfAmplitude:
    | Ratio
    | undefined;
  /** chainSelectionKLookback */
  chainSelectionKLookback:
    | number
    | undefined;
  /** slotDuration, Slot: Atomic time unit in Ouroboros, smallest piece of time (~1 second for Topl, 2 for Cardano) */
  slotDuration:
    | Duration
    | undefined;
  /** forwardBiasedSlotWindow */
  forwardBiasedSlotWindow:
    | number
    | undefined;
  /** operationalPeriodsPerEpoch, Epoch: Long time scale in Ouroboros, epochs are composed of many slots */
  operationalPeriodsPerEpoch:
    | number
    | undefined;
  /** kesKeyHours Key-Evolving Signature: mechanism for securing chain selection process in Ouroboros proof-of-stake */
  kesKeyHours:
    | number
    | undefined;
  /** kesKeyMinutes Key-Evolving Signature: mechanism for securing chain selection process in Ouroboros proof-of-stake */
  kesKeyMinutes: number | undefined;
}

function createBaseValue(): Value {
  return {
    lvl: undefined,
    topl: undefined,
    asset: undefined,
    group: undefined,
    series: undefined,
    updateProposal: undefined,
  };
}

export const Value = {
  encode(message: Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lvl !== undefined) {
      Value_LVL.encode(message.lvl, writer.uint32(10).fork()).ldelim();
    }
    if (message.topl !== undefined) {
      Value_TOPL.encode(message.topl, writer.uint32(18).fork()).ldelim();
    }
    if (message.asset !== undefined) {
      Value_Asset.encode(message.asset, writer.uint32(26).fork()).ldelim();
    }
    if (message.group !== undefined) {
      Value_Group.encode(message.group, writer.uint32(34).fork()).ldelim();
    }
    if (message.series !== undefined) {
      Value_Series.encode(message.series, writer.uint32(42).fork()).ldelim();
    }
    if (message.updateProposal !== undefined) {
      Value_UpdateProposal.encode(message.updateProposal, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Value {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lvl = Value_LVL.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.topl = Value_TOPL.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.asset = Value_Asset.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.group = Value_Group.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.series = Value_Series.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.updateProposal = Value_UpdateProposal.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Value {
    return {
      lvl: isSet(object.lvl) ? Value_LVL.fromJSON(object.lvl) : undefined,
      topl: isSet(object.topl) ? Value_TOPL.fromJSON(object.topl) : undefined,
      asset: isSet(object.asset) ? Value_Asset.fromJSON(object.asset) : undefined,
      group: isSet(object.group) ? Value_Group.fromJSON(object.group) : undefined,
      series: isSet(object.series) ? Value_Series.fromJSON(object.series) : undefined,
      updateProposal: isSet(object.updateProposal) ? Value_UpdateProposal.fromJSON(object.updateProposal) : undefined,
    };
  },

  toJSON(message: Value): unknown {
    const obj: any = {};
    if (message.lvl !== undefined) {
      obj.lvl = Value_LVL.toJSON(message.lvl);
    }
    if (message.topl !== undefined) {
      obj.topl = Value_TOPL.toJSON(message.topl);
    }
    if (message.asset !== undefined) {
      obj.asset = Value_Asset.toJSON(message.asset);
    }
    if (message.group !== undefined) {
      obj.group = Value_Group.toJSON(message.group);
    }
    if (message.series !== undefined) {
      obj.series = Value_Series.toJSON(message.series);
    }
    if (message.updateProposal !== undefined) {
      obj.updateProposal = Value_UpdateProposal.toJSON(message.updateProposal);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Value>, I>>(base?: I): Value {
    return Value.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Value>, I>>(object: I): Value {
    const message = createBaseValue();
    message.lvl = (object.lvl !== undefined && object.lvl !== null) ? Value_LVL.fromPartial(object.lvl) : undefined;
    message.topl = (object.topl !== undefined && object.topl !== null)
      ? Value_TOPL.fromPartial(object.topl)
      : undefined;
    message.asset = (object.asset !== undefined && object.asset !== null)
      ? Value_Asset.fromPartial(object.asset)
      : undefined;
    message.group = (object.group !== undefined && object.group !== null)
      ? Value_Group.fromPartial(object.group)
      : undefined;
    message.series = (object.series !== undefined && object.series !== null)
      ? Value_Series.fromPartial(object.series)
      : undefined;
    message.updateProposal = (object.updateProposal !== undefined && object.updateProposal !== null)
      ? Value_UpdateProposal.fromPartial(object.updateProposal)
      : undefined;
    return message;
  },
};

function createBaseValue_LVL(): Value_LVL {
  return { quantity: undefined };
}

export const Value_LVL = {
  encode(message: Value_LVL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quantity !== undefined) {
      Int128.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Value_LVL {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValue_LVL();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.quantity = Int128.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Value_LVL {
    return { quantity: isSet(object.quantity) ? Int128.fromJSON(object.quantity) : undefined };
  },

  toJSON(message: Value_LVL): unknown {
    const obj: any = {};
    if (message.quantity !== undefined) {
      obj.quantity = Int128.toJSON(message.quantity);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Value_LVL>, I>>(base?: I): Value_LVL {
    return Value_LVL.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Value_LVL>, I>>(object: I): Value_LVL {
    const message = createBaseValue_LVL();
    message.quantity = (object.quantity !== undefined && object.quantity !== null)
      ? Int128.fromPartial(object.quantity)
      : undefined;
    return message;
  },
};

function createBaseValue_TOPL(): Value_TOPL {
  return { quantity: undefined, registration: undefined };
}

export const Value_TOPL = {
  encode(message: Value_TOPL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quantity !== undefined) {
      Int128.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    if (message.registration !== undefined) {
      StakingRegistration.encode(message.registration, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Value_TOPL {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValue_TOPL();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.quantity = Int128.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.registration = StakingRegistration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Value_TOPL {
    return {
      quantity: isSet(object.quantity) ? Int128.fromJSON(object.quantity) : undefined,
      registration: isSet(object.registration) ? StakingRegistration.fromJSON(object.registration) : undefined,
    };
  },

  toJSON(message: Value_TOPL): unknown {
    const obj: any = {};
    if (message.quantity !== undefined) {
      obj.quantity = Int128.toJSON(message.quantity);
    }
    if (message.registration !== undefined) {
      obj.registration = StakingRegistration.toJSON(message.registration);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Value_TOPL>, I>>(base?: I): Value_TOPL {
    return Value_TOPL.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Value_TOPL>, I>>(object: I): Value_TOPL {
    const message = createBaseValue_TOPL();
    message.quantity = (object.quantity !== undefined && object.quantity !== null)
      ? Int128.fromPartial(object.quantity)
      : undefined;
    message.registration = (object.registration !== undefined && object.registration !== null)
      ? StakingRegistration.fromPartial(object.registration)
      : undefined;
    return message;
  },
};

function createBaseValue_Asset(): Value_Asset {
  return {
    groupId: undefined,
    seriesId: undefined,
    quantity: undefined,
    groupAlloy: undefined,
    seriesAlloy: undefined,
    fungibility: 0,
    quantityDescriptor: 0,
    ephemeralMetadata: undefined,
    commitment: undefined,
  };
}

export const Value_Asset = {
  encode(message: Value_Asset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== undefined) {
      GroupId.encode(message.groupId, writer.uint32(10).fork()).ldelim();
    }
    if (message.seriesId !== undefined) {
      SeriesId.encode(message.seriesId, writer.uint32(18).fork()).ldelim();
    }
    if (message.quantity !== undefined) {
      Int128.encode(message.quantity, writer.uint32(26).fork()).ldelim();
    }
    if (message.groupAlloy !== undefined) {
      BytesValue.encode({ value: message.groupAlloy! }, writer.uint32(34).fork()).ldelim();
    }
    if (message.seriesAlloy !== undefined) {
      BytesValue.encode({ value: message.seriesAlloy! }, writer.uint32(42).fork()).ldelim();
    }
    if (message.fungibility !== 0) {
      writer.uint32(48).int32(message.fungibility);
    }
    if (message.quantityDescriptor !== 0) {
      writer.uint32(56).int32(message.quantityDescriptor);
    }
    if (message.ephemeralMetadata !== undefined) {
      Struct.encode(Struct.wrap(message.ephemeralMetadata), writer.uint32(66).fork()).ldelim();
    }
    if (message.commitment !== undefined) {
      BytesValue.encode({ value: message.commitment! }, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Value_Asset {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValue_Asset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupId = GroupId.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.seriesId = SeriesId.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.quantity = Int128.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.groupAlloy = BytesValue.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.seriesAlloy = BytesValue.decode(reader, reader.uint32()).value;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.fungibility = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.quantityDescriptor = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.ephemeralMetadata = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.commitment = BytesValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Value_Asset {
    return {
      groupId: isSet(object.groupId) ? GroupId.fromJSON(object.groupId) : undefined,
      seriesId: isSet(object.seriesId) ? SeriesId.fromJSON(object.seriesId) : undefined,
      quantity: isSet(object.quantity) ? Int128.fromJSON(object.quantity) : undefined,
      groupAlloy: isSet(object.groupAlloy) ? new Uint8Array(object.groupAlloy) : undefined,
      seriesAlloy: isSet(object.seriesAlloy) ? new Uint8Array(object.seriesAlloy) : undefined,
      fungibility: isSet(object.fungibility) ? fungibilityTypeFromJSON(object.fungibility) : 0,
      quantityDescriptor: isSet(object.quantityDescriptor)
        ? quantityDescriptorTypeFromJSON(object.quantityDescriptor)
        : 0,
      ephemeralMetadata: isObject(object.ephemeralMetadata) ? object.ephemeralMetadata : undefined,
      commitment: isSet(object.commitment) ? new Uint8Array(object.commitment) : undefined,
    };
  },

  toJSON(message: Value_Asset): unknown {
    const obj: any = {};
    if (message.groupId !== undefined) {
      obj.groupId = GroupId.toJSON(message.groupId);
    }
    if (message.seriesId !== undefined) {
      obj.seriesId = SeriesId.toJSON(message.seriesId);
    }
    if (message.quantity !== undefined) {
      obj.quantity = Int128.toJSON(message.quantity);
    }
    if (message.groupAlloy !== undefined) {
      obj.groupAlloy = message.groupAlloy;
    }
    if (message.seriesAlloy !== undefined) {
      obj.seriesAlloy = message.seriesAlloy;
    }
    if (message.fungibility !== 0) {
      obj.fungibility = fungibilityTypeToJSON(message.fungibility);
    }
    if (message.quantityDescriptor !== 0) {
      obj.quantityDescriptor = quantityDescriptorTypeToJSON(message.quantityDescriptor);
    }
    if (message.ephemeralMetadata !== undefined) {
      obj.ephemeralMetadata = message.ephemeralMetadata;
    }
    if (message.commitment !== undefined) {
      obj.commitment = message.commitment;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Value_Asset>, I>>(base?: I): Value_Asset {
    return Value_Asset.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Value_Asset>, I>>(object: I): Value_Asset {
    const message = createBaseValue_Asset();
    message.groupId = (object.groupId !== undefined && object.groupId !== null)
      ? GroupId.fromPartial(object.groupId)
      : undefined;
    message.seriesId = (object.seriesId !== undefined && object.seriesId !== null)
      ? SeriesId.fromPartial(object.seriesId)
      : undefined;
    message.quantity = (object.quantity !== undefined && object.quantity !== null)
      ? Int128.fromPartial(object.quantity)
      : undefined;
    message.groupAlloy = object.groupAlloy ?? undefined;
    message.seriesAlloy = object.seriesAlloy ?? undefined;
    message.fungibility = object.fungibility ?? 0;
    message.quantityDescriptor = object.quantityDescriptor ?? 0;
    message.ephemeralMetadata = object.ephemeralMetadata ?? undefined;
    message.commitment = object.commitment ?? undefined;
    return message;
  },
};

function createBaseValue_Group(): Value_Group {
  return { groupId: undefined, quantity: undefined, fixedSeries: undefined };
}

export const Value_Group = {
  encode(message: Value_Group, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== undefined) {
      GroupId.encode(message.groupId, writer.uint32(10).fork()).ldelim();
    }
    if (message.quantity !== undefined) {
      Int128.encode(message.quantity, writer.uint32(18).fork()).ldelim();
    }
    if (message.fixedSeries !== undefined) {
      SeriesId.encode(message.fixedSeries, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Value_Group {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValue_Group();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupId = GroupId.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.quantity = Int128.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fixedSeries = SeriesId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Value_Group {
    return {
      groupId: isSet(object.groupId) ? GroupId.fromJSON(object.groupId) : undefined,
      quantity: isSet(object.quantity) ? Int128.fromJSON(object.quantity) : undefined,
      fixedSeries: isSet(object.fixedSeries) ? SeriesId.fromJSON(object.fixedSeries) : undefined,
    };
  },

  toJSON(message: Value_Group): unknown {
    const obj: any = {};
    if (message.groupId !== undefined) {
      obj.groupId = GroupId.toJSON(message.groupId);
    }
    if (message.quantity !== undefined) {
      obj.quantity = Int128.toJSON(message.quantity);
    }
    if (message.fixedSeries !== undefined) {
      obj.fixedSeries = SeriesId.toJSON(message.fixedSeries);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Value_Group>, I>>(base?: I): Value_Group {
    return Value_Group.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Value_Group>, I>>(object: I): Value_Group {
    const message = createBaseValue_Group();
    message.groupId = (object.groupId !== undefined && object.groupId !== null)
      ? GroupId.fromPartial(object.groupId)
      : undefined;
    message.quantity = (object.quantity !== undefined && object.quantity !== null)
      ? Int128.fromPartial(object.quantity)
      : undefined;
    message.fixedSeries = (object.fixedSeries !== undefined && object.fixedSeries !== null)
      ? SeriesId.fromPartial(object.fixedSeries)
      : undefined;
    return message;
  },
};

function createBaseValue_Series(): Value_Series {
  return { seriesId: undefined, quantity: undefined, tokenSupply: undefined, quantityDescriptor: 0, fungibility: 0 };
}

export const Value_Series = {
  encode(message: Value_Series, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seriesId !== undefined) {
      SeriesId.encode(message.seriesId, writer.uint32(10).fork()).ldelim();
    }
    if (message.quantity !== undefined) {
      Int128.encode(message.quantity, writer.uint32(18).fork()).ldelim();
    }
    if (message.tokenSupply !== undefined) {
      UInt32Value.encode({ value: message.tokenSupply! }, writer.uint32(26).fork()).ldelim();
    }
    if (message.quantityDescriptor !== 0) {
      writer.uint32(32).int32(message.quantityDescriptor);
    }
    if (message.fungibility !== 0) {
      writer.uint32(40).int32(message.fungibility);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Value_Series {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValue_Series();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.seriesId = SeriesId.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.quantity = Int128.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tokenSupply = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.quantityDescriptor = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.fungibility = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Value_Series {
    return {
      seriesId: isSet(object.seriesId) ? SeriesId.fromJSON(object.seriesId) : undefined,
      quantity: isSet(object.quantity) ? Int128.fromJSON(object.quantity) : undefined,
      tokenSupply: isSet(object.tokenSupply) ? Number(object.tokenSupply) : undefined,
      quantityDescriptor: isSet(object.quantityDescriptor)
        ? quantityDescriptorTypeFromJSON(object.quantityDescriptor)
        : 0,
      fungibility: isSet(object.fungibility) ? fungibilityTypeFromJSON(object.fungibility) : 0,
    };
  },

  toJSON(message: Value_Series): unknown {
    const obj: any = {};
    if (message.seriesId !== undefined) {
      obj.seriesId = SeriesId.toJSON(message.seriesId);
    }
    if (message.quantity !== undefined) {
      obj.quantity = Int128.toJSON(message.quantity);
    }
    if (message.tokenSupply !== undefined) {
      obj.tokenSupply = message.tokenSupply;
    }
    if (message.quantityDescriptor !== 0) {
      obj.quantityDescriptor = quantityDescriptorTypeToJSON(message.quantityDescriptor);
    }
    if (message.fungibility !== 0) {
      obj.fungibility = fungibilityTypeToJSON(message.fungibility);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Value_Series>, I>>(base?: I): Value_Series {
    return Value_Series.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Value_Series>, I>>(object: I): Value_Series {
    const message = createBaseValue_Series();
    message.seriesId = (object.seriesId !== undefined && object.seriesId !== null)
      ? SeriesId.fromPartial(object.seriesId)
      : undefined;
    message.quantity = (object.quantity !== undefined && object.quantity !== null)
      ? Int128.fromPartial(object.quantity)
      : undefined;
    message.tokenSupply = object.tokenSupply ?? undefined;
    message.quantityDescriptor = object.quantityDescriptor ?? 0;
    message.fungibility = object.fungibility ?? 0;
    return message;
  },
};

function createBaseValue_UpdateProposal(): Value_UpdateProposal {
  return {
    label: "",
    fEffective: undefined,
    vrfLddCutoff: undefined,
    vrfPrecision: undefined,
    vrfBaselineDifficulty: undefined,
    vrfAmplitude: undefined,
    chainSelectionKLookback: undefined,
    slotDuration: undefined,
    forwardBiasedSlotWindow: undefined,
    operationalPeriodsPerEpoch: undefined,
    kesKeyHours: undefined,
    kesKeyMinutes: undefined,
  };
}

export const Value_UpdateProposal = {
  encode(message: Value_UpdateProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.label !== "") {
      writer.uint32(10).string(message.label);
    }
    if (message.fEffective !== undefined) {
      Ratio.encode(message.fEffective, writer.uint32(18).fork()).ldelim();
    }
    if (message.vrfLddCutoff !== undefined) {
      UInt32Value.encode({ value: message.vrfLddCutoff! }, writer.uint32(26).fork()).ldelim();
    }
    if (message.vrfPrecision !== undefined) {
      UInt32Value.encode({ value: message.vrfPrecision! }, writer.uint32(34).fork()).ldelim();
    }
    if (message.vrfBaselineDifficulty !== undefined) {
      Ratio.encode(message.vrfBaselineDifficulty, writer.uint32(42).fork()).ldelim();
    }
    if (message.vrfAmplitude !== undefined) {
      Ratio.encode(message.vrfAmplitude, writer.uint32(50).fork()).ldelim();
    }
    if (message.chainSelectionKLookback !== undefined) {
      UInt64Value.encode({ value: message.chainSelectionKLookback! }, writer.uint32(58).fork()).ldelim();
    }
    if (message.slotDuration !== undefined) {
      Duration.encode(message.slotDuration, writer.uint32(66).fork()).ldelim();
    }
    if (message.forwardBiasedSlotWindow !== undefined) {
      UInt64Value.encode({ value: message.forwardBiasedSlotWindow! }, writer.uint32(74).fork()).ldelim();
    }
    if (message.operationalPeriodsPerEpoch !== undefined) {
      UInt64Value.encode({ value: message.operationalPeriodsPerEpoch! }, writer.uint32(82).fork()).ldelim();
    }
    if (message.kesKeyHours !== undefined) {
      UInt32Value.encode({ value: message.kesKeyHours! }, writer.uint32(90).fork()).ldelim();
    }
    if (message.kesKeyMinutes !== undefined) {
      UInt32Value.encode({ value: message.kesKeyMinutes! }, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Value_UpdateProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValue_UpdateProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.label = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fEffective = Ratio.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.vrfLddCutoff = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.vrfPrecision = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.vrfBaselineDifficulty = Ratio.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.vrfAmplitude = Ratio.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.chainSelectionKLookback = UInt64Value.decode(reader, reader.uint32()).value;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.slotDuration = Duration.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.forwardBiasedSlotWindow = UInt64Value.decode(reader, reader.uint32()).value;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.operationalPeriodsPerEpoch = UInt64Value.decode(reader, reader.uint32()).value;
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.kesKeyHours = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.kesKeyMinutes = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Value_UpdateProposal {
    return {
      label: isSet(object.label) ? globalThis.String(object.label) : "",
      fEffective: isSet(object.fEffective) ? Ratio.fromJSON(object.fEffective) : undefined,
      vrfLddCutoff: isSet(object.vrfLddCutoff) ? Number(object.vrfLddCutoff) : undefined,
      vrfPrecision: isSet(object.vrfPrecision) ? Number(object.vrfPrecision) : undefined,
      vrfBaselineDifficulty: isSet(object.vrfBaselineDifficulty)
        ? Ratio.fromJSON(object.vrfBaselineDifficulty)
        : undefined,
      vrfAmplitude: isSet(object.vrfAmplitude) ? Ratio.fromJSON(object.vrfAmplitude) : undefined,
      chainSelectionKLookback: isSet(object.chainSelectionKLookback)
        ? Number(object.chainSelectionKLookback)
        : undefined,
      slotDuration: isSet(object.slotDuration) ? Duration.fromJSON(object.slotDuration) : undefined,
      forwardBiasedSlotWindow: isSet(object.forwardBiasedSlotWindow)
        ? Number(object.forwardBiasedSlotWindow)
        : undefined,
      operationalPeriodsPerEpoch: isSet(object.operationalPeriodsPerEpoch)
        ? Number(object.operationalPeriodsPerEpoch)
        : undefined,
      kesKeyHours: isSet(object.kesKeyHours) ? Number(object.kesKeyHours) : undefined,
      kesKeyMinutes: isSet(object.kesKeyMinutes) ? Number(object.kesKeyMinutes) : undefined,
    };
  },

  toJSON(message: Value_UpdateProposal): unknown {
    const obj: any = {};
    if (message.label !== "") {
      obj.label = message.label;
    }
    if (message.fEffective !== undefined) {
      obj.fEffective = Ratio.toJSON(message.fEffective);
    }
    if (message.vrfLddCutoff !== undefined) {
      obj.vrfLddCutoff = message.vrfLddCutoff;
    }
    if (message.vrfPrecision !== undefined) {
      obj.vrfPrecision = message.vrfPrecision;
    }
    if (message.vrfBaselineDifficulty !== undefined) {
      obj.vrfBaselineDifficulty = Ratio.toJSON(message.vrfBaselineDifficulty);
    }
    if (message.vrfAmplitude !== undefined) {
      obj.vrfAmplitude = Ratio.toJSON(message.vrfAmplitude);
    }
    if (message.chainSelectionKLookback !== undefined) {
      obj.chainSelectionKLookback = message.chainSelectionKLookback;
    }
    if (message.slotDuration !== undefined) {
      obj.slotDuration = Duration.toJSON(message.slotDuration);
    }
    if (message.forwardBiasedSlotWindow !== undefined) {
      obj.forwardBiasedSlotWindow = message.forwardBiasedSlotWindow;
    }
    if (message.operationalPeriodsPerEpoch !== undefined) {
      obj.operationalPeriodsPerEpoch = message.operationalPeriodsPerEpoch;
    }
    if (message.kesKeyHours !== undefined) {
      obj.kesKeyHours = message.kesKeyHours;
    }
    if (message.kesKeyMinutes !== undefined) {
      obj.kesKeyMinutes = message.kesKeyMinutes;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Value_UpdateProposal>, I>>(base?: I): Value_UpdateProposal {
    return Value_UpdateProposal.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Value_UpdateProposal>, I>>(object: I): Value_UpdateProposal {
    const message = createBaseValue_UpdateProposal();
    message.label = object.label ?? "";
    message.fEffective = (object.fEffective !== undefined && object.fEffective !== null)
      ? Ratio.fromPartial(object.fEffective)
      : undefined;
    message.vrfLddCutoff = object.vrfLddCutoff ?? undefined;
    message.vrfPrecision = object.vrfPrecision ?? undefined;
    message.vrfBaselineDifficulty =
      (object.vrfBaselineDifficulty !== undefined && object.vrfBaselineDifficulty !== null)
        ? Ratio.fromPartial(object.vrfBaselineDifficulty)
        : undefined;
    message.vrfAmplitude = (object.vrfAmplitude !== undefined && object.vrfAmplitude !== null)
      ? Ratio.fromPartial(object.vrfAmplitude)
      : undefined;
    message.chainSelectionKLookback = object.chainSelectionKLookback ?? undefined;
    message.slotDuration = (object.slotDuration !== undefined && object.slotDuration !== null)
      ? Duration.fromPartial(object.slotDuration)
      : undefined;
    message.forwardBiasedSlotWindow = object.forwardBiasedSlotWindow ?? undefined;
    message.operationalPeriodsPerEpoch = object.operationalPeriodsPerEpoch ?? undefined;
    message.kesKeyHours = object.kesKeyHours ?? undefined;
    message.kesKeyMinutes = object.kesKeyMinutes ?? undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
