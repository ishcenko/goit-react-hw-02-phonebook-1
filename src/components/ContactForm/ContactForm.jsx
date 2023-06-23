import { Component } from "react";
import PropTypes from 'prop-types';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handelChange = ({ target }) => {
        const { name, value } = target;
        this.setState({
            [name]: value,
        });
    };

    handelSubmit = e => {
        e.preventDefault();
        this.props.onSubmit({ ...this.state });
        this.setState({
            name: '',
            number: '',
        });
    };

    render() {
        const { handelChange, handelSubmit } = this;
        const { name, number } = this.state;

        return (
            <>
                <Form onSubmit={handelSubmit} autoComplete='on'>

                    <Label>Name</Label>

                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />

                    <Label>Number</Label>

                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />

                    <Button type="submit">Add contact</Button>

                </Form>
            </>
        );
    }
}

export default ContactForm;
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};