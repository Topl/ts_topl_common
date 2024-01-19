// package: co.topl.brambl.models
// file: brambl/models/indices.proto

import * as jspb from "google-protobuf";

export class Indices extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Indices.AsObject;
  static toObject(includeInstance: boolean, msg: Indices): Indices.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Indices, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Indices;
  static deserializeBinaryFromReader(message: Indices, reader: jspb.BinaryReader): Indices;
}

export namespace Indices {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
  }
}

