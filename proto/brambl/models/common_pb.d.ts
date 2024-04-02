// package: co.topl.brambl.models.common
// file: brambl/models/common.proto

import * as jspb from "google-protobuf";

export class ImmutableBytes extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImmutableBytes.AsObject;
  static toObject(includeInstance: boolean, msg: ImmutableBytes): ImmutableBytes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImmutableBytes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImmutableBytes;
  static deserializeBinaryFromReader(message: ImmutableBytes, reader: jspb.BinaryReader): ImmutableBytes;
}

export namespace ImmutableBytes {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

