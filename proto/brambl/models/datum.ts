/* eslint-disable */
import _m0 from "protobufjs/minimal";
import {
  Event_Eon,
  Event_Epoch,
  Event_Era,
  Event_GroupPolicy,
  Event_Header,
  Event_IoTransaction,
  Event_SeriesPolicy,
} from "./event";

export const protobufPackage = "co.topl.brambl.models";

/**
 * Datums represent a queryable product value of the arguments available from a certain Event. Datum may be
 * evaluated during the Quivr protocol execution by providing events as Datum in a Dynamic Context.
 */
export interface Datum {
  eon?: Datum_Eon | undefined;
  era?: Datum_Era | undefined;
  epoch?: Datum_Epoch | undefined;
  header?: Datum_Header | undefined;
  ioTransaction?: Datum_IoTransaction | undefined;
  groupPolicy?: Datum_GroupPolicy | undefined;
  seriesPolicy?: Datum_SeriesPolicy | undefined;
}

export interface Datum_Eon {
  event: Event_Eon | undefined;
}

export interface Datum_Era {
  event: Event_Era | undefined;
}

export interface Datum_Epoch {
  event: Event_Epoch | undefined;
}

export interface Datum_Header {
  event: Event_Header | undefined;
}

export interface Datum_IoTransaction {
  event: Event_IoTransaction | undefined;
}

export interface Datum_GroupPolicy {
  event: Event_GroupPolicy | undefined;
}

export interface Datum_SeriesPolicy {
  event: Event_SeriesPolicy | undefined;
}

function createBaseDatum(): Datum {
  return {
    eon: undefined,
    era: undefined,
    epoch: undefined,
    header: undefined,
    ioTransaction: undefined,
    groupPolicy: undefined,
    seriesPolicy: undefined,
  };
}

export const Datum = {
  encode(message: Datum, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eon !== undefined) {
      Datum_Eon.encode(message.eon, writer.uint32(10).fork()).ldelim();
    }
    if (message.era !== undefined) {
      Datum_Era.encode(message.era, writer.uint32(18).fork()).ldelim();
    }
    if (message.epoch !== undefined) {
      Datum_Epoch.encode(message.epoch, writer.uint32(26).fork()).ldelim();
    }
    if (message.header !== undefined) {
      Datum_Header.encode(message.header, writer.uint32(34).fork()).ldelim();
    }
    if (message.ioTransaction !== undefined) {
      Datum_IoTransaction.encode(message.ioTransaction, writer.uint32(42).fork()).ldelim();
    }
    if (message.groupPolicy !== undefined) {
      Datum_GroupPolicy.encode(message.groupPolicy, writer.uint32(50).fork()).ldelim();
    }
    if (message.seriesPolicy !== undefined) {
      Datum_SeriesPolicy.encode(message.seriesPolicy, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Datum {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatum();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.eon = Datum_Eon.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.era = Datum_Era.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.epoch = Datum_Epoch.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.header = Datum_Header.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.ioTransaction = Datum_IoTransaction.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.groupPolicy = Datum_GroupPolicy.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.seriesPolicy = Datum_SeriesPolicy.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Datum {
    return {
      eon: isSet(object.eon) ? Datum_Eon.fromJSON(object.eon) : undefined,
      era: isSet(object.era) ? Datum_Era.fromJSON(object.era) : undefined,
      epoch: isSet(object.epoch) ? Datum_Epoch.fromJSON(object.epoch) : undefined,
      header: isSet(object.header) ? Datum_Header.fromJSON(object.header) : undefined,
      ioTransaction: isSet(object.ioTransaction) ? Datum_IoTransaction.fromJSON(object.ioTransaction) : undefined,
      groupPolicy: isSet(object.groupPolicy) ? Datum_GroupPolicy.fromJSON(object.groupPolicy) : undefined,
      seriesPolicy: isSet(object.seriesPolicy) ? Datum_SeriesPolicy.fromJSON(object.seriesPolicy) : undefined,
    };
  },

  toJSON(message: Datum): unknown {
    const obj: any = {};
    if (message.eon !== undefined) {
      obj.eon = Datum_Eon.toJSON(message.eon);
    }
    if (message.era !== undefined) {
      obj.era = Datum_Era.toJSON(message.era);
    }
    if (message.epoch !== undefined) {
      obj.epoch = Datum_Epoch.toJSON(message.epoch);
    }
    if (message.header !== undefined) {
      obj.header = Datum_Header.toJSON(message.header);
    }
    if (message.ioTransaction !== undefined) {
      obj.ioTransaction = Datum_IoTransaction.toJSON(message.ioTransaction);
    }
    if (message.groupPolicy !== undefined) {
      obj.groupPolicy = Datum_GroupPolicy.toJSON(message.groupPolicy);
    }
    if (message.seriesPolicy !== undefined) {
      obj.seriesPolicy = Datum_SeriesPolicy.toJSON(message.seriesPolicy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Datum>, I>>(base?: I): Datum {
    return Datum.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Datum>, I>>(object: I): Datum {
    const message = createBaseDatum();
    message.eon = (object.eon !== undefined && object.eon !== null) ? Datum_Eon.fromPartial(object.eon) : undefined;
    message.era = (object.era !== undefined && object.era !== null) ? Datum_Era.fromPartial(object.era) : undefined;
    message.epoch = (object.epoch !== undefined && object.epoch !== null)
      ? Datum_Epoch.fromPartial(object.epoch)
      : undefined;
    message.header = (object.header !== undefined && object.header !== null)
      ? Datum_Header.fromPartial(object.header)
      : undefined;
    message.ioTransaction = (object.ioTransaction !== undefined && object.ioTransaction !== null)
      ? Datum_IoTransaction.fromPartial(object.ioTransaction)
      : undefined;
    message.groupPolicy = (object.groupPolicy !== undefined && object.groupPolicy !== null)
      ? Datum_GroupPolicy.fromPartial(object.groupPolicy)
      : undefined;
    message.seriesPolicy = (object.seriesPolicy !== undefined && object.seriesPolicy !== null)
      ? Datum_SeriesPolicy.fromPartial(object.seriesPolicy)
      : undefined;
    return message;
  },
};

function createBaseDatum_Eon(): Datum_Eon {
  return { event: undefined };
}

export const Datum_Eon = {
  encode(message: Datum_Eon, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.event !== undefined) {
      Event_Eon.encode(message.event, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Datum_Eon {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatum_Eon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.event = Event_Eon.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Datum_Eon {
    return { event: isSet(object.event) ? Event_Eon.fromJSON(object.event) : undefined };
  },

  toJSON(message: Datum_Eon): unknown {
    const obj: any = {};
    if (message.event !== undefined) {
      obj.event = Event_Eon.toJSON(message.event);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Datum_Eon>, I>>(base?: I): Datum_Eon {
    return Datum_Eon.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Datum_Eon>, I>>(object: I): Datum_Eon {
    const message = createBaseDatum_Eon();
    message.event = (object.event !== undefined && object.event !== null)
      ? Event_Eon.fromPartial(object.event)
      : undefined;
    return message;
  },
};

function createBaseDatum_Era(): Datum_Era {
  return { event: undefined };
}

export const Datum_Era = {
  encode(message: Datum_Era, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.event !== undefined) {
      Event_Era.encode(message.event, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Datum_Era {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatum_Era();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.event = Event_Era.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Datum_Era {
    return { event: isSet(object.event) ? Event_Era.fromJSON(object.event) : undefined };
  },

  toJSON(message: Datum_Era): unknown {
    const obj: any = {};
    if (message.event !== undefined) {
      obj.event = Event_Era.toJSON(message.event);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Datum_Era>, I>>(base?: I): Datum_Era {
    return Datum_Era.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Datum_Era>, I>>(object: I): Datum_Era {
    const message = createBaseDatum_Era();
    message.event = (object.event !== undefined && object.event !== null)
      ? Event_Era.fromPartial(object.event)
      : undefined;
    return message;
  },
};

function createBaseDatum_Epoch(): Datum_Epoch {
  return { event: undefined };
}

export const Datum_Epoch = {
  encode(message: Datum_Epoch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.event !== undefined) {
      Event_Epoch.encode(message.event, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Datum_Epoch {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatum_Epoch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.event = Event_Epoch.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Datum_Epoch {
    return { event: isSet(object.event) ? Event_Epoch.fromJSON(object.event) : undefined };
  },

  toJSON(message: Datum_Epoch): unknown {
    const obj: any = {};
    if (message.event !== undefined) {
      obj.event = Event_Epoch.toJSON(message.event);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Datum_Epoch>, I>>(base?: I): Datum_Epoch {
    return Datum_Epoch.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Datum_Epoch>, I>>(object: I): Datum_Epoch {
    const message = createBaseDatum_Epoch();
    message.event = (object.event !== undefined && object.event !== null)
      ? Event_Epoch.fromPartial(object.event)
      : undefined;
    return message;
  },
};

function createBaseDatum_Header(): Datum_Header {
  return { event: undefined };
}

export const Datum_Header = {
  encode(message: Datum_Header, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.event !== undefined) {
      Event_Header.encode(message.event, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Datum_Header {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatum_Header();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.event = Event_Header.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Datum_Header {
    return { event: isSet(object.event) ? Event_Header.fromJSON(object.event) : undefined };
  },

  toJSON(message: Datum_Header): unknown {
    const obj: any = {};
    if (message.event !== undefined) {
      obj.event = Event_Header.toJSON(message.event);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Datum_Header>, I>>(base?: I): Datum_Header {
    return Datum_Header.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Datum_Header>, I>>(object: I): Datum_Header {
    const message = createBaseDatum_Header();
    message.event = (object.event !== undefined && object.event !== null)
      ? Event_Header.fromPartial(object.event)
      : undefined;
    return message;
  },
};

function createBaseDatum_IoTransaction(): Datum_IoTransaction {
  return { event: undefined };
}

export const Datum_IoTransaction = {
  encode(message: Datum_IoTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.event !== undefined) {
      Event_IoTransaction.encode(message.event, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Datum_IoTransaction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatum_IoTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.event = Event_IoTransaction.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Datum_IoTransaction {
    return { event: isSet(object.event) ? Event_IoTransaction.fromJSON(object.event) : undefined };
  },

  toJSON(message: Datum_IoTransaction): unknown {
    const obj: any = {};
    if (message.event !== undefined) {
      obj.event = Event_IoTransaction.toJSON(message.event);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Datum_IoTransaction>, I>>(base?: I): Datum_IoTransaction {
    return Datum_IoTransaction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Datum_IoTransaction>, I>>(object: I): Datum_IoTransaction {
    const message = createBaseDatum_IoTransaction();
    message.event = (object.event !== undefined && object.event !== null)
      ? Event_IoTransaction.fromPartial(object.event)
      : undefined;
    return message;
  },
};

function createBaseDatum_GroupPolicy(): Datum_GroupPolicy {
  return { event: undefined };
}

export const Datum_GroupPolicy = {
  encode(message: Datum_GroupPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.event !== undefined) {
      Event_GroupPolicy.encode(message.event, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Datum_GroupPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatum_GroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.event = Event_GroupPolicy.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Datum_GroupPolicy {
    return { event: isSet(object.event) ? Event_GroupPolicy.fromJSON(object.event) : undefined };
  },

  toJSON(message: Datum_GroupPolicy): unknown {
    const obj: any = {};
    if (message.event !== undefined) {
      obj.event = Event_GroupPolicy.toJSON(message.event);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Datum_GroupPolicy>, I>>(base?: I): Datum_GroupPolicy {
    return Datum_GroupPolicy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Datum_GroupPolicy>, I>>(object: I): Datum_GroupPolicy {
    const message = createBaseDatum_GroupPolicy();
    message.event = (object.event !== undefined && object.event !== null)
      ? Event_GroupPolicy.fromPartial(object.event)
      : undefined;
    return message;
  },
};

function createBaseDatum_SeriesPolicy(): Datum_SeriesPolicy {
  return { event: undefined };
}

export const Datum_SeriesPolicy = {
  encode(message: Datum_SeriesPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.event !== undefined) {
      Event_SeriesPolicy.encode(message.event, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Datum_SeriesPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDatum_SeriesPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.event = Event_SeriesPolicy.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Datum_SeriesPolicy {
    return { event: isSet(object.event) ? Event_SeriesPolicy.fromJSON(object.event) : undefined };
  },

  toJSON(message: Datum_SeriesPolicy): unknown {
    const obj: any = {};
    if (message.event !== undefined) {
      obj.event = Event_SeriesPolicy.toJSON(message.event);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Datum_SeriesPolicy>, I>>(base?: I): Datum_SeriesPolicy {
    return Datum_SeriesPolicy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Datum_SeriesPolicy>, I>>(object: I): Datum_SeriesPolicy {
    const message = createBaseDatum_SeriesPolicy();
    message.event = (object.event !== undefined && object.event !== null)
      ? Event_SeriesPolicy.fromPartial(object.event)
      : undefined;
    return message;
  },
};

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
