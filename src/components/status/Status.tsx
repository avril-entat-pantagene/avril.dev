import { NavidromeStatus } from './NavidromeStatus';
import { ImmichStatus } from './ImmichStatus';

export function Status() {

    return (
        <div class={`px-4 py-2 rounded-xl border-2 border-gray-200 size-min`}>
            <h3 class={`text-center text-2xl`}>Status</h3>
            <div class={`flex gap-4`}>
                <NavidromeStatus />
                <ImmichStatus />
            </div>
        </div>
    )

}