// package: co.topl.consensus.models
// file: consensus/models/eligibility_certificate.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../validate/validate_pb";

export class EligibilityCertificate extends jspb.Message {
  getVrfsig(): Uint8Array | string;
  getVrfsig_asU8(): Uint8Array;
  getVrfsig_asB64(): string;
  setVrfsig(value: Uint8Array | string): void;

  getVrfvk(): Uint8Array | string;
  getVrfvk_asU8(): Uint8Array;
  getVrfvk_asB64(): string;
  setVrfvk(value: Uint8Array | string): void;

  getThresholdevidence(): Uint8Array | string;
  getThresholdevidence_asU8(): Uint8Array;
  getThresholdevidence_asB64(): string;
  setThresholdevidence(value: Uint8Array | string): void;

  getEta(): Uint8Array | string;
  getEta_asU8(): Uint8Array;
  getEta_asB64(): string;
  setEta(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EligibilityCertificate.AsObject;
  static toObject(includeInstance: boolean, msg: EligibilityCertificate): EligibilityCertificate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EligibilityCertificate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EligibilityCertificate;
  static deserializeBinaryFromReader(message: EligibilityCertificate, reader: jspb.BinaryReader): EligibilityCertificate;
}

export namespace EligibilityCertificate {
  export type AsObject = {
    vrfsig: Uint8Array | string,
    vrfvk: Uint8Array | string,
    thresholdevidence: Uint8Array | string,
    eta: Uint8Array | string,
  }
}

