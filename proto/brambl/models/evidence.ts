/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Digest } from "../../quivr/models/shared";

export const protobufPackage = "co.topl.brambl.models";

/**
 * Evidence should be a succinct, unique set of bytes used to distinguish between any two data objects.
 * Evidence is also meant to have a minimal amount of structure such that other domains may provide
 * their own similarly unique & succinct values. Quivr can cast such external domain "evidence" into Topl evidence
 * through the use of ContainsSignable[Evidence[_]]
 */
export interface Evidence {
  digest: Digest | undefined;
}

function createBaseEvidence(): Evidence {
  return { digest: undefined };
}

export const Evidence = {
  encode(message: Evidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.digest !== undefined) {
      Digest.encode(message.digest, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Evidence {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): Evidence {
    return { digest: isSet(object.digest) ? Digest.fromJSON(object.digest) : undefined };
  },

  toJSON(message: Evidence): unknown {
    const obj: any = {};
    if (message.digest !== undefined) {
      obj.digest = Digest.toJSON(message.digest);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Evidence>, I>>(base?: I): Evidence {
    return Evidence.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Evidence>, I>>(object: I): Evidence {
    const message = createBaseEvidence();
    message.digest = (object.digest !== undefined && object.digest !== null)
      ? Digest.fromPartial(object.digest)
      : undefined;
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
