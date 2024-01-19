// package: quivr.models
// file: quivr/models/proof.proto

import * as jspb from "google-protobuf";
import * as quivr_models_shared_pb from "../../quivr/models/shared_pb";
import * as validate_validate_pb from "../../validate/validate_pb";

export class Proof extends jspb.Message {
  hasLocked(): boolean;
  clearLocked(): void;
  getLocked(): Proof.Locked | undefined;
  setLocked(value?: Proof.Locked): void;

  hasDigest(): boolean;
  clearDigest(): void;
  getDigest(): Proof.Digest | undefined;
  setDigest(value?: Proof.Digest): void;

  hasDigitalsignature(): boolean;
  clearDigitalsignature(): void;
  getDigitalsignature(): Proof.DigitalSignature | undefined;
  setDigitalsignature(value?: Proof.DigitalSignature): void;

  hasHeightrange(): boolean;
  clearHeightrange(): void;
  getHeightrange(): Proof.HeightRange | undefined;
  setHeightrange(value?: Proof.HeightRange): void;

  hasTickrange(): boolean;
  clearTickrange(): void;
  getTickrange(): Proof.TickRange | undefined;
  setTickrange(value?: Proof.TickRange): void;

  hasExactmatch(): boolean;
  clearExactmatch(): void;
  getExactmatch(): Proof.ExactMatch | undefined;
  setExactmatch(value?: Proof.ExactMatch): void;

  hasLessthan(): boolean;
  clearLessthan(): void;
  getLessthan(): Proof.LessThan | undefined;
  setLessthan(value?: Proof.LessThan): void;

  hasGreaterthan(): boolean;
  clearGreaterthan(): void;
  getGreaterthan(): Proof.GreaterThan | undefined;
  setGreaterthan(value?: Proof.GreaterThan): void;

  hasEqualto(): boolean;
  clearEqualto(): void;
  getEqualto(): Proof.EqualTo | undefined;
  setEqualto(value?: Proof.EqualTo): void;

  hasThreshold(): boolean;
  clearThreshold(): void;
  getThreshold(): Proof.Threshold | undefined;
  setThreshold(value?: Proof.Threshold): void;

  hasNot(): boolean;
  clearNot(): void;
  getNot(): Proof.Not | undefined;
  setNot(value?: Proof.Not): void;

  hasAnd(): boolean;
  clearAnd(): void;
  getAnd(): Proof.And | undefined;
  setAnd(value?: Proof.And): void;

  hasOr(): boolean;
  clearOr(): void;
  getOr(): Proof.Or | undefined;
  setOr(value?: Proof.Or): void;

  getValueCase(): Proof.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Proof.AsObject;
  static toObject(includeInstance: boolean, msg: Proof): Proof.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Proof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Proof;
  static deserializeBinaryFromReader(message: Proof, reader: jspb.BinaryReader): Proof;
}

export namespace Proof {
  export type AsObject = {
    locked?: Proof.Locked.AsObject,
    digest?: Proof.Digest.AsObject,
    digitalsignature?: Proof.DigitalSignature.AsObject,
    heightrange?: Proof.HeightRange.AsObject,
    tickrange?: Proof.TickRange.AsObject,
    exactmatch?: Proof.ExactMatch.AsObject,
    lessthan?: Proof.LessThan.AsObject,
    greaterthan?: Proof.GreaterThan.AsObject,
    equalto?: Proof.EqualTo.AsObject,
    threshold?: Proof.Threshold.AsObject,
    not?: Proof.Not.AsObject,
    and?: Proof.And.AsObject,
    or?: Proof.Or.AsObject,
  }

  export class Locked extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Locked.AsObject;
    static toObject(includeInstance: boolean, msg: Locked): Locked.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Locked, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Locked;
    static deserializeBinaryFromReader(message: Locked, reader: jspb.BinaryReader): Locked;
  }

  export namespace Locked {
    export type AsObject = {
    }
  }

  export class Digest extends jspb.Message {
    hasTransactionbind(): boolean;
    clearTransactionbind(): void;
    getTransactionbind(): quivr_models_shared_pb.TxBind | undefined;
    setTransactionbind(value?: quivr_models_shared_pb.TxBind): void;

    hasPreimage(): boolean;
    clearPreimage(): void;
    getPreimage(): quivr_models_shared_pb.Preimage | undefined;
    setPreimage(value?: quivr_models_shared_pb.Preimage): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Digest.AsObject;
    static toObject(includeInstance: boolean, msg: Digest): Digest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Digest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Digest;
    static deserializeBinaryFromReader(message: Digest, reader: jspb.BinaryReader): Digest;
  }

  export namespace Digest {
    export type AsObject = {
      transactionbind?: quivr_models_shared_pb.TxBind.AsObject,
      preimage?: quivr_models_shared_pb.Preimage.AsObject,
    }
  }

  export class DigitalSignature extends jspb.Message {
    hasTransactionbind(): boolean;
    clearTransactionbind(): void;
    getTransactionbind(): quivr_models_shared_pb.TxBind | undefined;
    setTransactionbind(value?: quivr_models_shared_pb.TxBind): void;

    hasWitness(): boolean;
    clearWitness(): void;
    getWitness(): quivr_models_shared_pb.Witness | undefined;
    setWitness(value?: quivr_models_shared_pb.Witness): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DigitalSignature.AsObject;
    static toObject(includeInstance: boolean, msg: DigitalSignature): DigitalSignature.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DigitalSignature, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DigitalSignature;
    static deserializeBinaryFromReader(message: DigitalSignature, reader: jspb.BinaryReader): DigitalSignature;
  }

  export namespace DigitalSignature {
    export type AsObject = {
      transactionbind?: quivr_models_shared_pb.TxBind.AsObject,
      witness?: quivr_models_shared_pb.Witness.AsObject,
    }
  }

  export class HeightRange extends jspb.Message {
    hasTransactionbind(): boolean;
    clearTransactionbind(): void;
    getTransactionbind(): quivr_models_shared_pb.TxBind | undefined;
    setTransactionbind(value?: quivr_models_shared_pb.TxBind): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HeightRange.AsObject;
    static toObject(includeInstance: boolean, msg: HeightRange): HeightRange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HeightRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HeightRange;
    static deserializeBinaryFromReader(message: HeightRange, reader: jspb.BinaryReader): HeightRange;
  }

  export namespace HeightRange {
    export type AsObject = {
      transactionbind?: quivr_models_shared_pb.TxBind.AsObject,
    }
  }

  export class TickRange extends jspb.Message {
    hasTransactionbind(): boolean;
    clearTransactionbind(): void;
    getTransactionbind(): quivr_models_shared_pb.TxBind | undefined;
    setTransactionbind(value?: quivr_models_shared_pb.TxBind): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TickRange.AsObject;
    static toObject(includeInstance: boolean, msg: TickRange): TickRange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TickRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TickRange;
    static deserializeBinaryFromReader(message: TickRange, reader: jspb.BinaryReader): TickRange;
  }

  export namespace TickRange {
    export type AsObject = {
      transactionbind?: quivr_models_shared_pb.TxBind.AsObject,
    }
  }

  export class ExactMatch extends jspb.Message {
    hasTransactionbind(): boolean;
    clearTransactionbind(): void;
    getTransactionbind(): quivr_models_shared_pb.TxBind | undefined;
    setTransactionbind(value?: quivr_models_shared_pb.TxBind): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExactMatch.AsObject;
    static toObject(includeInstance: boolean, msg: ExactMatch): ExactMatch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExactMatch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExactMatch;
    static deserializeBinaryFromReader(message: ExactMatch, reader: jspb.BinaryReader): ExactMatch;
  }

  export namespace ExactMatch {
    export type AsObject = {
      transactionbind?: quivr_models_shared_pb.TxBind.AsObject,
    }
  }

  export class LessThan extends jspb.Message {
    hasTransactionbind(): boolean;
    clearTransactionbind(): void;
    getTransactionbind(): quivr_models_shared_pb.TxBind | undefined;
    setTransactionbind(value?: quivr_models_shared_pb.TxBind): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LessThan.AsObject;
    static toObject(includeInstance: boolean, msg: LessThan): LessThan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LessThan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LessThan;
    static deserializeBinaryFromReader(message: LessThan, reader: jspb.BinaryReader): LessThan;
  }

  export namespace LessThan {
    export type AsObject = {
      transactionbind?: quivr_models_shared_pb.TxBind.AsObject,
    }
  }

  export class GreaterThan extends jspb.Message {
    hasTransactionbind(): boolean;
    clearTransactionbind(): void;
    getTransactionbind(): quivr_models_shared_pb.TxBind | undefined;
    setTransactionbind(value?: quivr_models_shared_pb.TxBind): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GreaterThan.AsObject;
    static toObject(includeInstance: boolean, msg: GreaterThan): GreaterThan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GreaterThan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GreaterThan;
    static deserializeBinaryFromReader(message: GreaterThan, reader: jspb.BinaryReader): GreaterThan;
  }

  export namespace GreaterThan {
    export type AsObject = {
      transactionbind?: quivr_models_shared_pb.TxBind.AsObject,
    }
  }

  export class EqualTo extends jspb.Message {
    hasTransactionbind(): boolean;
    clearTransactionbind(): void;
    getTransactionbind(): quivr_models_shared_pb.TxBind | undefined;
    setTransactionbind(value?: quivr_models_shared_pb.TxBind): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EqualTo.AsObject;
    static toObject(includeInstance: boolean, msg: EqualTo): EqualTo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EqualTo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EqualTo;
    static deserializeBinaryFromReader(message: EqualTo, reader: jspb.BinaryReader): EqualTo;
  }

  export namespace EqualTo {
    export type AsObject = {
      transactionbind?: quivr_models_shared_pb.TxBind.AsObject,
    }
  }

  export class Threshold extends jspb.Message {
    hasTransactionbind(): boolean;
    clearTransactionbind(): void;
    getTransactionbind(): quivr_models_shared_pb.TxBind | undefined;
    setTransactionbind(value?: quivr_models_shared_pb.TxBind): void;

    clearResponsesList(): void;
    getResponsesList(): Array<Proof>;
    setResponsesList(value: Array<Proof>): void;
    addResponses(value?: Proof, index?: number): Proof;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Threshold.AsObject;
    static toObject(includeInstance: boolean, msg: Threshold): Threshold.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Threshold, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Threshold;
    static deserializeBinaryFromReader(message: Threshold, reader: jspb.BinaryReader): Threshold;
  }

  export namespace Threshold {
    export type AsObject = {
      transactionbind?: quivr_models_shared_pb.TxBind.AsObject,
      responsesList: Array<Proof.AsObject>,
    }
  }

  export class Not extends jspb.Message {
    hasTransactionbind(): boolean;
    clearTransactionbind(): void;
    getTransactionbind(): quivr_models_shared_pb.TxBind | undefined;
    setTransactionbind(value?: quivr_models_shared_pb.TxBind): void;

    hasProof(): boolean;
    clearProof(): void;
    getProof(): Proof | undefined;
    setProof(value?: Proof): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Not.AsObject;
    static toObject(includeInstance: boolean, msg: Not): Not.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Not, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Not;
    static deserializeBinaryFromReader(message: Not, reader: jspb.BinaryReader): Not;
  }

  export namespace Not {
    export type AsObject = {
      transactionbind?: quivr_models_shared_pb.TxBind.AsObject,
      proof?: Proof.AsObject,
    }
  }

  export class And extends jspb.Message {
    hasTransactionbind(): boolean;
    clearTransactionbind(): void;
    getTransactionbind(): quivr_models_shared_pb.TxBind | undefined;
    setTransactionbind(value?: quivr_models_shared_pb.TxBind): void;

    hasLeft(): boolean;
    clearLeft(): void;
    getLeft(): Proof | undefined;
    setLeft(value?: Proof): void;

    hasRight(): boolean;
    clearRight(): void;
    getRight(): Proof | undefined;
    setRight(value?: Proof): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): And.AsObject;
    static toObject(includeInstance: boolean, msg: And): And.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: And, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): And;
    static deserializeBinaryFromReader(message: And, reader: jspb.BinaryReader): And;
  }

  export namespace And {
    export type AsObject = {
      transactionbind?: quivr_models_shared_pb.TxBind.AsObject,
      left?: Proof.AsObject,
      right?: Proof.AsObject,
    }
  }

  export class Or extends jspb.Message {
    hasTransactionbind(): boolean;
    clearTransactionbind(): void;
    getTransactionbind(): quivr_models_shared_pb.TxBind | undefined;
    setTransactionbind(value?: quivr_models_shared_pb.TxBind): void;

    hasLeft(): boolean;
    clearLeft(): void;
    getLeft(): Proof | undefined;
    setLeft(value?: Proof): void;

    hasRight(): boolean;
    clearRight(): void;
    getRight(): Proof | undefined;
    setRight(value?: Proof): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Or.AsObject;
    static toObject(includeInstance: boolean, msg: Or): Or.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Or, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Or;
    static deserializeBinaryFromReader(message: Or, reader: jspb.BinaryReader): Or;
  }

  export namespace Or {
    export type AsObject = {
      transactionbind?: quivr_models_shared_pb.TxBind.AsObject,
      left?: Proof.AsObject,
      right?: Proof.AsObject,
    }
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    LOCKED = 1,
    DIGEST = 2,
    DIGITALSIGNATURE = 3,
    HEIGHTRANGE = 4,
    TICKRANGE = 5,
    EXACTMATCH = 6,
    LESSTHAN = 7,
    GREATERTHAN = 8,
    EQUALTO = 9,
    THRESHOLD = 10,
    NOT = 11,
    AND = 12,
    OR = 13,
  }
}

