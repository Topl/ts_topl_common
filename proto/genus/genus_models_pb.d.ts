// package: co.topl.genus.services
// file: genus/genus_models.proto

import * as jspb from "google-protobuf";
import * as brambl_models_address_pb from "../brambl/models/address_pb";
import * as brambl_models_transaction_io_transaction_pb from "../brambl/models/transaction/io_transaction_pb";
import * as brambl_models_transaction_unspent_transaction_output_pb from "../brambl/models/transaction/unspent_transaction_output_pb";
import * as brambl_models_transaction_spent_transaction_output_pb from "../brambl/models/transaction/spent_transaction_output_pb";
import * as consensus_models_block_id_pb from "../consensus/models/block_id_pb";
import * as consensus_models_block_header_pb from "../consensus/models/block_header_pb";
import * as node_models_block_pb from "../node/models/block_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as validate_validate_pb from "../validate/validate_pb";

export class Txo extends jspb.Message {
  hasTransactionoutput(): boolean;
  clearTransactionoutput(): void;
  getTransactionoutput(): brambl_models_transaction_unspent_transaction_output_pb.UnspentTransactionOutput | undefined;
  setTransactionoutput(value?: brambl_models_transaction_unspent_transaction_output_pb.UnspentTransactionOutput): void;

  getState(): TxoStateMap[keyof TxoStateMap];
  setState(value: TxoStateMap[keyof TxoStateMap]): void;

  hasOutputaddress(): boolean;
  clearOutputaddress(): void;
  getOutputaddress(): brambl_models_address_pb.TransactionOutputAddress | undefined;
  setOutputaddress(value?: brambl_models_address_pb.TransactionOutputAddress): void;

  hasSpender(): boolean;
  clearSpender(): void;
  getSpender(): Txo.Spender | undefined;
  setSpender(value?: Txo.Spender): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Txo.AsObject;
  static toObject(includeInstance: boolean, msg: Txo): Txo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Txo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Txo;
  static deserializeBinaryFromReader(message: Txo, reader: jspb.BinaryReader): Txo;
}

export namespace Txo {
  export type AsObject = {
    transactionoutput?: brambl_models_transaction_unspent_transaction_output_pb.UnspentTransactionOutput.AsObject,
    state: TxoStateMap[keyof TxoStateMap],
    outputaddress?: brambl_models_address_pb.TransactionOutputAddress.AsObject,
    spender?: Txo.Spender.AsObject,
  }

  export class Spender extends jspb.Message {
    hasInputaddress(): boolean;
    clearInputaddress(): void;
    getInputaddress(): brambl_models_address_pb.TransactionInputAddress | undefined;
    setInputaddress(value?: brambl_models_address_pb.TransactionInputAddress): void;

    hasInput(): boolean;
    clearInput(): void;
    getInput(): brambl_models_transaction_spent_transaction_output_pb.SpentTransactionOutput | undefined;
    setInput(value?: brambl_models_transaction_spent_transaction_output_pb.SpentTransactionOutput): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Spender.AsObject;
    static toObject(includeInstance: boolean, msg: Spender): Spender.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Spender, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Spender;
    static deserializeBinaryFromReader(message: Spender, reader: jspb.BinaryReader): Spender;
  }

  export namespace Spender {
    export type AsObject = {
      inputaddress?: brambl_models_address_pb.TransactionInputAddress.AsObject,
      input?: brambl_models_transaction_spent_transaction_output_pb.SpentTransactionOutput.AsObject,
    }
  }
}

export class ConfidenceFactor extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfidenceFactor.AsObject;
  static toObject(includeInstance: boolean, msg: ConfidenceFactor): ConfidenceFactor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfidenceFactor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfidenceFactor;
  static deserializeBinaryFromReader(message: ConfidenceFactor, reader: jspb.BinaryReader): ConfidenceFactor;
}

export namespace ConfidenceFactor {
  export type AsObject = {
    value: number,
  }
}

export class ChainDistance extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChainDistance.AsObject;
  static toObject(includeInstance: boolean, msg: ChainDistance): ChainDistance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChainDistance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChainDistance;
  static deserializeBinaryFromReader(message: ChainDistance, reader: jspb.BinaryReader): ChainDistance;
}

export namespace ChainDistance {
  export type AsObject = {
    value: number,
  }
}

export class AssetLabel extends jspb.Message {
  getLabeltype(): LabelTypeMap[keyof LabelTypeMap];
  setLabeltype(value: LabelTypeMap[keyof LabelTypeMap]): void;

  hasEmpty(): boolean;
  clearEmpty(): void;
  getEmpty(): AssetLabel.Empty | undefined;
  setEmpty(value?: AssetLabel.Empty): void;

  hasV1label(): boolean;
  clearV1label(): void;
  getV1label(): AssetLabel.V1Label | undefined;
  setV1label(value?: AssetLabel.V1Label): void;

  hasTam2label(): boolean;
  clearTam2label(): void;
  getTam2label(): AssetLabel.Tam2Label | undefined;
  setTam2label(value?: AssetLabel.Tam2Label): void;

  getLabelCase(): AssetLabel.LabelCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetLabel.AsObject;
  static toObject(includeInstance: boolean, msg: AssetLabel): AssetLabel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssetLabel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetLabel;
  static deserializeBinaryFromReader(message: AssetLabel, reader: jspb.BinaryReader): AssetLabel;
}

export namespace AssetLabel {
  export type AsObject = {
    labeltype: LabelTypeMap[keyof LabelTypeMap],
    empty?: AssetLabel.Empty.AsObject,
    v1label?: AssetLabel.V1Label.AsObject,
    tam2label?: AssetLabel.Tam2Label.AsObject,
  }

  export class Empty extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
  }

  export namespace Empty {
    export type AsObject = {
    }
  }

  export class V1Label extends jspb.Message {
    getVersion(): number;
    setVersion(value: number): void;

    hasMintingaddress(): boolean;
    clearMintingaddress(): void;
    getMintingaddress(): brambl_models_address_pb.LockAddress | undefined;
    setMintingaddress(value?: brambl_models_address_pb.LockAddress): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): V1Label.AsObject;
    static toObject(includeInstance: boolean, msg: V1Label): V1Label.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: V1Label, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): V1Label;
    static deserializeBinaryFromReader(message: V1Label, reader: jspb.BinaryReader): V1Label;
  }

  export namespace V1Label {
    export type AsObject = {
      version: number,
      mintingaddress?: brambl_models_address_pb.LockAddress.AsObject,
    }
  }

  export class Tam2Label extends jspb.Message {
    getGrouphashmostsignificant(): number;
    setGrouphashmostsignificant(value: number): void;

    getGrouphashmoresignificant(): number;
    setGrouphashmoresignificant(value: number): void;

    getGrouphashlesssignificant(): number;
    setGrouphashlesssignificant(value: number): void;

    getGrouphashleastsignificant(): number;
    setGrouphashleastsignificant(value: number): void;

    getSerieshashmostsignificant(): number;
    setSerieshashmostsignificant(value: number): void;

    getSerieshashmoresignificant(): number;
    setSerieshashmoresignificant(value: number): void;

    getSerieshashlesssignificant(): number;
    setSerieshashlesssignificant(value: number): void;

    getSerieshashleastsignificant(): number;
    setSerieshashleastsignificant(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Tam2Label.AsObject;
    static toObject(includeInstance: boolean, msg: Tam2Label): Tam2Label.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Tam2Label, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Tam2Label;
    static deserializeBinaryFromReader(message: Tam2Label, reader: jspb.BinaryReader): Tam2Label;
  }

  export namespace Tam2Label {
    export type AsObject = {
      grouphashmostsignificant: number,
      grouphashmoresignificant: number,
      grouphashlesssignificant: number,
      grouphashleastsignificant: number,
      serieshashmostsignificant: number,
      serieshashmoresignificant: number,
      serieshashlesssignificant: number,
      serieshashleastsignificant: number,
    }
  }

  export enum LabelCase {
    LABEL_NOT_SET = 0,
    EMPTY = 2,
    V1LABEL = 3,
    TAM2LABEL = 4,
  }
}

export class IndexSpec extends jspb.Message {
  getIndexname(): string;
  setIndexname(value: string): void;

  hasIndexfieldspec(): boolean;
  clearIndexfieldspec(): void;
  getIndexfieldspec(): IndexFieldSpec | undefined;
  setIndexfieldspec(value?: IndexFieldSpec): void;

  hasIndexfilter(): boolean;
  clearIndexfilter(): void;
  getIndexfilter(): IndexFilter | undefined;
  setIndexfilter(value?: IndexFilter): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexSpec.AsObject;
  static toObject(includeInstance: boolean, msg: IndexSpec): IndexSpec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndexSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexSpec;
  static deserializeBinaryFromReader(message: IndexSpec, reader: jspb.BinaryReader): IndexSpec;
}

export namespace IndexSpec {
  export type AsObject = {
    indexname: string,
    indexfieldspec?: IndexFieldSpec.AsObject,
    indexfilter?: IndexFilter.AsObject,
  }
}

export class IndexFieldSpec extends jspb.Message {
  hasJsonspecs(): boolean;
  clearJsonspecs(): void;
  getJsonspecs(): JsonIndexSpecs | undefined;
  setJsonspecs(value?: JsonIndexSpecs): void;

  hasCsvspecs(): boolean;
  clearCsvspecs(): void;
  getCsvspecs(): CsvIndexSpecs | undefined;
  setCsvspecs(value?: CsvIndexSpecs): void;

  getSpecCase(): IndexFieldSpec.SpecCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexFieldSpec.AsObject;
  static toObject(includeInstance: boolean, msg: IndexFieldSpec): IndexFieldSpec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndexFieldSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexFieldSpec;
  static deserializeBinaryFromReader(message: IndexFieldSpec, reader: jspb.BinaryReader): IndexFieldSpec;
}

export namespace IndexFieldSpec {
  export type AsObject = {
    jsonspecs?: JsonIndexSpecs.AsObject,
    csvspecs?: CsvIndexSpecs.AsObject,
  }

  export enum SpecCase {
    SPEC_NOT_SET = 0,
    JSONSPECS = 1,
    CSVSPECS = 2,
  }
}

export class CsvIndexSpecs extends jspb.Message {
  clearSpecsList(): void;
  getSpecsList(): Array<CsvIndexSpec>;
  setSpecsList(value: Array<CsvIndexSpec>): void;
  addSpecs(value?: CsvIndexSpec, index?: number): CsvIndexSpec;

  getSeparatorchar(): number;
  setSeparatorchar(value: number): void;

  hasQuotechar(): boolean;
  clearQuotechar(): void;
  getQuotechar(): google_protobuf_wrappers_pb.UInt32Value | undefined;
  setQuotechar(value?: google_protobuf_wrappers_pb.UInt32Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsvIndexSpecs.AsObject;
  static toObject(includeInstance: boolean, msg: CsvIndexSpecs): CsvIndexSpecs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsvIndexSpecs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsvIndexSpecs;
  static deserializeBinaryFromReader(message: CsvIndexSpecs, reader: jspb.BinaryReader): CsvIndexSpecs;
}

export namespace CsvIndexSpecs {
  export type AsObject = {
    specsList: Array<CsvIndexSpec.AsObject>,
    separatorchar: number,
    quotechar?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
  }
}

export class CsvIndexSpec extends jspb.Message {
  getFieldindex(): number;
  setFieldindex(value: number): void;

  getSortorder(): SortOrderMap[keyof SortOrderMap];
  setSortorder(value: SortOrderMap[keyof SortOrderMap]): void;

  getIsnumeric(): boolean;
  setIsnumeric(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CsvIndexSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CsvIndexSpec): CsvIndexSpec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CsvIndexSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CsvIndexSpec;
  static deserializeBinaryFromReader(message: CsvIndexSpec, reader: jspb.BinaryReader): CsvIndexSpec;
}

export namespace CsvIndexSpec {
  export type AsObject = {
    fieldindex: number,
    sortorder: SortOrderMap[keyof SortOrderMap],
    isnumeric: boolean,
  }
}

export class JsonIndexSpecs extends jspb.Message {
  clearSpecsList(): void;
  getSpecsList(): Array<JsonIndexSpec>;
  setSpecsList(value: Array<JsonIndexSpec>): void;
  addSpecs(value?: JsonIndexSpec, index?: number): JsonIndexSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JsonIndexSpecs.AsObject;
  static toObject(includeInstance: boolean, msg: JsonIndexSpecs): JsonIndexSpecs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JsonIndexSpecs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JsonIndexSpecs;
  static deserializeBinaryFromReader(message: JsonIndexSpecs, reader: jspb.BinaryReader): JsonIndexSpecs;
}

export namespace JsonIndexSpecs {
  export type AsObject = {
    specsList: Array<JsonIndexSpec.AsObject>,
  }
}

export class JsonIndexSpec extends jspb.Message {
  getJsonpath(): string;
  setJsonpath(value: string): void;

  getSortorder(): SortOrderMap[keyof SortOrderMap];
  setSortorder(value: SortOrderMap[keyof SortOrderMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JsonIndexSpec.AsObject;
  static toObject(includeInstance: boolean, msg: JsonIndexSpec): JsonIndexSpec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JsonIndexSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JsonIndexSpec;
  static deserializeBinaryFromReader(message: JsonIndexSpec, reader: jspb.BinaryReader): JsonIndexSpec;
}

export namespace JsonIndexSpec {
  export type AsObject = {
    jsonpath: string,
    sortorder: SortOrderMap[keyof SortOrderMap],
  }
}

export class IndexFilter extends jspb.Message {
  hasRegexindexfilter(): boolean;
  clearRegexindexfilter(): void;
  getRegexindexfilter(): string;
  setRegexindexfilter(value: string): void;

  getFilterCase(): IndexFilter.FilterCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IndexFilter.AsObject;
  static toObject(includeInstance: boolean, msg: IndexFilter): IndexFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IndexFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IndexFilter;
  static deserializeBinaryFromReader(message: IndexFilter, reader: jspb.BinaryReader): IndexFilter;
}

export namespace IndexFilter {
  export type AsObject = {
    regexindexfilter: string,
  }

  export enum FilterCase {
    FILTER_NOT_SET = 0,
    REGEXINDEXFILTER = 1,
  }
}

export class TransactionReceipt extends jspb.Message {
  hasTransaction(): boolean;
  clearTransaction(): void;
  getTransaction(): brambl_models_transaction_io_transaction_pb.IoTransaction | undefined;
  setTransaction(value?: brambl_models_transaction_io_transaction_pb.IoTransaction): void;

  hasConfidencefactor(): boolean;
  clearConfidencefactor(): void;
  getConfidencefactor(): ConfidenceFactor | undefined;
  setConfidencefactor(value?: ConfidenceFactor): void;

  hasBlockid(): boolean;
  clearBlockid(): void;
  getBlockid(): consensus_models_block_id_pb.BlockId | undefined;
  setBlockid(value?: consensus_models_block_id_pb.BlockId): void;

  hasDepth(): boolean;
  clearDepth(): void;
  getDepth(): ChainDistance | undefined;
  setDepth(value?: ChainDistance): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionReceipt.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionReceipt): TransactionReceipt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionReceipt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionReceipt;
  static deserializeBinaryFromReader(message: TransactionReceipt, reader: jspb.BinaryReader): TransactionReceipt;
}

export namespace TransactionReceipt {
  export type AsObject = {
    transaction?: brambl_models_transaction_io_transaction_pb.IoTransaction.AsObject,
    confidencefactor?: ConfidenceFactor.AsObject,
    blockid?: consensus_models_block_id_pb.BlockId.AsObject,
    depth?: ChainDistance.AsObject,
  }
}

export class HeightData extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): void;

  hasBlockdata(): boolean;
  clearBlockdata(): void;
  getBlockdata(): BlockData | undefined;
  setBlockdata(value?: BlockData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HeightData.AsObject;
  static toObject(includeInstance: boolean, msg: HeightData): HeightData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HeightData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HeightData;
  static deserializeBinaryFromReader(message: HeightData, reader: jspb.BinaryReader): HeightData;
}

export namespace HeightData {
  export type AsObject = {
    height: number,
    blockdata?: BlockData.AsObject,
  }
}

export class BlockData extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): consensus_models_block_header_pb.BlockHeader | undefined;
  setHeader(value?: consensus_models_block_header_pb.BlockHeader): void;

  hasBody(): boolean;
  clearBody(): void;
  getBody(): node_models_block_pb.FullBlockBody | undefined;
  setBody(value?: node_models_block_pb.FullBlockBody): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockData.AsObject;
  static toObject(includeInstance: boolean, msg: BlockData): BlockData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockData;
  static deserializeBinaryFromReader(message: BlockData, reader: jspb.BinaryReader): BlockData;
}

export namespace BlockData {
  export type AsObject = {
    header?: consensus_models_block_header_pb.BlockHeader.AsObject,
    body?: node_models_block_pb.FullBlockBody.AsObject,
  }
}

export interface TxoStateMap {
  SPENT: 0;
  UNSPENT: 1;
  PENDING: 2;
}

export const TxoState: TxoStateMap;

export interface SortOrderMap {
  ASCENDING: 0;
  DESCENDING: 1;
  UNSORTED: 2;
}

export const SortOrder: SortOrderMap;

export interface LabelTypeMap {
  EMPTY: 0;
  LVL: 1;
  TOPL: 2;
  V1: 3;
  TAM2: 4;
}

export const LabelType: LabelTypeMap;
