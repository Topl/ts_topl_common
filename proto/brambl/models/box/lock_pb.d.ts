// package: co.topl.brambl.models.box
// file: brambl/models/box/lock.proto

import * as jspb from "google-protobuf";
import * as brambl_models_identifier_pb from "../../../brambl/models/identifier_pb";
import * as brambl_models_box_challenge_pb from "../../../brambl/models/box/challenge_pb";

export class Lock extends jspb.Message {
  hasPredicate(): boolean;
  clearPredicate(): void;
  getPredicate(): Lock.Predicate | undefined;
  setPredicate(value?: Lock.Predicate): void;

  hasImage(): boolean;
  clearImage(): void;
  getImage(): Lock.Image | undefined;
  setImage(value?: Lock.Image): void;

  hasCommitment(): boolean;
  clearCommitment(): void;
  getCommitment(): Lock.Commitment | undefined;
  setCommitment(value?: Lock.Commitment): void;

  getValueCase(): Lock.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Lock.AsObject;
  static toObject(includeInstance: boolean, msg: Lock): Lock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Lock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Lock;
  static deserializeBinaryFromReader(message: Lock, reader: jspb.BinaryReader): Lock;
}

export namespace Lock {
  export type AsObject = {
    predicate?: Lock.Predicate.AsObject,
    image?: Lock.Image.AsObject,
    commitment?: Lock.Commitment.AsObject,
  }

  export class Predicate extends jspb.Message {
    clearChallengesList(): void;
    getChallengesList(): Array<brambl_models_box_challenge_pb.Challenge>;
    setChallengesList(value: Array<brambl_models_box_challenge_pb.Challenge>): void;
    addChallenges(value?: brambl_models_box_challenge_pb.Challenge, index?: number): brambl_models_box_challenge_pb.Challenge;

    getThreshold(): number;
    setThreshold(value: number): void;

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
      challengesList: Array<brambl_models_box_challenge_pb.Challenge.AsObject>,
      threshold: number,
    }
  }

  export class Image extends jspb.Message {
    clearLeavesList(): void;
    getLeavesList(): Array<brambl_models_identifier_pb.LockId>;
    setLeavesList(value: Array<brambl_models_identifier_pb.LockId>): void;
    addLeaves(value?: brambl_models_identifier_pb.LockId, index?: number): brambl_models_identifier_pb.LockId;

    getThreshold(): number;
    setThreshold(value: number): void;

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
      leavesList: Array<brambl_models_identifier_pb.LockId.AsObject>,
      threshold: number,
    }
  }

  export class Commitment extends jspb.Message {
    hasRoot(): boolean;
    clearRoot(): void;
    getRoot(): brambl_models_identifier_pb.AccumulatorRootId | undefined;
    setRoot(value?: brambl_models_identifier_pb.AccumulatorRootId): void;

    getThreshold(): number;
    setThreshold(value: number): void;

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
      root?: brambl_models_identifier_pb.AccumulatorRootId.AsObject,
      threshold: number,
    }
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    PREDICATE = 1,
    IMAGE = 2,
    COMMITMENT = 3,
  }
}

