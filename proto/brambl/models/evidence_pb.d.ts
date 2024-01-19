// package: co.topl.brambl.models
// file: brambl/models/evidence.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../validate/validate_pb";
import * as quivr_models_shared_pb from "../../quivr/models/shared_pb";

export class Evidence extends jspb.Message {
  hasDigest(): boolean;
  clearDigest(): void;
  getDigest(): quivr_models_shared_pb.Digest | undefined;
  setDigest(value?: quivr_models_shared_pb.Digest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Evidence.AsObject;
  static toObject(includeInstance: boolean, msg: Evidence): Evidence.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Evidence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Evidence;
  static deserializeBinaryFromReader(message: Evidence, reader: jspb.BinaryReader): Evidence;
}

export namespace Evidence {
  export type AsObject = {
    digest?: quivr_models_shared_pb.Digest.AsObject,
  }
}

