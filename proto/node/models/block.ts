/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { TransactionId } from "../../brambl/models/identifier";
import { IoTransaction } from "../../brambl/models/transaction/io_transaction";
import { BlockHeader } from "../../consensus/models/block_header";

export const protobufPackage = "co.topl.node.models";

/** Captures the ordering of transaction IDs within a block */
export interface BlockBody {
  /** A list of Transaction IDs included in this block */
  transactionIds: TransactionId[];
  /** An optional Transaction ID that represents the reward transaction for this block. */
  rewardTransactionId: TransactionId | undefined;
}

/** Captures the ordering of transactions (not just IDs) within a block */
export interface FullBlockBody {
  /** A list of Transactions included in this block */
  transactions: IoTransaction[];
  /** An optional Transaction that represents the reward transaction for this block. */
  rewardTransaction: IoTransaction | undefined;
}

/** Captures the header and all transactions in a block */
export interface Block {
  /** The block's header */
  header:
    | BlockHeader
    | undefined;
  /** The block's body */
  body: BlockBody | undefined;
}

/** Captures the header and all transactions in a block */
export interface FullBlock {
  /** The block's header */
  header:
    | BlockHeader
    | undefined;
  /** The block's full body */
  fullBody: FullBlockBody | undefined;
}

function createBaseBlockBody(): BlockBody {
  return { transactionIds: [], rewardTransactionId: undefined };
}

export const BlockBody = {
  encode(message: BlockBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.transactionIds) {
      TransactionId.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.rewardTransactionId !== undefined) {
      TransactionId.encode(message.rewardTransactionId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BlockBody {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transactionIds.push(TransactionId.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rewardTransactionId = TransactionId.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BlockBody {
    return {
      transactionIds: globalThis.Array.isArray(object?.transactionIds)
        ? object.transactionIds.map((e: any) => TransactionId.fromJSON(e))
        : [],
      rewardTransactionId: isSet(object.rewardTransactionId)
        ? TransactionId.fromJSON(object.rewardTransactionId)
        : undefined,
    };
  },

  toJSON(message: BlockBody): unknown {
    const obj: any = {};
    if (message.transactionIds?.length) {
      obj.transactionIds = message.transactionIds.map((e) => TransactionId.toJSON(e));
    }
    if (message.rewardTransactionId !== undefined) {
      obj.rewardTransactionId = TransactionId.toJSON(message.rewardTransactionId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BlockBody>, I>>(base?: I): BlockBody {
    return BlockBody.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BlockBody>, I>>(object: I): BlockBody {
    const message = createBaseBlockBody();
    message.transactionIds = object.transactionIds?.map((e) => TransactionId.fromPartial(e)) || [];
    message.rewardTransactionId = (object.rewardTransactionId !== undefined && object.rewardTransactionId !== null)
      ? TransactionId.fromPartial(object.rewardTransactionId)
      : undefined;
    return message;
  },
};

function createBaseFullBlockBody(): FullBlockBody {
  return { transactions: [], rewardTransaction: undefined };
}

export const FullBlockBody = {
  encode(message: FullBlockBody, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.transactions) {
      IoTransaction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.rewardTransaction !== undefined) {
      IoTransaction.encode(message.rewardTransaction, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FullBlockBody {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFullBlockBody();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transactions.push(IoTransaction.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rewardTransaction = IoTransaction.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FullBlockBody {
    return {
      transactions: globalThis.Array.isArray(object?.transactions)
        ? object.transactions.map((e: any) => IoTransaction.fromJSON(e))
        : [],
      rewardTransaction: isSet(object.rewardTransaction) ? IoTransaction.fromJSON(object.rewardTransaction) : undefined,
    };
  },

  toJSON(message: FullBlockBody): unknown {
    const obj: any = {};
    if (message.transactions?.length) {
      obj.transactions = message.transactions.map((e) => IoTransaction.toJSON(e));
    }
    if (message.rewardTransaction !== undefined) {
      obj.rewardTransaction = IoTransaction.toJSON(message.rewardTransaction);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FullBlockBody>, I>>(base?: I): FullBlockBody {
    return FullBlockBody.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FullBlockBody>, I>>(object: I): FullBlockBody {
    const message = createBaseFullBlockBody();
    message.transactions = object.transactions?.map((e) => IoTransaction.fromPartial(e)) || [];
    message.rewardTransaction = (object.rewardTransaction !== undefined && object.rewardTransaction !== null)
      ? IoTransaction.fromPartial(object.rewardTransaction)
      : undefined;
    return message;
  },
};

function createBaseBlock(): Block {
  return { header: undefined, body: undefined };
}

export const Block = {
  encode(message: Block, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      BlockHeader.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.body !== undefined) {
      BlockBody.encode(message.body, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Block {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.header = BlockHeader.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.body = BlockBody.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Block {
    return {
      header: isSet(object.header) ? BlockHeader.fromJSON(object.header) : undefined,
      body: isSet(object.body) ? BlockBody.fromJSON(object.body) : undefined,
    };
  },

  toJSON(message: Block): unknown {
    const obj: any = {};
    if (message.header !== undefined) {
      obj.header = BlockHeader.toJSON(message.header);
    }
    if (message.body !== undefined) {
      obj.body = BlockBody.toJSON(message.body);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Block>, I>>(base?: I): Block {
    return Block.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Block>, I>>(object: I): Block {
    const message = createBaseBlock();
    message.header = (object.header !== undefined && object.header !== null)
      ? BlockHeader.fromPartial(object.header)
      : undefined;
    message.body = (object.body !== undefined && object.body !== null) ? BlockBody.fromPartial(object.body) : undefined;
    return message;
  },
};

function createBaseFullBlock(): FullBlock {
  return { header: undefined, fullBody: undefined };
}

export const FullBlock = {
  encode(message: FullBlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      BlockHeader.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.fullBody !== undefined) {
      FullBlockBody.encode(message.fullBody, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FullBlock {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFullBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.header = BlockHeader.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fullBody = FullBlockBody.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FullBlock {
    return {
      header: isSet(object.header) ? BlockHeader.fromJSON(object.header) : undefined,
      fullBody: isSet(object.fullBody) ? FullBlockBody.fromJSON(object.fullBody) : undefined,
    };
  },

  toJSON(message: FullBlock): unknown {
    const obj: any = {};
    if (message.header !== undefined) {
      obj.header = BlockHeader.toJSON(message.header);
    }
    if (message.fullBody !== undefined) {
      obj.fullBody = FullBlockBody.toJSON(message.fullBody);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FullBlock>, I>>(base?: I): FullBlock {
    return FullBlock.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FullBlock>, I>>(object: I): FullBlock {
    const message = createBaseFullBlock();
    message.header = (object.header !== undefined && object.header !== null)
      ? BlockHeader.fromPartial(object.header)
      : undefined;
    message.fullBody = (object.fullBody !== undefined && object.fullBody !== null)
      ? FullBlockBody.fromPartial(object.fullBody)
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
