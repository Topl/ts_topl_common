// package: co.topl.brambl.models.transaction
// file: brambl/models/transaction/io_transaction.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../../validate/validate_pb";
import * as brambl_models_datum_pb from "../../../brambl/models/datum_pb";
import * as brambl_models_identifier_pb from "../../../brambl/models/identifier_pb";
import * as brambl_models_transaction_spent_transaction_output_pb from "../../../brambl/models/transaction/spent_transaction_output_pb";
import * as brambl_models_transaction_unspent_transaction_output_pb from "../../../brambl/models/transaction/unspent_transaction_output_pb";
import * as brambl_models_box_assets_statements_pb from "../../../brambl/models/box/assets_statements_pb";

export class IoTransaction extends jspb.Message {
  hasTransactionid(): boolean;
  clearTransactionid(): void;
  getTransactionid(): brambl_models_identifier_pb.TransactionId | undefined;
  setTransactionid(value?: brambl_models_identifier_pb.TransactionId): void;

  clearInputsList(): void;
  getInputsList(): Array<brambl_models_transaction_spent_transaction_output_pb.SpentTransactionOutput>;
  setInputsList(value: Array<brambl_models_transaction_spent_transaction_output_pb.SpentTransactionOutput>): void;
  addInputs(value?: brambl_models_transaction_spent_transaction_output_pb.SpentTransactionOutput, index?: number): brambl_models_transaction_spent_transaction_output_pb.SpentTransactionOutput;

  clearOutputsList(): void;
  getOutputsList(): Array<brambl_models_transaction_unspent_transaction_output_pb.UnspentTransactionOutput>;
  setOutputsList(value: Array<brambl_models_transaction_unspent_transaction_output_pb.UnspentTransactionOutput>): void;
  addOutputs(value?: brambl_models_transaction_unspent_transaction_output_pb.UnspentTransactionOutput, index?: number): brambl_models_transaction_unspent_transaction_output_pb.UnspentTransactionOutput;

  hasDatum(): boolean;
  clearDatum(): void;
  getDatum(): brambl_models_datum_pb.Datum.IoTransaction | undefined;
  setDatum(value?: brambl_models_datum_pb.Datum.IoTransaction): void;

  clearGrouppoliciesList(): void;
  getGrouppoliciesList(): Array<brambl_models_datum_pb.Datum.GroupPolicy>;
  setGrouppoliciesList(value: Array<brambl_models_datum_pb.Datum.GroupPolicy>): void;
  addGrouppolicies(value?: brambl_models_datum_pb.Datum.GroupPolicy, index?: number): brambl_models_datum_pb.Datum.GroupPolicy;

  clearSeriespoliciesList(): void;
  getSeriespoliciesList(): Array<brambl_models_datum_pb.Datum.SeriesPolicy>;
  setSeriespoliciesList(value: Array<brambl_models_datum_pb.Datum.SeriesPolicy>): void;
  addSeriespolicies(value?: brambl_models_datum_pb.Datum.SeriesPolicy, index?: number): brambl_models_datum_pb.Datum.SeriesPolicy;

  clearMintingstatementsList(): void;
  getMintingstatementsList(): Array<brambl_models_box_assets_statements_pb.AssetMintingStatement>;
  setMintingstatementsList(value: Array<brambl_models_box_assets_statements_pb.AssetMintingStatement>): void;
  addMintingstatements(value?: brambl_models_box_assets_statements_pb.AssetMintingStatement, index?: number): brambl_models_box_assets_statements_pb.AssetMintingStatement;

  clearMergingstatementsList(): void;
  getMergingstatementsList(): Array<brambl_models_box_assets_statements_pb.AssetMergingStatement>;
  setMergingstatementsList(value: Array<brambl_models_box_assets_statements_pb.AssetMergingStatement>): void;
  addMergingstatements(value?: brambl_models_box_assets_statements_pb.AssetMergingStatement, index?: number): brambl_models_box_assets_statements_pb.AssetMergingStatement;

  clearSplittingstatementsList(): void;
  getSplittingstatementsList(): Array<brambl_models_box_assets_statements_pb.AssetSplittingStatement>;
  setSplittingstatementsList(value: Array<brambl_models_box_assets_statements_pb.AssetSplittingStatement>): void;
  addSplittingstatements(value?: brambl_models_box_assets_statements_pb.AssetSplittingStatement, index?: number): brambl_models_box_assets_statements_pb.AssetSplittingStatement;

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
    transactionid?: brambl_models_identifier_pb.TransactionId.AsObject,
    inputsList: Array<brambl_models_transaction_spent_transaction_output_pb.SpentTransactionOutput.AsObject>,
    outputsList: Array<brambl_models_transaction_unspent_transaction_output_pb.UnspentTransactionOutput.AsObject>,
    datum?: brambl_models_datum_pb.Datum.IoTransaction.AsObject,
    grouppoliciesList: Array<brambl_models_datum_pb.Datum.GroupPolicy.AsObject>,
    seriespoliciesList: Array<brambl_models_datum_pb.Datum.SeriesPolicy.AsObject>,
    mintingstatementsList: Array<brambl_models_box_assets_statements_pb.AssetMintingStatement.AsObject>,
    mergingstatementsList: Array<brambl_models_box_assets_statements_pb.AssetMergingStatement.AsObject>,
    splittingstatementsList: Array<brambl_models_box_assets_statements_pb.AssetSplittingStatement.AsObject>,
  }
}

