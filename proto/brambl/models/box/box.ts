/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Lock } from "./lock";
import { Value } from "./value";

export const protobufPackage = "co.topl.brambl.models.box";

/** encapsulates a value and lock that is needed to be satisfied in order to unlock value */
export interface Box {
  lock: Lock | undefined;
  value: Value | undefined;
}

function createBaseBox(): Box {
  return { lock: undefined, value: undefined };
}

export const Box = {
  encode(message: Box, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lock !== undefined) {
      Lock.encode(message.lock, writer.uint32(10).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Box {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBox();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lock = Lock.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = Value.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Box {
    return {
      lock: isSet(object.lock) ? Lock.fromJSON(object.lock) : undefined,
      value: isSet(object.value) ? Value.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: Box): unknown {
    const obj: any = {};
    if (message.lock !== undefined) {
      obj.lock = Lock.toJSON(message.lock);
    }
    if (message.value !== undefined) {
      obj.value = Value.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Box>, I>>(base?: I): Box {
    return Box.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Box>, I>>(object: I): Box {
    const message = createBaseBox();
    message.lock = (object.lock !== undefined && object.lock !== null) ? Lock.fromPartial(object.lock) : undefined;
    message.value = (object.value !== undefined && object.value !== null) ? Value.fromPartial(object.value) : undefined;
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
