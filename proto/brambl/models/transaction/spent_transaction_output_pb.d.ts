// package: co.topl.brambl.models.transaction
// file: brambl/models/transaction/spent_transaction_output.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../../validate/validate_pb";
import * as brambl_models_address_pb from "../../../brambl/models/address_pb";
import * as brambl_models_box_value_pb from "../../../brambl/models/box/value_pb";
import * as brambl_models_box_attestation_pb from "../../../brambl/models/box/attestation_pb";

export class SpentTransactionOutput extends jspb.Message {
  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): brambl_models_address_pb.TransactionOutputAddress | undefined;
  setAddress(value?: brambl_models_address_pb.TransactionOutputAddress): void;

  hasAttestation(): boolean;
  clearAttestation(): void;
  getAttestation(): brambl_models_box_attestation_pb.Attestation | undefined;
  setAttestation(value?: brambl_models_box_attestation_pb.Attestation): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): brambl_models_box_value_pb.Value | undefined;
  setValue(value?: brambl_models_box_value_pb.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpentTransactionOutput.AsObject;
  static toObject(includeInstance: boolean, msg: SpentTransactionOutput): SpentTransactionOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpentTransactionOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpentTransactionOutput;
  static deserializeBinaryFromReader(message: SpentTransactionOutput, reader: jspb.BinaryReader): SpentTransactionOutput;
}

export namespace SpentTransactionOutput {
  export type AsObject = {
    address?: brambl_models_address_pb.TransactionOutputAddress.AsObject,
    attestation?: brambl_models_box_attestation_pb.Attestation.AsObject,
    value?: brambl_models_box_value_pb.Value.AsObject,
  }
}

