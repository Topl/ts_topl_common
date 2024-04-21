/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { LockAddress, TransactionInputAddress, TransactionOutputAddress } from "../brambl/models/address";
import { IoTransaction } from "../brambl/models/transaction/io_transaction";
import { SpentTransactionOutput } from "../brambl/models/transaction/spent_transaction_output";
import { UnspentTransactionOutput } from "../brambl/models/transaction/unspent_transaction_output";
import { BlockHeader } from "../consensus/models/block_header";
import { BlockId } from "../consensus/models/block_id";
import { UInt32Value } from "../google/protobuf/wrappers";
import { FullBlockBody } from "../node/models/block";

export const protobufPackage = "co.topl.genus.services";

/** Used to identify the status of a Txo. */
export enum TxoState {
  /** SPENT - The TxO is spent */
  SPENT = 0,
  /** UNSPENT - The TxO is not spent */
  UNSPENT = 1,
  /** PENDING - A transaction is pending that may spend the TXO. This state should only appear in bifrost clients. */
  PENDING = 2,
  UNRECOGNIZED = -1,
}

export function txoStateFromJSON(object: any): TxoState {
  switch (object) {
    case 0:
    case "SPENT":
      return TxoState.SPENT;
    case 1:
    case "UNSPENT":
      return TxoState.UNSPENT;
    case 2:
    case "PENDING":
      return TxoState.PENDING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TxoState.UNRECOGNIZED;
  }
}

export function txoStateToJSON(object: TxoState): string {
  switch (object) {
    case TxoState.SPENT:
      return "SPENT";
    case TxoState.UNSPENT:
      return "UNSPENT";
    case TxoState.PENDING:
      return "PENDING";
    case TxoState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Specify the order of data for indexes. */
export enum SortOrder {
  ASCENDING = 0,
  DESCENDING = 1,
  UNSORTED = 2,
  UNRECOGNIZED = -1,
}

export function sortOrderFromJSON(object: any): SortOrder {
  switch (object) {
    case 0:
    case "ASCENDING":
      return SortOrder.ASCENDING;
    case 1:
    case "DESCENDING":
      return SortOrder.DESCENDING;
    case 2:
    case "UNSORTED":
      return SortOrder.UNSORTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SortOrder.UNRECOGNIZED;
  }
}

export function sortOrderToJSON(object: SortOrder): string {
  switch (object) {
    case SortOrder.ASCENDING:
      return "ASCENDING";
    case SortOrder.DESCENDING:
      return "DESCENDING";
    case SortOrder.UNSORTED:
      return "UNSORTED";
    case SortOrder.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Types of assets that can be identified by an AssetLabel */
export enum LabelType {
  EMPTY = 0,
  LVL = 1,
  TOPL = 2,
  V1 = 3,
  TAM2 = 4,
  UNRECOGNIZED = -1,
}

export function labelTypeFromJSON(object: any): LabelType {
  switch (object) {
    case 0:
    case "EMPTY":
      return LabelType.EMPTY;
    case 1:
    case "LVL":
      return LabelType.LVL;
    case 2:
    case "TOPL":
      return LabelType.TOPL;
    case 3:
    case "V1":
      return LabelType.V1;
    case 4:
    case "TAM2":
      return LabelType.TAM2;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LabelType.UNRECOGNIZED;
  }
}

export function labelTypeToJSON(object: LabelType): string {
  switch (object) {
    case LabelType.EMPTY:
      return "EMPTY";
    case LabelType.LVL:
      return "LVL";
    case LabelType.TOPL:
      return "TOPL";
    case LabelType.V1:
      return "V1";
    case LabelType.TAM2:
      return "TAM2";
    case LabelType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A Txo and its status */
export interface Txo {
  transactionOutput: UnspentTransactionOutput | undefined;
  state: TxoState;
  outputAddress:
    | TransactionOutputAddress
    | undefined;
  /**
   * When 'state' is "SPENT", this field points to the transaction (input) that spent it.
   * Otherwise, this field is empty.
   */
  spender: Txo_Spender | undefined;
}

export interface Txo_Spender {
  inputAddress: TransactionInputAddress | undefined;
  input: SpentTransactionOutput | undefined;
}

/**
 * 1 - the probability that something will be subject to a reorg.
 * Defaults to 0.9999999
 */
export interface ConfidenceFactor {
  value: number;
}

/** The distance between blocks */
export interface ChainDistance {
  value: number;
}

/** An identifier for a TAM2 asset type */
export interface AssetLabel {
  labelType: LabelType;
  /** Since this is a one-of we need to have a field to use for the label types such as LVL that don't need them. */
  empty?: AssetLabel_Empty | undefined;
  v1Label?: AssetLabel_V1Label | undefined;
  tam2Label?: AssetLabel_Tam2Label | undefined;
}

export interface AssetLabel_Empty {
}

export interface AssetLabel_V1Label {
  version: number;
  mintingAddress: LockAddress | undefined;
}

export interface AssetLabel_Tam2Label {
  groupHashMostSignificant: number;
  groupHashMoreSignificant: number;
  groupHashLessSignificant: number;
  groupHashLeastSignificant: number;
  seriesHashMostSignificant: number;
  seriesHashMoreSignificant: number;
  seriesHashLessSignificant: number;
  seriesHashLeastSignificant: number;
}

/** A request to create an index of transaction based on their on-chain metadata */
export interface IndexSpec {
  /** The name of the index */
  indexName: string;
  /** A description of the fields to be indexed */
  indexFieldSpec:
    | IndexFieldSpec
    | undefined;
  /** Filter to determine which transactions are included in the index. Only records that match the filter will be included in the index. */
  indexFilter: IndexFilter | undefined;
}

/** A specification to identify the field(s) in data to be indexed */
export interface IndexFieldSpec {
  jsonSpecs?:
    | JsonIndexSpecs
    | undefined;
  /** TODO ways to specify indexes for other types of data */
  csvSpecs?: CsvIndexSpecs | undefined;
}

/** a sequence of csv field references to identify the values in data to be indexed */
export interface CsvIndexSpecs {
  specs: CsvIndexSpec[];
  /** The character code that is used to separate fields. */
  separatorChar: number;
  /** If this is present, the specified character appears at the beginning and end of each field. */
  quoteChar: number | undefined;
}

/** a sequence of csv field references to identify the values in data to be indexed */
export interface CsvIndexSpec {
  /** Origin 1 field index */
  fieldIndex: number;
  sortOrder: SortOrder;
  /** If this is true, the field is sorted numerically; otherwise lexically. */
  isNumeric: boolean;
}

/** A sequence of JSONPath strings to identify the values in data to be indexed (https://datatracker.ietf.org/doc/id/draft-goessner-dispatch-jsonpath-00.html) */
export interface JsonIndexSpecs {
  specs: JsonIndexSpec[];
}

/** A JSONPath string to identify a value in data to be indexed (https://datatracker.ietf.org/doc/id/draft-goessner-dispatch-jsonpath-00.html) */
export interface JsonIndexSpec {
  jsonPath: string;
  sortOrder: SortOrder;
}

/** How records should be filtered to determine which ones to include in an index. */
export interface IndexFilter {
  regexIndexFilter?: string | undefined;
}

export interface TransactionReceipt {
  transaction: IoTransaction | undefined;
  confidenceFactor: ConfidenceFactor | undefined;
  blockId: BlockId | undefined;
  depth: ChainDistance | undefined;
}

/** Data structure that encapsulates relation between a possible block data and its height. */
export interface HeightData {
  height: number;
  blockData: BlockData | undefined;
}

/** Data structure with the most important parts of a Block. Equivalent to a denormalized Full Block. */
export interface BlockData {
  header: BlockHeader | undefined;
  body: FullBlockBody | undefined;
}

function createBaseTxo(): Txo {
  return { transactionOutput: undefined, state: 0, outputAddress: undefined, spender: undefined };
}

export const Txo = {
  encode(message: Txo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionOutput !== undefined) {
      UnspentTransactionOutput.encode(message.transactionOutput, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.outputAddress !== undefined) {
      TransactionOutputAddress.encode(message.outputAddress, writer.uint32(26).fork()).ldelim();
    }
    if (message.spender !== undefined) {
      Txo_Spender.encode(message.spender, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Txo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transactionOutput = UnspentTransactionOutput.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.outputAddress = TransactionOutputAddress.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.spender = Txo_Spender.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Txo {
    return {
      transactionOutput: isSet(object.transactionOutput)
        ? UnspentTransactionOutput.fromJSON(object.transactionOutput)
        : undefined,
      state: isSet(object.state) ? txoStateFromJSON(object.state) : 0,
      outputAddress: isSet(object.outputAddress) ? TransactionOutputAddress.fromJSON(object.outputAddress) : undefined,
      spender: isSet(object.spender) ? Txo_Spender.fromJSON(object.spender) : undefined,
    };
  },

  toJSON(message: Txo): unknown {
    const obj: any = {};
    if (message.transactionOutput !== undefined) {
      obj.transactionOutput = UnspentTransactionOutput.toJSON(message.transactionOutput);
    }
    if (message.state !== 0) {
      obj.state = txoStateToJSON(message.state);
    }
    if (message.outputAddress !== undefined) {
      obj.outputAddress = TransactionOutputAddress.toJSON(message.outputAddress);
    }
    if (message.spender !== undefined) {
      obj.spender = Txo_Spender.toJSON(message.spender);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Txo>, I>>(base?: I): Txo {
    return Txo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Txo>, I>>(object: I): Txo {
    const message = createBaseTxo();
    message.transactionOutput = (object.transactionOutput !== undefined && object.transactionOutput !== null)
      ? UnspentTransactionOutput.fromPartial(object.transactionOutput)
      : undefined;
    message.state = object.state ?? 0;
    message.outputAddress = (object.outputAddress !== undefined && object.outputAddress !== null)
      ? TransactionOutputAddress.fromPartial(object.outputAddress)
      : undefined;
    message.spender = (object.spender !== undefined && object.spender !== null)
      ? Txo_Spender.fromPartial(object.spender)
      : undefined;
    return message;
  },
};

function createBaseTxo_Spender(): Txo_Spender {
  return { inputAddress: undefined, input: undefined };
}

export const Txo_Spender = {
  encode(message: Txo_Spender, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inputAddress !== undefined) {
      TransactionInputAddress.encode(message.inputAddress, writer.uint32(10).fork()).ldelim();
    }
    if (message.input !== undefined) {
      SpentTransactionOutput.encode(message.input, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Txo_Spender {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxo_Spender();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inputAddress = TransactionInputAddress.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.input = SpentTransactionOutput.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Txo_Spender {
    return {
      inputAddress: isSet(object.inputAddress) ? TransactionInputAddress.fromJSON(object.inputAddress) : undefined,
      input: isSet(object.input) ? SpentTransactionOutput.fromJSON(object.input) : undefined,
    };
  },

  toJSON(message: Txo_Spender): unknown {
    const obj: any = {};
    if (message.inputAddress !== undefined) {
      obj.inputAddress = TransactionInputAddress.toJSON(message.inputAddress);
    }
    if (message.input !== undefined) {
      obj.input = SpentTransactionOutput.toJSON(message.input);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Txo_Spender>, I>>(base?: I): Txo_Spender {
    return Txo_Spender.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Txo_Spender>, I>>(object: I): Txo_Spender {
    const message = createBaseTxo_Spender();
    message.inputAddress = (object.inputAddress !== undefined && object.inputAddress !== null)
      ? TransactionInputAddress.fromPartial(object.inputAddress)
      : undefined;
    message.input = (object.input !== undefined && object.input !== null)
      ? SpentTransactionOutput.fromPartial(object.input)
      : undefined;
    return message;
  },
};

function createBaseConfidenceFactor(): ConfidenceFactor {
  return { value: 0 };
}

export const ConfidenceFactor = {
  encode(message: ConfidenceFactor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(9).double(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfidenceFactor {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfidenceFactor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.value = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfidenceFactor {
    return { value: isSet(object.value) ? globalThis.Number(object.value) : 0 };
  },

  toJSON(message: ConfidenceFactor): unknown {
    const obj: any = {};
    if (message.value !== 0) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConfidenceFactor>, I>>(base?: I): ConfidenceFactor {
    return ConfidenceFactor.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ConfidenceFactor>, I>>(object: I): ConfidenceFactor {
    const message = createBaseConfidenceFactor();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseChainDistance(): ChainDistance {
  return { value: 0 };
}

export const ChainDistance = {
  encode(message: ChainDistance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).int64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChainDistance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainDistance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChainDistance {
    return { value: isSet(object.value) ? globalThis.Number(object.value) : 0 };
  },

  toJSON(message: ChainDistance): unknown {
    const obj: any = {};
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChainDistance>, I>>(base?: I): ChainDistance {
    return ChainDistance.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChainDistance>, I>>(object: I): ChainDistance {
    const message = createBaseChainDistance();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseAssetLabel(): AssetLabel {
  return { labelType: 0, empty: undefined, v1Label: undefined, tam2Label: undefined };
}

export const AssetLabel = {
  encode(message: AssetLabel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.labelType !== 0) {
      writer.uint32(8).int32(message.labelType);
    }
    if (message.empty !== undefined) {
      AssetLabel_Empty.encode(message.empty, writer.uint32(18).fork()).ldelim();
    }
    if (message.v1Label !== undefined) {
      AssetLabel_V1Label.encode(message.v1Label, writer.uint32(26).fork()).ldelim();
    }
    if (message.tam2Label !== undefined) {
      AssetLabel_Tam2Label.encode(message.tam2Label, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetLabel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetLabel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.labelType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.empty = AssetLabel_Empty.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.v1Label = AssetLabel_V1Label.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.tam2Label = AssetLabel_Tam2Label.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetLabel {
    return {
      labelType: isSet(object.labelType) ? labelTypeFromJSON(object.labelType) : 0,
      empty: isSet(object.empty) ? AssetLabel_Empty.fromJSON(object.empty) : undefined,
      v1Label: isSet(object.v1Label) ? AssetLabel_V1Label.fromJSON(object.v1Label) : undefined,
      tam2Label: isSet(object.tam2Label) ? AssetLabel_Tam2Label.fromJSON(object.tam2Label) : undefined,
    };
  },

  toJSON(message: AssetLabel): unknown {
    const obj: any = {};
    if (message.labelType !== 0) {
      obj.labelType = labelTypeToJSON(message.labelType);
    }
    if (message.empty !== undefined) {
      obj.empty = AssetLabel_Empty.toJSON(message.empty);
    }
    if (message.v1Label !== undefined) {
      obj.v1Label = AssetLabel_V1Label.toJSON(message.v1Label);
    }
    if (message.tam2Label !== undefined) {
      obj.tam2Label = AssetLabel_Tam2Label.toJSON(message.tam2Label);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AssetLabel>, I>>(base?: I): AssetLabel {
    return AssetLabel.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AssetLabel>, I>>(object: I): AssetLabel {
    const message = createBaseAssetLabel();
    message.labelType = object.labelType ?? 0;
    message.empty = (object.empty !== undefined && object.empty !== null)
      ? AssetLabel_Empty.fromPartial(object.empty)
      : undefined;
    message.v1Label = (object.v1Label !== undefined && object.v1Label !== null)
      ? AssetLabel_V1Label.fromPartial(object.v1Label)
      : undefined;
    message.tam2Label = (object.tam2Label !== undefined && object.tam2Label !== null)
      ? AssetLabel_Tam2Label.fromPartial(object.tam2Label)
      : undefined;
    return message;
  },
};

function createBaseAssetLabel_Empty(): AssetLabel_Empty {
  return {};
}

export const AssetLabel_Empty = {
  encode(_: AssetLabel_Empty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetLabel_Empty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetLabel_Empty();
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

  fromJSON(_: any): AssetLabel_Empty {
    return {};
  },

  toJSON(_: AssetLabel_Empty): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AssetLabel_Empty>, I>>(base?: I): AssetLabel_Empty {
    return AssetLabel_Empty.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AssetLabel_Empty>, I>>(_: I): AssetLabel_Empty {
    const message = createBaseAssetLabel_Empty();
    return message;
  },
};

function createBaseAssetLabel_V1Label(): AssetLabel_V1Label {
  return { version: 0, mintingAddress: undefined };
}

export const AssetLabel_V1Label = {
  encode(message: AssetLabel_V1Label, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    if (message.mintingAddress !== undefined) {
      LockAddress.encode(message.mintingAddress, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetLabel_V1Label {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetLabel_V1Label();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.version = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.mintingAddress = LockAddress.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetLabel_V1Label {
    return {
      version: isSet(object.version) ? globalThis.Number(object.version) : 0,
      mintingAddress: isSet(object.mintingAddress) ? LockAddress.fromJSON(object.mintingAddress) : undefined,
    };
  },

  toJSON(message: AssetLabel_V1Label): unknown {
    const obj: any = {};
    if (message.version !== 0) {
      obj.version = Math.round(message.version);
    }
    if (message.mintingAddress !== undefined) {
      obj.mintingAddress = LockAddress.toJSON(message.mintingAddress);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AssetLabel_V1Label>, I>>(base?: I): AssetLabel_V1Label {
    return AssetLabel_V1Label.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AssetLabel_V1Label>, I>>(object: I): AssetLabel_V1Label {
    const message = createBaseAssetLabel_V1Label();
    message.version = object.version ?? 0;
    message.mintingAddress = (object.mintingAddress !== undefined && object.mintingAddress !== null)
      ? LockAddress.fromPartial(object.mintingAddress)
      : undefined;
    return message;
  },
};

function createBaseAssetLabel_Tam2Label(): AssetLabel_Tam2Label {
  return {
    groupHashMostSignificant: 0,
    groupHashMoreSignificant: 0,
    groupHashLessSignificant: 0,
    groupHashLeastSignificant: 0,
    seriesHashMostSignificant: 0,
    seriesHashMoreSignificant: 0,
    seriesHashLessSignificant: 0,
    seriesHashLeastSignificant: 0,
  };
}

export const AssetLabel_Tam2Label = {
  encode(message: AssetLabel_Tam2Label, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupHashMostSignificant !== 0) {
      writer.uint32(9).fixed64(message.groupHashMostSignificant);
    }
    if (message.groupHashMoreSignificant !== 0) {
      writer.uint32(17).fixed64(message.groupHashMoreSignificant);
    }
    if (message.groupHashLessSignificant !== 0) {
      writer.uint32(25).fixed64(message.groupHashLessSignificant);
    }
    if (message.groupHashLeastSignificant !== 0) {
      writer.uint32(33).fixed64(message.groupHashLeastSignificant);
    }
    if (message.seriesHashMostSignificant !== 0) {
      writer.uint32(41).fixed64(message.seriesHashMostSignificant);
    }
    if (message.seriesHashMoreSignificant !== 0) {
      writer.uint32(49).fixed64(message.seriesHashMoreSignificant);
    }
    if (message.seriesHashLessSignificant !== 0) {
      writer.uint32(57).fixed64(message.seriesHashLessSignificant);
    }
    if (message.seriesHashLeastSignificant !== 0) {
      writer.uint32(65).fixed64(message.seriesHashLeastSignificant);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetLabel_Tam2Label {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetLabel_Tam2Label();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.groupHashMostSignificant = longToNumber(reader.fixed64() as Long);
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.groupHashMoreSignificant = longToNumber(reader.fixed64() as Long);
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.groupHashLessSignificant = longToNumber(reader.fixed64() as Long);
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.groupHashLeastSignificant = longToNumber(reader.fixed64() as Long);
          continue;
        case 5:
          if (tag !== 41) {
            break;
          }

          message.seriesHashMostSignificant = longToNumber(reader.fixed64() as Long);
          continue;
        case 6:
          if (tag !== 49) {
            break;
          }

          message.seriesHashMoreSignificant = longToNumber(reader.fixed64() as Long);
          continue;
        case 7:
          if (tag !== 57) {
            break;
          }

          message.seriesHashLessSignificant = longToNumber(reader.fixed64() as Long);
          continue;
        case 8:
          if (tag !== 65) {
            break;
          }

          message.seriesHashLeastSignificant = longToNumber(reader.fixed64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetLabel_Tam2Label {
    return {
      groupHashMostSignificant: isSet(object.groupHashMostSignificant)
        ? globalThis.Number(object.groupHashMostSignificant)
        : 0,
      groupHashMoreSignificant: isSet(object.groupHashMoreSignificant)
        ? globalThis.Number(object.groupHashMoreSignificant)
        : 0,
      groupHashLessSignificant: isSet(object.groupHashLessSignificant)
        ? globalThis.Number(object.groupHashLessSignificant)
        : 0,
      groupHashLeastSignificant: isSet(object.groupHashLeastSignificant)
        ? globalThis.Number(object.groupHashLeastSignificant)
        : 0,
      seriesHashMostSignificant: isSet(object.seriesHashMostSignificant)
        ? globalThis.Number(object.seriesHashMostSignificant)
        : 0,
      seriesHashMoreSignificant: isSet(object.seriesHashMoreSignificant)
        ? globalThis.Number(object.seriesHashMoreSignificant)
        : 0,
      seriesHashLessSignificant: isSet(object.seriesHashLessSignificant)
        ? globalThis.Number(object.seriesHashLessSignificant)
        : 0,
      seriesHashLeastSignificant: isSet(object.seriesHashLeastSignificant)
        ? globalThis.Number(object.seriesHashLeastSignificant)
        : 0,
    };
  },

  toJSON(message: AssetLabel_Tam2Label): unknown {
    const obj: any = {};
    if (message.groupHashMostSignificant !== 0) {
      obj.groupHashMostSignificant = Math.round(message.groupHashMostSignificant);
    }
    if (message.groupHashMoreSignificant !== 0) {
      obj.groupHashMoreSignificant = Math.round(message.groupHashMoreSignificant);
    }
    if (message.groupHashLessSignificant !== 0) {
      obj.groupHashLessSignificant = Math.round(message.groupHashLessSignificant);
    }
    if (message.groupHashLeastSignificant !== 0) {
      obj.groupHashLeastSignificant = Math.round(message.groupHashLeastSignificant);
    }
    if (message.seriesHashMostSignificant !== 0) {
      obj.seriesHashMostSignificant = Math.round(message.seriesHashMostSignificant);
    }
    if (message.seriesHashMoreSignificant !== 0) {
      obj.seriesHashMoreSignificant = Math.round(message.seriesHashMoreSignificant);
    }
    if (message.seriesHashLessSignificant !== 0) {
      obj.seriesHashLessSignificant = Math.round(message.seriesHashLessSignificant);
    }
    if (message.seriesHashLeastSignificant !== 0) {
      obj.seriesHashLeastSignificant = Math.round(message.seriesHashLeastSignificant);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AssetLabel_Tam2Label>, I>>(base?: I): AssetLabel_Tam2Label {
    return AssetLabel_Tam2Label.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AssetLabel_Tam2Label>, I>>(object: I): AssetLabel_Tam2Label {
    const message = createBaseAssetLabel_Tam2Label();
    message.groupHashMostSignificant = object.groupHashMostSignificant ?? 0;
    message.groupHashMoreSignificant = object.groupHashMoreSignificant ?? 0;
    message.groupHashLessSignificant = object.groupHashLessSignificant ?? 0;
    message.groupHashLeastSignificant = object.groupHashLeastSignificant ?? 0;
    message.seriesHashMostSignificant = object.seriesHashMostSignificant ?? 0;
    message.seriesHashMoreSignificant = object.seriesHashMoreSignificant ?? 0;
    message.seriesHashLessSignificant = object.seriesHashLessSignificant ?? 0;
    message.seriesHashLeastSignificant = object.seriesHashLeastSignificant ?? 0;
    return message;
  },
};

function createBaseIndexSpec(): IndexSpec {
  return { indexName: "", indexFieldSpec: undefined, indexFilter: undefined };
}

export const IndexSpec = {
  encode(message: IndexSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.indexName !== "") {
      writer.uint32(10).string(message.indexName);
    }
    if (message.indexFieldSpec !== undefined) {
      IndexFieldSpec.encode(message.indexFieldSpec, writer.uint32(18).fork()).ldelim();
    }
    if (message.indexFilter !== undefined) {
      IndexFilter.encode(message.indexFilter, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndexSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexSpec();
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

          message.indexFieldSpec = IndexFieldSpec.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.indexFilter = IndexFilter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IndexSpec {
    return {
      indexName: isSet(object.indexName) ? globalThis.String(object.indexName) : "",
      indexFieldSpec: isSet(object.indexFieldSpec) ? IndexFieldSpec.fromJSON(object.indexFieldSpec) : undefined,
      indexFilter: isSet(object.indexFilter) ? IndexFilter.fromJSON(object.indexFilter) : undefined,
    };
  },

  toJSON(message: IndexSpec): unknown {
    const obj: any = {};
    if (message.indexName !== "") {
      obj.indexName = message.indexName;
    }
    if (message.indexFieldSpec !== undefined) {
      obj.indexFieldSpec = IndexFieldSpec.toJSON(message.indexFieldSpec);
    }
    if (message.indexFilter !== undefined) {
      obj.indexFilter = IndexFilter.toJSON(message.indexFilter);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IndexSpec>, I>>(base?: I): IndexSpec {
    return IndexSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IndexSpec>, I>>(object: I): IndexSpec {
    const message = createBaseIndexSpec();
    message.indexName = object.indexName ?? "";
    message.indexFieldSpec = (object.indexFieldSpec !== undefined && object.indexFieldSpec !== null)
      ? IndexFieldSpec.fromPartial(object.indexFieldSpec)
      : undefined;
    message.indexFilter = (object.indexFilter !== undefined && object.indexFilter !== null)
      ? IndexFilter.fromPartial(object.indexFilter)
      : undefined;
    return message;
  },
};

function createBaseIndexFieldSpec(): IndexFieldSpec {
  return { jsonSpecs: undefined, csvSpecs: undefined };
}

export const IndexFieldSpec = {
  encode(message: IndexFieldSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jsonSpecs !== undefined) {
      JsonIndexSpecs.encode(message.jsonSpecs, writer.uint32(10).fork()).ldelim();
    }
    if (message.csvSpecs !== undefined) {
      CsvIndexSpecs.encode(message.csvSpecs, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndexFieldSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexFieldSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jsonSpecs = JsonIndexSpecs.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.csvSpecs = CsvIndexSpecs.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IndexFieldSpec {
    return {
      jsonSpecs: isSet(object.jsonSpecs) ? JsonIndexSpecs.fromJSON(object.jsonSpecs) : undefined,
      csvSpecs: isSet(object.csvSpecs) ? CsvIndexSpecs.fromJSON(object.csvSpecs) : undefined,
    };
  },

  toJSON(message: IndexFieldSpec): unknown {
    const obj: any = {};
    if (message.jsonSpecs !== undefined) {
      obj.jsonSpecs = JsonIndexSpecs.toJSON(message.jsonSpecs);
    }
    if (message.csvSpecs !== undefined) {
      obj.csvSpecs = CsvIndexSpecs.toJSON(message.csvSpecs);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IndexFieldSpec>, I>>(base?: I): IndexFieldSpec {
    return IndexFieldSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IndexFieldSpec>, I>>(object: I): IndexFieldSpec {
    const message = createBaseIndexFieldSpec();
    message.jsonSpecs = (object.jsonSpecs !== undefined && object.jsonSpecs !== null)
      ? JsonIndexSpecs.fromPartial(object.jsonSpecs)
      : undefined;
    message.csvSpecs = (object.csvSpecs !== undefined && object.csvSpecs !== null)
      ? CsvIndexSpecs.fromPartial(object.csvSpecs)
      : undefined;
    return message;
  },
};

function createBaseCsvIndexSpecs(): CsvIndexSpecs {
  return { specs: [], separatorChar: 0, quoteChar: undefined };
}

export const CsvIndexSpecs = {
  encode(message: CsvIndexSpecs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.specs) {
      CsvIndexSpec.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.separatorChar !== 0) {
      writer.uint32(16).uint32(message.separatorChar);
    }
    if (message.quoteChar !== undefined) {
      UInt32Value.encode({ value: message.quoteChar! }, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CsvIndexSpecs {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCsvIndexSpecs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.specs.push(CsvIndexSpec.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.separatorChar = reader.uint32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.quoteChar = UInt32Value.decode(reader, reader.uint32()).value;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CsvIndexSpecs {
    return {
      specs: globalThis.Array.isArray(object?.specs) ? object.specs.map((e: any) => CsvIndexSpec.fromJSON(e)) : [],
      separatorChar: isSet(object.separatorChar) ? globalThis.Number(object.separatorChar) : 0,
      quoteChar: isSet(object.quoteChar) ? Number(object.quoteChar) : undefined,
    };
  },

  toJSON(message: CsvIndexSpecs): unknown {
    const obj: any = {};
    if (message.specs?.length) {
      obj.specs = message.specs.map((e) => CsvIndexSpec.toJSON(e));
    }
    if (message.separatorChar !== 0) {
      obj.separatorChar = Math.round(message.separatorChar);
    }
    if (message.quoteChar !== undefined) {
      obj.quoteChar = message.quoteChar;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CsvIndexSpecs>, I>>(base?: I): CsvIndexSpecs {
    return CsvIndexSpecs.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CsvIndexSpecs>, I>>(object: I): CsvIndexSpecs {
    const message = createBaseCsvIndexSpecs();
    message.specs = object.specs?.map((e) => CsvIndexSpec.fromPartial(e)) || [];
    message.separatorChar = object.separatorChar ?? 0;
    message.quoteChar = object.quoteChar ?? undefined;
    return message;
  },
};

function createBaseCsvIndexSpec(): CsvIndexSpec {
  return { fieldIndex: 0, sortOrder: 0, isNumeric: false };
}

export const CsvIndexSpec = {
  encode(message: CsvIndexSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fieldIndex !== 0) {
      writer.uint32(8).uint32(message.fieldIndex);
    }
    if (message.sortOrder !== 0) {
      writer.uint32(16).int32(message.sortOrder);
    }
    if (message.isNumeric !== false) {
      writer.uint32(24).bool(message.isNumeric);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CsvIndexSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCsvIndexSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.fieldIndex = reader.uint32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.sortOrder = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isNumeric = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CsvIndexSpec {
    return {
      fieldIndex: isSet(object.fieldIndex) ? globalThis.Number(object.fieldIndex) : 0,
      sortOrder: isSet(object.sortOrder) ? sortOrderFromJSON(object.sortOrder) : 0,
      isNumeric: isSet(object.isNumeric) ? globalThis.Boolean(object.isNumeric) : false,
    };
  },

  toJSON(message: CsvIndexSpec): unknown {
    const obj: any = {};
    if (message.fieldIndex !== 0) {
      obj.fieldIndex = Math.round(message.fieldIndex);
    }
    if (message.sortOrder !== 0) {
      obj.sortOrder = sortOrderToJSON(message.sortOrder);
    }
    if (message.isNumeric !== false) {
      obj.isNumeric = message.isNumeric;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CsvIndexSpec>, I>>(base?: I): CsvIndexSpec {
    return CsvIndexSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CsvIndexSpec>, I>>(object: I): CsvIndexSpec {
    const message = createBaseCsvIndexSpec();
    message.fieldIndex = object.fieldIndex ?? 0;
    message.sortOrder = object.sortOrder ?? 0;
    message.isNumeric = object.isNumeric ?? false;
    return message;
  },
};

function createBaseJsonIndexSpecs(): JsonIndexSpecs {
  return { specs: [] };
}

export const JsonIndexSpecs = {
  encode(message: JsonIndexSpecs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.specs) {
      JsonIndexSpec.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JsonIndexSpecs {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJsonIndexSpecs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.specs.push(JsonIndexSpec.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JsonIndexSpecs {
    return {
      specs: globalThis.Array.isArray(object?.specs) ? object.specs.map((e: any) => JsonIndexSpec.fromJSON(e)) : [],
    };
  },

  toJSON(message: JsonIndexSpecs): unknown {
    const obj: any = {};
    if (message.specs?.length) {
      obj.specs = message.specs.map((e) => JsonIndexSpec.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<JsonIndexSpecs>, I>>(base?: I): JsonIndexSpecs {
    return JsonIndexSpecs.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<JsonIndexSpecs>, I>>(object: I): JsonIndexSpecs {
    const message = createBaseJsonIndexSpecs();
    message.specs = object.specs?.map((e) => JsonIndexSpec.fromPartial(e)) || [];
    return message;
  },
};

function createBaseJsonIndexSpec(): JsonIndexSpec {
  return { jsonPath: "", sortOrder: 0 };
}

export const JsonIndexSpec = {
  encode(message: JsonIndexSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jsonPath !== "") {
      writer.uint32(10).string(message.jsonPath);
    }
    if (message.sortOrder !== 0) {
      writer.uint32(16).int32(message.sortOrder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JsonIndexSpec {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJsonIndexSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jsonPath = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.sortOrder = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JsonIndexSpec {
    return {
      jsonPath: isSet(object.jsonPath) ? globalThis.String(object.jsonPath) : "",
      sortOrder: isSet(object.sortOrder) ? sortOrderFromJSON(object.sortOrder) : 0,
    };
  },

  toJSON(message: JsonIndexSpec): unknown {
    const obj: any = {};
    if (message.jsonPath !== "") {
      obj.jsonPath = message.jsonPath;
    }
    if (message.sortOrder !== 0) {
      obj.sortOrder = sortOrderToJSON(message.sortOrder);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<JsonIndexSpec>, I>>(base?: I): JsonIndexSpec {
    return JsonIndexSpec.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<JsonIndexSpec>, I>>(object: I): JsonIndexSpec {
    const message = createBaseJsonIndexSpec();
    message.jsonPath = object.jsonPath ?? "";
    message.sortOrder = object.sortOrder ?? 0;
    return message;
  },
};

function createBaseIndexFilter(): IndexFilter {
  return { regexIndexFilter: undefined };
}

export const IndexFilter = {
  encode(message: IndexFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.regexIndexFilter !== undefined) {
      writer.uint32(10).string(message.regexIndexFilter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndexFilter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.regexIndexFilter = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IndexFilter {
    return {
      regexIndexFilter: isSet(object.regexIndexFilter) ? globalThis.String(object.regexIndexFilter) : undefined,
    };
  },

  toJSON(message: IndexFilter): unknown {
    const obj: any = {};
    if (message.regexIndexFilter !== undefined) {
      obj.regexIndexFilter = message.regexIndexFilter;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IndexFilter>, I>>(base?: I): IndexFilter {
    return IndexFilter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IndexFilter>, I>>(object: I): IndexFilter {
    const message = createBaseIndexFilter();
    message.regexIndexFilter = object.regexIndexFilter ?? undefined;
    return message;
  },
};

function createBaseTransactionReceipt(): TransactionReceipt {
  return { transaction: undefined, confidenceFactor: undefined, blockId: undefined, depth: undefined };
}

export const TransactionReceipt = {
  encode(message: TransactionReceipt, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transaction !== undefined) {
      IoTransaction.encode(message.transaction, writer.uint32(10).fork()).ldelim();
    }
    if (message.confidenceFactor !== undefined) {
      ConfidenceFactor.encode(message.confidenceFactor, writer.uint32(18).fork()).ldelim();
    }
    if (message.blockId !== undefined) {
      BlockId.encode(message.blockId, writer.uint32(26).fork()).ldelim();
    }
    if (message.depth !== undefined) {
      ChainDistance.encode(message.depth, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionReceipt {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionReceipt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transaction = IoTransaction.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.confidenceFactor = ConfidenceFactor.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.blockId = BlockId.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.depth = ChainDistance.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransactionReceipt {
    return {
      transaction: isSet(object.transaction) ? IoTransaction.fromJSON(object.transaction) : undefined,
      confidenceFactor: isSet(object.confidenceFactor) ? ConfidenceFactor.fromJSON(object.confidenceFactor) : undefined,
      blockId: isSet(object.blockId) ? BlockId.fromJSON(object.blockId) : undefined,
      depth: isSet(object.depth) ? ChainDistance.fromJSON(object.depth) : undefined,
    };
  },

  toJSON(message: TransactionReceipt): unknown {
    const obj: any = {};
    if (message.transaction !== undefined) {
      obj.transaction = IoTransaction.toJSON(message.transaction);
    }
    if (message.confidenceFactor !== undefined) {
      obj.confidenceFactor = ConfidenceFactor.toJSON(message.confidenceFactor);
    }
    if (message.blockId !== undefined) {
      obj.blockId = BlockId.toJSON(message.blockId);
    }
    if (message.depth !== undefined) {
      obj.depth = ChainDistance.toJSON(message.depth);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TransactionReceipt>, I>>(base?: I): TransactionReceipt {
    return TransactionReceipt.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TransactionReceipt>, I>>(object: I): TransactionReceipt {
    const message = createBaseTransactionReceipt();
    message.transaction = (object.transaction !== undefined && object.transaction !== null)
      ? IoTransaction.fromPartial(object.transaction)
      : undefined;
    message.confidenceFactor = (object.confidenceFactor !== undefined && object.confidenceFactor !== null)
      ? ConfidenceFactor.fromPartial(object.confidenceFactor)
      : undefined;
    message.blockId = (object.blockId !== undefined && object.blockId !== null)
      ? BlockId.fromPartial(object.blockId)
      : undefined;
    message.depth = (object.depth !== undefined && object.depth !== null)
      ? ChainDistance.fromPartial(object.depth)
      : undefined;
    return message;
  },
};

function createBaseHeightData(): HeightData {
  return { height: 0, blockData: undefined };
}

export const HeightData = {
  encode(message: HeightData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== 0) {
      writer.uint32(8).int64(message.height);
    }
    if (message.blockData !== undefined) {
      BlockData.encode(message.blockData, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HeightData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeightData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.height = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.blockData = BlockData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HeightData {
    return {
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
      blockData: isSet(object.blockData) ? BlockData.fromJSON(object.blockData) : undefined,
    };
  },

  toJSON(message: HeightData): unknown {
    const obj: any = {};
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    if (message.blockData !== undefined) {
      obj.blockData = BlockData.toJSON(message.blockData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HeightData>, I>>(base?: I): HeightData {
    return HeightData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HeightData>, I>>(object: I): HeightData {
    const message = createBaseHeightData();
    message.height = object.height ?? 0;
    message.blockData = (object.blockData !== undefined && object.blockData !== null)
      ? BlockData.fromPartial(object.blockData)
      : undefined;
    return message;
  },
};

function createBaseBlockData(): BlockData {
  return { header: undefined, body: undefined };
}

export const BlockData = {
  encode(message: BlockData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      BlockHeader.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.body !== undefined) {
      FullBlockBody.encode(message.body, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.header = BlockHeader.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.body = FullBlockBody.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlockData {
    return {
      header: isSet(object.header) ? BlockHeader.fromJSON(object.header) : undefined,
      body: isSet(object.body) ? FullBlockBody.fromJSON(object.body) : undefined,
    };
  },

  toJSON(message: BlockData): unknown {
    const obj: any = {};
    if (message.header !== undefined) {
      obj.header = BlockHeader.toJSON(message.header);
    }
    if (message.body !== undefined) {
      obj.body = FullBlockBody.toJSON(message.body);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BlockData>, I>>(base?: I): BlockData {
    return BlockData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BlockData>, I>>(object: I): BlockData {
    const message = createBaseBlockData();
    message.header = (object.header !== undefined && object.header !== null)
      ? BlockHeader.fromPartial(object.header)
      : undefined;
    message.body = (object.body !== undefined && object.body !== null)
      ? FullBlockBody.fromPartial(object.body)
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
