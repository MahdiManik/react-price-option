import { BsFillCheckCircleFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

const Features = ({feature}) => {
    return (
        <div className=''>
            <p className='flex justify-start items-start'><BsFillCheckCircleFill className='mr-2 text-lime-600'></BsFillCheckCircleFill> {feature}</p>
        </div>
    );
};

Features.propTypes = {
    feature: PropTypes.object
};

export default Features;