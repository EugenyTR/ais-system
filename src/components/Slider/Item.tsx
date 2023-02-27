import ISliderItemProps from '../../interfaces';

const Item = ({ image, active }: ISliderItemProps) => {
    const handleActive = (active: boolean) => {
        if (active) {
            return 'swiper-slide-active';
        }
    };

    return (
        <div
            className={`swiper-slide showcase-carousel__item ${handleActive(
                active
            )}`}
        >
            <div className='showcase-carousel__image-wrapper'>
                <div className='showcase-carousel__image-left'>
                    <div
                        className='showcase-carousel__image'
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                    ></div>
                </div>
                <div className='showcase-carousel__image-right'>
                    <div
                        className='showcase-carousel__image'
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Item;
