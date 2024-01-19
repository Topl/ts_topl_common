// package: co.topl.brambl.models.transaction
// file: brambl/models/transaction/unspent_transaction_output.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../../validate/validate_pb";
import * as brambl_models_address_pb from "../../../brambl/models/address_pb";
import * as brambl_models_box_value_pb from "../../../brambl/models/box/value_pb";

export class UnspentTransactionOutput extends jspb.Message {
  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): brambl_models_address_pb.LockAddress | undefined;
  setAddress(value?: brambl_models_address_pb.LockAddress): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): brambl_models_box_value_pb.Value | undefined;
  setValue(value?: brambl_models_box_value_pb.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnspentTransactionOutput.AsObject;
  static toObject(includeInstance: boolean, msg: UnspentTransactionOutput): UnspentTransactionOutput.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnspentTransactionOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnspentTransactionOutput;
  static deserializeBinaryFromReader(message: UnspentTransactionOutput, reader: jspb.BinaryReader): UnspentTransactionOutput;
}

export namespace UnspentTransactionOutput {
  export type AsObject = {
    address?: brambl_models_address_pb.LockAddress.AsObject,
    value?: brambl_models_box_value_pb.Value.AsObject,
  }
}

