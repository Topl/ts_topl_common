/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { AccumulatorRootId, LockId } from "../identifier";
import { Challenge } from "./challenge";

export const protobufPackage = "co.topl.brambl.models.box";

/**
 * used to lock a box value and needs to be satisfied in order for the value of the box to be spent
 * should be able to calculate or retrieve the root of the Lock
 * - from Predicate -> Image -> Commitment -> Signable -> Evidence
 */
export interface Lock {
  predicate?: Lock_Predicate | undefined;
  image?: Lock_Image | undefined;
  commitment?: Lock_Commitment | undefined;
}

/**
 * Private information
 * a Predicate is a type of lock that will be satisfied if at least the threshold number of the contained proposition are satisfied
 */
export interface Lock_Predicate {
  /** this should probably be a non-empty chain */
  challenges: Challenge[];
  threshold: number;
}

/**
 * Semi-public information
 * The most commonly shared construction between parties
 */
export interface Lock_Image {
  leaves: LockId[];
  threshold: number;
}

/**
 * todo: jaa - should disable ot figure out how to provide the needed witness in the attestation
 * Public information
 * Predicate Commitments are used to encumber boxes
 * use a Root here so we can provide a membership proof of the conditions
 */
export interface Lock_Commitment {
  root: AccumulatorRootId | undefined;
  threshold: number;
}

function createBaseLock(): Lock {
  return { predicate: undefined, image: undefined, commitment: undefined };
}

export const Lock = {
  encode(message: Lock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.predicate !== undefined) {
      Lock_Predicate.encode(message.predicate, writer.uint32(10).fork()).ldelim();
    }
    if (message.image !== undefined) {
      Lock_Image.encode(message.image, writer.uint32(18).fork()).ldelim();
    }
    if (message.commitment !== undefined) {
      Lock_Commitment.encode(message.commitment, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Lock {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.predicate = Lock_Predicate.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.image = Lock_Image.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.commitment = Lock_Commitment.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Lock {
    return {
      predicate: isSet(object.predicate) ? Lock_Predicate.fromJSON(object.predicate) : undefined,
      image: isSet(object.image) ? Lock_Image.fromJSON(object.image) : undefined,
      commitment: isSet(object.commitment) ? Lock_Commitment.fromJSON(object.commitment) : undefined,
    };
  },

  toJSON(message: Lock): unknown {
    const obj: any = {};
    if (message.predicate !== undefined) {
      obj.predicate = Lock_Predicate.toJSON(message.predicate);
    }
    if (message.image !== undefined) {
      obj.image = Lock_Image.toJSON(message.image);
    }
    if (message.commitment !== undefined) {
      obj.commitment = Lock_Commitment.toJSON(message.commitment);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Lock>, I>>(base?: I): Lock {
    return Lock.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Lock>, I>>(object: I): Lock {
    const message = createBaseLock();
    message.predicate = (object.predicate !== undefined && object.predicate !== null)
      ? Lock_Predicate.fromPartial(object.predicate)
      : undefined;
    message.image = (object.image !== undefined && object.image !== null)
      ? Lock_Image.fromPartial(object.image)
      : undefined;
    message.commitment = (object.commitment !== undefined && object.commitment !== null)
      ? Lock_Commitment.fromPartial(object.commitment)
      : undefined;
    return message;
  },
};

function createBaseLock_Predicate(): Lock_Predicate {
  return { challenges: [], threshold: 0 };
}

export const Lock_Predicate = {
  encode(message: Lock_Predicate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.challenges) {
      Challenge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.threshold !== 0) {
      writer.uint32(16).uint32(message.threshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Lock_Predicate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLock_Predicate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.challenges.push(Challenge.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.threshold = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Lock_Predicate {
    return {
      challenges: globalThis.Array.isArray(object?.challenges)
        ? object.challenges.map((e: any) => Challenge.fromJSON(e))
        : [],
      threshold: isSet(object.threshold) ? globalThis.Number(object.threshold) : 0,
    };
  },

  toJSON(message: Lock_Predicate): unknown {
    const obj: any = {};
    if (message.challenges?.length) {
      obj.challenges = message.challenges.map((e) => Challenge.toJSON(e));
    }
    if (message.threshold !== 0) {
      obj.threshold = Math.round(message.threshold);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Lock_Predicate>, I>>(base?: I): Lock_Predicate {
    return Lock_Predicate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Lock_Predicate>, I>>(object: I): Lock_Predicate {
    const message = createBaseLock_Predicate();
    message.challenges = object.challenges?.map((e) => Challenge.fromPartial(e)) || [];
    message.threshold = object.threshold ?? 0;
    return message;
  },
};

function createBaseLock_Image(): Lock_Image {
  return { leaves: [], threshold: 0 };
}

export const Lock_Image = {
  encode(message: Lock_Image, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.leaves) {
      LockId.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.threshold !== 0) {
      writer.uint32(16).uint32(message.threshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Lock_Image {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLock_Image();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.leaves.push(LockId.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.threshold = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Lock_Image {
    return {
      leaves: globalThis.Array.isArray(object?.leaves) ? object.leaves.map((e: any) => LockId.fromJSON(e)) : [],
      threshold: isSet(object.threshold) ? globalThis.Number(object.threshold) : 0,
    };
  },

  toJSON(message: Lock_Image): unknown {
    const obj: any = {};
    if (message.leaves?.length) {
      obj.leaves = message.leaves.map((e) => LockId.toJSON(e));
    }
    if (message.threshold !== 0) {
      obj.threshold = Math.round(message.threshold);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Lock_Image>, I>>(base?: I): Lock_Image {
    return Lock_Image.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Lock_Image>, I>>(object: I): Lock_Image {
    const message = createBaseLock_Image();
    message.leaves = object.leaves?.map((e) => LockId.fromPartial(e)) || [];
    message.threshold = object.threshold ?? 0;
    return message;
  },
};

function createBaseLock_Commitment(): Lock_Commitment {
  return { root: undefined, threshold: 0 };
}

export const Lock_Commitment = {
  encode(message: Lock_Commitment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.root !== undefined) {
      AccumulatorRootId.encode(message.root, writer.uint32(10).fork()).ldelim();
    }
    if (message.threshold !== 0) {
      writer.uint32(16).uint32(message.threshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Lock_Commitment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLock_Commitment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.root = AccumulatorRootId.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.threshold = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Lock_Commitment {
    return {
      root: isSet(object.root) ? AccumulatorRootId.fromJSON(object.root) : undefined,
      threshold: isSet(object.threshold) ? globalThis.Number(object.threshold) : 0,
    };
  },

  toJSON(message: Lock_Commitment): unknown {
    const obj: any = {};
    if (message.root !== undefined) {
      obj.root = AccumulatorRootId.toJSON(message.root);
    }
    if (message.threshold !== 0) {
      obj.threshold = Math.round(message.threshold);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Lock_Commitment>, I>>(base?: I): Lock_Commitment {
    return Lock_Commitment.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Lock_Commitment>, I>>(object: I): Lock_Commitment {
    const message = createBaseLock_Commitment();
    message.root = (object.root !== undefined && object.root !== null)
      ? AccumulatorRootId.fromPartial(object.root)
      : undefined;
    message.threshold = object.threshold ?? 0;
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
