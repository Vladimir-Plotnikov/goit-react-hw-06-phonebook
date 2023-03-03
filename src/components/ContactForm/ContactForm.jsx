import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux'
import { addContact } from 'redux/phonebookSlice';
import { Formik } from 'formik';

export function ContactForm() {
    const dispatch = useDispatch();
    const initialValues = {
        name: '',
        number: '',
    };
    const handleSubmit = (values,{resetForm}) => {
        
        const newContact = {
            id: nanoid(),
            ...values,
        };

        dispatch(addContact(newContact));
        resetForm();
    };
    
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
        <div className='ContactForm'>
       <form
          className='inputButton'
          autoComplete='off'
            >

            
    <h2>Name</h2>
        <label>
        <input className='InputField' 
            id='name'
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder=' '                    
        /></label> 
        
    <h2>Number</h2>
        <label>
        <input
            id='number'
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder=''
        /></label>   
        <button 
            className='Button'
            type='submit'>Add contact
        </button>
                </form>
                </div>

    </Formik>
    )
};
