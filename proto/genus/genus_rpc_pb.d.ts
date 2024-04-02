// package: co.topl.genus.services
// file: genus/genus_rpc.proto

import * as jspb from "google-protobuf";
import * as brambl_models_address_pb from "../brambl/models/address_pb";
import * as brambl_models_identifier_pb from "../brambl/models/identifier_pb";
import * as brambl_models_event_pb from "../brambl/models/event_pb";
import * as consensus_models_block_id_pb from "../consensus/models/block_id_pb";
import * as genus_genus_models_pb from "../genus/genus_models_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as node_models_block_pb from "../node/models/block_pb";
import * as validate_validate_pb from "../validate/validate_pb";

export class GetExistingTransactionIndexesResponse extends jspb.Message {
  hasIndexspecs(): boolean;
  clearIndexspecs(): void;
  getIndexspecs(): IndexSpecs | undefined;
  setIndexspecs(value?: IndexSpecs): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetExistingTransactionIndexesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetExistingTransactionIndexesResponse): GetExistingTransactionIndexesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetExistingTransactionIndexesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetExistingTransactionIndexesResponse;
  static deserializeBinaryFromReader(message: GetExistingTransactionIndexesResponse, reader: jspb.BinaryReader): GetExistingTransactionIndexesResponse;
}

export namespace GetExistingTransactionIndexesResponse {
  export type AsObject = {
    indexspecs?: IndexSpecs.AsObject,
  }
}

export class BlockResponse extends jspb.Message {
  hasBlock(): boolean;
  clearBlock(): void;
  getBlock(): node_models_block_pb.FullBlock | undefined;
  setBlock(value?: node_models_block_pb.FullBlock): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BlockResponse): BlockResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockResponse;
  static deserializeBinaryFromReader(message: BlockResponse, reader: jspb.BinaryReader): BlockResponse;
}

export namespace BlockResponse {
  export type AsObject = {
    block?: node_models_block_pb.FullBlock.AsObject,
  }
}

export class TransactionResponse extends jspb.Message {
  hasTransactionreceipt(): boolean;
  clearTransactionreceipt(): void;
  getTransactionreceipt(): genus_genus_models_pb.TransactionReceipt | undefined;
  setTransactionreceipt(value?: genus_genus_models_pb.TransactionReceipt): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionResponse): TransactionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionResponse;
  static deserializeBinaryFromReader(message: TransactionResponse, reader: jspb.BinaryReader): TransactionResponse;
}

export namespace TransactionResponse {
  export type AsObject = {
    transactionreceipt?: genus_genus_models_pb.TransactionReceipt.AsObject,
  }
}

export class TxoResponse extends jspb.Message {
  hasTxo(): boolean;
  clearTxo(): void;
  getTxo(): genus_genus_models_pb.Txo | undefined;
  setTxo(value?: genus_genus_models_pb.Txo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TxoResponse): TxoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxoResponse;
  static deserializeBinaryFromReader(message: TxoResponse, reader: jspb.BinaryReader): TxoResponse;
}

export namespace TxoResponse {
  export type AsObject = {
    txo?: genus_genus_models_pb.Txo.AsObject,
  }
}

export class GetBlockByIdRequest extends jspb.Message {
  hasBlockid(): boolean;
  clearBlockid(): void;
  getBlockid(): consensus_models_block_id_pb.BlockId | undefined;
  setBlockid(value?: consensus_models_block_id_pb.BlockId): void;

  hasConfidencefactor(): boolean;
  clearConfidencefactor(): void;
  getConfidencefactor(): genus_genus_models_pb.ConfidenceFactor | undefined;
  setConfidencefactor(value?: genus_genus_models_pb.ConfidenceFactor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockByIdRequest): GetBlockByIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockByIdRequest;
  static deserializeBinaryFromReader(message: GetBlockByIdRequest, reader: jspb.BinaryReader): GetBlockByIdRequest;
}

export namespace GetBlockByIdRequest {
  export type AsObject = {
    blockid?: consensus_models_block_id_pb.BlockId.AsObject,
    confidencefactor?: genus_genus_models_pb.ConfidenceFactor.AsObject,
  }
}

export class GetBlockByHeightRequest extends jspb.Message {
  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): genus_genus_models_pb.ChainDistance | undefined;
  setHeight(value?: genus_genus_models_pb.ChainDistance): void;

  hasConfidencefactor(): boolean;
  clearConfidencefactor(): void;
  getConfidencefactor(): genus_genus_models_pb.ConfidenceFactor | undefined;
  setConfidencefactor(value?: genus_genus_models_pb.ConfidenceFactor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockByHeightRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockByHeightRequest): GetBlockByHeightRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockByHeightRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockByHeightRequest;
  static deserializeBinaryFromReader(message: GetBlockByHeightRequest, reader: jspb.BinaryReader): GetBlockByHeightRequest;
}

export namespace GetBlockByHeightRequest {
  export type AsObject = {
    height?: genus_genus_models_pb.ChainDistance.AsObject,
    confidencefactor?: genus_genus_models_pb.ConfidenceFactor.AsObject,
  }
}

export class GetBlockByDepthRequest extends jspb.Message {
  hasDepth(): boolean;
  clearDepth(): void;
  getDepth(): genus_genus_models_pb.ChainDistance | undefined;
  setDepth(value?: genus_genus_models_pb.ChainDistance): void;

  hasConfidencefactor(): boolean;
  clearConfidencefactor(): void;
  getConfidencefactor(): genus_genus_models_pb.ConfidenceFactor | undefined;
  setConfidencefactor(value?: genus_genus_models_pb.ConfidenceFactor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockByDepthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockByDepthRequest): GetBlockByDepthRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetBlockByDepthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockByDepthRequest;
  static deserializeBinaryFromReader(message: GetBlockByDepthRequest, reader: jspb.BinaryReader): GetBlockByDepthRequest;
}

export namespace GetBlockByDepthRequest {
  export type AsObject = {
    depth?: genus_genus_models_pb.ChainDistance.AsObject,
    confidencefactor?: genus_genus_models_pb.ConfidenceFactor.AsObject,
  }
}

export class GetTransactionByIdRequest extends jspb.Message {
  hasTransactionid(): boolean;
  clearTransactionid(): void;
  getTransactionid(): brambl_models_identifier_pb.TransactionId | undefined;
  setTransactionid(value?: brambl_models_identifier_pb.TransactionId): void;

  hasConfidencefactor(): boolean;
  clearConfidencefactor(): void;
  getConfidencefactor(): genus_genus_models_pb.ConfidenceFactor | undefined;
  setConfidencefactor(value?: genus_genus_models_pb.ConfidenceFactor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionByIdRequest): GetTransactionByIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTransactionByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionByIdRequest;
  static deserializeBinaryFromReader(message: GetTransactionByIdRequest, reader: jspb.BinaryReader): GetTransactionByIdRequest;
}

export namespace GetTransactionByIdRequest {
  export type AsObject = {
    transactionid?: brambl_models_identifier_pb.TransactionId.AsObject,
    confidencefactor?: genus_genus_models_pb.ConfidenceFactor.AsObject,
  }
}

export class GetTxoStatsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxoStatsReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetTxoStatsReq): GetTxoStatsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTxoStatsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTxoStatsReq;
  static deserializeBinaryFromReader(message: GetTxoStatsReq, reader: jspb.BinaryReader): GetTxoStatsReq;
}

export namespace GetTxoStatsReq {
  export type AsObject = {
  }
}

export class GetTxoStatsRes extends jspb.Message {
  hasTxos(): boolean;
  clearTxos(): void;
  getTxos(): TxoStats | undefined;
  setTxos(value?: TxoStats): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTxoStatsRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetTxoStatsRes): GetTxoStatsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTxoStatsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTxoStatsRes;
  static deserializeBinaryFromReader(message: GetTxoStatsRes, reader: jspb.BinaryReader): GetTxoStatsRes;
}

export namespace GetTxoStatsRes {
  export type AsObject = {
    txos?: TxoStats.AsObject,
  }
}

export class BlockchainSizeStatsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockchainSizeStatsReq.AsObject;
  static toObject(includeInstance: boolean, msg: BlockchainSizeStatsReq): BlockchainSizeStatsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockchainSizeStatsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockchainSizeStatsReq;
  static deserializeBinaryFromReader(message: BlockchainSizeStatsReq, reader: jspb.BinaryReader): BlockchainSizeStatsReq;
}

export namespace BlockchainSizeStatsReq {
  export type AsObject = {
  }
}

export class BlockchainSizeStatsRes extends jspb.Message {
  hasBlockchainsize(): boolean;
  clearBlockchainsize(): void;
  getBlockchainsize(): BlockchainSizeStats | undefined;
  setBlockchainsize(value?: BlockchainSizeStats): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockchainSizeStatsRes.AsObject;
  static toObject(includeInstance: boolean, msg: BlockchainSizeStatsRes): BlockchainSizeStatsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockchainSizeStatsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockchainSizeStatsRes;
  static deserializeBinaryFromReader(message: BlockchainSizeStatsRes, reader: jspb.BinaryReader): BlockchainSizeStatsRes;
}

export namespace BlockchainSizeStatsRes {
  export type AsObject = {
    blockchainsize?: BlockchainSizeStats.AsObject,
  }
}

export class BlockStatsReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockStatsReq.AsObject;
  static toObject(includeInstance: boolean, msg: BlockStatsReq): BlockStatsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockStatsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockStatsReq;
  static deserializeBinaryFromReader(message: BlockStatsReq, reader: jspb.BinaryReader): BlockStatsReq;
}

export namespace BlockStatsReq {
  export type AsObject = {
  }
}

export class BlockStatsRes extends jspb.Message {
  hasBlockstats(): boolean;
  clearBlockstats(): void;
  getBlockstats(): BlockStats | undefined;
  setBlockstats(value?: BlockStats): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockStatsRes.AsObject;
  static toObject(includeInstance: boolean, msg: BlockStatsRes): BlockStatsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockStatsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockStatsRes;
  static deserializeBinaryFromReader(message: BlockStatsRes, reader: jspb.BinaryReader): BlockStatsRes;
}

export namespace BlockStatsRes {
  export type AsObject = {
    blockstats?: BlockStats.AsObject,
  }
}

export class CreateOnChainTransactionIndexResponse extends jspb.Message {
  getOk(): boolean;
  setOk(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOnChainTransactionIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOnChainTransactionIndexResponse): CreateOnChainTransactionIndexResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOnChainTransactionIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOnChainTransactionIndexResponse;
  static deserializeBinaryFromReader(message: CreateOnChainTransactionIndexResponse, reader: jspb.BinaryReader): CreateOnChainTransactionIndexResponse;
}

export namespace CreateOnChainTransactionIndexResponse {
  export type AsObject = {
    ok: boolean,
  }
}

export class QueryByLockAddressRequest extends jspb.Message {
  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): brambl_models_address_pb.LockAddress | undefined;
  setAddress(value?: brambl_models_address_pb.LockAddress): void;

  hasConfidencefactor(): boolean;
  clearConfidencefactor(): void;
  getConfidencefactor(): genus_genus_models_pb.ConfidenceFactor | undefined;
  setConfidencefactor(value?: genus_genus_models_pb.ConfidenceFactor): void;

  getState(): genus_genus_models_pb.TxoStateMap[keyof genus_genus_models_pb.TxoStateMap];
  setState(value: genus_genus_models_pb.TxoStateMap[keyof genus_genus_models_pb.TxoStateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryByLockAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryByLockAddressRequest): QueryByLockAddressRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryByLockAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryByLockAddressRequest;
  static deserializeBinaryFromReader(message: QueryByLockAddressRequest, reader: jspb.BinaryReader): QueryByLockAddressRequest;
}

export namespace QueryByLockAddressRequest {
  export type AsObject = {
    address?: brambl_models_address_pb.LockAddress.AsObject,
    confidencefactor?: genus_genus_models_pb.ConfidenceFactor.AsObject,
    state: genus_genus_models_pb.TxoStateMap[keyof genus_genus_models_pb.TxoStateMap],
  }
}

export class QueryByAssetLabelRequest extends jspb.Message {
  hasAssetlabel(): boolean;
  clearAssetlabel(): void;
  getAssetlabel(): genus_genus_models_pb.AssetLabel | undefined;
  setAssetlabel(value?: genus_genus_models_pb.AssetLabel): void;

  hasConfidencefactor(): boolean;
  clearConfidencefactor(): void;
  getConfidencefactor(): genus_genus_models_pb.ConfidenceFactor | undefined;
  setConfidencefactor(value?: genus_genus_models_pb.ConfidenceFactor): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryByAssetLabelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryByAssetLabelRequest): QueryByAssetLabelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryByAssetLabelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryByAssetLabelRequest;
  static deserializeBinaryFromReader(message: QueryByAssetLabelRequest, reader: jspb.BinaryReader): QueryByAssetLabelRequest;
}

export namespace QueryByAssetLabelRequest {
  export type AsObject = {
    assetlabel?: genus_genus_models_pb.AssetLabel.AsObject,
    confidencefactor?: genus_genus_models_pb.ConfidenceFactor.AsObject,
  }
}

export class TxoLockAddressResponse extends jspb.Message {
  clearTxosList(): void;
  getTxosList(): Array<genus_genus_models_pb.Txo>;
  setTxosList(value: Array<genus_genus_models_pb.Txo>): void;
  addTxos(value?: genus_genus_models_pb.Txo, index?: number): genus_genus_models_pb.Txo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxoLockAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TxoLockAddressResponse): TxoLockAddressResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxoLockAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxoLockAddressResponse;
  static deserializeBinaryFromReader(message: TxoLockAddressResponse, reader: jspb.BinaryReader): TxoLockAddressResponse;
}

export namespace TxoLockAddressResponse {
  export type AsObject = {
    txosList: Array<genus_genus_models_pb.Txo.AsObject>,
  }
}

export class CreateOnChainTransactionIndexRequest extends jspb.Message {
  hasIndexspec(): boolean;
  clearIndexspec(): void;
  getIndexspec(): genus_genus_models_pb.IndexSpec | undefined;
  setIndexspec(value?: genus_genus_models_pb.IndexSpec): void;

  getPopulate(): boolean;
  setPopulate(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOnChainTransactionIndexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOnChainTransactionIndexRequest): CreateOnChainTransactionIndexRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOnChainTransactionIndexRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOnChainTransactionIndexRequest;
  static deserializeBinaryFromReader(message: CreateOnChainTransactionIndexRequest, reader: jspb.BinaryReader): CreateOnChainTransactionIndexRequest;
}

export namespace CreateOnChainTransactionIndexRequest {
  export type AsObject = {
    indexspec?: genus_genus_models_pb.IndexSpec.AsObject,
    populate: boolean,
  }
}

export class QueryByGroupIdRequest extends jspb.Message {
  hasGroupid(): boolean;
  clearGroupid(): void;
  getGroupid(): brambl_models_identifier_pb.GroupId | undefined;
  setGroupid(value?: brambl_models_identifier_pb.GroupId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryByGroupIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryByGroupIdRequest): QueryByGroupIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryByGroupIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryByGroupIdRequest;
  static deserializeBinaryFromReader(message: QueryByGroupIdRequest, reader: jspb.BinaryReader): QueryByGroupIdRequest;
}

export namespace QueryByGroupIdRequest {
  export type AsObject = {
    groupid?: brambl_models_identifier_pb.GroupId.AsObject,
  }
}

export class GroupPolicyResponse extends jspb.Message {
  hasGrouppolicy(): boolean;
  clearGrouppolicy(): void;
  getGrouppolicy(): brambl_models_event_pb.Event.GroupPolicy | undefined;
  setGrouppolicy(value?: brambl_models_event_pb.Event.GroupPolicy): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupPolicyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GroupPolicyResponse): GroupPolicyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupPolicyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupPolicyResponse;
  static deserializeBinaryFromReader(message: GroupPolicyResponse, reader: jspb.BinaryReader): GroupPolicyResponse;
}

export namespace GroupPolicyResponse {
  export type AsObject = {
    grouppolicy?: brambl_models_event_pb.Event.GroupPolicy.AsObject,
  }
}

export class QueryBySeriesIdRequest extends jspb.Message {
  hasSeriesid(): boolean;
  clearSeriesid(): void;
  getSeriesid(): brambl_models_identifier_pb.SeriesId | undefined;
  setSeriesid(value?: brambl_models_identifier_pb.SeriesId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryBySeriesIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryBySeriesIdRequest): QueryBySeriesIdRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QueryBySeriesIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryBySeriesIdRequest;
  static deserializeBinaryFromReader(message: QueryBySeriesIdRequest, reader: jspb.BinaryReader): QueryBySeriesIdRequest;
}

export namespace QueryBySeriesIdRequest {
  export type AsObject = {
    seriesid?: brambl_models_identifier_pb.SeriesId.AsObject,
  }
}

export class SeriesPolicyResponse extends jspb.Message {
  hasSeriespolicy(): boolean;
  clearSeriespolicy(): void;
  getSeriespolicy(): brambl_models_event_pb.Event.SeriesPolicy | undefined;
  setSeriespolicy(value?: brambl_models_event_pb.Event.SeriesPolicy): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeriesPolicyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SeriesPolicyResponse): SeriesPolicyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SeriesPolicyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeriesPolicyResponse;
  static deserializeBinaryFromReader(message: SeriesPolicyResponse, reader: jspb.BinaryReader): SeriesPolicyResponse;
}

export namespace SeriesPolicyResponse {
  export type AsObject = {
    seriespolicy?: brambl_models_event_pb.Event.SeriesPolicy.AsObject,
  }
}

export class IndexSpecs extends jspb.Message {
  clearIndexspecList(): void;
  getIndexspecList(): Array<genus_genus_models_pb.IndexSpec>;
  setIndexspecList(value: Array<genus_genus_models_pb.IndexSpec>): void;
  addIndexspec(value?: genus_genus_models_pb.IndexSpec, index?: number): genus_genus_models_pb.IndexSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexSpecs.AsObject;
  static toObject(includeInstance: boolean, msg: IndexSpecs): IndexSpecs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndexSpecs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexSpecs;
  static deserializeBinaryFromReader(message: IndexSpecs, reader: jspb.BinaryReader): IndexSpecs;
}

export namespace IndexSpecs {
  export type AsObject = {
    indexspecList: Array<genus_genus_models_pb.IndexSpec.AsObject>,
  }
}

export class IndexDef extends jspb.Message {
  hasOnchain(): boolean;
  clearOnchain(): void;
  getOnchain(): CreateOnChainTransactionIndexRequest | undefined;
  setOnchain(value?: CreateOnChainTransactionIndexRequest): void;

  getXdevCase(): IndexDef.XdevCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexDef.AsObject;
  static toObject(includeInstance: boolean, msg: IndexDef): IndexDef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndexDef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexDef;
  static deserializeBinaryFromReader(message: IndexDef, reader: jspb.BinaryReader): IndexDef;
}

export namespace IndexDef {
  export type AsObject = {
    onchain?: CreateOnChainTransactionIndexRequest.AsObject,
  }

  export enum XdevCase {
    XDEV_NOT_SET = 0,
    ONCHAIN = 1,
  }
}

export class GetExistingTransactionIndexesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetExistingTransactionIndexesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetExistingTransactionIndexesRequest): GetExistingTransactionIndexesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetExistingTransactionIndexesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetExistingTransactionIndexesRequest;
  static deserializeBinaryFromReader(message: GetExistingTransactionIndexesRequest, reader: jspb.BinaryReader): GetExistingTransactionIndexesRequest;
}

export namespace GetExistingTransactionIndexesRequest {
  export type AsObject = {
  }
}

export class DropIndexRequest extends jspb.Message {
  getIndexname(): string;
  setIndexname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropIndexRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DropIndexRequest): DropIndexRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DropIndexRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropIndexRequest;
  static deserializeBinaryFromReader(message: DropIndexRequest, reader: jspb.BinaryReader): DropIndexRequest;
}

export namespace DropIndexRequest {
  export type AsObject = {
    indexname: string,
  }
}

export class DropIndexResponse extends jspb.Message {
  getDropped(): boolean;
  setDropped(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropIndexResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DropIndexResponse): DropIndexResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DropIndexResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropIndexResponse;
  static deserializeBinaryFromReader(message: DropIndexResponse, reader: jspb.BinaryReader): DropIndexResponse;
}

export namespace DropIndexResponse {
  export type AsObject = {
    dropped: boolean,
  }
}

export class GetIndexedTransactionsRequest extends jspb.Message {
  getIndexname(): string;
  setIndexname(value: string): void;

  clearValueList(): void;
  getValueList(): Array<IndexMatchValue>;
  setValueList(value: Array<IndexMatchValue>): void;
  addValue(value?: IndexMatchValue, index?: number): IndexMatchValue;

  getMaxresults(): number;
  setMaxresults(value: number): void;

  getSkipresults(): number;
  setSkipresults(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIndexedTransactionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIndexedTransactionsRequest): GetIndexedTransactionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetIndexedTransactionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIndexedTransactionsRequest;
  static deserializeBinaryFromReader(message: GetIndexedTransactionsRequest, reader: jspb.BinaryReader): GetIndexedTransactionsRequest;
}

export namespace GetIndexedTransactionsRequest {
  export type AsObject = {
    indexname: string,
    valueList: Array<IndexMatchValue.AsObject>,
    maxresults: number,
    skipresults: number,
  }
}

export class IndexMatchValue extends jspb.Message {
  hasStringvalue(): boolean;
  clearStringvalue(): void;
  getStringvalue(): string;
  setStringvalue(value: string): void;

  hasIntvalue(): boolean;
  clearIntvalue(): void;
  getIntvalue(): number;
  setIntvalue(value: number): void;

  hasUintvalue(): boolean;
  clearUintvalue(): void;
  getUintvalue(): number;
  setUintvalue(value: number): void;

  hasFieldname(): boolean;
  clearFieldname(): void;
  getFieldname(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFieldname(value?: google_protobuf_wrappers_pb.StringValue): void;

  getValueCase(): IndexMatchValue.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexMatchValue.AsObject;
  static toObject(includeInstance: boolean, msg: IndexMatchValue): IndexMatchValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndexMatchValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexMatchValue;
  static deserializeBinaryFromReader(message: IndexMatchValue, reader: jspb.BinaryReader): IndexMatchValue;
}

export namespace IndexMatchValue {
  export type AsObject = {
    stringvalue: string,
    intvalue: number,
    uintvalue: number,
    fieldname?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    STRINGVALUE = 1,
    INTVALUE = 2,
    UINTVALUE = 3,
  }
}

export class TxoStats extends jspb.Message {
  getSpent(): number;
  setSpent(value: number): void;

  getUnspent(): number;
  setUnspent(value: number): void;

  getPending(): number;
  setPending(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxoStats.AsObject;
  static toObject(includeInstance: boolean, msg: TxoStats): TxoStats.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxoStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxoStats;
  static deserializeBinaryFromReader(message: TxoStats, reader: jspb.BinaryReader): TxoStats;
}

export namespace TxoStats {
  export type AsObject = {
    spent: number,
    unspent: number,
    pending: number,
    total: number,
  }
}

export class BlockchainSizeStats extends jspb.Message {
  getBlockheaderbytes(): number;
  setBlockheaderbytes(value: number): void;

  getTransactionbytes(): number;
  setTransactionbytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockchainSizeStats.AsObject;
  static toObject(includeInstance: boolean, msg: BlockchainSizeStats): BlockchainSizeStats.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockchainSizeStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockchainSizeStats;
  static deserializeBinaryFromReader(message: BlockchainSizeStats, reader: jspb.BinaryReader): BlockchainSizeStats;
}

export namespace BlockchainSizeStats {
  export type AsObject = {
    blockheaderbytes: number,
    transactionbytes: number,
  }
}

export class BlockStats extends jspb.Message {
  getEmpty(): number;
  setEmpty(value: number): void;

  getNonempty(): number;
  setNonempty(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockStats.AsObject;
  static toObject(includeInstance: boolean, msg: BlockStats): BlockStats.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockStats;
  static deserializeBinaryFromReader(message: BlockStats, reader: jspb.BinaryReader): BlockStats;
}

export namespace BlockStats {
  export type AsObject = {
    empty: number,
    nonempty: number,
  }
}

