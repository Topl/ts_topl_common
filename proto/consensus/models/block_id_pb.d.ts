// package: co.topl.consensus.models
// file: consensus/models/block_id.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../validate/validate_pb";

export class BlockId extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockId.AsObject;
  static toObject(includeInstance: boolean, msg: BlockId): BlockId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockId;
  static deserializeBinaryFromReader(message: BlockId, reader: jspb.BinaryReader): BlockId;
}

export namespace BlockId {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

