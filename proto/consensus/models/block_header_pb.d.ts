// package: co.topl.consensus.models
// file: consensus/models/block_header.proto

import * as jspb from "google-protobuf";
import * as consensus_models_block_id_pb from "../../consensus/models/block_id_pb";
import * as consensus_models_eligibility_certificate_pb from "../../consensus/models/eligibility_certificate_pb";
import * as consensus_models_operational_certificate_pb from "../../consensus/models/operational_certificate_pb";
import * as consensus_models_staking_pb from "../../consensus/models/staking_pb";
import * as consensus_models_protocol_version_pb from "../../consensus/models/protocol_version_pb";
import * as validate_validate_pb from "../../validate/validate_pb";

export class BlockHeader extends jspb.Message {
  hasHeaderid(): boolean;
  clearHeaderid(): void;
  getHeaderid(): consensus_models_block_id_pb.BlockId | undefined;
  setHeaderid(value?: consensus_models_block_id_pb.BlockId): void;

  hasParentheaderid(): boolean;
  clearParentheaderid(): void;
  getParentheaderid(): consensus_models_block_id_pb.BlockId | undefined;
  setParentheaderid(value?: consensus_models_block_id_pb.BlockId): void;

  getParentslot(): number;
  setParentslot(value: number): void;

  getTxroot(): Uint8Array | string;
  getTxroot_asU8(): Uint8Array;
  getTxroot_asB64(): string;
  setTxroot(value: Uint8Array | string): void;

  getBloomfilter(): Uint8Array | string;
  getBloomfilter_asU8(): Uint8Array;
  getBloomfilter_asB64(): string;
  setBloomfilter(value: Uint8Array | string): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getSlot(): number;
  setSlot(value: number): void;

  hasEligibilitycertificate(): boolean;
  clearEligibilitycertificate(): void;
  getEligibilitycertificate(): consensus_models_eligibility_certificate_pb.EligibilityCertificate | undefined;
  setEligibilitycertificate(value?: consensus_models_eligibility_certificate_pb.EligibilityCertificate): void;

  hasOperationalcertificate(): boolean;
  clearOperationalcertificate(): void;
  getOperationalcertificate(): consensus_models_operational_certificate_pb.OperationalCertificate | undefined;
  setOperationalcertificate(value?: consensus_models_operational_certificate_pb.OperationalCertificate): void;

  getMetadata(): Uint8Array | string;
  getMetadata_asU8(): Uint8Array;
  getMetadata_asB64(): string;
  setMetadata(value: Uint8Array | string): void;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): consensus_models_staking_pb.StakingAddress | undefined;
  setAddress(value?: consensus_models_staking_pb.StakingAddress): void;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): consensus_models_protocol_version_pb.ProtocolVersion | undefined;
  setVersion(value?: consensus_models_protocol_version_pb.ProtocolVersion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockHeader.AsObject;
  static toObject(includeInstance: boolean, msg: BlockHeader): BlockHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlockHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockHeader;
  static deserializeBinaryFromReader(message: BlockHeader, reader: jspb.BinaryReader): BlockHeader;
}

export namespace BlockHeader {
  export type AsObject = {
    headerid?: consensus_models_block_id_pb.BlockId.AsObject,
    parentheaderid?: consensus_models_block_id_pb.BlockId.AsObject,
    parentslot: number,
    txroot: Uint8Array | string,
    bloomfilter: Uint8Array | string,
    timestamp: number,
    height: number,
    slot: number,
    eligibilitycertificate?: consensus_models_eligibility_certificate_pb.EligibilityCertificate.AsObject,
    operationalcertificate?: consensus_models_operational_certificate_pb.OperationalCertificate.AsObject,
    metadata: Uint8Array | string,
    address?: consensus_models_staking_pb.StakingAddress.AsObject,
    version?: consensus_models_protocol_version_pb.ProtocolVersion.AsObject,
  }
}

