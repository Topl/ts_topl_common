/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Int128 } from "../../quivr/models/shared";

export const protobufPackage = "co.topl.proto.node";

/** Epoch data Contains, The "current" epoch is updated as node blocks are adopted over time */
export interface EpochData {
  /** epoch */
  epoch: number;
  /** eon */
  eon: number;
  /** era */
  era: number;
  /** Flag indicating if the epoch has been completed */
  isComplete: boolean;
  /** The height of the first block in the epoch */
  startHeight: number;
  /** The height of the last/latest block in the epoch */
  endHeight: number;
  /** The first slot of the epoch */
  startSlot: number;
  /** The final slot of the epoch */
  endSlot: number;
  /** The timestamp of the epoch start */
  startTimestamp: number;
  /** The timestamp of the epoch end */
  endTimestamp: number;
  /** The total number of transactions in this epoch */
  transactionCount: number;
  /** The sum of all transaction rewards in the epoch */
  totalTransactionReward:
    | Int128
    | undefined;
  /** The sum of all stake that is registered for the epoch */
  activeStake:
    | Int128
    | undefined;
  /** The sum of all stake that is not registered for the epoch */
  inactiveStake:
    | Int128
    | undefined;
  /** The sum total number of bytes of headers and transactions for the epoch */
  dataBytes: number;
}

function createBaseEpochData(): EpochData {
  return {
    epoch: 0,
    eon: 0,
    era: 0,
    isComplete: false,
    startHeight: 0,
    endHeight: 0,
    startSlot: 0,
    endSlot: 0,
    startTimestamp: 0,
    endTimestamp: 0,
    transactionCount: 0,
    totalTransactionReward: undefined,
    activeStake: undefined,
    inactiveStake: undefined,
    dataBytes: 0,
  };
}

export const EpochData = {
  encode(message: EpochData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epoch !== 0) {
      writer.uint32(8).uint64(message.epoch);
    }
    if (message.eon !== 0) {
      writer.uint32(16).uint64(message.eon);
    }
    if (message.era !== 0) {
      writer.uint32(24).uint64(message.era);
    }
    if (message.isComplete !== false) {
      writer.uint32(32).bool(message.isComplete);
    }
    if (message.startHeight !== 0) {
      writer.uint32(40).uint64(message.startHeight);
    }
    if (message.endHeight !== 0) {
      writer.uint32(48).uint64(message.endHeight);
    }
    if (message.startSlot !== 0) {
      writer.uint32(56).uint64(message.startSlot);
    }
    if (message.endSlot !== 0) {
      writer.uint32(64).uint64(message.endSlot);
    }
    if (message.startTimestamp !== 0) {
      writer.uint32(72).uint64(message.startTimestamp);
    }
    if (message.endTimestamp !== 0) {
      writer.uint32(80).uint64(message.endTimestamp);
    }
    if (message.transactionCount !== 0) {
      writer.uint32(88).uint64(message.transactionCount);
    }
    if (message.totalTransactionReward !== undefined) {
      Int128.encode(message.totalTransactionReward, writer.uint32(98).fork()).ldelim();
    }
    if (message.activeStake !== undefined) {
      Int128.encode(message.activeStake, writer.uint32(106).fork()).ldelim();
    }
    if (message.inactiveStake !== undefined) {
      Int128.encode(message.inactiveStake, writer.uint32(114).fork()).ldelim();
    }
    if (message.dataBytes !== 0) {
      writer.uint32(120).uint64(message.dataBytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.epoch = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.eon = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.era = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.isComplete = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.startHeight = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.endHeight = longToNumber(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.startSlot = longToNumber(reader.uint64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.endSlot = longToNumber(reader.uint64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.startTimestamp = longToNumber(reader.uint64() as Long);
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.endTimestamp = longToNumber(reader.uint64() as Long);
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.transactionCount = longToNumber(reader.uint64() as Long);
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.totalTransactionReward = Int128.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.activeStake = Int128.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.inactiveStake = Int128.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.dataBytes = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EpochData {
    return {
      epoch: isSet(object.epoch) ? globalThis.Number(object.epoch) : 0,
      eon: isSet(object.eon) ? globalThis.Number(object.eon) : 0,
      era: isSet(object.era) ? globalThis.Number(object.era) : 0,
      isComplete: isSet(object.isComplete) ? globalThis.Boolean(object.isComplete) : false,
      startHeight: isSet(object.startHeight) ? globalThis.Number(object.startHeight) : 0,
      endHeight: isSet(object.endHeight) ? globalThis.Number(object.endHeight) : 0,
      startSlot: isSet(object.startSlot) ? globalThis.Number(object.startSlot) : 0,
      endSlot: isSet(object.endSlot) ? globalThis.Number(object.endSlot) : 0,
      startTimestamp: isSet(object.startTimestamp) ? globalThis.Number(object.startTimestamp) : 0,
      endTimestamp: isSet(object.endTimestamp) ? globalThis.Number(object.endTimestamp) : 0,
      transactionCount: isSet(object.transactionCount) ? globalThis.Number(object.transactionCount) : 0,
      totalTransactionReward: isSet(object.totalTransactionReward)
        ? Int128.fromJSON(object.totalTransactionReward)
        : undefined,
      activeStake: isSet(object.activeStake) ? Int128.fromJSON(object.activeStake) : undefined,
      inactiveStake: isSet(object.inactiveStake) ? Int128.fromJSON(object.inactiveStake) : undefined,
      dataBytes: isSet(object.dataBytes) ? globalThis.Number(object.dataBytes) : 0,
    };
  },

  toJSON(message: EpochData): unknown {
    const obj: any = {};
    if (message.epoch !== 0) {
      obj.epoch = Math.round(message.epoch);
    }
    if (message.eon !== 0) {
      obj.eon = Math.round(message.eon);
    }
    if (message.era !== 0) {
      obj.era = Math.round(message.era);
    }
    if (message.isComplete !== false) {
      obj.isComplete = message.isComplete;
    }
    if (message.startHeight !== 0) {
      obj.startHeight = Math.round(message.startHeight);
    }
    if (message.endHeight !== 0) {
      obj.endHeight = Math.round(message.endHeight);
    }
    if (message.startSlot !== 0) {
      obj.startSlot = Math.round(message.startSlot);
    }
    if (message.endSlot !== 0) {
      obj.endSlot = Math.round(message.endSlot);
    }
    if (message.startTimestamp !== 0) {
      obj.startTimestamp = Math.round(message.startTimestamp);
    }
    if (message.endTimestamp !== 0) {
      obj.endTimestamp = Math.round(message.endTimestamp);
    }
    if (message.transactionCount !== 0) {
      obj.transactionCount = Math.round(message.transactionCount);
    }
    if (message.totalTransactionReward !== undefined) {
      obj.totalTransactionReward = Int128.toJSON(message.totalTransactionReward);
    }
    if (message.activeStake !== undefined) {
      obj.activeStake = Int128.toJSON(message.activeStake);
    }
    if (message.inactiveStake !== undefined) {
      obj.inactiveStake = Int128.toJSON(message.inactiveStake);
    }
    if (message.dataBytes !== 0) {
      obj.dataBytes = Math.round(message.dataBytes);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EpochData>, I>>(base?: I): EpochData {
    return EpochData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EpochData>, I>>(object: I): EpochData {
    const message = createBaseEpochData();
    message.epoch = object.epoch ?? 0;
    message.eon = object.eon ?? 0;
    message.era = object.era ?? 0;
    message.isComplete = object.isComplete ?? false;
    message.startHeight = object.startHeight ?? 0;
    message.endHeight = object.endHeight ?? 0;
    message.startSlot = object.startSlot ?? 0;
    message.endSlot = object.endSlot ?? 0;
    message.startTimestamp = object.startTimestamp ?? 0;
    message.endTimestamp = object.endTimestamp ?? 0;
    message.transactionCount = object.transactionCount ?? 0;
    message.totalTransactionReward =
      (object.totalTransactionReward !== undefined && object.totalTransactionReward !== null)
        ? Int128.fromPartial(object.totalTransactionReward)
        : undefined;
    message.activeStake = (object.activeStake !== undefined && object.activeStake !== null)
      ? Int128.fromPartial(object.activeStake)
      : undefined;
    message.inactiveStake = (object.inactiveStake !== undefined && object.inactiveStake !== null)
      ? Int128.fromPartial(object.inactiveStake)
      : undefined;
    message.dataBytes = object.dataBytes ?? 0;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
