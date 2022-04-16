import Banner from '../assets/r-banner.webp';
import SubIcon from '../assets/sub-red-icon.png';

function SubHeader () {
    return (
        <section className='sub-header'>
            <div className='sub-banner'>
                <img src={Banner} className='w-100'></img>
            </div>
            <div className='title-bar position-relative d-flex'>
                <div className='title-card d-flex'>
                    <div>
                        <img src={SubIcon} className='sub-icon'/>
                    </div>
                    <div className='sub-title'>
                        <h2> ReReddit: Totally not the same as reddit </h2>
                        <h6 className='font-weight-light'> r/ReReddit </h6>
                    </div>                    
                </div>

            </div>
        </section>
    )
}
export default SubHeader;