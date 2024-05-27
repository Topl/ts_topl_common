/**
 * Imports
 */

// TODO: move all basic imports to simple exports

//Brambl
// import * as address from '../proto/brambl/models/address_pb.js'
// import * as common from '../proto/brambl/models/common_pb.js'
// import * as datum from '../proto/brambl/models/datum_pb.js'
// import * as event from '../proto/brambl/models/event_pb.js'
// import * as evidence from '../proto/brambl/models/evidence_pb.js'
// import * as identifier from '../proto/brambl/models/identifier_pb.js'
// import * as indices from '../proto/brambl/models/indices_pb.js'
// -> box
// -> transaction
// import * as io_transaction from '../proto/brambl/models/transaction/io_transaction_pb.js'
// import * as schedule from '../proto/brambl/models/transaction/schedule_pb.js'
// import * as spent_transaction_output from '../proto/brambl/models/transaction/spent_transaction_output_pb.js'
// import * as unspent_transaction_output from '../proto/brambl/models/transaction/unspent_transaction_output_pb.js'

//Consensus
import * as block_header from '../proto/consensus/models/block_header_pb.js'
import * as block_id from '../proto/consensus/models/block_id_pb.js'
import * as eligibility_certificate from '../proto/consensus/models/eligibility_certificate_pb.js'
import * as operational_certificate from '../proto/consensus/models/operational_certificate_pb.js'
import * as protocol_version from '../proto/consensus/models/protocol_version_pb.js'
import * as slot_data from '../proto/consensus/models/slot_data_pb.js'
import * as staking from '../proto/consensus/models/staking_pb.js'

//Genus
import * as genus_rpc from '../proto/genus/genus_rpc_pb.js'
// export * from '../proto/genus/genus_rpc_connect.js'
// import * as genus_rpc_connect from '../proto/genus/genus_rpc_connect.js'

//Node
import * as block from '../proto/node/models/block_pb.js'
import * as node_config from '../proto/node/models/node_config_pb.js'
import * as node_epochData from '../proto/node/models/node_epochData_pb.js'
import * as p2p from '../proto/node/models/p2p_pb.js'
import * as bifrost_rpc from '../proto/node/services/bifrost_rpc_pb.js'
// export * as bifrost_connect from '../proto/node/services/bifrost_rpc_connect.js'
// import * as bifrost_rpc_connect from '../proto/node/services/bifrost_rpc_connect.js'

//Quivr

// Google
import * as googleDuration from '../proto/google/protobuf/duration_pb.js'
import * as googleStructs from '../proto/google/protobuf/struct_pb.js'
import * as googleWrappers from '../proto/google/protobuf/wrappers_pb.js'

export {
    BlockService,
    NetworkMetricsService,
    TokenService,
    TransactionService
} from '../proto/genus/genus_rpc_connect.js'
export { NodeRpc } from '../proto/node/services/bifrost_rpc_connect.js'
/**
 * Exports
 */

//Brambl
export { LockAddress, TransactionInputAddress, TransactionOutputAddress } from '../proto/brambl/models/address_pb.js'
export { ImmutableBytes } from '../proto/brambl/models/common_pb.js'

// Datum subtypes
export {
    Datum,
    Datum_Eon, Datum_Epoch, Datum_Era, Datum_GroupPolicy, Datum_Header,
    Datum_IoTransaction, Datum_SeriesPolicy
} from '../proto/brambl/models/datum_pb.js'

// Event subtypes
export {
    Event,
    Event_Eon, Event_Epoch, Event_Era, Event_GroupPolicy, Event_Header,
    Event_IoTransaction, Event_SeriesPolicy
} from '../proto/brambl/models/event_pb.js'

export { Evidence } from '../proto/brambl/models/evidence_pb.js'
export { AccumulatorRootId, GroupId, LockId, SeriesId, TransactionId } from '../proto/brambl/models/identifier_pb.js'
export { Indices } from '../proto/brambl/models/indices_pb.js'

export {
    FungibilityType,
    QuantityDescriptorType
} from '../proto/brambl/models/box/asset_pb.js'

// export type FungibilityType = asset.FungibilityType
// export const FungibilityTypeEnum = asset.FungibilityType

// export type QuantityDescriptorType = asset.QuantityDescriptorType
// export const QuantityDescriptorTypeEnum = asset.QuantityDescriptorType

export {
    AssetMergingStatement,
    AssetMintingStatement,
    AssetSplittingStatement
} from '../proto/brambl/models/box/assets_statements_pb.js'

// Attestation subtypes
export {
    Attestation,
    Attestation_Commitment,
    Attestation_Image,
    Attestation_Predicate
} from '../proto/brambl/models/box/attestation_pb.js'

export { Box } from '../proto/brambl/models/box/box_pb.js'

export {
    Challenge,
    Challenge_PreviousProposition
} from '../proto/brambl/models/box/challenge_pb.js'

// Lock subtypes
export {
    Lock,
    Lock_Commitment,
    Lock_Image,
    Lock_Predicate
} from '../proto/brambl/models/box/lock_pb.js'

// value subtypes
export {
    Value_Asset as Asset,
    Value_Group as Group,
    Value_LVL as Lvl,
    Value_Series as Series,
    Value_TOPL as Topl,
    Value_UpdateProposal as UpdateProposal,
    Value
} from '../proto/brambl/models/box/value_pb.js'

export { IoTransaction } from '../proto/brambl/models/transaction/io_transaction_pb.js'
export { Schedule } from '../proto/brambl/models/transaction/schedule_pb.js'
export { SpentTransactionOutput } from '../proto/brambl/models/transaction/spent_transaction_output_pb.js'
export { UnspentTransactionOutput } from '../proto/brambl/models/transaction/unspent_transaction_output_pb.js'

//Consensus
export class BlockHeader extends block_header.BlockHeader {}
export class BlockId extends block_id.BlockId {}
export class EligibilityCertificate extends eligibility_certificate.EligibilityCertificate {}
export class OperationalCertificate extends operational_certificate.OperationalCertificate {}
export class VerificationKeyKesProduct extends operational_certificate.VerificationKeyKesProduct {}
export class SignatureKesSum extends operational_certificate.SignatureKesSum {}
export class SignatureKesProduct extends operational_certificate.SignatureKesProduct {}
export class ProtocolVersion extends protocol_version.ProtocolVersion {}
export class SlotData extends slot_data.SlotData {}
export class SlotId extends slot_data.SlotId {}
export class StakingAddress extends staking.StakingAddress {}
export class StakingRegistration extends staking.StakingRegistration {}
export class ActiveStaker extends staking.ActiveStaker {}

//Genus
// export type TxoState = genus_models.TxoState
// export const TxoStateEnum = genus_models.TxoState

export {
    AssetLabel,
    BlockData,
    ChainDistance,
    ConfidenceFactor,
    CsvIndexSpec,
    CsvIndexSpecs,
    HeightData,
    IndexFieldSpec,
    IndexFilter,
    IndexSpec,
    JsonIndexSpec,
    JsonIndexSpecs,
    LabelType,
    SortOrder,
    TransactionReceipt,
    Txo,
    TxoState
} from '../proto/genus/genus_models_pb.js'

// export type SortOrder = genus_models.SortOrder
// export const SortOrderEnum = genus_models.SortOrder

// export type LabelType = genus_models.LabelType
// export const LabelTypeEnum = genus_models.LabelType

// genus rpc
export class GetExistingTransactionIndexesResponse extends genus_rpc.GetExistingTransactionIndexesResponse {}
export class BlockResponse extends genus_rpc.BlockResponse {}
export class TransactionResponse extends genus_rpc.TransactionResponse {}
export class TxoResponse extends genus_rpc.TxoResponse {}
export class GetBlockByIdRequest extends genus_rpc.GetBlockByIdRequest {}
export class GetBlockByHeightRequest extends genus_rpc.GetBlockByHeightRequest {}
export class GetBlockByDepthRequest extends genus_rpc.GetBlockByDepthRequest {}
export class GetTransactionByIdRequest extends genus_rpc.GetTransactionByIdRequest {}
export class GetTxoStatsReq extends genus_rpc.GetTxoStatsReq {}
export class GetTxoStatsRes extends genus_rpc.GetTxoStatsRes {}
export class BlockchainSizeStatsReq extends genus_rpc.BlockchainSizeStatsReq {}
export class BlockchainSizeStatsRes extends genus_rpc.BlockchainSizeStatsRes {}
export class BlockStatsReq extends genus_rpc.BlockStatsReq {}
export class BlockStatsRes extends genus_rpc.BlockStatsRes {}
export class CreateOnChainTransactionIndexResponse extends genus_rpc.CreateOnChainTransactionIndexResponse {}
export class QueryByLockAddressRequest extends genus_rpc.QueryByLockAddressRequest {}
export class QueryByAssetLabelRequest extends genus_rpc.QueryByAssetLabelRequest {}
export class TxoLockAddressResponse extends genus_rpc.TxoLockAddressResponse {}
export class CreateOnChainTransactionIndexRequest extends genus_rpc.CreateOnChainTransactionIndexRequest {}
export class QueryByGroupIdRequest extends genus_rpc.QueryByGroupIdRequest {}
export class GroupPolicyResponse extends genus_rpc.GroupPolicyResponse {}
export class QueryBySeriesIdRequest extends genus_rpc.QueryBySeriesIdRequest {}
export class SeriesPolicyResponse extends genus_rpc.SeriesPolicyResponse {}
export class IndexSpecs extends genus_rpc.IndexSpecs {}
export class IndexDef extends genus_rpc.IndexDef {}
export class GetExistingTransactionIndexesRequest extends genus_rpc.GetExistingTransactionIndexesRequest {}
export class DropIndexRequest extends genus_rpc.DropIndexRequest {}
export class DropIndexResponse extends genus_rpc.DropIndexResponse {}
export class GetIndexedTransactionsRequest extends genus_rpc.GetIndexedTransactionsRequest {}
export class IndexMatchValue extends genus_rpc.IndexMatchValue {}
export class TxoStats extends genus_rpc.TxoStats {}
export class BlockchainSizeStats extends genus_rpc.BlockchainSizeStats {}
export class BlockStats extends genus_rpc.BlockStats {}

//Node
export {
    BlockBody, FullBlockBody, Block, FullBlock
} from '../proto/node/models/block_pb.js'


export class NodeConfig extends node_config.NodeConfig {}
export class EpochData extends node_epochData.EpochData {}

export class CurrentKnownHostsReq extends p2p.CurrentKnownHostsReq {}
export class KnownHost extends p2p.KnownHost {}
export class CurrentKnownHostsRes extends p2p.CurrentKnownHostsRes {}
export class PingMessage extends p2p.PingMessage {}
export class PongMessage extends p2p.PongMessage {}

export class BroadcastTransactionReq extends bifrost_rpc.BroadcastTransactionReq {}
export class BroadcastTransactionRes extends bifrost_rpc.BroadcastTransactionRes {}
export class CurrentMempoolReq extends bifrost_rpc.CurrentMempoolReq {}
export class CurrentMempoolRes extends bifrost_rpc.CurrentMempoolRes {}
export class CurrentMempoolContainsReq extends bifrost_rpc.CurrentMempoolContainsReq {}
export class CurrentMempoolContainsRes extends bifrost_rpc.CurrentMempoolContainsRes {}
export class FetchBlockHeaderReq extends bifrost_rpc.FetchBlockHeaderReq {}
export class FetchBlockHeaderRes extends bifrost_rpc.FetchBlockHeaderRes {}
export class FetchBlockBodyReq extends bifrost_rpc.FetchBlockBodyReq {}
export class FetchBlockBodyRes extends bifrost_rpc.FetchBlockBodyRes {}
export class FetchTransactionReq extends bifrost_rpc.FetchTransactionReq {}
export class FetchTransactionRes extends bifrost_rpc.FetchTransactionRes {}
export class FetchBlockIdAtHeightReq extends bifrost_rpc.FetchBlockIdAtHeightReq {}
export class FetchBlockIdAtHeightRes extends bifrost_rpc.FetchBlockIdAtHeightRes {}
export class FetchBlockIdAtDepthReq extends bifrost_rpc.FetchBlockIdAtDepthReq {}
export class FetchBlockIdAtDepthRes extends bifrost_rpc.FetchBlockIdAtDepthRes {}
export class SynchronizationTraversalReq extends bifrost_rpc.SynchronizationTraversalReq {}
export class SynchronizationTraversalRes extends bifrost_rpc.SynchronizationTraversalRes {}
export class FetchNodeConfigReq extends bifrost_rpc.FetchNodeConfigReq {}
export class FetchNodeConfigRes extends bifrost_rpc.FetchNodeConfigRes {}
export class FetchEpochDataReq extends bifrost_rpc.FetchEpochDataReq {}
export class FetchEpochDataRes extends bifrost_rpc.FetchEpochDataRes {}

//Quivr
export {
    Proof,
    Proof_And,
    Proof_Digest,
    Proof_DigitalSignature,
    Proof_EqualTo,
    Proof_ExactMatch,
    Proof_GreaterThan,
    Proof_HeightRange,
    Proof_LessThan,
    Proof_Locked,
    Proof_Not,
    Proof_Or,
    Proof_Threshold,
    Proof_TickRange
} from '../proto/quivr/models/proof_pb.js'

export {
    Proposition,
    Proposition_And,
    Proposition_Digest,
    Proposition_DigitalSignature,
    Proposition_EqualTo,
    Proposition_ExactMatch,
    Proposition_GreaterThan,
    Proposition_HeightRange,
    Proposition_LessThan,
    Proposition_Locked,
    Proposition_Not,
    Proposition_Or,
    Proposition_Threshold,
    Proposition_TickRange
} from '../proto/quivr/models/proposition_pb.js'

/// shared
export {
    Int128,
    Data,
    Digest,
    DigestVerification,
    SigningKey_Ed25519Sk as Ed25519Sk,
    VerificationKey_Ed25519Vk as Ed25519Vk,
    SigningKey_ExtendedEd25519Sk as ExtendedEd25519Sk,
    VerificationKey_ExtendedEd25519Vk as ExtendedEd25519Vk,
    KeyPair,
    Message,
    Preimage,
    Ratio,
    Root,
    SignableBytes,
    SignatureVerification,
    SigningKey,
    SmallData,
    TxBind,
    VerificationKey,
    Witness,
    
} from '../proto/quivr/models/shared_pb.js'

// google
export class BytesValue extends googleWrappers.BytesValue {}
export class Struct extends googleStructs.Struct {}
export class Duration extends googleDuration.Duration {}

/// service stuff
