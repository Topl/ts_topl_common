/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { LockId, TransactionId } from "./identifier";

export const protobufPackage = "co.topl.brambl.models";

/** Used in UTXOs */
export interface LockAddress {
  network: number;
  ledger: number;
  id: LockId | undefined;
}

/** Used in STXOs */
export interface TransactionOutputAddress {
  network: number;
  ledger: number;
  /** index of the output (UTXO) within the transaction targeted by id. */
  index: number;
  id: TransactionId | undefined;
}

/** Used in Challenge.PreviousProposition */
export interface TransactionInputAddress {
  network: number;
  ledger: number;
  index: number;
  id: TransactionId | undefined;
}

function createBaseLockAddress(): LockAddress {
  return { network: 0, ledger: 0, id: undefined };
}

export const LockAddress = {
  encode(message: LockAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.network !== 0) {
      writer.uint32(8).uint32(message.network);
    }
    if (message.ledger !== 0) {
      writer.uint32(16).uint32(message.ledger);
    }
    if (message.id !== undefined) {
      LockId.encode(message.id, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.network = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.ledger = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.id = LockId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LockAddress {
    return {
      network: isSet(object.network) ? globalThis.Number(object.network) : 0,
      ledger: isSet(object.ledger) ? globalThis.Number(object.ledger) : 0,
      id: isSet(object.id) ? LockId.fromJSON(object.id) : undefined,
    };
  },

  toJSON(message: LockAddress): unknown {
    const obj: any = {};
    if (message.network !== 0) {
      obj.network = Math.round(message.network);
    }
    if (message.ledger !== 0) {
      obj.ledger = Math.round(message.ledger);
    }
    if (message.id !== undefined) {
      obj.id = LockId.toJSON(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LockAddress>, I>>(base?: I): LockAddress {
    return LockAddress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LockAddress>, I>>(object: I): LockAddress {
    const message = createBaseLockAddress();
    message.network = object.network ?? 0;
    message.ledger = object.ledger ?? 0;
    message.id = (object.id !== undefined && object.id !== null) ? LockId.fromPartial(object.id) : undefined;
    return message;
  },
};

function createBaseTransactionOutputAddress(): TransactionOutputAddress {
  return { network: 0, ledger: 0, index: 0, id: undefined };
}

export const TransactionOutputAddress = {
  encode(message: TransactionOutputAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.network !== 0) {
      writer.uint32(8).uint32(message.network);
    }
    if (message.ledger !== 0) {
      writer.uint32(16).uint32(message.ledger);
    }
    if (message.index !== 0) {
      writer.uint32(24).uint32(message.index);
    }
    if (message.id !== undefined) {
      TransactionId.encode(message.id, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionOutputAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionOutputAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.network = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.ledger = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.id = TransactionId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransactionOutputAddress {
    return {
      network: isSet(object.network) ? globalThis.Number(object.network) : 0,
      ledger: isSet(object.ledger) ? globalThis.Number(object.ledger) : 0,
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
      id: isSet(object.id) ? TransactionId.fromJSON(object.id) : undefined,
    };
  },

  toJSON(message: TransactionOutputAddress): unknown {
    const obj: any = {};
    if (message.network !== 0) {
      obj.network = Math.round(message.network);
    }
    if (message.ledger !== 0) {
      obj.ledger = Math.round(message.ledger);
    }
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.id !== undefined) {
      obj.id = TransactionId.toJSON(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TransactionOutputAddress>, I>>(base?: I): TransactionOutputAddress {
    return TransactionOutputAddress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TransactionOutputAddress>, I>>(object: I): TransactionOutputAddress {
    const message = createBaseTransactionOutputAddress();
    message.network = object.network ?? 0;
    message.ledger = object.ledger ?? 0;
    message.index = object.index ?? 0;
    message.id = (object.id !== undefined && object.id !== null) ? TransactionId.fromPartial(object.id) : undefined;
    return message;
  },
};

function createBaseTransactionInputAddress(): TransactionInputAddress {
  return { network: 0, ledger: 0, index: 0, id: undefined };
}

export const TransactionInputAddress = {
  encode(message: TransactionInputAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.network !== 0) {
      writer.uint32(8).uint32(message.network);
    }
    if (message.ledger !== 0) {
      writer.uint32(16).uint32(message.ledger);
    }
    if (message.index !== 0) {
      writer.uint32(24).uint32(message.index);
    }
    if (message.id !== undefined) {
      TransactionId.encode(message.id, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionInputAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionInputAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.network = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.ledger = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.index = reader.uint32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.id = TransactionId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransactionInputAddress {
    return {
      network: isSet(object.network) ? globalThis.Number(object.network) : 0,
      ledger: isSet(object.ledger) ? globalThis.Number(object.ledger) : 0,
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
      id: isSet(object.id) ? TransactionId.fromJSON(object.id) : undefined,
    };
  },

  toJSON(message: TransactionInputAddress): unknown {
    const obj: any = {};
    if (message.network !== 0) {
      obj.network = Math.round(message.network);
    }
    if (message.ledger !== 0) {
      obj.ledger = Math.round(message.ledger);
    }
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    if (message.id !== undefined) {
      obj.id = TransactionId.toJSON(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TransactionInputAddress>, I>>(base?: I): TransactionInputAddress {
    return TransactionInputAddress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TransactionInputAddress>, I>>(object: I): TransactionInputAddress {
    const message = createBaseTransactionInputAddress();
    message.network = object.network ?? 0;
    message.ledger = object.ledger ?? 0;
    message.index = object.index ?? 0;
    message.id = (object.id !== undefined && object.id !== null) ? TransactionId.fromPartial(object.id) : undefined;
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
