
import PropTypes from 'prop-types';
import Features from '../Features/Features';


PriceOption.propTypes = {
    option: PropTypes.object
};

function PriceOption({ option }) {
    const { name, price, features } = option
    return (
        <div className='text-white space-y-6 mt-4 bg-blue-800 p-6 rounded-lg flex flex-col'>
            <div className='p-4'>
                <h2 className='text-4xl font-semibold pb-6'>{price}</h2>
                <h3 className='text-2xl font-semibold'>{name}</h3>
            </div>
            <div className='flex-grow'>

                {
                    features.map((feature, i) => <Features key={i} feature={feature}></Features>)
                }
            </div>
            <button className='mt-6 w-full rounded-lg py-2 bg-red-600 hover:bg-red-700 font-bold'>Buy Now</button>
        </div>
    );
}

export default PriceOption;