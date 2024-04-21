/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "co.topl.node.models";

/** Request type for CurrentKnownHosts */
export interface CurrentKnownHostsReq {
  maxCount: number;
}

export interface KnownHost {
  id: Uint8Array;
  host: string;
  port: number;
}

/** Response type for CurrentKnownHosts */
export interface CurrentKnownHostsRes {
  hotHosts: KnownHost[];
  warmHosts: KnownHost[];
  coldHosts: KnownHost[];
}

export interface PingMessage {
  ping: string;
}

export interface PongMessage {
  pong: string;
}

function createBaseCurrentKnownHostsReq(): CurrentKnownHostsReq {
  return { maxCount: 0 };
}

export const CurrentKnownHostsReq = {
  encode(message: CurrentKnownHostsReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxCount !== 0) {
      writer.uint32(8).uint32(message.maxCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrentKnownHostsReq {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentKnownHostsReq();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.maxCount = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CurrentKnownHostsReq {
    return { maxCount: isSet(object.maxCount) ? globalThis.Number(object.maxCount) : 0 };
  },

  toJSON(message: CurrentKnownHostsReq): unknown {
    const obj: any = {};
    if (message.maxCount !== 0) {
      obj.maxCount = Math.round(message.maxCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CurrentKnownHostsReq>, I>>(base?: I): CurrentKnownHostsReq {
    return CurrentKnownHostsReq.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CurrentKnownHostsReq>, I>>(object: I): CurrentKnownHostsReq {
    const message = createBaseCurrentKnownHostsReq();
    message.maxCount = object.maxCount ?? 0;
    return message;
  },
};

function createBaseKnownHost(): KnownHost {
  return { id: new Uint8Array(0), host: "", port: 0 };
}

export const KnownHost = {
  encode(message: KnownHost, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(26).bytes(message.id);
    }
    if (message.host !== "") {
      writer.uint32(10).string(message.host);
    }
    if (message.port !== 0) {
      writer.uint32(16).uint32(message.port);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KnownHost {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKnownHost();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.id = reader.bytes();
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.host = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.port = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KnownHost {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(0),
      host: isSet(object.host) ? globalThis.String(object.host) : "",
      port: isSet(object.port) ? globalThis.Number(object.port) : 0,
    };
  },

  toJSON(message: KnownHost): unknown {
    const obj: any = {};
    if (message.id.length !== 0) {
      obj.id = base64FromBytes(message.id);
    }
    if (message.host !== "") {
      obj.host = message.host;
    }
    if (message.port !== 0) {
      obj.port = Math.round(message.port);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<KnownHost>, I>>(base?: I): KnownHost {
    return KnownHost.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<KnownHost>, I>>(object: I): KnownHost {
    const message = createBaseKnownHost();
    message.id = object.id ?? new Uint8Array(0);
    message.host = object.host ?? "";
    message.port = object.port ?? 0;
    return message;
  },
};

function createBaseCurrentKnownHostsRes(): CurrentKnownHostsRes {
  return { hotHosts: [], warmHosts: [], coldHosts: [] };
}

export const CurrentKnownHostsRes = {
  encode(message: CurrentKnownHostsRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.hotHosts) {
      KnownHost.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.warmHosts) {
      KnownHost.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.coldHosts) {
      KnownHost.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrentKnownHostsRes {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrentKnownHostsRes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hotHosts.push(KnownHost.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.warmHosts.push(KnownHost.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.coldHosts.push(KnownHost.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CurrentKnownHostsRes {
    return {
      hotHosts: globalThis.Array.isArray(object?.hotHosts)
        ? object.hotHosts.map((e: any) => KnownHost.fromJSON(e))
        : [],
      warmHosts: globalThis.Array.isArray(object?.warmHosts)
        ? object.warmHosts.map((e: any) => KnownHost.fromJSON(e))
        : [],
      coldHosts: globalThis.Array.isArray(object?.coldHosts)
        ? object.coldHosts.map((e: any) => KnownHost.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CurrentKnownHostsRes): unknown {
    const obj: any = {};
    if (message.hotHosts?.length) {
      obj.hotHosts = message.hotHosts.map((e) => KnownHost.toJSON(e));
    }
    if (message.warmHosts?.length) {
      obj.warmHosts = message.warmHosts.map((e) => KnownHost.toJSON(e));
    }
    if (message.coldHosts?.length) {
      obj.coldHosts = message.coldHosts.map((e) => KnownHost.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CurrentKnownHostsRes>, I>>(base?: I): CurrentKnownHostsRes {
    return CurrentKnownHostsRes.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CurrentKnownHostsRes>, I>>(object: I): CurrentKnownHostsRes {
    const message = createBaseCurrentKnownHostsRes();
    message.hotHosts = object.hotHosts?.map((e) => KnownHost.fromPartial(e)) || [];
    message.warmHosts = object.warmHosts?.map((e) => KnownHost.fromPartial(e)) || [];
    message.coldHosts = object.coldHosts?.map((e) => KnownHost.fromPartial(e)) || [];
    return message;
  },
};

function createBasePingMessage(): PingMessage {
  return { ping: "" };
}

export const PingMessage = {
  encode(message: PingMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ping !== "") {
      writer.uint32(10).string(message.ping);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePingMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ping = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PingMessage {
    return { ping: isSet(object.ping) ? globalThis.String(object.ping) : "" };
  },

  toJSON(message: PingMessage): unknown {
    const obj: any = {};
    if (message.ping !== "") {
      obj.ping = message.ping;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PingMessage>, I>>(base?: I): PingMessage {
    return PingMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PingMessage>, I>>(object: I): PingMessage {
    const message = createBasePingMessage();
    message.ping = object.ping ?? "";
    return message;
  },
};

function createBasePongMessage(): PongMessage {
  return { pong: "" };
}

export const PongMessage = {
  encode(message: PongMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pong !== "") {
      writer.uint32(10).string(message.pong);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PongMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePongMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pong = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PongMessage {
    return { pong: isSet(object.pong) ? globalThis.String(object.pong) : "" };
  },

  toJSON(message: PongMessage): unknown {
    const obj: any = {};
    if (message.pong !== "") {
      obj.pong = message.pong;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PongMessage>, I>>(base?: I): PongMessage {
    return PongMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PongMessage>, I>>(object: I): PongMessage {
    const message = createBasePongMessage();
    message.pong = object.pong ?? "";
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
