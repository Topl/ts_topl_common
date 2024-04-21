/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "co.topl.brambl.models";

/** Represents the identifier of a Transaction.  It is constructed from the evidence of the signable bytes of the Transaction. */
export interface TransactionId {
  /**
   * The evidence of the Transaction's signable bytes
   * length = 32
   */
  value: Uint8Array;
}

/** Represents the identifier of a Lock.  It is constructed from the evidence of the signable bytes of the Lock. */
export interface LockId {
  /**
   * The evidence of the Lock's signable bytes
   * length = 32
   */
  value: Uint8Array;
}

/** Represents the identifier of an Accumulator Root.  It is constructed from the evidence of the signable bytes of the Lock. */
export interface AccumulatorRootId {
  /**
   * The evidence of the Accumulator Root's signable bytes
   * length = 32
   */
  value: Uint8Array;
}

/**
 * Represents the identifier of an TAM V2 group.
 * It is constructed using SHA-256 digest from fields label+fixedSeries+seriesTokenSupply+transactionId+utxoIndex.
 */
export interface GroupId {
  /**
   * The evidence of the Group signable bytes
   * length = 32
   */
  value: Uint8Array;
}

/**
 * Represents the identifier of an TAM V2 series.
 * It is constructed using SHA-256 digest from fields label+fixedSeries+seriesTokenSupply+transactionId+utxoIndex.
 */
export interface SeriesId {
  /**
   * The evidence of the Group signable bytes
   * length = 32
   */
  value: Uint8Array;
}

function createBaseTransactionId(): TransactionId {
  return { value: new Uint8Array(0) };
}

export const TransactionId = {
  encode(message: TransactionId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionId {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TransactionId {
    return { value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0) };
  },

  toJSON(message: TransactionId): unknown {
    const obj: any = {};
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TransactionId>, I>>(base?: I): TransactionId {
    return TransactionId.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TransactionId>, I>>(object: I): TransactionId {
    const message = createBaseTransactionId();
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseLockId(): LockId {
  return { value: new Uint8Array(0) };
}

export const LockId = {
  encode(message: LockId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockId {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LockId {
    return { value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0) };
  },

  toJSON(message: LockId): unknown {
    const obj: any = {};
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LockId>, I>>(base?: I): LockId {
    return LockId.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LockId>, I>>(object: I): LockId {
    const message = createBaseLockId();
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseAccumulatorRootId(): AccumulatorRootId {
  return { value: new Uint8Array(0) };
}

export const AccumulatorRootId = {
  encode(message: AccumulatorRootId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccumulatorRootId {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccumulatorRootId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccumulatorRootId {
    return { value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0) };
  },

  toJSON(message: AccumulatorRootId): unknown {
    const obj: any = {};
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccumulatorRootId>, I>>(base?: I): AccumulatorRootId {
    return AccumulatorRootId.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AccumulatorRootId>, I>>(object: I): AccumulatorRootId {
    const message = createBaseAccumulatorRootId();
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseGroupId(): GroupId {
  return { value: new Uint8Array(0) };
}

export const GroupId = {
  encode(message: GroupId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GroupId {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GroupId {
    return { value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0) };
  },

  toJSON(message: GroupId): unknown {
    const obj: any = {};
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GroupId>, I>>(base?: I): GroupId {
    return GroupId.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GroupId>, I>>(object: I): GroupId {
    const message = createBaseGroupId();
    message.value = object.value ?? new Uint8Array(0);
    return message;
  },
};

function createBaseSeriesId(): SeriesId {
  return { value: new Uint8Array(0) };
}

export const SeriesId = {
  encode(message: SeriesId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SeriesId {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSeriesId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SeriesId {
    return { value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0) };
  },

  toJSON(message: SeriesId): unknown {
    const obj: any = {};
    if (message.value.length !== 0) {
      obj.value = base64FromBytes(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SeriesId>, I>>(base?: I): SeriesId {
    return SeriesId.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SeriesId>, I>>(object: I): SeriesId {
    const message = createBaseSeriesId();
    message.value = object.value ?? new Uint8Array(0);
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
