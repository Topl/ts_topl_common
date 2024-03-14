// package: co.topl.node.models
// file: node/models/block.proto

import * as jspb from "google-protobuf";
import * as consensus_models_block_header_pb from "../../consensus/models/block_header_pb";
import * as brambl_models_transaction_io_transaction_pb from "../../brambl/models/transaction/io_transaction_pb";
import * as brambl_models_identifier_pb from "../../brambl/models/identifier_pb";
import * as validate_validate_pb from "../../validate/validate_pb";

export class BlockBody extends jspb.Message {
  clearTransactionidsList(): void;
  getTransactionidsList(): Array<brambl_models_identifier_pb.TransactionId>;
  setTransactionidsList(value: Array<brambl_models_identifier_pb.TransactionId>): void;
  addTransactionids(value?: brambl_models_identifier_pb.TransactionId, index?: number): brambl_models_identifier_pb.TransactionId;

  hasRewardtransactionid(): boolean;
  clearRewardtransactionid(): void;
  getRewardtransactionid(): brambl_models_identifier_pb.TransactionId | undefined;
  setRewardtransactionid(value?: brambl_models_identifier_pb.TransactionId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockBody.AsObject;
  static toObject(includeInstance: boolean, msg: BlockBody): BlockBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockBody;
  static deserializeBinaryFromReader(message: BlockBody, reader: jspb.BinaryReader): BlockBody;
}

export namespace BlockBody {
  export type AsObject = {
    transactionidsList: Array<brambl_models_identifier_pb.TransactionId.AsObject>,
    rewardtransactionid?: brambl_models_identifier_pb.TransactionId.AsObject,
  }
}

export class FullBlockBody extends jspb.Message {
  clearTransactionsList(): void;
  getTransactionsList(): Array<brambl_models_transaction_io_transaction_pb.IoTransaction>;
  setTransactionsList(value: Array<brambl_models_transaction_io_transaction_pb.IoTransaction>): void;
  addTransactions(value?: brambl_models_transaction_io_transaction_pb.IoTransaction, index?: number): brambl_models_transaction_io_transaction_pb.IoTransaction;

  hasRewardtransaction(): boolean;
  clearRewardtransaction(): void;
  getRewardtransaction(): brambl_models_transaction_io_transaction_pb.IoTransaction | undefined;
  setRewardtransaction(value?: brambl_models_transaction_io_transaction_pb.IoTransaction): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FullBlockBody.AsObject;
  static toObject(includeInstance: boolean, msg: FullBlockBody): FullBlockBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FullBlockBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FullBlockBody;
  static deserializeBinaryFromReader(message: FullBlockBody, reader: jspb.BinaryReader): FullBlockBody;
}

export namespace FullBlockBody {
  export type AsObject = {
    transactionsList: Array<brambl_models_transaction_io_transaction_pb.IoTransaction.AsObject>,
    rewardtransaction?: brambl_models_transaction_io_transaction_pb.IoTransaction.AsObject,
  }
}

export class Block extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): consensus_models_block_header_pb.BlockHeader | undefined;
  setHeader(value?: consensus_models_block_header_pb.BlockHeader): void;

  hasBody(): boolean;
  clearBody(): void;
  getBody(): BlockBody | undefined;
  setBody(value?: BlockBody): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
  export type AsObject = {
    header?: consensus_models_block_header_pb.BlockHeader.AsObject,
    body?: BlockBody.AsObject,
  }
}

export class FullBlock extends jspb.Message {
  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): consensus_models_block_header_pb.BlockHeader | undefined;
  setHeader(value?: consensus_models_block_header_pb.BlockHeader): void;

  hasFullbody(): boolean;
  clearFullbody(): void;
  getFullbody(): FullBlockBody | undefined;
  setFullbody(value?: FullBlockBody): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FullBlock.AsObject;
  static toObject(includeInstance: boolean, msg: FullBlock): FullBlock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FullBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FullBlock;
  static deserializeBinaryFromReader(message: FullBlock, reader: jspb.BinaryReader): FullBlock;
}

export namespace FullBlock {
  export type AsObject = {
    header?: consensus_models_block_header_pb.BlockHeader.AsObject,
    fullbody?: FullBlockBody.AsObject,
  }
}

