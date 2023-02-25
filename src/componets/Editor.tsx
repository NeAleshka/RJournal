import React, {useEffect} from 'react';

import EditorJS from '@editorjs/editorjs';

const Editor = () => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: 'textEditor',
    });

    return () => {
      editor.isReady
        .then(() => {
          editor.destroy();
        })
        .catch(e => console.log('Error editor cleanup', e));
    };
  }, []);

  return <div id={'textEditor'} className={'h-[90%]'}></div>;
};

export default Editor;
