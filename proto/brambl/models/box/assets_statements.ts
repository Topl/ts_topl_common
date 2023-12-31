/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.6.1
 * source: brambl/models/box/assets_statements.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../validate/validate";
import * as dependency_2 from "./../../../quivr/models/shared";
import * as dependency_3 from "./../address";
import * as dependency_4 from "./../../../google/protobuf/wrappers";
import * as dependency_5 from "./../../../google/protobuf/struct";
import * as pb_1 from "google-protobuf";
export namespace co.topl.brambl.models.box {
    export class AssetMintingStatement extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            groupTokenUtxo?: dependency_3.co.topl.brambl.models.TransactionOutputAddress;
            seriesTokenUtxo?: dependency_3.co.topl.brambl.models.TransactionOutputAddress;
            quantity?: dependency_2.quivr.models.Int128;
            permanentMetadata?: dependency_5.google.protobuf.Struct;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("groupTokenUtxo" in data && data.groupTokenUtxo != undefined) {
                    this.groupTokenUtxo = data.groupTokenUtxo;
                }
                if ("seriesTokenUtxo" in data && data.seriesTokenUtxo != undefined) {
                    this.seriesTokenUtxo = data.seriesTokenUtxo;
                }
                if ("quantity" in data && data.quantity != undefined) {
                    this.quantity = data.quantity;
                }
                if ("permanentMetadata" in data && data.permanentMetadata != undefined) {
                    this.permanentMetadata = data.permanentMetadata;
                }
            }
        }
        get groupTokenUtxo() {
            return pb_1.Message.getWrapperField(this, dependency_3.co.topl.brambl.models.TransactionOutputAddress, 1) as dependency_3.co.topl.brambl.models.TransactionOutputAddress;
        }
        set groupTokenUtxo(value: dependency_3.co.topl.brambl.models.TransactionOutputAddress) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_groupTokenUtxo() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get seriesTokenUtxo() {
            return pb_1.Message.getWrapperField(this, dependency_3.co.topl.brambl.models.TransactionOutputAddress, 2) as dependency_3.co.topl.brambl.models.TransactionOutputAddress;
        }
        set seriesTokenUtxo(value: dependency_3.co.topl.brambl.models.TransactionOutputAddress) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_seriesTokenUtxo() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get quantity() {
            return pb_1.Message.getWrapperField(this, dependency_2.quivr.models.Int128, 3) as dependency_2.quivr.models.Int128;
        }
        set quantity(value: dependency_2.quivr.models.Int128) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_quantity() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get permanentMetadata() {
            return pb_1.Message.getWrapperField(this, dependency_5.google.protobuf.Struct, 4) as dependency_5.google.protobuf.Struct;
        }
        set permanentMetadata(value: dependency_5.google.protobuf.Struct) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get has_permanentMetadata() {
            return pb_1.Message.getField(this, 4) != null;
        }
        static fromObject(data: {
            groupTokenUtxo?: ReturnType<typeof dependency_3.co.topl.brambl.models.TransactionOutputAddress.prototype.toObject>;
            seriesTokenUtxo?: ReturnType<typeof dependency_3.co.topl.brambl.models.TransactionOutputAddress.prototype.toObject>;
            quantity?: ReturnType<typeof dependency_2.quivr.models.Int128.prototype.toObject>;
            permanentMetadata?: ReturnType<typeof dependency_5.google.protobuf.Struct.prototype.toObject>;
        }): AssetMintingStatement {
            const message = new AssetMintingStatement({});
            if (data.groupTokenUtxo != null) {
                message.groupTokenUtxo = dependency_3.co.topl.brambl.models.TransactionOutputAddress.fromObject(data.groupTokenUtxo);
            }
            if (data.seriesTokenUtxo != null) {
                message.seriesTokenUtxo = dependency_3.co.topl.brambl.models.TransactionOutputAddress.fromObject(data.seriesTokenUtxo);
            }
            if (data.quantity != null) {
                message.quantity = dependency_2.quivr.models.Int128.fromObject(data.quantity);
            }
            if (data.permanentMetadata != null) {
                message.permanentMetadata = dependency_5.google.protobuf.Struct.fromObject(data.permanentMetadata);
            }
            return message;
        }
        toObject() {
            const data: {
                groupTokenUtxo?: ReturnType<typeof dependency_3.co.topl.brambl.models.TransactionOutputAddress.prototype.toObject>;
                seriesTokenUtxo?: ReturnType<typeof dependency_3.co.topl.brambl.models.TransactionOutputAddress.prototype.toObject>;
                quantity?: ReturnType<typeof dependency_2.quivr.models.Int128.prototype.toObject>;
                permanentMetadata?: ReturnType<typeof dependency_5.google.protobuf.Struct.prototype.toObject>;
            } = {};
            if (this.groupTokenUtxo != null) {
                data.groupTokenUtxo = this.groupTokenUtxo.toObject();
            }
            if (this.seriesTokenUtxo != null) {
                data.seriesTokenUtxo = this.seriesTokenUtxo.toObject();
            }
            if (this.quantity != null) {
                data.quantity = this.quantity.toObject();
            }
            if (this.permanentMetadata != null) {
                data.permanentMetadata = this.permanentMetadata.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_groupTokenUtxo)
                writer.writeMessage(1, this.groupTokenUtxo, () => this.groupTokenUtxo.serialize(writer));
            if (this.has_seriesTokenUtxo)
                writer.writeMessage(2, this.seriesTokenUtxo, () => this.seriesTokenUtxo.serialize(writer));
            if (this.has_quantity)
                writer.writeMessage(3, this.quantity, () => this.quantity.serialize(writer));
            if (this.has_permanentMetadata)
                writer.writeMessage(4, this.permanentMetadata, () => this.permanentMetadata.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AssetMintingStatement {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AssetMintingStatement();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.groupTokenUtxo, () => message.groupTokenUtxo = dependency_3.co.topl.brambl.models.TransactionOutputAddress.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.seriesTokenUtxo, () => message.seriesTokenUtxo = dependency_3.co.topl.brambl.models.TransactionOutputAddress.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.quantity, () => message.quantity = dependency_2.quivr.models.Int128.deserialize(reader));
                        break;
                    case 4:
                        reader.readMessage(message.permanentMetadata, () => message.permanentMetadata = dependency_5.google.protobuf.Struct.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AssetMintingStatement {
            return AssetMintingStatement.deserialize(bytes);
        }
    }
    export class AssetMergingStatement extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            inputUtxos?: dependency_3.co.topl.brambl.models.TransactionOutputAddress[];
            outputIdx?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("inputUtxos" in data && data.inputUtxos != undefined) {
                    this.inputUtxos = data.inputUtxos;
                }
                if ("outputIdx" in data && data.outputIdx != undefined) {
                    this.outputIdx = data.outputIdx;
                }
            }
        }
        get inputUtxos() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.co.topl.brambl.models.TransactionOutputAddress, 1) as dependency_3.co.topl.brambl.models.TransactionOutputAddress[];
        }
        set inputUtxos(value: dependency_3.co.topl.brambl.models.TransactionOutputAddress[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get outputIdx() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set outputIdx(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            inputUtxos?: ReturnType<typeof dependency_3.co.topl.brambl.models.TransactionOutputAddress.prototype.toObject>[];
            outputIdx?: number;
        }): AssetMergingStatement {
            const message = new AssetMergingStatement({});
            if (data.inputUtxos != null) {
                message.inputUtxos = data.inputUtxos.map(item => dependency_3.co.topl.brambl.models.TransactionOutputAddress.fromObject(item));
            }
            if (data.outputIdx != null) {
                message.outputIdx = data.outputIdx;
            }
            return message;
        }
        toObject() {
            const data: {
                inputUtxos?: ReturnType<typeof dependency_3.co.topl.brambl.models.TransactionOutputAddress.prototype.toObject>[];
                outputIdx?: number;
            } = {};
            if (this.inputUtxos != null) {
                data.inputUtxos = this.inputUtxos.map((item: dependency_3.co.topl.brambl.models.TransactionOutputAddress) => item.toObject());
            }
            if (this.outputIdx != null) {
                data.outputIdx = this.outputIdx;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.inputUtxos.length)
                writer.writeRepeatedMessage(1, this.inputUtxos, (item: dependency_3.co.topl.brambl.models.TransactionOutputAddress) => item.serialize(writer));
            if (this.outputIdx != 0)
                writer.writeUint32(2, this.outputIdx);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AssetMergingStatement {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AssetMergingStatement();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.inputUtxos, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_3.co.topl.brambl.models.TransactionOutputAddress.deserialize(reader), dependency_3.co.topl.brambl.models.TransactionOutputAddress));
                        break;
                    case 2:
                        message.outputIdx = reader.readUint32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AssetMergingStatement {
            return AssetMergingStatement.deserialize(bytes);
        }
    }
    export class AssetSplittingStatement extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            outputIndexes?: dependency_4.google.protobuf.UInt32Value[];
            inputUtxo?: dependency_3.co.topl.brambl.models.TransactionOutputAddress;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("outputIndexes" in data && data.outputIndexes != undefined) {
                    this.outputIndexes = data.outputIndexes;
                }
                if ("inputUtxo" in data && data.inputUtxo != undefined) {
                    this.inputUtxo = data.inputUtxo;
                }
            }
        }
        get outputIndexes() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.google.protobuf.UInt32Value, 1) as dependency_4.google.protobuf.UInt32Value[];
        }
        set outputIndexes(value: dependency_4.google.protobuf.UInt32Value[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get inputUtxo() {
            return pb_1.Message.getWrapperField(this, dependency_3.co.topl.brambl.models.TransactionOutputAddress, 2) as dependency_3.co.topl.brambl.models.TransactionOutputAddress;
        }
        set inputUtxo(value: dependency_3.co.topl.brambl.models.TransactionOutputAddress) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_inputUtxo() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            outputIndexes?: ReturnType<typeof dependency_4.google.protobuf.UInt32Value.prototype.toObject>[];
            inputUtxo?: ReturnType<typeof dependency_3.co.topl.brambl.models.TransactionOutputAddress.prototype.toObject>;
        }): AssetSplittingStatement {
            const message = new AssetSplittingStatement({});
            if (data.outputIndexes != null) {
                message.outputIndexes = data.outputIndexes.map(item => dependency_4.google.protobuf.UInt32Value.fromObject(item));
            }
            if (data.inputUtxo != null) {
                message.inputUtxo = dependency_3.co.topl.brambl.models.TransactionOutputAddress.fromObject(data.inputUtxo);
            }
            return message;
        }
        toObject() {
            const data: {
                outputIndexes?: ReturnType<typeof dependency_4.google.protobuf.UInt32Value.prototype.toObject>[];
                inputUtxo?: ReturnType<typeof dependency_3.co.topl.brambl.models.TransactionOutputAddress.prototype.toObject>;
            } = {};
            if (this.outputIndexes != null) {
                data.outputIndexes = this.outputIndexes.map((item: dependency_4.google.protobuf.UInt32Value) => item.toObject());
            }
            if (this.inputUtxo != null) {
                data.inputUtxo = this.inputUtxo.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.outputIndexes.length)
                writer.writeRepeatedMessage(1, this.outputIndexes, (item: dependency_4.google.protobuf.UInt32Value) => item.serialize(writer));
            if (this.has_inputUtxo)
                writer.writeMessage(2, this.inputUtxo, () => this.inputUtxo.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AssetSplittingStatement {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AssetSplittingStatement();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.outputIndexes, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.google.protobuf.UInt32Value.deserialize(reader), dependency_4.google.protobuf.UInt32Value));
                        break;
                    case 2:
                        reader.readMessage(message.inputUtxo, () => message.inputUtxo = dependency_3.co.topl.brambl.models.TransactionOutputAddress.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AssetSplittingStatement {
            return AssetSplittingStatement.deserialize(bytes);
        }
    }
}
