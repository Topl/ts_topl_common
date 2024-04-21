/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "co.topl.consensus.models";

/** A certificate proving the operator's election */
export interface EligibilityCertificate {
  /** Signs `eta ++ slot` using the `vrfSK` */
  vrfSig: Uint8Array;
  /** The VRF VK */
  vrfVK: Uint8Array;
  /**
   * Hash of the operator's `threshold`
   * routine = blake2b256
   * length = 32
   */
  thresholdEvidence: Uint8Array;
  /**
   * The epoch's randomness
   * length = 32
   */
  eta: Uint8Array;
}

function createBaseEligibilityCertificate(): EligibilityCertificate {
  return {
    vrfSig: new Uint8Array(0),
    vrfVK: new Uint8Array(0),
    thresholdEvidence: new Uint8Array(0),
    eta: new Uint8Array(0),
  };
}

export const EligibilityCertificate = {
  encode(message: EligibilityCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vrfSig.length !== 0) {
      writer.uint32(10).bytes(message.vrfSig);
    }
    if (message.vrfVK.length !== 0) {
      writer.uint32(18).bytes(message.vrfVK);
    }
    if (message.thresholdEvidence.length !== 0) {
      writer.uint32(26).bytes(message.thresholdEvidence);
    }
    if (message.eta.length !== 0) {
      writer.uint32(34).bytes(message.eta);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EligibilityCertificate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEligibilityCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.vrfSig = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.vrfVK = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.thresholdEvidence = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.eta = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EligibilityCertificate {
    return {
      vrfSig: isSet(object.vrfSig) ? bytesFromBase64(object.vrfSig) : new Uint8Array(0),
      vrfVK: isSet(object.vrfVK) ? bytesFromBase64(object.vrfVK) : new Uint8Array(0),
      thresholdEvidence: isSet(object.thresholdEvidence)
        ? bytesFromBase64(object.thresholdEvidence)
        : new Uint8Array(0),
      eta: isSet(object.eta) ? bytesFromBase64(object.eta) : new Uint8Array(0),
    };
  },

  toJSON(message: EligibilityCertificate): unknown {
    const obj: any = {};
    if (message.vrfSig.length !== 0) {
      obj.vrfSig = base64FromBytes(message.vrfSig);
    }
    if (message.vrfVK.length !== 0) {
      obj.vrfVK = base64FromBytes(message.vrfVK);
    }
    if (message.thresholdEvidence.length !== 0) {
      obj.thresholdEvidence = base64FromBytes(message.thresholdEvidence);
    }
    if (message.eta.length !== 0) {
      obj.eta = base64FromBytes(message.eta);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EligibilityCertificate>, I>>(base?: I): EligibilityCertificate {
    return EligibilityCertificate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EligibilityCertificate>, I>>(object: I): EligibilityCertificate {
    const message = createBaseEligibilityCertificate();
    message.vrfSig = object.vrfSig ?? new Uint8Array(0);
    message.vrfVK = object.vrfVK ?? new Uint8Array(0);
    message.thresholdEvidence = object.thresholdEvidence ?? new Uint8Array(0);
    message.eta = object.eta ?? new Uint8Array(0);
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
