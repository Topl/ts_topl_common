/**
 * Imports
 */

//Brambl
import * as address from "../proto/brambl/models/address";
import * as common from "../proto/brambl/models/common";
import * as datum from "../proto/brambl/models/datum";
import * as event from "../proto/brambl/models/event";
import * as evidence from "../proto/brambl/models/evidence";
import * as identifier from "../proto/brambl/models/identifier";
import * as indices from "../proto/brambl/models/indices";
import * as asset from "../proto/brambl/models/box/asset";
import * as assets_statements from "../proto/brambl/models/box/assets_statements";
import * as attestation from "../proto/brambl/models/box/attestation";
import * as box from "../proto/brambl/models/box/box";
import * as challenge from "../proto/brambl/models/box/challenge";
import * as lock from "../proto/brambl/models/box/lock";
import * as value from "../proto/brambl/models/box/value";
import * as io_transaction from "../proto/brambl/models/transaction/io_transaction";
import * as schedule from "../proto/brambl/models/transaction/schedule";
import * as spent_transaction_output from "../proto/brambl/models/transaction/spent_transaction_output";
import * as unspent_transaction_output from "../proto/brambl/models/transaction/unspent_transaction_output";

//Consensus
import * as block_header from "../proto/consensus/models/block_header";
import * as block_id from "../proto/consensus/models/block_id";
import * as eligibility_certificate from "../proto/consensus/models/eligibility_certificate";
import * as operational_certificate from "../proto/consensus/models/operational_certificate";
import * as protocol_version from "../proto/consensus/models/protocol_version";
import * as slot_data from "../proto/consensus/models/slot_data";
import * as staking from "../proto/consensus/models/staking";

//Genus
import * as genus_models from "../proto/genus/genus_models";
import * as genus_rpc from "../proto/genus/genus_rpc";

//Node
import * as block from "../proto/node/models/block";
import * as node_config from "../proto/node/models/node_config";
import * as node_epochData from "../proto/node/models/node_epochData";
import * as p2p from "../proto/node/models/p2p";
import * as ratio from "../proto/node/models/ratio";
import * as bifrost_rpc from "../proto/node/services/bifrost_rpc";

//Quivr
import * as proof from "../proto/quivr/models/proof"
import * as proposition from "../proto/quivr/models/proposition";
import * as shared from "../proto/quivr/models/shared";

/**
 * Exports
 */

//Brambl
export class LockAddress extends address.co.topl.brambl.models.LockAddress {};
export class TransactionOutputAddress extends address.co.topl.brambl.models.TransactionOutputAddress {};
export class TransactionInputAddress extends address.co.topl.brambl.models.TransactionInputAddress {};
export class ImmutableBytes extends common.co.topl.brambl.models.common.ImmutableBytes {};
export class Datum extends datum.co.topl.brambl.models.Datum {};
export class Event extends event.co.topl.brambl.models.Event {};
export class Evidence extends evidence.co.topl.brambl.models.Evidence {};
export class TransactionId extends identifier.co.topl.brambl.models.TransactionId {};
export class LockId extends identifier.co.topl.brambl.models.LockId {};
export class AccumulatorRootId extends identifier.co.topl.brambl.models.AccumulatorRootId{};
export class GroupId extends identifier.co.topl.brambl.models.GroupId {};
export class SeriesId extends identifier.co.topl.brambl.models.SeriesId {};
export class Indices extends indices.co.topl.brambl.models.Indices {};
export type FungibilityType = asset.co.topl.brambl.models.box.FungibilityType;
export type QuantityDescriptorType = asset.co.topl.brambl.models.box.QuantityDescriptorType;
export class AssetMintingStatement extends assets_statements.co.topl.brambl.models.box.AssetMintingStatement {};
export class AssetMergingStatement extends assets_statements.co.topl.brambl.models.box.AssetMergingStatement {};
export class AssetSplittingStatement extends assets_statements.co.topl.brambl.models.box.AssetSplittingStatement {};
export class Attestation extends attestation.co.topl.brambl.models.box.Attestation {};
export class Box extends box.co.topl.brambl.models.box.Box {};
export class Challenge extends challenge.co.topl.brambl.models.box.Challenge {};
export class Lock extends lock.co.topl.brambl.models.box.Lock {};
export class Value extends value.co.topl.brambl.models.box.Value {};
export class IoTransaction extends io_transaction.co.topl.brambl.models.transaction.IoTransaction {};
export class Schedule extends schedule.co.topl.brambl.models.transaction.Schedule {};
export class SpentTransactionOutput extends spent_transaction_output.co.topl.brambl.models.transaction.SpentTransactionOutput {};
export class UnspentTransactionOutput extends unspent_transaction_output.co.topl.brambl.models.transaction.UnspentTransactionOutput {};

//Consensus
export class BlockHeader extends block_header.co.topl.consensus.models.BlockHeader {};
export class BlockId extends block_id.co.topl.consensus.models.BlockId {};
export class EligibilityCertificate extends eligibility_certificate.co.topl.consensus.models.EligibilityCertificate {};
export class OperationalCertificate extends operational_certificate.co.topl.consensus.models.OperationalCertificate {};
export class VerificationKeyKesProduct extends operational_certificate.co.topl.consensus.models.VerificationKeyKesProduct {};
export class SignatureKesSum extends operational_certificate.co.topl.consensus.models.SignatureKesSum {};
export class SignatureKesProduct extends operational_certificate.co.topl.consensus.models.SignatureKesProduct {};
export class ProtocolVersion extends protocol_version.co.topl.consensus.models.ProtocolVersion {};
export class SlotData extends slot_data.co.topl.consensus.models.SlotData {};
export class SlotId extends slot_data.co.topl.consensus.models.SlotId {};
export class StakingAddress extends staking.co.topl.consensus.models.StakingAddress {};
export class StakingRegistration extends staking.co.topl.consensus.models.StakingRegistration {};
export class ActiveStaker extends staking.co.topl.consensus.models.ActiveStaker {};

//Genus
export type TxoState = genus_models.co.topl.genus.services.TxoState;
export class Txo extends genus_models.co.topl.genus.services.Txo {};
export type SortOrder = genus_models.co.topl.genus.services.SortOrder;
export class ConfidenceFactor extends genus_models.co.topl.genus.services.ConfidenceFactor {};
export class ChainDistance extends genus_models.co.topl.genus.services.ChainDistance {};
export type LabelType = genus_models.co.topl.genus.services.LabelType;
export class AssetLabel extends genus_models.co.topl.genus.services.AssetLabel {};
export class IndexSpec extends genus_models.co.topl.genus.services.IndexSpec {};
export class IndexFieldSpec extends genus_models.co.topl.genus.services.IndexFieldSpec {};
export class CsvIndexSpecs extends genus_models.co.topl.genus.services.CsvIndexSpecs {};
export class CsvIndexSpec extends genus_models.co.topl.genus.services.CsvIndexSpec {};
export class JsonIndexSpecs extends genus_models.co.topl.genus.services.JsonIndexSpecs {};
export class JsonIndexSpec extends genus_models.co.topl.genus.services.JsonIndexSpec {};
export class IndexFilter extends genus_models.co.topl.genus.services.IndexFilter {};
export class TransactionReceipt extends genus_models.co.topl.genus.services.TransactionReceipt {};
export class HeightData extends genus_models.co.topl.genus.services.HeightData {};
export class BlockData extends genus_models.co.topl.genus.services.BlockData {};
export class GetExistingTransactionIndexesResponse extends genus_rpc.co.topl.genus.services.GetExistingTransactionIndexesResponse {};
export class BlockResponse extends genus_rpc.co.topl.genus.services.BlockResponse {};
export class TransactionResponse extends genus_rpc.co.topl.genus.services.TransactionResponse {};
export class TxoResponse extends genus_rpc.co.topl.genus.services.TxoResponse {};
export class GetBlockByIdRequest extends genus_rpc.co.topl.genus.services.GetBlockByIdRequest {};
export class GetBlockByHeightRequest extends genus_rpc.co.topl.genus.services.GetBlockByHeightRequest {};
export class GetBlockByDepthRequest extends genus_rpc.co.topl.genus.services.GetBlockByDepthRequest {};
export class GetTransactionByIdRequest extends genus_rpc.co.topl.genus.services.GetTransactionByIdRequest {};
export class GetTxoStatsReq extends genus_rpc.co.topl.genus.services.GetTxoStatsReq {};
export class GetTxoStatsRes extends genus_rpc.co.topl.genus.services.GetTxoStatsRes {};
export class BlockchainSizeStatsReq extends genus_rpc.co.topl.genus.services.BlockchainSizeStatsReq {};
export class BlockchainSizeStatsRes extends genus_rpc.co.topl.genus.services.BlockchainSizeStatsRes {};
export class BlockStatsReq extends genus_rpc.co.topl.genus.services.BlockStatsReq {};
export class BlockStatsRes extends genus_rpc.co.topl.genus.services.BlockStatsRes {};
export class CreateOnChainTransactionIndexResponse extends genus_rpc.co.topl.genus.services.CreateOnChainTransactionIndexResponse {};
export class QueryByLockAddressRequest extends genus_rpc.co.topl.genus.services.QueryByLockAddressRequest {};
export class QueryByAssetLabelRequest extends genus_rpc.co.topl.genus.services.QueryByAssetLabelRequest {};
export class TxoLockAddressResponse extends genus_rpc.co.topl.genus.services.TxoLockAddressResponse {};
export class CreateOnChainTransactionIndexRequest extends genus_rpc.co.topl.genus.services.CreateOnChainTransactionIndexRequest {};
export class QueryByGroupIdRequest extends genus_rpc.co.topl.genus.services.QueryByGroupIdRequest {};
export class GroupPolicyResponse extends genus_rpc.co.topl.genus.services.GroupPolicyResponse {};
export class QueryBySeriesIdRequest extends genus_rpc.co.topl.genus.services.QueryBySeriesIdRequest {};
export class SeriesPolicyResponse extends genus_rpc.co.topl.genus.services.SeriesPolicyResponse {};
export class IndexSpecs extends genus_rpc.co.topl.genus.services.IndexSpecs {};
export class IndexDef extends genus_rpc.co.topl.genus.services.IndexDef {};
export class GetExistingTransactionIndexesRequest extends genus_rpc.co.topl.genus.services.GetExistingTransactionIndexesRequest {};
export class DropIndexRequest extends genus_rpc.co.topl.genus.services.DropIndexRequest {};
export class DropIndexResponse extends genus_rpc.co.topl.genus.services.DropIndexResponse {};
export class GetIndexedTransactionsRequest extends genus_rpc.co.topl.genus.services.GetIndexedTransactionsRequest {};
export class IndexMatchValue extends genus_rpc.co.topl.genus.services.IndexMatchValue {};
export class TxoStats extends genus_rpc.co.topl.genus.services.TxoStats {};
export class BlockchainSizeStats extends genus_rpc.co.topl.genus.services.BlockchainSizeStats {};
export class BlockStats extends genus_rpc.co.topl.genus.services.BlockStats {};
export class BlockServiceClient extends genus_rpc.co.topl.genus.services.BlockServiceClient {};
export class TransactionServiceClient extends genus_rpc.co.topl.genus.services.TransactionServiceClient {};
export class NetworkMetricServiceClient extends genus_rpc.co.topl.genus.services.NetworkMetricsServiceClient {};
export class TokenService extends genus_rpc.co.topl.genus.services.TokenServiceClient {};

//Node
export class BlockBody extends block.co.topl.node.models.BlockBody {};
export class FullBlockBody extends block.co.topl.node.models.FullBlockBody {};
export class Block extends block.co.topl.node.models.Block {};
export class FullBlock extends block.co.topl.node.models.FullBlock {};
export class NodeConfig extends node_config.co.topl.proto.node.NodeConfig {};
export class EpochData extends node_epochData.co.topl.proto.node.EpochData {};
export class CurrentKnownHostsReq extends p2p.co.topl.node.models.CurrentKnownHostsReq {};
export class KnownHost extends p2p.co.topl.node.models.KnownHost {};
export class CurrentKnownHostsRes extends p2p.co.topl.node.models.CurrentKnownHostsRes {};
export class PingMessage extends p2p.co.topl.node.models.PingMessage {};
export class PongMessage extends p2p.co.topl.node.models.PongMessage {};
export class Ratio extends ratio.co.topl.node.models.Ratio {};
export class BroadcastTransactionReq extends bifrost_rpc.co.topl.node.services.BroadcastTransactionReq {};
export class BroadcastTransactionRes extends bifrost_rpc.co.topl.node.services.BroadcastTransactionRes {};
export class CurrentMempoolReq extends bifrost_rpc.co.topl.node.services.CurrentMempoolReq {};
export class CurrentMempoolRes extends bifrost_rpc.co.topl.node.services.CurrentMempoolRes {};
export class CurrentMempoolContainsReq extends bifrost_rpc.co.topl.node.services.CurrentMempoolContainsReq {};
export class CurrentMempoolContainsRes extends bifrost_rpc.co.topl.node.services.CurrentMempoolContainsRes {};
export class FetchBlockHeaderReq extends bifrost_rpc.co.topl.node.services.FetchBlockHeaderReq {};
export class FetchBlockHeaderRes extends bifrost_rpc.co.topl.node.services.FetchBlockHeaderRes {};
export class FetchBlockBodyReq extends bifrost_rpc.co.topl.node.services.FetchBlockBodyReq {};
export class FetchBlockBodyRes extends bifrost_rpc.co.topl.node.services.FetchBlockBodyRes {};
export class FetchTransactionReq extends bifrost_rpc.co.topl.node.services.FetchTransactionReq {};
export class FetchTransactionRes extends bifrost_rpc.co.topl.node.services.FetchTransactionRes {};
export class FetchBlockIdAtHeightReq extends bifrost_rpc.co.topl.node.services.FetchBlockIdAtHeightReq {};
export class FetchBlockIdAtHeightRes extends bifrost_rpc.co.topl.node.services.FetchBlockIdAtHeightRes {};
export class FetchBlockIdAtDepthReq extends bifrost_rpc.co.topl.node.services.FetchBlockIdAtDepthReq {};
export class FetchBlockIdAtDepthRes extends bifrost_rpc.co.topl.node.services.FetchBlockIdAtDepthRes {};
export class SynchronizationTraversalReq extends bifrost_rpc.co.topl.node.services.SynchronizationTraversalReq {}
export class SynchronizationTraversalRes extends bifrost_rpc.co.topl.node.services.SynchronizationTraversalRes {};
export class FetchNodeConfigReq extends bifrost_rpc.co.topl.node.services.FetchNodeConfigReq {};
export class FetchNodeConfigRes extends bifrost_rpc.co.topl.node.services.FetchNodeConfigRes {};
export class FetchEpochDataReq extends bifrost_rpc.co.topl.node.services.FetchEpochDataReq {};
export class FetchEpochDataRes extends bifrost_rpc.co.topl.node.services.FetchEpochDataRes {};
export class NodeRpcClient extends bifrost_rpc.co.topl.node.services.NodeRpcClient {};

//Quivr
export class Proof extends proof.quivr.models.Proof {};
export class Proposition extends proposition.quivr.models.Proposition {};
export class Data extends shared.quivr.models.Data {};
export class SmallData extends shared.quivr.models.SmallData {};
export class Root extends shared.quivr.models.Root {};
export class Preimage extends shared.quivr.models.Preimage {};
export class Digest extends shared.quivr.models.Digest {};
export class DigestVerification extends shared.quivr.models.DigestVerification {};
export class VerificationKey extends shared.quivr.models.VerificationKey {};
export class SigningKey extends shared.quivr.models.SigningKey {};
export class KeyPair extends shared.quivr.models.KeyPair {};
export class Message extends shared.quivr.models.Message {};
export class Witness extends shared.quivr.models.Witness {};
export class SignatureVerification extends shared.quivr.models.SignatureVerification {};
export class SignableBytes extends shared.quivr.models.SignableBytes {};
export class TxBind extends shared.quivr.models.TxBind {};
export class Int128 extends shared.quivr.models.Int128 {};
