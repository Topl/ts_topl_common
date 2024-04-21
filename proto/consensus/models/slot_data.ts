/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { BlockId } from "./block_id";

export const protobufPackage = "co.topl.consensus.models";

/** Represents a "mini" block header, containing just a subset of its data needed to quickly inspect consensus characteristics of a block */
export interface SlotData {
  /** The slot ID corresponding to "this" block */
  slotId:
    | SlotId
    | undefined;
  /** The slot ID corresponding to "this" block's parent */
  parentSlotId:
    | SlotId
    | undefined;
  /**
   * The "rho" corresponding to "this" block
   * length = 64
   */
  rho: Uint8Array;
  /**
   * The "eta" corresponding to "this" block
   * length = 32
   */
  eta: Uint8Array;
  /** The height of "this" block */
  height: number;
}

/** A glorified tuple */
export interface SlotId {
  /** The slot in which a block was created */
  slot: number;
  /** The ID of the block */
  blockId: BlockId | undefined;
}

function createBaseSlotData(): SlotData {
  return { slotId: undefined, parentSlotId: undefined, rho: new Uint8Array(0), eta: new Uint8Array(0), height: 0 };
}

export const SlotData = {
  encode(message: SlotData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slotId !== undefined) {
      SlotId.encode(message.slotId, writer.uint32(10).fork()).ldelim();
    }
    if (message.parentSlotId !== undefined) {
      SlotId.encode(message.parentSlotId, writer.uint32(18).fork()).ldelim();
    }
    if (message.rho.length !== 0) {
      writer.uint32(26).bytes(message.rho);
    }
    if (message.eta.length !== 0) {
      writer.uint32(34).bytes(message.eta);
    }
    if (message.height !== 0) {
      writer.uint32(40).uint64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SlotData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlotData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.slotId = SlotId.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.parentSlotId = SlotId.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rho = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.eta = reader.bytes();
          continue;
        case 5:
          if (tag !== 40) {
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

  fromJSON(object: any): SlotData {
    return {
      slotId: isSet(object.slotId) ? SlotId.fromJSON(object.slotId) : undefined,
      parentSlotId: isSet(object.parentSlotId) ? SlotId.fromJSON(object.parentSlotId) : undefined,
      rho: isSet(object.rho) ? bytesFromBase64(object.rho) : new Uint8Array(0),
      eta: isSet(object.eta) ? bytesFromBase64(object.eta) : new Uint8Array(0),
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
    };
  },

  toJSON(message: SlotData): unknown {
    const obj: any = {};
    if (message.slotId !== undefined) {
      obj.slotId = SlotId.toJSON(message.slotId);
    }
    if (message.parentSlotId !== undefined) {
      obj.parentSlotId = SlotId.toJSON(message.parentSlotId);
    }
    if (message.rho.length !== 0) {
      obj.rho = base64FromBytes(message.rho);
    }
    if (message.eta.length !== 0) {
      obj.eta = base64FromBytes(message.eta);
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SlotData>, I>>(base?: I): SlotData {
    return SlotData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SlotData>, I>>(object: I): SlotData {
    const message = createBaseSlotData();
    message.slotId = (object.slotId !== undefined && object.slotId !== null)
      ? SlotId.fromPartial(object.slotId)
      : undefined;
    message.parentSlotId = (object.parentSlotId !== undefined && object.parentSlotId !== null)
      ? SlotId.fromPartial(object.parentSlotId)
      : undefined;
    message.rho = object.rho ?? new Uint8Array(0);
    message.eta = object.eta ?? new Uint8Array(0);
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseSlotId(): SlotId {
  return { slot: 0, blockId: undefined };
}

export const SlotId = {
  encode(message: SlotId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slot !== 0) {
      writer.uint32(8).uint64(message.slot);
    }
    if (message.blockId !== undefined) {
      BlockId.encode(message.blockId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SlotId {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlotId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.slot = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.blockId = BlockId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SlotId {
    return {
      slot: isSet(object.slot) ? globalThis.Number(object.slot) : 0,
      blockId: isSet(object.blockId) ? BlockId.fromJSON(object.blockId) : undefined,
    };
  },

  toJSON(message: SlotId): unknown {
    const obj: any = {};
    if (message.slot !== 0) {
      obj.slot = Math.round(message.slot);
    }
    if (message.blockId !== undefined) {
      obj.blockId = BlockId.toJSON(message.blockId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SlotId>, I>>(base?: I): SlotId {
    return SlotId.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SlotId>, I>>(object: I): SlotId {
    const message = createBaseSlotId();
    message.slot = object.slot ?? 0;
    message.blockId = (object.blockId !== undefined && object.blockId !== null)
      ? BlockId.fromPartial(object.blockId)
      : undefined;
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
