// package: co.topl.node.services
// file: node/services/bifrost_rpc.proto

import * as jspb from "google-protobuf";
import * as consensus_models_block_id_pb from "../../consensus/models/block_id_pb";
import * as consensus_models_block_header_pb from "../../consensus/models/block_header_pb";
import * as node_models_block_pb from "../../node/models/block_pb";
import * as node_models_node_config_pb from "../../node/models/node_config_pb";
import * as node_models_node_epochData_pb from "../../node/models/node_epochData_pb";
import * as brambl_models_identifier_pb from "../../brambl/models/identifier_pb";
import * as brambl_models_transaction_io_transaction_pb from "../../brambl/models/transaction/io_transaction_pb";
import * as validate_validate_pb from "../../validate/validate_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class BroadcastTransactionReq extends jspb.Message {
  hasTransaction(): boolean;
  clearTransaction(): void;
  getTransaction(): brambl_models_transaction_io_transaction_pb.IoTransaction | undefined;
  setTransaction(value?: brambl_models_transaction_io_transaction_pb.IoTransaction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastTransactionReq.AsObject;
  static toObject(includeInstance: boolean, msg: BroadcastTransactionReq): BroadcastTransactionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BroadcastTransactionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastTransactionReq;
  static deserializeBinaryFromReader(message: BroadcastTransactionReq, reader: jspb.BinaryReader): BroadcastTransactionReq;
}

export namespace BroadcastTransactionReq {
  export type AsObject = {
    transaction?: brambl_models_transaction_io_transaction_pb.IoTransaction.AsObject,
  }
}

export class BroadcastTransactionRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BroadcastTransactionRes.AsObject;
  static toObject(includeInstance: boolean, msg: BroadcastTransactionRes): BroadcastTransactionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BroadcastTransactionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BroadcastTransactionRes;
  static deserializeBinaryFromReader(message: BroadcastTransactionRes, reader: jspb.BinaryReader): BroadcastTransactionRes;
}

export namespace BroadcastTransactionRes {
  export type AsObject = {
  }
}

export class CurrentMempoolReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentMempoolReq.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentMempoolReq): CurrentMempoolReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurrentMempoolReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentMempoolReq;
  static deserializeBinaryFromReader(message: CurrentMempoolReq, reader: jspb.BinaryReader): CurrentMempoolReq;
}

export namespace CurrentMempoolReq {
  export type AsObject = {
  }
}

export class CurrentMempoolRes extends jspb.Message {
  clearTransactionidsList(): void;
  getTransactionidsList(): Array<brambl_models_identifier_pb.TransactionId>;
  setTransactionidsList(value: Array<brambl_models_identifier_pb.TransactionId>): void;
  addTransactionids(value?: brambl_models_identifier_pb.TransactionId, index?: number): brambl_models_identifier_pb.TransactionId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentMempoolRes.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentMempoolRes): CurrentMempoolRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurrentMempoolRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentMempoolRes;
  static deserializeBinaryFromReader(message: CurrentMempoolRes, reader: jspb.BinaryReader): CurrentMempoolRes;
}

export namespace CurrentMempoolRes {
  export type AsObject = {
    transactionidsList: Array<brambl_models_identifier_pb.TransactionId.AsObject>,
  }
}

export class CurrentMempoolContainsReq extends jspb.Message {
  hasTransactionid(): boolean;
  clearTransactionid(): void;
  getTransactionid(): brambl_models_identifier_pb.TransactionId | undefined;
  setTransactionid(value?: brambl_models_identifier_pb.TransactionId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentMempoolContainsReq.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentMempoolContainsReq): CurrentMempoolContainsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurrentMempoolContainsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentMempoolContainsReq;
  static deserializeBinaryFromReader(message: CurrentMempoolContainsReq, reader: jspb.BinaryReader): CurrentMempoolContainsReq;
}

export namespace CurrentMempoolContainsReq {
  export type AsObject = {
    transactionid?: brambl_models_identifier_pb.TransactionId.AsObject,
  }
}

export class CurrentMempoolContainsRes extends jspb.Message {
  getInmempool(): boolean;
  setInmempool(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentMempoolContainsRes.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentMempoolContainsRes): CurrentMempoolContainsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurrentMempoolContainsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentMempoolContainsRes;
  static deserializeBinaryFromReader(message: CurrentMempoolContainsRes, reader: jspb.BinaryReader): CurrentMempoolContainsRes;
}

export namespace CurrentMempoolContainsRes {
  export type AsObject = {
    inmempool: boolean,
  }
}

export class FetchBlockHeaderReq extends jspb.Message {
  hasBlockid(): boolean;
  clearBlockid(): void;
  getBlockid(): consensus_models_block_id_pb.BlockId | undefined;
  setBlockid(value?: consensus_models_block_id_pb.BlockId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchBlockHeaderReq.AsObject;
  static toObject(includeInstance: boolean, msg: FetchBlockHeaderReq): FetchBlockHeaderReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchBlockHeaderReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchBlockHeaderReq;
  static deserializeBinaryFromReader(message: FetchBlockHeaderReq, reader: jspb.BinaryReader): FetchBlockHeaderReq;
}

export namespace FetchBlockHeaderReq {
  export type AsObject = {
    blockid?: consensus_models_block_id_pb.BlockId.AsObject,
  }
}

export class FetchBlockHeaderRes extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): consensus_models_block_header_pb.BlockHeader | undefined;
  setHeader(value?: consensus_models_block_header_pb.BlockHeader): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchBlockHeaderRes.AsObject;
  static toObject(includeInstance: boolean, msg: FetchBlockHeaderRes): FetchBlockHeaderRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchBlockHeaderRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchBlockHeaderRes;
  static deserializeBinaryFromReader(message: FetchBlockHeaderRes, reader: jspb.BinaryReader): FetchBlockHeaderRes;
}

export namespace FetchBlockHeaderRes {
  export type AsObject = {
    header?: consensus_models_block_header_pb.BlockHeader.AsObject,
  }
}

export class FetchBlockBodyReq extends jspb.Message {
  hasBlockid(): boolean;
  clearBlockid(): void;
  getBlockid(): consensus_models_block_id_pb.BlockId | undefined;
  setBlockid(value?: consensus_models_block_id_pb.BlockId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchBlockBodyReq.AsObject;
  static toObject(includeInstance: boolean, msg: FetchBlockBodyReq): FetchBlockBodyReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchBlockBodyReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchBlockBodyReq;
  static deserializeBinaryFromReader(message: FetchBlockBodyReq, reader: jspb.BinaryReader): FetchBlockBodyReq;
}

export namespace FetchBlockBodyReq {
  export type AsObject = {
    blockid?: consensus_models_block_id_pb.BlockId.AsObject,
  }
}

export class FetchBlockBodyRes extends jspb.Message {
  hasBody(): boolean;
  clearBody(): void;
  getBody(): node_models_block_pb.BlockBody | undefined;
  setBody(value?: node_models_block_pb.BlockBody): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchBlockBodyRes.AsObject;
  static toObject(includeInstance: boolean, msg: FetchBlockBodyRes): FetchBlockBodyRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchBlockBodyRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchBlockBodyRes;
  static deserializeBinaryFromReader(message: FetchBlockBodyRes, reader: jspb.BinaryReader): FetchBlockBodyRes;
}

export namespace FetchBlockBodyRes {
  export type AsObject = {
    body?: node_models_block_pb.BlockBody.AsObject,
  }
}

export class FetchTransactionReq extends jspb.Message {
  hasTransactionid(): boolean;
  clearTransactionid(): void;
  getTransactionid(): brambl_models_identifier_pb.TransactionId | undefined;
  setTransactionid(value?: brambl_models_identifier_pb.TransactionId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchTransactionReq.AsObject;
  static toObject(includeInstance: boolean, msg: FetchTransactionReq): FetchTransactionReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchTransactionReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchTransactionReq;
  static deserializeBinaryFromReader(message: FetchTransactionReq, reader: jspb.BinaryReader): FetchTransactionReq;
}

export namespace FetchTransactionReq {
  export type AsObject = {
    transactionid?: brambl_models_identifier_pb.TransactionId.AsObject,
  }
}

export class FetchTransactionRes extends jspb.Message {
  hasTransaction(): boolean;
  clearTransaction(): void;
  getTransaction(): brambl_models_transaction_io_transaction_pb.IoTransaction | undefined;
  setTransaction(value?: brambl_models_transaction_io_transaction_pb.IoTransaction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchTransactionRes.AsObject;
  static toObject(includeInstance: boolean, msg: FetchTransactionRes): FetchTransactionRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchTransactionRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchTransactionRes;
  static deserializeBinaryFromReader(message: FetchTransactionRes, reader: jspb.BinaryReader): FetchTransactionRes;
}

export namespace FetchTransactionRes {
  export type AsObject = {
    transaction?: brambl_models_transaction_io_transaction_pb.IoTransaction.AsObject,
  }
}

export class FetchBlockIdAtHeightReq extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchBlockIdAtHeightReq.AsObject;
  static toObject(includeInstance: boolean, msg: FetchBlockIdAtHeightReq): FetchBlockIdAtHeightReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchBlockIdAtHeightReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchBlockIdAtHeightReq;
  static deserializeBinaryFromReader(message: FetchBlockIdAtHeightReq, reader: jspb.BinaryReader): FetchBlockIdAtHeightReq;
}

export namespace FetchBlockIdAtHeightReq {
  export type AsObject = {
    height: number,
  }
}

export class FetchBlockIdAtHeightRes extends jspb.Message {
  hasBlockid(): boolean;
  clearBlockid(): void;
  getBlockid(): consensus_models_block_id_pb.BlockId | undefined;
  setBlockid(value?: consensus_models_block_id_pb.BlockId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchBlockIdAtHeightRes.AsObject;
  static toObject(includeInstance: boolean, msg: FetchBlockIdAtHeightRes): FetchBlockIdAtHeightRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchBlockIdAtHeightRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchBlockIdAtHeightRes;
  static deserializeBinaryFromReader(message: FetchBlockIdAtHeightRes, reader: jspb.BinaryReader): FetchBlockIdAtHeightRes;
}

export namespace FetchBlockIdAtHeightRes {
  export type AsObject = {
    blockid?: consensus_models_block_id_pb.BlockId.AsObject,
  }
}

export class FetchBlockIdAtDepthReq extends jspb.Message {
  getDepth(): number;
  setDepth(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchBlockIdAtDepthReq.AsObject;
  static toObject(includeInstance: boolean, msg: FetchBlockIdAtDepthReq): FetchBlockIdAtDepthReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchBlockIdAtDepthReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchBlockIdAtDepthReq;
  static deserializeBinaryFromReader(message: FetchBlockIdAtDepthReq, reader: jspb.BinaryReader): FetchBlockIdAtDepthReq;
}

export namespace FetchBlockIdAtDepthReq {
  export type AsObject = {
    depth: number,
  }
}

export class FetchBlockIdAtDepthRes extends jspb.Message {
  hasBlockid(): boolean;
  clearBlockid(): void;
  getBlockid(): consensus_models_block_id_pb.BlockId | undefined;
  setBlockid(value?: consensus_models_block_id_pb.BlockId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchBlockIdAtDepthRes.AsObject;
  static toObject(includeInstance: boolean, msg: FetchBlockIdAtDepthRes): FetchBlockIdAtDepthRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchBlockIdAtDepthRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchBlockIdAtDepthRes;
  static deserializeBinaryFromReader(message: FetchBlockIdAtDepthRes, reader: jspb.BinaryReader): FetchBlockIdAtDepthRes;
}

export namespace FetchBlockIdAtDepthRes {
  export type AsObject = {
    blockid?: consensus_models_block_id_pb.BlockId.AsObject,
  }
}

export class SynchronizationTraversalReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SynchronizationTraversalReq.AsObject;
  static toObject(includeInstance: boolean, msg: SynchronizationTraversalReq): SynchronizationTraversalReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SynchronizationTraversalReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SynchronizationTraversalReq;
  static deserializeBinaryFromReader(message: SynchronizationTraversalReq, reader: jspb.BinaryReader): SynchronizationTraversalReq;
}

export namespace SynchronizationTraversalReq {
  export type AsObject = {
  }
}

export class SynchronizationTraversalRes extends jspb.Message {
  hasApplied(): boolean;
  clearApplied(): void;
  getApplied(): consensus_models_block_id_pb.BlockId | undefined;
  setApplied(value?: consensus_models_block_id_pb.BlockId): void;

  hasUnapplied(): boolean;
  clearUnapplied(): void;
  getUnapplied(): consensus_models_block_id_pb.BlockId | undefined;
  setUnapplied(value?: consensus_models_block_id_pb.BlockId): void;

  getStatusCase(): SynchronizationTraversalRes.StatusCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SynchronizationTraversalRes.AsObject;
  static toObject(includeInstance: boolean, msg: SynchronizationTraversalRes): SynchronizationTraversalRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SynchronizationTraversalRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SynchronizationTraversalRes;
  static deserializeBinaryFromReader(message: SynchronizationTraversalRes, reader: jspb.BinaryReader): SynchronizationTraversalRes;
}

export namespace SynchronizationTraversalRes {
  export type AsObject = {
    applied?: consensus_models_block_id_pb.BlockId.AsObject,
    unapplied?: consensus_models_block_id_pb.BlockId.AsObject,
  }

  export enum StatusCase {
    STATUS_NOT_SET = 0,
    APPLIED = 1,
    UNAPPLIED = 2,
  }
}

export class FetchNodeConfigReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchNodeConfigReq.AsObject;
  static toObject(includeInstance: boolean, msg: FetchNodeConfigReq): FetchNodeConfigReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchNodeConfigReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchNodeConfigReq;
  static deserializeBinaryFromReader(message: FetchNodeConfigReq, reader: jspb.BinaryReader): FetchNodeConfigReq;
}

export namespace FetchNodeConfigReq {
  export type AsObject = {
  }
}

export class FetchNodeConfigRes extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): node_models_node_config_pb.NodeConfig | undefined;
  setConfig(value?: node_models_node_config_pb.NodeConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchNodeConfigRes.AsObject;
  static toObject(includeInstance: boolean, msg: FetchNodeConfigRes): FetchNodeConfigRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchNodeConfigRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchNodeConfigRes;
  static deserializeBinaryFromReader(message: FetchNodeConfigRes, reader: jspb.BinaryReader): FetchNodeConfigRes;
}

export namespace FetchNodeConfigRes {
  export type AsObject = {
    config?: node_models_node_config_pb.NodeConfig.AsObject,
  }
}

export class FetchEpochDataReq extends jspb.Message {
  hasEpoch(): boolean;
  clearEpoch(): void;
  getEpoch(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setEpoch(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchEpochDataReq.AsObject;
  static toObject(includeInstance: boolean, msg: FetchEpochDataReq): FetchEpochDataReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchEpochDataReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchEpochDataReq;
  static deserializeBinaryFromReader(message: FetchEpochDataReq, reader: jspb.BinaryReader): FetchEpochDataReq;
}

export namespace FetchEpochDataReq {
  export type AsObject = {
    epoch?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
  }
}

export class FetchEpochDataRes extends jspb.Message {
  hasEpochdata(): boolean;
  clearEpochdata(): void;
  getEpochdata(): node_models_node_epochData_pb.EpochData | undefined;
  setEpochdata(value?: node_models_node_epochData_pb.EpochData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchEpochDataRes.AsObject;
  static toObject(includeInstance: boolean, msg: FetchEpochDataRes): FetchEpochDataRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchEpochDataRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchEpochDataRes;
  static deserializeBinaryFromReader(message: FetchEpochDataRes, reader: jspb.BinaryReader): FetchEpochDataRes;
}

export namespace FetchEpochDataRes {
  export type AsObject = {
    epochdata?: node_models_node_epochData_pb.EpochData.AsObject,
  }
}

