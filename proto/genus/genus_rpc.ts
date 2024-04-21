/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { LockAddress } from "../brambl/models/address";
import { Event_GroupPolicy, Event_SeriesPolicy } from "../brambl/models/event";
import { GroupId, SeriesId, TransactionId } from "../brambl/models/identifier";
import { BlockId } from "../consensus/models/block_id";
import { StringValue } from "../google/protobuf/wrappers";
import { FullBlock } from "../node/models/block";
import {
  AssetLabel,
  ChainDistance,
  ConfidenceFactor,
  IndexSpec,
  TransactionReceipt,
  Txo,
  TxoState,
  txoStateFromJSON,
  txoStateToJSON,
} from "./genus_models";

export const protobufPackage = "co.topl.genus.services";

export interface GetExistingTransactionIndexesResponse {
  indexSpecs: IndexSpecs | undefined;
}

export interface BlockResponse {
  block: FullBlock | undefined;
}

export interface TransactionResponse {
  transactionReceipt: TransactionReceipt | undefined;
}

export interface TxoResponse {
  txo: Txo | undefined;
}

export interface GetBlockByIdRequest {
  blockId: BlockId | undefined;
  confidenceFactor: ConfidenceFactor | undefined;
}

export interface GetBlockByHeightRequest {
  height: ChainDistance | undefined;
  confidenceFactor: ConfidenceFactor | undefined;
}

export interface GetBlockByDepthRequest {
  depth: ChainDistance | undefined;
  confidenceFactor: ConfidenceFactor | undefined;
}

/** Used to request a transaction by specifying its ID. */
export interface GetTransactionByIdRequest {
  transactionId:
    | TransactionId
    | undefined;
  /** The default value for confidenceFactor is 0.9999999 (7 nines) */
  confidenceFactor: ConfidenceFactor | undefined;
}

/** Request type for NetworkMetricsService:getTxoStats */
export interface GetTxoStatsReq {
}

/** Response type for NetworkMetricsService:getTxoStats */
export interface GetTxoStatsRes {
  txos: TxoStats | undefined;
}

/** Request type for NetworkMetricsService:getBlockchainSizeStats */
export interface BlockchainSizeStatsReq {
}

/** Response type for NetworkMetricsService:getBlockchainSizeStats */
export interface BlockchainSizeStatsRes {
  blockchainSize: BlockchainSizeStats | undefined;
}

/** Request type for NetworkMetricsService:getBlockStats */
export interface BlockStatsReq {
}

/** Response type for NetworkMetricsService:getBlockStats */
export interface BlockStatsRes {
  blockStats: BlockStats | undefined;
}

/** Response from CreateOnChainTransactionIndex request */
export interface CreateOnChainTransactionIndexResponse {
  /** True if index was created. */
  ok: boolean;
}

/** Used to request TxOs by their associated lock address */
export interface QueryByLockAddressRequest {
  /** Address of interest */
  address:
    | LockAddress
    | undefined;
  /** The default value for confidenceFactor is 0.9999999 (7 nines) */
  confidenceFactor:
    | ConfidenceFactor
    | undefined;
  /** Filter by status */
  state: TxoState;
}

/** Used to request TxOs by their asset type */
export interface QueryByAssetLabelRequest {
  assetLabel:
    | AssetLabel
    | undefined;
  /** The default value for confidenceFactor is 0.9999999 (7 nines) */
  confidenceFactor: ConfidenceFactor | undefined;
}

export interface TxoLockAddressResponse {
  Txos: Txo[];
}

/** A request to create an index of transactions based on their on-chain data */
export interface CreateOnChainTransactionIndexRequest {
  indexSpec:
    | IndexSpec
    | undefined;
  /** If populate is true, then scan the existing transaction in the database to populate the index. */
  populate: boolean;
}

/** Used to request a group policy associated by groupId */
export interface QueryByGroupIdRequest {
  /** GroupId of interest */
  groupId: GroupId | undefined;
}

export interface GroupPolicyResponse {
  groupPolicy: Event_GroupPolicy | undefined;
}

/** Used to request a series policy associated by seriesId */
export interface QueryBySeriesIdRequest {
  /** GroupId of interest */
  seriesId: SeriesId | undefined;
}

export interface SeriesPolicyResponse {
  seriesPolicy: Event_SeriesPolicy | undefined;
}

/** Definitions of existing database indexes. */
export interface IndexSpecs {
  indexSpec: IndexSpec[];
}

export interface IndexDef {
  onChain?: CreateOnChainTransactionIndexRequest | undefined;
}

/** The message that is sent when requesting information about the existing Genus indexes */
export interface GetExistingTransactionIndexesRequest {
}

/** Specify the name of an index to be dropped */
export interface DropIndexRequest {
  indexName: string;
}

/** Return true if the requested index was dropped or false if it was not (Most likely because it did not exist). */
export interface DropIndexResponse {
  dropped: boolean;
}

/** Request the use of a named index to find transactions containing data that matches specified values. */
export interface GetIndexedTransactionsRequest {
  /** The name of the index to search */
  indexName: string;
  /** The index value(s) to search for. */
  value: IndexMatchValue[];
  /** The maximum number of transactions to be returned */
  maxResults: number;
  /** A number of transactions to be skipped. This is useful for paging results. */
  skipResults: number;
}

/** A value that may match a field in an index. */
export interface IndexMatchValue {
  stringValue?: string | undefined;
  intValue?: number | undefined;
  uintValue?: number | undefined;
  fieldName: string | undefined;
}

export interface TxoStats {
  spent: number;
  unspent: number;
  pending: number;
  total: number;
}

export interface BlockchainSizeStats {
  /** Sum of BlockHeader immutable bytes */
  blockHeaderBytes: number;
  /** Sum of Transaction immutable bytes */
  transactionBytes: number;
}

export interface BlockStats {
  /** Sum of empty Blocks, total blocks without transactions in them */
  empty: number;
  /** Sum of nonEmpty, total blocks with transactions in them */
  nonEmpty: number;
}

function createBaseGetExistingTransactionIndexesResponse(): GetExistingTransactionIndexesResponse {
  return { indexSpecs: undefined };
}

export const GetExistingTransactionIndexesResponse = {
  encode(message: GetExistingTransactionIndexesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.indexSpecs !== undefined) {
      IndexSpecs.encode(message.indexSpecs, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetExistingTransactionIndexesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetExistingTransactionIndexesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.indexSpecs = IndexSpecs.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetExistingTransactionIndexesResponse {
    return { indexSpecs: isSet(object.indexSpecs) ? IndexSpecs.fromJSON(object.indexSpecs) : undefined };
  },

  toJSON(message: GetExistingTransactionIndexesResponse): unknown {
    const obj: any = {};
    if (message.indexSpecs !== undefined) {
      obj.indexSpecs = IndexSpecs.toJSON(message.indexSpecs);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetExistingTransactionIndexesResponse>, I>>(
    base?: I,
  ): GetExistingTransactionIndexesResponse {
    return GetExistingTransactionIndexesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetExistingTransactionIndexesResponse>, I>>(
    object: I,
  ): GetExistingTransactionIndexesResponse {
    const message = createBaseGetExistingTransactionIndexesResponse();
    message.indexSpecs = (object.indexSpecs !== undefined && object.indexSpecs !== null)
      ? IndexSpecs.fromPartial(object.indexSpecs)
      : undefined;
    return message;
  },
};

function createBaseBlockResponse(): BlockResponse {
  return { block: undefined };
}

export const BlockResponse = {
  encode(message: BlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.block !== undefined) {
      FullBlock.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.block = FullBlock.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlockResponse {
    return { block: isSet(object.block) ? FullBlock.fromJSON(object.block) : undefined };
  },

  toJSON(message: BlockResponse): unknown {
    const obj: any = {};
    if (message.block !== undefined) {
      obj.block = FullBlock.toJSON(message.block);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BlockResponse>, I>>(base?: I): BlockResponse {
    return BlockResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BlockResponse>, I>>(object: I): BlockResponse {
    const message = createBaseBlockResponse();
    message.block = (object.block !== undefined && object.block !== null)
      ? FullBlock.fromPartial(object.block)
      : undefined;
    return message;
  },
};

function createBaseTransactionResponse(): TransactionResponse {
  return { transactionReceipt: undefined };
}

export const TransactionResponse = {
  encode(message: TransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionReceipt !== undefined) {
      TransactionReceipt.encode(message.transactionReceipt, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transactionReceipt = TransactionReceipt.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransactionResponse {
    return {
      transactionReceipt: isSet(object.transactionReceipt)
        ? TransactionReceipt.fromJSON(object.transactionReceipt)
        : undefined,
    };
  },

  toJSON(message: TransactionResponse): unknown {
    const obj: any = {};
    if (message.transactionReceipt !== undefined) {
      obj.transactionReceipt = TransactionReceipt.toJSON(message.transactionReceipt);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TransactionResponse>, I>>(base?: I): TransactionResponse {
    return TransactionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TransactionResponse>, I>>(object: I): TransactionResponse {
    const message = createBaseTransactionResponse();
    message.transactionReceipt = (object.transactionReceipt !== undefined && object.transactionReceipt !== null)
      ? TransactionReceipt.fromPartial(object.transactionReceipt)
      : undefined;
    return message;
  },
};

function createBaseTxoResponse(): TxoResponse {
  return { txo: undefined };
}

export const TxoResponse = {
  encode(message: TxoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txo !== undefined) {
      Txo.encode(message.txo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.txo = Txo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TxoResponse {
    return { txo: isSet(object.txo) ? Txo.fromJSON(object.txo) : undefined };
  },

  toJSON(message: TxoResponse): unknown {
    const obj: any = {};
    if (message.txo !== undefined) {
      obj.txo = Txo.toJSON(message.txo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TxoResponse>, I>>(base?: I): TxoResponse {
    return TxoResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TxoResponse>, I>>(object: I): TxoResponse {
    const message = createBaseTxoResponse();
    message.txo = (object.txo !== undefined && object.txo !== null) ? Txo.fromPartial(object.txo) : undefined;
    return message;
  },
};

function createBaseGetBlockByIdRequest(): GetBlockByIdRequest {
  return { blockId: undefined, confidenceFactor: undefined };
}

export const GetBlockByIdRequest = {
  encode(message: GetBlockByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockId !== undefined) {
      BlockId.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.confidenceFactor !== undefined) {
      ConfidenceFactor.encode(message.confidenceFactor, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockByIdRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.blockId = BlockId.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.confidenceFactor = ConfidenceFactor.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBlockByIdRequest {
    return {
      blockId: isSet(object.blockId) ? BlockId.fromJSON(object.blockId) : undefined,
      confidenceFactor: isSet(object.confidenceFactor) ? ConfidenceFactor.fromJSON(object.confidenceFactor) : undefined,
    };
  },

  toJSON(message: GetBlockByIdRequest): unknown {
    const obj: any = {};
    if (message.blockId !== undefined) {
      obj.blockId = BlockId.toJSON(message.blockId);
    }
    if (message.confidenceFactor !== undefined) {
      obj.confidenceFactor = ConfidenceFactor.toJSON(message.confidenceFactor);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBlockByIdRequest>, I>>(base?: I): GetBlockByIdRequest {
    return GetBlockByIdRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetBlockByIdRequest>, I>>(object: I): GetBlockByIdRequest {
    const message = createBaseGetBlockByIdRequest();
    message.blockId = (object.blockId !== undefined && object.blockId !== null)
      ? BlockId.fromPartial(object.blockId)
      : undefined;
    message.confidenceFactor = (object.confidenceFactor !== undefined && object.confidenceFactor !== null)
      ? ConfidenceFactor.fromPartial(object.confidenceFactor)
      : undefined;
    return message;
  },
};

function createBaseGetBlockByHeightRequest(): GetBlockByHeightRequest {
  return { height: undefined, confidenceFactor: undefined };
}

export const GetBlockByHeightRequest = {
  encode(message: GetBlockByHeightRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== undefined) {
      ChainDistance.encode(message.height, writer.uint32(10).fork()).ldelim();
    }
    if (message.confidenceFactor !== undefined) {
      ConfidenceFactor.encode(message.confidenceFactor, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockByHeightRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockByHeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.height = ChainDistance.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.confidenceFactor = ConfidenceFactor.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBlockByHeightRequest {
    return {
      height: isSet(object.height) ? ChainDistance.fromJSON(object.height) : undefined,
      confidenceFactor: isSet(object.confidenceFactor) ? ConfidenceFactor.fromJSON(object.confidenceFactor) : undefined,
    };
  },

  toJSON(message: GetBlockByHeightRequest): unknown {
    const obj: any = {};
    if (message.height !== undefined) {
      obj.height = ChainDistance.toJSON(message.height);
    }
    if (message.confidenceFactor !== undefined) {
      obj.confidenceFactor = ConfidenceFactor.toJSON(message.confidenceFactor);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBlockByHeightRequest>, I>>(base?: I): GetBlockByHeightRequest {
    return GetBlockByHeightRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetBlockByHeightRequest>, I>>(object: I): GetBlockByHeightRequest {
    const message = createBaseGetBlockByHeightRequest();
    message.height = (object.height !== undefined && object.height !== null)
      ? ChainDistance.fromPartial(object.height)
      : undefined;
    message.confidenceFactor = (object.confidenceFactor !== undefined && object.confidenceFactor !== null)
      ? ConfidenceFactor.fromPartial(object.confidenceFactor)
      : undefined;
    return message;
  },
};

function createBaseGetBlockByDepthRequest(): GetBlockByDepthRequest {
  return { depth: undefined, confidenceFactor: undefined };
}

export const GetBlockByDepthRequest = {
  encode(message: GetBlockByDepthRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depth !== undefined) {
      ChainDistance.encode(message.depth, writer.uint32(10).fork()).ldelim();
    }
    if (message.confidenceFactor !== undefined) {
      ConfidenceFactor.encode(message.confidenceFactor, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockByDepthRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockByDepthRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.depth = ChainDistance.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.confidenceFactor = ConfidenceFactor.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBlockByDepthRequest {
    return {
      depth: isSet(object.depth) ? ChainDistance.fromJSON(object.depth) : undefined,
      confidenceFactor: isSet(object.confidenceFactor) ? ConfidenceFactor.fromJSON(object.confidenceFactor) : undefined,
    };
  },

  toJSON(message: GetBlockByDepthRequest): unknown {
    const obj: any = {};
    if (message.depth !== undefined) {
      obj.depth = ChainDistance.toJSON(message.depth);
    }
    if (message.confidenceFactor !== undefined) {
      obj.confidenceFactor = ConfidenceFactor.toJSON(message.confidenceFactor);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBlockByDepthRequest>, I>>(base?: I): GetBlockByDepthRequest {
    return GetBlockByDepthRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetBlockByDepthRequest>, I>>(object: I): GetBlockByDepthRequest {
    const message = createBaseGetBlockByDepthRequest();
    message.depth = (object.depth !== undefined && object.depth !== null)
      ? ChainDistance.fromPartial(object.depth)
      : undefined;
    message.confidenceFactor = (object.confidenceFactor !== undefined && object.confidenceFactor !== null)
      ? ConfidenceFactor.fromPartial(object.confidenceFactor)
      : undefined;
    return message;
  },
};

function createBaseGetTransactionByIdRequest(): GetTransactionByIdRequest {
  return { transactionId: undefined, confidenceFactor: undefined };
}

export const GetTransactionByIdRequest = {
  encode(message: GetTransactionByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionId !== undefined) {
      TransactionId.encode(message.transactionId, writer.uint32(10).fork()).ldelim();
    }
    if (message.confidenceFactor !== undefined) {
      ConfidenceFactor.encode(message.confidenceFactor, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTransactionByIdRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTransactionByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transactionId = TransactionId.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.confidenceFactor = ConfidenceFactor.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTransactionByIdRequest {
    return {
      transactionId: isSet(object.transactionId) ? TransactionId.fromJSON(object.transactionId) : undefined,
      confidenceFactor: isSet(object.confidenceFactor) ? ConfidenceFactor.fromJSON(object.confidenceFactor) : undefined,
    };
  },

  toJSON(message: GetTransactionByIdRequest): unknown {
    const obj: any = {};
    if (message.transactionId !== undefined) {
      obj.transactionId = TransactionId.toJSON(message.transactionId);
    }
    if (message.confidenceFactor !== undefined) {
      obj.confidenceFactor = ConfidenceFactor.toJSON(message.confidenceFactor);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetTransactionByIdRequest>, I>>(base?: I): GetTransactionByIdRequest {
    return GetTransactionByIdRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTransactionByIdRequest>, I>>(object: I): GetTransactionByIdRequest {
    const message = createBaseGetTransactionByIdRequest();
    message.transactionId = (object.transactionId !== undefined && object.transactionId !== null)
      ? TransactionId.fromPartial(object.transactionId)
      : undefined;
    message.confidenceFactor = (object.confidenceFactor !== undefined && object.confidenceFactor !== null)
      ? ConfidenceFactor.fromPartial(object.confidenceFactor)
      : undefined;
    return message;
  },
};

function createBaseGetTxoStatsReq(): GetTxoStatsReq {
  return {};
}

export const GetTxoStatsReq = {
  encode(_: GetTxoStatsReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTxoStatsReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxoStatsReq();
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

  fromJSON(_: any): GetTxoStatsReq {
    return {};
  },

  toJSON(_: GetTxoStatsReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetTxoStatsReq>, I>>(base?: I): GetTxoStatsReq {
    return GetTxoStatsReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTxoStatsReq>, I>>(_: I): GetTxoStatsReq {
    const message = createBaseGetTxoStatsReq();
    return message;
  },
};

function createBaseGetTxoStatsRes(): GetTxoStatsRes {
  return { txos: undefined };
}

export const GetTxoStatsRes = {
  encode(message: GetTxoStatsRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txos !== undefined) {
      TxoStats.encode(message.txos, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTxoStatsRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxoStatsRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.txos = TxoStats.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTxoStatsRes {
    return { txos: isSet(object.txos) ? TxoStats.fromJSON(object.txos) : undefined };
  },

  toJSON(message: GetTxoStatsRes): unknown {
    const obj: any = {};
    if (message.txos !== undefined) {
      obj.txos = TxoStats.toJSON(message.txos);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetTxoStatsRes>, I>>(base?: I): GetTxoStatsRes {
    return GetTxoStatsRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetTxoStatsRes>, I>>(object: I): GetTxoStatsRes {
    const message = createBaseGetTxoStatsRes();
    message.txos = (object.txos !== undefined && object.txos !== null) ? TxoStats.fromPartial(object.txos) : undefined;
    return message;
  },
};

function createBaseBlockchainSizeStatsReq(): BlockchainSizeStatsReq {
  return {};
}

export const BlockchainSizeStatsReq = {
  encode(_: BlockchainSizeStatsReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockchainSizeStatsReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockchainSizeStatsReq();
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

  fromJSON(_: any): BlockchainSizeStatsReq {
    return {};
  },

  toJSON(_: BlockchainSizeStatsReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<BlockchainSizeStatsReq>, I>>(base?: I): BlockchainSizeStatsReq {
    return BlockchainSizeStatsReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BlockchainSizeStatsReq>, I>>(_: I): BlockchainSizeStatsReq {
    const message = createBaseBlockchainSizeStatsReq();
    return message;
  },
};

function createBaseBlockchainSizeStatsRes(): BlockchainSizeStatsRes {
  return { blockchainSize: undefined };
}

export const BlockchainSizeStatsRes = {
  encode(message: BlockchainSizeStatsRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockchainSize !== undefined) {
      BlockchainSizeStats.encode(message.blockchainSize, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockchainSizeStatsRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockchainSizeStatsRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.blockchainSize = BlockchainSizeStats.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlockchainSizeStatsRes {
    return {
      blockchainSize: isSet(object.blockchainSize) ? BlockchainSizeStats.fromJSON(object.blockchainSize) : undefined,
    };
  },

  toJSON(message: BlockchainSizeStatsRes): unknown {
    const obj: any = {};
    if (message.blockchainSize !== undefined) {
      obj.blockchainSize = BlockchainSizeStats.toJSON(message.blockchainSize);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BlockchainSizeStatsRes>, I>>(base?: I): BlockchainSizeStatsRes {
    return BlockchainSizeStatsRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BlockchainSizeStatsRes>, I>>(object: I): BlockchainSizeStatsRes {
    const message = createBaseBlockchainSizeStatsRes();
    message.blockchainSize = (object.blockchainSize !== undefined && object.blockchainSize !== null)
      ? BlockchainSizeStats.fromPartial(object.blockchainSize)
      : undefined;
    return message;
  },
};

function createBaseBlockStatsReq(): BlockStatsReq {
  return {};
}

export const BlockStatsReq = {
  encode(_: BlockStatsReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockStatsReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockStatsReq();
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

  fromJSON(_: any): BlockStatsReq {
    return {};
  },

  toJSON(_: BlockStatsReq): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<BlockStatsReq>, I>>(base?: I): BlockStatsReq {
    return BlockStatsReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BlockStatsReq>, I>>(_: I): BlockStatsReq {
    const message = createBaseBlockStatsReq();
    return message;
  },
};

function createBaseBlockStatsRes(): BlockStatsRes {
  return { blockStats: undefined };
}

export const BlockStatsRes = {
  encode(message: BlockStatsRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockStats !== undefined) {
      BlockStats.encode(message.blockStats, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockStatsRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockStatsRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.blockStats = BlockStats.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlockStatsRes {
    return { blockStats: isSet(object.blockStats) ? BlockStats.fromJSON(object.blockStats) : undefined };
  },

  toJSON(message: BlockStatsRes): unknown {
    const obj: any = {};
    if (message.blockStats !== undefined) {
      obj.blockStats = BlockStats.toJSON(message.blockStats);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BlockStatsRes>, I>>(base?: I): BlockStatsRes {
    return BlockStatsRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BlockStatsRes>, I>>(object: I): BlockStatsRes {
    const message = createBaseBlockStatsRes();
    message.blockStats = (object.blockStats !== undefined && object.blockStats !== null)
      ? BlockStats.fromPartial(object.blockStats)
      : undefined;
    return message;
  },
};

function createBaseCreateOnChainTransactionIndexResponse(): CreateOnChainTransactionIndexResponse {
  return { ok: false };
}

export const CreateOnChainTransactionIndexResponse = {
  encode(message: CreateOnChainTransactionIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ok !== false) {
      writer.uint32(8).bool(message.ok);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOnChainTransactionIndexResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOnChainTransactionIndexResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.ok = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateOnChainTransactionIndexResponse {
    return { ok: isSet(object.ok) ? globalThis.Boolean(object.ok) : false };
  },

  toJSON(message: CreateOnChainTransactionIndexResponse): unknown {
    const obj: any = {};
    if (message.ok !== false) {
      obj.ok = message.ok;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateOnChainTransactionIndexResponse>, I>>(
    base?: I,
  ): CreateOnChainTransactionIndexResponse {
    return CreateOnChainTransactionIndexResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOnChainTransactionIndexResponse>, I>>(
    object: I,
  ): CreateOnChainTransactionIndexResponse {
    const message = createBaseCreateOnChainTransactionIndexResponse();
    message.ok = object.ok ?? false;
    return message;
  },
};

function createBaseQueryByLockAddressRequest(): QueryByLockAddressRequest {
  return { address: undefined, confidenceFactor: undefined, state: 0 };
}

export const QueryByLockAddressRequest = {
  encode(message: QueryByLockAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== undefined) {
      LockAddress.encode(message.address, writer.uint32(10).fork()).ldelim();
    }
    if (message.confidenceFactor !== undefined) {
      ConfidenceFactor.encode(message.confidenceFactor, writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryByLockAddressRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByLockAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = LockAddress.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.confidenceFactor = ConfidenceFactor.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryByLockAddressRequest {
    return {
      address: isSet(object.address) ? LockAddress.fromJSON(object.address) : undefined,
      confidenceFactor: isSet(object.confidenceFactor) ? ConfidenceFactor.fromJSON(object.confidenceFactor) : undefined,
      state: isSet(object.state) ? txoStateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: QueryByLockAddressRequest): unknown {
    const obj: any = {};
    if (message.address !== undefined) {
      obj.address = LockAddress.toJSON(message.address);
    }
    if (message.confidenceFactor !== undefined) {
      obj.confidenceFactor = ConfidenceFactor.toJSON(message.confidenceFactor);
    }
    if (message.state !== 0) {
      obj.state = txoStateToJSON(message.state);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryByLockAddressRequest>, I>>(base?: I): QueryByLockAddressRequest {
    return QueryByLockAddressRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryByLockAddressRequest>, I>>(object: I): QueryByLockAddressRequest {
    const message = createBaseQueryByLockAddressRequest();
    message.address = (object.address !== undefined && object.address !== null)
      ? LockAddress.fromPartial(object.address)
      : undefined;
    message.confidenceFactor = (object.confidenceFactor !== undefined && object.confidenceFactor !== null)
      ? ConfidenceFactor.fromPartial(object.confidenceFactor)
      : undefined;
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseQueryByAssetLabelRequest(): QueryByAssetLabelRequest {
  return { assetLabel: undefined, confidenceFactor: undefined };
}

export const QueryByAssetLabelRequest = {
  encode(message: QueryByAssetLabelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetLabel !== undefined) {
      AssetLabel.encode(message.assetLabel, writer.uint32(10).fork()).ldelim();
    }
    if (message.confidenceFactor !== undefined) {
      ConfidenceFactor.encode(message.confidenceFactor, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryByAssetLabelRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByAssetLabelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.assetLabel = AssetLabel.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.confidenceFactor = ConfidenceFactor.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryByAssetLabelRequest {
    return {
      assetLabel: isSet(object.assetLabel) ? AssetLabel.fromJSON(object.assetLabel) : undefined,
      confidenceFactor: isSet(object.confidenceFactor) ? ConfidenceFactor.fromJSON(object.confidenceFactor) : undefined,
    };
  },

  toJSON(message: QueryByAssetLabelRequest): unknown {
    const obj: any = {};
    if (message.assetLabel !== undefined) {
      obj.assetLabel = AssetLabel.toJSON(message.assetLabel);
    }
    if (message.confidenceFactor !== undefined) {
      obj.confidenceFactor = ConfidenceFactor.toJSON(message.confidenceFactor);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryByAssetLabelRequest>, I>>(base?: I): QueryByAssetLabelRequest {
    return QueryByAssetLabelRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryByAssetLabelRequest>, I>>(object: I): QueryByAssetLabelRequest {
    const message = createBaseQueryByAssetLabelRequest();
    message.assetLabel = (object.assetLabel !== undefined && object.assetLabel !== null)
      ? AssetLabel.fromPartial(object.assetLabel)
      : undefined;
    message.confidenceFactor = (object.confidenceFactor !== undefined && object.confidenceFactor !== null)
      ? ConfidenceFactor.fromPartial(object.confidenceFactor)
      : undefined;
    return message;
  },
};

function createBaseTxoLockAddressResponse(): TxoLockAddressResponse {
  return { Txos: [] };
}

export const TxoLockAddressResponse = {
  encode(message: TxoLockAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Txos) {
      Txo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxoLockAddressResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxoLockAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Txos.push(Txo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TxoLockAddressResponse {
    return { Txos: globalThis.Array.isArray(object?.Txos) ? object.Txos.map((e: any) => Txo.fromJSON(e)) : [] };
  },

  toJSON(message: TxoLockAddressResponse): unknown {
    const obj: any = {};
    if (message.Txos?.length) {
      obj.Txos = message.Txos.map((e) => Txo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TxoLockAddressResponse>, I>>(base?: I): TxoLockAddressResponse {
    return TxoLockAddressResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TxoLockAddressResponse>, I>>(object: I): TxoLockAddressResponse {
    const message = createBaseTxoLockAddressResponse();
    message.Txos = object.Txos?.map((e) => Txo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateOnChainTransactionIndexRequest(): CreateOnChainTransactionIndexRequest {
  return { indexSpec: undefined, populate: false };
}

export const CreateOnChainTransactionIndexRequest = {
  encode(message: CreateOnChainTransactionIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.indexSpec !== undefined) {
      IndexSpec.encode(message.indexSpec, writer.uint32(10).fork()).ldelim();
    }
    if (message.populate !== false) {
      writer.uint32(16).bool(message.populate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateOnChainTransactionIndexRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateOnChainTransactionIndexRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.indexSpec = IndexSpec.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.populate = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateOnChainTransactionIndexRequest {
    return {
      indexSpec: isSet(object.indexSpec) ? IndexSpec.fromJSON(object.indexSpec) : undefined,
      populate: isSet(object.populate) ? globalThis.Boolean(object.populate) : false,
    };
  },

  toJSON(message: CreateOnChainTransactionIndexRequest): unknown {
    const obj: any = {};
    if (message.indexSpec !== undefined) {
      obj.indexSpec = IndexSpec.toJSON(message.indexSpec);
    }
    if (message.populate !== false) {
      obj.populate = message.populate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateOnChainTransactionIndexRequest>, I>>(
    base?: I,
  ): CreateOnChainTransactionIndexRequest {
    return CreateOnChainTransactionIndexRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateOnChainTransactionIndexRequest>, I>>(
    object: I,
  ): CreateOnChainTransactionIndexRequest {
    const message = createBaseCreateOnChainTransactionIndexRequest();
    message.indexSpec = (object.indexSpec !== undefined && object.indexSpec !== null)
      ? IndexSpec.fromPartial(object.indexSpec)
      : undefined;
    message.populate = object.populate ?? false;
    return message;
  },
};

function createBaseQueryByGroupIdRequest(): QueryByGroupIdRequest {
  return { groupId: undefined };
}

export const QueryByGroupIdRequest = {
  encode(message: QueryByGroupIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== undefined) {
      GroupId.encode(message.groupId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryByGroupIdRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryByGroupIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupId = GroupId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryByGroupIdRequest {
    return { groupId: isSet(object.groupId) ? GroupId.fromJSON(object.groupId) : undefined };
  },

  toJSON(message: QueryByGroupIdRequest): unknown {
    const obj: any = {};
    if (message.groupId !== undefined) {
      obj.groupId = GroupId.toJSON(message.groupId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryByGroupIdRequest>, I>>(base?: I): QueryByGroupIdRequest {
    return QueryByGroupIdRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryByGroupIdRequest>, I>>(object: I): QueryByGroupIdRequest {
    const message = createBaseQueryByGroupIdRequest();
    message.groupId = (object.groupId !== undefined && object.groupId !== null)
      ? GroupId.fromPartial(object.groupId)
      : undefined;
    return message;
  },
};

function createBaseGroupPolicyResponse(): GroupPolicyResponse {
  return { groupPolicy: undefined };
}

export const GroupPolicyResponse = {
  encode(message: GroupPolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupPolicy !== undefined) {
      Event_GroupPolicy.encode(message.groupPolicy, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupPolicy = Event_GroupPolicy.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GroupPolicyResponse {
    return { groupPolicy: isSet(object.groupPolicy) ? Event_GroupPolicy.fromJSON(object.groupPolicy) : undefined };
  },

  toJSON(message: GroupPolicyResponse): unknown {
    const obj: any = {};
    if (message.groupPolicy !== undefined) {
      obj.groupPolicy = Event_GroupPolicy.toJSON(message.groupPolicy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GroupPolicyResponse>, I>>(base?: I): GroupPolicyResponse {
    return GroupPolicyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GroupPolicyResponse>, I>>(object: I): GroupPolicyResponse {
    const message = createBaseGroupPolicyResponse();
    message.groupPolicy = (object.groupPolicy !== undefined && object.groupPolicy !== null)
      ? Event_GroupPolicy.fromPartial(object.groupPolicy)
      : undefined;
    return message;
  },
};

function createBaseQueryBySeriesIdRequest(): QueryBySeriesIdRequest {
  return { seriesId: undefined };
}

export const QueryBySeriesIdRequest = {
  encode(message: QueryBySeriesIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seriesId !== undefined) {
      SeriesId.encode(message.seriesId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBySeriesIdRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBySeriesIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.seriesId = SeriesId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBySeriesIdRequest {
    return { seriesId: isSet(object.seriesId) ? SeriesId.fromJSON(object.seriesId) : undefined };
  },

  toJSON(message: QueryBySeriesIdRequest): unknown {
    const obj: any = {};
    if (message.seriesId !== undefined) {
      obj.seriesId = SeriesId.toJSON(message.seriesId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBySeriesIdRequest>, I>>(base?: I): QueryBySeriesIdRequest {
    return QueryBySeriesIdRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryBySeriesIdRequest>, I>>(object: I): QueryBySeriesIdRequest {
    const message = createBaseQueryBySeriesIdRequest();
    message.seriesId = (object.seriesId !== undefined && object.seriesId !== null)
      ? SeriesId.fromPartial(object.seriesId)
      : undefined;
    return message;
  },
};

function createBaseSeriesPolicyResponse(): SeriesPolicyResponse {
  return { seriesPolicy: undefined };
}

export const SeriesPolicyResponse = {
  encode(message: SeriesPolicyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seriesPolicy !== undefined) {
      Event_SeriesPolicy.encode(message.seriesPolicy, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SeriesPolicyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeriesPolicyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.seriesPolicy = Event_SeriesPolicy.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SeriesPolicyResponse {
    return { seriesPolicy: isSet(object.seriesPolicy) ? Event_SeriesPolicy.fromJSON(object.seriesPolicy) : undefined };
  },

  toJSON(message: SeriesPolicyResponse): unknown {
    const obj: any = {};
    if (message.seriesPolicy !== undefined) {
      obj.seriesPolicy = Event_SeriesPolicy.toJSON(message.seriesPolicy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeriesPolicyResponse>, I>>(base?: I): SeriesPolicyResponse {
    return SeriesPolicyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeriesPolicyResponse>, I>>(object: I): SeriesPolicyResponse {
    const message = createBaseSeriesPolicyResponse();
    message.seriesPolicy = (object.seriesPolicy !== undefined && object.seriesPolicy !== null)
      ? Event_SeriesPolicy.fromPartial(object.seriesPolicy)
      : undefined;
    return message;
  },
};

function createBaseIndexSpecs(): IndexSpecs {
  return { indexSpec: [] };
}

export const IndexSpecs = {
  encode(message: IndexSpecs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.indexSpec) {
      IndexSpec.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndexSpecs {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexSpecs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.indexSpec.push(IndexSpec.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IndexSpecs {
    return {
      indexSpec: globalThis.Array.isArray(object?.indexSpec)
        ? object.indexSpec.map((e: any) => IndexSpec.fromJSON(e))
        : [],
    };
  },

  toJSON(message: IndexSpecs): unknown {
    const obj: any = {};
    if (message.indexSpec?.length) {
      obj.indexSpec = message.indexSpec.map((e) => IndexSpec.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IndexSpecs>, I>>(base?: I): IndexSpecs {
    return IndexSpecs.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IndexSpecs>, I>>(object: I): IndexSpecs {
    const message = createBaseIndexSpecs();
    message.indexSpec = object.indexSpec?.map((e) => IndexSpec.fromPartial(e)) || [];
    return message;
  },
};

function createBaseIndexDef(): IndexDef {
  return { onChain: undefined };
}

export const IndexDef = {
  encode(message: IndexDef, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.onChain !== undefined) {
      CreateOnChainTransactionIndexRequest.encode(message.onChain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndexDef {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexDef();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.onChain = CreateOnChainTransactionIndexRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IndexDef {
    return {
      onChain: isSet(object.onChain) ? CreateOnChainTransactionIndexRequest.fromJSON(object.onChain) : undefined,
    };
  },

  toJSON(message: IndexDef): unknown {
    const obj: any = {};
    if (message.onChain !== undefined) {
      obj.onChain = CreateOnChainTransactionIndexRequest.toJSON(message.onChain);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IndexDef>, I>>(base?: I): IndexDef {
    return IndexDef.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IndexDef>, I>>(object: I): IndexDef {
    const message = createBaseIndexDef();
    message.onChain = (object.onChain !== undefined && object.onChain !== null)
      ? CreateOnChainTransactionIndexRequest.fromPartial(object.onChain)
      : undefined;
    return message;
  },
};

function createBaseGetExistingTransactionIndexesRequest(): GetExistingTransactionIndexesRequest {
  return {};
}

export const GetExistingTransactionIndexesRequest = {
  encode(_: GetExistingTransactionIndexesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetExistingTransactionIndexesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetExistingTransactionIndexesRequest();
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

  fromJSON(_: any): GetExistingTransactionIndexesRequest {
    return {};
  },

  toJSON(_: GetExistingTransactionIndexesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetExistingTransactionIndexesRequest>, I>>(
    base?: I,
  ): GetExistingTransactionIndexesRequest {
    return GetExistingTransactionIndexesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetExistingTransactionIndexesRequest>, I>>(
    _: I,
  ): GetExistingTransactionIndexesRequest {
    const message = createBaseGetExistingTransactionIndexesRequest();
    return message;
  },
};

function createBaseDropIndexRequest(): DropIndexRequest {
  return { indexName: "" };
}

export const DropIndexRequest = {
  encode(message: DropIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.indexName !== "") {
      writer.uint32(10).string(message.indexName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DropIndexRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDropIndexRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.indexName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DropIndexRequest {
    return { indexName: isSet(object.indexName) ? globalThis.String(object.indexName) : "" };
  },

  toJSON(message: DropIndexRequest): unknown {
    const obj: any = {};
    if (message.indexName !== "") {
      obj.indexName = message.indexName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DropIndexRequest>, I>>(base?: I): DropIndexRequest {
    return DropIndexRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DropIndexRequest>, I>>(object: I): DropIndexRequest {
    const message = createBaseDropIndexRequest();
    message.indexName = object.indexName ?? "";
    return message;
  },
};

function createBaseDropIndexResponse(): DropIndexResponse {
  return { dropped: false };
}

export const DropIndexResponse = {
  encode(message: DropIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dropped !== false) {
      writer.uint32(8).bool(message.dropped);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DropIndexResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDropIndexResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.dropped = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DropIndexResponse {
    return { dropped: isSet(object.dropped) ? globalThis.Boolean(object.dropped) : false };
  },

  toJSON(message: DropIndexResponse): unknown {
    const obj: any = {};
    if (message.dropped !== false) {
      obj.dropped = message.dropped;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DropIndexResponse>, I>>(base?: I): DropIndexResponse {
    return DropIndexResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DropIndexResponse>, I>>(object: I): DropIndexResponse {
    const message = createBaseDropIndexResponse();
    message.dropped = object.dropped ?? false;
    return message;
  },
};

function createBaseGetIndexedTransactionsRequest(): GetIndexedTransactionsRequest {
  return { indexName: "", value: [], maxResults: 0, skipResults: 0 };
}

export const GetIndexedTransactionsRequest = {
  encode(message: GetIndexedTransactionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.indexName !== "") {
      writer.uint32(10).string(message.indexName);
    }
    for (const v of message.value) {
      IndexMatchValue.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxResults !== 0) {
      writer.uint32(24).uint32(message.maxResults);
    }
    if (message.skipResults !== 0) {
      writer.uint32(32).uint64(message.skipResults);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetIndexedTransactionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetIndexedTransactionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.indexName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value.push(IndexMatchValue.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.maxResults = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.skipResults = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetIndexedTransactionsRequest {
    return {
      indexName: isSet(object.indexName) ? globalThis.String(object.indexName) : "",
      value: globalThis.Array.isArray(object?.value) ? object.value.map((e: any) => IndexMatchValue.fromJSON(e)) : [],
      maxResults: isSet(object.maxResults) ? globalThis.Number(object.maxResults) : 0,
      skipResults: isSet(object.skipResults) ? globalThis.Number(object.skipResults) : 0,
    };
  },

  toJSON(message: GetIndexedTransactionsRequest): unknown {
    const obj: any = {};
    if (message.indexName !== "") {
      obj.indexName = message.indexName;
    }
    if (message.value?.length) {
      obj.value = message.value.map((e) => IndexMatchValue.toJSON(e));
    }
    if (message.maxResults !== 0) {
      obj.maxResults = Math.round(message.maxResults);
    }
    if (message.skipResults !== 0) {
      obj.skipResults = Math.round(message.skipResults);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetIndexedTransactionsRequest>, I>>(base?: I): GetIndexedTransactionsRequest {
    return GetIndexedTransactionsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetIndexedTransactionsRequest>, I>>(
    object: I,
  ): GetIndexedTransactionsRequest {
    const message = createBaseGetIndexedTransactionsRequest();
    message.indexName = object.indexName ?? "";
    message.value = object.value?.map((e) => IndexMatchValue.fromPartial(e)) || [];
    message.maxResults = object.maxResults ?? 0;
    message.skipResults = object.skipResults ?? 0;
    return message;
  },
};

function createBaseIndexMatchValue(): IndexMatchValue {
  return { stringValue: undefined, intValue: undefined, uintValue: undefined, fieldName: undefined };
}

export const IndexMatchValue = {
  encode(message: IndexMatchValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stringValue !== undefined) {
      writer.uint32(10).string(message.stringValue);
    }
    if (message.intValue !== undefined) {
      writer.uint32(16).int64(message.intValue);
    }
    if (message.uintValue !== undefined) {
      writer.uint32(24).uint64(message.uintValue);
    }
    if (message.fieldName !== undefined) {
      StringValue.encode({ value: message.fieldName! }, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndexMatchValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexMatchValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stringValue = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.intValue = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.uintValue = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fieldName = StringValue.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IndexMatchValue {
    return {
      stringValue: isSet(object.stringValue) ? globalThis.String(object.stringValue) : undefined,
      intValue: isSet(object.intValue) ? globalThis.Number(object.intValue) : undefined,
      uintValue: isSet(object.uintValue) ? globalThis.Number(object.uintValue) : undefined,
      fieldName: isSet(object.fieldName) ? String(object.fieldName) : undefined,
    };
  },

  toJSON(message: IndexMatchValue): unknown {
    const obj: any = {};
    if (message.stringValue !== undefined) {
      obj.stringValue = message.stringValue;
    }
    if (message.intValue !== undefined) {
      obj.intValue = Math.round(message.intValue);
    }
    if (message.uintValue !== undefined) {
      obj.uintValue = Math.round(message.uintValue);
    }
    if (message.fieldName !== undefined) {
      obj.fieldName = message.fieldName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IndexMatchValue>, I>>(base?: I): IndexMatchValue {
    return IndexMatchValue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IndexMatchValue>, I>>(object: I): IndexMatchValue {
    const message = createBaseIndexMatchValue();
    message.stringValue = object.stringValue ?? undefined;
    message.intValue = object.intValue ?? undefined;
    message.uintValue = object.uintValue ?? undefined;
    message.fieldName = object.fieldName ?? undefined;
    return message;
  },
};

function createBaseTxoStats(): TxoStats {
  return { spent: 0, unspent: 0, pending: 0, total: 0 };
}

export const TxoStats = {
  encode(message: TxoStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spent !== 0) {
      writer.uint32(8).uint64(message.spent);
    }
    if (message.unspent !== 0) {
      writer.uint32(16).uint64(message.unspent);
    }
    if (message.pending !== 0) {
      writer.uint32(32).uint64(message.pending);
    }
    if (message.total !== 0) {
      writer.uint32(40).uint64(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxoStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxoStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.spent = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.unspent = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.pending = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.total = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TxoStats {
    return {
      spent: isSet(object.spent) ? globalThis.Number(object.spent) : 0,
      unspent: isSet(object.unspent) ? globalThis.Number(object.unspent) : 0,
      pending: isSet(object.pending) ? globalThis.Number(object.pending) : 0,
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
    };
  },

  toJSON(message: TxoStats): unknown {
    const obj: any = {};
    if (message.spent !== 0) {
      obj.spent = Math.round(message.spent);
    }
    if (message.unspent !== 0) {
      obj.unspent = Math.round(message.unspent);
    }
    if (message.pending !== 0) {
      obj.pending = Math.round(message.pending);
    }
    if (message.total !== 0) {
      obj.total = Math.round(message.total);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TxoStats>, I>>(base?: I): TxoStats {
    return TxoStats.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TxoStats>, I>>(object: I): TxoStats {
    const message = createBaseTxoStats();
    message.spent = object.spent ?? 0;
    message.unspent = object.unspent ?? 0;
    message.pending = object.pending ?? 0;
    message.total = object.total ?? 0;
    return message;
  },
};

function createBaseBlockchainSizeStats(): BlockchainSizeStats {
  return { blockHeaderBytes: 0, transactionBytes: 0 };
}

export const BlockchainSizeStats = {
  encode(message: BlockchainSizeStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockHeaderBytes !== 0) {
      writer.uint32(8).uint64(message.blockHeaderBytes);
    }
    if (message.transactionBytes !== 0) {
      writer.uint32(16).uint64(message.transactionBytes);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockchainSizeStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockchainSizeStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.blockHeaderBytes = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.transactionBytes = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlockchainSizeStats {
    return {
      blockHeaderBytes: isSet(object.blockHeaderBytes) ? globalThis.Number(object.blockHeaderBytes) : 0,
      transactionBytes: isSet(object.transactionBytes) ? globalThis.Number(object.transactionBytes) : 0,
    };
  },

  toJSON(message: BlockchainSizeStats): unknown {
    const obj: any = {};
    if (message.blockHeaderBytes !== 0) {
      obj.blockHeaderBytes = Math.round(message.blockHeaderBytes);
    }
    if (message.transactionBytes !== 0) {
      obj.transactionBytes = Math.round(message.transactionBytes);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BlockchainSizeStats>, I>>(base?: I): BlockchainSizeStats {
    return BlockchainSizeStats.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BlockchainSizeStats>, I>>(object: I): BlockchainSizeStats {
    const message = createBaseBlockchainSizeStats();
    message.blockHeaderBytes = object.blockHeaderBytes ?? 0;
    message.transactionBytes = object.transactionBytes ?? 0;
    return message;
  },
};

function createBaseBlockStats(): BlockStats {
  return { empty: 0, nonEmpty: 0 };
}

export const BlockStats = {
  encode(message: BlockStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.empty !== 0) {
      writer.uint32(8).uint64(message.empty);
    }
    if (message.nonEmpty !== 0) {
      writer.uint32(16).uint64(message.nonEmpty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.empty = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.nonEmpty = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlockStats {
    return {
      empty: isSet(object.empty) ? globalThis.Number(object.empty) : 0,
      nonEmpty: isSet(object.nonEmpty) ? globalThis.Number(object.nonEmpty) : 0,
    };
  },

  toJSON(message: BlockStats): unknown {
    const obj: any = {};
    if (message.empty !== 0) {
      obj.empty = Math.round(message.empty);
    }
    if (message.nonEmpty !== 0) {
      obj.nonEmpty = Math.round(message.nonEmpty);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BlockStats>, I>>(base?: I): BlockStats {
    return BlockStats.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BlockStats>, I>>(object: I): BlockStats {
    const message = createBaseBlockStats();
    message.empty = object.empty ?? 0;
    message.nonEmpty = object.nonEmpty ?? 0;
    return message;
  },
};

/** Operations related to blocks */
export interface BlockService {
  /**
   * Retrieve a block with the specified `id` from the configured Genus service. This returns its result when there is a
   * block present in the genus service with the specified id and the confidence factor of the block is greater than or
   * equal to the value of the `confidenceFactor` parameter.
   */
  getBlockById(request: GetBlockByIdRequest): Promise<BlockResponse>;
  /**
   * Retrieve the block at the specified height from the configured Genus service, where the height of the genesis block
   * is 1. This returns a result when there is a block present in the genus service at the specified height and the
   * confidence factor of the block is greater than or equal to the value of the `confidenceFactor` parameter.
   */
  getBlockByHeight(request: GetBlockByHeightRequest): Promise<BlockResponse>;
  /**
   * Retrieve the block at the specified depth from the configured Genus service. This returns its result immediately.
   * The block at depth 1 is the highest block with a confidence factor that is greater than or
   * equal to the value of the `confidenceFactor` parameter.
   *
   * Since blocks keep getting added, we expect that multiple calls to this with the same argument will return different blocks.
   */
  getBlockByDepth(request: GetBlockByDepthRequest): Promise<BlockResponse>;
}

export const BlockServiceServiceName = "co.topl.genus.services.BlockService";
export class BlockServiceClientImpl implements BlockService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || BlockServiceServiceName;
    this.rpc = rpc;
    this.getBlockById = this.getBlockById.bind(this);
    this.getBlockByHeight = this.getBlockByHeight.bind(this);
    this.getBlockByDepth = this.getBlockByDepth.bind(this);
  }
  getBlockById(request: GetBlockByIdRequest): Promise<BlockResponse> {
    const data = GetBlockByIdRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "getBlockById", data);
    return promise.then((data) => BlockResponse.decode(_m0.Reader.create(data)));
  }

  getBlockByHeight(request: GetBlockByHeightRequest): Promise<BlockResponse> {
    const data = GetBlockByHeightRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "getBlockByHeight", data);
    return promise.then((data) => BlockResponse.decode(_m0.Reader.create(data)));
  }

  getBlockByDepth(request: GetBlockByDepthRequest): Promise<BlockResponse> {
    const data = GetBlockByDepthRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "getBlockByDepth", data);
    return promise.then((data) => BlockResponse.decode(_m0.Reader.create(data)));
  }
}

/** Operations related to GenusBlock contents */
export interface TransactionService {
  /**
   * Retrieve a transaction with the specified `id` from the configured Genus service. This returns its result when there is
   * a transaction present in the genus service with the specified id and the confidence factor of the block that contains
   * the transaction is greater than or equal to the value of the `confidenceFactor` parameter.
   */
  getTransactionById(request: GetTransactionByIdRequest): Promise<TransactionResponse>;
  /**
   * Retrieve transactions that have an input or output associated with any of the specified addresses from the configured
   * Genus service. This returns a stream of existing and future transactions from the genus service with the specified id
   * that are in a block with confidence factor greater than or equal to the value of the `confidenceFactor` parameter.
   */
  getTransactionByLockAddressStream(request: QueryByLockAddressRequest): Observable<TransactionResponse>;
  /**
   * Retrieve from the configured Genus service TxOs (spent or unspent) that are associated with any of the specified
   * addresses and are in a block whose confidence factor is greater than or equal to the value of the `confidenceFactor`
   * parameter. This returns immediately.
   */
  getTxosByLockAddress(request: QueryByLockAddressRequest): Promise<TxoLockAddressResponse>;
  /**
   * Retrieve from the configured Genus service TxOs (spent or unspent) that are associated with any of the specified
   * addresses and are in a block whose confidence factor is greater than or equal to the value of the `confidenceFactor`
   * parameter. As new TxOs are added or UTxOs are spent that match the request, additional results are returned.
   */
  getTxosByLockAddressStream(request: QueryByLockAddressRequest): Observable<TxoLockAddressResponse>;
  /**
   * Retrieve from the configured Genus service TxOs (spent or unspent) that contain the type of asset specified by the
   * asset label and are in a block whose confidence factor is greater than or equal to the value of the `confidenceFactor`
   * parameter. As new TxOs are added or UTxOs are spent that match the request, additional results are returned.
   */
  getTxosByAssetLabel(request: QueryByAssetLabelRequest): Observable<TxoResponse>;
  /**
   * Create an index on transactions in the Genus database. The index will allow transactions to be found quickly based on
   * the contents of their data field.
   *
   * This returns as soon as the index is created. After the index is created, if the `populate` parameter is true then Genus
   * will asynchronously populate the index.
   */
  createOnChainTransactionIndex(
    request: CreateOnChainTransactionIndexRequest,
  ): Promise<CreateOnChainTransactionIndexResponse>;
  /**
   * Return a collection of `IndexSpec` objects, where each `IndexSpec` object corresponds to an index in the Genus database.
   * The content of each `IndexSpec` object is the same as the `IndexSpec ` object used to create the index.
   */
  getExistingTransactionIndexes(
    request: GetExistingTransactionIndexesRequest,
  ): Promise<GetExistingTransactionIndexesResponse>;
  /**
   * Retrieve transactions that are included in the named index. If the `keys` parameter is supplied, then only transactions
   * whose index records match the specified key values are included in the result.
   */
  getIndexedTransactions(request: GetIndexedTransactionsRequest): Observable<TransactionResponse>;
  /** Delete an index from the Genus database. */
  dropIndex(request: DropIndexRequest): Promise<DropIndexResponse>;
}

export const TransactionServiceServiceName = "co.topl.genus.services.TransactionService";
export class TransactionServiceClientImpl implements TransactionService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || TransactionServiceServiceName;
    this.rpc = rpc;
    this.getTransactionById = this.getTransactionById.bind(this);
    this.getTransactionByLockAddressStream = this.getTransactionByLockAddressStream.bind(this);
    this.getTxosByLockAddress = this.getTxosByLockAddress.bind(this);
    this.getTxosByLockAddressStream = this.getTxosByLockAddressStream.bind(this);
    this.getTxosByAssetLabel = this.getTxosByAssetLabel.bind(this);
    this.createOnChainTransactionIndex = this.createOnChainTransactionIndex.bind(this);
    this.getExistingTransactionIndexes = this.getExistingTransactionIndexes.bind(this);
    this.getIndexedTransactions = this.getIndexedTransactions.bind(this);
    this.dropIndex = this.dropIndex.bind(this);
  }
  getTransactionById(request: GetTransactionByIdRequest): Promise<TransactionResponse> {
    const data = GetTransactionByIdRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "getTransactionById", data);
    return promise.then((data) => TransactionResponse.decode(_m0.Reader.create(data)));
  }

  getTransactionByLockAddressStream(request: QueryByLockAddressRequest): Observable<TransactionResponse> {
    const data = QueryByLockAddressRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(this.service, "getTransactionByLockAddressStream", data);
    return result.pipe(map((data) => TransactionResponse.decode(_m0.Reader.create(data))));
  }

  getTxosByLockAddress(request: QueryByLockAddressRequest): Promise<TxoLockAddressResponse> {
    const data = QueryByLockAddressRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "getTxosByLockAddress", data);
    return promise.then((data) => TxoLockAddressResponse.decode(_m0.Reader.create(data)));
  }

  getTxosByLockAddressStream(request: QueryByLockAddressRequest): Observable<TxoLockAddressResponse> {
    const data = QueryByLockAddressRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(this.service, "getTxosByLockAddressStream", data);
    return result.pipe(map((data) => TxoLockAddressResponse.decode(_m0.Reader.create(data))));
  }

  getTxosByAssetLabel(request: QueryByAssetLabelRequest): Observable<TxoResponse> {
    const data = QueryByAssetLabelRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(this.service, "getTxosByAssetLabel", data);
    return result.pipe(map((data) => TxoResponse.decode(_m0.Reader.create(data))));
  }

  createOnChainTransactionIndex(
    request: CreateOnChainTransactionIndexRequest,
  ): Promise<CreateOnChainTransactionIndexResponse> {
    const data = CreateOnChainTransactionIndexRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "createOnChainTransactionIndex", data);
    return promise.then((data) => CreateOnChainTransactionIndexResponse.decode(_m0.Reader.create(data)));
  }

  getExistingTransactionIndexes(
    request: GetExistingTransactionIndexesRequest,
  ): Promise<GetExistingTransactionIndexesResponse> {
    const data = GetExistingTransactionIndexesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "getExistingTransactionIndexes", data);
    return promise.then((data) => GetExistingTransactionIndexesResponse.decode(_m0.Reader.create(data)));
  }

  getIndexedTransactions(request: GetIndexedTransactionsRequest): Observable<TransactionResponse> {
    const data = GetIndexedTransactionsRequest.encode(request).finish();
    const result = this.rpc.serverStreamingRequest(this.service, "getIndexedTransactions", data);
    return result.pipe(map((data) => TransactionResponse.decode(_m0.Reader.create(data))));
  }

  dropIndex(request: DropIndexRequest): Promise<DropIndexResponse> {
    const data = DropIndexRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "dropIndex", data);
    return promise.then((data) => DropIndexResponse.decode(_m0.Reader.create(data)));
  }
}

/** Operations related to Network Metrics */
export interface NetworkMetricsService {
  /** Retrieve Txo Stats */
  getTxoStats(request: GetTxoStatsReq): Promise<GetTxoStatsRes>;
  /** Retrieve Blockchain Size Stats */
  getBlockchainSizeStats(request: BlockchainSizeStatsReq): Promise<BlockchainSizeStatsRes>;
  /** Retrieve Block Stats */
  getBlockStats(request: BlockStatsReq): Promise<BlockStatsRes>;
}

export const NetworkMetricsServiceServiceName = "co.topl.genus.services.NetworkMetricsService";
export class NetworkMetricsServiceClientImpl implements NetworkMetricsService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || NetworkMetricsServiceServiceName;
    this.rpc = rpc;
    this.getTxoStats = this.getTxoStats.bind(this);
    this.getBlockchainSizeStats = this.getBlockchainSizeStats.bind(this);
    this.getBlockStats = this.getBlockStats.bind(this);
  }
  getTxoStats(request: GetTxoStatsReq): Promise<GetTxoStatsRes> {
    const data = GetTxoStatsReq.encode(request).finish();
    const promise = this.rpc.request(this.service, "getTxoStats", data);
    return promise.then((data) => GetTxoStatsRes.decode(_m0.Reader.create(data)));
  }

  getBlockchainSizeStats(request: BlockchainSizeStatsReq): Promise<BlockchainSizeStatsRes> {
    const data = BlockchainSizeStatsReq.encode(request).finish();
    const promise = this.rpc.request(this.service, "getBlockchainSizeStats", data);
    return promise.then((data) => BlockchainSizeStatsRes.decode(_m0.Reader.create(data)));
  }

  getBlockStats(request: BlockStatsReq): Promise<BlockStatsRes> {
    const data = BlockStatsReq.encode(request).finish();
    const promise = this.rpc.request(this.service, "getBlockStats", data);
    return promise.then((data) => BlockStatsRes.decode(_m0.Reader.create(data)));
  }
}

/** Operations related to Value specifics Items. Value: TOPL, LVL,... */
export interface TokenService {
  /** Retrieve a group Policy with the specified `id` from the configured Genus service */
  getGroupPolicy(request: QueryByGroupIdRequest): Promise<GroupPolicyResponse>;
  /** Retrieve a series Policy with the specified `id` from the configured Genus service */
  getSeriesPolicy(request: QueryBySeriesIdRequest): Promise<SeriesPolicyResponse>;
}

export const TokenServiceServiceName = "co.topl.genus.services.TokenService";
export class TokenServiceClientImpl implements TokenService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || TokenServiceServiceName;
    this.rpc = rpc;
    this.getGroupPolicy = this.getGroupPolicy.bind(this);
    this.getSeriesPolicy = this.getSeriesPolicy.bind(this);
  }
  getGroupPolicy(request: QueryByGroupIdRequest): Promise<GroupPolicyResponse> {
    const data = QueryByGroupIdRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "getGroupPolicy", data);
    return promise.then((data) => GroupPolicyResponse.decode(_m0.Reader.create(data)));
  }

  getSeriesPolicy(request: QueryBySeriesIdRequest): Promise<SeriesPolicyResponse> {
    const data = QueryBySeriesIdRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "getSeriesPolicy", data);
    return promise.then((data) => SeriesPolicyResponse.decode(_m0.Reader.create(data)));
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
