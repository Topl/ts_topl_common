/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "co.topl.proto.node";

/** Contains the configurations of the node over time */
export interface NodeConfig {
  /** Slot number */
  slot: number;
  /** Configured slot duration */
  slotDurationMillis: number;
  /** Node computed epochLength */
  epochLength: number;
}

function createBaseNodeConfig(): NodeConfig {
  return { slot: 0, slotDurationMillis: 0, epochLength: 0 };
}

export const NodeConfig = {
  encode(message: NodeConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slot !== 0) {
      writer.uint32(8).uint64(message.slot);
    }
    if (message.slotDurationMillis !== 0) {
      writer.uint32(16).uint64(message.slotDurationMillis);
    }
    if (message.epochLength !== 0) {
      writer.uint32(24).uint64(message.epochLength);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeConfig();
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
          if (tag !== 16) {
            break;
          }

          message.slotDurationMillis = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.epochLength = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NodeConfig {
    return {
      slot: isSet(object.slot) ? globalThis.Number(object.slot) : 0,
      slotDurationMillis: isSet(object.slotDurationMillis) ? globalThis.Number(object.slotDurationMillis) : 0,
      epochLength: isSet(object.epochLength) ? globalThis.Number(object.epochLength) : 0,
    };
  },

  toJSON(message: NodeConfig): unknown {
    const obj: any = {};
    if (message.slot !== 0) {
      obj.slot = Math.round(message.slot);
    }
    if (message.slotDurationMillis !== 0) {
      obj.slotDurationMillis = Math.round(message.slotDurationMillis);
    }
    if (message.epochLength !== 0) {
      obj.epochLength = Math.round(message.epochLength);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeConfig>, I>>(base?: I): NodeConfig {
    return NodeConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodeConfig>, I>>(object: I): NodeConfig {
    const message = createBaseNodeConfig();
    message.slot = object.slot ?? 0;
    message.slotDurationMillis = object.slotDurationMillis ?? 0;
    message.epochLength = object.epochLength ?? 0;
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
