// package: co.topl.proto.node
// file: node/models/node_epochData.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../validate/validate_pb";
import * as quivr_models_shared_pb from "../../quivr/models/shared_pb";

export class EpochData extends jspb.Message {
  getEpoch(): number;
  setEpoch(value: number): void;

  getEon(): number;
  setEon(value: number): void;

  getEra(): number;
  setEra(value: number): void;

  getIscomplete(): boolean;
  setIscomplete(value: boolean): void;

  getStartheight(): number;
  setStartheight(value: number): void;

  getEndheight(): number;
  setEndheight(value: number): void;

  getStartslot(): number;
  setStartslot(value: number): void;

  getEndslot(): number;
  setEndslot(value: number): void;

  getStarttimestamp(): number;
  setStarttimestamp(value: number): void;

  getEndtimestamp(): number;
  setEndtimestamp(value: number): void;

  getTransactioncount(): number;
  setTransactioncount(value: number): void;

  hasTotaltransactionreward(): boolean;
  clearTotaltransactionreward(): void;
  getTotaltransactionreward(): quivr_models_shared_pb.Int128 | undefined;
  setTotaltransactionreward(value?: quivr_models_shared_pb.Int128): void;

  hasActivestake(): boolean;
  clearActivestake(): void;
  getActivestake(): quivr_models_shared_pb.Int128 | undefined;
  setActivestake(value?: quivr_models_shared_pb.Int128): void;

  hasInactivestake(): boolean;
  clearInactivestake(): void;
  getInactivestake(): quivr_models_shared_pb.Int128 | undefined;
  setInactivestake(value?: quivr_models_shared_pb.Int128): void;

  getDatabytes(): number;
  setDatabytes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EpochData.AsObject;
  static toObject(includeInstance: boolean, msg: EpochData): EpochData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EpochData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EpochData;
  static deserializeBinaryFromReader(message: EpochData, reader: jspb.BinaryReader): EpochData;
}

export namespace EpochData {
  export type AsObject = {
    epoch: number,
    eon: number,
    era: number,
    iscomplete: boolean,
    startheight: number,
    endheight: number,
    startslot: number,
    endslot: number,
    starttimestamp: number,
    endtimestamp: number,
    transactioncount: number,
    totaltransactionreward?: quivr_models_shared_pb.Int128.AsObject,
    activestake?: quivr_models_shared_pb.Int128.AsObject,
    inactivestake?: quivr_models_shared_pb.Int128.AsObject,
    databytes: number,
  }
}

