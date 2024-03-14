// package: co.topl.consensus.models
// file: consensus/models/operational_certificate.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../validate/validate_pb";

export class OperationalCertificate extends jspb.Message {
  hasParentvk(): boolean;
  clearParentvk(): void;
  getParentvk(): VerificationKeyKesProduct | undefined;
  setParentvk(value?: VerificationKeyKesProduct): void;

  hasParentsignature(): boolean;
  clearParentsignature(): void;
  getParentsignature(): SignatureKesProduct | undefined;
  setParentsignature(value?: SignatureKesProduct): void;

  getChildvk(): Uint8Array | string;
  getChildvk_asU8(): Uint8Array;
  getChildvk_asB64(): string;
  setChildvk(value: Uint8Array | string): void;

  getChildsignature(): Uint8Array | string;
  getChildsignature_asU8(): Uint8Array;
  getChildsignature_asB64(): string;
  setChildsignature(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationalCertificate.AsObject;
  static toObject(includeInstance: boolean, msg: OperationalCertificate): OperationalCertificate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationalCertificate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationalCertificate;
  static deserializeBinaryFromReader(message: OperationalCertificate, reader: jspb.BinaryReader): OperationalCertificate;
}

export namespace OperationalCertificate {
  export type AsObject = {
    parentvk?: VerificationKeyKesProduct.AsObject,
    parentsignature?: SignatureKesProduct.AsObject,
    childvk: Uint8Array | string,
    childsignature: Uint8Array | string,
  }
}

export class VerificationKeyKesProduct extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  getStep(): number;
  setStep(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerificationKeyKesProduct.AsObject;
  static toObject(includeInstance: boolean, msg: VerificationKeyKesProduct): VerificationKeyKesProduct.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerificationKeyKesProduct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerificationKeyKesProduct;
  static deserializeBinaryFromReader(message: VerificationKeyKesProduct, reader: jspb.BinaryReader): VerificationKeyKesProduct;
}

export namespace VerificationKeyKesProduct {
  export type AsObject = {
    value: Uint8Array | string,
    step: number,
  }
}

export class SignatureKesSum extends jspb.Message {
  getVerificationkey(): Uint8Array | string;
  getVerificationkey_asU8(): Uint8Array;
  getVerificationkey_asB64(): string;
  setVerificationkey(value: Uint8Array | string): void;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): void;

  clearWitnessList(): void;
  getWitnessList(): Array<Uint8Array | string>;
  getWitnessList_asU8(): Array<Uint8Array>;
  getWitnessList_asB64(): Array<string>;
  setWitnessList(value: Array<Uint8Array | string>): void;
  addWitness(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignatureKesSum.AsObject;
  static toObject(includeInstance: boolean, msg: SignatureKesSum): SignatureKesSum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignatureKesSum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignatureKesSum;
  static deserializeBinaryFromReader(message: SignatureKesSum, reader: jspb.BinaryReader): SignatureKesSum;
}

export namespace SignatureKesSum {
  export type AsObject = {
    verificationkey: Uint8Array | string,
    signature: Uint8Array | string,
    witnessList: Array<Uint8Array | string>,
  }
}

export class SignatureKesProduct extends jspb.Message {
  hasSupersignature(): boolean;
  clearSupersignature(): void;
  getSupersignature(): SignatureKesSum | undefined;
  setSupersignature(value?: SignatureKesSum): void;

  hasSubsignature(): boolean;
  clearSubsignature(): void;
  getSubsignature(): SignatureKesSum | undefined;
  setSubsignature(value?: SignatureKesSum): void;

  getSubroot(): Uint8Array | string;
  getSubroot_asU8(): Uint8Array;
  getSubroot_asB64(): string;
  setSubroot(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignatureKesProduct.AsObject;
  static toObject(includeInstance: boolean, msg: SignatureKesProduct): SignatureKesProduct.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignatureKesProduct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignatureKesProduct;
  static deserializeBinaryFromReader(message: SignatureKesProduct, reader: jspb.BinaryReader): SignatureKesProduct;
}

export namespace SignatureKesProduct {
  export type AsObject = {
    supersignature?: SignatureKesSum.AsObject,
    subsignature?: SignatureKesSum.AsObject,
    subroot: Uint8Array | string,
  }
}

