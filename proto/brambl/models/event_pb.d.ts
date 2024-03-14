// package: co.topl.brambl.models
// file: brambl/models/event.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../validate/validate_pb";
import * as quivr_models_shared_pb from "../../quivr/models/shared_pb";
import * as brambl_models_transaction_schedule_pb from "../../brambl/models/transaction/schedule_pb";
import * as brambl_models_address_pb from "../../brambl/models/address_pb";
import * as brambl_models_box_asset_pb from "../../brambl/models/box/asset_pb";
import * as brambl_models_identifier_pb from "../../brambl/models/identifier_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class Event extends jspb.Message {
  hasEon(): boolean;
  clearEon(): void;
  getEon(): Event.Eon | undefined;
  setEon(value?: Event.Eon): void;

  hasEra(): boolean;
  clearEra(): void;
  getEra(): Event.Era | undefined;
  setEra(value?: Event.Era): void;

  hasEpoch(): boolean;
  clearEpoch(): void;
  getEpoch(): Event.Epoch | undefined;
  setEpoch(value?: Event.Epoch): void;

  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Event.Header | undefined;
  setHeader(value?: Event.Header): void;

  hasIotransaction(): boolean;
  clearIotransaction(): void;
  getIotransaction(): Event.IoTransaction | undefined;
  setIotransaction(value?: Event.IoTransaction): void;

  hasGrouppolicy(): boolean;
  clearGrouppolicy(): void;
  getGrouppolicy(): Event.GroupPolicy | undefined;
  setGrouppolicy(value?: Event.GroupPolicy): void;

  hasSeriespolicy(): boolean;
  clearSeriespolicy(): void;
  getSeriespolicy(): Event.SeriesPolicy | undefined;
  setSeriespolicy(value?: Event.SeriesPolicy): void;

  getValueCase(): Event.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    eon?: Event.Eon.AsObject,
    era?: Event.Era.AsObject,
    epoch?: Event.Epoch.AsObject,
    header?: Event.Header.AsObject,
    iotransaction?: Event.IoTransaction.AsObject,
    grouppolicy?: Event.GroupPolicy.AsObject,
    seriespolicy?: Event.SeriesPolicy.AsObject,
  }

  export class Eon extends jspb.Message {
    getBeginslot(): number;
    setBeginslot(value: number): void;

    getHeight(): number;
    setHeight(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Eon.AsObject;
    static toObject(includeInstance: boolean, msg: Eon): Eon.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Eon, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Eon;
    static deserializeBinaryFromReader(message: Eon, reader: jspb.BinaryReader): Eon;
  }

  export namespace Eon {
    export type AsObject = {
      beginslot: number,
      height: number,
    }
  }

  export class Era extends jspb.Message {
    getBeginslot(): number;
    setBeginslot(value: number): void;

    getHeight(): number;
    setHeight(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Era.AsObject;
    static toObject(includeInstance: boolean, msg: Era): Era.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Era, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Era;
    static deserializeBinaryFromReader(message: Era, reader: jspb.BinaryReader): Era;
  }

  export namespace Era {
    export type AsObject = {
      beginslot: number,
      height: number,
    }
  }

  export class Epoch extends jspb.Message {
    getBeginslot(): number;
    setBeginslot(value: number): void;

    getHeight(): number;
    setHeight(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Epoch.AsObject;
    static toObject(includeInstance: boolean, msg: Epoch): Epoch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Epoch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Epoch;
    static deserializeBinaryFromReader(message: Epoch, reader: jspb.BinaryReader): Epoch;
  }

  export namespace Epoch {
    export type AsObject = {
      beginslot: number,
      height: number,
    }
  }

  export class Header extends jspb.Message {
    getHeight(): number;
    setHeight(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Header.AsObject;
    static toObject(includeInstance: boolean, msg: Header): Header.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Header, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Header;
    static deserializeBinaryFromReader(message: Header, reader: jspb.BinaryReader): Header;
  }

  export namespace Header {
    export type AsObject = {
      height: number,
    }
  }

  export class IoTransaction extends jspb.Message {
    hasSchedule(): boolean;
    clearSchedule(): void;
    getSchedule(): brambl_models_transaction_schedule_pb.Schedule | undefined;
    setSchedule(value?: brambl_models_transaction_schedule_pb.Schedule): void;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): quivr_models_shared_pb.SmallData | undefined;
    setMetadata(value?: quivr_models_shared_pb.SmallData): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IoTransaction.AsObject;
    static toObject(includeInstance: boolean, msg: IoTransaction): IoTransaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IoTransaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IoTransaction;
    static deserializeBinaryFromReader(message: IoTransaction, reader: jspb.BinaryReader): IoTransaction;
  }

  export namespace IoTransaction {
    export type AsObject = {
      schedule?: brambl_models_transaction_schedule_pb.Schedule.AsObject,
      metadata?: quivr_models_shared_pb.SmallData.AsObject,
    }
  }

  export class GroupPolicy extends jspb.Message {
    getLabel(): string;
    setLabel(value: string): void;

    hasRegistrationutxo(): boolean;
    clearRegistrationutxo(): void;
    getRegistrationutxo(): brambl_models_address_pb.TransactionOutputAddress | undefined;
    setRegistrationutxo(value?: brambl_models_address_pb.TransactionOutputAddress): void;

    hasFixedseries(): boolean;
    clearFixedseries(): void;
    getFixedseries(): brambl_models_identifier_pb.SeriesId | undefined;
    setFixedseries(value?: brambl_models_identifier_pb.SeriesId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GroupPolicy.AsObject;
    static toObject(includeInstance: boolean, msg: GroupPolicy): GroupPolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GroupPolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GroupPolicy;
    static deserializeBinaryFromReader(message: GroupPolicy, reader: jspb.BinaryReader): GroupPolicy;
  }

  export namespace GroupPolicy {
    export type AsObject = {
      label: string,
      registrationutxo?: brambl_models_address_pb.TransactionOutputAddress.AsObject,
      fixedseries?: brambl_models_identifier_pb.SeriesId.AsObject,
    }
  }

  export class SeriesPolicy extends jspb.Message {
    getLabel(): string;
    setLabel(value: string): void;

    hasTokensupply(): boolean;
    clearTokensupply(): void;
    getTokensupply(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setTokensupply(value?: google_protobuf_wrappers_pb.UInt32Value): void;

    hasRegistrationutxo(): boolean;
    clearRegistrationutxo(): void;
    getRegistrationutxo(): brambl_models_address_pb.TransactionOutputAddress | undefined;
    setRegistrationutxo(value?: brambl_models_address_pb.TransactionOutputAddress): void;

    getQuantitydescriptor(): brambl_models_box_asset_pb.QuantityDescriptorTypeMap[keyof brambl_models_box_asset_pb.QuantityDescriptorTypeMap];
    setQuantitydescriptor(value: brambl_models_box_asset_pb.QuantityDescriptorTypeMap[keyof brambl_models_box_asset_pb.QuantityDescriptorTypeMap]): void;

    getFungibility(): brambl_models_box_asset_pb.FungibilityTypeMap[keyof brambl_models_box_asset_pb.FungibilityTypeMap];
    setFungibility(value: brambl_models_box_asset_pb.FungibilityTypeMap[keyof brambl_models_box_asset_pb.FungibilityTypeMap]): void;

    hasEphemeralmetadatascheme(): boolean;
    clearEphemeralmetadatascheme(): void;
    getEphemeralmetadatascheme(): google_protobuf_struct_pb.Struct | undefined;
    setEphemeralmetadatascheme(value?: google_protobuf_struct_pb.Struct): void;

    hasPermanentmetadatascheme(): boolean;
    clearPermanentmetadatascheme(): void;
    getPermanentmetadatascheme(): google_protobuf_struct_pb.Struct | undefined;
    setPermanentmetadatascheme(value?: google_protobuf_struct_pb.Struct): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SeriesPolicy.AsObject;
    static toObject(includeInstance: boolean, msg: SeriesPolicy): SeriesPolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SeriesPolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SeriesPolicy;
    static deserializeBinaryFromReader(message: SeriesPolicy, reader: jspb.BinaryReader): SeriesPolicy;
  }

  export namespace SeriesPolicy {
    export type AsObject = {
      label: string,
      tokensupply?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
      registrationutxo?: brambl_models_address_pb.TransactionOutputAddress.AsObject,
      quantitydescriptor: brambl_models_box_asset_pb.QuantityDescriptorTypeMap[keyof brambl_models_box_asset_pb.QuantityDescriptorTypeMap],
      fungibility: brambl_models_box_asset_pb.FungibilityTypeMap[keyof brambl_models_box_asset_pb.FungibilityTypeMap],
      ephemeralmetadatascheme?: google_protobuf_struct_pb.Struct.AsObject,
      permanentmetadatascheme?: google_protobuf_struct_pb.Struct.AsObject,
    }
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    EON = 1,
    ERA = 2,
    EPOCH = 3,
    HEADER = 4,
    IOTRANSACTION = 5,
    GROUPPOLICY = 6,
    SERIESPOLICY = 7,
  }
}

