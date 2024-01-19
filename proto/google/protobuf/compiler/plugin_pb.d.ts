// package: google.protobuf.compiler
// file: google/protobuf/compiler/plugin.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class Version extends jspb.Message {
  hasMajor(): boolean;
  clearMajor(): void;
  getMajor(): number | undefined;
  setMajor(value: number): void;

  hasMinor(): boolean;
  clearMinor(): void;
  getMinor(): number | undefined;
  setMinor(value: number): void;

  hasPatch(): boolean;
  clearPatch(): void;
  getPatch(): number | undefined;
  setPatch(value: number): void;

  hasSuffix(): boolean;
  clearSuffix(): void;
  getSuffix(): string | undefined;
  setSuffix(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Version.AsObject;
  static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Version;
  static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
  export type AsObject = {
    major?: number,
    minor?: number,
    patch?: number,
    suffix?: string,
  }
}

export class CodeGeneratorRequest extends jspb.Message {
  clearFileToGenerateList(): void;
  getFileToGenerateList(): Array<string>;
  setFileToGenerateList(value: Array<string>): void;
  addFileToGenerate(value: string, index?: number): string;

  hasParameter(): boolean;
  clearParameter(): void;
  getParameter(): string | undefined;
  setParameter(value: string): void;

  clearProtoFileList(): void;
  getProtoFileList(): Array<google_protobuf_descriptor_pb.FileDescriptorProto>;
  setProtoFileList(value: Array<google_protobuf_descriptor_pb.FileDescriptorProto>): void;
  addProtoFile(value?: google_protobuf_descriptor_pb.FileDescriptorProto, index?: number): google_protobuf_descriptor_pb.FileDescriptorProto;

  hasCompilerVersion(): boolean;
  clearCompilerVersion(): void;
  getCompilerVersion(): Version | undefined;
  setCompilerVersion(value?: Version): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeGeneratorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CodeGeneratorRequest): CodeGeneratorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeGeneratorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeGeneratorRequest;
  static deserializeBinaryFromReader(message: CodeGeneratorRequest, reader: jspb.BinaryReader): CodeGeneratorRequest;
}

export namespace CodeGeneratorRequest {
  export type AsObject = {
    fileToGenerateList: Array<string>,
    parameter?: string,
    protoFileList: Array<google_protobuf_descriptor_pb.FileDescriptorProto.AsObject>,
    compilerVersion?: Version.AsObject,
  }
}

export class CodeGeneratorResponse extends jspb.Message {
  hasError(): boolean;
  clearError(): void;
  getError(): string | undefined;
  setError(value: string): void;

  hasSupportedFeatures(): boolean;
  clearSupportedFeatures(): void;
  getSupportedFeatures(): number | undefined;
  setSupportedFeatures(value: number): void;

  clearFileList(): void;
  getFileList(): Array<CodeGeneratorResponse.File>;
  setFileList(value: Array<CodeGeneratorResponse.File>): void;
  addFile(value?: CodeGeneratorResponse.File, index?: number): CodeGeneratorResponse.File;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeGeneratorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CodeGeneratorResponse): CodeGeneratorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeGeneratorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeGeneratorResponse;
  static deserializeBinaryFromReader(message: CodeGeneratorResponse, reader: jspb.BinaryReader): CodeGeneratorResponse;
}

export namespace CodeGeneratorResponse {
  export type AsObject = {
    error?: string,
    supportedFeatures?: number,
    fileList: Array<CodeGeneratorResponse.File.AsObject>,
  }

  export class File extends jspb.Message {
    hasName(): boolean;
    clearName(): void;
    getName(): string | undefined;
    setName(value: string): void;

    hasInsertionPoint(): boolean;
    clearInsertionPoint(): void;
    getInsertionPoint(): string | undefined;
    setInsertionPoint(value: string): void;

    hasContent(): boolean;
    clearContent(): void;
    getContent(): string | undefined;
    setContent(value: string): void;

    hasGeneratedCodeInfo(): boolean;
    clearGeneratedCodeInfo(): void;
    getGeneratedCodeInfo(): google_protobuf_descriptor_pb.GeneratedCodeInfo | undefined;
    setGeneratedCodeInfo(value?: google_protobuf_descriptor_pb.GeneratedCodeInfo): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): File.AsObject;
    static toObject(includeInstance: boolean, msg: File): File.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): File;
    static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
  }

  export namespace File {
    export type AsObject = {
      name?: string,
      insertionPoint?: string,
      content?: string,
      generatedCodeInfo?: google_protobuf_descriptor_pb.GeneratedCodeInfo.AsObject,
    }
  }

  export interface FeatureMap {
    FEATURE_NONE: 0;
    FEATURE_PROTO3_OPTIONAL: 1;
  }

  export const Feature: FeatureMap;
}

