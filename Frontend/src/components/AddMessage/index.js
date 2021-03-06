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
import GreenCheckMark from '../../public/greenCheckMark.png';

const AddMessage = ({ publicView, destinationId,setPublicMessages, setPrivateMessages, publicMessages, privateMessages, users, setIsNewMessageSent}) => {
    const messageRef = useRef();
    const privacyRef = useRef();
    const {value, onChange, setvalue} = useFormInput('');
    const connectedUser = useRecoilValue(loggedInUser);
    const values = useFindUser(users);
    const { sendMessage, loading, privateMsg, setPrivateMsg  } = useAddMessage({ 
        messageRef,  
        message: value, 
        privacyRef, 
        destinationId: values && values.searchedUser && values.searchedUser._id ||┬ádestinationId, 
        senderId:connectedUser && connectedUser._id,
        setvalue, 
        setPublicMessages, 
        setPrivateMessages,
        publicMessages,
        privateMessages});
    return (
        <form>
           <textarea name="message"
                     value={value}
                     role="addMessageContainer"
                    className={style.messageContainer}
                    ref={messageRef}
                    onKeyDown={event => {event.key === 'Enter'? sendMessage() && setIsNewMessageSent(true) : undefined }}
                    onChange={onChange}>Enter text here...</textarea>
                    <div  data-testid="sendMessageButton" className={`${style.sendMessage} ${privateMsg ? style.spaceLeft : ''}`}>
                    <Button label={loading ? 'Loading...' : 'Send'} action={sendMessage} disabled={loading || !value || privateMsg && !values.searchedUser} />
                   {publicView && ( <div className={style.toggleButton}>
                        <div className={style.public}>public</div>
                        <ToggleButton  data-testid="toggleButton" value={privateMsg} onChange={() => { privateMsg &&  values.setSearchedUser(null);
                        setPrivateMsg(!privateMsg);
                        }}  />
                        <div className={style.private}>private</div>
                        {privateMsg && (
                        <div className={style.searchUserInput}>
                        <Input type="text" values={values} required={true}/>
                       {values.searchedUser && ( <div>
                        <img src={GreenCheckMark} className={style.checkMark}/>
                        </div>
                       )}
                         </div>
                    )}
                    </div>
                   )}
                </div>  
        </form>
    );
       
        }
    
export default AddMessage;
