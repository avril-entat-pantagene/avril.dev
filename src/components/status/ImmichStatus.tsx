import { ServiceStatus } from './ServiceStatus';

export function ImmichStatus() {
    return (
        <ServiceStatus
            name="Photos"
            url="https://photos.avril.dev/api/server/ping"
            label="Photos"
        />
    );
}
