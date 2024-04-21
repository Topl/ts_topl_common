/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "co.topl.consensus.models";

/** Protocol Version Specification, see TIP-003 */
export interface ProtocolVersion {
  /** `firstDigit` Significant hard fork/version change/consensus rule set change */
  firstDigit: number;
  /** `secondDigit` Feature additions, bugs fixing hard forks, minor hard forks, significant soft forks, interface should  work the same */
  secondDigit: number;
  /** `thirdDigit` Minor changes */
  thirdDigit: number;
}

function createBaseProtocolVersion(): ProtocolVersion {
  return { firstDigit: 0, secondDigit: 0, thirdDigit: 0 };
}

export const ProtocolVersion = {
  encode(message: ProtocolVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.firstDigit !== 0) {
      writer.uint32(8).uint32(message.firstDigit);
    }
    if (message.secondDigit !== 0) {
      writer.uint32(16).uint32(message.secondDigit);
    }
    if (message.thirdDigit !== 0) {
      writer.uint32(24).uint32(message.thirdDigit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProtocolVersion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtocolVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.firstDigit = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.secondDigit = reader.uint32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.thirdDigit = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProtocolVersion {
    return {
      firstDigit: isSet(object.firstDigit) ? globalThis.Number(object.firstDigit) : 0,
      secondDigit: isSet(object.secondDigit) ? globalThis.Number(object.secondDigit) : 0,
      thirdDigit: isSet(object.thirdDigit) ? globalThis.Number(object.thirdDigit) : 0,
    };
  },

  toJSON(message: ProtocolVersion): unknown {
    const obj: any = {};
    if (message.firstDigit !== 0) {
      obj.firstDigit = Math.round(message.firstDigit);
    }
    if (message.secondDigit !== 0) {
      obj.secondDigit = Math.round(message.secondDigit);
    }
    if (message.thirdDigit !== 0) {
      obj.thirdDigit = Math.round(message.thirdDigit);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProtocolVersion>, I>>(base?: I): ProtocolVersion {
    return ProtocolVersion.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProtocolVersion>, I>>(object: I): ProtocolVersion {
    const message = createBaseProtocolVersion();
    message.firstDigit = object.firstDigit ?? 0;
    message.secondDigit = object.secondDigit ?? 0;
    message.thirdDigit = object.thirdDigit ?? 0;
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
