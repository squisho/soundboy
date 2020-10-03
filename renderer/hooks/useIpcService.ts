import { useContext } from 'react';

import IpcService, { IpcContext } from '../services/IpcService';

export default function useIpc(): IpcService | undefined {
    return useContext(IpcContext);
}
