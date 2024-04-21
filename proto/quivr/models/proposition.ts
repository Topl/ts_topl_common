/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Data, Digest, Int128, VerificationKey } from "./shared";

export const protobufPackage = "quivr.models";

/** Condition that must be satisfied to unlock */
export interface Proposition {
  locked?: Proposition_Locked | undefined;
  digest?: Proposition_Digest | undefined;
  digitalSignature?: Proposition_DigitalSignature | undefined;
  heightRange?: Proposition_HeightRange | undefined;
  tickRange?: Proposition_TickRange | undefined;
  exactMatch?: Proposition_ExactMatch | undefined;
  lessThan?: Proposition_LessThan | undefined;
  greaterThan?: Proposition_GreaterThan | undefined;
  equalTo?: Proposition_EqualTo | undefined;
  threshold?: Proposition_Threshold | undefined;
  not?: Proposition_Not | undefined;
  and?: Proposition_And | undefined;
  or?: Proposition_Or | undefined;
}

/** Indicates that a proposition can never be satisfied */
export interface Proposition_Locked {
  /** Optional metadata */
  data: Data | undefined;
}

/** a proposition that can be satisfied if the proof contains the preimage matching the digest */
export interface Proposition_Digest {
  routine: string;
  digest: Digest | undefined;
}

/** a proposition that can be satisfied if the proof contains the signature */
export interface Proposition_DigitalSignature {
  routine: string;
  verificationKey: VerificationKey | undefined;
}

/** a proposition that can be satisfied if the specified chain falls within min and max height values */
export interface Proposition_HeightRange {
  chain: string;
  min: number;
  max: number;
}

/** a proposition that can be satisfied if the time value falls within the min and max */
export interface Proposition_TickRange {
  min: number;
  max: number;
}

/** a proposition that can be satisfied if the value at a location is an exact match of the compareTo value */
export interface Proposition_ExactMatch {
  location: string;
  compareTo: Uint8Array;
}

/** a proposition that can be satisfied if the value at a location is less than the compareTo value */
export interface Proposition_LessThan {
  location: string;
  compareTo: Int128 | undefined;
}

/** a proposition that can be satisfied if the value at a location is greater than the compareTo value */
export interface Proposition_GreaterThan {
  location: string;
  compareTo: Int128 | undefined;
}

/** a proposition that can be satisfied if the value (int) at a location is equal to the compareTo value */
export interface Proposition_EqualTo {
  location: string;
  compareTo: Int128 | undefined;
}

/** a proposition that can be satisfied if at least the threshold number of propositions are satisfied */
export interface Proposition_Threshold {
  challenges: Proposition[];
  threshold: number;
}

/** a proposition that can be satisfied if the proposition is contains is not satisfied */
export interface Proposition_Not {
  proposition: Proposition | undefined;
}

/** a proposition that can be satisfied if the prositions contained are both satisfied */
export interface Proposition_And {
  left: Proposition | undefined;
  right: Proposition | undefined;
}

/** a proposition that can be satisfied if either of the propositions contained are both satisfied */
export interface Proposition_Or {
  left: Proposition | undefined;
  right: Proposition | undefined;
}

function createBaseProposition(): Proposition {
  return {
    locked: undefined,
    digest: undefined,
    digitalSignature: undefined,
    heightRange: undefined,
    tickRange: undefined,
    exactMatch: undefined,
    lessThan: undefined,
    greaterThan: undefined,
    equalTo: undefined,
    threshold: undefined,
    not: undefined,
    and: undefined,
    or: undefined,
  };
}

export const Proposition = {
  encode(message: Proposition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.locked !== undefined) {
      Proposition_Locked.encode(message.locked, writer.uint32(10).fork()).ldelim();
    }
    if (message.digest !== undefined) {
      Proposition_Digest.encode(message.digest, writer.uint32(18).fork()).ldelim();
    }
    if (message.digitalSignature !== undefined) {
      Proposition_DigitalSignature.encode(message.digitalSignature, writer.uint32(26).fork()).ldelim();
    }
    if (message.heightRange !== undefined) {
      Proposition_HeightRange.encode(message.heightRange, writer.uint32(34).fork()).ldelim();
    }
    if (message.tickRange !== undefined) {
      Proposition_TickRange.encode(message.tickRange, writer.uint32(42).fork()).ldelim();
    }
    if (message.exactMatch !== undefined) {
      Proposition_ExactMatch.encode(message.exactMatch, writer.uint32(50).fork()).ldelim();
    }
    if (message.lessThan !== undefined) {
      Proposition_LessThan.encode(message.lessThan, writer.uint32(58).fork()).ldelim();
    }
    if (message.greaterThan !== undefined) {
      Proposition_GreaterThan.encode(message.greaterThan, writer.uint32(66).fork()).ldelim();
    }
    if (message.equalTo !== undefined) {
      Proposition_EqualTo.encode(message.equalTo, writer.uint32(74).fork()).ldelim();
    }
    if (message.threshold !== undefined) {
      Proposition_Threshold.encode(message.threshold, writer.uint32(82).fork()).ldelim();
    }
    if (message.not !== undefined) {
      Proposition_Not.encode(message.not, writer.uint32(90).fork()).ldelim();
    }
    if (message.and !== undefined) {
      Proposition_And.encode(message.and, writer.uint32(98).fork()).ldelim();
    }
    if (message.or !== undefined) {
      Proposition_Or.encode(message.or, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.locked = Proposition_Locked.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.digest = Proposition_Digest.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.digitalSignature = Proposition_DigitalSignature.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.heightRange = Proposition_HeightRange.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.tickRange = Proposition_TickRange.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.exactMatch = Proposition_ExactMatch.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.lessThan = Proposition_LessThan.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.greaterThan = Proposition_GreaterThan.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.equalTo = Proposition_EqualTo.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.threshold = Proposition_Threshold.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.not = Proposition_Not.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.and = Proposition_And.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.or = Proposition_Or.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proposition {
    return {
      locked: isSet(object.locked) ? Proposition_Locked.fromJSON(object.locked) : undefined,
      digest: isSet(object.digest) ? Proposition_Digest.fromJSON(object.digest) : undefined,
      digitalSignature: isSet(object.digitalSignature)
        ? Proposition_DigitalSignature.fromJSON(object.digitalSignature)
        : undefined,
      heightRange: isSet(object.heightRange) ? Proposition_HeightRange.fromJSON(object.heightRange) : undefined,
      tickRange: isSet(object.tickRange) ? Proposition_TickRange.fromJSON(object.tickRange) : undefined,
      exactMatch: isSet(object.exactMatch) ? Proposition_ExactMatch.fromJSON(object.exactMatch) : undefined,
      lessThan: isSet(object.lessThan) ? Proposition_LessThan.fromJSON(object.lessThan) : undefined,
      greaterThan: isSet(object.greaterThan) ? Proposition_GreaterThan.fromJSON(object.greaterThan) : undefined,
      equalTo: isSet(object.equalTo) ? Proposition_EqualTo.fromJSON(object.equalTo) : undefined,
      threshold: isSet(object.threshold) ? Proposition_Threshold.fromJSON(object.threshold) : undefined,
      not: isSet(object.not) ? Proposition_Not.fromJSON(object.not) : undefined,
      and: isSet(object.and) ? Proposition_And.fromJSON(object.and) : undefined,
      or: isSet(object.or) ? Proposition_Or.fromJSON(object.or) : undefined,
    };
  },

  toJSON(message: Proposition): unknown {
    const obj: any = {};
    if (message.locked !== undefined) {
      obj.locked = Proposition_Locked.toJSON(message.locked);
    }
    if (message.digest !== undefined) {
      obj.digest = Proposition_Digest.toJSON(message.digest);
    }
    if (message.digitalSignature !== undefined) {
      obj.digitalSignature = Proposition_DigitalSignature.toJSON(message.digitalSignature);
    }
    if (message.heightRange !== undefined) {
      obj.heightRange = Proposition_HeightRange.toJSON(message.heightRange);
    }
    if (message.tickRange !== undefined) {
      obj.tickRange = Proposition_TickRange.toJSON(message.tickRange);
    }
    if (message.exactMatch !== undefined) {
      obj.exactMatch = Proposition_ExactMatch.toJSON(message.exactMatch);
    }
    if (message.lessThan !== undefined) {
      obj.lessThan = Proposition_LessThan.toJSON(message.lessThan);
    }
    if (message.greaterThan !== undefined) {
      obj.greaterThan = Proposition_GreaterThan.toJSON(message.greaterThan);
    }
    if (message.equalTo !== undefined) {
      obj.equalTo = Proposition_EqualTo.toJSON(message.equalTo);
    }
    if (message.threshold !== undefined) {
      obj.threshold = Proposition_Threshold.toJSON(message.threshold);
    }
    if (message.not !== undefined) {
      obj.not = Proposition_Not.toJSON(message.not);
    }
    if (message.and !== undefined) {
      obj.and = Proposition_And.toJSON(message.and);
    }
    if (message.or !== undefined) {
      obj.or = Proposition_Or.toJSON(message.or);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proposition>, I>>(base?: I): Proposition {
    return Proposition.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proposition>, I>>(object: I): Proposition {
    const message = createBaseProposition();
    message.locked = (object.locked !== undefined && object.locked !== null)
      ? Proposition_Locked.fromPartial(object.locked)
      : undefined;
    message.digest = (object.digest !== undefined && object.digest !== null)
      ? Proposition_Digest.fromPartial(object.digest)
      : undefined;
    message.digitalSignature = (object.digitalSignature !== undefined && object.digitalSignature !== null)
      ? Proposition_DigitalSignature.fromPartial(object.digitalSignature)
      : undefined;
    message.heightRange = (object.heightRange !== undefined && object.heightRange !== null)
      ? Proposition_HeightRange.fromPartial(object.heightRange)
      : undefined;
    message.tickRange = (object.tickRange !== undefined && object.tickRange !== null)
      ? Proposition_TickRange.fromPartial(object.tickRange)
      : undefined;
    message.exactMatch = (object.exactMatch !== undefined && object.exactMatch !== null)
      ? Proposition_ExactMatch.fromPartial(object.exactMatch)
      : undefined;
    message.lessThan = (object.lessThan !== undefined && object.lessThan !== null)
      ? Proposition_LessThan.fromPartial(object.lessThan)
      : undefined;
    message.greaterThan = (object.greaterThan !== undefined && object.greaterThan !== null)
      ? Proposition_GreaterThan.fromPartial(object.greaterThan)
      : undefined;
    message.equalTo = (object.equalTo !== undefined && object.equalTo !== null)
      ? Proposition_EqualTo.fromPartial(object.equalTo)
      : undefined;
    message.threshold = (object.threshold !== undefined && object.threshold !== null)
      ? Proposition_Threshold.fromPartial(object.threshold)
      : undefined;
    message.not = (object.not !== undefined && object.not !== null)
      ? Proposition_Not.fromPartial(object.not)
      : undefined;
    message.and = (object.and !== undefined && object.and !== null)
      ? Proposition_And.fromPartial(object.and)
      : undefined;
    message.or = (object.or !== undefined && object.or !== null) ? Proposition_Or.fromPartial(object.or) : undefined;
    return message;
  },
};

function createBaseProposition_Locked(): Proposition_Locked {
  return { data: undefined };
}

export const Proposition_Locked = {
  encode(message: Proposition_Locked, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== undefined) {
      Data.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposition_Locked {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposition_Locked();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = Data.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proposition_Locked {
    return { data: isSet(object.data) ? Data.fromJSON(object.data) : undefined };
  },

  toJSON(message: Proposition_Locked): unknown {
    const obj: any = {};
    if (message.data !== undefined) {
      obj.data = Data.toJSON(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proposition_Locked>, I>>(base?: I): Proposition_Locked {
    return Proposition_Locked.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proposition_Locked>, I>>(object: I): Proposition_Locked {
    const message = createBaseProposition_Locked();
    message.data = (object.data !== undefined && object.data !== null) ? Data.fromPartial(object.data) : undefined;
    return message;
  },
};

function createBaseProposition_Digest(): Proposition_Digest {
  return { routine: "", digest: undefined };
}

export const Proposition_Digest = {
  encode(message: Proposition_Digest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.routine !== "") {
      writer.uint32(10).string(message.routine);
    }
    if (message.digest !== undefined) {
      Digest.encode(message.digest, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposition_Digest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposition_Digest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.routine = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.digest = Digest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proposition_Digest {
    return {
      routine: isSet(object.routine) ? globalThis.String(object.routine) : "",
      digest: isSet(object.digest) ? Digest.fromJSON(object.digest) : undefined,
    };
  },

  toJSON(message: Proposition_Digest): unknown {
    const obj: any = {};
    if (message.routine !== "") {
      obj.routine = message.routine;
    }
    if (message.digest !== undefined) {
      obj.digest = Digest.toJSON(message.digest);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proposition_Digest>, I>>(base?: I): Proposition_Digest {
    return Proposition_Digest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proposition_Digest>, I>>(object: I): Proposition_Digest {
    const message = createBaseProposition_Digest();
    message.routine = object.routine ?? "";
    message.digest = (object.digest !== undefined && object.digest !== null)
      ? Digest.fromPartial(object.digest)
      : undefined;
    return message;
  },
};

function createBaseProposition_DigitalSignature(): Proposition_DigitalSignature {
  return { routine: "", verificationKey: undefined };
}

export const Proposition_DigitalSignature = {
  encode(message: Proposition_DigitalSignature, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.routine !== "") {
      writer.uint32(10).string(message.routine);
    }
    if (message.verificationKey !== undefined) {
      VerificationKey.encode(message.verificationKey, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposition_DigitalSignature {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposition_DigitalSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.routine = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.verificationKey = VerificationKey.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proposition_DigitalSignature {
    return {
      routine: isSet(object.routine) ? globalThis.String(object.routine) : "",
      verificationKey: isSet(object.verificationKey) ? VerificationKey.fromJSON(object.verificationKey) : undefined,
    };
  },

  toJSON(message: Proposition_DigitalSignature): unknown {
    const obj: any = {};
    if (message.routine !== "") {
      obj.routine = message.routine;
    }
    if (message.verificationKey !== undefined) {
      obj.verificationKey = VerificationKey.toJSON(message.verificationKey);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proposition_DigitalSignature>, I>>(base?: I): Proposition_DigitalSignature {
    return Proposition_DigitalSignature.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proposition_DigitalSignature>, I>>(object: I): Proposition_DigitalSignature {
    const message = createBaseProposition_DigitalSignature();
    message.routine = object.routine ?? "";
    message.verificationKey = (object.verificationKey !== undefined && object.verificationKey !== null)
      ? VerificationKey.fromPartial(object.verificationKey)
      : undefined;
    return message;
  },
};

function createBaseProposition_HeightRange(): Proposition_HeightRange {
  return { chain: "", min: 0, max: 0 };
}

export const Proposition_HeightRange = {
  encode(message: Proposition_HeightRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.min !== 0) {
      writer.uint32(16).uint64(message.min);
    }
    if (message.max !== 0) {
      writer.uint32(24).uint64(message.max);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposition_HeightRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposition_HeightRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chain = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.min = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.max = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proposition_HeightRange {
    return {
      chain: isSet(object.chain) ? globalThis.String(object.chain) : "",
      min: isSet(object.min) ? globalThis.Number(object.min) : 0,
      max: isSet(object.max) ? globalThis.Number(object.max) : 0,
    };
  },

  toJSON(message: Proposition_HeightRange): unknown {
    const obj: any = {};
    if (message.chain !== "") {
      obj.chain = message.chain;
    }
    if (message.min !== 0) {
      obj.min = Math.round(message.min);
    }
    if (message.max !== 0) {
      obj.max = Math.round(message.max);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proposition_HeightRange>, I>>(base?: I): Proposition_HeightRange {
    return Proposition_HeightRange.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proposition_HeightRange>, I>>(object: I): Proposition_HeightRange {
    const message = createBaseProposition_HeightRange();
    message.chain = object.chain ?? "";
    message.min = object.min ?? 0;
    message.max = object.max ?? 0;
    return message;
  },
};

function createBaseProposition_TickRange(): Proposition_TickRange {
  return { min: 0, max: 0 };
}

export const Proposition_TickRange = {
  encode(message: Proposition_TickRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.min !== 0) {
      writer.uint32(8).uint64(message.min);
    }
    if (message.max !== 0) {
      writer.uint32(16).uint64(message.max);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposition_TickRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposition_TickRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.min = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.max = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proposition_TickRange {
    return {
      min: isSet(object.min) ? globalThis.Number(object.min) : 0,
      max: isSet(object.max) ? globalThis.Number(object.max) : 0,
    };
  },

  toJSON(message: Proposition_TickRange): unknown {
    const obj: any = {};
    if (message.min !== 0) {
      obj.min = Math.round(message.min);
    }
    if (message.max !== 0) {
      obj.max = Math.round(message.max);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proposition_TickRange>, I>>(base?: I): Proposition_TickRange {
    return Proposition_TickRange.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proposition_TickRange>, I>>(object: I): Proposition_TickRange {
    const message = createBaseProposition_TickRange();
    message.min = object.min ?? 0;
    message.max = object.max ?? 0;
    return message;
  },
};

function createBaseProposition_ExactMatch(): Proposition_ExactMatch {
  return { location: "", compareTo: new Uint8Array(0) };
}

export const Proposition_ExactMatch = {
  encode(message: Proposition_ExactMatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.location !== "") {
      writer.uint32(10).string(message.location);
    }
    if (message.compareTo.length !== 0) {
      writer.uint32(18).bytes(message.compareTo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposition_ExactMatch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposition_ExactMatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.location = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.compareTo = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proposition_ExactMatch {
    return {
      location: isSet(object.location) ? globalThis.String(object.location) : "",
      compareTo: isSet(object.compareTo) ? bytesFromBase64(object.compareTo) : new Uint8Array(0),
    };
  },

  toJSON(message: Proposition_ExactMatch): unknown {
    const obj: any = {};
    if (message.location !== "") {
      obj.location = message.location;
    }
    if (message.compareTo.length !== 0) {
      obj.compareTo = base64FromBytes(message.compareTo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proposition_ExactMatch>, I>>(base?: I): Proposition_ExactMatch {
    return Proposition_ExactMatch.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proposition_ExactMatch>, I>>(object: I): Proposition_ExactMatch {
    const message = createBaseProposition_ExactMatch();
    message.location = object.location ?? "";
    message.compareTo = object.compareTo ?? new Uint8Array(0);
    return message;
  },
};

function createBaseProposition_LessThan(): Proposition_LessThan {
  return { location: "", compareTo: undefined };
}

export const Proposition_LessThan = {
  encode(message: Proposition_LessThan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.location !== "") {
      writer.uint32(10).string(message.location);
    }
    if (message.compareTo !== undefined) {
      Int128.encode(message.compareTo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposition_LessThan {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposition_LessThan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.location = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.compareTo = Int128.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proposition_LessThan {
    return {
      location: isSet(object.location) ? globalThis.String(object.location) : "",
      compareTo: isSet(object.compareTo) ? Int128.fromJSON(object.compareTo) : undefined,
    };
  },

  toJSON(message: Proposition_LessThan): unknown {
    const obj: any = {};
    if (message.location !== "") {
      obj.location = message.location;
    }
    if (message.compareTo !== undefined) {
      obj.compareTo = Int128.toJSON(message.compareTo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proposition_LessThan>, I>>(base?: I): Proposition_LessThan {
    return Proposition_LessThan.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proposition_LessThan>, I>>(object: I): Proposition_LessThan {
    const message = createBaseProposition_LessThan();
    message.location = object.location ?? "";
    message.compareTo = (object.compareTo !== undefined && object.compareTo !== null)
      ? Int128.fromPartial(object.compareTo)
      : undefined;
    return message;
  },
};

function createBaseProposition_GreaterThan(): Proposition_GreaterThan {
  return { location: "", compareTo: undefined };
}

export const Proposition_GreaterThan = {
  encode(message: Proposition_GreaterThan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.location !== "") {
      writer.uint32(10).string(message.location);
    }
    if (message.compareTo !== undefined) {
      Int128.encode(message.compareTo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposition_GreaterThan {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposition_GreaterThan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.location = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.compareTo = Int128.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proposition_GreaterThan {
    return {
      location: isSet(object.location) ? globalThis.String(object.location) : "",
      compareTo: isSet(object.compareTo) ? Int128.fromJSON(object.compareTo) : undefined,
    };
  },

  toJSON(message: Proposition_GreaterThan): unknown {
    const obj: any = {};
    if (message.location !== "") {
      obj.location = message.location;
    }
    if (message.compareTo !== undefined) {
      obj.compareTo = Int128.toJSON(message.compareTo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proposition_GreaterThan>, I>>(base?: I): Proposition_GreaterThan {
    return Proposition_GreaterThan.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proposition_GreaterThan>, I>>(object: I): Proposition_GreaterThan {
    const message = createBaseProposition_GreaterThan();
    message.location = object.location ?? "";
    message.compareTo = (object.compareTo !== undefined && object.compareTo !== null)
      ? Int128.fromPartial(object.compareTo)
      : undefined;
    return message;
  },
};

function createBaseProposition_EqualTo(): Proposition_EqualTo {
  return { location: "", compareTo: undefined };
}

export const Proposition_EqualTo = {
  encode(message: Proposition_EqualTo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.location !== "") {
      writer.uint32(10).string(message.location);
    }
    if (message.compareTo !== undefined) {
      Int128.encode(message.compareTo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposition_EqualTo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposition_EqualTo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.location = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.compareTo = Int128.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proposition_EqualTo {
    return {
      location: isSet(object.location) ? globalThis.String(object.location) : "",
      compareTo: isSet(object.compareTo) ? Int128.fromJSON(object.compareTo) : undefined,
    };
  },

  toJSON(message: Proposition_EqualTo): unknown {
    const obj: any = {};
    if (message.location !== "") {
      obj.location = message.location;
    }
    if (message.compareTo !== undefined) {
      obj.compareTo = Int128.toJSON(message.compareTo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proposition_EqualTo>, I>>(base?: I): Proposition_EqualTo {
    return Proposition_EqualTo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proposition_EqualTo>, I>>(object: I): Proposition_EqualTo {
    const message = createBaseProposition_EqualTo();
    message.location = object.location ?? "";
    message.compareTo = (object.compareTo !== undefined && object.compareTo !== null)
      ? Int128.fromPartial(object.compareTo)
      : undefined;
    return message;
  },
};

function createBaseProposition_Threshold(): Proposition_Threshold {
  return { challenges: [], threshold: 0 };
}

export const Proposition_Threshold = {
  encode(message: Proposition_Threshold, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.challenges) {
      Proposition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.threshold !== 0) {
      writer.uint32(16).uint32(message.threshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposition_Threshold {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposition_Threshold();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.challenges.push(Proposition.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Proposition_Threshold {
    return {
      challenges: globalThis.Array.isArray(object?.challenges)
        ? object.challenges.map((e: any) => Proposition.fromJSON(e))
        : [],
      threshold: isSet(object.threshold) ? globalThis.Number(object.threshold) : 0,
    };
  },

  toJSON(message: Proposition_Threshold): unknown {
    const obj: any = {};
    if (message.challenges?.length) {
      obj.challenges = message.challenges.map((e) => Proposition.toJSON(e));
    }
    if (message.threshold !== 0) {
      obj.threshold = Math.round(message.threshold);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proposition_Threshold>, I>>(base?: I): Proposition_Threshold {
    return Proposition_Threshold.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proposition_Threshold>, I>>(object: I): Proposition_Threshold {
    const message = createBaseProposition_Threshold();
    message.challenges = object.challenges?.map((e) => Proposition.fromPartial(e)) || [];
    message.threshold = object.threshold ?? 0;
    return message;
  },
};

function createBaseProposition_Not(): Proposition_Not {
  return { proposition: undefined };
}

export const Proposition_Not = {
  encode(message: Proposition_Not, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposition !== undefined) {
      Proposition.encode(message.proposition, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposition_Not {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposition_Not();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proposition = Proposition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proposition_Not {
    return { proposition: isSet(object.proposition) ? Proposition.fromJSON(object.proposition) : undefined };
  },

  toJSON(message: Proposition_Not): unknown {
    const obj: any = {};
    if (message.proposition !== undefined) {
      obj.proposition = Proposition.toJSON(message.proposition);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proposition_Not>, I>>(base?: I): Proposition_Not {
    return Proposition_Not.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proposition_Not>, I>>(object: I): Proposition_Not {
    const message = createBaseProposition_Not();
    message.proposition = (object.proposition !== undefined && object.proposition !== null)
      ? Proposition.fromPartial(object.proposition)
      : undefined;
    return message;
  },
};

function createBaseProposition_And(): Proposition_And {
  return { left: undefined, right: undefined };
}

export const Proposition_And = {
  encode(message: Proposition_And, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.left !== undefined) {
      Proposition.encode(message.left, writer.uint32(10).fork()).ldelim();
    }
    if (message.right !== undefined) {
      Proposition.encode(message.right, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposition_And {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposition_And();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.left = Proposition.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.right = Proposition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proposition_And {
    return {
      left: isSet(object.left) ? Proposition.fromJSON(object.left) : undefined,
      right: isSet(object.right) ? Proposition.fromJSON(object.right) : undefined,
    };
  },

  toJSON(message: Proposition_And): unknown {
    const obj: any = {};
    if (message.left !== undefined) {
      obj.left = Proposition.toJSON(message.left);
    }
    if (message.right !== undefined) {
      obj.right = Proposition.toJSON(message.right);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proposition_And>, I>>(base?: I): Proposition_And {
    return Proposition_And.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proposition_And>, I>>(object: I): Proposition_And {
    const message = createBaseProposition_And();
    message.left = (object.left !== undefined && object.left !== null)
      ? Proposition.fromPartial(object.left)
      : undefined;
    message.right = (object.right !== undefined && object.right !== null)
      ? Proposition.fromPartial(object.right)
      : undefined;
    return message;
  },
};

function createBaseProposition_Or(): Proposition_Or {
  return { left: undefined, right: undefined };
}

export const Proposition_Or = {
  encode(message: Proposition_Or, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.left !== undefined) {
      Proposition.encode(message.left, writer.uint32(10).fork()).ldelim();
    }
    if (message.right !== undefined) {
      Proposition.encode(message.right, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposition_Or {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposition_Or();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.left = Proposition.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.right = Proposition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proposition_Or {
    return {
      left: isSet(object.left) ? Proposition.fromJSON(object.left) : undefined,
      right: isSet(object.right) ? Proposition.fromJSON(object.right) : undefined,
    };
  },

  toJSON(message: Proposition_Or): unknown {
    const obj: any = {};
    if (message.left !== undefined) {
      obj.left = Proposition.toJSON(message.left);
    }
    if (message.right !== undefined) {
      obj.right = Proposition.toJSON(message.right);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proposition_Or>, I>>(base?: I): Proposition_Or {
    return Proposition_Or.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proposition_Or>, I>>(object: I): Proposition_Or {
    const message = createBaseProposition_Or();
    message.left = (object.left !== undefined && object.left !== null)
      ? Proposition.fromPartial(object.left)
      : undefined;
    message.right = (object.right !== undefined && object.right !== null)
      ? Proposition.fromPartial(object.right)
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
