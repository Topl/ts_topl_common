/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { LockAddress } from "../address";
import { Value } from "../box/value";

export const protobufPackage = "co.topl.brambl.models.transaction";

/** output of a transaction */
export interface UnspentTransactionOutput {
  address: LockAddress | undefined;
  value: Value | undefined;
}

function createBaseUnspentTransactionOutput(): UnspentTransactionOutput {
  return { address: undefined, value: undefined };
}

export const UnspentTransactionOutput = {
  encode(message: UnspentTransactionOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== undefined) {
      LockAddress.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnspentTransactionOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnspentTransactionOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = LockAddress.decode(reader, reader.uint32());
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

  fromJSON(object: any): UnspentTransactionOutput {
    return {
      address: isSet(object.address) ? LockAddress.fromJSON(object.address) : undefined,
      value: isSet(object.value) ? Value.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: UnspentTransactionOutput): unknown {
    const obj: any = {};
    if (message.address !== undefined) {
      obj.address = LockAddress.toJSON(message.address);
    }
    if (message.value !== undefined) {
      obj.value = Value.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UnspentTransactionOutput>, I>>(base?: I): UnspentTransactionOutput {
    return UnspentTransactionOutput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UnspentTransactionOutput>, I>>(object: I): UnspentTransactionOutput {
    const message = createBaseUnspentTransactionOutput();
    message.address = (object.address !== undefined && object.address !== null)
      ? LockAddress.fromPartial(object.address)
      : undefined;
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
