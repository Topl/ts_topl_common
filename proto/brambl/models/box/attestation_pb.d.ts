// package: co.topl.brambl.models.box
// file: brambl/models/box/attestation.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../../validate/validate_pb";
import * as brambl_models_box_lock_pb from "../../../brambl/models/box/lock_pb";
import * as brambl_models_box_challenge_pb from "../../../brambl/models/box/challenge_pb";
import * as quivr_models_proof_pb from "../../../quivr/models/proof_pb";
import * as quivr_models_shared_pb from "../../../quivr/models/shared_pb";

export class Attestation extends jspb.Message {
  hasPredicate(): boolean;
  clearPredicate(): void;
  getPredicate(): Attestation.Predicate | undefined;
  setPredicate(value?: Attestation.Predicate): void;

  hasImage(): boolean;
  clearImage(): void;
  getImage(): Attestation.Image | undefined;
  setImage(value?: Attestation.Image): void;

  hasCommitment(): boolean;
  clearCommitment(): void;
  getCommitment(): Attestation.Commitment | undefined;
  setCommitment(value?: Attestation.Commitment): void;

  getValueCase(): Attestation.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Attestation.AsObject;
  static toObject(includeInstance: boolean, msg: Attestation): Attestation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Attestation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Attestation;
  static deserializeBinaryFromReader(message: Attestation, reader: jspb.BinaryReader): Attestation;
}

export namespace Attestation {
  export type AsObject = {
    predicate?: Attestation.Predicate.AsObject,
    image?: Attestation.Image.AsObject,
    commitment?: Attestation.Commitment.AsObject,
  }

  export class Predicate extends jspb.Message {
    hasLock(): boolean;
    clearLock(): void;
    getLock(): brambl_models_box_lock_pb.Lock.Predicate | undefined;
    setLock(value?: brambl_models_box_lock_pb.Lock.Predicate): void;

    clearResponsesList(): void;
    getResponsesList(): Array<quivr_models_proof_pb.Proof>;
    setResponsesList(value: Array<quivr_models_proof_pb.Proof>): void;
    addResponses(value?: quivr_models_proof_pb.Proof, index?: number): quivr_models_proof_pb.Proof;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Predicate.AsObject;
    static toObject(includeInstance: boolean, msg: Predicate): Predicate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Predicate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Predicate;
    static deserializeBinaryFromReader(message: Predicate, reader: jspb.BinaryReader): Predicate;
  }

  export namespace Predicate {
    export type AsObject = {
      lock?: brambl_models_box_lock_pb.Lock.Predicate.AsObject,
      responsesList: Array<quivr_models_proof_pb.Proof.AsObject>,
    }
  }

  export class Image extends jspb.Message {
    hasLock(): boolean;
    clearLock(): void;
    getLock(): brambl_models_box_lock_pb.Lock.Image | undefined;
    setLock(value?: brambl_models_box_lock_pb.Lock.Image): void;

    clearKnownList(): void;
    getKnownList(): Array<brambl_models_box_challenge_pb.Challenge>;
    setKnownList(value: Array<brambl_models_box_challenge_pb.Challenge>): void;
    addKnown(value?: brambl_models_box_challenge_pb.Challenge, index?: number): brambl_models_box_challenge_pb.Challenge;

    clearResponsesList(): void;
    getResponsesList(): Array<quivr_models_proof_pb.Proof>;
    setResponsesList(value: Array<quivr_models_proof_pb.Proof>): void;
    addResponses(value?: quivr_models_proof_pb.Proof, index?: number): quivr_models_proof_pb.Proof;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Image.AsObject;
    static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Image;
    static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
  }

  export namespace Image {
    export type AsObject = {
      lock?: brambl_models_box_lock_pb.Lock.Image.AsObject,
      knownList: Array<brambl_models_box_challenge_pb.Challenge.AsObject>,
      responsesList: Array<quivr_models_proof_pb.Proof.AsObject>,
    }
  }

  export class Commitment extends jspb.Message {
    hasLock(): boolean;
    clearLock(): void;
    getLock(): brambl_models_box_lock_pb.Lock.Commitment | undefined;
    setLock(value?: brambl_models_box_lock_pb.Lock.Commitment): void;

    clearKnownList(): void;
    getKnownList(): Array<brambl_models_box_challenge_pb.Challenge>;
    setKnownList(value: Array<brambl_models_box_challenge_pb.Challenge>): void;
    addKnown(value?: brambl_models_box_challenge_pb.Challenge, index?: number): brambl_models_box_challenge_pb.Challenge;

    clearWitnessList(): void;
    getWitnessList(): Array<quivr_models_shared_pb.Witness>;
    setWitnessList(value: Array<quivr_models_shared_pb.Witness>): void;
    addWitness(value?: quivr_models_shared_pb.Witness, index?: number): quivr_models_shared_pb.Witness;

    clearResponsesList(): void;
    getResponsesList(): Array<quivr_models_proof_pb.Proof>;
    setResponsesList(value: Array<quivr_models_proof_pb.Proof>): void;
    addResponses(value?: quivr_models_proof_pb.Proof, index?: number): quivr_models_proof_pb.Proof;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Commitment.AsObject;
    static toObject(includeInstance: boolean, msg: Commitment): Commitment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Commitment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Commitment;
    static deserializeBinaryFromReader(message: Commitment, reader: jspb.BinaryReader): Commitment;
  }

  export namespace Commitment {
    export type AsObject = {
      lock?: brambl_models_box_lock_pb.Lock.Commitment.AsObject,
      knownList: Array<brambl_models_box_challenge_pb.Challenge.AsObject>,
      witnessList: Array<quivr_models_shared_pb.Witness.AsObject>,
      responsesList: Array<quivr_models_proof_pb.Proof.AsObject>,
    }
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    PREDICATE = 1,
    IMAGE = 2,
    COMMITMENT = 3,
  }
}

