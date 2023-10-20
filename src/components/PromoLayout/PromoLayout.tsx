import React, {useEffect, useRef} from 'react';
import cl from './promoLayout.module.css';
import video from '../../media/VanDammeVolvoTruck.mp4';

interface IPromoLayoutProps extends React.PropsWithChildren {
    promoStatus: boolean;
}
const PromoLayout: React.FC<IPromoLayoutProps> = ({promoStatus, children}) => {

    const videoElem = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        promoStatus
            ? videoElem.current?.play()
            : videoElem.current?.pause();
    }, [promoStatus]);

    return (
        <section className={cl.intro}>
            <div className={cl.media}>
                <video
                    ref={videoElem}
                    className={cl.video}
                    src={video}
                    autoPlay={true}
                    muted={true}
                    loop={true}
                ></video>
            </div>
            <div className={cl.content}>
                {children}
            </div>
        </section>
    );
};

export default PromoLayout;