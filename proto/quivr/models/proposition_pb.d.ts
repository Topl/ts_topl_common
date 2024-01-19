// package: quivr.models
// file: quivr/models/proposition.proto

import * as jspb from "google-protobuf";
import * as quivr_models_shared_pb from "../../quivr/models/shared_pb";
import * as validate_validate_pb from "../../validate/validate_pb";

export class Proposition extends jspb.Message {
  hasLocked(): boolean;
  clearLocked(): void;
  getLocked(): Proposition.Locked | undefined;
  setLocked(value?: Proposition.Locked): void;

  hasDigest(): boolean;
  clearDigest(): void;
  getDigest(): Proposition.Digest | undefined;
  setDigest(value?: Proposition.Digest): void;

  hasDigitalsignature(): boolean;
  clearDigitalsignature(): void;
  getDigitalsignature(): Proposition.DigitalSignature | undefined;
  setDigitalsignature(value?: Proposition.DigitalSignature): void;

  hasHeightrange(): boolean;
  clearHeightrange(): void;
  getHeightrange(): Proposition.HeightRange | undefined;
  setHeightrange(value?: Proposition.HeightRange): void;

  hasTickrange(): boolean;
  clearTickrange(): void;
  getTickrange(): Proposition.TickRange | undefined;
  setTickrange(value?: Proposition.TickRange): void;

  hasExactmatch(): boolean;
  clearExactmatch(): void;
  getExactmatch(): Proposition.ExactMatch | undefined;
  setExactmatch(value?: Proposition.ExactMatch): void;

  hasLessthan(): boolean;
  clearLessthan(): void;
  getLessthan(): Proposition.LessThan | undefined;
  setLessthan(value?: Proposition.LessThan): void;

  hasGreaterthan(): boolean;
  clearGreaterthan(): void;
  getGreaterthan(): Proposition.GreaterThan | undefined;
  setGreaterthan(value?: Proposition.GreaterThan): void;

  hasEqualto(): boolean;
  clearEqualto(): void;
  getEqualto(): Proposition.EqualTo | undefined;
  setEqualto(value?: Proposition.EqualTo): void;

  hasThreshold(): boolean;
  clearThreshold(): void;
  getThreshold(): Proposition.Threshold | undefined;
  setThreshold(value?: Proposition.Threshold): void;

  hasNot(): boolean;
  clearNot(): void;
  getNot(): Proposition.Not | undefined;
  setNot(value?: Proposition.Not): void;

  hasAnd(): boolean;
  clearAnd(): void;
  getAnd(): Proposition.And | undefined;
  setAnd(value?: Proposition.And): void;

  hasOr(): boolean;
  clearOr(): void;
  getOr(): Proposition.Or | undefined;
  setOr(value?: Proposition.Or): void;

  getValueCase(): Proposition.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Proposition.AsObject;
  static toObject(includeInstance: boolean, msg: Proposition): Proposition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Proposition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Proposition;
  static deserializeBinaryFromReader(message: Proposition, reader: jspb.BinaryReader): Proposition;
}

export namespace Proposition {
  export type AsObject = {
    locked?: Proposition.Locked.AsObject,
    digest?: Proposition.Digest.AsObject,
    digitalsignature?: Proposition.DigitalSignature.AsObject,
    heightrange?: Proposition.HeightRange.AsObject,
    tickrange?: Proposition.TickRange.AsObject,
    exactmatch?: Proposition.ExactMatch.AsObject,
    lessthan?: Proposition.LessThan.AsObject,
    greaterthan?: Proposition.GreaterThan.AsObject,
    equalto?: Proposition.EqualTo.AsObject,
    threshold?: Proposition.Threshold.AsObject,
    not?: Proposition.Not.AsObject,
    and?: Proposition.And.AsObject,
    or?: Proposition.Or.AsObject,
  }

  export class Locked extends jspb.Message {
    hasData(): boolean;
    clearData(): void;
    getData(): quivr_models_shared_pb.Data | undefined;
    setData(value?: quivr_models_shared_pb.Data): void;

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
      data?: quivr_models_shared_pb.Data.AsObject,
    }
  }

  export class Digest extends jspb.Message {
    getRoutine(): string;
    setRoutine(value: string): void;

    hasDigest(): boolean;
    clearDigest(): void;
    getDigest(): quivr_models_shared_pb.Digest | undefined;
    setDigest(value?: quivr_models_shared_pb.Digest): void;

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
      routine: string,
      digest?: quivr_models_shared_pb.Digest.AsObject,
    }
  }

  export class DigitalSignature extends jspb.Message {
    getRoutine(): string;
    setRoutine(value: string): void;

    hasVerificationkey(): boolean;
    clearVerificationkey(): void;
    getVerificationkey(): quivr_models_shared_pb.VerificationKey | undefined;
    setVerificationkey(value?: quivr_models_shared_pb.VerificationKey): void;

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
      routine: string,
      verificationkey?: quivr_models_shared_pb.VerificationKey.AsObject,
    }
  }

  export class HeightRange extends jspb.Message {
    getChain(): string;
    setChain(value: string): void;

    getMin(): number;
    setMin(value: number): void;

    getMax(): number;
    setMax(value: number): void;

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
      chain: string,
      min: number,
      max: number,
    }
  }

  export class TickRange extends jspb.Message {
    getMin(): number;
    setMin(value: number): void;

    getMax(): number;
    setMax(value: number): void;

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
      min: number,
      max: number,
    }
  }

  export class ExactMatch extends jspb.Message {
    getLocation(): string;
    setLocation(value: string): void;

    getCompareto(): Uint8Array | string;
    getCompareto_asU8(): Uint8Array;
    getCompareto_asB64(): string;
    setCompareto(value: Uint8Array | string): void;

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
      location: string,
      compareto: Uint8Array | string,
    }
  }

  export class LessThan extends jspb.Message {
    getLocation(): string;
    setLocation(value: string): void;

    hasCompareto(): boolean;
    clearCompareto(): void;
    getCompareto(): quivr_models_shared_pb.Int128 | undefined;
    setCompareto(value?: quivr_models_shared_pb.Int128): void;

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
      location: string,
      compareto?: quivr_models_shared_pb.Int128.AsObject,
    }
  }

  export class GreaterThan extends jspb.Message {
    getLocation(): string;
    setLocation(value: string): void;

    hasCompareto(): boolean;
    clearCompareto(): void;
    getCompareto(): quivr_models_shared_pb.Int128 | undefined;
    setCompareto(value?: quivr_models_shared_pb.Int128): void;

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
      location: string,
      compareto?: quivr_models_shared_pb.Int128.AsObject,
    }
  }

  export class EqualTo extends jspb.Message {
    getLocation(): string;
    setLocation(value: string): void;

    hasCompareto(): boolean;
    clearCompareto(): void;
    getCompareto(): quivr_models_shared_pb.Int128 | undefined;
    setCompareto(value?: quivr_models_shared_pb.Int128): void;

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
      location: string,
      compareto?: quivr_models_shared_pb.Int128.AsObject,
    }
  }

  export class Threshold extends jspb.Message {
    clearChallengesList(): void;
    getChallengesList(): Array<Proposition>;
    setChallengesList(value: Array<Proposition>): void;
    addChallenges(value?: Proposition, index?: number): Proposition;

    getThreshold(): number;
    setThreshold(value: number): void;

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
      challengesList: Array<Proposition.AsObject>,
      threshold: number,
    }
  }

  export class Not extends jspb.Message {
    hasProposition(): boolean;
    clearProposition(): void;
    getProposition(): Proposition | undefined;
    setProposition(value?: Proposition): void;

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
      proposition?: Proposition.AsObject,
    }
  }

  export class And extends jspb.Message {
    hasLeft(): boolean;
    clearLeft(): void;
    getLeft(): Proposition | undefined;
    setLeft(value?: Proposition): void;

    hasRight(): boolean;
    clearRight(): void;
    getRight(): Proposition | undefined;
    setRight(value?: Proposition): void;

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
      left?: Proposition.AsObject,
      right?: Proposition.AsObject,
    }
  }

  export class Or extends jspb.Message {
    hasLeft(): boolean;
    clearLeft(): void;
    getLeft(): Proposition | undefined;
    setLeft(value?: Proposition): void;

    hasRight(): boolean;
    clearRight(): void;
    getRight(): Proposition | undefined;
    setRight(value?: Proposition): void;

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
      left?: Proposition.AsObject,
      right?: Proposition.AsObject,
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

