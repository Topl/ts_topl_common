/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { AssetMergingStatement, AssetMintingStatement, AssetSplittingStatement } from "../box/assets_statements";
import { Datum_GroupPolicy, Datum_IoTransaction, Datum_SeriesPolicy } from "../datum";
import { TransactionId } from "../identifier";
import { SpentTransactionOutput } from "./spent_transaction_output";
import { UnspentTransactionOutput } from "./unspent_transaction_output";

export const protobufPackage = "co.topl.brambl.models.transaction";

/** defines a transaction */
export interface IoTransaction {
  /**
   * The ID of _this_ transaction.  This value is optional and its contents are not included in the signable or identifiable data.  Clients which _can_ verify
   * this value should verify this value, but some clients may not be able to or need to, in which case this field acts as a convenience.
   */
  transactionId:
    | TransactionId
    | undefined;
  /** 0-to-many list of inputs */
  inputs: SpentTransactionOutput[];
  /** 0-to-many list of outputs */
  outputs: UnspentTransactionOutput[];
  /** Datum */
  datum:
    | Datum_IoTransaction
    | undefined;
  /** 0-to-many list of group Policy */
  groupPolicies: Datum_GroupPolicy[];
  /** 0-to-many list of seriesPolicy */
  seriesPolicies: Datum_SeriesPolicy[];
  /** 0-to-many list of minting asset statements */
  mintingStatements: AssetMintingStatement[];
  /** 0-to-many list of merging asset statements */
  mergingStatements: AssetMergingStatement[];
  /** 0-to-many list of splitting asset statements */
  splittingStatements: AssetSplittingStatement[];
}

function createBaseIoTransaction(): IoTransaction {
  return {
    transactionId: undefined,
    inputs: [],
    outputs: [],
    datum: undefined,
    groupPolicies: [],
    seriesPolicies: [],
    mintingStatements: [],
    mergingStatements: [],
    splittingStatements: [],
  };
}

export const IoTransaction = {
  encode(message: IoTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionId !== undefined) {
      TransactionId.encode(message.transactionId, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.inputs) {
      SpentTransactionOutput.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.outputs) {
      UnspentTransactionOutput.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.datum !== undefined) {
      Datum_IoTransaction.encode(message.datum, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.groupPolicies) {
      Datum_GroupPolicy.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.seriesPolicies) {
      Datum_SeriesPolicy.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.mintingStatements) {
      AssetMintingStatement.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.mergingStatements) {
      AssetMergingStatement.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.splittingStatements) {
      AssetSplittingStatement.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IoTransaction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIoTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.transactionId = TransactionId.decode(reader, reader.uint32());
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inputs.push(SpentTransactionOutput.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.outputs.push(UnspentTransactionOutput.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.datum = Datum_IoTransaction.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.groupPolicies.push(Datum_GroupPolicy.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.seriesPolicies.push(Datum_SeriesPolicy.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.mintingStatements.push(AssetMintingStatement.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.mergingStatements.push(AssetMergingStatement.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.splittingStatements.push(AssetSplittingStatement.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IoTransaction {
    return {
      transactionId: isSet(object.transactionId) ? TransactionId.fromJSON(object.transactionId) : undefined,
      inputs: globalThis.Array.isArray(object?.inputs)
        ? object.inputs.map((e: any) => SpentTransactionOutput.fromJSON(e))
        : [],
      outputs: globalThis.Array.isArray(object?.outputs)
        ? object.outputs.map((e: any) => UnspentTransactionOutput.fromJSON(e))
        : [],
      datum: isSet(object.datum) ? Datum_IoTransaction.fromJSON(object.datum) : undefined,
      groupPolicies: globalThis.Array.isArray(object?.groupPolicies)
        ? object.groupPolicies.map((e: any) => Datum_GroupPolicy.fromJSON(e))
        : [],
      seriesPolicies: globalThis.Array.isArray(object?.seriesPolicies)
        ? object.seriesPolicies.map((e: any) => Datum_SeriesPolicy.fromJSON(e))
        : [],
      mintingStatements: globalThis.Array.isArray(object?.mintingStatements)
        ? object.mintingStatements.map((e: any) => AssetMintingStatement.fromJSON(e))
        : [],
      mergingStatements: globalThis.Array.isArray(object?.mergingStatements)
        ? object.mergingStatements.map((e: any) => AssetMergingStatement.fromJSON(e))
        : [],
      splittingStatements: globalThis.Array.isArray(object?.splittingStatements)
        ? object.splittingStatements.map((e: any) => AssetSplittingStatement.fromJSON(e))
        : [],
    };
  },

  toJSON(message: IoTransaction): unknown {
    const obj: any = {};
    if (message.transactionId !== undefined) {
      obj.transactionId = TransactionId.toJSON(message.transactionId);
    }
    if (message.inputs?.length) {
      obj.inputs = message.inputs.map((e) => SpentTransactionOutput.toJSON(e));
    }
    if (message.outputs?.length) {
      obj.outputs = message.outputs.map((e) => UnspentTransactionOutput.toJSON(e));
    }
    if (message.datum !== undefined) {
      obj.datum = Datum_IoTransaction.toJSON(message.datum);
    }
    if (message.groupPolicies?.length) {
      obj.groupPolicies = message.groupPolicies.map((e) => Datum_GroupPolicy.toJSON(e));
    }
    if (message.seriesPolicies?.length) {
      obj.seriesPolicies = message.seriesPolicies.map((e) => Datum_SeriesPolicy.toJSON(e));
    }
    if (message.mintingStatements?.length) {
      obj.mintingStatements = message.mintingStatements.map((e) => AssetMintingStatement.toJSON(e));
    }
    if (message.mergingStatements?.length) {
      obj.mergingStatements = message.mergingStatements.map((e) => AssetMergingStatement.toJSON(e));
    }
    if (message.splittingStatements?.length) {
      obj.splittingStatements = message.splittingStatements.map((e) => AssetSplittingStatement.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IoTransaction>, I>>(base?: I): IoTransaction {
    return IoTransaction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IoTransaction>, I>>(object: I): IoTransaction {
    const message = createBaseIoTransaction();
    message.transactionId = (object.transactionId !== undefined && object.transactionId !== null)
      ? TransactionId.fromPartial(object.transactionId)
      : undefined;
    message.inputs = object.inputs?.map((e) => SpentTransactionOutput.fromPartial(e)) || [];
    message.outputs = object.outputs?.map((e) => UnspentTransactionOutput.fromPartial(e)) || [];
    message.datum = (object.datum !== undefined && object.datum !== null)
      ? Datum_IoTransaction.fromPartial(object.datum)
      : undefined;
    message.groupPolicies = object.groupPolicies?.map((e) => Datum_GroupPolicy.fromPartial(e)) || [];
    message.seriesPolicies = object.seriesPolicies?.map((e) => Datum_SeriesPolicy.fromPartial(e)) || [];
    message.mintingStatements = object.mintingStatements?.map((e) => AssetMintingStatement.fromPartial(e)) || [];
    message.mergingStatements = object.mergingStatements?.map((e) => AssetMergingStatement.fromPartial(e)) || [];
    message.splittingStatements = object.splittingStatements?.map((e) => AssetSplittingStatement.fromPartial(e)) || [];
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
