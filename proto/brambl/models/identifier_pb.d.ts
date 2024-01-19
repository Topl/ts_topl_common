// package: co.topl.brambl.models
// file: brambl/models/identifier.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../validate/validate_pb";

export class TransactionId extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionId.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionId): TransactionId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionId;
  static deserializeBinaryFromReader(message: TransactionId, reader: jspb.BinaryReader): TransactionId;
}

export namespace TransactionId {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class LockId extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LockId.AsObject;
  static toObject(includeInstance: boolean, msg: LockId): LockId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LockId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LockId;
  static deserializeBinaryFromReader(message: LockId, reader: jspb.BinaryReader): LockId;
}

export namespace LockId {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class AccumulatorRootId extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccumulatorRootId.AsObject;
  static toObject(includeInstance: boolean, msg: AccumulatorRootId): AccumulatorRootId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccumulatorRootId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccumulatorRootId;
  static deserializeBinaryFromReader(message: AccumulatorRootId, reader: jspb.BinaryReader): AccumulatorRootId;
}

export namespace AccumulatorRootId {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class GroupId extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupId.AsObject;
  static toObject(includeInstance: boolean, msg: GroupId): GroupId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupId;
  static deserializeBinaryFromReader(message: GroupId, reader: jspb.BinaryReader): GroupId;
}

export namespace GroupId {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class SeriesId extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeriesId.AsObject;
  static toObject(includeInstance: boolean, msg: SeriesId): SeriesId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SeriesId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeriesId;
  static deserializeBinaryFromReader(message: SeriesId, reader: jspb.BinaryReader): SeriesId;
}

export namespace SeriesId {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

