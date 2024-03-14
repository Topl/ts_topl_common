// package: quivr.models
// file: quivr/models/shared.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../validate/validate_pb";

export class Data extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Data.AsObject;
  static toObject(includeInstance: boolean, msg: Data): Data.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Data, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Data;
  static deserializeBinaryFromReader(message: Data, reader: jspb.BinaryReader): Data;
}

export namespace Data {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class SmallData extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmallData.AsObject;
  static toObject(includeInstance: boolean, msg: SmallData): SmallData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmallData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmallData;
  static deserializeBinaryFromReader(message: SmallData, reader: jspb.BinaryReader): SmallData;
}

export namespace SmallData {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class Root extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Root.AsObject;
  static toObject(includeInstance: boolean, msg: Root): Root.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Root, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Root;
  static deserializeBinaryFromReader(message: Root, reader: jspb.BinaryReader): Root;
}

export namespace Root {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class Preimage extends jspb.Message {
  getInput(): Uint8Array | string;
  getInput_asU8(): Uint8Array;
  getInput_asB64(): string;
  setInput(value: Uint8Array | string): void;

  getSalt(): Uint8Array | string;
  getSalt_asU8(): Uint8Array;
  getSalt_asB64(): string;
  setSalt(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Preimage.AsObject;
  static toObject(includeInstance: boolean, msg: Preimage): Preimage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Preimage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Preimage;
  static deserializeBinaryFromReader(message: Preimage, reader: jspb.BinaryReader): Preimage;
}

export namespace Preimage {
  export type AsObject = {
    input: Uint8Array | string,
    salt: Uint8Array | string,
  }
}

export class Digest extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

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
    value: Uint8Array | string,
  }
}

export class DigestVerification extends jspb.Message {
  hasDigest(): boolean;
  clearDigest(): void;
  getDigest(): Digest | undefined;
  setDigest(value?: Digest): void;

  hasPreimage(): boolean;
  clearPreimage(): void;
  getPreimage(): Preimage | undefined;
  setPreimage(value?: Preimage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DigestVerification.AsObject;
  static toObject(includeInstance: boolean, msg: DigestVerification): DigestVerification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DigestVerification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DigestVerification;
  static deserializeBinaryFromReader(message: DigestVerification, reader: jspb.BinaryReader): DigestVerification;
}

export namespace DigestVerification {
  export type AsObject = {
    digest?: Digest.AsObject,
    preimage?: Preimage.AsObject,
  }
}

export class VerificationKey extends jspb.Message {
  hasEd25519(): boolean;
  clearEd25519(): void;
  getEd25519(): VerificationKey.Ed25519Vk | undefined;
  setEd25519(value?: VerificationKey.Ed25519Vk): void;

  hasExtendeded25519(): boolean;
  clearExtendeded25519(): void;
  getExtendeded25519(): VerificationKey.ExtendedEd25519Vk | undefined;
  setExtendeded25519(value?: VerificationKey.ExtendedEd25519Vk): void;

  getVkCase(): VerificationKey.VkCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerificationKey.AsObject;
  static toObject(includeInstance: boolean, msg: VerificationKey): VerificationKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerificationKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerificationKey;
  static deserializeBinaryFromReader(message: VerificationKey, reader: jspb.BinaryReader): VerificationKey;
}

export namespace VerificationKey {
  export type AsObject = {
    ed25519?: VerificationKey.Ed25519Vk.AsObject,
    extendeded25519?: VerificationKey.ExtendedEd25519Vk.AsObject,
  }

  export class Ed25519Vk extends jspb.Message {
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ed25519Vk.AsObject;
    static toObject(includeInstance: boolean, msg: Ed25519Vk): Ed25519Vk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ed25519Vk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ed25519Vk;
    static deserializeBinaryFromReader(message: Ed25519Vk, reader: jspb.BinaryReader): Ed25519Vk;
  }

  export namespace Ed25519Vk {
    export type AsObject = {
      value: Uint8Array | string,
    }
  }

  export class ExtendedEd25519Vk extends jspb.Message {
    hasVk(): boolean;
    clearVk(): void;
    getVk(): VerificationKey.Ed25519Vk | undefined;
    setVk(value?: VerificationKey.Ed25519Vk): void;

    getChaincode(): Uint8Array | string;
    getChaincode_asU8(): Uint8Array;
    getChaincode_asB64(): string;
    setChaincode(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExtendedEd25519Vk.AsObject;
    static toObject(includeInstance: boolean, msg: ExtendedEd25519Vk): ExtendedEd25519Vk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExtendedEd25519Vk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExtendedEd25519Vk;
    static deserializeBinaryFromReader(message: ExtendedEd25519Vk, reader: jspb.BinaryReader): ExtendedEd25519Vk;
  }

  export namespace ExtendedEd25519Vk {
    export type AsObject = {
      vk?: VerificationKey.Ed25519Vk.AsObject,
      chaincode: Uint8Array | string,
    }
  }

  export enum VkCase {
    VK_NOT_SET = 0,
    ED25519 = 1,
    EXTENDEDED25519 = 2,
  }
}

export class SigningKey extends jspb.Message {
  hasEd25519(): boolean;
  clearEd25519(): void;
  getEd25519(): SigningKey.Ed25519Sk | undefined;
  setEd25519(value?: SigningKey.Ed25519Sk): void;

  hasExtendeded25519(): boolean;
  clearExtendeded25519(): void;
  getExtendeded25519(): SigningKey.ExtendedEd25519Sk | undefined;
  setExtendeded25519(value?: SigningKey.ExtendedEd25519Sk): void;

  getSkCase(): SigningKey.SkCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SigningKey.AsObject;
  static toObject(includeInstance: boolean, msg: SigningKey): SigningKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SigningKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SigningKey;
  static deserializeBinaryFromReader(message: SigningKey, reader: jspb.BinaryReader): SigningKey;
}

export namespace SigningKey {
  export type AsObject = {
    ed25519?: SigningKey.Ed25519Sk.AsObject,
    extendeded25519?: SigningKey.ExtendedEd25519Sk.AsObject,
  }

  export class Ed25519Sk extends jspb.Message {
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ed25519Sk.AsObject;
    static toObject(includeInstance: boolean, msg: Ed25519Sk): Ed25519Sk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ed25519Sk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ed25519Sk;
    static deserializeBinaryFromReader(message: Ed25519Sk, reader: jspb.BinaryReader): Ed25519Sk;
  }

  export namespace Ed25519Sk {
    export type AsObject = {
      value: Uint8Array | string,
    }
  }

  export class ExtendedEd25519Sk extends jspb.Message {
    getLeftkey(): Uint8Array | string;
    getLeftkey_asU8(): Uint8Array;
    getLeftkey_asB64(): string;
    setLeftkey(value: Uint8Array | string): void;

    getRightkey(): Uint8Array | string;
    getRightkey_asU8(): Uint8Array;
    getRightkey_asB64(): string;
    setRightkey(value: Uint8Array | string): void;

    getChaincode(): Uint8Array | string;
    getChaincode_asU8(): Uint8Array;
    getChaincode_asB64(): string;
    setChaincode(value: Uint8Array | string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExtendedEd25519Sk.AsObject;
    static toObject(includeInstance: boolean, msg: ExtendedEd25519Sk): ExtendedEd25519Sk.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExtendedEd25519Sk, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExtendedEd25519Sk;
    static deserializeBinaryFromReader(message: ExtendedEd25519Sk, reader: jspb.BinaryReader): ExtendedEd25519Sk;
  }

  export namespace ExtendedEd25519Sk {
    export type AsObject = {
      leftkey: Uint8Array | string,
      rightkey: Uint8Array | string,
      chaincode: Uint8Array | string,
    }
  }

  export enum SkCase {
    SK_NOT_SET = 0,
    ED25519 = 1,
    EXTENDEDED25519 = 2,
  }
}

export class KeyPair extends jspb.Message {
  hasVk(): boolean;
  clearVk(): void;
  getVk(): VerificationKey | undefined;
  setVk(value?: VerificationKey): void;

  hasSk(): boolean;
  clearSk(): void;
  getSk(): SigningKey | undefined;
  setSk(value?: SigningKey): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyPair.AsObject;
  static toObject(includeInstance: boolean, msg: KeyPair): KeyPair.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyPair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyPair;
  static deserializeBinaryFromReader(message: KeyPair, reader: jspb.BinaryReader): KeyPair;
}

export namespace KeyPair {
  export type AsObject = {
    vk?: VerificationKey.AsObject,
    sk?: SigningKey.AsObject,
  }
}

export class Message extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class Witness extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Witness.AsObject;
  static toObject(includeInstance: boolean, msg: Witness): Witness.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Witness, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Witness;
  static deserializeBinaryFromReader(message: Witness, reader: jspb.BinaryReader): Witness;
}

export namespace Witness {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class SignatureVerification extends jspb.Message {
  hasVerificationkey(): boolean;
  clearVerificationkey(): void;
  getVerificationkey(): VerificationKey | undefined;
  setVerificationkey(value?: VerificationKey): void;

  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): Witness | undefined;
  setSignature(value?: Witness): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): Message | undefined;
  setMessage(value?: Message): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignatureVerification.AsObject;
  static toObject(includeInstance: boolean, msg: SignatureVerification): SignatureVerification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignatureVerification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignatureVerification;
  static deserializeBinaryFromReader(message: SignatureVerification, reader: jspb.BinaryReader): SignatureVerification;
}

export namespace SignatureVerification {
  export type AsObject = {
    verificationkey?: VerificationKey.AsObject,
    signature?: Witness.AsObject,
    message?: Message.AsObject,
  }
}

export class SignableBytes extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignableBytes.AsObject;
  static toObject(includeInstance: boolean, msg: SignableBytes): SignableBytes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SignableBytes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignableBytes;
  static deserializeBinaryFromReader(message: SignableBytes, reader: jspb.BinaryReader): SignableBytes;
}

export namespace SignableBytes {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class TxBind extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxBind.AsObject;
  static toObject(includeInstance: boolean, msg: TxBind): TxBind.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxBind, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxBind;
  static deserializeBinaryFromReader(message: TxBind, reader: jspb.BinaryReader): TxBind;
}

export namespace TxBind {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class Int128 extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Int128.AsObject;
  static toObject(includeInstance: boolean, msg: Int128): Int128.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Int128, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int128;
  static deserializeBinaryFromReader(message: Int128, reader: jspb.BinaryReader): Int128;
}

export namespace Int128 {
  export type AsObject = {
    value: Uint8Array | string,
  }
}

export class Ratio extends jspb.Message {
  hasNumerator(): boolean;
  clearNumerator(): void;
  getNumerator(): Int128 | undefined;
  setNumerator(value?: Int128): void;

  hasDenominator(): boolean;
  clearDenominator(): void;
  getDenominator(): Int128 | undefined;
  setDenominator(value?: Int128): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ratio.AsObject;
  static toObject(includeInstance: boolean, msg: Ratio): Ratio.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Ratio, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ratio;
  static deserializeBinaryFromReader(message: Ratio, reader: jspb.BinaryReader): Ratio;
}

export namespace Ratio {
  export type AsObject = {
    numerator?: Int128.AsObject,
    denominator?: Int128.AsObject,
  }
}

