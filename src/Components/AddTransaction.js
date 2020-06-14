import React, {useState, useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';
import Modal from 'react-modal';
import '../App.css';

function AddTransaction() {

    const { addTransaction } = useContext(GlobalContext);
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };
      const onSubmit = e => {
        e.preventDefault();
    
        const newTransaction = {
          id: Math.floor(Math.random() * 100000000),
          text,
          amount: +amount
        }
    
        addTransaction(newTransaction)
        setIsOpen(modalIsOpen=false);
      }

      let InitiateModal =()=>{
        setText('')
        setAmount(0)
        setIsOpen(modalIsOpen=true)
      }

    let [modalIsOpen,setIsOpen] = useState(false);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    var subtitle;
  return (

        
            
            <div>
                <button className ="btn" onClick={InitiateModal}>Add Transaction</button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={()=> subtitle.style.color = '#16a085'}
                    onRequestClose={()=> setIsOpen(modalIsOpen=false)}
                    style={customStyles}
                   
                    >
            
                    <button  onClick={()=> setIsOpen(modalIsOpen=false)} className="CloseModal">X</button>
                    <h1 className="Modal-Head" ref={_subtitle => (subtitle = _subtitle)}>Add New Transaction</h1>
                   
                    <form onSubmit={onSubmit}>
                        <div className="form-control">
                        
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)}  placeholder="Enter text..." />
                        </div>
                        <div className="form-control">
                        
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder="Enter amount..." />
                        </div>
                        <button  className="btn">Add Transaction</button>
                    </form>
                    </Modal>
            </div>
       
  
        );
}

export default AddTransaction;