import React, { useRef } from "react";
import { useRecoilValue } from 'recoil';
import useAddMessage from "../../hooks/useAddMessage";
import useFormInput from '../../hooks/useFormInput';
import Button from "../Button";
import { loggedInUser } from '../../store/state';
import style from './AddMessage.css';
import ToggleButton from "../ToggleButton";
import Input from "../Input";
import useFindUser from "../../hooks/useFindUser";

import greenCheckMark from '../../public/greenCheckMark.png';

const AddMessage = ({setPublicMessages, setPrivateMessages, publicMessages, privateMessages, users}) => {
    const messageRef = useRef();
    const privacyRef = useRef();
    const {value, onChange, setValue} = useFormInput('');
    const connectedUser = useRecoilValue(loggedInUser);
    const values = useFindUser(users);
    const { sendMessage, error, loading, privateMsg, setPrivateMsg  } = useAddMessage({ 
        messageRef,  
        message: value, 
        privacyRef, 
        destinationId: values && values.searchedUser && values.searchedUser._id, 
        senderId: connectedUser._id,
        setValue, 
        setPublicMessages, 
        setPrivateMessages,
        publicMessages,
        privateMessages});

    
    return (
        <form>
           <textarea name="message" value={value}
                className={style.messageContainer}
                ref={messageRef}
                onChange={onChange}>Enter text here...</textarea>
                <div className={`${style.sendMessage} ${privateMsg ? style.spaceLeft : ''}`}>
                    <Button label={loading ? 'Loading...' : 'Send'} action={sendMessage} disabled={loading || !value} />
                    <div className={style.toggleButton}>
                        <div className={style.public}>public</div>
                        <ToggleButton value={privateMsg} onChange={() => {setPrivateMsg(!privateMsg);
                                                                            privateMsg &&  values.setSearchedUser(null);
                        }}  />
                        <div className={style.private}>private</div>
                        {privateMsg && (
                        <div className={style.searchUserInput}>
                        <Input type="text" values={values} required={true}/>
                       {values.searchedUser && ( <div>
                        <img src={greenCheckMark} className={style.checkMark}/>
                        </div>
                       )}
                         </div>
                    )}
                    </div>
                </div>  
        </form>
    );
       
        }
    
export default AddMessage;
