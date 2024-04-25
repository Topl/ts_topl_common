// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file brambl/models/transaction/io_transaction.proto (package co.topl.brambl.models.transaction, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { TransactionId } from "../identifier_pb.js";
import { SpentTransactionOutput } from "./spent_transaction_output_pb.js";
import { UnspentTransactionOutput } from "./unspent_transaction_output_pb.js";
import { Datum_GroupPolicy, Datum_IoTransaction, Datum_SeriesPolicy } from "../datum_pb.js";
import { AssetMergingStatement, AssetMintingStatement, AssetSplittingStatement } from "../box/assets_statements_pb.js";

/**
 * defines a transaction
 *
 * @generated from message co.topl.brambl.models.transaction.IoTransaction
 */
export class IoTransaction extends Message<IoTransaction> {
  /**
   * The ID of _this_ transaction.  This value is optional and its contents are not included in the signable or identifiable data.  Clients which _can_ verify
   * this value should verify this value, but some clients may not be able to or need to, in which case this field acts as a convenience.
   *
   * @generated from field: co.topl.brambl.models.TransactionId transactionId = 4;
   */
  transactionId?: TransactionId;

  /**
   * 0-to-many list of inputs
   *
   * @generated from field: repeated co.topl.brambl.models.transaction.SpentTransactionOutput inputs = 1;
   */
  inputs: SpentTransactionOutput[] = [];

  /**
   * 0-to-many list of outputs
   *
   * @generated from field: repeated co.topl.brambl.models.transaction.UnspentTransactionOutput outputs = 2;
   */
  outputs: UnspentTransactionOutput[] = [];

  /**
   * Datum
   *
   * @generated from field: co.topl.brambl.models.Datum.IoTransaction datum = 3;
   */
  datum?: Datum_IoTransaction;

  /**
   * 0-to-many list of group Policy
   *
   * @generated from field: repeated co.topl.brambl.models.Datum.GroupPolicy groupPolicies = 5;
   */
  groupPolicies: Datum_GroupPolicy[] = [];

  /**
   * 0-to-many list of seriesPolicy
   *
   * @generated from field: repeated co.topl.brambl.models.Datum.SeriesPolicy seriesPolicies = 6;
   */
  seriesPolicies: Datum_SeriesPolicy[] = [];

  /**
   * 0-to-many list of minting asset statements
   *
   * @generated from field: repeated co.topl.brambl.models.box.AssetMintingStatement mintingStatements = 7;
   */
  mintingStatements: AssetMintingStatement[] = [];

  /**
   * 0-to-many list of merging asset statements
   *
   * @generated from field: repeated co.topl.brambl.models.box.AssetMergingStatement mergingStatements = 8;
   */
  mergingStatements: AssetMergingStatement[] = [];

  /**
   * 0-to-many list of splitting asset statements
   *
   * @generated from field: repeated co.topl.brambl.models.box.AssetSplittingStatement splittingStatements = 9;
   */
  splittingStatements: AssetSplittingStatement[] = [];

  constructor(data?: PartialMessage<IoTransaction>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "co.topl.brambl.models.transaction.IoTransaction";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 4, name: "transactionId", kind: "message", T: TransactionId },
    { no: 1, name: "inputs", kind: "message", T: SpentTransactionOutput, repeated: true },
    { no: 2, name: "outputs", kind: "message", T: UnspentTransactionOutput, repeated: true },
    { no: 3, name: "datum", kind: "message", T: Datum_IoTransaction },
    { no: 5, name: "groupPolicies", kind: "message", T: Datum_GroupPolicy, repeated: true },
    { no: 6, name: "seriesPolicies", kind: "message", T: Datum_SeriesPolicy, repeated: true },
    { no: 7, name: "mintingStatements", kind: "message", T: AssetMintingStatement, repeated: true },
    { no: 8, name: "mergingStatements", kind: "message", T: AssetMergingStatement, repeated: true },
    { no: 9, name: "splittingStatements", kind: "message", T: AssetSplittingStatement, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IoTransaction {
    return new IoTransaction().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IoTransaction {
    return new IoTransaction().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IoTransaction {
    return new IoTransaction().fromJsonString(jsonString, options);
  }

  static equals(a: IoTransaction | PlainMessage<IoTransaction> | undefined, b: IoTransaction | PlainMessage<IoTransaction> | undefined): boolean {
    return proto3.util.equals(IoTransaction, a, b);
  }
}
