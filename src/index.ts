/**
 * Imports
 */

/// todo: DEBUG remove before beta
export * as Debug from '../proto/brambl/models/box/value_pb'

//Brambl
import * as address from '../proto/brambl/models/address_pb'
import * as common from '../proto/brambl/models/common_pb'
import * as datum from '../proto/brambl/models/datum_pb'
import * as event from '../proto/brambl/models/event_pb'
import * as evidence from '../proto/brambl/models/evidence_pb'
import * as identifier from '../proto/brambl/models/identifier_pb'
import * as indices from '../proto/brambl/models/indices_pb'
// -> box
import * as asset from '../proto/brambl/models/box/asset_pb'
import * as assets_statements from '../proto/brambl/models/box/assets_statements_pb'
import * as attestation from '../proto/brambl/models/box/attestation_pb'
import * as box from '../proto/brambl/models/box/box_pb'
import * as challenge from '../proto/brambl/models/box/challenge_pb'
import * as lock from '../proto/brambl/models/box/lock_pb'
import * as value from '../proto/brambl/models/box/value_pb'
// -> transaction
import * as io_transaction from '../proto/brambl/models/transaction/io_transaction_pb'
import * as schedule from '../proto/brambl/models/transaction/schedule_pb'
import * as spent_transaction_output from '../proto/brambl/models/transaction/spent_transaction_output_pb'
import * as unspent_transaction_output from '../proto/brambl/models/transaction/unspent_transaction_output_pb'

//Consensus
import * as block_header from '../proto/consensus/models/block_header_pb'
import * as block_id from '../proto/consensus/models/block_id_pb'
import * as eligibility_certificate from '../proto/consensus/models/eligibility_certificate_pb'
import * as operational_certificate from '../proto/consensus/models/operational_certificate_pb'
import * as protocol_version from '../proto/consensus/models/protocol_version_pb'
import * as slot_data from '../proto/consensus/models/slot_data_pb'
import * as staking from '../proto/consensus/models/staking_pb'

//Genus
import * as genus_models from '../proto/genus/genus_models_pb'
import * as genus_rpc from '../proto/genus/genus_rpc_pb'
export * from '../proto/genus/genus_rpc_connect'

//Node
import * as block from '../proto/node/models/block_pb'
import * as node_config from '../proto/node/models/node_config_pb'
import * as node_epochData from '../proto/node/models/node_epochData_pb'
import * as p2p from '../proto/node/models/p2p_pb'
import * as bifrost_rpc from '../proto/node/services/bifrost_rpc_pb'
export * as bifrost_connect from '../proto/node/services/bifrost_rpc_connect'

//Quivr
import * as proof from '../proto/quivr/models/proof_pb'
import * as proposition from '../proto/quivr/models/proposition_pb'
import * as shared from '../proto/quivr/models/shared_pb'

// Google
import * as googleWrappers from '../proto/google/protobuf/wrappers_pb'
import * as googleStructs from '../proto/google/protobuf/struct_pb'

/**
 * Exports
 */

//Brambl
export class LockAddress extends address.LockAddress {}
export class TransactionOutputAddress extends address.TransactionOutputAddress {}
export class TransactionInputAddress extends address.TransactionInputAddress {}

export class ImmutableBytes extends common.ImmutableBytes {}

// Datum subtypes
export class Datum extends datum.Datum {}
export class Datum_Eon extends datum.Datum_Eon {}
export class Datum_Era extends datum.Datum_Era {}
export class Datum_Epoch extends datum.Datum_Epoch {}
export class Datum_Header extends datum.Datum_Header {}
export class Datum_IoTransaction extends datum.Datum_IoTransaction {}
export class Datum_GroupPolicy extends datum.Datum_GroupPolicy {}
export class Datum_SeriesPolicy extends datum.Datum_SeriesPolicy {}

// Event subtypes
export class Event extends event.Event {}
export class Event_Eon extends event.Event_Eon {}
export class Event_Era extends event.Event_Era {}
export class Event_Epoch extends event.Event_Epoch {}
export class Event_Header extends event.Event_Header {}
export class Event_IoTransaction extends event.Event_IoTransaction {}
export class Event_GroupPolicy extends event.Event_GroupPolicy {}
export class Event_SeriesPolicy extends event.Event_SeriesPolicy {}

export class Evidence extends evidence.Evidence {}

export class TransactionId extends identifier.TransactionId {}

export class LockId extends identifier.LockId {}

export class AccumulatorRootId extends identifier.AccumulatorRootId {}

export class GroupId extends identifier.GroupId {}

export class SeriesId extends identifier.SeriesId {}

export class Indices extends indices.Indices {}

export type FungibilityType = asset.FungibilityType

export type QuantityDescriptorType = asset.QuantityDescriptorType

export class AssetMintingStatement extends assets_statements.AssetMintingStatement {}

export class AssetMergingStatement extends assets_statements.AssetMergingStatement {}

export class AssetSplittingStatement extends assets_statements.AssetSplittingStatement {}

// Attestation subtypes
export class Attestation extends attestation.Attestation {}
export class Attestation_Predicate extends attestation.Attestation_Predicate {}
export class Attestation_Image extends attestation.Attestation_Image {}
export class Attestation_Commitment extends attestation.Attestation_Commitment {}

export class Box extends box.Box {}

export class Challenge extends challenge.Challenge {}

// Lock subtypes
export class Lock extends lock.Lock {}
export class Lock_Predicate extends lock.Lock_Predicate {}
export class Lock_Image extends lock.Lock_Image {}
export class Lock_Commitment extends lock.Lock_Commitment {}

// value subtypes
export class Value extends value.Value {}
export class Lvl extends value.Value_LVL {}
export class Topl extends value.Value_TOPL {}
export class Group extends value.Value_Group {}
export class Series extends value.Value_Series {}
export class Asset extends value.Value_Asset {}

export class IoTransaction extends io_transaction.IoTransaction {}
export class Schedule extends schedule.Schedule {}
export class SpentTransactionOutput extends spent_transaction_output.SpentTransactionOutput {}
export class UnspentTransactionOutput extends unspent_transaction_output.UnspentTransactionOutput {}

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
export type TxoState = genus_models.TxoState
export class Txo extends genus_models.Txo {}
export type SortOrder = genus_models.SortOrder
export class ConfidenceFactor extends genus_models.ConfidenceFactor {}
export class ChainDistance extends genus_models.ChainDistance {}
export type LabelType = genus_models.LabelType
export class AssetLabel extends genus_models.AssetLabel {}
export class IndexSpec extends genus_models.IndexSpec {}
export class IndexFieldSpec extends genus_models.IndexFieldSpec {}
export class CsvIndexSpecs extends genus_models.CsvIndexSpecs {}
export class CsvIndexSpec extends genus_models.CsvIndexSpec {}
export class JsonIndexSpecs extends genus_models.JsonIndexSpecs {}
export class JsonIndexSpec extends genus_models.JsonIndexSpec {}
export class IndexFilter extends genus_models.IndexFilter {}
export class TransactionReceipt extends genus_models.TransactionReceipt {}
export class HeightData extends genus_models.HeightData {}
export class BlockData extends genus_models.BlockData {}
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
export class BlockBody extends block.BlockBody {}
export class FullBlockBody extends block.FullBlockBody {}
export class Block extends block.Block {}
export class FullBlock extends block.FullBlock {}

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
export class Proof extends proof.Proof {}
export class Proof_And extends proof.Proof_And {}
export class Proof_Or extends proof.Proof_Or {}
export class Proof_Not extends proof.Proof_Not {}
export class Proof_Threshold extends proof.Proof_Threshold {}
export class Proof_EqualTo extends proof.Proof_EqualTo {}
export class Proof_GreaterThan extends proof.Proof_GreaterThan {}
export class Proof_LessThan extends proof.Proof_LessThan {}
export class Proof_ExactMatch extends proof.Proof_ExactMatch {}
export class Proof_TickRange extends proof.Proof_TickRange {}
export class Proof_HeightRange extends proof.Proof_HeightRange {}
export class Proof_DigitalSignature extends proof.Proof_DigitalSignature {}
export class Proof_Digest extends proof.Proof_Digest {}
export class Proof_Locked extends proof.Proof_Locked {}

export class Proposition extends proposition.Proposition {}
export class Proposition_And extends proposition.Proposition_And {}
export class Proposition_Or extends proposition.Proposition_Or {}
export class Proposition_Not extends proposition.Proposition_Not {}
export class Proposition_Threshold extends proposition.Proposition_Threshold {}
export class Proposition_EqualTo extends proposition.Proposition_EqualTo {}
export class Proposition_GreaterThan extends proposition.Proposition_GreaterThan {}
export class Proposition_LessThan extends proposition.Proposition_LessThan {}
export class Proposition_ExactMatch extends proposition.Proposition_ExactMatch {}
export class Proposition_TickRange extends proposition.Proposition_TickRange {}
export class Proposition_HeightRange extends proposition.Proposition_HeightRange {}
export class Proposition_DigitalSignature extends proposition.Proposition_DigitalSignature {}
export class Proposition_Digest extends proposition.Proposition_Digest {}
export class Proposition_Locked extends proposition.Proposition_Locked {}

export class Data extends shared.Data {}

export class SmallData extends shared.SmallData {}

export class Root extends shared.Root {}

export class Preimage extends shared.Preimage {}

export class Digest extends shared.Digest {}
export class DigestVerification extends shared.DigestVerification {}

export class VerificationKey extends shared.VerificationKey {}
export class Ed25519Vk extends shared.VerificationKey_Ed25519Vk {}
export class ExtendedEd25519Vk extends shared.VerificationKey_ExtendedEd25519Vk {}

export class SigningKey extends shared.SigningKey {}
export class Ed25519Sk extends shared.SigningKey_Ed25519Sk {}
export class ExtendedEd25519Sk extends shared.SigningKey_ExtendedEd25519Sk {}

export class KeyPair extends shared.KeyPair {}

export class Message extends shared.Message {}
export class Witness extends shared.Witness {}
export class SignatureVerification extends shared.SignatureVerification {}
export class SignableBytes extends shared.SignableBytes {}
export class TxBind extends shared.TxBind {}
export class Int128 extends shared.Int128 {}
export class Ratio extends shared.Ratio {}

// google
export class BytesValue extends googleWrappers.BytesValue {}
export class Struct extends googleStructs.Struct {}
