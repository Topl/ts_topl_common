/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Int128 } from "../../quivr/models/shared";
import { SignatureKesProduct } from "./operational_certificate";

export const protobufPackage = "co.topl.consensus.models";

/** A reference to a unique staker */
export interface StakingAddress {
  /** The address bytes of the staker, usually an ed25519 VK */
  value: Uint8Array;
}

/** A proof-of-stake registration */
export interface StakingRegistration {
  /** the staker's address */
  address:
    | StakingAddress
    | undefined;
  /** the staker's commitment to a VRF VK and StakingAddress, signed using KES SK at timestep=0 */
  signature: SignatureKesProduct | undefined;
}

/** An active, registered participate in the consensus protocol, for a particular epoch. */
export interface ActiveStaker {
  /** the staker's registration */
  registration:
    | StakingRegistration
    | undefined;
  /** the quantity of staked tokens for the epoch */
  quantity: Int128 | undefined;
}

function createBaseStakingAddress(): StakingAddress {
  return { value: new Uint8Array(0) };
}

export const StakingAddress = {
  encode(message: StakingAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingAddress {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingAddress();
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

  fromJSON(object: any): StakingAddress {
    return { value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0) };
  },

  toJSON(message: StakingAddress): unknown {
    const obj: any = {};
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StakingAddress>, I>>(base?: I): StakingAddress {
    return StakingAddress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StakingAddress>, I>>(object: I): StakingAddress {
    const message = createBaseStakingAddress();
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseStakingRegistration(): StakingRegistration {
  return { address: undefined, signature: undefined };
}

export const StakingRegistration = {
  encode(message: StakingRegistration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== undefined) {
      StakingAddress.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    if (message.signature !== undefined) {
      SignatureKesProduct.encode(message.signature, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakingRegistration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakingRegistration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = StakingAddress.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.signature = SignatureKesProduct.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StakingRegistration {
    return {
      address: isSet(object.address) ? StakingAddress.fromJSON(object.address) : undefined,
      signature: isSet(object.signature) ? SignatureKesProduct.fromJSON(object.signature) : undefined,
    };
  },

  toJSON(message: StakingRegistration): unknown {
    const obj: any = {};
    if (message.address !== undefined) {
      obj.address = StakingAddress.toJSON(message.address);
    }
    if (message.signature !== undefined) {
      obj.signature = SignatureKesProduct.toJSON(message.signature);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StakingRegistration>, I>>(base?: I): StakingRegistration {
    return StakingRegistration.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StakingRegistration>, I>>(object: I): StakingRegistration {
    const message = createBaseStakingRegistration();
    message.address = (object.address !== undefined && object.address !== null)
      ? StakingAddress.fromPartial(object.address)
      : undefined;
    message.signature = (object.signature !== undefined && object.signature !== null)
      ? SignatureKesProduct.fromPartial(object.signature)
      : undefined;
    return message;
  },
};

function createBaseActiveStaker(): ActiveStaker {
  return { registration: undefined, quantity: undefined };
}

export const ActiveStaker = {
  encode(message: ActiveStaker, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registration !== undefined) {
      StakingRegistration.encode(message.registration, writer.uint32(10).fork()).ldelim();
    }
    if (message.quantity !== undefined) {
      Int128.encode(message.quantity, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActiveStaker {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveStaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.registration = StakingRegistration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.quantity = Int128.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ActiveStaker {
    return {
      registration: isSet(object.registration) ? StakingRegistration.fromJSON(object.registration) : undefined,
      quantity: isSet(object.quantity) ? Int128.fromJSON(object.quantity) : undefined,
    };
  },

  toJSON(message: ActiveStaker): unknown {
    const obj: any = {};
    if (message.registration !== undefined) {
      obj.registration = StakingRegistration.toJSON(message.registration);
    }
    if (message.quantity !== undefined) {
      obj.quantity = Int128.toJSON(message.quantity);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ActiveStaker>, I>>(base?: I): ActiveStaker {
    return ActiveStaker.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ActiveStaker>, I>>(object: I): ActiveStaker {
    const message = createBaseActiveStaker();
    message.registration = (object.registration !== undefined && object.registration !== null)
      ? StakingRegistration.fromPartial(object.registration)
      : undefined;
    message.quantity = (object.quantity !== undefined && object.quantity !== null)
      ? Int128.fromPartial(object.quantity)
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
