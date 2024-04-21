/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { BlockId } from "./block_id";
import { EligibilityCertificate } from "./eligibility_certificate";
import { OperationalCertificate } from "./operational_certificate";
import { ProtocolVersion } from "./protocol_version";
import { StakingAddress } from "./staking";

export const protobufPackage = "co.topl.consensus.models";

/** Captures a block producer's consensus-commitment to a new block */
export interface BlockHeader {
  /**
   * The ID of _this_ block header.  This value is optional and its contents are not included in the signable or identifiable data.  Clients which _can_ verify
   * this value should verify this value, but some clients may not be able to or need to, in which case this field acts as a convenience.
   */
  headerId:
    | BlockId
    | undefined;
  /** The parent block's ID.  Each header builds from a single parent. */
  parentHeaderId:
    | BlockId
    | undefined;
  /** The slot of the parent block */
  parentSlot: number;
  /**
   * The commitment/accumulator of the block body
   * length = 32
   */
  txRoot: Uint8Array;
  /**
   * A fuzzy search for addresses associated with this block
   * length = 256
   */
  bloomFilter: Uint8Array;
  /** The UTC UNIX timestamp (ms) when the block was created */
  timestamp: number;
  /** The 1-based index of this block in the blockchain */
  height: number;
  /** The time-slot in which the block producer created the block */
  slot: number;
  /** A certificate indicating that the block producer was eligible to make this block */
  eligibilityCertificate:
    | EligibilityCertificate
    | undefined;
  /** A certificate indicating the operator's commitment to this block */
  operationalCertificate:
    | OperationalCertificate
    | undefined;
  /**
   * Optional metadata stamped by the operator.  Must be latin-1 encoded, and must be at most 32 bytes in length.
   * optional
   */
  metadata: Uint8Array;
  /** The operator's staking address */
  address:
    | StakingAddress
    | undefined;
  /** Protocol Version */
  version: ProtocolVersion | undefined;
}

function createBaseBlockHeader(): BlockHeader {
  return {
    headerId: undefined,
    parentHeaderId: undefined,
    parentSlot: 0,
    txRoot: new Uint8Array(0),
    bloomFilter: new Uint8Array(0),
    timestamp: 0,
    height: 0,
    slot: 0,
    eligibilityCertificate: undefined,
    operationalCertificate: undefined,
    metadata: new Uint8Array(0),
    address: undefined,
    version: undefined,
  };
}

export const BlockHeader = {
  encode(message: BlockHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.headerId !== undefined) {
      BlockId.encode(message.headerId, writer.uint32(98).fork()).ldelim();
    }
    if (message.parentHeaderId !== undefined) {
      BlockId.encode(message.parentHeaderId, writer.uint32(10).fork()).ldelim();
    }
    if (message.parentSlot !== 0) {
      writer.uint32(16).uint64(message.parentSlot);
    }
    if (message.txRoot.length !== 0) {
      writer.uint32(26).bytes(message.txRoot);
    }
    if (message.bloomFilter.length !== 0) {
      writer.uint32(34).bytes(message.bloomFilter);
    }
    if (message.timestamp !== 0) {
      writer.uint32(40).uint64(message.timestamp);
    }
    if (message.height !== 0) {
      writer.uint32(48).uint64(message.height);
    }
    if (message.slot !== 0) {
      writer.uint32(56).uint64(message.slot);
    }
    if (message.eligibilityCertificate !== undefined) {
      EligibilityCertificate.encode(message.eligibilityCertificate, writer.uint32(66).fork()).ldelim();
    }
    if (message.operationalCertificate !== undefined) {
      OperationalCertificate.encode(message.operationalCertificate, writer.uint32(74).fork()).ldelim();
    }
    if (message.metadata.length !== 0) {
      writer.uint32(82).bytes(message.metadata);
    }
    if (message.address !== undefined) {
      StakingAddress.encode(message.address, writer.uint32(90).fork()).ldelim();
    }
    if (message.version !== undefined) {
      ProtocolVersion.encode(message.version, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockHeader {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 12:
          if (tag !== 98) {
            break;
          }

          message.headerId = BlockId.decode(reader, reader.uint32());
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parentHeaderId = BlockId.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.parentSlot = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.txRoot = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bloomFilter = reader.bytes();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.timestamp = longToNumber(reader.uint64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.height = longToNumber(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.slot = longToNumber(reader.uint64() as Long);
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.eligibilityCertificate = EligibilityCertificate.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.operationalCertificate = OperationalCertificate.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.metadata = reader.bytes();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.address = StakingAddress.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.version = ProtocolVersion.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlockHeader {
    return {
      headerId: isSet(object.headerId) ? BlockId.fromJSON(object.headerId) : undefined,
      parentHeaderId: isSet(object.parentHeaderId) ? BlockId.fromJSON(object.parentHeaderId) : undefined,
      parentSlot: isSet(object.parentSlot) ? globalThis.Number(object.parentSlot) : 0,
      txRoot: isSet(object.txRoot) ? bytesFromBase64(object.txRoot) : new Uint8Array(0),
      bloomFilter: isSet(object.bloomFilter) ? bytesFromBase64(object.bloomFilter) : new Uint8Array(0),
      timestamp: isSet(object.timestamp) ? globalThis.Number(object.timestamp) : 0,
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
      slot: isSet(object.slot) ? globalThis.Number(object.slot) : 0,
      eligibilityCertificate: isSet(object.eligibilityCertificate)
        ? EligibilityCertificate.fromJSON(object.eligibilityCertificate)
        : undefined,
      operationalCertificate: isSet(object.operationalCertificate)
        ? OperationalCertificate.fromJSON(object.operationalCertificate)
        : undefined,
      metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(0),
      address: isSet(object.address) ? StakingAddress.fromJSON(object.address) : undefined,
      version: isSet(object.version) ? ProtocolVersion.fromJSON(object.version) : undefined,
    };
  },

  toJSON(message: BlockHeader): unknown {
    const obj: any = {};
    if (message.headerId !== undefined) {
      obj.headerId = BlockId.toJSON(message.headerId);
    }
    if (message.parentHeaderId !== undefined) {
      obj.parentHeaderId = BlockId.toJSON(message.parentHeaderId);
    }
    if (message.parentSlot !== 0) {
      obj.parentSlot = Math.round(message.parentSlot);
    }
    if (message.txRoot.length !== 0) {
      obj.txRoot = base64FromBytes(message.txRoot);
    }
    if (message.bloomFilter.length !== 0) {
      obj.bloomFilter = base64FromBytes(message.bloomFilter);
    }
    if (message.timestamp !== 0) {
      obj.timestamp = Math.round(message.timestamp);
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    if (message.slot !== 0) {
      obj.slot = Math.round(message.slot);
    }
    if (message.eligibilityCertificate !== undefined) {
      obj.eligibilityCertificate = EligibilityCertificate.toJSON(message.eligibilityCertificate);
    }
    if (message.operationalCertificate !== undefined) {
      obj.operationalCertificate = OperationalCertificate.toJSON(message.operationalCertificate);
    }
    if (message.metadata.length !== 0) {
      obj.metadata = base64FromBytes(message.metadata);
    }
    if (message.address !== undefined) {
      obj.address = StakingAddress.toJSON(message.address);
    }
    if (message.version !== undefined) {
      obj.version = ProtocolVersion.toJSON(message.version);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BlockHeader>, I>>(base?: I): BlockHeader {
    return BlockHeader.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BlockHeader>, I>>(object: I): BlockHeader {
    const message = createBaseBlockHeader();
    message.headerId = (object.headerId !== undefined && object.headerId !== null)
      ? BlockId.fromPartial(object.headerId)
      : undefined;
    message.parentHeaderId = (object.parentHeaderId !== undefined && object.parentHeaderId !== null)
      ? BlockId.fromPartial(object.parentHeaderId)
      : undefined;
    message.parentSlot = object.parentSlot ?? 0;
    message.txRoot = object.txRoot ?? new Uint8Array(0);
    message.bloomFilter = object.bloomFilter ?? new Uint8Array(0);
    message.timestamp = object.timestamp ?? 0;
    message.height = object.height ?? 0;
    message.slot = object.slot ?? 0;
    message.eligibilityCertificate =
      (object.eligibilityCertificate !== undefined && object.eligibilityCertificate !== null)
        ? EligibilityCertificate.fromPartial(object.eligibilityCertificate)
        : undefined;
    message.operationalCertificate =
      (object.operationalCertificate !== undefined && object.operationalCertificate !== null)
        ? OperationalCertificate.fromPartial(object.operationalCertificate)
        : undefined;
    message.metadata = object.metadata ?? new Uint8Array(0);
    message.address = (object.address !== undefined && object.address !== null)
      ? StakingAddress.fromPartial(object.address)
      : undefined;
    message.version = (object.version !== undefined && object.version !== null)
      ? ProtocolVersion.fromPartial(object.version)
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
