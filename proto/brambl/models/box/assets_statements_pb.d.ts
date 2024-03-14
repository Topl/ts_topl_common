// package: co.topl.brambl.models.box
// file: brambl/models/box/assets_statements.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../../validate/validate_pb";
import * as quivr_models_shared_pb from "../../../quivr/models/shared_pb";
import * as brambl_models_address_pb from "../../../brambl/models/address_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class AssetMintingStatement extends jspb.Message {
  hasGrouptokenutxo(): boolean;
  clearGrouptokenutxo(): void;
  getGrouptokenutxo(): brambl_models_address_pb.TransactionOutputAddress | undefined;
  setGrouptokenutxo(value?: brambl_models_address_pb.TransactionOutputAddress): void;

  hasSeriestokenutxo(): boolean;
  clearSeriestokenutxo(): void;
  getSeriestokenutxo(): brambl_models_address_pb.TransactionOutputAddress | undefined;
  setSeriestokenutxo(value?: brambl_models_address_pb.TransactionOutputAddress): void;

  hasQuantity(): boolean;
  clearQuantity(): void;
  getQuantity(): quivr_models_shared_pb.Int128 | undefined;
  setQuantity(value?: quivr_models_shared_pb.Int128): void;

  hasPermanentmetadata(): boolean;
  clearPermanentmetadata(): void;
  getPermanentmetadata(): google_protobuf_struct_pb.Struct | undefined;
  setPermanentmetadata(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetMintingStatement.AsObject;
  static toObject(includeInstance: boolean, msg: AssetMintingStatement): AssetMintingStatement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssetMintingStatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetMintingStatement;
  static deserializeBinaryFromReader(message: AssetMintingStatement, reader: jspb.BinaryReader): AssetMintingStatement;
}

export namespace AssetMintingStatement {
  export type AsObject = {
    grouptokenutxo?: brambl_models_address_pb.TransactionOutputAddress.AsObject,
    seriestokenutxo?: brambl_models_address_pb.TransactionOutputAddress.AsObject,
    quantity?: quivr_models_shared_pb.Int128.AsObject,
    permanentmetadata?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class AssetMergingStatement extends jspb.Message {
  clearInpututxosList(): void;
  getInpututxosList(): Array<brambl_models_address_pb.TransactionOutputAddress>;
  setInpututxosList(value: Array<brambl_models_address_pb.TransactionOutputAddress>): void;
  addInpututxos(value?: brambl_models_address_pb.TransactionOutputAddress, index?: number): brambl_models_address_pb.TransactionOutputAddress;

  getOutputidx(): number;
  setOutputidx(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetMergingStatement.AsObject;
  static toObject(includeInstance: boolean, msg: AssetMergingStatement): AssetMergingStatement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssetMergingStatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetMergingStatement;
  static deserializeBinaryFromReader(message: AssetMergingStatement, reader: jspb.BinaryReader): AssetMergingStatement;
}

export namespace AssetMergingStatement {
  export type AsObject = {
    inpututxosList: Array<brambl_models_address_pb.TransactionOutputAddress.AsObject>,
    outputidx: number,
  }
}

export class AssetSplittingStatement extends jspb.Message {
  clearOutputindexesList(): void;
  getOutputindexesList(): Array<google_protobuf_wrappers_pb.UInt32Value>;
  setOutputindexesList(value: Array<google_protobuf_wrappers_pb.UInt32Value>): void;
  addOutputindexes(value?: google_protobuf_wrappers_pb.UInt32Value, index?: number): google_protobuf_wrappers_pb.UInt32Value;

  hasInpututxo(): boolean;
  clearInpututxo(): void;
  getInpututxo(): brambl_models_address_pb.TransactionOutputAddress | undefined;
  setInpututxo(value?: brambl_models_address_pb.TransactionOutputAddress): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetSplittingStatement.AsObject;
  static toObject(includeInstance: boolean, msg: AssetSplittingStatement): AssetSplittingStatement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssetSplittingStatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetSplittingStatement;
  static deserializeBinaryFromReader(message: AssetSplittingStatement, reader: jspb.BinaryReader): AssetSplittingStatement;
}

export namespace AssetSplittingStatement {
  export type AsObject = {
    outputindexesList: Array<google_protobuf_wrappers_pb.UInt32Value.AsObject>,
    inpututxo?: brambl_models_address_pb.TransactionOutputAddress.AsObject,
  }
}

