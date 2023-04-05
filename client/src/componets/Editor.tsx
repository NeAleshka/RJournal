import React, {useEffect, useRef} from 'react';

import EditorJS, {OutputData} from '@editorjs/editorjs';


interface EditorProps {
  onChange:(blocks:OutputData['blocks'] )=>void
}

const Editor = ({onChange}:EditorProps) => {
  const ref = useRef<null | EditorJS>(null);

  useEffect(() => {
    if (!ref.current?.isReady) {
      ref.current = new EditorJS({
        placeholder: 'Введите текст вашей статьи',
        holder: 'textEditor',
        hideToolbar: false,
        async onChange() {
          if(ref.current){
            await ref.current.save().then(({blocks})=>onChange(blocks))
          }
        }
      });
    }
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  // @ts-ignore
  return <div id={'textEditor'} className={'h-[90%]'} ref={ref}></div>;
};

export default Editor;
