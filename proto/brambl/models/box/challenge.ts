/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Proposition } from "../../../quivr/models/proposition";
import { TransactionInputAddress } from "../address";

export const protobufPackage = "co.topl.brambl.models.box";

/**
 * Challenge is a single field message with its options being
 * one of RevealedProposition or PreviousProposition
 */
export interface Challenge {
  revealed?: Proposition | undefined;
  previous?: Challenge_PreviousProposition | undefined;
}

/**
 * Previousroposition requires two parameters
 * the transaction input address and index of the previously
 * revealed proposition.
 */
export interface Challenge_PreviousProposition {
  address: TransactionInputAddress | undefined;
  index: number;
}

function createBaseChallenge(): Challenge {
  return { revealed: undefined, previous: undefined };
}

export const Challenge = {
  encode(message: Challenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.revealed !== undefined) {
      Proposition.encode(message.revealed, writer.uint32(10).fork()).ldelim();
    }
    if (message.previous !== undefined) {
      Challenge_PreviousProposition.encode(message.previous, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.revealed = Proposition.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.previous = Challenge_PreviousProposition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Challenge {
    return {
      revealed: isSet(object.revealed) ? Proposition.fromJSON(object.revealed) : undefined,
      previous: isSet(object.previous) ? Challenge_PreviousProposition.fromJSON(object.previous) : undefined,
    };
  },

  toJSON(message: Challenge): unknown {
    const obj: any = {};
    if (message.revealed !== undefined) {
      obj.revealed = Proposition.toJSON(message.revealed);
    }
    if (message.previous !== undefined) {
      obj.previous = Challenge_PreviousProposition.toJSON(message.previous);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge>, I>>(base?: I): Challenge {
    return Challenge.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Challenge>, I>>(object: I): Challenge {
    const message = createBaseChallenge();
    message.revealed = (object.revealed !== undefined && object.revealed !== null)
      ? Proposition.fromPartial(object.revealed)
      : undefined;
    message.previous = (object.previous !== undefined && object.previous !== null)
      ? Challenge_PreviousProposition.fromPartial(object.previous)
      : undefined;
    return message;
  },
};

function createBaseChallenge_PreviousProposition(): Challenge_PreviousProposition {
  return { address: undefined, index: 0 };
}

export const Challenge_PreviousProposition = {
  encode(message: Challenge_PreviousProposition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== undefined) {
      TransactionInputAddress.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    if (message.index !== 0) {
      writer.uint32(16).uint32(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Challenge_PreviousProposition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallenge_PreviousProposition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = TransactionInputAddress.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.index = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Challenge_PreviousProposition {
    return {
      address: isSet(object.address) ? TransactionInputAddress.fromJSON(object.address) : undefined,
      index: isSet(object.index) ? globalThis.Number(object.index) : 0,
    };
  },

  toJSON(message: Challenge_PreviousProposition): unknown {
    const obj: any = {};
    if (message.address !== undefined) {
      obj.address = TransactionInputAddress.toJSON(message.address);
    }
    if (message.index !== 0) {
      obj.index = Math.round(message.index);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Challenge_PreviousProposition>, I>>(base?: I): Challenge_PreviousProposition {
    return Challenge_PreviousProposition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Challenge_PreviousProposition>, I>>(
    object: I,
  ): Challenge_PreviousProposition {
    const message = createBaseChallenge_PreviousProposition();
    message.address = (object.address !== undefined && object.address !== null)
      ? TransactionInputAddress.fromPartial(object.address)
      : undefined;
    message.index = object.index ?? 0;
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
