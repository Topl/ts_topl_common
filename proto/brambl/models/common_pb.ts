// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file brambl/models/common.proto (package co.topl.brambl.models.common, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Immutable byte representation of a value
 *
 * @generated from message co.topl.brambl.models.common.ImmutableBytes
 */
export class ImmutableBytes extends Message<ImmutableBytes> {
  /**
   * @generated from field: bytes value = 1;
   */
  value = new Uint8Array(0);

  constructor(data?: PartialMessage<ImmutableBytes>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "co.topl.brambl.models.common.ImmutableBytes";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ImmutableBytes {
    return new ImmutableBytes().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ImmutableBytes {
    return new ImmutableBytes().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ImmutableBytes {
    return new ImmutableBytes().fromJsonString(jsonString, options);
  }

  static equals(a: ImmutableBytes | PlainMessage<ImmutableBytes> | undefined, b: ImmutableBytes | PlainMessage<ImmutableBytes> | undefined): boolean {
    return proto3.util.equals(ImmutableBytes, a, b);
  }
}
