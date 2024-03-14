// package: co.topl.brambl.models.box
// file: brambl/models/box/value.proto

import * as jspb from "google-protobuf";
import * as validate_validate_pb from "../../../validate/validate_pb";
import * as quivr_models_shared_pb from "../../../quivr/models/shared_pb";
import * as consensus_models_staking_pb from "../../../consensus/models/staking_pb";
import * as brambl_models_identifier_pb from "../../../brambl/models/identifier_pb";
import * as brambl_models_box_asset_pb from "../../../brambl/models/box/asset_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class Value extends jspb.Message {
  hasLvl(): boolean;
  clearLvl(): void;
  getLvl(): Value.LVL | undefined;
  setLvl(value?: Value.LVL): void;

  hasTopl(): boolean;
  clearTopl(): void;
  getTopl(): Value.TOPL | undefined;
  setTopl(value?: Value.TOPL): void;

  hasAsset(): boolean;
  clearAsset(): void;
  getAsset(): Value.Asset | undefined;
  setAsset(value?: Value.Asset): void;

  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): Value.Group | undefined;
  setGroup(value?: Value.Group): void;

  hasSeries(): boolean;
  clearSeries(): void;
  getSeries(): Value.Series | undefined;
  setSeries(value?: Value.Series): void;

  hasUpdateproposal(): boolean;
  clearUpdateproposal(): void;
  getUpdateproposal(): Value.UpdateProposal | undefined;
  setUpdateproposal(value?: Value.UpdateProposal): void;

  getValueCase(): Value.ValueCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Value.AsObject;
  static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Value;
  static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
  export type AsObject = {
    lvl?: Value.LVL.AsObject,
    topl?: Value.TOPL.AsObject,
    asset?: Value.Asset.AsObject,
    group?: Value.Group.AsObject,
    series?: Value.Series.AsObject,
    updateproposal?: Value.UpdateProposal.AsObject,
  }

  export class LVL extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): quivr_models_shared_pb.Int128 | undefined;
    setQuantity(value?: quivr_models_shared_pb.Int128): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LVL.AsObject;
    static toObject(includeInstance: boolean, msg: LVL): LVL.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LVL, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LVL;
    static deserializeBinaryFromReader(message: LVL, reader: jspb.BinaryReader): LVL;
  }

  export namespace LVL {
    export type AsObject = {
      quantity?: quivr_models_shared_pb.Int128.AsObject,
    }
  }

  export class TOPL extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): quivr_models_shared_pb.Int128 | undefined;
    setQuantity(value?: quivr_models_shared_pb.Int128): void;

    hasRegistration(): boolean;
    clearRegistration(): void;
    getRegistration(): consensus_models_staking_pb.StakingRegistration | undefined;
    setRegistration(value?: consensus_models_staking_pb.StakingRegistration): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TOPL.AsObject;
    static toObject(includeInstance: boolean, msg: TOPL): TOPL.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TOPL, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TOPL;
    static deserializeBinaryFromReader(message: TOPL, reader: jspb.BinaryReader): TOPL;
  }

  export namespace TOPL {
    export type AsObject = {
      quantity?: quivr_models_shared_pb.Int128.AsObject,
      registration?: consensus_models_staking_pb.StakingRegistration.AsObject,
    }
  }

  export class Asset extends jspb.Message {
    hasGroupid(): boolean;
    clearGroupid(): void;
    getGroupid(): brambl_models_identifier_pb.GroupId | undefined;
    setGroupid(value?: brambl_models_identifier_pb.GroupId): void;

    hasSeriesid(): boolean;
    clearSeriesid(): void;
    getSeriesid(): brambl_models_identifier_pb.SeriesId | undefined;
    setSeriesid(value?: brambl_models_identifier_pb.SeriesId): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): quivr_models_shared_pb.Int128 | undefined;
    setQuantity(value?: quivr_models_shared_pb.Int128): void;

    hasGroupalloy(): boolean;
    clearGroupalloy(): void;
    getGroupalloy(): google_protobuf_wrappers_pb.BytesValue | undefined;
    setGroupalloy(value?: google_protobuf_wrappers_pb.BytesValue): void;

    hasSeriesalloy(): boolean;
    clearSeriesalloy(): void;
    getSeriesalloy(): google_protobuf_wrappers_pb.BytesValue | undefined;
    setSeriesalloy(value?: google_protobuf_wrappers_pb.BytesValue): void;

    getFungibility(): brambl_models_box_asset_pb.FungibilityTypeMap[keyof brambl_models_box_asset_pb.FungibilityTypeMap];
    setFungibility(value: brambl_models_box_asset_pb.FungibilityTypeMap[keyof brambl_models_box_asset_pb.FungibilityTypeMap]): void;

    getQuantitydescriptor(): brambl_models_box_asset_pb.QuantityDescriptorTypeMap[keyof brambl_models_box_asset_pb.QuantityDescriptorTypeMap];
    setQuantitydescriptor(value: brambl_models_box_asset_pb.QuantityDescriptorTypeMap[keyof brambl_models_box_asset_pb.QuantityDescriptorTypeMap]): void;

    hasEphemeralmetadata(): boolean;
    clearEphemeralmetadata(): void;
    getEphemeralmetadata(): google_protobuf_struct_pb.Struct | undefined;
    setEphemeralmetadata(value?: google_protobuf_struct_pb.Struct): void;

    hasCommitment(): boolean;
    clearCommitment(): void;
    getCommitment(): google_protobuf_wrappers_pb.BytesValue | undefined;
    setCommitment(value?: google_protobuf_wrappers_pb.BytesValue): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Asset.AsObject;
    static toObject(includeInstance: boolean, msg: Asset): Asset.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Asset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Asset;
    static deserializeBinaryFromReader(message: Asset, reader: jspb.BinaryReader): Asset;
  }

  export namespace Asset {
    export type AsObject = {
      groupid?: brambl_models_identifier_pb.GroupId.AsObject,
      seriesid?: brambl_models_identifier_pb.SeriesId.AsObject,
      quantity?: quivr_models_shared_pb.Int128.AsObject,
      groupalloy?: google_protobuf_wrappers_pb.BytesValue.AsObject,
      seriesalloy?: google_protobuf_wrappers_pb.BytesValue.AsObject,
      fungibility: brambl_models_box_asset_pb.FungibilityTypeMap[keyof brambl_models_box_asset_pb.FungibilityTypeMap],
      quantitydescriptor: brambl_models_box_asset_pb.QuantityDescriptorTypeMap[keyof brambl_models_box_asset_pb.QuantityDescriptorTypeMap],
      ephemeralmetadata?: google_protobuf_struct_pb.Struct.AsObject,
      commitment?: google_protobuf_wrappers_pb.BytesValue.AsObject,
    }
  }

  export class Group extends jspb.Message {
    hasGroupid(): boolean;
    clearGroupid(): void;
    getGroupid(): brambl_models_identifier_pb.GroupId | undefined;
    setGroupid(value?: brambl_models_identifier_pb.GroupId): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): quivr_models_shared_pb.Int128 | undefined;
    setQuantity(value?: quivr_models_shared_pb.Int128): void;

    hasFixedseries(): boolean;
    clearFixedseries(): void;
    getFixedseries(): brambl_models_identifier_pb.SeriesId | undefined;
    setFixedseries(value?: brambl_models_identifier_pb.SeriesId): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Group.AsObject;
    static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Group;
    static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
  }

  export namespace Group {
    export type AsObject = {
      groupid?: brambl_models_identifier_pb.GroupId.AsObject,
      quantity?: quivr_models_shared_pb.Int128.AsObject,
      fixedseries?: brambl_models_identifier_pb.SeriesId.AsObject,
    }
  }

  export class Series extends jspb.Message {
    hasSeriesid(): boolean;
    clearSeriesid(): void;
    getSeriesid(): brambl_models_identifier_pb.SeriesId | undefined;
    setSeriesid(value?: brambl_models_identifier_pb.SeriesId): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): quivr_models_shared_pb.Int128 | undefined;
    setQuantity(value?: quivr_models_shared_pb.Int128): void;

    hasTokensupply(): boolean;
    clearTokensupply(): void;
    getTokensupply(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setTokensupply(value?: google_protobuf_wrappers_pb.UInt32Value): void;

    getQuantitydescriptor(): brambl_models_box_asset_pb.QuantityDescriptorTypeMap[keyof brambl_models_box_asset_pb.QuantityDescriptorTypeMap];
    setQuantitydescriptor(value: brambl_models_box_asset_pb.QuantityDescriptorTypeMap[keyof brambl_models_box_asset_pb.QuantityDescriptorTypeMap]): void;

    getFungibility(): brambl_models_box_asset_pb.FungibilityTypeMap[keyof brambl_models_box_asset_pb.FungibilityTypeMap];
    setFungibility(value: brambl_models_box_asset_pb.FungibilityTypeMap[keyof brambl_models_box_asset_pb.FungibilityTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Series.AsObject;
    static toObject(includeInstance: boolean, msg: Series): Series.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Series, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Series;
    static deserializeBinaryFromReader(message: Series, reader: jspb.BinaryReader): Series;
  }

  export namespace Series {
    export type AsObject = {
      seriesid?: brambl_models_identifier_pb.SeriesId.AsObject,
      quantity?: quivr_models_shared_pb.Int128.AsObject,
      tokensupply?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
      quantitydescriptor: brambl_models_box_asset_pb.QuantityDescriptorTypeMap[keyof brambl_models_box_asset_pb.QuantityDescriptorTypeMap],
      fungibility: brambl_models_box_asset_pb.FungibilityTypeMap[keyof brambl_models_box_asset_pb.FungibilityTypeMap],
    }
  }

  export class UpdateProposal extends jspb.Message {
    getLabel(): string;
    setLabel(value: string): void;

    hasFeffective(): boolean;
    clearFeffective(): void;
    getFeffective(): quivr_models_shared_pb.Ratio | undefined;
    setFeffective(value?: quivr_models_shared_pb.Ratio): void;

    hasVrflddcutoff(): boolean;
    clearVrflddcutoff(): void;
    getVrflddcutoff(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setVrflddcutoff(value?: google_protobuf_wrappers_pb.UInt32Value): void;

    hasVrfprecision(): boolean;
    clearVrfprecision(): void;
    getVrfprecision(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setVrfprecision(value?: google_protobuf_wrappers_pb.UInt32Value): void;

    hasVrfbaselinedifficulty(): boolean;
    clearVrfbaselinedifficulty(): void;
    getVrfbaselinedifficulty(): quivr_models_shared_pb.Ratio | undefined;
    setVrfbaselinedifficulty(value?: quivr_models_shared_pb.Ratio): void;

    hasVrfamplitude(): boolean;
    clearVrfamplitude(): void;
    getVrfamplitude(): quivr_models_shared_pb.Ratio | undefined;
    setVrfamplitude(value?: quivr_models_shared_pb.Ratio): void;

    hasChainselectionklookback(): boolean;
    clearChainselectionklookback(): void;
    getChainselectionklookback(): google_protobuf_wrappers_pb.UInt64Value | undefined;
    setChainselectionklookback(value?: google_protobuf_wrappers_pb.UInt64Value): void;

    hasSlotduration(): boolean;
    clearSlotduration(): void;
    getSlotduration(): google_protobuf_duration_pb.Duration | undefined;
    setSlotduration(value?: google_protobuf_duration_pb.Duration): void;

    hasForwardbiasedslotwindow(): boolean;
    clearForwardbiasedslotwindow(): void;
    getForwardbiasedslotwindow(): google_protobuf_wrappers_pb.UInt64Value | undefined;
    setForwardbiasedslotwindow(value?: google_protobuf_wrappers_pb.UInt64Value): void;

    hasOperationalperiodsperepoch(): boolean;
    clearOperationalperiodsperepoch(): void;
    getOperationalperiodsperepoch(): google_protobuf_wrappers_pb.UInt64Value | undefined;
    setOperationalperiodsperepoch(value?: google_protobuf_wrappers_pb.UInt64Value): void;

    hasKeskeyhours(): boolean;
    clearKeskeyhours(): void;
    getKeskeyhours(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setKeskeyhours(value?: google_protobuf_wrappers_pb.UInt32Value): void;

    hasKeskeyminutes(): boolean;
    clearKeskeyminutes(): void;
    getKeskeyminutes(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setKeskeyminutes(value?: google_protobuf_wrappers_pb.UInt32Value): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateProposal.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateProposal): UpdateProposal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateProposal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateProposal;
    static deserializeBinaryFromReader(message: UpdateProposal, reader: jspb.BinaryReader): UpdateProposal;
  }

  export namespace UpdateProposal {
    export type AsObject = {
      label: string,
      feffective?: quivr_models_shared_pb.Ratio.AsObject,
      vrflddcutoff?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
      vrfprecision?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
      vrfbaselinedifficulty?: quivr_models_shared_pb.Ratio.AsObject,
      vrfamplitude?: quivr_models_shared_pb.Ratio.AsObject,
      chainselectionklookback?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
      slotduration?: google_protobuf_duration_pb.Duration.AsObject,
      forwardbiasedslotwindow?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
      operationalperiodsperepoch?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
      keskeyhours?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
      keskeyminutes?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    }
  }

  export enum ValueCase {
    VALUE_NOT_SET = 0,
    LVL = 1,
    TOPL = 2,
    ASSET = 3,
    GROUP = 4,
    SERIES = 5,
    UPDATEPROPOSAL = 6,
  }
}

