/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Preimage, TxBind, Witness } from "./shared";

export const protobufPackage = "quivr.models";

/** Proofs that are used to satisfy propositions */
export interface Proof {
  locked?: Proof_Locked | undefined;
  digest?: Proof_Digest | undefined;
  digitalSignature?: Proof_DigitalSignature | undefined;
  heightRange?: Proof_HeightRange | undefined;
  tickRange?: Proof_TickRange | undefined;
  exactMatch?: Proof_ExactMatch | undefined;
  lessThan?: Proof_LessThan | undefined;
  greaterThan?: Proof_GreaterThan | undefined;
  equalTo?: Proof_EqualTo | undefined;
  threshold?: Proof_Threshold | undefined;
  not?: Proof_Not | undefined;
  and?: Proof_And | undefined;
  or?: Proof_Or | undefined;
}

/** token = "locked" */
export interface Proof_Locked {
}

/** token = "digest" */
export interface Proof_Digest {
  transactionBind: TxBind | undefined;
  preimage: Preimage | undefined;
}

/** token = "digital_signature" */
export interface Proof_DigitalSignature {
  transactionBind: TxBind | undefined;
  witness: Witness | undefined;
}

/** token = "height_range" */
export interface Proof_HeightRange {
  transactionBind: TxBind | undefined;
}

/** token = "tick_range" */
export interface Proof_TickRange {
  transactionBind: TxBind | undefined;
}

/** token = "exact_match" */
export interface Proof_ExactMatch {
  transactionBind: TxBind | undefined;
}

/** token = "less_than" */
export interface Proof_LessThan {
  transactionBind: TxBind | undefined;
}

/** token = "greater_than" */
export interface Proof_GreaterThan {
  transactionBind: TxBind | undefined;
}

/** token = "equal_to" */
export interface Proof_EqualTo {
  transactionBind: TxBind | undefined;
}

/** token = "threshold" */
export interface Proof_Threshold {
  transactionBind:
    | TxBind
    | undefined;
  /** set of optional values */
  responses: Proof[];
}

/** token = "not" */
export interface Proof_Not {
  transactionBind: TxBind | undefined;
  proof: Proof | undefined;
}

/** token = "and" */
export interface Proof_And {
  transactionBind: TxBind | undefined;
  left: Proof | undefined;
  right: Proof | undefined;
}

/** token = "or" */
export interface Proof_Or {
  transactionBind: TxBind | undefined;
  left: Proof | undefined;
  right: Proof | undefined;
}

function createBaseProof(): Proof {
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

export const Proof = {
  encode(message: Proof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.locked !== undefined) {
      Proof_Locked.encode(message.locked, writer.uint32(10).fork()).ldelim();
    }
    if (message.digest !== undefined) {
      Proof_Digest.encode(message.digest, writer.uint32(18).fork()).ldelim();
    }
    if (message.digitalSignature !== undefined) {
      Proof_DigitalSignature.encode(message.digitalSignature, writer.uint32(26).fork()).ldelim();
    }
    if (message.heightRange !== undefined) {
      Proof_HeightRange.encode(message.heightRange, writer.uint32(34).fork()).ldelim();
    }
    if (message.tickRange !== undefined) {
      Proof_TickRange.encode(message.tickRange, writer.uint32(42).fork()).ldelim();
    }
    if (message.exactMatch !== undefined) {
      Proof_ExactMatch.encode(message.exactMatch, writer.uint32(50).fork()).ldelim();
    }
    if (message.lessThan !== undefined) {
      Proof_LessThan.encode(message.lessThan, writer.uint32(58).fork()).ldelim();
    }
    if (message.greaterThan !== undefined) {
      Proof_GreaterThan.encode(message.greaterThan, writer.uint32(66).fork()).ldelim();
    }
    if (message.equalTo !== undefined) {
      Proof_EqualTo.encode(message.equalTo, writer.uint32(74).fork()).ldelim();
    }
    if (message.threshold !== undefined) {
      Proof_Threshold.encode(message.threshold, writer.uint32(82).fork()).ldelim();
    }
    if (message.not !== undefined) {
      Proof_Not.encode(message.not, writer.uint32(90).fork()).ldelim();
    }
    if (message.and !== undefined) {
      Proof_And.encode(message.and, writer.uint32(98).fork()).ldelim();
    }
    if (message.or !== undefined) {
      Proof_Or.encode(message.or, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proof {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.locked = Proof_Locked.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.digest = Proof_Digest.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.digitalSignature = Proof_DigitalSignature.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.heightRange = Proof_HeightRange.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.tickRange = Proof_TickRange.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.exactMatch = Proof_ExactMatch.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.lessThan = Proof_LessThan.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.greaterThan = Proof_GreaterThan.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.equalTo = Proof_EqualTo.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.threshold = Proof_Threshold.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.not = Proof_Not.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.and = Proof_And.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.or = Proof_Or.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proof {
    return {
      locked: isSet(object.locked) ? Proof_Locked.fromJSON(object.locked) : undefined,
      digest: isSet(object.digest) ? Proof_Digest.fromJSON(object.digest) : undefined,
      digitalSignature: isSet(object.digitalSignature)
        ? Proof_DigitalSignature.fromJSON(object.digitalSignature)
        : undefined,
      heightRange: isSet(object.heightRange) ? Proof_HeightRange.fromJSON(object.heightRange) : undefined,
      tickRange: isSet(object.tickRange) ? Proof_TickRange.fromJSON(object.tickRange) : undefined,
      exactMatch: isSet(object.exactMatch) ? Proof_ExactMatch.fromJSON(object.exactMatch) : undefined,
      lessThan: isSet(object.lessThan) ? Proof_LessThan.fromJSON(object.lessThan) : undefined,
      greaterThan: isSet(object.greaterThan) ? Proof_GreaterThan.fromJSON(object.greaterThan) : undefined,
      equalTo: isSet(object.equalTo) ? Proof_EqualTo.fromJSON(object.equalTo) : undefined,
      threshold: isSet(object.threshold) ? Proof_Threshold.fromJSON(object.threshold) : undefined,
      not: isSet(object.not) ? Proof_Not.fromJSON(object.not) : undefined,
      and: isSet(object.and) ? Proof_And.fromJSON(object.and) : undefined,
      or: isSet(object.or) ? Proof_Or.fromJSON(object.or) : undefined,
    };
  },

  toJSON(message: Proof): unknown {
    const obj: any = {};
    if (message.locked !== undefined) {
      obj.locked = Proof_Locked.toJSON(message.locked);
    }
    if (message.digest !== undefined) {
      obj.digest = Proof_Digest.toJSON(message.digest);
    }
    if (message.digitalSignature !== undefined) {
      obj.digitalSignature = Proof_DigitalSignature.toJSON(message.digitalSignature);
    }
    if (message.heightRange !== undefined) {
      obj.heightRange = Proof_HeightRange.toJSON(message.heightRange);
    }
    if (message.tickRange !== undefined) {
      obj.tickRange = Proof_TickRange.toJSON(message.tickRange);
    }
    if (message.exactMatch !== undefined) {
      obj.exactMatch = Proof_ExactMatch.toJSON(message.exactMatch);
    }
    if (message.lessThan !== undefined) {
      obj.lessThan = Proof_LessThan.toJSON(message.lessThan);
    }
    if (message.greaterThan !== undefined) {
      obj.greaterThan = Proof_GreaterThan.toJSON(message.greaterThan);
    }
    if (message.equalTo !== undefined) {
      obj.equalTo = Proof_EqualTo.toJSON(message.equalTo);
    }
    if (message.threshold !== undefined) {
      obj.threshold = Proof_Threshold.toJSON(message.threshold);
    }
    if (message.not !== undefined) {
      obj.not = Proof_Not.toJSON(message.not);
    }
    if (message.and !== undefined) {
      obj.and = Proof_And.toJSON(message.and);
    }
    if (message.or !== undefined) {
      obj.or = Proof_Or.toJSON(message.or);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proof>, I>>(base?: I): Proof {
    return Proof.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proof>, I>>(object: I): Proof {
    const message = createBaseProof();
    message.locked = (object.locked !== undefined && object.locked !== null)
      ? Proof_Locked.fromPartial(object.locked)
      : undefined;
    message.digest = (object.digest !== undefined && object.digest !== null)
      ? Proof_Digest.fromPartial(object.digest)
      : undefined;
    message.digitalSignature = (object.digitalSignature !== undefined && object.digitalSignature !== null)
      ? Proof_DigitalSignature.fromPartial(object.digitalSignature)
      : undefined;
    message.heightRange = (object.heightRange !== undefined && object.heightRange !== null)
      ? Proof_HeightRange.fromPartial(object.heightRange)
      : undefined;
    message.tickRange = (object.tickRange !== undefined && object.tickRange !== null)
      ? Proof_TickRange.fromPartial(object.tickRange)
      : undefined;
    message.exactMatch = (object.exactMatch !== undefined && object.exactMatch !== null)
      ? Proof_ExactMatch.fromPartial(object.exactMatch)
      : undefined;
    message.lessThan = (object.lessThan !== undefined && object.lessThan !== null)
      ? Proof_LessThan.fromPartial(object.lessThan)
      : undefined;
    message.greaterThan = (object.greaterThan !== undefined && object.greaterThan !== null)
      ? Proof_GreaterThan.fromPartial(object.greaterThan)
      : undefined;
    message.equalTo = (object.equalTo !== undefined && object.equalTo !== null)
      ? Proof_EqualTo.fromPartial(object.equalTo)
      : undefined;
    message.threshold = (object.threshold !== undefined && object.threshold !== null)
      ? Proof_Threshold.fromPartial(object.threshold)
      : undefined;
    message.not = (object.not !== undefined && object.not !== null) ? Proof_Not.fromPartial(object.not) : undefined;
    message.and = (object.and !== undefined && object.and !== null) ? Proof_And.fromPartial(object.and) : undefined;
    message.or = (object.or !== undefined && object.or !== null) ? Proof_Or.fromPartial(object.or) : undefined;
    return message;
  },
};

function createBaseProof_Locked(): Proof_Locked {
  return {};
}

export const Proof_Locked = {
  encode(_: Proof_Locked, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proof_Locked {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof_Locked();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Proof_Locked {
    return {};
  },

  toJSON(_: Proof_Locked): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Proof_Locked>, I>>(base?: I): Proof_Locked {
    return Proof_Locked.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proof_Locked>, I>>(_: I): Proof_Locked {
    const message = createBaseProof_Locked();
    return message;
  },
};

function createBaseProof_Digest(): Proof_Digest {
  return { transactionBind: undefined, preimage: undefined };
}

export const Proof_Digest = {
  encode(message: Proof_Digest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionBind !== undefined) {
      TxBind.encode(message.transactionBind, writer.uint32(10).fork()).ldelim();
    }
    if (message.preimage !== undefined) {
      Preimage.encode(message.preimage, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proof_Digest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof_Digest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transactionBind = TxBind.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.preimage = Preimage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proof_Digest {
    return {
      transactionBind: isSet(object.transactionBind) ? TxBind.fromJSON(object.transactionBind) : undefined,
      preimage: isSet(object.preimage) ? Preimage.fromJSON(object.preimage) : undefined,
    };
  },

  toJSON(message: Proof_Digest): unknown {
    const obj: any = {};
    if (message.transactionBind !== undefined) {
      obj.transactionBind = TxBind.toJSON(message.transactionBind);
    }
    if (message.preimage !== undefined) {
      obj.preimage = Preimage.toJSON(message.preimage);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proof_Digest>, I>>(base?: I): Proof_Digest {
    return Proof_Digest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proof_Digest>, I>>(object: I): Proof_Digest {
    const message = createBaseProof_Digest();
    message.transactionBind = (object.transactionBind !== undefined && object.transactionBind !== null)
      ? TxBind.fromPartial(object.transactionBind)
      : undefined;
    message.preimage = (object.preimage !== undefined && object.preimage !== null)
      ? Preimage.fromPartial(object.preimage)
      : undefined;
    return message;
  },
};

function createBaseProof_DigitalSignature(): Proof_DigitalSignature {
  return { transactionBind: undefined, witness: undefined };
}

export const Proof_DigitalSignature = {
  encode(message: Proof_DigitalSignature, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionBind !== undefined) {
      TxBind.encode(message.transactionBind, writer.uint32(10).fork()).ldelim();
    }
    if (message.witness !== undefined) {
      Witness.encode(message.witness, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proof_DigitalSignature {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof_DigitalSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transactionBind = TxBind.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.witness = Witness.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proof_DigitalSignature {
    return {
      transactionBind: isSet(object.transactionBind) ? TxBind.fromJSON(object.transactionBind) : undefined,
      witness: isSet(object.witness) ? Witness.fromJSON(object.witness) : undefined,
    };
  },

  toJSON(message: Proof_DigitalSignature): unknown {
    const obj: any = {};
    if (message.transactionBind !== undefined) {
      obj.transactionBind = TxBind.toJSON(message.transactionBind);
    }
    if (message.witness !== undefined) {
      obj.witness = Witness.toJSON(message.witness);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proof_DigitalSignature>, I>>(base?: I): Proof_DigitalSignature {
    return Proof_DigitalSignature.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proof_DigitalSignature>, I>>(object: I): Proof_DigitalSignature {
    const message = createBaseProof_DigitalSignature();
    message.transactionBind = (object.transactionBind !== undefined && object.transactionBind !== null)
      ? TxBind.fromPartial(object.transactionBind)
      : undefined;
    message.witness = (object.witness !== undefined && object.witness !== null)
      ? Witness.fromPartial(object.witness)
      : undefined;
    return message;
  },
};

function createBaseProof_HeightRange(): Proof_HeightRange {
  return { transactionBind: undefined };
}

export const Proof_HeightRange = {
  encode(message: Proof_HeightRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionBind !== undefined) {
      TxBind.encode(message.transactionBind, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proof_HeightRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof_HeightRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transactionBind = TxBind.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proof_HeightRange {
    return { transactionBind: isSet(object.transactionBind) ? TxBind.fromJSON(object.transactionBind) : undefined };
  },

  toJSON(message: Proof_HeightRange): unknown {
    const obj: any = {};
    if (message.transactionBind !== undefined) {
      obj.transactionBind = TxBind.toJSON(message.transactionBind);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proof_HeightRange>, I>>(base?: I): Proof_HeightRange {
    return Proof_HeightRange.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proof_HeightRange>, I>>(object: I): Proof_HeightRange {
    const message = createBaseProof_HeightRange();
    message.transactionBind = (object.transactionBind !== undefined && object.transactionBind !== null)
      ? TxBind.fromPartial(object.transactionBind)
      : undefined;
    return message;
  },
};

function createBaseProof_TickRange(): Proof_TickRange {
  return { transactionBind: undefined };
}

export const Proof_TickRange = {
  encode(message: Proof_TickRange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionBind !== undefined) {
      TxBind.encode(message.transactionBind, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proof_TickRange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof_TickRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transactionBind = TxBind.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proof_TickRange {
    return { transactionBind: isSet(object.transactionBind) ? TxBind.fromJSON(object.transactionBind) : undefined };
  },

  toJSON(message: Proof_TickRange): unknown {
    const obj: any = {};
    if (message.transactionBind !== undefined) {
      obj.transactionBind = TxBind.toJSON(message.transactionBind);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proof_TickRange>, I>>(base?: I): Proof_TickRange {
    return Proof_TickRange.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proof_TickRange>, I>>(object: I): Proof_TickRange {
    const message = createBaseProof_TickRange();
    message.transactionBind = (object.transactionBind !== undefined && object.transactionBind !== null)
      ? TxBind.fromPartial(object.transactionBind)
      : undefined;
    return message;
  },
};

function createBaseProof_ExactMatch(): Proof_ExactMatch {
  return { transactionBind: undefined };
}

export const Proof_ExactMatch = {
  encode(message: Proof_ExactMatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionBind !== undefined) {
      TxBind.encode(message.transactionBind, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proof_ExactMatch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof_ExactMatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transactionBind = TxBind.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proof_ExactMatch {
    return { transactionBind: isSet(object.transactionBind) ? TxBind.fromJSON(object.transactionBind) : undefined };
  },

  toJSON(message: Proof_ExactMatch): unknown {
    const obj: any = {};
    if (message.transactionBind !== undefined) {
      obj.transactionBind = TxBind.toJSON(message.transactionBind);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proof_ExactMatch>, I>>(base?: I): Proof_ExactMatch {
    return Proof_ExactMatch.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proof_ExactMatch>, I>>(object: I): Proof_ExactMatch {
    const message = createBaseProof_ExactMatch();
    message.transactionBind = (object.transactionBind !== undefined && object.transactionBind !== null)
      ? TxBind.fromPartial(object.transactionBind)
      : undefined;
    return message;
  },
};

function createBaseProof_LessThan(): Proof_LessThan {
  return { transactionBind: undefined };
}

export const Proof_LessThan = {
  encode(message: Proof_LessThan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionBind !== undefined) {
      TxBind.encode(message.transactionBind, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proof_LessThan {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof_LessThan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transactionBind = TxBind.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proof_LessThan {
    return { transactionBind: isSet(object.transactionBind) ? TxBind.fromJSON(object.transactionBind) : undefined };
  },

  toJSON(message: Proof_LessThan): unknown {
    const obj: any = {};
    if (message.transactionBind !== undefined) {
      obj.transactionBind = TxBind.toJSON(message.transactionBind);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proof_LessThan>, I>>(base?: I): Proof_LessThan {
    return Proof_LessThan.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proof_LessThan>, I>>(object: I): Proof_LessThan {
    const message = createBaseProof_LessThan();
    message.transactionBind = (object.transactionBind !== undefined && object.transactionBind !== null)
      ? TxBind.fromPartial(object.transactionBind)
      : undefined;
    return message;
  },
};

function createBaseProof_GreaterThan(): Proof_GreaterThan {
  return { transactionBind: undefined };
}

export const Proof_GreaterThan = {
  encode(message: Proof_GreaterThan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionBind !== undefined) {
      TxBind.encode(message.transactionBind, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proof_GreaterThan {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof_GreaterThan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transactionBind = TxBind.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proof_GreaterThan {
    return { transactionBind: isSet(object.transactionBind) ? TxBind.fromJSON(object.transactionBind) : undefined };
  },

  toJSON(message: Proof_GreaterThan): unknown {
    const obj: any = {};
    if (message.transactionBind !== undefined) {
      obj.transactionBind = TxBind.toJSON(message.transactionBind);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proof_GreaterThan>, I>>(base?: I): Proof_GreaterThan {
    return Proof_GreaterThan.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proof_GreaterThan>, I>>(object: I): Proof_GreaterThan {
    const message = createBaseProof_GreaterThan();
    message.transactionBind = (object.transactionBind !== undefined && object.transactionBind !== null)
      ? TxBind.fromPartial(object.transactionBind)
      : undefined;
    return message;
  },
};

function createBaseProof_EqualTo(): Proof_EqualTo {
  return { transactionBind: undefined };
}

export const Proof_EqualTo = {
  encode(message: Proof_EqualTo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionBind !== undefined) {
      TxBind.encode(message.transactionBind, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proof_EqualTo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof_EqualTo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transactionBind = TxBind.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proof_EqualTo {
    return { transactionBind: isSet(object.transactionBind) ? TxBind.fromJSON(object.transactionBind) : undefined };
  },

  toJSON(message: Proof_EqualTo): unknown {
    const obj: any = {};
    if (message.transactionBind !== undefined) {
      obj.transactionBind = TxBind.toJSON(message.transactionBind);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proof_EqualTo>, I>>(base?: I): Proof_EqualTo {
    return Proof_EqualTo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proof_EqualTo>, I>>(object: I): Proof_EqualTo {
    const message = createBaseProof_EqualTo();
    message.transactionBind = (object.transactionBind !== undefined && object.transactionBind !== null)
      ? TxBind.fromPartial(object.transactionBind)
      : undefined;
    return message;
  },
};

function createBaseProof_Threshold(): Proof_Threshold {
  return { transactionBind: undefined, responses: [] };
}

export const Proof_Threshold = {
  encode(message: Proof_Threshold, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionBind !== undefined) {
      TxBind.encode(message.transactionBind, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.responses) {
      Proof.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proof_Threshold {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof_Threshold();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transactionBind = TxBind.decode(reader, reader.uint32());
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

  fromJSON(object: any): Proof_Threshold {
    return {
      transactionBind: isSet(object.transactionBind) ? TxBind.fromJSON(object.transactionBind) : undefined,
      responses: globalThis.Array.isArray(object?.responses) ? object.responses.map((e: any) => Proof.fromJSON(e)) : [],
    };
  },

  toJSON(message: Proof_Threshold): unknown {
    const obj: any = {};
    if (message.transactionBind !== undefined) {
      obj.transactionBind = TxBind.toJSON(message.transactionBind);
    }
    if (message.responses?.length) {
      obj.responses = message.responses.map((e) => Proof.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proof_Threshold>, I>>(base?: I): Proof_Threshold {
    return Proof_Threshold.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proof_Threshold>, I>>(object: I): Proof_Threshold {
    const message = createBaseProof_Threshold();
    message.transactionBind = (object.transactionBind !== undefined && object.transactionBind !== null)
      ? TxBind.fromPartial(object.transactionBind)
      : undefined;
    message.responses = object.responses?.map((e) => Proof.fromPartial(e)) || [];
    return message;
  },
};

function createBaseProof_Not(): Proof_Not {
  return { transactionBind: undefined, proof: undefined };
}

export const Proof_Not = {
  encode(message: Proof_Not, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionBind !== undefined) {
      TxBind.encode(message.transactionBind, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proof_Not {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof_Not();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transactionBind = TxBind.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.proof = Proof.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proof_Not {
    return {
      transactionBind: isSet(object.transactionBind) ? TxBind.fromJSON(object.transactionBind) : undefined,
      proof: isSet(object.proof) ? Proof.fromJSON(object.proof) : undefined,
    };
  },

  toJSON(message: Proof_Not): unknown {
    const obj: any = {};
    if (message.transactionBind !== undefined) {
      obj.transactionBind = TxBind.toJSON(message.transactionBind);
    }
    if (message.proof !== undefined) {
      obj.proof = Proof.toJSON(message.proof);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proof_Not>, I>>(base?: I): Proof_Not {
    return Proof_Not.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proof_Not>, I>>(object: I): Proof_Not {
    const message = createBaseProof_Not();
    message.transactionBind = (object.transactionBind !== undefined && object.transactionBind !== null)
      ? TxBind.fromPartial(object.transactionBind)
      : undefined;
    message.proof = (object.proof !== undefined && object.proof !== null) ? Proof.fromPartial(object.proof) : undefined;
    return message;
  },
};

function createBaseProof_And(): Proof_And {
  return { transactionBind: undefined, left: undefined, right: undefined };
}

export const Proof_And = {
  encode(message: Proof_And, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionBind !== undefined) {
      TxBind.encode(message.transactionBind, writer.uint32(10).fork()).ldelim();
    }
    if (message.left !== undefined) {
      Proof.encode(message.left, writer.uint32(18).fork()).ldelim();
    }
    if (message.right !== undefined) {
      Proof.encode(message.right, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proof_And {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof_And();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transactionBind = TxBind.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.left = Proof.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.right = Proof.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proof_And {
    return {
      transactionBind: isSet(object.transactionBind) ? TxBind.fromJSON(object.transactionBind) : undefined,
      left: isSet(object.left) ? Proof.fromJSON(object.left) : undefined,
      right: isSet(object.right) ? Proof.fromJSON(object.right) : undefined,
    };
  },

  toJSON(message: Proof_And): unknown {
    const obj: any = {};
    if (message.transactionBind !== undefined) {
      obj.transactionBind = TxBind.toJSON(message.transactionBind);
    }
    if (message.left !== undefined) {
      obj.left = Proof.toJSON(message.left);
    }
    if (message.right !== undefined) {
      obj.right = Proof.toJSON(message.right);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proof_And>, I>>(base?: I): Proof_And {
    return Proof_And.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proof_And>, I>>(object: I): Proof_And {
    const message = createBaseProof_And();
    message.transactionBind = (object.transactionBind !== undefined && object.transactionBind !== null)
      ? TxBind.fromPartial(object.transactionBind)
      : undefined;
    message.left = (object.left !== undefined && object.left !== null) ? Proof.fromPartial(object.left) : undefined;
    message.right = (object.right !== undefined && object.right !== null) ? Proof.fromPartial(object.right) : undefined;
    return message;
  },
};

function createBaseProof_Or(): Proof_Or {
  return { transactionBind: undefined, left: undefined, right: undefined };
}

export const Proof_Or = {
  encode(message: Proof_Or, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionBind !== undefined) {
      TxBind.encode(message.transactionBind, writer.uint32(10).fork()).ldelim();
    }
    if (message.left !== undefined) {
      Proof.encode(message.left, writer.uint32(18).fork()).ldelim();
    }
    if (message.right !== undefined) {
      Proof.encode(message.right, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proof_Or {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof_Or();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transactionBind = TxBind.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.left = Proof.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.right = Proof.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Proof_Or {
    return {
      transactionBind: isSet(object.transactionBind) ? TxBind.fromJSON(object.transactionBind) : undefined,
      left: isSet(object.left) ? Proof.fromJSON(object.left) : undefined,
      right: isSet(object.right) ? Proof.fromJSON(object.right) : undefined,
    };
  },

  toJSON(message: Proof_Or): unknown {
    const obj: any = {};
    if (message.transactionBind !== undefined) {
      obj.transactionBind = TxBind.toJSON(message.transactionBind);
    }
    if (message.left !== undefined) {
      obj.left = Proof.toJSON(message.left);
    }
    if (message.right !== undefined) {
      obj.right = Proof.toJSON(message.right);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Proof_Or>, I>>(base?: I): Proof_Or {
    return Proof_Or.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Proof_Or>, I>>(object: I): Proof_Or {
    const message = createBaseProof_Or();
    message.transactionBind = (object.transactionBind !== undefined && object.transactionBind !== null)
      ? TxBind.fromPartial(object.transactionBind)
      : undefined;
    message.left = (object.left !== undefined && object.left !== null) ? Proof.fromPartial(object.left) : undefined;
    message.right = (object.right !== undefined && object.right !== null) ? Proof.fromPartial(object.right) : undefined;
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
