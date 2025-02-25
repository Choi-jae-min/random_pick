'use client'
import React, {useEffect, useRef} from 'react';

const KakaoAdFrom = () => {
    const adRef = useRef<boolean>(false);

    useEffect(() => {
        if(adRef.current){
            return;
        }
        const ins = document.createElement("ins");
        const script = document.createElement("script");

        ins.className = "kakao_ad_area";
        ins.style.display = "none";

        const window_size = window.innerWidth;
        if(window_size < 1024){
            ins.setAttribute('data-ad-width', '150')
            ins.setAttribute('data-ad-height', '150')
            ins.setAttribute('data-ad-unit', '150X150 사이즈의 광고 ID')
        }else {
            ins.setAttribute('data-ad-width', '250')
            ins.setAttribute('data-ad-height', '250')
            ins.setAttribute('data-ad-unit', '250X250 사이즈의 광고 ID')
        }

        script.async = true;
        script.type = 'text/javascript';
        script.src = "//t1.daumcdn.net/kas/static/ba.min.js";
        document.querySelector('.aside__kakaoAdFit')?.appendChild(ins);
        document.querySelector('.aside__kakaoAdFit')?.appendChild(script);

        adRef.current = true;
    }, []);

    return (
        <div>
            <aside className="aside__kakaoAdFit"></aside>
        </div>
    );
};

export default KakaoAdFrom;