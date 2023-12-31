/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.6.1
 * source: brambl/models/transaction/io_transaction.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../validate/validate";
import * as dependency_2 from "./../datum";
import * as dependency_3 from "./../identifier";
import * as dependency_4 from "./spent_transaction_output";
import * as dependency_5 from "./unspent_transaction_output";
import * as dependency_6 from "./../box/assets_statements";
import * as pb_1 from "google-protobuf";
export namespace co.topl.brambl.models.transaction {
    export class IoTransaction extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            transactionId?: dependency_3.co.topl.brambl.models.TransactionId;
            inputs?: dependency_4.co.topl.brambl.models.transaction.SpentTransactionOutput[];
            outputs?: dependency_5.co.topl.brambl.models.transaction.UnspentTransactionOutput[];
            datum?: dependency_2.co.topl.brambl.models.Datum.IoTransaction;
            groupPolicies?: dependency_2.co.topl.brambl.models.Datum.GroupPolicy[];
            seriesPolicies?: dependency_2.co.topl.brambl.models.Datum.SeriesPolicy[];
            mintingStatements?: dependency_6.co.topl.brambl.models.box.AssetMintingStatement[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 2, 5, 6, 7], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("transactionId" in data && data.transactionId != undefined) {
                    this.transactionId = data.transactionId;
                }
                if ("inputs" in data && data.inputs != undefined) {
                    this.inputs = data.inputs;
                }
                if ("outputs" in data && data.outputs != undefined) {
                    this.outputs = data.outputs;
                }
                if ("datum" in data && data.datum != undefined) {
                    this.datum = data.datum;
                }
                if ("groupPolicies" in data && data.groupPolicies != undefined) {
                    this.groupPolicies = data.groupPolicies;
                }
                if ("seriesPolicies" in data && data.seriesPolicies != undefined) {
                    this.seriesPolicies = data.seriesPolicies;
                }
                if ("mintingStatements" in data && data.mintingStatements != undefined) {
                    this.mintingStatements = data.mintingStatements;
                }
            }
        }
        get transactionId() {
            return pb_1.Message.getWrapperField(this, dependency_3.co.topl.brambl.models.TransactionId, 4) as dependency_3.co.topl.brambl.models.TransactionId;
        }
        set transactionId(value: dependency_3.co.topl.brambl.models.TransactionId) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get has_transactionId() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get inputs() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.co.topl.brambl.models.transaction.SpentTransactionOutput, 1) as dependency_4.co.topl.brambl.models.transaction.SpentTransactionOutput[];
        }
        set inputs(value: dependency_4.co.topl.brambl.models.transaction.SpentTransactionOutput[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get outputs() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_5.co.topl.brambl.models.transaction.UnspentTransactionOutput, 2) as dependency_5.co.topl.brambl.models.transaction.UnspentTransactionOutput[];
        }
        set outputs(value: dependency_5.co.topl.brambl.models.transaction.UnspentTransactionOutput[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get datum() {
            return pb_1.Message.getWrapperField(this, dependency_2.co.topl.brambl.models.Datum.IoTransaction, 3) as dependency_2.co.topl.brambl.models.Datum.IoTransaction;
        }
        set datum(value: dependency_2.co.topl.brambl.models.Datum.IoTransaction) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_datum() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get groupPolicies() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.co.topl.brambl.models.Datum.GroupPolicy, 5) as dependency_2.co.topl.brambl.models.Datum.GroupPolicy[];
        }
        set groupPolicies(value: dependency_2.co.topl.brambl.models.Datum.GroupPolicy[]) {
            pb_1.Message.setRepeatedWrapperField(this, 5, value);
        }
        get seriesPolicies() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.co.topl.brambl.models.Datum.SeriesPolicy, 6) as dependency_2.co.topl.brambl.models.Datum.SeriesPolicy[];
        }
        set seriesPolicies(value: dependency_2.co.topl.brambl.models.Datum.SeriesPolicy[]) {
            pb_1.Message.setRepeatedWrapperField(this, 6, value);
        }
        get mintingStatements() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_6.co.topl.brambl.models.box.AssetMintingStatement, 7) as dependency_6.co.topl.brambl.models.box.AssetMintingStatement[];
        }
        set mintingStatements(value: dependency_6.co.topl.brambl.models.box.AssetMintingStatement[]) {
            pb_1.Message.setRepeatedWrapperField(this, 7, value);
        }
        static fromObject(data: {
            transactionId?: ReturnType<typeof dependency_3.co.topl.brambl.models.TransactionId.prototype.toObject>;
            inputs?: ReturnType<typeof dependency_4.co.topl.brambl.models.transaction.SpentTransactionOutput.prototype.toObject>[];
            outputs?: ReturnType<typeof dependency_5.co.topl.brambl.models.transaction.UnspentTransactionOutput.prototype.toObject>[];
            datum?: ReturnType<typeof dependency_2.co.topl.brambl.models.Datum.IoTransaction.prototype.toObject>;
            groupPolicies?: ReturnType<typeof dependency_2.co.topl.brambl.models.Datum.GroupPolicy.prototype.toObject>[];
            seriesPolicies?: ReturnType<typeof dependency_2.co.topl.brambl.models.Datum.SeriesPolicy.prototype.toObject>[];
            mintingStatements?: ReturnType<typeof dependency_6.co.topl.brambl.models.box.AssetMintingStatement.prototype.toObject>[];
        }): IoTransaction {
            const message = new IoTransaction({});
            if (data.transactionId != null) {
                message.transactionId = dependency_3.co.topl.brambl.models.TransactionId.fromObject(data.transactionId);
            }
            if (data.inputs != null) {
                message.inputs = data.inputs.map(item => dependency_4.co.topl.brambl.models.transaction.SpentTransactionOutput.fromObject(item));
            }
            if (data.outputs != null) {
                message.outputs = data.outputs.map(item => dependency_5.co.topl.brambl.models.transaction.UnspentTransactionOutput.fromObject(item));
            }
            if (data.datum != null) {
                message.datum = dependency_2.co.topl.brambl.models.Datum.IoTransaction.fromObject(data.datum);
            }
            if (data.groupPolicies != null) {
                message.groupPolicies = data.groupPolicies.map(item => dependency_2.co.topl.brambl.models.Datum.GroupPolicy.fromObject(item));
            }
            if (data.seriesPolicies != null) {
                message.seriesPolicies = data.seriesPolicies.map(item => dependency_2.co.topl.brambl.models.Datum.SeriesPolicy.fromObject(item));
            }
            if (data.mintingStatements != null) {
                message.mintingStatements = data.mintingStatements.map(item => dependency_6.co.topl.brambl.models.box.AssetMintingStatement.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                transactionId?: ReturnType<typeof dependency_3.co.topl.brambl.models.TransactionId.prototype.toObject>;
                inputs?: ReturnType<typeof dependency_4.co.topl.brambl.models.transaction.SpentTransactionOutput.prototype.toObject>[];
                outputs?: ReturnType<typeof dependency_5.co.topl.brambl.models.transaction.UnspentTransactionOutput.prototype.toObject>[];
                datum?: ReturnType<typeof dependency_2.co.topl.brambl.models.Datum.IoTransaction.prototype.toObject>;
                groupPolicies?: ReturnType<typeof dependency_2.co.topl.brambl.models.Datum.GroupPolicy.prototype.toObject>[];
                seriesPolicies?: ReturnType<typeof dependency_2.co.topl.brambl.models.Datum.SeriesPolicy.prototype.toObject>[];
                mintingStatements?: ReturnType<typeof dependency_6.co.topl.brambl.models.box.AssetMintingStatement.prototype.toObject>[];
            } = {};
            if (this.transactionId != null) {
                data.transactionId = this.transactionId.toObject();
            }
            if (this.inputs != null) {
                data.inputs = this.inputs.map((item: dependency_4.co.topl.brambl.models.transaction.SpentTransactionOutput) => item.toObject());
            }
            if (this.outputs != null) {
                data.outputs = this.outputs.map((item: dependency_5.co.topl.brambl.models.transaction.UnspentTransactionOutput) => item.toObject());
            }
            if (this.datum != null) {
                data.datum = this.datum.toObject();
            }
            if (this.groupPolicies != null) {
                data.groupPolicies = this.groupPolicies.map((item: dependency_2.co.topl.brambl.models.Datum.GroupPolicy) => item.toObject());
            }
            if (this.seriesPolicies != null) {
                data.seriesPolicies = this.seriesPolicies.map((item: dependency_2.co.topl.brambl.models.Datum.SeriesPolicy) => item.toObject());
            }
            if (this.mintingStatements != null) {
                data.mintingStatements = this.mintingStatements.map((item: dependency_6.co.topl.brambl.models.box.AssetMintingStatement) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_transactionId)
                writer.writeMessage(4, this.transactionId, () => this.transactionId.serialize(writer));
            if (this.inputs.length)
                writer.writeRepeatedMessage(1, this.inputs, (item: dependency_4.co.topl.brambl.models.transaction.SpentTransactionOutput) => item.serialize(writer));
            if (this.outputs.length)
                writer.writeRepeatedMessage(2, this.outputs, (item: dependency_5.co.topl.brambl.models.transaction.UnspentTransactionOutput) => item.serialize(writer));
            if (this.has_datum)
                writer.writeMessage(3, this.datum, () => this.datum.serialize(writer));
            if (this.groupPolicies.length)
                writer.writeRepeatedMessage(5, this.groupPolicies, (item: dependency_2.co.topl.brambl.models.Datum.GroupPolicy) => item.serialize(writer));
            if (this.seriesPolicies.length)
                writer.writeRepeatedMessage(6, this.seriesPolicies, (item: dependency_2.co.topl.brambl.models.Datum.SeriesPolicy) => item.serialize(writer));
            if (this.mintingStatements.length)
                writer.writeRepeatedMessage(7, this.mintingStatements, (item: dependency_6.co.topl.brambl.models.box.AssetMintingStatement) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): IoTransaction {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new IoTransaction();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 4:
                        reader.readMessage(message.transactionId, () => message.transactionId = dependency_3.co.topl.brambl.models.TransactionId.deserialize(reader));
                        break;
                    case 1:
                        reader.readMessage(message.inputs, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.co.topl.brambl.models.transaction.SpentTransactionOutput.deserialize(reader), dependency_4.co.topl.brambl.models.transaction.SpentTransactionOutput));
                        break;
                    case 2:
                        reader.readMessage(message.outputs, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_5.co.topl.brambl.models.transaction.UnspentTransactionOutput.deserialize(reader), dependency_5.co.topl.brambl.models.transaction.UnspentTransactionOutput));
                        break;
                    case 3:
                        reader.readMessage(message.datum, () => message.datum = dependency_2.co.topl.brambl.models.Datum.IoTransaction.deserialize(reader));
                        break;
                    case 5:
                        reader.readMessage(message.groupPolicies, () => pb_1.Message.addToRepeatedWrapperField(message, 5, dependency_2.co.topl.brambl.models.Datum.GroupPolicy.deserialize(reader), dependency_2.co.topl.brambl.models.Datum.GroupPolicy));
                        break;
                    case 6:
                        reader.readMessage(message.seriesPolicies, () => pb_1.Message.addToRepeatedWrapperField(message, 6, dependency_2.co.topl.brambl.models.Datum.SeriesPolicy.deserialize(reader), dependency_2.co.topl.brambl.models.Datum.SeriesPolicy));
                        break;
                    case 7:
                        reader.readMessage(message.mintingStatements, () => pb_1.Message.addToRepeatedWrapperField(message, 7, dependency_6.co.topl.brambl.models.box.AssetMintingStatement.deserialize(reader), dependency_6.co.topl.brambl.models.box.AssetMintingStatement));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): IoTransaction {
            return IoTransaction.deserialize(bytes);
        }
    }
}
