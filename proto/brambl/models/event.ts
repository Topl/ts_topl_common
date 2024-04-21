/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Struct } from "../../google/protobuf/struct";
import { UInt32Value } from "../../google/protobuf/wrappers";
import { SmallData } from "../../quivr/models/shared";
import { TransactionOutputAddress } from "./address";
import {
  FungibilityType,
  fungibilityTypeFromJSON,
  fungibilityTypeToJSON,
  QuantityDescriptorType,
  quantityDescriptorTypeFromJSON,
  quantityDescriptorTypeToJSON,
} from "./box/asset";
import { SeriesId } from "./identifier";
import { Schedule } from "./transaction/schedule";

export const protobufPackage = "co.topl.brambl.models";

/**
 * Events are uniquely identifiable occurrences of state mutations within the blockchain protocol.
 * Each event is associated with certain data that may be updated every tick.
 */
export interface Event {
  /** hard fork */
  eon?:
    | Event_Eon
    | undefined;
  /** configuration change */
  era?:
    | Event_Era
    | undefined;
  /** length of time in slots where stake updates occur */
  epoch?:
    | Event_Epoch
    | undefined;
  /** Header created */
  header?:
    | Event_Header
    | undefined;
  /** IO Transaction */
  ioTransaction?:
    | Event_IoTransaction
    | undefined;
  /** Group policy */
  groupPolicy?:
    | Event_GroupPolicy
    | undefined;
  /** Series policy */
  seriesPolicy?: Event_SeriesPolicy | undefined;
}

export interface Event_Eon {
  beginSlot: number;
  height: number;
}

export interface Event_Era {
  beginSlot: number;
  height: number;
}

export interface Event_Epoch {
  beginSlot: number;
  height: number;
}

export interface Event_Header {
  height: number;
}

export interface Event_IoTransaction {
  /** the range of acceptable slots the transaction can be accepted into */
  schedule: Schedule | undefined;
  metadata: SmallData | undefined;
}

export interface Event_GroupPolicy {
  /** Identifies the group policy for humans (do not confuse with the actual group identifier) */
  label: string;
  /** The address of a UTXO. The UTXO contains the LVLs that are paid for minting the group constructor token. */
  registrationUtxo:
    | TransactionOutputAddress
    | undefined;
  /** An optional series identifier. When this series identifier is defined, this groups that implement this policy can only be used to mint assets with the aforementioned series identifier */
  fixedSeries: SeriesId | undefined;
}

export interface Event_SeriesPolicy {
  /** The human readable name of this series. (do not confuse with the actual series identifier) */
  label: string;
  /**
   * This is an optional field. When provided it fixes the quantity of tokens that will be minted when this series is consumed,
   * and the series constructor is burned by the minting transaction.
   * When not provided, the series constructor is not burned, thus making the token supply unlimited.
   */
  tokenSupply:
    | number
    | undefined;
  /** The address of a UTXO. The UTXO contains the LVLs that are paid for minting the series constructor token. */
  registrationUtxo:
    | TransactionOutputAddress
    | undefined;
  /** Describes the behavior of the quantity field of the assets minted using the series constructor derived from this policy. */
  quantityDescriptor: QuantityDescriptorType;
  /** Describes the fungibility of the assets minted using the series constructor token derived from this policy. */
  fungibility: FungibilityType;
  /** Describes the schema of the data stored in the metadata field of the Asset Minting Statement. */
  ephemeralMetadataScheme:
    | { [key: string]: any }
    | undefined;
  /** Describes the schema of the data stored in the Asset Token. */
  permanentMetadataScheme: { [key: string]: any } | undefined;
}

function createBaseEvent(): Event {
  return {
    eon: undefined,
    era: undefined,
    epoch: undefined,
    header: undefined,
    ioTransaction: undefined,
    groupPolicy: undefined,
    seriesPolicy: undefined,
  };
}

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eon !== undefined) {
      Event_Eon.encode(message.eon, writer.uint32(10).fork()).ldelim();
    }
    if (message.era !== undefined) {
      Event_Era.encode(message.era, writer.uint32(18).fork()).ldelim();
    }
    if (message.epoch !== undefined) {
      Event_Epoch.encode(message.epoch, writer.uint32(26).fork()).ldelim();
    }
    if (message.header !== undefined) {
      Event_Header.encode(message.header, writer.uint32(34).fork()).ldelim();
    }
    if (message.ioTransaction !== undefined) {
      Event_IoTransaction.encode(message.ioTransaction, writer.uint32(42).fork()).ldelim();
    }
    if (message.groupPolicy !== undefined) {
      Event_GroupPolicy.encode(message.groupPolicy, writer.uint32(50).fork()).ldelim();
    }
    if (message.seriesPolicy !== undefined) {
      Event_SeriesPolicy.encode(message.seriesPolicy, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.eon = Event_Eon.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.era = Event_Era.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.epoch = Event_Epoch.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.header = Event_Header.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.ioTransaction = Event_IoTransaction.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.groupPolicy = Event_GroupPolicy.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.seriesPolicy = Event_SeriesPolicy.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Event {
    return {
      eon: isSet(object.eon) ? Event_Eon.fromJSON(object.eon) : undefined,
      era: isSet(object.era) ? Event_Era.fromJSON(object.era) : undefined,
      epoch: isSet(object.epoch) ? Event_Epoch.fromJSON(object.epoch) : undefined,
      header: isSet(object.header) ? Event_Header.fromJSON(object.header) : undefined,
      ioTransaction: isSet(object.ioTransaction) ? Event_IoTransaction.fromJSON(object.ioTransaction) : undefined,
      groupPolicy: isSet(object.groupPolicy) ? Event_GroupPolicy.fromJSON(object.groupPolicy) : undefined,
      seriesPolicy: isSet(object.seriesPolicy) ? Event_SeriesPolicy.fromJSON(object.seriesPolicy) : undefined,
    };
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    if (message.eon !== undefined) {
      obj.eon = Event_Eon.toJSON(message.eon);
    }
    if (message.era !== undefined) {
      obj.era = Event_Era.toJSON(message.era);
    }
    if (message.epoch !== undefined) {
      obj.epoch = Event_Epoch.toJSON(message.epoch);
    }
    if (message.header !== undefined) {
      obj.header = Event_Header.toJSON(message.header);
    }
    if (message.ioTransaction !== undefined) {
      obj.ioTransaction = Event_IoTransaction.toJSON(message.ioTransaction);
    }
    if (message.groupPolicy !== undefined) {
      obj.groupPolicy = Event_GroupPolicy.toJSON(message.groupPolicy);
    }
    if (message.seriesPolicy !== undefined) {
      obj.seriesPolicy = Event_SeriesPolicy.toJSON(message.seriesPolicy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Event>, I>>(base?: I): Event {
    return Event.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Event>, I>>(object: I): Event {
    const message = createBaseEvent();
    message.eon = (object.eon !== undefined && object.eon !== null) ? Event_Eon.fromPartial(object.eon) : undefined;
    message.era = (object.era !== undefined && object.era !== null) ? Event_Era.fromPartial(object.era) : undefined;
    message.epoch = (object.epoch !== undefined && object.epoch !== null)
      ? Event_Epoch.fromPartial(object.epoch)
      : undefined;
    message.header = (object.header !== undefined && object.header !== null)
      ? Event_Header.fromPartial(object.header)
      : undefined;
    message.ioTransaction = (object.ioTransaction !== undefined && object.ioTransaction !== null)
      ? Event_IoTransaction.fromPartial(object.ioTransaction)
      : undefined;
    message.groupPolicy = (object.groupPolicy !== undefined && object.groupPolicy !== null)
      ? Event_GroupPolicy.fromPartial(object.groupPolicy)
      : undefined;
    message.seriesPolicy = (object.seriesPolicy !== undefined && object.seriesPolicy !== null)
      ? Event_SeriesPolicy.fromPartial(object.seriesPolicy)
      : undefined;
    return message;
  },
};

function createBaseEvent_Eon(): Event_Eon {
  return { beginSlot: 0, height: 0 };
}

export const Event_Eon = {
  encode(message: Event_Eon, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.beginSlot !== 0) {
      writer.uint32(8).uint64(message.beginSlot);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event_Eon {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent_Eon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.beginSlot = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.height = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Event_Eon {
    return {
      beginSlot: isSet(object.beginSlot) ? globalThis.Number(object.beginSlot) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
    };
  },

  toJSON(message: Event_Eon): unknown {
    const obj: any = {};
    if (message.beginSlot !== 0) {
      obj.beginSlot = Math.round(message.beginSlot);
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Event_Eon>, I>>(base?: I): Event_Eon {
    return Event_Eon.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Event_Eon>, I>>(object: I): Event_Eon {
    const message = createBaseEvent_Eon();
    message.beginSlot = object.beginSlot ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseEvent_Era(): Event_Era {
  return { beginSlot: 0, height: 0 };
}

export const Event_Era = {
  encode(message: Event_Era, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.beginSlot !== 0) {
      writer.uint32(8).uint64(message.beginSlot);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event_Era {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent_Era();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.beginSlot = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.height = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Event_Era {
    return {
      beginSlot: isSet(object.beginSlot) ? globalThis.Number(object.beginSlot) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
    };
  },

  toJSON(message: Event_Era): unknown {
    const obj: any = {};
    if (message.beginSlot !== 0) {
      obj.beginSlot = Math.round(message.beginSlot);
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Event_Era>, I>>(base?: I): Event_Era {
    return Event_Era.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Event_Era>, I>>(object: I): Event_Era {
    const message = createBaseEvent_Era();
    message.beginSlot = object.beginSlot ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseEvent_Epoch(): Event_Epoch {
  return { beginSlot: 0, height: 0 };
}

export const Event_Epoch = {
  encode(message: Event_Epoch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.beginSlot !== 0) {
      writer.uint32(8).uint64(message.beginSlot);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event_Epoch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent_Epoch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.beginSlot = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.height = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Event_Epoch {
    return {
      beginSlot: isSet(object.beginSlot) ? globalThis.Number(object.beginSlot) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
    };
  },

  toJSON(message: Event_Epoch): unknown {
    const obj: any = {};
    if (message.beginSlot !== 0) {
      obj.beginSlot = Math.round(message.beginSlot);
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Event_Epoch>, I>>(base?: I): Event_Epoch {
    return Event_Epoch.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Event_Epoch>, I>>(object: I): Event_Epoch {
    const message = createBaseEvent_Epoch();
    message.beginSlot = object.beginSlot ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseEvent_Header(): Event_Header {
  return { height: 0 };
}

export const Event_Header = {
  encode(message: Event_Header, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).uint64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event_Header {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent_Header();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.height = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Event_Header {
    return { height: isSet(object.height) ? globalThis.Number(object.height) : 0 };
  },

  toJSON(message: Event_Header): unknown {
    const obj: any = {};
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Event_Header>, I>>(base?: I): Event_Header {
    return Event_Header.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Event_Header>, I>>(object: I): Event_Header {
    const message = createBaseEvent_Header();
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseEvent_IoTransaction(): Event_IoTransaction {
  return { schedule: undefined, metadata: undefined };
}

export const Event_IoTransaction = {
  encode(message: Event_IoTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schedule !== undefined) {
      Schedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
    }
    if (message.metadata !== undefined) {
      SmallData.encode(message.metadata, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event_IoTransaction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent_IoTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.schedule = Schedule.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.metadata = SmallData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Event_IoTransaction {
    return {
      schedule: isSet(object.schedule) ? Schedule.fromJSON(object.schedule) : undefined,
      metadata: isSet(object.metadata) ? SmallData.fromJSON(object.metadata) : undefined,
    };
  },

  toJSON(message: Event_IoTransaction): unknown {
    const obj: any = {};
    if (message.schedule !== undefined) {
      obj.schedule = Schedule.toJSON(message.schedule);
    }
    if (message.metadata !== undefined) {
      obj.metadata = SmallData.toJSON(message.metadata);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Event_IoTransaction>, I>>(base?: I): Event_IoTransaction {
    return Event_IoTransaction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Event_IoTransaction>, I>>(object: I): Event_IoTransaction {
    const message = createBaseEvent_IoTransaction();
    message.schedule = (object.schedule !== undefined && object.schedule !== null)
      ? Schedule.fromPartial(object.schedule)
      : undefined;
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? SmallData.fromPartial(object.metadata)
      : undefined;
    return message;
  },
};

function createBaseEvent_GroupPolicy(): Event_GroupPolicy {
  return { label: "", registrationUtxo: undefined, fixedSeries: undefined };
}

export const Event_GroupPolicy = {
  encode(message: Event_GroupPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.label !== "") {
      writer.uint32(10).string(message.label);
    }
    if (message.registrationUtxo !== undefined) {
      TransactionOutputAddress.encode(message.registrationUtxo, writer.uint32(18).fork()).ldelim();
    }
    if (message.fixedSeries !== undefined) {
      SeriesId.encode(message.fixedSeries, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event_GroupPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent_GroupPolicy();
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

          message.registrationUtxo = TransactionOutputAddress.decode(reader, reader.uint32());
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

  fromJSON(object: any): Event_GroupPolicy {
    return {
      label: isSet(object.label) ? globalThis.String(object.label) : "",
      registrationUtxo: isSet(object.registrationUtxo)
        ? TransactionOutputAddress.fromJSON(object.registrationUtxo)
        : undefined,
      fixedSeries: isSet(object.fixedSeries) ? SeriesId.fromJSON(object.fixedSeries) : undefined,
    };
  },

  toJSON(message: Event_GroupPolicy): unknown {
    const obj: any = {};
    if (message.label !== "") {
      obj.label = message.label;
    }
    if (message.registrationUtxo !== undefined) {
      obj.registrationUtxo = TransactionOutputAddress.toJSON(message.registrationUtxo);
    }
    if (message.fixedSeries !== undefined) {
      obj.fixedSeries = SeriesId.toJSON(message.fixedSeries);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Event_GroupPolicy>, I>>(base?: I): Event_GroupPolicy {
    return Event_GroupPolicy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Event_GroupPolicy>, I>>(object: I): Event_GroupPolicy {
    const message = createBaseEvent_GroupPolicy();
    message.label = object.label ?? "";
    message.registrationUtxo = (object.registrationUtxo !== undefined && object.registrationUtxo !== null)
      ? TransactionOutputAddress.fromPartial(object.registrationUtxo)
      : undefined;
    message.fixedSeries = (object.fixedSeries !== undefined && object.fixedSeries !== null)
      ? SeriesId.fromPartial(object.fixedSeries)
      : undefined;
    return message;
  },
};

function createBaseEvent_SeriesPolicy(): Event_SeriesPolicy {
  return {
    label: "",
    tokenSupply: undefined,
    registrationUtxo: undefined,
    quantityDescriptor: 0,
    fungibility: 0,
    ephemeralMetadataScheme: undefined,
    permanentMetadataScheme: undefined,
  };
}

export const Event_SeriesPolicy = {
  encode(message: Event_SeriesPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.label !== "") {
      writer.uint32(10).string(message.label);
    }
    if (message.tokenSupply !== undefined) {
      UInt32Value.encode({ value: message.tokenSupply! }, writer.uint32(18).fork()).ldelim();
    }
    if (message.registrationUtxo !== undefined) {
      TransactionOutputAddress.encode(message.registrationUtxo, writer.uint32(26).fork()).ldelim();
    }
    if (message.quantityDescriptor !== 0) {
      writer.uint32(32).int32(message.quantityDescriptor);
    }
    if (message.fungibility !== 0) {
      writer.uint32(40).int32(message.fungibility);
    }
    if (message.ephemeralMetadataScheme !== undefined) {
      Struct.encode(Struct.wrap(message.ephemeralMetadataScheme), writer.uint32(50).fork()).ldelim();
    }
    if (message.permanentMetadataScheme !== undefined) {
      Struct.encode(Struct.wrap(message.permanentMetadataScheme), writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event_SeriesPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent_SeriesPolicy();
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

          message.tokenSupply = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.registrationUtxo = TransactionOutputAddress.decode(reader, reader.uint32());
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
        case 6:
          if (tag !== 50) {
            break;
          }

          message.ephemeralMetadataScheme = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.permanentMetadataScheme = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Event_SeriesPolicy {
    return {
      label: isSet(object.label) ? globalThis.String(object.label) : "",
      tokenSupply: isSet(object.tokenSupply) ? Number(object.tokenSupply) : undefined,
      registrationUtxo: isSet(object.registrationUtxo)
        ? TransactionOutputAddress.fromJSON(object.registrationUtxo)
        : undefined,
      quantityDescriptor: isSet(object.quantityDescriptor)
        ? quantityDescriptorTypeFromJSON(object.quantityDescriptor)
        : 0,
      fungibility: isSet(object.fungibility) ? fungibilityTypeFromJSON(object.fungibility) : 0,
      ephemeralMetadataScheme: isObject(object.ephemeralMetadataScheme) ? object.ephemeralMetadataScheme : undefined,
      permanentMetadataScheme: isObject(object.permanentMetadataScheme) ? object.permanentMetadataScheme : undefined,
    };
  },

  toJSON(message: Event_SeriesPolicy): unknown {
    const obj: any = {};
    if (message.label !== "") {
      obj.label = message.label;
    }
    if (message.tokenSupply !== undefined) {
      obj.tokenSupply = message.tokenSupply;
    }
    if (message.registrationUtxo !== undefined) {
      obj.registrationUtxo = TransactionOutputAddress.toJSON(message.registrationUtxo);
    }
    if (message.quantityDescriptor !== 0) {
      obj.quantityDescriptor = quantityDescriptorTypeToJSON(message.quantityDescriptor);
    }
    if (message.fungibility !== 0) {
      obj.fungibility = fungibilityTypeToJSON(message.fungibility);
    }
    if (message.ephemeralMetadataScheme !== undefined) {
      obj.ephemeralMetadataScheme = message.ephemeralMetadataScheme;
    }
    if (message.permanentMetadataScheme !== undefined) {
      obj.permanentMetadataScheme = message.permanentMetadataScheme;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Event_SeriesPolicy>, I>>(base?: I): Event_SeriesPolicy {
    return Event_SeriesPolicy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Event_SeriesPolicy>, I>>(object: I): Event_SeriesPolicy {
    const message = createBaseEvent_SeriesPolicy();
    message.label = object.label ?? "";
    message.tokenSupply = object.tokenSupply ?? undefined;
    message.registrationUtxo = (object.registrationUtxo !== undefined && object.registrationUtxo !== null)
      ? TransactionOutputAddress.fromPartial(object.registrationUtxo)
      : undefined;
    message.quantityDescriptor = object.quantityDescriptor ?? 0;
    message.fungibility = object.fungibility ?? 0;
    message.ephemeralMetadataScheme = object.ephemeralMetadataScheme ?? undefined;
    message.permanentMetadataScheme = object.permanentMetadataScheme ?? undefined;
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

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
