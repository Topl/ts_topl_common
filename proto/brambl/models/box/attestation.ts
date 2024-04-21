/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Proof } from "../../../quivr/models/proof";
import { Witness } from "../../../quivr/models/shared";
import { Challenge } from "./challenge";
import { Lock_Commitment, Lock_Image, Lock_Predicate } from "./lock";

export const protobufPackage = "co.topl.brambl.models.box";

/** encapsulates the lock and responses are used to satisfy locks (may be successful or unsuccessful) */
export interface Attestation {
  predicate?: Attestation_Predicate | undefined;
  image?: Attestation_Image | undefined;
  commitment?: Attestation_Commitment | undefined;
}

export interface Attestation_Predicate {
  lock:
    | Lock_Predicate
    | undefined;
  /** list of optional values (proofs used to attempt to satisfy the challenges contained in the predicate lock) */
  responses: Proof[];
}

export interface Attestation_Image {
  lock:
    | Lock_Image
    | undefined;
  /** list of optional values */
  known: Challenge[];
  /** list of optional values */
  responses: Proof[];
}

export interface Attestation_Commitment {
  lock:
    | Lock_Commitment
    | undefined;
  /** list of claim propositions that must be proven as memebrs of the root commitment and be suitably satisfied by the given proofs */
  known: Challenge[];
  /** list of witnesses for proving membership of claimed propositions */
  witness: Witness[];
  /** list of optional values */
  responses: Proof[];
}

function createBaseAttestation(): Attestation {
  return { predicate: undefined, image: undefined, commitment: undefined };
}

export const Attestation = {
  encode(message: Attestation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.predicate !== undefined) {
      Attestation_Predicate.encode(message.predicate, writer.uint32(10).fork()).ldelim();
    }
    if (message.image !== undefined) {
      Attestation_Image.encode(message.image, writer.uint32(18).fork()).ldelim();
    }
    if (message.commitment !== undefined) {
      Attestation_Commitment.encode(message.commitment, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attestation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttestation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.predicate = Attestation_Predicate.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.image = Attestation_Image.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.commitment = Attestation_Commitment.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Attestation {
    return {
      predicate: isSet(object.predicate) ? Attestation_Predicate.fromJSON(object.predicate) : undefined,
      image: isSet(object.image) ? Attestation_Image.fromJSON(object.image) : undefined,
      commitment: isSet(object.commitment) ? Attestation_Commitment.fromJSON(object.commitment) : undefined,
    };
  },

  toJSON(message: Attestation): unknown {
    const obj: any = {};
    if (message.predicate !== undefined) {
      obj.predicate = Attestation_Predicate.toJSON(message.predicate);
    }
    if (message.image !== undefined) {
      obj.image = Attestation_Image.toJSON(message.image);
    }
    if (message.commitment !== undefined) {
      obj.commitment = Attestation_Commitment.toJSON(message.commitment);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Attestation>, I>>(base?: I): Attestation {
    return Attestation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Attestation>, I>>(object: I): Attestation {
    const message = createBaseAttestation();
    message.predicate = (object.predicate !== undefined && object.predicate !== null)
      ? Attestation_Predicate.fromPartial(object.predicate)
      : undefined;
    message.image = (object.image !== undefined && object.image !== null)
      ? Attestation_Image.fromPartial(object.image)
      : undefined;
    message.commitment = (object.commitment !== undefined && object.commitment !== null)
      ? Attestation_Commitment.fromPartial(object.commitment)
      : undefined;
    return message;
  },
};

function createBaseAttestation_Predicate(): Attestation_Predicate {
  return { lock: undefined, responses: [] };
}

export const Attestation_Predicate = {
  encode(message: Attestation_Predicate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lock !== undefined) {
      Lock_Predicate.encode(message.lock, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.responses) {
      Proof.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attestation_Predicate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttestation_Predicate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lock = Lock_Predicate.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.responses.push(Proof.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Attestation_Predicate {
    return {
      lock: isSet(object.lock) ? Lock_Predicate.fromJSON(object.lock) : undefined,
      responses: globalThis.Array.isArray(object?.responses) ? object.responses.map((e: any) => Proof.fromJSON(e)) : [],
    };
  },

  toJSON(message: Attestation_Predicate): unknown {
    const obj: any = {};
    if (message.lock !== undefined) {
      obj.lock = Lock_Predicate.toJSON(message.lock);
    }
    if (message.responses?.length) {
      obj.responses = message.responses.map((e) => Proof.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Attestation_Predicate>, I>>(base?: I): Attestation_Predicate {
    return Attestation_Predicate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Attestation_Predicate>, I>>(object: I): Attestation_Predicate {
    const message = createBaseAttestation_Predicate();
    message.lock = (object.lock !== undefined && object.lock !== null)
      ? Lock_Predicate.fromPartial(object.lock)
      : undefined;
    message.responses = object.responses?.map((e) => Proof.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAttestation_Image(): Attestation_Image {
  return { lock: undefined, known: [], responses: [] };
}

export const Attestation_Image = {
  encode(message: Attestation_Image, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lock !== undefined) {
      Lock_Image.encode(message.lock, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.known) {
      Challenge.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.responses) {
      Proof.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attestation_Image {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttestation_Image();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lock = Lock_Image.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.known.push(Challenge.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.responses.push(Proof.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Attestation_Image {
    return {
      lock: isSet(object.lock) ? Lock_Image.fromJSON(object.lock) : undefined,
      known: globalThis.Array.isArray(object?.known) ? object.known.map((e: any) => Challenge.fromJSON(e)) : [],
      responses: globalThis.Array.isArray(object?.responses) ? object.responses.map((e: any) => Proof.fromJSON(e)) : [],
    };
  },

  toJSON(message: Attestation_Image): unknown {
    const obj: any = {};
    if (message.lock !== undefined) {
      obj.lock = Lock_Image.toJSON(message.lock);
    }
    if (message.known?.length) {
      obj.known = message.known.map((e) => Challenge.toJSON(e));
    }
    if (message.responses?.length) {
      obj.responses = message.responses.map((e) => Proof.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Attestation_Image>, I>>(base?: I): Attestation_Image {
    return Attestation_Image.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Attestation_Image>, I>>(object: I): Attestation_Image {
    const message = createBaseAttestation_Image();
    message.lock = (object.lock !== undefined && object.lock !== null)
      ? Lock_Image.fromPartial(object.lock)
      : undefined;
    message.known = object.known?.map((e) => Challenge.fromPartial(e)) || [];
    message.responses = object.responses?.map((e) => Proof.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAttestation_Commitment(): Attestation_Commitment {
  return { lock: undefined, known: [], witness: [], responses: [] };
}

export const Attestation_Commitment = {
  encode(message: Attestation_Commitment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lock !== undefined) {
      Lock_Commitment.encode(message.lock, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.known) {
      Challenge.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.witness) {
      Witness.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.responses) {
      Proof.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attestation_Commitment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttestation_Commitment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lock = Lock_Commitment.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.known.push(Challenge.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.witness.push(Witness.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.responses.push(Proof.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Attestation_Commitment {
    return {
      lock: isSet(object.lock) ? Lock_Commitment.fromJSON(object.lock) : undefined,
      known: globalThis.Array.isArray(object?.known) ? object.known.map((e: any) => Challenge.fromJSON(e)) : [],
      witness: globalThis.Array.isArray(object?.witness) ? object.witness.map((e: any) => Witness.fromJSON(e)) : [],
      responses: globalThis.Array.isArray(object?.responses) ? object.responses.map((e: any) => Proof.fromJSON(e)) : [],
    };
  },

  toJSON(message: Attestation_Commitment): unknown {
    const obj: any = {};
    if (message.lock !== undefined) {
      obj.lock = Lock_Commitment.toJSON(message.lock);
    }
    if (message.known?.length) {
      obj.known = message.known.map((e) => Challenge.toJSON(e));
    }
    if (message.witness?.length) {
      obj.witness = message.witness.map((e) => Witness.toJSON(e));
    }
    if (message.responses?.length) {
      obj.responses = message.responses.map((e) => Proof.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Attestation_Commitment>, I>>(base?: I): Attestation_Commitment {
    return Attestation_Commitment.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Attestation_Commitment>, I>>(object: I): Attestation_Commitment {
    const message = createBaseAttestation_Commitment();
    message.lock = (object.lock !== undefined && object.lock !== null)
      ? Lock_Commitment.fromPartial(object.lock)
      : undefined;
    message.known = object.known?.map((e) => Challenge.fromPartial(e)) || [];
    message.witness = object.witness?.map((e) => Witness.fromPartial(e)) || [];
    message.responses = object.responses?.map((e) => Proof.fromPartial(e)) || [];
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
