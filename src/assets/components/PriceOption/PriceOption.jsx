
import PropTypes from 'prop-types';

PriceOption.propTypes = {
    option: PropTypes.object
};

function PriceOption({ option }) {
    const { name, price, features } = option
    return (
        <div className='text-white space-y-6 mt-4 bg-red-600 p-6 rounded-lg '>
            <h2 className='text-4xl font-semibold'>{price}</h2>
            <h3 className='text-2xl font-semibold'>{name}</h3>
            <h5 className='text-lg space-y-2'>{features}</h5>
            <button className='mt-6 text-center px-7 rounded-lg py-2 bg-violet-500'>Select</button>
        </div>
    );
}

export default PriceOption;