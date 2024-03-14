// package: co.topl.consensus.models
// file: consensus/models/slot_data.proto

import * as jspb from "google-protobuf";
import * as consensus_models_block_id_pb from "../../consensus/models/block_id_pb";
import * as validate_validate_pb from "../../validate/validate_pb";

export class SlotData extends jspb.Message {
  hasSlotid(): boolean;
  clearSlotid(): void;
  getSlotid(): SlotId | undefined;
  setSlotid(value?: SlotId): void;

  hasParentslotid(): boolean;
  clearParentslotid(): void;
  getParentslotid(): SlotId | undefined;
  setParentslotid(value?: SlotId): void;

  getRho(): Uint8Array | string;
  getRho_asU8(): Uint8Array;
  getRho_asB64(): string;
  setRho(value: Uint8Array | string): void;

  getEta(): Uint8Array | string;
  getEta_asU8(): Uint8Array;
  getEta_asB64(): string;
  setEta(value: Uint8Array | string): void;

  getHeight(): number;
  setHeight(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SlotData.AsObject;
  static toObject(includeInstance: boolean, msg: SlotData): SlotData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SlotData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SlotData;
  static deserializeBinaryFromReader(message: SlotData, reader: jspb.BinaryReader): SlotData;
}

export namespace SlotData {
  export type AsObject = {
    slotid?: SlotId.AsObject,
    parentslotid?: SlotId.AsObject,
    rho: Uint8Array | string,
    eta: Uint8Array | string,
    height: number,
  }
}

export class SlotId extends jspb.Message {
  getSlot(): number;
  setSlot(value: number): void;

  hasBlockid(): boolean;
  clearBlockid(): void;
  getBlockid(): consensus_models_block_id_pb.BlockId | undefined;
  setBlockid(value?: consensus_models_block_id_pb.BlockId): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SlotId.AsObject;
  static toObject(includeInstance: boolean, msg: SlotId): SlotId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SlotId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SlotId;
  static deserializeBinaryFromReader(message: SlotId, reader: jspb.BinaryReader): SlotId;
}

export namespace SlotId {
  export type AsObject = {
    slot: number,
    blockid?: consensus_models_block_id_pb.BlockId.AsObject,
  }
}

