import { useEffect, useState } from 'preact/hooks';

interface ServiceStatusProps {
    name: string;
    url: string;
    label?: string;
}

export function ServiceStatus({ name, url, label }: ServiceStatusProps) {
    const [status, setStatus] = useState<'online' | 'offline' | 'loading'>('loading');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const checkStatus = async () => {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    mode: 'no-cors'
                });

                if (response.ok || response.type === 'opaque') {
                    setStatus('online');
                    setError(null);
                } else {
                    setStatus('offline');
                    setError(`HTTP ${response.status}`);
                }
            } catch (err) {
                setStatus('offline');
                setError(err instanceof Error ? err.message : 'Erreur de connexion');
            }
        };

        checkStatus();
        const interval = setInterval(checkStatus, 5000);

        return () => clearInterval(interval);
    }, [url]);

    const statusColors = {
        online: 'text-green-500',
        offline: 'text-red-500',
        loading: 'text-yellow-500',
    };

    const statusText = {
        online: 'OK',
        offline: 'KO',
        loading: 'Loading...',
    };

    return (
        <div class="service-status">
            <div class="flex items-center gap-4">
                <div class="text-xl text-gray-600">
                    [
                    <span class={`${statusColors[status]}`}>
                        {statusText[status]}
                        {error && ` - ${error}`}
                    </span>
                    ]
                </div>
                <h3 class="text-xl font-semibold">{label || name}</h3>
            </div>
        </div>
    );
}
