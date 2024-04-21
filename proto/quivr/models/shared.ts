/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "quivr.models";

/** General purpose data */
export interface Data {
  /** Byte representation of data value */
  value: Uint8Array;
}

/** Data format used for metadata */
export interface SmallData {
  /** Maximum length = 64 */
  value: Uint8Array;
}

/** Event root */
export interface Root {
  value: Uint8Array;
}

/** Preimage (input) for a digest operation */
export interface Preimage {
  input: Uint8Array;
  salt: Uint8Array;
}

/** Information output to Hash */
export interface Digest {
  /** strict length = 32 */
  value: Uint8Array;
}

/** Encapsulates digest and preimage used to verify that preimage results in digest */
export interface DigestVerification {
  digest: Digest | undefined;
  preimage: Preimage | undefined;
}

/** public key in a key pair used for verification */
export interface VerificationKey {
  ed25519?: VerificationKey_Ed25519Vk | undefined;
  extendedEd25519?: VerificationKey_ExtendedEd25519Vk | undefined;
}

export interface VerificationKey_Ed25519Vk {
  value: Uint8Array;
}

export interface VerificationKey_ExtendedEd25519Vk {
  vk: VerificationKey_Ed25519Vk | undefined;
  chainCode: Uint8Array;
}

/** Private key used to sign */
export interface SigningKey {
  ed25519?: SigningKey_Ed25519Sk | undefined;
  extendedEd25519?: SigningKey_ExtendedEd25519Sk | undefined;
}

export interface SigningKey_Ed25519Sk {
  value: Uint8Array;
}

export interface SigningKey_ExtendedEd25519Sk {
  leftKey: Uint8Array;
  rightKey: Uint8Array;
  chainCode: Uint8Array;
}

/** Public and private key pairs used to sign and verify */
export interface KeyPair {
  vk: VerificationKey | undefined;
  sk: SigningKey | undefined;
}

/** Message to sign */
export interface Message {
  value: Uint8Array;
}

/** generated signature */
export interface Witness {
  value: Uint8Array;
}

/** encapsulates data used to verify a signing routine */
export interface SignatureVerification {
  verificationKey: VerificationKey | undefined;
  signature: Witness | undefined;
  message: Message | undefined;
}

/** signable in bytes */
export interface SignableBytes {
  value: Uint8Array;
}

/** Transaction bind uses signable bytes to bind a proof */
export interface TxBind {
  value: Uint8Array;
}

/** Represents a 128-bit integer */
export interface Int128 {
  /** Java BigInt Representation: two's-complement, big-endian */
  value: Uint8Array;
}

export interface Ratio {
  numerator:
    | Int128
    | undefined;
  /** Populate with 1 if not defined */
  denominator: Int128 | undefined;
}

function createBaseData(): Data {
  return { value: new Uint8Array(0) };
}

export const Data = {
  encode(message: Data, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Data {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Data {
    return { value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0) };
  },

  toJSON(message: Data): unknown {
    const obj: any = {};
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Data>, I>>(base?: I): Data {
    return Data.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Data>, I>>(object: I): Data {
    const message = createBaseData();
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseSmallData(): SmallData {
  return { value: new Uint8Array(0) };
}

export const SmallData = {
  encode(message: SmallData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SmallData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSmallData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SmallData {
    return { value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0) };
  },

  toJSON(message: SmallData): unknown {
    const obj: any = {};
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SmallData>, I>>(base?: I): SmallData {
    return SmallData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SmallData>, I>>(object: I): SmallData {
    const message = createBaseSmallData();
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseRoot(): Root {
  return { value: new Uint8Array(0) };
}

export const Root = {
  encode(message: Root, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Root {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Root {
    return { value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0) };
  },

  toJSON(message: Root): unknown {
    const obj: any = {};
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Root>, I>>(base?: I): Root {
    return Root.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Root>, I>>(object: I): Root {
    const message = createBaseRoot();
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBasePreimage(): Preimage {
  return { input: new Uint8Array(0), salt: new Uint8Array(0) };
}

export const Preimage = {
  encode(message: Preimage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.input.length !== 0) {
      writer.uint32(10).bytes(message.input);
    }
    if (message.salt.length !== 0) {
      writer.uint32(18).bytes(message.salt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Preimage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreimage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.input = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.salt = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Preimage {
    return {
      input: isSet(object.input) ? bytesFromBase64(object.input) : new Uint8Array(0),
      salt: isSet(object.salt) ? bytesFromBase64(object.salt) : new Uint8Array(0),
    };
  },

  toJSON(message: Preimage): unknown {
    const obj: any = {};
    if (message.input.length !== 0) {
      obj.input = base64FromBytes(message.input);
    }
    if (message.salt.length !== 0) {
      obj.salt = base64FromBytes(message.salt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Preimage>, I>>(base?: I): Preimage {
    return Preimage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Preimage>, I>>(object: I): Preimage {
    const message = createBasePreimage();
    message.input = object.input ?? new Uint8Array(0);
    message.salt = object.salt ?? new Uint8Array(0);
    return message;
  },
};

function createBaseDigest(): Digest {
  return { value: new Uint8Array(0) };
}

export const Digest = {
  encode(message: Digest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Digest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDigest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Digest {
    return { value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0) };
  },

  toJSON(message: Digest): unknown {
    const obj: any = {};
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Digest>, I>>(base?: I): Digest {
    return Digest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Digest>, I>>(object: I): Digest {
    const message = createBaseDigest();
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseDigestVerification(): DigestVerification {
  return { digest: undefined, preimage: undefined };
}

export const DigestVerification = {
  encode(message: DigestVerification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.digest !== undefined) {
      Digest.encode(message.digest, writer.uint32(10).fork()).ldelim();
    }
    if (message.preimage !== undefined) {
      Preimage.encode(message.preimage, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DigestVerification {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDigestVerification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.digest = Digest.decode(reader, reader.uint32());
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

  fromJSON(object: any): DigestVerification {
    return {
      digest: isSet(object.digest) ? Digest.fromJSON(object.digest) : undefined,
      preimage: isSet(object.preimage) ? Preimage.fromJSON(object.preimage) : undefined,
    };
  },

  toJSON(message: DigestVerification): unknown {
    const obj: any = {};
    if (message.digest !== undefined) {
      obj.digest = Digest.toJSON(message.digest);
    }
    if (message.preimage !== undefined) {
      obj.preimage = Preimage.toJSON(message.preimage);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DigestVerification>, I>>(base?: I): DigestVerification {
    return DigestVerification.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DigestVerification>, I>>(object: I): DigestVerification {
    const message = createBaseDigestVerification();
    message.digest = (object.digest !== undefined && object.digest !== null)
      ? Digest.fromPartial(object.digest)
      : undefined;
    message.preimage = (object.preimage !== undefined && object.preimage !== null)
      ? Preimage.fromPartial(object.preimage)
      : undefined;
    return message;
  },
};

function createBaseVerificationKey(): VerificationKey {
  return { ed25519: undefined, extendedEd25519: undefined };
}

export const VerificationKey = {
  encode(message: VerificationKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ed25519 !== undefined) {
      VerificationKey_Ed25519Vk.encode(message.ed25519, writer.uint32(10).fork()).ldelim();
    }
    if (message.extendedEd25519 !== undefined) {
      VerificationKey_ExtendedEd25519Vk.encode(message.extendedEd25519, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerificationKey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerificationKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ed25519 = VerificationKey_Ed25519Vk.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.extendedEd25519 = VerificationKey_ExtendedEd25519Vk.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerificationKey {
    return {
      ed25519: isSet(object.ed25519) ? VerificationKey_Ed25519Vk.fromJSON(object.ed25519) : undefined,
      extendedEd25519: isSet(object.extendedEd25519)
        ? VerificationKey_ExtendedEd25519Vk.fromJSON(object.extendedEd25519)
        : undefined,
    };
  },

  toJSON(message: VerificationKey): unknown {
    const obj: any = {};
    if (message.ed25519 !== undefined) {
      obj.ed25519 = VerificationKey_Ed25519Vk.toJSON(message.ed25519);
    }
    if (message.extendedEd25519 !== undefined) {
      obj.extendedEd25519 = VerificationKey_ExtendedEd25519Vk.toJSON(message.extendedEd25519);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VerificationKey>, I>>(base?: I): VerificationKey {
    return VerificationKey.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VerificationKey>, I>>(object: I): VerificationKey {
    const message = createBaseVerificationKey();
    message.ed25519 = (object.ed25519 !== undefined && object.ed25519 !== null)
      ? VerificationKey_Ed25519Vk.fromPartial(object.ed25519)
      : undefined;
    message.extendedEd25519 = (object.extendedEd25519 !== undefined && object.extendedEd25519 !== null)
      ? VerificationKey_ExtendedEd25519Vk.fromPartial(object.extendedEd25519)
      : undefined;
    return message;
  },
};

function createBaseVerificationKey_Ed25519Vk(): VerificationKey_Ed25519Vk {
  return { value: new Uint8Array(0) };
}

export const VerificationKey_Ed25519Vk = {
  encode(message: VerificationKey_Ed25519Vk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerificationKey_Ed25519Vk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerificationKey_Ed25519Vk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerificationKey_Ed25519Vk {
    return { value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0) };
  },

  toJSON(message: VerificationKey_Ed25519Vk): unknown {
    const obj: any = {};
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VerificationKey_Ed25519Vk>, I>>(base?: I): VerificationKey_Ed25519Vk {
    return VerificationKey_Ed25519Vk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VerificationKey_Ed25519Vk>, I>>(object: I): VerificationKey_Ed25519Vk {
    const message = createBaseVerificationKey_Ed25519Vk();
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseVerificationKey_ExtendedEd25519Vk(): VerificationKey_ExtendedEd25519Vk {
  return { vk: undefined, chainCode: new Uint8Array(0) };
}

export const VerificationKey_ExtendedEd25519Vk = {
  encode(message: VerificationKey_ExtendedEd25519Vk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vk !== undefined) {
      VerificationKey_Ed25519Vk.encode(message.vk, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainCode.length !== 0) {
      writer.uint32(18).bytes(message.chainCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerificationKey_ExtendedEd25519Vk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerificationKey_ExtendedEd25519Vk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vk = VerificationKey_Ed25519Vk.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.chainCode = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerificationKey_ExtendedEd25519Vk {
    return {
      vk: isSet(object.vk) ? VerificationKey_Ed25519Vk.fromJSON(object.vk) : undefined,
      chainCode: isSet(object.chainCode) ? bytesFromBase64(object.chainCode) : new Uint8Array(0),
    };
  },

  toJSON(message: VerificationKey_ExtendedEd25519Vk): unknown {
    const obj: any = {};
    if (message.vk !== undefined) {
      obj.vk = VerificationKey_Ed25519Vk.toJSON(message.vk);
    }
    if (message.chainCode.length !== 0) {
      obj.chainCode = base64FromBytes(message.chainCode);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VerificationKey_ExtendedEd25519Vk>, I>>(
    base?: I,
  ): VerificationKey_ExtendedEd25519Vk {
    return VerificationKey_ExtendedEd25519Vk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VerificationKey_ExtendedEd25519Vk>, I>>(
    object: I,
  ): VerificationKey_ExtendedEd25519Vk {
    const message = createBaseVerificationKey_ExtendedEd25519Vk();
    message.vk = (object.vk !== undefined && object.vk !== null)
      ? VerificationKey_Ed25519Vk.fromPartial(object.vk)
      : undefined;
    message.chainCode = object.chainCode ?? new Uint8Array(0);
    return message;
  },
};

function createBaseSigningKey(): SigningKey {
  return { ed25519: undefined, extendedEd25519: undefined };
}

export const SigningKey = {
  encode(message: SigningKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ed25519 !== undefined) {
      SigningKey_Ed25519Sk.encode(message.ed25519, writer.uint32(10).fork()).ldelim();
    }
    if (message.extendedEd25519 !== undefined) {
      SigningKey_ExtendedEd25519Sk.encode(message.extendedEd25519, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SigningKey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ed25519 = SigningKey_Ed25519Sk.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.extendedEd25519 = SigningKey_ExtendedEd25519Sk.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SigningKey {
    return {
      ed25519: isSet(object.ed25519) ? SigningKey_Ed25519Sk.fromJSON(object.ed25519) : undefined,
      extendedEd25519: isSet(object.extendedEd25519)
        ? SigningKey_ExtendedEd25519Sk.fromJSON(object.extendedEd25519)
        : undefined,
    };
  },

  toJSON(message: SigningKey): unknown {
    const obj: any = {};
    if (message.ed25519 !== undefined) {
      obj.ed25519 = SigningKey_Ed25519Sk.toJSON(message.ed25519);
    }
    if (message.extendedEd25519 !== undefined) {
      obj.extendedEd25519 = SigningKey_ExtendedEd25519Sk.toJSON(message.extendedEd25519);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SigningKey>, I>>(base?: I): SigningKey {
    return SigningKey.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SigningKey>, I>>(object: I): SigningKey {
    const message = createBaseSigningKey();
    message.ed25519 = (object.ed25519 !== undefined && object.ed25519 !== null)
      ? SigningKey_Ed25519Sk.fromPartial(object.ed25519)
      : undefined;
    message.extendedEd25519 = (object.extendedEd25519 !== undefined && object.extendedEd25519 !== null)
      ? SigningKey_ExtendedEd25519Sk.fromPartial(object.extendedEd25519)
      : undefined;
    return message;
  },
};

function createBaseSigningKey_Ed25519Sk(): SigningKey_Ed25519Sk {
  return { value: new Uint8Array(0) };
}

export const SigningKey_Ed25519Sk = {
  encode(message: SigningKey_Ed25519Sk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SigningKey_Ed25519Sk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningKey_Ed25519Sk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SigningKey_Ed25519Sk {
    return { value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0) };
  },

  toJSON(message: SigningKey_Ed25519Sk): unknown {
    const obj: any = {};
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SigningKey_Ed25519Sk>, I>>(base?: I): SigningKey_Ed25519Sk {
    return SigningKey_Ed25519Sk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SigningKey_Ed25519Sk>, I>>(object: I): SigningKey_Ed25519Sk {
    const message = createBaseSigningKey_Ed25519Sk();
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseSigningKey_ExtendedEd25519Sk(): SigningKey_ExtendedEd25519Sk {
  return { leftKey: new Uint8Array(0), rightKey: new Uint8Array(0), chainCode: new Uint8Array(0) };
}

export const SigningKey_ExtendedEd25519Sk = {
  encode(message: SigningKey_ExtendedEd25519Sk, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leftKey.length !== 0) {
      writer.uint32(10).bytes(message.leftKey);
    }
    if (message.rightKey.length !== 0) {
      writer.uint32(18).bytes(message.rightKey);
    }
    if (message.chainCode.length !== 0) {
      writer.uint32(26).bytes(message.chainCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SigningKey_ExtendedEd25519Sk {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningKey_ExtendedEd25519Sk();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.leftKey = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rightKey = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.chainCode = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SigningKey_ExtendedEd25519Sk {
    return {
      leftKey: isSet(object.leftKey) ? bytesFromBase64(object.leftKey) : new Uint8Array(0),
      rightKey: isSet(object.rightKey) ? bytesFromBase64(object.rightKey) : new Uint8Array(0),
      chainCode: isSet(object.chainCode) ? bytesFromBase64(object.chainCode) : new Uint8Array(0),
    };
  },

  toJSON(message: SigningKey_ExtendedEd25519Sk): unknown {
    const obj: any = {};
    if (message.leftKey.length !== 0) {
      obj.leftKey = base64FromBytes(message.leftKey);
    }
    if (message.rightKey.length !== 0) {
      obj.rightKey = base64FromBytes(message.rightKey);
    }
    if (message.chainCode.length !== 0) {
      obj.chainCode = base64FromBytes(message.chainCode);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SigningKey_ExtendedEd25519Sk>, I>>(base?: I): SigningKey_ExtendedEd25519Sk {
    return SigningKey_ExtendedEd25519Sk.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SigningKey_ExtendedEd25519Sk>, I>>(object: I): SigningKey_ExtendedEd25519Sk {
    const message = createBaseSigningKey_ExtendedEd25519Sk();
    message.leftKey = object.leftKey ?? new Uint8Array(0);
    message.rightKey = object.rightKey ?? new Uint8Array(0);
    message.chainCode = object.chainCode ?? new Uint8Array(0);
    return message;
  },
};

function createBaseKeyPair(): KeyPair {
  return { vk: undefined, sk: undefined };
}

export const KeyPair = {
  encode(message: KeyPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vk !== undefined) {
      VerificationKey.encode(message.vk, writer.uint32(10).fork()).ldelim();
    }
    if (message.sk !== undefined) {
      SigningKey.encode(message.sk, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyPair {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyPair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vk = VerificationKey.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sk = SigningKey.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KeyPair {
    return {
      vk: isSet(object.vk) ? VerificationKey.fromJSON(object.vk) : undefined,
      sk: isSet(object.sk) ? SigningKey.fromJSON(object.sk) : undefined,
    };
  },

  toJSON(message: KeyPair): unknown {
    const obj: any = {};
    if (message.vk !== undefined) {
      obj.vk = VerificationKey.toJSON(message.vk);
    }
    if (message.sk !== undefined) {
      obj.sk = SigningKey.toJSON(message.sk);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<KeyPair>, I>>(base?: I): KeyPair {
    return KeyPair.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<KeyPair>, I>>(object: I): KeyPair {
    const message = createBaseKeyPair();
    message.vk = (object.vk !== undefined && object.vk !== null) ? VerificationKey.fromPartial(object.vk) : undefined;
    message.sk = (object.sk !== undefined && object.sk !== null) ? SigningKey.fromPartial(object.sk) : undefined;
    return message;
  },
};

function createBaseMessage(): Message {
  return { value: new Uint8Array(0) };
}

export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Message {
    return { value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0) };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Message>, I>>(base?: I): Message {
    return Message.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message {
    const message = createBaseMessage();
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseWitness(): Witness {
  return { value: new Uint8Array(0) };
}

export const Witness = {
  encode(message: Witness, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Witness {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWitness();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Witness {
    return { value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0) };
  },

  toJSON(message: Witness): unknown {
    const obj: any = {};
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Witness>, I>>(base?: I): Witness {
    return Witness.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Witness>, I>>(object: I): Witness {
    const message = createBaseWitness();
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseSignatureVerification(): SignatureVerification {
  return { verificationKey: undefined, signature: undefined, message: undefined };
}

export const SignatureVerification = {
  encode(message: SignatureVerification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.verificationKey !== undefined) {
      VerificationKey.encode(message.verificationKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.signature !== undefined) {
      Witness.encode(message.signature, writer.uint32(18).fork()).ldelim();
    }
    if (message.message !== undefined) {
      Message.encode(message.message, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignatureVerification {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureVerification();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.verificationKey = VerificationKey.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.signature = Witness.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.message = Message.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignatureVerification {
    return {
      verificationKey: isSet(object.verificationKey) ? VerificationKey.fromJSON(object.verificationKey) : undefined,
      signature: isSet(object.signature) ? Witness.fromJSON(object.signature) : undefined,
      message: isSet(object.message) ? Message.fromJSON(object.message) : undefined,
    };
  },

  toJSON(message: SignatureVerification): unknown {
    const obj: any = {};
    if (message.verificationKey !== undefined) {
      obj.verificationKey = VerificationKey.toJSON(message.verificationKey);
    }
    if (message.signature !== undefined) {
      obj.signature = Witness.toJSON(message.signature);
    }
    if (message.message !== undefined) {
      obj.message = Message.toJSON(message.message);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SignatureVerification>, I>>(base?: I): SignatureVerification {
    return SignatureVerification.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SignatureVerification>, I>>(object: I): SignatureVerification {
    const message = createBaseSignatureVerification();
    message.verificationKey = (object.verificationKey !== undefined && object.verificationKey !== null)
      ? VerificationKey.fromPartial(object.verificationKey)
      : undefined;
    message.signature = (object.signature !== undefined && object.signature !== null)
      ? Witness.fromPartial(object.signature)
      : undefined;
    message.message = (object.message !== undefined && object.message !== null)
      ? Message.fromPartial(object.message)
      : undefined;
    return message;
  },
};

function createBaseSignableBytes(): SignableBytes {
  return { value: new Uint8Array(0) };
}

export const SignableBytes = {
  encode(message: SignableBytes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignableBytes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignableBytes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignableBytes {
    return { value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0) };
  },

  toJSON(message: SignableBytes): unknown {
    const obj: any = {};
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SignableBytes>, I>>(base?: I): SignableBytes {
    return SignableBytes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SignableBytes>, I>>(object: I): SignableBytes {
    const message = createBaseSignableBytes();
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseTxBind(): TxBind {
  return { value: new Uint8Array(0) };
}

export const TxBind = {
  encode(message: TxBind, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxBind {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxBind();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TxBind {
    return { value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0) };
  },

  toJSON(message: TxBind): unknown {
    const obj: any = {};
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TxBind>, I>>(base?: I): TxBind {
    return TxBind.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TxBind>, I>>(object: I): TxBind {
    const message = createBaseTxBind();
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseInt128(): Int128 {
  return { value: new Uint8Array(0) };
}

export const Int128 = {
  encode(message: Int128, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Int128 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInt128();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Int128 {
    return { value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0) };
  },

  toJSON(message: Int128): unknown {
    const obj: any = {};
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Int128>, I>>(base?: I): Int128 {
    return Int128.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Int128>, I>>(object: I): Int128 {
    const message = createBaseInt128();
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseRatio(): Ratio {
  return { numerator: undefined, denominator: undefined };
}

export const Ratio = {
  encode(message: Ratio, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numerator !== undefined) {
      Int128.encode(message.numerator, writer.uint32(10).fork()).ldelim();
    }
    if (message.denominator !== undefined) {
      Int128.encode(message.denominator, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Ratio {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRatio();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.numerator = Int128.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denominator = Int128.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Ratio {
    return {
      numerator: isSet(object.numerator) ? Int128.fromJSON(object.numerator) : undefined,
      denominator: isSet(object.denominator) ? Int128.fromJSON(object.denominator) : undefined,
    };
  },

  toJSON(message: Ratio): unknown {
    const obj: any = {};
    if (message.numerator !== undefined) {
      obj.numerator = Int128.toJSON(message.numerator);
    }
    if (message.denominator !== undefined) {
      obj.denominator = Int128.toJSON(message.denominator);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Ratio>, I>>(base?: I): Ratio {
    return Ratio.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Ratio>, I>>(object: I): Ratio {
    const message = createBaseRatio();
    message.numerator = (object.numerator !== undefined && object.numerator !== null)
      ? Int128.fromPartial(object.numerator)
      : undefined;
    message.denominator = (object.denominator !== undefined && object.denominator !== null)
      ? Int128.fromPartial(object.denominator)
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
