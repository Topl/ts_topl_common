// @generated by protoc-gen-es v1.8.0
// @generated from file genus/genus_models.proto (package co.topl.genus.services, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, UInt32Value } from "@bufbuild/protobuf";
import { UnspentTransactionOutput } from "../brambl/models/transaction/unspent_transaction_output_pb.js";
import { LockAddress, TransactionInputAddress, TransactionOutputAddress } from "../brambl/models/address_pb.js";
import { SpentTransactionOutput } from "../brambl/models/transaction/spent_transaction_output_pb.js";
import { IoTransaction } from "../brambl/models/transaction/io_transaction_pb.js";
import { BlockId } from "../consensus/models/block_id_pb.js";
import { BlockHeader } from "../consensus/models/block_header_pb.js";
import { FullBlockBody } from "../node/models/block_pb.js";

/**
 * Used to identify the status of a Txo.
 *
 * @generated from enum co.topl.genus.services.TxoState
 */
export const TxoState = /*@__PURE__*/ proto3.makeEnum(
  "co.topl.genus.services.TxoState",
  [
    {no: 0, name: "SPENT"},
    {no: 1, name: "UNSPENT"},
    {no: 2, name: "PENDING"},
  ],
);

/**
 * Specify the order of data for indexes.
 *
 * @generated from enum co.topl.genus.services.SortOrder
 */
export const SortOrder = /*@__PURE__*/ proto3.makeEnum(
  "co.topl.genus.services.SortOrder",
  [
    {no: 0, name: "ASCENDING"},
    {no: 1, name: "DESCENDING"},
    {no: 2, name: "UNSORTED"},
  ],
);

/**
 * Types of assets that can be identified by an AssetLabel
 *
 * @generated from enum co.topl.genus.services.LabelType
 */
export const LabelType = /*@__PURE__*/ proto3.makeEnum(
  "co.topl.genus.services.LabelType",
  [
    {no: 0, name: "EMPTY"},
    {no: 1, name: "LVL"},
    {no: 2, name: "TOPL"},
    {no: 3, name: "V1"},
    {no: 4, name: "TAM2"},
  ],
);

/**
 * A Txo and its status
 *
 * @generated from message co.topl.genus.services.Txo
 */
export const Txo = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.genus.services.Txo",
  () => [
    { no: 1, name: "transactionOutput", kind: "message", T: UnspentTransactionOutput },
    { no: 2, name: "state", kind: "enum", T: proto3.getEnumType(TxoState) },
    { no: 3, name: "outputAddress", kind: "message", T: TransactionOutputAddress },
    { no: 4, name: "spender", kind: "message", T: Txo_Spender },
  ],
);

/**
 * @generated from message co.topl.genus.services.Txo.Spender
 */
export const Txo_Spender = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.genus.services.Txo.Spender",
  () => [
    { no: 1, name: "inputAddress", kind: "message", T: TransactionInputAddress },
    { no: 2, name: "input", kind: "message", T: SpentTransactionOutput },
  ],
  {localName: "Txo_Spender"},
);

/**
 * 1 - the probability that something will be subject to a reorg.
 * Defaults to 0.9999999
 *
 * @generated from message co.topl.genus.services.ConfidenceFactor
 */
export const ConfidenceFactor = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.genus.services.ConfidenceFactor",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ],
);

/**
 * The distance between blocks
 *
 * @generated from message co.topl.genus.services.ChainDistance
 */
export const ChainDistance = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.genus.services.ChainDistance",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * An identifier for a TAM2 asset type
 *
 * @generated from message co.topl.genus.services.AssetLabel
 */
export const AssetLabel = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.genus.services.AssetLabel",
  () => [
    { no: 1, name: "labelType", kind: "enum", T: proto3.getEnumType(LabelType) },
    { no: 2, name: "empty", kind: "message", T: AssetLabel_Empty, oneof: "label" },
    { no: 3, name: "v1Label", kind: "message", T: AssetLabel_V1Label, oneof: "label" },
    { no: 4, name: "tam2Label", kind: "message", T: AssetLabel_Tam2Label, oneof: "label" },
  ],
);

/**
 * @generated from message co.topl.genus.services.AssetLabel.Empty
 */
export const AssetLabel_Empty = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.genus.services.AssetLabel.Empty",
  [],
  {localName: "AssetLabel_Empty"},
);

/**
 * @generated from message co.topl.genus.services.AssetLabel.V1Label
 */
export const AssetLabel_V1Label = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.genus.services.AssetLabel.V1Label",
  () => [
    { no: 1, name: "version", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "mintingAddress", kind: "message", T: LockAddress },
  ],
  {localName: "AssetLabel_V1Label"},
);

/**
 * @generated from message co.topl.genus.services.AssetLabel.Tam2Label
 */
export const AssetLabel_Tam2Label = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.genus.services.AssetLabel.Tam2Label",
  () => [
    { no: 1, name: "groupHashMostSignificant", kind: "scalar", T: 6 /* ScalarType.FIXED64 */ },
    { no: 2, name: "groupHashMoreSignificant", kind: "scalar", T: 6 /* ScalarType.FIXED64 */ },
    { no: 3, name: "groupHashLessSignificant", kind: "scalar", T: 6 /* ScalarType.FIXED64 */ },
    { no: 4, name: "groupHashLeastSignificant", kind: "scalar", T: 6 /* ScalarType.FIXED64 */ },
    { no: 5, name: "seriesHashMostSignificant", kind: "scalar", T: 6 /* ScalarType.FIXED64 */ },
    { no: 6, name: "seriesHashMoreSignificant", kind: "scalar", T: 6 /* ScalarType.FIXED64 */ },
    { no: 7, name: "seriesHashLessSignificant", kind: "scalar", T: 6 /* ScalarType.FIXED64 */ },
    { no: 8, name: "seriesHashLeastSignificant", kind: "scalar", T: 6 /* ScalarType.FIXED64 */ },
  ],
  {localName: "AssetLabel_Tam2Label"},
);

/**
 * A request to create an index of transaction based on their on-chain metadata
 *
 * @generated from message co.topl.genus.services.IndexSpec
 */
export const IndexSpec = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.genus.services.IndexSpec",
  () => [
    { no: 1, name: "indexName", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "indexFieldSpec", kind: "message", T: IndexFieldSpec },
    { no: 3, name: "indexFilter", kind: "message", T: IndexFilter },
  ],
);

/**
 * A specification to identify the field(s) in data to be indexed
 *
 * @generated from message co.topl.genus.services.IndexFieldSpec
 */
export const IndexFieldSpec = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.genus.services.IndexFieldSpec",
  () => [
    { no: 1, name: "jsonSpecs", kind: "message", T: JsonIndexSpecs, oneof: "spec" },
    { no: 2, name: "csvSpecs", kind: "message", T: CsvIndexSpecs, oneof: "spec" },
  ],
);

/**
 * a sequence of csv field references to identify the values in data to be indexed
 *
 * @generated from message co.topl.genus.services.CsvIndexSpecs
 */
export const CsvIndexSpecs = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.genus.services.CsvIndexSpecs",
  () => [
    { no: 1, name: "specs", kind: "message", T: CsvIndexSpec, repeated: true },
    { no: 2, name: "separatorChar", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "quoteChar", kind: "message", T: UInt32Value },
  ],
);

/**
 * a sequence of csv field references to identify the values in data to be indexed
 *
 * @generated from message co.topl.genus.services.CsvIndexSpec
 */
export const CsvIndexSpec = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.genus.services.CsvIndexSpec",
  () => [
    { no: 1, name: "fieldIndex", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "sortOrder", kind: "enum", T: proto3.getEnumType(SortOrder) },
    { no: 3, name: "isNumeric", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * A sequence of JSONPath strings to identify the values in data to be indexed (https://datatracker.ietf.org/doc/id/draft-goessner-dispatch-jsonpath-00.html)
 *
 * @generated from message co.topl.genus.services.JsonIndexSpecs
 */
export const JsonIndexSpecs = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.genus.services.JsonIndexSpecs",
  () => [
    { no: 1, name: "specs", kind: "message", T: JsonIndexSpec, repeated: true },
  ],
);

/**
 * A JSONPath string to identify a value in data to be indexed (https://datatracker.ietf.org/doc/id/draft-goessner-dispatch-jsonpath-00.html)
 *
 * @generated from message co.topl.genus.services.JsonIndexSpec
 */
export const JsonIndexSpec = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.genus.services.JsonIndexSpec",
  () => [
    { no: 1, name: "jsonPath", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "sortOrder", kind: "enum", T: proto3.getEnumType(SortOrder) },
  ],
);

/**
 * How records should be filtered to determine which ones to include in an index.
 *
 * @generated from message co.topl.genus.services.IndexFilter
 */
export const IndexFilter = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.genus.services.IndexFilter",
  () => [
    { no: 1, name: "regexIndexFilter", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "filter" },
  ],
);

/**
 * @generated from message co.topl.genus.services.TransactionReceipt
 */
export const TransactionReceipt = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.genus.services.TransactionReceipt",
  () => [
    { no: 1, name: "transaction", kind: "message", T: IoTransaction },
    { no: 2, name: "confidenceFactor", kind: "message", T: ConfidenceFactor },
    { no: 3, name: "blockId", kind: "message", T: BlockId },
    { no: 4, name: "depth", kind: "message", T: ChainDistance },
  ],
);

/**
 * Data structure that encapsulates relation between a possible block data and its height.
 *
 * @generated from message co.topl.genus.services.HeightData
 */
export const HeightData = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.genus.services.HeightData",
  () => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "blockData", kind: "message", T: BlockData },
  ],
);

/**
 * Data structure with the most important parts of a Block. Equivalent to a denormalized Full Block.
 *
 * @generated from message co.topl.genus.services.BlockData
 */
export const BlockData = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.genus.services.BlockData",
  () => [
    { no: 1, name: "header", kind: "message", T: BlockHeader },
    { no: 4, name: "body", kind: "message", T: FullBlockBody },
  ],
);
