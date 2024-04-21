/* eslint-disable */

export const protobufPackage = "grpc.health.v1";

export enum ServingStatus {
  /** UNKNOWN - Default status. Indicates that no stats was returned. */
  UNKNOWN = 0,
  /** SERVING - Service is in a healthy state. */
  SERVING = 1,
  /** NOT_SERVING - Service is unhealthy. Reason is implementation specific. */
  NOT_SERVING = 2,
  /** SERVICE_UNKNOWN - Used only by the Watch method. */
  SERVICE_UNKNOWN = 3,
  UNRECOGNIZED = -1,
}

export function servingStatusFromJSON(object: any): ServingStatus {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return ServingStatus.UNKNOWN;
    case 1:
    case "SERVING":
      return ServingStatus.SERVING;
    case 2:
    case "NOT_SERVING":
      return ServingStatus.NOT_SERVING;
    case 3:
    case "SERVICE_UNKNOWN":
      return ServingStatus.SERVICE_UNKNOWN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ServingStatus.UNRECOGNIZED;
  }
}

export function servingStatusToJSON(object: ServingStatus): string {
  switch (object) {
    case ServingStatus.UNKNOWN:
      return "UNKNOWN";
    case ServingStatus.SERVING:
      return "SERVING";
    case ServingStatus.NOT_SERVING:
      return "NOT_SERVING";
    case ServingStatus.SERVICE_UNKNOWN:
      return "SERVICE_UNKNOWN";
    case ServingStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
