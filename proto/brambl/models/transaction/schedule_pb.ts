// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file brambl/models/transaction/schedule.proto (package co.topl.brambl.models.transaction, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message co.topl.brambl.models.transaction.Schedule
 */
export class Schedule extends Message<Schedule> {
  /**
   * @generated from field: uint64 min = 1;
   */
  min = protoInt64.zero;

  /**
   * @generated from field: uint64 max = 2;
   */
  max = protoInt64.zero;

  /**
   * @generated from field: uint64 timestamp = 3;
   */
  timestamp = protoInt64.zero;

  constructor(data?: PartialMessage<Schedule>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "co.topl.brambl.models.transaction.Schedule";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "min", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "max", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "timestamp", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Schedule {
    return new Schedule().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Schedule {
    return new Schedule().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Schedule {
    return new Schedule().fromJsonString(jsonString, options);
  }

  static equals(a: Schedule | PlainMessage<Schedule> | undefined, b: Schedule | PlainMessage<Schedule> | undefined): boolean {
    return proto3.util.equals(Schedule, a, b);
  }
}

