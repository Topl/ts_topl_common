/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Struct } from "../../../google/protobuf/struct";
import { UInt32Value } from "../../../google/protobuf/wrappers";
import { Int128 } from "../../../quivr/models/shared";
import { TransactionOutputAddress } from "../address";

export const protobufPackage = "co.topl.brambl.models.box";

export interface AssetMintingStatement {
  /** The address of the UTXO that contains the group constructor token that we are using to mint the asset token. */
  groupTokenUtxo:
    | TransactionOutputAddress
    | undefined;
  /** The address of the UTXO that contains the seriesconstructor token that we are using to mint the asset token. */
  seriesTokenUtxo:
    | TransactionOutputAddress
    | undefined;
  /** The number of assets that we are minting using the group and series constructor token references by the two other attributes. */
  quantity:
    | Int128
    | undefined;
  /**
   * This is the permanent metadata of an asset.
   * It follows the schema defined in the permanent metadata schema of the series policy corresponding to the token being minted.
   * The conformance of this field to the schema is not checked by the node.
   */
  permanentMetadata: { [key: string]: any } | undefined;
}

export interface AssetMergingStatement {
  /** The non-empty list of UTXOs that we are using to compute the Merkle root for the alloy. */
  inputUtxos: TransactionOutputAddress[];
  /** The index in the output sequence of the transaction where the merged tokens are stored. */
  outputIdx: number;
}

export interface AssetSplittingStatement {
  /** The non-empty list of indexes where the split asset is being put. */
  outputIndexes: number[];
  /** The UTXO that is being split. */
  inputUtxo: TransactionOutputAddress | undefined;
}

function createBaseAssetMintingStatement(): AssetMintingStatement {
  return { groupTokenUtxo: undefined, seriesTokenUtxo: undefined, quantity: undefined, permanentMetadata: undefined };
}

export const AssetMintingStatement = {
  encode(message: AssetMintingStatement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupTokenUtxo !== undefined) {
      TransactionOutputAddress.encode(message.groupTokenUtxo, writer.uint32(10).fork()).ldelim();
    }
    if (message.seriesTokenUtxo !== undefined) {
      TransactionOutputAddress.encode(message.seriesTokenUtxo, writer.uint32(18).fork()).ldelim();
    }
    if (message.quantity !== undefined) {
      Int128.encode(message.quantity, writer.uint32(26).fork()).ldelim();
    }
    if (message.permanentMetadata !== undefined) {
      Struct.encode(Struct.wrap(message.permanentMetadata), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetMintingStatement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetMintingStatement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groupTokenUtxo = TransactionOutputAddress.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.seriesTokenUtxo = TransactionOutputAddress.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.quantity = Int128.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.permanentMetadata = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetMintingStatement {
    return {
      groupTokenUtxo: isSet(object.groupTokenUtxo)
        ? TransactionOutputAddress.fromJSON(object.groupTokenUtxo)
        : undefined,
      seriesTokenUtxo: isSet(object.seriesTokenUtxo)
        ? TransactionOutputAddress.fromJSON(object.seriesTokenUtxo)
        : undefined,
      quantity: isSet(object.quantity) ? Int128.fromJSON(object.quantity) : undefined,
      permanentMetadata: isObject(object.permanentMetadata) ? object.permanentMetadata : undefined,
    };
  },

  toJSON(message: AssetMintingStatement): unknown {
    const obj: any = {};
    if (message.groupTokenUtxo !== undefined) {
      obj.groupTokenUtxo = TransactionOutputAddress.toJSON(message.groupTokenUtxo);
    }
    if (message.seriesTokenUtxo !== undefined) {
      obj.seriesTokenUtxo = TransactionOutputAddress.toJSON(message.seriesTokenUtxo);
    }
    if (message.quantity !== undefined) {
      obj.quantity = Int128.toJSON(message.quantity);
    }
    if (message.permanentMetadata !== undefined) {
      obj.permanentMetadata = message.permanentMetadata;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AssetMintingStatement>, I>>(base?: I): AssetMintingStatement {
    return AssetMintingStatement.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AssetMintingStatement>, I>>(object: I): AssetMintingStatement {
    const message = createBaseAssetMintingStatement();
    message.groupTokenUtxo = (object.groupTokenUtxo !== undefined && object.groupTokenUtxo !== null)
      ? TransactionOutputAddress.fromPartial(object.groupTokenUtxo)
      : undefined;
    message.seriesTokenUtxo = (object.seriesTokenUtxo !== undefined && object.seriesTokenUtxo !== null)
      ? TransactionOutputAddress.fromPartial(object.seriesTokenUtxo)
      : undefined;
    message.quantity = (object.quantity !== undefined && object.quantity !== null)
      ? Int128.fromPartial(object.quantity)
      : undefined;
    message.permanentMetadata = object.permanentMetadata ?? undefined;
    return message;
  },
};

function createBaseAssetMergingStatement(): AssetMergingStatement {
  return { inputUtxos: [], outputIdx: 0 };
}

export const AssetMergingStatement = {
  encode(message: AssetMergingStatement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.inputUtxos) {
      TransactionOutputAddress.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.outputIdx !== 0) {
      writer.uint32(16).uint32(message.outputIdx);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetMergingStatement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetMergingStatement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inputUtxos.push(TransactionOutputAddress.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.outputIdx = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetMergingStatement {
    return {
      inputUtxos: globalThis.Array.isArray(object?.inputUtxos)
        ? object.inputUtxos.map((e: any) => TransactionOutputAddress.fromJSON(e))
        : [],
      outputIdx: isSet(object.outputIdx) ? globalThis.Number(object.outputIdx) : 0,
    };
  },

  toJSON(message: AssetMergingStatement): unknown {
    const obj: any = {};
    if (message.inputUtxos?.length) {
      obj.inputUtxos = message.inputUtxos.map((e) => TransactionOutputAddress.toJSON(e));
    }
    if (message.outputIdx !== 0) {
      obj.outputIdx = Math.round(message.outputIdx);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AssetMergingStatement>, I>>(base?: I): AssetMergingStatement {
    return AssetMergingStatement.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AssetMergingStatement>, I>>(object: I): AssetMergingStatement {
    const message = createBaseAssetMergingStatement();
    message.inputUtxos = object.inputUtxos?.map((e) => TransactionOutputAddress.fromPartial(e)) || [];
    message.outputIdx = object.outputIdx ?? 0;
    return message;
  },
};

function createBaseAssetSplittingStatement(): AssetSplittingStatement {
  return { outputIndexes: [], inputUtxo: undefined };
}

export const AssetSplittingStatement = {
  encode(message: AssetSplittingStatement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.outputIndexes) {
      UInt32Value.encode({ value: v!! }, writer.uint32(10).fork()).ldelim();
    }
    if (message.inputUtxo !== undefined) {
      TransactionOutputAddress.encode(message.inputUtxo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetSplittingStatement {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetSplittingStatement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.outputIndexes.push(UInt32Value.decode(reader, reader.uint32()).value);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.inputUtxo = TransactionOutputAddress.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AssetSplittingStatement {
    return {
      outputIndexes: globalThis.Array.isArray(object?.outputIndexes)
        ? object.outputIndexes.map((e: any) => Number(e))
        : [],
      inputUtxo: isSet(object.inputUtxo) ? TransactionOutputAddress.fromJSON(object.inputUtxo) : undefined,
    };
  },

  toJSON(message: AssetSplittingStatement): unknown {
    const obj: any = {};
    if (message.outputIndexes?.length) {
      obj.outputIndexes = message.outputIndexes;
    }
    if (message.inputUtxo !== undefined) {
      obj.inputUtxo = TransactionOutputAddress.toJSON(message.inputUtxo);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AssetSplittingStatement>, I>>(base?: I): AssetSplittingStatement {
    return AssetSplittingStatement.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AssetSplittingStatement>, I>>(object: I): AssetSplittingStatement {
    const message = createBaseAssetSplittingStatement();
    message.outputIndexes = object.outputIndexes?.map((e) => e) || [];
    message.inputUtxo = (object.inputUtxo !== undefined && object.inputUtxo !== null)
      ? TransactionOutputAddress.fromPartial(object.inputUtxo)
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
