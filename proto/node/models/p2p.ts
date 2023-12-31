/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.6.1
 * source: node/models/p2p.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../validate/validate";
import * as pb_1 from "google-protobuf";
export namespace co.topl.node.models {
    export class CurrentKnownHostsReq extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            maxCount?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("maxCount" in data && data.maxCount != undefined) {
                    this.maxCount = data.maxCount;
                }
            }
        }
        get maxCount() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set maxCount(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            maxCount?: number;
        }): CurrentKnownHostsReq {
            const message = new CurrentKnownHostsReq({});
            if (data.maxCount != null) {
                message.maxCount = data.maxCount;
            }
            return message;
        }
        toObject() {
            const data: {
                maxCount?: number;
            } = {};
            if (this.maxCount != null) {
                data.maxCount = this.maxCount;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.maxCount != 0)
                writer.writeUint32(1, this.maxCount);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CurrentKnownHostsReq {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CurrentKnownHostsReq();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.maxCount = reader.readUint32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): CurrentKnownHostsReq {
            return CurrentKnownHostsReq.deserialize(bytes);
        }
    }
    export class KnownHost extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            host?: string;
            port?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("host" in data && data.host != undefined) {
                    this.host = data.host;
                }
                if ("port" in data && data.port != undefined) {
                    this.port = data.port;
                }
            }
        }
        get host() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set host(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get port() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set port(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            host?: string;
            port?: number;
        }): KnownHost {
            const message = new KnownHost({});
            if (data.host != null) {
                message.host = data.host;
            }
            if (data.port != null) {
                message.port = data.port;
            }
            return message;
        }
        toObject() {
            const data: {
                host?: string;
                port?: number;
            } = {};
            if (this.host != null) {
                data.host = this.host;
            }
            if (this.port != null) {
                data.port = this.port;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.host.length)
                writer.writeString(1, this.host);
            if (this.port != 0)
                writer.writeUint32(2, this.port);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): KnownHost {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new KnownHost();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.host = reader.readString();
                        break;
                    case 2:
                        message.port = reader.readUint32();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): KnownHost {
            return KnownHost.deserialize(bytes);
        }
    }
    export class CurrentKnownHostsRes extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            hotHosts?: KnownHost[];
            warmHosts?: KnownHost[];
            coldHosts?: KnownHost[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 2, 3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("hotHosts" in data && data.hotHosts != undefined) {
                    this.hotHosts = data.hotHosts;
                }
                if ("warmHosts" in data && data.warmHosts != undefined) {
                    this.warmHosts = data.warmHosts;
                }
                if ("coldHosts" in data && data.coldHosts != undefined) {
                    this.coldHosts = data.coldHosts;
                }
            }
        }
        get hotHosts() {
            return pb_1.Message.getRepeatedWrapperField(this, KnownHost, 1) as KnownHost[];
        }
        set hotHosts(value: KnownHost[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get warmHosts() {
            return pb_1.Message.getRepeatedWrapperField(this, KnownHost, 2) as KnownHost[];
        }
        set warmHosts(value: KnownHost[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get coldHosts() {
            return pb_1.Message.getRepeatedWrapperField(this, KnownHost, 3) as KnownHost[];
        }
        set coldHosts(value: KnownHost[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        static fromObject(data: {
            hotHosts?: ReturnType<typeof KnownHost.prototype.toObject>[];
            warmHosts?: ReturnType<typeof KnownHost.prototype.toObject>[];
            coldHosts?: ReturnType<typeof KnownHost.prototype.toObject>[];
        }): CurrentKnownHostsRes {
            const message = new CurrentKnownHostsRes({});
            if (data.hotHosts != null) {
                message.hotHosts = data.hotHosts.map(item => KnownHost.fromObject(item));
            }
            if (data.warmHosts != null) {
                message.warmHosts = data.warmHosts.map(item => KnownHost.fromObject(item));
            }
            if (data.coldHosts != null) {
                message.coldHosts = data.coldHosts.map(item => KnownHost.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                hotHosts?: ReturnType<typeof KnownHost.prototype.toObject>[];
                warmHosts?: ReturnType<typeof KnownHost.prototype.toObject>[];
                coldHosts?: ReturnType<typeof KnownHost.prototype.toObject>[];
            } = {};
            if (this.hotHosts != null) {
                data.hotHosts = this.hotHosts.map((item: KnownHost) => item.toObject());
            }
            if (this.warmHosts != null) {
                data.warmHosts = this.warmHosts.map((item: KnownHost) => item.toObject());
            }
            if (this.coldHosts != null) {
                data.coldHosts = this.coldHosts.map((item: KnownHost) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.hotHosts.length)
                writer.writeRepeatedMessage(1, this.hotHosts, (item: KnownHost) => item.serialize(writer));
            if (this.warmHosts.length)
                writer.writeRepeatedMessage(2, this.warmHosts, (item: KnownHost) => item.serialize(writer));
            if (this.coldHosts.length)
                writer.writeRepeatedMessage(3, this.coldHosts, (item: KnownHost) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CurrentKnownHostsRes {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CurrentKnownHostsRes();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.hotHosts, () => pb_1.Message.addToRepeatedWrapperField(message, 1, KnownHost.deserialize(reader), KnownHost));
                        break;
                    case 2:
                        reader.readMessage(message.warmHosts, () => pb_1.Message.addToRepeatedWrapperField(message, 2, KnownHost.deserialize(reader), KnownHost));
                        break;
                    case 3:
                        reader.readMessage(message.coldHosts, () => pb_1.Message.addToRepeatedWrapperField(message, 3, KnownHost.deserialize(reader), KnownHost));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): CurrentKnownHostsRes {
            return CurrentKnownHostsRes.deserialize(bytes);
        }
    }
    export class PingMessage extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            ping?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("ping" in data && data.ping != undefined) {
                    this.ping = data.ping;
                }
            }
        }
        get ping() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set ping(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            ping?: string;
        }): PingMessage {
            const message = new PingMessage({});
            if (data.ping != null) {
                message.ping = data.ping;
            }
            return message;
        }
        toObject() {
            const data: {
                ping?: string;
            } = {};
            if (this.ping != null) {
                data.ping = this.ping;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.ping.length)
                writer.writeString(1, this.ping);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PingMessage {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PingMessage();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.ping = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): PingMessage {
            return PingMessage.deserialize(bytes);
        }
    }
    export class PongMessage extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            pong?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("pong" in data && data.pong != undefined) {
                    this.pong = data.pong;
                }
            }
        }
        get pong() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set pong(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            pong?: string;
        }): PongMessage {
            const message = new PongMessage({});
            if (data.pong != null) {
                message.pong = data.pong;
            }
            return message;
        }
        toObject() {
            const data: {
                pong?: string;
            } = {};
            if (this.pong != null) {
                data.pong = this.pong;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.pong.length)
                writer.writeString(1, this.pong);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PongMessage {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PongMessage();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.pong = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): PongMessage {
            return PongMessage.deserialize(bytes);
        }
    }
}
