// package: co.topl.brambl.models.box
// file: brambl/models/box/challenge.proto

import * as jspb from "google-protobuf";
import * as brambl_models_address_pb from "../../../brambl/models/address_pb";
import * as quivr_models_proposition_pb from "../../../quivr/models/proposition_pb";

export class Challenge extends jspb.Message {
  hasRevealed(): boolean;
  clearRevealed(): void;
  getRevealed(): quivr_models_proposition_pb.Proposition | undefined;
  setRevealed(value?: quivr_models_proposition_pb.Proposition): void;

  hasPrevious(): boolean;
  clearPrevious(): void;
  getPrevious(): Challenge.PreviousProposition | undefined;
  setPrevious(value?: Challenge.PreviousProposition): void;

  getPropositionCase(): Challenge.PropositionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Challenge.AsObject;
  static toObject(includeInstance: boolean, msg: Challenge): Challenge.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Challenge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Challenge;
  static deserializeBinaryFromReader(message: Challenge, reader: jspb.BinaryReader): Challenge;
}

export namespace Challenge {
  export type AsObject = {
    revealed?: quivr_models_proposition_pb.Proposition.AsObject,
    previous?: Challenge.PreviousProposition.AsObject,
  }

  export class PreviousProposition extends jspb.Message {
    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): brambl_models_address_pb.TransactionInputAddress | undefined;
    setAddress(value?: brambl_models_address_pb.TransactionInputAddress): void;

    getIndex(): number;
    setIndex(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PreviousProposition.AsObject;
    static toObject(includeInstance: boolean, msg: PreviousProposition): PreviousProposition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PreviousProposition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PreviousProposition;
    static deserializeBinaryFromReader(message: PreviousProposition, reader: jspb.BinaryReader): PreviousProposition;
  }

  export namespace PreviousProposition {
    export type AsObject = {
      address?: brambl_models_address_pb.TransactionInputAddress.AsObject,
      index: number,
    }
  }

  export enum PropositionCase {
    PROPOSITION_NOT_SET = 0,
    REVEALED = 1,
    PREVIOUS = 2,
  }
}

