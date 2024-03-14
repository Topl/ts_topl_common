// package: co.topl.consensus.models
// file: consensus/models/protocol_version.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../validate/validate_pb";

export class ProtocolVersion extends jspb.Message {
  getFirstdigit(): number;
  setFirstdigit(value: number): void;

  getSeconddigit(): number;
  setSeconddigit(value: number): void;

  getThirddigit(): number;
  setThirddigit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProtocolVersion.AsObject;
  static toObject(includeInstance: boolean, msg: ProtocolVersion): ProtocolVersion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProtocolVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProtocolVersion;
  static deserializeBinaryFromReader(message: ProtocolVersion, reader: jspb.BinaryReader): ProtocolVersion;
}

export namespace ProtocolVersion {
  export type AsObject = {
    firstdigit: number,
    seconddigit: number,
    thirddigit: number,
  }
}

