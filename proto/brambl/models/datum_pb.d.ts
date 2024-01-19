// package: co.topl.brambl.models
// file: brambl/models/datum.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../validate/validate_pb";
import * as brambl_models_event_pb from "../../brambl/models/event_pb";

export class Datum extends jspb.Message {
  hasEon(): boolean;
  clearEon(): void;
  getEon(): Datum.Eon | undefined;
  setEon(value?: Datum.Eon): void;

  hasEra(): boolean;
  clearEra(): void;
  getEra(): Datum.Era | undefined;
  setEra(value?: Datum.Era): void;

  hasEpoch(): boolean;
  clearEpoch(): void;
  getEpoch(): Datum.Epoch | undefined;
  setEpoch(value?: Datum.Epoch): void;

  hasHeader(): boolean;
  clearHeader(): void;
  getHeader(): Datum.Header | undefined;
  setHeader(value?: Datum.Header): void;

  hasIotransaction(): boolean;
  clearIotransaction(): void;
  getIotransaction(): Datum.IoTransaction | undefined;
  setIotransaction(value?: Datum.IoTransaction): void;

  hasGrouppolicy(): boolean;
  clearGrouppolicy(): void;
  getGrouppolicy(): Datum.GroupPolicy | undefined;
  setGrouppolicy(value?: Datum.GroupPolicy): void;

  hasSeriespolicy(): boolean;
  clearSeriespolicy(): void;
  getSeriespolicy(): Datum.SeriesPolicy | undefined;
  setSeriespolicy(value?: Datum.SeriesPolicy): void;

  getValueCase(): Datum.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Datum.AsObject;
  static toObject(includeInstance: boolean, msg: Datum): Datum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Datum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Datum;
  static deserializeBinaryFromReader(message: Datum, reader: jspb.BinaryReader): Datum;
}

export namespace Datum {
  export type AsObject = {
    eon?: Datum.Eon.AsObject,
    era?: Datum.Era.AsObject,
    epoch?: Datum.Epoch.AsObject,
    header?: Datum.Header.AsObject,
    iotransaction?: Datum.IoTransaction.AsObject,
    grouppolicy?: Datum.GroupPolicy.AsObject,
    seriespolicy?: Datum.SeriesPolicy.AsObject,
  }

  export class Eon extends jspb.Message {
    hasEvent(): boolean;
    clearEvent(): void;
    getEvent(): brambl_models_event_pb.Event.Eon | undefined;
    setEvent(value?: brambl_models_event_pb.Event.Eon): void;

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
      event?: brambl_models_event_pb.Event.Eon.AsObject,
    }
  }

  export class Era extends jspb.Message {
    hasEvent(): boolean;
    clearEvent(): void;
    getEvent(): brambl_models_event_pb.Event.Era | undefined;
    setEvent(value?: brambl_models_event_pb.Event.Era): void;

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
      event?: brambl_models_event_pb.Event.Era.AsObject,
    }
  }

  export class Epoch extends jspb.Message {
    hasEvent(): boolean;
    clearEvent(): void;
    getEvent(): brambl_models_event_pb.Event.Epoch | undefined;
    setEvent(value?: brambl_models_event_pb.Event.Epoch): void;

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
      event?: brambl_models_event_pb.Event.Epoch.AsObject,
    }
  }

  export class Header extends jspb.Message {
    hasEvent(): boolean;
    clearEvent(): void;
    getEvent(): brambl_models_event_pb.Event.Header | undefined;
    setEvent(value?: brambl_models_event_pb.Event.Header): void;

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
      event?: brambl_models_event_pb.Event.Header.AsObject,
    }
  }

  export class IoTransaction extends jspb.Message {
    hasEvent(): boolean;
    clearEvent(): void;
    getEvent(): brambl_models_event_pb.Event.IoTransaction | undefined;
    setEvent(value?: brambl_models_event_pb.Event.IoTransaction): void;

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
      event?: brambl_models_event_pb.Event.IoTransaction.AsObject,
    }
  }

  export class GroupPolicy extends jspb.Message {
    hasEvent(): boolean;
    clearEvent(): void;
    getEvent(): brambl_models_event_pb.Event.GroupPolicy | undefined;
    setEvent(value?: brambl_models_event_pb.Event.GroupPolicy): void;

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
      event?: brambl_models_event_pb.Event.GroupPolicy.AsObject,
    }
  }

  export class SeriesPolicy extends jspb.Message {
    hasEvent(): boolean;
    clearEvent(): void;
    getEvent(): brambl_models_event_pb.Event.SeriesPolicy | undefined;
    setEvent(value?: brambl_models_event_pb.Event.SeriesPolicy): void;

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
      event?: brambl_models_event_pb.Event.SeriesPolicy.AsObject,
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

