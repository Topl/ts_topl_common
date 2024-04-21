// @generated by protoc-gen-es v1.8.0
// @generated from file consensus/models/protocol_version.proto (package co.topl.consensus.models, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Protocol Version Specification, see TIP-003
 *
 * @generated from message co.topl.consensus.models.ProtocolVersion
 */
export declare class ProtocolVersion extends Message<ProtocolVersion> {
  /**
   * `firstDigit` Significant hard fork/version change/consensus rule set change
   *
   * @generated from field: uint32 firstDigit = 1;
   */
  firstDigit: number;

  /**
   * `secondDigit` Feature additions, bugs fixing hard forks, minor hard forks, significant soft forks, interface should  work the same
   *
   * @generated from field: uint32 secondDigit = 2;
   */
  secondDigit: number;

  /**
   * `thirdDigit` Minor changes
   *
   * @generated from field: uint32 thirdDigit = 3;
   */
  thirdDigit: number;

  constructor(data?: PartialMessage<ProtocolVersion>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "co.topl.consensus.models.ProtocolVersion";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtocolVersion;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtocolVersion;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtocolVersion;

  static equals(a: ProtocolVersion | PlainMessage<ProtocolVersion> | undefined, b: ProtocolVersion | PlainMessage<ProtocolVersion> | undefined): boolean;
}

