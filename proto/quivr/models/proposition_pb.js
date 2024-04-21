// @generated by protoc-gen-es v1.8.0
// @generated from file quivr/models/proposition.proto (package quivr.models, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Data, Digest, Int128, VerificationKey } from "./shared_pb.js";

/**
 * Condition that must be satisfied to unlock
 *
 * @generated from message quivr.models.Proposition
 */
export const Proposition = /*@__PURE__*/ proto3.makeMessageType(
  "quivr.models.Proposition",
  () => [
    { no: 1, name: "locked", kind: "message", T: Proposition_Locked, oneof: "value" },
    { no: 2, name: "digest", kind: "message", T: Proposition_Digest, oneof: "value" },
    { no: 3, name: "digitalSignature", kind: "message", T: Proposition_DigitalSignature, oneof: "value" },
    { no: 4, name: "heightRange", kind: "message", T: Proposition_HeightRange, oneof: "value" },
    { no: 5, name: "tickRange", kind: "message", T: Proposition_TickRange, oneof: "value" },
    { no: 6, name: "exactMatch", kind: "message", T: Proposition_ExactMatch, oneof: "value" },
    { no: 7, name: "lessThan", kind: "message", T: Proposition_LessThan, oneof: "value" },
    { no: 8, name: "greaterThan", kind: "message", T: Proposition_GreaterThan, oneof: "value" },
    { no: 9, name: "equalTo", kind: "message", T: Proposition_EqualTo, oneof: "value" },
    { no: 10, name: "threshold", kind: "message", T: Proposition_Threshold, oneof: "value" },
    { no: 11, name: "not", kind: "message", T: Proposition_Not, oneof: "value" },
    { no: 12, name: "and", kind: "message", T: Proposition_And, oneof: "value" },
    { no: 13, name: "or", kind: "message", T: Proposition_Or, oneof: "value" },
  ],
);

/**
 * Indicates that a proposition can never be satisfied
 *
 * @generated from message quivr.models.Proposition.Locked
 */
export const Proposition_Locked = /*@__PURE__*/ proto3.makeMessageType(
  "quivr.models.Proposition.Locked",
  () => [
    { no: 1, name: "data", kind: "message", T: Data },
  ],
  {localName: "Proposition_Locked"},
);

/**
 * a proposition that can be satisfied if the proof contains the preimage matching the digest
 *
 * @generated from message quivr.models.Proposition.Digest
 */
export const Proposition_Digest = /*@__PURE__*/ proto3.makeMessageType(
  "quivr.models.Proposition.Digest",
  () => [
    { no: 1, name: "routine", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "digest", kind: "message", T: Digest },
  ],
  {localName: "Proposition_Digest"},
);

/**
 * a proposition that can be satisfied if the proof contains the signature
 *
 * @generated from message quivr.models.Proposition.DigitalSignature
 */
export const Proposition_DigitalSignature = /*@__PURE__*/ proto3.makeMessageType(
  "quivr.models.Proposition.DigitalSignature",
  () => [
    { no: 1, name: "routine", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "verificationKey", kind: "message", T: VerificationKey },
  ],
  {localName: "Proposition_DigitalSignature"},
);

/**
 * a proposition that can be satisfied if the specified chain falls within min and max height values
 *
 * @generated from message quivr.models.Proposition.HeightRange
 */
export const Proposition_HeightRange = /*@__PURE__*/ proto3.makeMessageType(
  "quivr.models.Proposition.HeightRange",
  () => [
    { no: 1, name: "chain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "min", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "max", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
  {localName: "Proposition_HeightRange"},
);

/**
 * a proposition that can be satisfied if the time value falls within the min and max
 *
 * @generated from message quivr.models.Proposition.TickRange
 */
export const Proposition_TickRange = /*@__PURE__*/ proto3.makeMessageType(
  "quivr.models.Proposition.TickRange",
  () => [
    { no: 1, name: "min", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "max", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
  {localName: "Proposition_TickRange"},
);

/**
 * a proposition that can be satisfied if the value at a location is an exact match of the compareTo value
 *
 * @generated from message quivr.models.Proposition.ExactMatch
 */
export const Proposition_ExactMatch = /*@__PURE__*/ proto3.makeMessageType(
  "quivr.models.Proposition.ExactMatch",
  () => [
    { no: 1, name: "location", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "compareTo", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
  {localName: "Proposition_ExactMatch"},
);

/**
 * a proposition that can be satisfied if the value at a location is less than the compareTo value
 *
 * @generated from message quivr.models.Proposition.LessThan
 */
export const Proposition_LessThan = /*@__PURE__*/ proto3.makeMessageType(
  "quivr.models.Proposition.LessThan",
  () => [
    { no: 1, name: "location", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "compareTo", kind: "message", T: Int128 },
  ],
  {localName: "Proposition_LessThan"},
);

/**
 * a proposition that can be satisfied if the value at a location is greater than the compareTo value
 *
 * @generated from message quivr.models.Proposition.GreaterThan
 */
export const Proposition_GreaterThan = /*@__PURE__*/ proto3.makeMessageType(
  "quivr.models.Proposition.GreaterThan",
  () => [
    { no: 1, name: "location", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "compareTo", kind: "message", T: Int128 },
  ],
  {localName: "Proposition_GreaterThan"},
);

/**
 * a proposition that can be satisfied if the value (int) at a location is equal to the compareTo value
 *
 * @generated from message quivr.models.Proposition.EqualTo
 */
export const Proposition_EqualTo = /*@__PURE__*/ proto3.makeMessageType(
  "quivr.models.Proposition.EqualTo",
  () => [
    { no: 1, name: "location", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "compareTo", kind: "message", T: Int128 },
  ],
  {localName: "Proposition_EqualTo"},
);

/**
 * a proposition that can be satisfied if at least the threshold number of propositions are satisfied
 *
 * @generated from message quivr.models.Proposition.Threshold
 */
export const Proposition_Threshold = /*@__PURE__*/ proto3.makeMessageType(
  "quivr.models.Proposition.Threshold",
  () => [
    { no: 1, name: "challenges", kind: "message", T: Proposition, repeated: true },
    { no: 2, name: "threshold", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
  {localName: "Proposition_Threshold"},
);

/**
 * a proposition that can be satisfied if the proposition is contains is not satisfied
 *
 * @generated from message quivr.models.Proposition.Not
 */
export const Proposition_Not = /*@__PURE__*/ proto3.makeMessageType(
  "quivr.models.Proposition.Not",
  () => [
    { no: 1, name: "proposition", kind: "message", T: Proposition },
  ],
  {localName: "Proposition_Not"},
);

/**
 * a proposition that can be satisfied if the prositions contained are both satisfied
 *
 * @generated from message quivr.models.Proposition.And
 */
export const Proposition_And = /*@__PURE__*/ proto3.makeMessageType(
  "quivr.models.Proposition.And",
  () => [
    { no: 1, name: "left", kind: "message", T: Proposition },
    { no: 2, name: "right", kind: "message", T: Proposition },
  ],
  {localName: "Proposition_And"},
);

/**
 * a proposition that can be satisfied if either of the propositions contained are both satisfied
 *
 * @generated from message quivr.models.Proposition.Or
 */
export const Proposition_Or = /*@__PURE__*/ proto3.makeMessageType(
  "quivr.models.Proposition.Or",
  () => [
    { no: 1, name: "left", kind: "message", T: Proposition },
    { no: 2, name: "right", kind: "message", T: Proposition },
  ],
  {localName: "Proposition_Or"},
);

