import { observer } from 'mobx-react-lite';
import { type PropsWithChildren } from 'react';

import { SetupCryptoProWorkspaceModal } from '..';
import { type CryptoProStore } from '../../stores/CryptoProStore';

/**
 * @description Провайдер, который в случае отсутствия или неактивности
 * КриптоПро browser plug-in или отсутствия КриптоПро провайдера на
 * устройстве пользователя - отображает окно настройки рабочего места
 * @param children все что необходимо обернуть в провайдер
 * @param cryptoProStore стор с информацией о плагине
 * */
export const CryptoProProvider = observer(
  ({
    children,
    cryptoProStore,
  }: PropsWithChildren<{
    cryptoProStore: CryptoProStore;
  }>) => {
    return (
      <>
        {children}
        <SetupCryptoProWorkspaceModal
          workspaceSetupInfo={cryptoProStore.workspaceSetupInfo}
          isDialogOpen={
            cryptoProStore.isRequestSetupWorkspace &&
            !cryptoProStore.isPluginInstalled
          }
          onCloseButtonClick={cryptoProStore.resetIsRequestSetupWorkspace}
        />
      </>
    );
  },
);
