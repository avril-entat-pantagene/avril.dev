import { ServiceStatus } from './ServiceStatus';

export function NavidromeStatus() {
    return (
        <ServiceStatus
            name="Player"
            url="https://player.avril.dev/rest/ping.view"
            label="Player"
        />
    );
}
