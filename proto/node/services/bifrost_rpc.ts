/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { TransactionId } from "../../brambl/models/identifier";
import { IoTransaction } from "../../brambl/models/transaction/io_transaction";
import { BlockHeader } from "../../consensus/models/block_header";
import { BlockId } from "../../consensus/models/block_id";
import { UInt64Value } from "../../google/protobuf/wrappers";
import { BlockBody } from "../models/block";
import { NodeConfig } from "../models/node_config";
import { EpochData } from "../models/node_epochData";

export const protobufPackage = "co.topl.node.services";

/** Request type for BroadcastTransaction */
export interface BroadcastTransactionReq {
  /** A "proven" Transaction that is meant to be included in the blockchain */
  transaction: IoTransaction | undefined;
}

/** Response type for BroadcastTransaction */
export interface BroadcastTransactionRes {
}

/** Request type for CurrentMempool */
export interface CurrentMempoolReq {
}

/** Response type for CurrentMempool */
export interface CurrentMempoolRes {
  /** A list of Transaction IDs that are currently in the node's mempool */
  transactionIds: TransactionId[];
}

/** Request type for CurrentMempoolContainsReq */
export interface CurrentMempoolContainsReq {
  transactionId: TransactionId | undefined;
}

/** Response type for CurrentMempoolContainsRes */
export interface CurrentMempoolContainsRes {
  /** Predicate indicating if the Transaction ID is currently in the node's mempool */
  inMempool: boolean;
}

/** Request type for FetchBlockHeader */
export interface FetchBlockHeaderReq {
  /** The ID of the block to retrieve */
  blockId: BlockId | undefined;
}

/** Response type for FetchBlockHeader */
export interface FetchBlockHeaderRes {
  /**
   * The Block Header associated with the requested ID.  None/null if not found.
   * optional
   */
  header: BlockHeader | undefined;
}

/** Request type for FetchBlockBody */
export interface FetchBlockBodyReq {
  /** The ID of the block to retrieve */
  blockId: BlockId | undefined;
}

/** Response type for FetchBlockBody */
export interface FetchBlockBodyRes {
  /**
   * The Block Body associated with the requested ID.  None/null if not found.
   * optional
   */
  body: BlockBody | undefined;
}

/** Request type for FetchTransaction */
export interface FetchTransactionReq {
  transactionId: TransactionId | undefined;
}

/** Response type for FetchTransaction */
export interface FetchTransactionRes {
  /**
   * The Transaction associated with the requested ID.  None/null if not found.
   * optional
   */
  transaction: IoTransaction | undefined;
}

/** Request type for FetchBlockIdAtHeight */
export interface FetchBlockIdAtHeightReq {
  /** The height of interest */
  height: number;
}

/** Response type for FetchBlockIdAtHeight */
export interface FetchBlockIdAtHeightRes {
  /**
   * The Block ID associated with the requested height.  None/null if not found.
   * optional
   */
  blockId: BlockId | undefined;
}

/** Request type for FetchBlockIdAtDepth */
export interface FetchBlockIdAtDepthReq {
  /** The depth of interest.  When depth=0, the canonical head is retrieved. */
  depth: number;
}

/** Response type for FetchBlockIdAtDepth */
export interface FetchBlockIdAtDepthRes {
  /**
   * The Block ID associated with the requested depth.  None/null if not found.
   * optional
   */
  blockId: BlockId | undefined;
}

/** Request type for SynchronizationTraversal */
export interface SynchronizationTraversalReq {
}

/** Response type for SynchronizationTraversal */
export interface SynchronizationTraversalRes {
  /** Block ID applied */
  applied?:
    | BlockId
    | undefined;
  /** Block ID unapplied */
  unapplied?: BlockId | undefined;
}

/** Request type for FetchNodeConfigReq */
export interface FetchNodeConfigReq {
}

/** Response type for FetchNodeConfigRes */
export interface FetchNodeConfigRes {
  config: NodeConfig | undefined;
}

/** Request type for FetchEpochDataReq */
export interface FetchEpochDataReq {
  epoch: number | undefined;
}

/** Response type for FetchEpochDataRes */
export interface FetchEpochDataRes {
  epochData: EpochData | undefined;
}

function createBaseBroadcastTransactionReq(): BroadcastTransactionReq {
  return { transaction: undefined };
}

export const BroadcastTransactionReq = {
  encode(message: BroadcastTransactionReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transaction !== undefined) {
      IoTransaction.encode(message.transaction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BroadcastTransactionReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBroadcastTransactionReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transaction = IoTransaction.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BroadcastTransactionReq {
    return { transaction: isSet(object.transaction) ? IoTransaction.fromJSON(object.transaction) : undefined };
  },

  toJSON(message: BroadcastTransactionReq): unknown {
    const obj: any = {};
    if (message.transaction !== undefined) {
      obj.transaction = IoTransaction.toJSON(message.transaction);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BroadcastTransactionReq>, I>>(base?: I): BroadcastTransactionReq {
    return BroadcastTransactionReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BroadcastTransactionReq>, I>>(object: I): BroadcastTransactionReq {
    const message = createBaseBroadcastTransactionReq();
    message.transaction = (object.transaction !== undefined && object.transaction !== null)
      ? IoTransaction.fromPartial(object.transaction)
      : undefined;
    return message;
  },
};

function createBaseBroadcastTransactionRes(): BroadcastTransactionRes {
  return {};
}

export const BroadcastTransactionRes = {
  encode(_: BroadcastTransactionRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BroadcastTransactionRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBroadcastTransactionRes();
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

  fromJSON(_: any): BroadcastTransactionRes {
    return {};
  },

  toJSON(_: BroadcastTransactionRes): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<BroadcastTransactionRes>, I>>(base?: I): BroadcastTransactionRes {
    return BroadcastTransactionRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BroadcastTransactionRes>, I>>(_: I): BroadcastTransactionRes {
    const message = createBaseBroadcastTransactionRes();
    return message;
  },
};

function createBaseCurrentMempoolReq(): CurrentMempoolReq {
  return {};
}

export const CurrentMempoolReq = {
  encode(_: CurrentMempoolReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrentMempoolReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentMempoolReq();
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

  fromJSON(_: any): CurrentMempoolReq {
    return {};
  },

  toJSON(_: CurrentMempoolReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CurrentMempoolReq>, I>>(base?: I): CurrentMempoolReq {
    return CurrentMempoolReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CurrentMempoolReq>, I>>(_: I): CurrentMempoolReq {
    const message = createBaseCurrentMempoolReq();
    return message;
  },
};

function createBaseCurrentMempoolRes(): CurrentMempoolRes {
  return { transactionIds: [] };
}

export const CurrentMempoolRes = {
  encode(message: CurrentMempoolRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.transactionIds) {
      TransactionId.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrentMempoolRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentMempoolRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transactionIds.push(TransactionId.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CurrentMempoolRes {
    return {
      transactionIds: globalThis.Array.isArray(object?.transactionIds)
        ? object.transactionIds.map((e: any) => TransactionId.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CurrentMempoolRes): unknown {
    const obj: any = {};
    if (message.transactionIds?.length) {
      obj.transactionIds = message.transactionIds.map((e) => TransactionId.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CurrentMempoolRes>, I>>(base?: I): CurrentMempoolRes {
    return CurrentMempoolRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CurrentMempoolRes>, I>>(object: I): CurrentMempoolRes {
    const message = createBaseCurrentMempoolRes();
    message.transactionIds = object.transactionIds?.map((e) => TransactionId.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCurrentMempoolContainsReq(): CurrentMempoolContainsReq {
  return { transactionId: undefined };
}

export const CurrentMempoolContainsReq = {
  encode(message: CurrentMempoolContainsReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionId !== undefined) {
      TransactionId.encode(message.transactionId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrentMempoolContainsReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentMempoolContainsReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transactionId = TransactionId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CurrentMempoolContainsReq {
    return { transactionId: isSet(object.transactionId) ? TransactionId.fromJSON(object.transactionId) : undefined };
  },

  toJSON(message: CurrentMempoolContainsReq): unknown {
    const obj: any = {};
    if (message.transactionId !== undefined) {
      obj.transactionId = TransactionId.toJSON(message.transactionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CurrentMempoolContainsReq>, I>>(base?: I): CurrentMempoolContainsReq {
    return CurrentMempoolContainsReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CurrentMempoolContainsReq>, I>>(object: I): CurrentMempoolContainsReq {
    const message = createBaseCurrentMempoolContainsReq();
    message.transactionId = (object.transactionId !== undefined && object.transactionId !== null)
      ? TransactionId.fromPartial(object.transactionId)
      : undefined;
    return message;
  },
};

function createBaseCurrentMempoolContainsRes(): CurrentMempoolContainsRes {
  return { inMempool: false };
}

export const CurrentMempoolContainsRes = {
  encode(message: CurrentMempoolContainsRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inMempool !== false) {
      writer.uint32(8).bool(message.inMempool);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrentMempoolContainsRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentMempoolContainsRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.inMempool = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CurrentMempoolContainsRes {
    return { inMempool: isSet(object.inMempool) ? globalThis.Boolean(object.inMempool) : false };
  },

  toJSON(message: CurrentMempoolContainsRes): unknown {
    const obj: any = {};
    if (message.inMempool !== false) {
      obj.inMempool = message.inMempool;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CurrentMempoolContainsRes>, I>>(base?: I): CurrentMempoolContainsRes {
    return CurrentMempoolContainsRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CurrentMempoolContainsRes>, I>>(object: I): CurrentMempoolContainsRes {
    const message = createBaseCurrentMempoolContainsRes();
    message.inMempool = object.inMempool ?? false;
    return message;
  },
};

function createBaseFetchBlockHeaderReq(): FetchBlockHeaderReq {
  return { blockId: undefined };
}

export const FetchBlockHeaderReq = {
  encode(message: FetchBlockHeaderReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockId !== undefined) {
      BlockId.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchBlockHeaderReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchBlockHeaderReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.blockId = BlockId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FetchBlockHeaderReq {
    return { blockId: isSet(object.blockId) ? BlockId.fromJSON(object.blockId) : undefined };
  },

  toJSON(message: FetchBlockHeaderReq): unknown {
    const obj: any = {};
    if (message.blockId !== undefined) {
      obj.blockId = BlockId.toJSON(message.blockId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FetchBlockHeaderReq>, I>>(base?: I): FetchBlockHeaderReq {
    return FetchBlockHeaderReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FetchBlockHeaderReq>, I>>(object: I): FetchBlockHeaderReq {
    const message = createBaseFetchBlockHeaderReq();
    message.blockId = (object.blockId !== undefined && object.blockId !== null)
      ? BlockId.fromPartial(object.blockId)
      : undefined;
    return message;
  },
};

function createBaseFetchBlockHeaderRes(): FetchBlockHeaderRes {
  return { header: undefined };
}

export const FetchBlockHeaderRes = {
  encode(message: FetchBlockHeaderRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      BlockHeader.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchBlockHeaderRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchBlockHeaderRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.header = BlockHeader.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FetchBlockHeaderRes {
    return { header: isSet(object.header) ? BlockHeader.fromJSON(object.header) : undefined };
  },

  toJSON(message: FetchBlockHeaderRes): unknown {
    const obj: any = {};
    if (message.header !== undefined) {
      obj.header = BlockHeader.toJSON(message.header);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FetchBlockHeaderRes>, I>>(base?: I): FetchBlockHeaderRes {
    return FetchBlockHeaderRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FetchBlockHeaderRes>, I>>(object: I): FetchBlockHeaderRes {
    const message = createBaseFetchBlockHeaderRes();
    message.header = (object.header !== undefined && object.header !== null)
      ? BlockHeader.fromPartial(object.header)
      : undefined;
    return message;
  },
};

function createBaseFetchBlockBodyReq(): FetchBlockBodyReq {
  return { blockId: undefined };
}

export const FetchBlockBodyReq = {
  encode(message: FetchBlockBodyReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockId !== undefined) {
      BlockId.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchBlockBodyReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchBlockBodyReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.blockId = BlockId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FetchBlockBodyReq {
    return { blockId: isSet(object.blockId) ? BlockId.fromJSON(object.blockId) : undefined };
  },

  toJSON(message: FetchBlockBodyReq): unknown {
    const obj: any = {};
    if (message.blockId !== undefined) {
      obj.blockId = BlockId.toJSON(message.blockId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FetchBlockBodyReq>, I>>(base?: I): FetchBlockBodyReq {
    return FetchBlockBodyReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FetchBlockBodyReq>, I>>(object: I): FetchBlockBodyReq {
    const message = createBaseFetchBlockBodyReq();
    message.blockId = (object.blockId !== undefined && object.blockId !== null)
      ? BlockId.fromPartial(object.blockId)
      : undefined;
    return message;
  },
};

function createBaseFetchBlockBodyRes(): FetchBlockBodyRes {
  return { body: undefined };
}

export const FetchBlockBodyRes = {
  encode(message: FetchBlockBodyRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.body !== undefined) {
      BlockBody.encode(message.body, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchBlockBodyRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchBlockBodyRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.body = BlockBody.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FetchBlockBodyRes {
    return { body: isSet(object.body) ? BlockBody.fromJSON(object.body) : undefined };
  },

  toJSON(message: FetchBlockBodyRes): unknown {
    const obj: any = {};
    if (message.body !== undefined) {
      obj.body = BlockBody.toJSON(message.body);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FetchBlockBodyRes>, I>>(base?: I): FetchBlockBodyRes {
    return FetchBlockBodyRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FetchBlockBodyRes>, I>>(object: I): FetchBlockBodyRes {
    const message = createBaseFetchBlockBodyRes();
    message.body = (object.body !== undefined && object.body !== null) ? BlockBody.fromPartial(object.body) : undefined;
    return message;
  },
};

function createBaseFetchTransactionReq(): FetchTransactionReq {
  return { transactionId: undefined };
}

export const FetchTransactionReq = {
  encode(message: FetchTransactionReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionId !== undefined) {
      TransactionId.encode(message.transactionId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchTransactionReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchTransactionReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transactionId = TransactionId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FetchTransactionReq {
    return { transactionId: isSet(object.transactionId) ? TransactionId.fromJSON(object.transactionId) : undefined };
  },

  toJSON(message: FetchTransactionReq): unknown {
    const obj: any = {};
    if (message.transactionId !== undefined) {
      obj.transactionId = TransactionId.toJSON(message.transactionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FetchTransactionReq>, I>>(base?: I): FetchTransactionReq {
    return FetchTransactionReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FetchTransactionReq>, I>>(object: I): FetchTransactionReq {
    const message = createBaseFetchTransactionReq();
    message.transactionId = (object.transactionId !== undefined && object.transactionId !== null)
      ? TransactionId.fromPartial(object.transactionId)
      : undefined;
    return message;
  },
};

function createBaseFetchTransactionRes(): FetchTransactionRes {
  return { transaction: undefined };
}

export const FetchTransactionRes = {
  encode(message: FetchTransactionRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transaction !== undefined) {
      IoTransaction.encode(message.transaction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchTransactionRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchTransactionRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transaction = IoTransaction.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FetchTransactionRes {
    return { transaction: isSet(object.transaction) ? IoTransaction.fromJSON(object.transaction) : undefined };
  },

  toJSON(message: FetchTransactionRes): unknown {
    const obj: any = {};
    if (message.transaction !== undefined) {
      obj.transaction = IoTransaction.toJSON(message.transaction);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FetchTransactionRes>, I>>(base?: I): FetchTransactionRes {
    return FetchTransactionRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FetchTransactionRes>, I>>(object: I): FetchTransactionRes {
    const message = createBaseFetchTransactionRes();
    message.transaction = (object.transaction !== undefined && object.transaction !== null)
      ? IoTransaction.fromPartial(object.transaction)
      : undefined;
    return message;
  },
};

function createBaseFetchBlockIdAtHeightReq(): FetchBlockIdAtHeightReq {
  return { height: 0 };
}

export const FetchBlockIdAtHeightReq = {
  encode(message: FetchBlockIdAtHeightReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).uint64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchBlockIdAtHeightReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchBlockIdAtHeightReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.height = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FetchBlockIdAtHeightReq {
    return { height: isSet(object.height) ? globalThis.Number(object.height) : 0 };
  },

  toJSON(message: FetchBlockIdAtHeightReq): unknown {
    const obj: any = {};
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FetchBlockIdAtHeightReq>, I>>(base?: I): FetchBlockIdAtHeightReq {
    return FetchBlockIdAtHeightReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FetchBlockIdAtHeightReq>, I>>(object: I): FetchBlockIdAtHeightReq {
    const message = createBaseFetchBlockIdAtHeightReq();
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseFetchBlockIdAtHeightRes(): FetchBlockIdAtHeightRes {
  return { blockId: undefined };
}

export const FetchBlockIdAtHeightRes = {
  encode(message: FetchBlockIdAtHeightRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockId !== undefined) {
      BlockId.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchBlockIdAtHeightRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchBlockIdAtHeightRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.blockId = BlockId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FetchBlockIdAtHeightRes {
    return { blockId: isSet(object.blockId) ? BlockId.fromJSON(object.blockId) : undefined };
  },

  toJSON(message: FetchBlockIdAtHeightRes): unknown {
    const obj: any = {};
    if (message.blockId !== undefined) {
      obj.blockId = BlockId.toJSON(message.blockId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FetchBlockIdAtHeightRes>, I>>(base?: I): FetchBlockIdAtHeightRes {
    return FetchBlockIdAtHeightRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FetchBlockIdAtHeightRes>, I>>(object: I): FetchBlockIdAtHeightRes {
    const message = createBaseFetchBlockIdAtHeightRes();
    message.blockId = (object.blockId !== undefined && object.blockId !== null)
      ? BlockId.fromPartial(object.blockId)
      : undefined;
    return message;
  },
};

function createBaseFetchBlockIdAtDepthReq(): FetchBlockIdAtDepthReq {
  return { depth: 0 };
}

export const FetchBlockIdAtDepthReq = {
  encode(message: FetchBlockIdAtDepthReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depth !== 0) {
      writer.uint32(8).uint64(message.depth);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchBlockIdAtDepthReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchBlockIdAtDepthReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.depth = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FetchBlockIdAtDepthReq {
    return { depth: isSet(object.depth) ? globalThis.Number(object.depth) : 0 };
  },

  toJSON(message: FetchBlockIdAtDepthReq): unknown {
    const obj: any = {};
    if (message.depth !== 0) {
      obj.depth = Math.round(message.depth);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FetchBlockIdAtDepthReq>, I>>(base?: I): FetchBlockIdAtDepthReq {
    return FetchBlockIdAtDepthReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FetchBlockIdAtDepthReq>, I>>(object: I): FetchBlockIdAtDepthReq {
    const message = createBaseFetchBlockIdAtDepthReq();
    message.depth = object.depth ?? 0;
    return message;
  },
};

function createBaseFetchBlockIdAtDepthRes(): FetchBlockIdAtDepthRes {
  return { blockId: undefined };
}

export const FetchBlockIdAtDepthRes = {
  encode(message: FetchBlockIdAtDepthRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockId !== undefined) {
      BlockId.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchBlockIdAtDepthRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchBlockIdAtDepthRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.blockId = BlockId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FetchBlockIdAtDepthRes {
    return { blockId: isSet(object.blockId) ? BlockId.fromJSON(object.blockId) : undefined };
  },

  toJSON(message: FetchBlockIdAtDepthRes): unknown {
    const obj: any = {};
    if (message.blockId !== undefined) {
      obj.blockId = BlockId.toJSON(message.blockId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FetchBlockIdAtDepthRes>, I>>(base?: I): FetchBlockIdAtDepthRes {
    return FetchBlockIdAtDepthRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FetchBlockIdAtDepthRes>, I>>(object: I): FetchBlockIdAtDepthRes {
    const message = createBaseFetchBlockIdAtDepthRes();
    message.blockId = (object.blockId !== undefined && object.blockId !== null)
      ? BlockId.fromPartial(object.blockId)
      : undefined;
    return message;
  },
};

function createBaseSynchronizationTraversalReq(): SynchronizationTraversalReq {
  return {};
}

export const SynchronizationTraversalReq = {
  encode(_: SynchronizationTraversalReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SynchronizationTraversalReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSynchronizationTraversalReq();
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

  fromJSON(_: any): SynchronizationTraversalReq {
    return {};
  },

  toJSON(_: SynchronizationTraversalReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<SynchronizationTraversalReq>, I>>(base?: I): SynchronizationTraversalReq {
    return SynchronizationTraversalReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SynchronizationTraversalReq>, I>>(_: I): SynchronizationTraversalReq {
    const message = createBaseSynchronizationTraversalReq();
    return message;
  },
};

function createBaseSynchronizationTraversalRes(): SynchronizationTraversalRes {
  return { applied: undefined, unapplied: undefined };
}

export const SynchronizationTraversalRes = {
  encode(message: SynchronizationTraversalRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.applied !== undefined) {
      BlockId.encode(message.applied, writer.uint32(10).fork()).ldelim();
    }
    if (message.unapplied !== undefined) {
      BlockId.encode(message.unapplied, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SynchronizationTraversalRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSynchronizationTraversalRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.applied = BlockId.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.unapplied = BlockId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SynchronizationTraversalRes {
    return {
      applied: isSet(object.applied) ? BlockId.fromJSON(object.applied) : undefined,
      unapplied: isSet(object.unapplied) ? BlockId.fromJSON(object.unapplied) : undefined,
    };
  },

  toJSON(message: SynchronizationTraversalRes): unknown {
    const obj: any = {};
    if (message.applied !== undefined) {
      obj.applied = BlockId.toJSON(message.applied);
    }
    if (message.unapplied !== undefined) {
      obj.unapplied = BlockId.toJSON(message.unapplied);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SynchronizationTraversalRes>, I>>(base?: I): SynchronizationTraversalRes {
    return SynchronizationTraversalRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SynchronizationTraversalRes>, I>>(object: I): SynchronizationTraversalRes {
    const message = createBaseSynchronizationTraversalRes();
    message.applied = (object.applied !== undefined && object.applied !== null)
      ? BlockId.fromPartial(object.applied)
      : undefined;
    message.unapplied = (object.unapplied !== undefined && object.unapplied !== null)
      ? BlockId.fromPartial(object.unapplied)
      : undefined;
    return message;
  },
};

function createBaseFetchNodeConfigReq(): FetchNodeConfigReq {
  return {};
}

export const FetchNodeConfigReq = {
  encode(_: FetchNodeConfigReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchNodeConfigReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchNodeConfigReq();
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

  fromJSON(_: any): FetchNodeConfigReq {
    return {};
  },

  toJSON(_: FetchNodeConfigReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<FetchNodeConfigReq>, I>>(base?: I): FetchNodeConfigReq {
    return FetchNodeConfigReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FetchNodeConfigReq>, I>>(_: I): FetchNodeConfigReq {
    const message = createBaseFetchNodeConfigReq();
    return message;
  },
};

function createBaseFetchNodeConfigRes(): FetchNodeConfigRes {
  return { config: undefined };
}

export const FetchNodeConfigRes = {
  encode(message: FetchNodeConfigRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      NodeConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchNodeConfigRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchNodeConfigRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.config = NodeConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FetchNodeConfigRes {
    return { config: isSet(object.config) ? NodeConfig.fromJSON(object.config) : undefined };
  },

  toJSON(message: FetchNodeConfigRes): unknown {
    const obj: any = {};
    if (message.config !== undefined) {
      obj.config = NodeConfig.toJSON(message.config);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FetchNodeConfigRes>, I>>(base?: I): FetchNodeConfigRes {
    return FetchNodeConfigRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FetchNodeConfigRes>, I>>(object: I): FetchNodeConfigRes {
    const message = createBaseFetchNodeConfigRes();
    message.config = (object.config !== undefined && object.config !== null)
      ? NodeConfig.fromPartial(object.config)
      : undefined;
    return message;
  },
};

function createBaseFetchEpochDataReq(): FetchEpochDataReq {
  return { epoch: undefined };
}

export const FetchEpochDataReq = {
  encode(message: FetchEpochDataReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epoch !== undefined) {
      UInt64Value.encode({ value: message.epoch! }, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchEpochDataReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchEpochDataReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.epoch = UInt64Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FetchEpochDataReq {
    return { epoch: isSet(object.epoch) ? Number(object.epoch) : undefined };
  },

  toJSON(message: FetchEpochDataReq): unknown {
    const obj: any = {};
    if (message.epoch !== undefined) {
      obj.epoch = message.epoch;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FetchEpochDataReq>, I>>(base?: I): FetchEpochDataReq {
    return FetchEpochDataReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FetchEpochDataReq>, I>>(object: I): FetchEpochDataReq {
    const message = createBaseFetchEpochDataReq();
    message.epoch = object.epoch ?? undefined;
    return message;
  },
};

function createBaseFetchEpochDataRes(): FetchEpochDataRes {
  return { epochData: undefined };
}

export const FetchEpochDataRes = {
  encode(message: FetchEpochDataRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochData !== undefined) {
      EpochData.encode(message.epochData, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchEpochDataRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchEpochDataRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.epochData = EpochData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FetchEpochDataRes {
    return { epochData: isSet(object.epochData) ? EpochData.fromJSON(object.epochData) : undefined };
  },

  toJSON(message: FetchEpochDataRes): unknown {
    const obj: any = {};
    if (message.epochData !== undefined) {
      obj.epochData = EpochData.toJSON(message.epochData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FetchEpochDataRes>, I>>(base?: I): FetchEpochDataRes {
    return FetchEpochDataRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FetchEpochDataRes>, I>>(object: I): FetchEpochDataRes {
    const message = createBaseFetchEpochDataRes();
    message.epochData = (object.epochData !== undefined && object.epochData !== null)
      ? EpochData.fromPartial(object.epochData)
      : undefined;
    return message;
  },
};

export interface NodeRpc {
  /** Submit a proven Transaction to the node */
  BroadcastTransaction(request: BroadcastTransactionReq): Promise<BroadcastTransactionRes>;
  /** Read the contents of the node's mempool */
  CurrentMempool(request: CurrentMempoolReq): Promise<CurrentMempoolRes>;
  /** Check the content of the node's mempool and return if a Transaction Id exists */
  CurrentMempoolContains(request: CurrentMempoolContainsReq): Promise<CurrentMempoolContainsRes>;
  /** retrieve a Block Header by its ID */
  FetchBlockHeader(request: FetchBlockHeaderReq): Promise<FetchBlockHeaderRes>;
  /** retrieve a Block Body by its ID */
  FetchBlockBody(request: FetchBlockBodyReq): Promise<FetchBlockBodyRes>;
  /** retrieve a Transaction by its ID */
  FetchTransaction(request: FetchTransactionReq): Promise<FetchTransactionRes>;
  /** retrieve the Block ID associated with a height, according to the node's canonical chain */
  FetchBlockIdAtHeight(request: FetchBlockIdAtHeightReq): Promise<FetchBlockIdAtHeightRes>;
  /** retrieve the Block ID associated with a depth, according to the node's canonical chain */
  FetchBlockIdAtDepth(request: FetchBlockIdAtDepthReq): Promise<FetchBlockIdAtDepthRes>;
  /** retrieve a stream of changes to the canonical head of the chain. */
  SynchronizationTraversal(request: SynchronizationTraversalReq): Observable<SynchronizationTraversalRes>;
  /** retrieve a stream of node's protocol configuration */
  FetchNodeConfig(request: FetchNodeConfigReq): Observable<FetchNodeConfigRes>;
  /** retrieve epoch data content */
  FetchEpochData(request: FetchEpochDataReq): Promise<FetchEpochDataRes>;
}

export const NodeRpcServiceName = "co.topl.node.services.NodeRpc";
export class NodeRpcClientImpl implements NodeRpc {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || NodeRpcServiceName;
    this.rpc = rpc;
    this.BroadcastTransaction = this.BroadcastTransaction.bind(this);
    this.CurrentMempool = this.CurrentMempool.bind(this);
    this.CurrentMempoolContains = this.CurrentMempoolContains.bind(this);
    this.FetchBlockHeader = this.FetchBlockHeader.bind(this);
    this.FetchBlockBody = this.FetchBlockBody.bind(this);
    this.FetchTransaction = this.FetchTransaction.bind(this);
    this.FetchBlockIdAtHeight = this.FetchBlockIdAtHeight.bind(this);
    this.FetchBlockIdAtDepth = this.FetchBlockIdAtDepth.bind(this);
    this.SynchronizationTraversal = this.SynchronizationTraversal.bind(this);
    this.FetchNodeConfig = this.FetchNodeConfig.bind(this);
    this.FetchEpochData = this.FetchEpochData.bind(this);
  }
  BroadcastTransaction(request: BroadcastTransactionReq): Promise<BroadcastTransactionRes> {
    const data = BroadcastTransactionReq.encode(request).finish();
    const promise = this.rpc.request(this.service, "BroadcastTransaction", data);
    return promise.then((data) => BroadcastTransactionRes.decode(_m0.Reader.create(data)));
  }

  CurrentMempool(request: CurrentMempoolReq): Promise<CurrentMempoolRes> {
    const data = CurrentMempoolReq.encode(request).finish();
    const promise = this.rpc.request(this.service, "CurrentMempool", data);
    return promise.then((data) => CurrentMempoolRes.decode(_m0.Reader.create(data)));
  }

  CurrentMempoolContains(request: CurrentMempoolContainsReq): Promise<CurrentMempoolContainsRes> {
    const data = CurrentMempoolContainsReq.encode(request).finish();
    const promise = this.rpc.request(this.service, "CurrentMempoolContains", data);
    return promise.then((data) => CurrentMempoolContainsRes.decode(_m0.Reader.create(data)));
  }

  FetchBlockHeader(request: FetchBlockHeaderReq): Promise<FetchBlockHeaderRes> {
    const data = FetchBlockHeaderReq.encode(request).finish();
    const promise = this.rpc.request(this.service, "FetchBlockHeader", data);
    return promise.then((data) => FetchBlockHeaderRes.decode(_m0.Reader.create(data)));
  }

  FetchBlockBody(request: FetchBlockBodyReq): Promise<FetchBlockBodyRes> {
    const data = FetchBlockBodyReq.encode(request).finish();
    const promise = this.rpc.request(this.service, "FetchBlockBody", data);
    return promise.then((data) => FetchBlockBodyRes.decode(_m0.Reader.create(data)));
  }

  FetchTransaction(request: FetchTransactionReq): Promise<FetchTransactionRes> {
    const data = FetchTransactionReq.encode(request).finish();
    const promise = this.rpc.request(this.service, "FetchTransaction", data);
    return promise.then((data) => FetchTransactionRes.decode(_m0.Reader.create(data)));
  }

  FetchBlockIdAtHeight(request: FetchBlockIdAtHeightReq): Promise<FetchBlockIdAtHeightRes> {
    const data = FetchBlockIdAtHeightReq.encode(request).finish();
    const promise = this.rpc.request(this.service, "FetchBlockIdAtHeight", data);
    return promise.then((data) => FetchBlockIdAtHeightRes.decode(_m0.Reader.create(data)));
  }

  FetchBlockIdAtDepth(request: FetchBlockIdAtDepthReq): Promise<FetchBlockIdAtDepthRes> {
    const data = FetchBlockIdAtDepthReq.encode(request).finish();
    const promise = this.rpc.request(this.service, "FetchBlockIdAtDepth", data);
    return promise.then((data) => FetchBlockIdAtDepthRes.decode(_m0.Reader.create(data)));
  }

  SynchronizationTraversal(request: SynchronizationTraversalReq): Observable<SynchronizationTraversalRes> {
    const data = SynchronizationTraversalReq.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(this.service, "SynchronizationTraversal", data);
    return result.pipe(map((data) => SynchronizationTraversalRes.decode(_m0.Reader.create(data))));
  }

  FetchNodeConfig(request: FetchNodeConfigReq): Observable<FetchNodeConfigRes> {
    const data = FetchNodeConfigReq.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(this.service, "FetchNodeConfig", data);
    return result.pipe(map((data) => FetchNodeConfigRes.decode(_m0.Reader.create(data))));
  }

  FetchEpochData(request: FetchEpochDataReq): Promise<FetchEpochDataRes> {
    const data = FetchEpochDataReq.encode(request).finish();
    const promise = this.rpc.request(this.service, "FetchEpochData", data);
    return promise.then((data) => FetchEpochDataRes.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
  clientStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Promise<Uint8Array>;
  serverStreamingRequest(service: string, method: string, data: Uint8Array): Observable<Uint8Array>;
  bidirectionalStreamingRequest(service: string, method: string, data: Observable<Uint8Array>): Observable<Uint8Array>;
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
