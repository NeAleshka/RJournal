import React, {useEffect, useRef} from 'react';

import EditorJS from '@editorjs/editorjs';

const Editor = () => {
  const ref = useRef<null | EditorJS>(null);

  useEffect(() => {
    if (!ref.current?.isReady) {
      ref.current = new EditorJS({
        placeholder: 'Введите текст вашей статьи',
        holder: 'textEditor',
        hideToolbar: false,
      });
    }
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return <div id={'textEditor'} className={'h-[90%]'} ref={ref}></div>;
};

export default Editor;
