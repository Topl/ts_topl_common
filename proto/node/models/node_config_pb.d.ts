// package: co.topl.proto.node
// file: node/models/node_config.proto

import * as jspb from "google-protobuf";

export class NodeConfig extends jspb.Message {
  getSlot(): number;
  setSlot(value: number): void;

  getSlotdurationmillis(): number;
  setSlotdurationmillis(value: number): void;

  getEpochlength(): number;
  setEpochlength(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NodeConfig.AsObject;
  static toObject(includeInstance: boolean, msg: NodeConfig): NodeConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NodeConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NodeConfig;
  static deserializeBinaryFromReader(message: NodeConfig, reader: jspb.BinaryReader): NodeConfig;
}

export namespace NodeConfig {
  export type AsObject = {
    slot: number,
    slotdurationmillis: number,
    epochlength: number,
  }
}

