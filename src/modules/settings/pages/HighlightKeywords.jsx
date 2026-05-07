import React from 'react';
import useStorageState from '../../../common/hooks/StorageState.jsx';
import {DEFAULT_HIGHLIGHT_COLOR, SettingIds} from '../../../constants.js';
import SettingKeywords from '../components/SettingKeywords.jsx';
import PageScrollBody from '../components/PageScrollBody.jsx';

function HighlightKeywords() {
  const [value, setValue] = useStorageState(SettingIds.HIGHLIGHT_KEYWORDS);

  return (
    <PageScrollBody>
      <SettingKeywords
        value={value}
        setValue={setValue}
        colorColumn={{defaultValue: DEFAULT_HIGHLIGHT_COLOR}}
      />
    </PageScrollBody>
  );
}

export default HighlightKeywords;
