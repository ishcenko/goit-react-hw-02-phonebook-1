import PropTypes from 'prop-types';
import { Label, Inpyt } from './Filter.styled';

const Filter = ({ handlerFilter }) => {
    return (
        <>
            <Label htmlFor="">Find contact by name</Label>
            <Inpyt>
                name='filter'
                onChange={handlerFilter}
                type='text'
                placeholder='Contact search...'
            </Inpyt>
        </>
    );
};

export default Filter;

Filter.prototype = {
    handlerFilter: PropTypes.func.isRequired
};
