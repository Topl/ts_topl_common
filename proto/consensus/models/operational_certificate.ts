/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "co.topl.consensus.models";

/** A certificate which commits an operator to a linear key, which is then used to sign the block */
export interface OperationalCertificate {
  /** The KES VK of the parent key (forward-secure) (hour+minute hands) */
  parentVK:
    | VerificationKeyKesProduct
    | undefined;
  /** Signs the `childVK` using the `parentSK` */
  parentSignature:
    | SignatureKesProduct
    | undefined;
  /** The linear VK */
  childVK: Uint8Array;
  /** The signature of the block */
  childSignature: Uint8Array;
}

export interface VerificationKeyKesProduct {
  /** length = 32 */
  value: Uint8Array;
  step: number;
}

export interface SignatureKesSum {
  verificationKey: Uint8Array;
  signature: Uint8Array;
  /** item length = 32 */
  witness: Uint8Array[];
}

export interface SignatureKesProduct {
  superSignature: SignatureKesSum | undefined;
  subSignature:
    | SignatureKesSum
    | undefined;
  /** length = 32 */
  subRoot: Uint8Array;
}

function createBaseOperationalCertificate(): OperationalCertificate {
  return {
    parentVK: undefined,
    parentSignature: undefined,
    childVK: new Uint8Array(0),
    childSignature: new Uint8Array(0),
  };
}

export const OperationalCertificate = {
  encode(message: OperationalCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.parentVK !== undefined) {
      VerificationKeyKesProduct.encode(message.parentVK, writer.uint32(10).fork()).ldelim();
    }
    if (message.parentSignature !== undefined) {
      SignatureKesProduct.encode(message.parentSignature, writer.uint32(18).fork()).ldelim();
    }
    if (message.childVK.length !== 0) {
      writer.uint32(26).bytes(message.childVK);
    }
    if (message.childSignature.length !== 0) {
      writer.uint32(34).bytes(message.childSignature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationalCertificate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationalCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parentVK = VerificationKeyKesProduct.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.parentSignature = SignatureKesProduct.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.childVK = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.childSignature = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperationalCertificate {
    return {
      parentVK: isSet(object.parentVK) ? VerificationKeyKesProduct.fromJSON(object.parentVK) : undefined,
      parentSignature: isSet(object.parentSignature) ? SignatureKesProduct.fromJSON(object.parentSignature) : undefined,
      childVK: isSet(object.childVK) ? bytesFromBase64(object.childVK) : new Uint8Array(0),
      childSignature: isSet(object.childSignature) ? bytesFromBase64(object.childSignature) : new Uint8Array(0),
    };
  },

  toJSON(message: OperationalCertificate): unknown {
    const obj: any = {};
    if (message.parentVK !== undefined) {
      obj.parentVK = VerificationKeyKesProduct.toJSON(message.parentVK);
    }
    if (message.parentSignature !== undefined) {
      obj.parentSignature = SignatureKesProduct.toJSON(message.parentSignature);
    }
    if (message.childVK.length !== 0) {
      obj.childVK = base64FromBytes(message.childVK);
    }
    if (message.childSignature.length !== 0) {
      obj.childSignature = base64FromBytes(message.childSignature);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperationalCertificate>, I>>(base?: I): OperationalCertificate {
    return OperationalCertificate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OperationalCertificate>, I>>(object: I): OperationalCertificate {
    const message = createBaseOperationalCertificate();
    message.parentVK = (object.parentVK !== undefined && object.parentVK !== null)
      ? VerificationKeyKesProduct.fromPartial(object.parentVK)
      : undefined;
    message.parentSignature = (object.parentSignature !== undefined && object.parentSignature !== null)
      ? SignatureKesProduct.fromPartial(object.parentSignature)
      : undefined;
    message.childVK = object.childVK ?? new Uint8Array(0);
    message.childSignature = object.childSignature ?? new Uint8Array(0);
    return message;
  },
};

function createBaseVerificationKeyKesProduct(): VerificationKeyKesProduct {
  return { value: new Uint8Array(0), step: 0 };
}

export const VerificationKeyKesProduct = {
  encode(message: VerificationKeyKesProduct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    if (message.step !== 0) {
      writer.uint32(16).uint32(message.step);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerificationKeyKesProduct {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerificationKeyKesProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.step = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerificationKeyKesProduct {
    return {
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
      step: isSet(object.step) ? globalThis.Number(object.step) : 0,
    };
  },

  toJSON(message: VerificationKeyKesProduct): unknown {
    const obj: any = {};
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    if (message.step !== 0) {
      obj.step = Math.round(message.step);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VerificationKeyKesProduct>, I>>(base?: I): VerificationKeyKesProduct {
    return VerificationKeyKesProduct.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VerificationKeyKesProduct>, I>>(object: I): VerificationKeyKesProduct {
    const message = createBaseVerificationKeyKesProduct();
    message.value = object.value ?? new Uint8Array(0);
    message.step = object.step ?? 0;
    return message;
  },
};

function createBaseSignatureKesSum(): SignatureKesSum {
  return { verificationKey: new Uint8Array(0), signature: new Uint8Array(0), witness: [] };
}

export const SignatureKesSum = {
  encode(message: SignatureKesSum, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.verificationKey.length !== 0) {
      writer.uint32(10).bytes(message.verificationKey);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    for (const v of message.witness) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignatureKesSum {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureKesSum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.verificationKey = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.signature = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.witness.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignatureKesSum {
    return {
      verificationKey: isSet(object.verificationKey) ? bytesFromBase64(object.verificationKey) : new Uint8Array(0),
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(0),
      witness: globalThis.Array.isArray(object?.witness) ? object.witness.map((e: any) => bytesFromBase64(e)) : [],
    };
  },

  toJSON(message: SignatureKesSum): unknown {
    const obj: any = {};
    if (message.verificationKey.length !== 0) {
      obj.verificationKey = base64FromBytes(message.verificationKey);
    }
    if (message.signature.length !== 0) {
      obj.signature = base64FromBytes(message.signature);
    }
    if (message.witness?.length) {
      obj.witness = message.witness.map((e) => base64FromBytes(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SignatureKesSum>, I>>(base?: I): SignatureKesSum {
    return SignatureKesSum.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SignatureKesSum>, I>>(object: I): SignatureKesSum {
    const message = createBaseSignatureKesSum();
    message.verificationKey = object.verificationKey ?? new Uint8Array(0);
    message.signature = object.signature ?? new Uint8Array(0);
    message.witness = object.witness?.map((e) => e) || [];
    return message;
  },
};

function createBaseSignatureKesProduct(): SignatureKesProduct {
  return { superSignature: undefined, subSignature: undefined, subRoot: new Uint8Array(0) };
}

export const SignatureKesProduct = {
  encode(message: SignatureKesProduct, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.superSignature !== undefined) {
      SignatureKesSum.encode(message.superSignature, writer.uint32(10).fork()).ldelim();
    }
    if (message.subSignature !== undefined) {
      SignatureKesSum.encode(message.subSignature, writer.uint32(18).fork()).ldelim();
    }
    if (message.subRoot.length !== 0) {
      writer.uint32(26).bytes(message.subRoot);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignatureKesProduct {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureKesProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.superSignature = SignatureKesSum.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subSignature = SignatureKesSum.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subRoot = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignatureKesProduct {
    return {
      superSignature: isSet(object.superSignature) ? SignatureKesSum.fromJSON(object.superSignature) : undefined,
      subSignature: isSet(object.subSignature) ? SignatureKesSum.fromJSON(object.subSignature) : undefined,
      subRoot: isSet(object.subRoot) ? bytesFromBase64(object.subRoot) : new Uint8Array(0),
    };
  },

  toJSON(message: SignatureKesProduct): unknown {
    const obj: any = {};
    if (message.superSignature !== undefined) {
      obj.superSignature = SignatureKesSum.toJSON(message.superSignature);
    }
    if (message.subSignature !== undefined) {
      obj.subSignature = SignatureKesSum.toJSON(message.subSignature);
    }
    if (message.subRoot.length !== 0) {
      obj.subRoot = base64FromBytes(message.subRoot);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SignatureKesProduct>, I>>(base?: I): SignatureKesProduct {
    return SignatureKesProduct.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SignatureKesProduct>, I>>(object: I): SignatureKesProduct {
    const message = createBaseSignatureKesProduct();
    message.superSignature = (object.superSignature !== undefined && object.superSignature !== null)
      ? SignatureKesSum.fromPartial(object.superSignature)
      : undefined;
    message.subSignature = (object.subSignature !== undefined && object.subSignature !== null)
      ? SignatureKesSum.fromPartial(object.subSignature)
      : undefined;
    message.subRoot = object.subRoot ?? new Uint8Array(0);
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
