// package: co.topl.node.models
// file: node/models/p2p.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../validate/validate_pb";

export class CurrentKnownHostsReq extends jspb.Message {
  getMaxcount(): number;
  setMaxcount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentKnownHostsReq.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentKnownHostsReq): CurrentKnownHostsReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurrentKnownHostsReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentKnownHostsReq;
  static deserializeBinaryFromReader(message: CurrentKnownHostsReq, reader: jspb.BinaryReader): CurrentKnownHostsReq;
}

export namespace CurrentKnownHostsReq {
  export type AsObject = {
    maxcount: number,
  }
}

export class KnownHost extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getHost(): string;
  setHost(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KnownHost.AsObject;
  static toObject(includeInstance: boolean, msg: KnownHost): KnownHost.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KnownHost, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KnownHost;
  static deserializeBinaryFromReader(message: KnownHost, reader: jspb.BinaryReader): KnownHost;
}

export namespace KnownHost {
  export type AsObject = {
    id: Uint8Array | string,
    host: string,
    port: number,
  }
}

export class CurrentKnownHostsRes extends jspb.Message {
  clearHothostsList(): void;
  getHothostsList(): Array<KnownHost>;
  setHothostsList(value: Array<KnownHost>): void;
  addHothosts(value?: KnownHost, index?: number): KnownHost;

  clearWarmhostsList(): void;
  getWarmhostsList(): Array<KnownHost>;
  setWarmhostsList(value: Array<KnownHost>): void;
  addWarmhosts(value?: KnownHost, index?: number): KnownHost;

  clearColdhostsList(): void;
  getColdhostsList(): Array<KnownHost>;
  setColdhostsList(value: Array<KnownHost>): void;
  addColdhosts(value?: KnownHost, index?: number): KnownHost;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentKnownHostsRes.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentKnownHostsRes): CurrentKnownHostsRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurrentKnownHostsRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentKnownHostsRes;
  static deserializeBinaryFromReader(message: CurrentKnownHostsRes, reader: jspb.BinaryReader): CurrentKnownHostsRes;
}

export namespace CurrentKnownHostsRes {
  export type AsObject = {
    hothostsList: Array<KnownHost.AsObject>,
    warmhostsList: Array<KnownHost.AsObject>,
    coldhostsList: Array<KnownHost.AsObject>,
  }
}

export class PingMessage extends jspb.Message {
  getPing(): string;
  setPing(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PingMessage): PingMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingMessage;
  static deserializeBinaryFromReader(message: PingMessage, reader: jspb.BinaryReader): PingMessage;
}

export namespace PingMessage {
  export type AsObject = {
    ping: string,
  }
}

export class PongMessage extends jspb.Message {
  getPong(): string;
  setPong(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PongMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PongMessage): PongMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PongMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PongMessage;
  static deserializeBinaryFromReader(message: PongMessage, reader: jspb.BinaryReader): PongMessage;
}

export namespace PongMessage {
  export type AsObject = {
    pong: string,
  }
}

