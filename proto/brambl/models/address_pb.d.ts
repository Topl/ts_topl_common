// package: co.topl.brambl.models
// file: brambl/models/address.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../validate/validate_pb";
import * as brambl_models_identifier_pb from "../../brambl/models/identifier_pb";

export class LockAddress extends jspb.Message {
  getNetwork(): number;
  setNetwork(value: number): void;

  getLedger(): number;
  setLedger(value: number): void;

  hasId(): boolean;
  clearId(): void;
  getId(): brambl_models_identifier_pb.LockId | undefined;
  setId(value?: brambl_models_identifier_pb.LockId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LockAddress.AsObject;
  static toObject(includeInstance: boolean, msg: LockAddress): LockAddress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LockAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LockAddress;
  static deserializeBinaryFromReader(message: LockAddress, reader: jspb.BinaryReader): LockAddress;
}

export namespace LockAddress {
  export type AsObject = {
    network: number,
    ledger: number,
    id?: brambl_models_identifier_pb.LockId.AsObject,
  }
}

export class TransactionOutputAddress extends jspb.Message {
  getNetwork(): number;
  setNetwork(value: number): void;

  getLedger(): number;
  setLedger(value: number): void;

  getIndex(): number;
  setIndex(value: number): void;

  hasId(): boolean;
  clearId(): void;
  getId(): brambl_models_identifier_pb.TransactionId | undefined;
  setId(value?: brambl_models_identifier_pb.TransactionId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionOutputAddress.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionOutputAddress): TransactionOutputAddress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionOutputAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionOutputAddress;
  static deserializeBinaryFromReader(message: TransactionOutputAddress, reader: jspb.BinaryReader): TransactionOutputAddress;
}

export namespace TransactionOutputAddress {
  export type AsObject = {
    network: number,
    ledger: number,
    index: number,
    id?: brambl_models_identifier_pb.TransactionId.AsObject,
  }
}

export class TransactionInputAddress extends jspb.Message {
  getNetwork(): number;
  setNetwork(value: number): void;

  getLedger(): number;
  setLedger(value: number): void;

  getIndex(): number;
  setIndex(value: number): void;

  hasId(): boolean;
  clearId(): void;
  getId(): brambl_models_identifier_pb.TransactionId | undefined;
  setId(value?: brambl_models_identifier_pb.TransactionId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionInputAddress.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionInputAddress): TransactionInputAddress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionInputAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionInputAddress;
  static deserializeBinaryFromReader(message: TransactionInputAddress, reader: jspb.BinaryReader): TransactionInputAddress;
}

export namespace TransactionInputAddress {
  export type AsObject = {
    network: number,
    ledger: number,
    index: number,
    id?: brambl_models_identifier_pb.TransactionId.AsObject,
  }
}

