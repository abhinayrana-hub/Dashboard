import React from 'react';
import 'suneditor/dist/css/suneditor.min.css';
import SunEditor from 'suneditor-react';

const RichTextEditor = ({placeholder}) => {

    /* const editor = useRef(null);
	const [content, setContent] = useState('');
 */
	function handleChange(content)
    {
        console.log(content);
    }

  return (
    <div>
        <SunEditor 
            autoFocus={true}
            placeholder='Enter the description'
            width='100%'
            height='300'
            onChange={handleChange}
            setDefaultStyle="font-family:bold; color:black; font-size:30px;"
            setOptions={{
                buttonList: [
                    [
                        "bold",
                        "underline",
                        "italic",
                        "strike",
                        "list",
                        "align",
                        "fontSize",
                        "formatBlock",
                        "table",
                        "image"
                    ]
                ]
            }}
        />
    </div>
  )
}

export default RichTextEditor
