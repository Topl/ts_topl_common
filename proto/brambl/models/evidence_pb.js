// @generated by protoc-gen-es v1.8.0
// @generated from file brambl/models/evidence.proto (package co.topl.brambl.models, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Digest } from "../../quivr/models/shared_pb.js";

/**
 * Evidence should be a succinct, unique set of bytes used to distinguish between any two data objects.
 * Evidence is also meant to have a minimal amount of structure such that other domains may provide
 * their own similarly unique & succinct values. Quivr can cast such external domain "evidence" into Topl evidence
 * through the use of ContainsSignable[Evidence[_]]
 *
 * @generated from message co.topl.brambl.models.Evidence
 */
export const Evidence = /*@__PURE__*/ proto3.makeMessageType(
  "co.topl.brambl.models.Evidence",
  () => [
    { no: 1, name: "digest", kind: "message", T: Digest },
  ],
);
