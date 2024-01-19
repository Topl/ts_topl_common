// package: co.topl.brambl.models.box
// file: brambl/models/box/box.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../../validate/validate_pb";
import * as brambl_models_box_lock_pb from "../../../brambl/models/box/lock_pb";
import * as brambl_models_box_value_pb from "../../../brambl/models/box/value_pb";

export class Box extends jspb.Message {
  hasLock(): boolean;
  clearLock(): void;
  getLock(): brambl_models_box_lock_pb.Lock | undefined;
  setLock(value?: brambl_models_box_lock_pb.Lock): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): brambl_models_box_value_pb.Value | undefined;
  setValue(value?: brambl_models_box_value_pb.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Box.AsObject;
  static toObject(includeInstance: boolean, msg: Box): Box.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Box, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Box;
  static deserializeBinaryFromReader(message: Box, reader: jspb.BinaryReader): Box;
}

export namespace Box {
  export type AsObject = {
    lock?: brambl_models_box_lock_pb.Lock.AsObject,
    value?: brambl_models_box_value_pb.Value.AsObject,
  }
}

