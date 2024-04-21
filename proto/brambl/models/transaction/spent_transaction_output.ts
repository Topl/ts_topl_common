/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { TransactionOutputAddress } from "../address";
import { Attestation } from "../box/attestation";
import { Value } from "../box/value";

export const protobufPackage = "co.topl.brambl.models.transaction";

/** Input to a transaction */
export interface SpentTransactionOutput {
  address: TransactionOutputAddress | undefined;
  attestation:
    | Attestation
    | undefined;
  /** the value of the box being spent */
  value: Value | undefined;
}

function createBaseSpentTransactionOutput(): SpentTransactionOutput {
  return { address: undefined, attestation: undefined, value: undefined };
}

export const SpentTransactionOutput = {
  encode(message: SpentTransactionOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== undefined) {
      TransactionOutputAddress.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    if (message.attestation !== undefined) {
      Attestation.encode(message.attestation, writer.uint32(18).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpentTransactionOutput {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpentTransactionOutput();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = TransactionOutputAddress.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.attestation = Attestation.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): SpentTransactionOutput {
    return {
      address: isSet(object.address) ? TransactionOutputAddress.fromJSON(object.address) : undefined,
      attestation: isSet(object.attestation) ? Attestation.fromJSON(object.attestation) : undefined,
      value: isSet(object.value) ? Value.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SpentTransactionOutput): unknown {
    const obj: any = {};
    if (message.address !== undefined) {
      obj.address = TransactionOutputAddress.toJSON(message.address);
    }
    if (message.attestation !== undefined) {
      obj.attestation = Attestation.toJSON(message.attestation);
    }
    if (message.value !== undefined) {
      obj.value = Value.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SpentTransactionOutput>, I>>(base?: I): SpentTransactionOutput {
    return SpentTransactionOutput.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SpentTransactionOutput>, I>>(object: I): SpentTransactionOutput {
    const message = createBaseSpentTransactionOutput();
    message.address = (object.address !== undefined && object.address !== null)
      ? TransactionOutputAddress.fromPartial(object.address)
      : undefined;
    message.attestation = (object.attestation !== undefined && object.attestation !== null)
      ? Attestation.fromPartial(object.attestation)
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
