import React from 'react';
import useStorageState from '../../../common/hooks/StorageState.jsx';
import {SettingIds} from '../../../constants.js';
import SettingKeywords from '../components/SettingKeywords.jsx';
import PageScrollBody from '../components/PageScrollBody.jsx';

function BlacklistKeywords() {
  const [value, setValue] = useStorageState(SettingIds.BLACKLIST_KEYWORDS);

  return (
    <PageScrollBody>
      <SettingKeywords value={value} setValue={setValue} />
    </PageScrollBody>
  );
}

export default BlacklistKeywords;
