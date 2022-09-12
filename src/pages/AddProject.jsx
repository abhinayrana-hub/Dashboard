import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import RichTextEditor from '../components/RichTextEditor';
import { constUser } from '../data/constUser';

function createGuidId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const AddProject = () => {

    const [projectName, setprojectName] = useState("");
    const [description, setDescription] = useState("");
    const [user, setUser] = useState("");


    let history = useNavigate;

    const handleSubmit =(e) => {
        e.preventDefault();

        const ids = createGuidId();
        let uniqueId = ids.slice(0,8);

        let a = projectName,
        b =description,
        c= user;

        constUser.push({id:uniqueId, project_name:a, description:b,user:c});

        history("/manage");
    }

    /* const editor = useRef(null);
    const [content, setContent] = useState(''); */
    return (
        <div className="p-10 flex flex-col mx-auto h-screen max-w-full border-x-4 bg-gradient-to-r from-purple-100
        to-blue-200">

            <div className='container h-5/6 mx-auto mt-5 px-20 grid grid-cols-1 border-t-4 border-indigo-200 '>

                <div className="flex items-center">

                    <h4 className="flex flex-1 text-4xl font-bold text-gray-600">Create Project</h4>


                </div>



                <div className='flex flex-auto flex-col w-full mx-auto mt-5 '>
                    <div className=" justify-self-center">
                        <div className=' text-2xl font-serif' >
                            <form>
                                <label className='form-label mb-5 text-gray-700'>
                                    Project Name:
                                    <br /> <input className='form-control block w-full px-3 py-1.5 text-base font-normal 
                                    text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded 
                                    transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                    focus:outline-none' type="text" name="name" required onChange={(e) => setprojectName(e.target.value)}/>
                                </label>
                                <br/>
                                <label className='form-label mt-5 mb-5 text-gray-700'>
                                    Description:
                                    <RichTextEditor required onChange={(e) => setDescription(e.target.value)} />
                                </label>
                                <br/>
                                <label className='block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-400'>
                                    Assign To:
                                    <br/>
                                    <select className='bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg
                                     focus:ring-blue-500 focus:border-blue-500 block h-15 w-full p-2.5 dark:bg-gray-700 
                                     dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                     dark:focus:ring-blue-500 dark:focus:border-blue-500' required onChange={(e) => setUser(e.target.value)}>
                                    <option className='text-2xl' value="sandeep">Sandeep</option>
                                    <option className='text-2xl' value="abhinay">Abhinay</option>
                                    <option className='text-2xl' value="arpita">Arpita</option>
                                    <option className='text-2xl' value="prasad">Prasad</option>
                                    </select>
                                </label>

                                <br /><br />
                                <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 
                                rounded' type="submit" value="Submit" onClick={(e) => handleSubmit(e)} />

                            </form>
                        </div>
                    </div>
                </div>


            </div>



        </div>
    )
}

export default AddProject