// package: co.topl.consensus.models
// file: consensus/models/staking.proto

import * as jspb from "google-protobuf";
import * as quivr_models_shared_pb from "../../quivr/models/shared_pb";
import * as consensus_models_operational_certificate_pb from "../../consensus/models/operational_certificate_pb";
import * as validate_validate_pb from "../../validate/validate_pb";

export class StakingAddress extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StakingAddress.AsObject;
  static toObject(includeInstance: boolean, msg: StakingAddress): StakingAddress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StakingAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StakingAddress;
  static deserializeBinaryFromReader(message: StakingAddress, reader: jspb.BinaryReader): StakingAddress;
}

export namespace StakingAddress {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class StakingRegistration extends jspb.Message {
  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): StakingAddress | undefined;
  setAddress(value?: StakingAddress): void;

  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): consensus_models_operational_certificate_pb.SignatureKesProduct | undefined;
  setSignature(value?: consensus_models_operational_certificate_pb.SignatureKesProduct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StakingRegistration.AsObject;
  static toObject(includeInstance: boolean, msg: StakingRegistration): StakingRegistration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StakingRegistration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StakingRegistration;
  static deserializeBinaryFromReader(message: StakingRegistration, reader: jspb.BinaryReader): StakingRegistration;
}

export namespace StakingRegistration {
  export type AsObject = {
    address?: StakingAddress.AsObject,
    signature?: consensus_models_operational_certificate_pb.SignatureKesProduct.AsObject,
  }
}

export class ActiveStaker extends jspb.Message {
  hasRegistration(): boolean;
  clearRegistration(): void;
  getRegistration(): StakingRegistration | undefined;
  setRegistration(value?: StakingRegistration): void;

  hasQuantity(): boolean;
  clearQuantity(): void;
  getQuantity(): quivr_models_shared_pb.Int128 | undefined;
  setQuantity(value?: quivr_models_shared_pb.Int128): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActiveStaker.AsObject;
  static toObject(includeInstance: boolean, msg: ActiveStaker): ActiveStaker.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActiveStaker, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActiveStaker;
  static deserializeBinaryFromReader(message: ActiveStaker, reader: jspb.BinaryReader): ActiveStaker;
}

export namespace ActiveStaker {
  export type AsObject = {
    registration?: StakingRegistration.AsObject,
    quantity?: quivr_models_shared_pb.Int128.AsObject,
  }
}

