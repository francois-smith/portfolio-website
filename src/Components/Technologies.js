import React from 'react';
import Cpp from '../Media/Images/Cpp.png'

const Technologies = () => {
    return (
        <div id="TechnologiesSection">

            <h2 class='Section_Heading'>TECHNOLOGIES</h2>
            <div className='TechSection'>
                <p className='TechSection_Header'><span  className='Text-Gradient'>Programming Languages</span></p>
                <div className='TechCards'>
                    <div className='TechCard'>
                        <svg width="97" height="100" viewBox="0 0 97 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H96.242V100H0V0Z" fill="#F7DF1E"/>
                            <path d="M25.3058 83.567L32.6709 78.9358C34.0918 81.5534 35.3843 83.7682 38.4847 83.7682C41.4566 83.7682 43.3303 82.5602 43.3303 77.8618V45.9094H52.3746V77.9947C52.3746 87.728 46.8836 92.1583 38.8724 92.1583C31.6373 92.1583 27.4375 88.2648 25.3057 83.5662" fill="white"/>
                            <path d="M57.2867 82.5603L64.6509 78.13C66.5895 81.4195 69.1091 83.8359 73.5665 83.8359C77.3139 83.8359 79.7036 81.889 79.7036 79.2039C79.7036 75.9819 77.2489 74.8406 73.1141 72.9617L70.8537 71.9541C64.3283 69.0682 59.9997 65.4435 59.9997 57.7909C59.9997 50.7427 65.1679 45.3724 73.2437 45.3724C78.9934 45.3724 83.128 47.4535 86.0995 52.8908L79.0576 57.5894C77.507 54.7032 75.8278 53.5622 73.2438 53.5622C70.595 53.5622 68.9152 55.3074 68.9152 57.5894C68.9152 60.4087 70.595 61.5501 74.4708 63.2955L76.7318 64.3024C84.4197 67.726 88.7483 71.2162 88.7483 79.0697C88.7483 87.5281 82.3526 92.1593 73.7605 92.1593C65.3621 92.1593 59.9352 87.9978 57.2869 82.5603" fill="white"/>
                        </svg>
                        <p className='TechName'>JAVASCRIPT</p>
                    </div>
                    <div className='TechCard'>
                        <img src={Cpp} alt=''></img>
                        <p className='TechName'>C++</p>
                    </div>
                    <div className='TechCard'>
                        <svg width="86" height="100" viewBox="0 0 86 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.7386 99.8144C41.4113 99.8144 40.1725 99.4476 39.0222 98.8057L27.2536 91.5615C25.4839 90.5528 26.3688 90.186 26.8997 90.0026C29.2888 89.1774 29.7312 88.9939 32.2088 87.5268C32.4743 87.3434 32.8282 87.4351 33.0937 87.6185L42.1192 93.2121C42.4732 93.3955 42.9156 93.3955 43.1811 93.2121L78.4869 72.0296C78.8408 71.8462 79.0178 71.4794 79.0178 71.0209V28.7477C79.0178 28.2892 78.8408 27.9224 78.4869 27.739L43.1811 6.64818C42.8271 6.46479 42.3847 6.46479 42.1192 6.64818L6.8134 27.739C6.45946 27.9224 6.28249 28.3809 6.28249 28.7477V71.0209C6.28249 71.3877 6.45946 71.8462 6.8134 72.0296L16.4584 77.8067C21.679 80.5576 24.953 77.3482 24.953 74.1387V32.4156C24.953 31.8654 25.3954 31.3152 26.0148 31.3152H30.5276C31.0585 31.3152 31.5894 31.7737 31.5894 32.4156V74.1387C31.5894 81.3829 27.7845 85.6011 21.1481 85.6011C19.1129 85.6011 17.5202 85.6011 13.0074 83.3086L3.7164 77.8067C1.41577 76.4312 0 73.8636 0 71.1126V28.8394C0 26.0884 1.41577 23.5208 3.7164 22.1453L39.0222 0.96284C41.2344 -0.320947 44.2429 -0.320947 46.455 0.96284L81.7608 22.1453C84.0615 23.5208 85.4772 26.0884 85.4772 28.8394V71.1126C85.4772 73.8636 84.0615 76.4312 81.7608 77.8067L46.455 98.9892C45.3047 99.5393 43.9774 99.8144 42.7386 99.8144ZM53.6224 70.7458C38.1374 70.7458 34.9519 63.4099 34.9519 57.1744C34.9519 56.6242 35.3943 56.074 36.0137 56.074H40.615C41.1459 56.074 41.5883 56.4408 41.5883 56.991C42.2962 61.851 44.3314 64.2352 53.7109 64.2352C61.1437 64.2352 64.3291 62.4929 64.3291 58.3665C64.3291 55.9823 63.4443 54.24 51.8527 53.0479C42.2077 52.0392 36.1907 49.8384 36.1907 41.8606C36.1907 34.433 42.2077 30.0314 52.2951 30.0314C63.6213 30.0314 69.1959 34.0662 69.9037 42.8693C69.9037 43.1444 69.8153 43.4195 69.6383 43.6946C69.4613 43.878 69.1959 44.0614 68.9304 44.0614H64.3291C63.8867 44.0614 63.4443 43.6946 63.3558 43.2361C62.294 38.1927 59.5509 36.5421 52.2951 36.5421C44.1544 36.5421 43.1811 39.4765 43.1811 41.6772C43.1811 44.3365 44.3314 45.1618 55.3036 46.629C66.1873 48.0962 71.3195 50.2052 71.3195 58.0914C71.231 66.1609 64.8601 70.7458 53.6224 70.7458Z" fill="#539E43"/>
                        </svg>

                        <p className='TechName'>NODEJS</p>
                    </div>
                    <div className='TechCard'>
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M49.5719 0.0282593C24.2493 0.0282593 25.8304 11.0538 25.8304 11.0538L25.8585 22.4765H50.0234V25.9059H16.2606C16.2606 25.9059 0.0566406 24.0608 0.0566406 49.7138C0.0566406 75.3675 14.1998 74.4577 14.1998 74.4577H22.6404V62.5534C22.6404 62.5534 22.1854 48.3534 36.5579 48.3534H60.5252C60.5252 48.3534 73.9907 48.5718 73.9907 35.2871V13.3216C73.9907 13.3216 76.0358 0.0282593 49.5719 0.0282593ZM36.2474 7.70983C36.8184 7.70931 37.3839 7.82186 37.9116 8.04102C38.4393 8.26019 38.9187 8.58167 39.3225 8.98707C39.7263 9.39248 40.0465 9.87384 40.2647 10.4036C40.483 10.9334 40.5951 11.5012 40.5946 12.0745C40.5951 12.6479 40.483 13.2157 40.2647 13.7454C40.0465 14.2752 39.7263 14.7566 39.3225 15.162C38.9187 15.5674 38.4393 15.8889 37.9116 16.1081C37.3839 16.3272 36.8184 16.4398 36.2474 16.4392C35.6763 16.4398 35.1108 16.3272 34.5831 16.1081C34.0555 15.8889 33.576 15.5674 33.1723 15.162C32.7685 14.7566 32.4483 14.2752 32.23 13.7454C32.0117 13.2157 31.8996 12.6479 31.9001 12.0745C31.8996 11.5012 32.0117 10.9334 32.23 10.4036C32.4483 9.87384 32.7685 9.39248 33.1723 8.98707C33.576 8.58167 34.0555 8.26019 34.5831 8.04102C35.1108 7.82186 35.6763 7.70931 36.2474 7.70983Z" fill="url(#paint0_linear_371_58)"/>
                            <path d="M48.4832 99.6573C73.8058 99.6573 72.2247 88.6318 72.2247 88.6318L72.1966 77.2094H48.0313V73.78H81.7941C81.7941 73.78 97.998 75.6251 97.998 49.9714C97.998 24.3181 83.8548 25.2279 83.8548 25.2279H75.4142V37.1318C75.4142 37.1318 75.8693 51.3318 61.4968 51.3318H37.5295C37.5295 51.3318 24.064 51.1134 24.064 64.3985V86.3643C24.064 86.3643 22.0192 99.6573 48.4828 99.6573H48.4832ZM61.8077 91.9765C61.2367 91.977 60.6711 91.8645 60.1435 91.6453C59.6158 91.4261 59.1364 91.1047 58.7326 90.6993C58.3288 90.2939 58.0086 89.8125 57.7903 89.2827C57.572 88.7529 57.4599 88.1851 57.4604 87.6118C57.4599 87.0384 57.5719 86.4706 57.7902 85.9408C58.0085 85.4109 58.3287 84.9295 58.7324 84.5241C59.1362 84.1186 59.6157 83.7971 60.1434 83.5779C60.6711 83.3587 61.2366 83.2462 61.8077 83.2467C62.3787 83.2462 62.9443 83.3587 63.4719 83.5779C63.9996 83.797 64.479 84.1185 64.8828 84.5239C65.2866 84.9293 65.6068 85.4107 65.8251 85.9405C66.0434 86.4703 66.1555 87.0381 66.1549 87.6114C66.1555 88.1847 66.0434 88.7525 65.8251 89.2823C65.6068 89.8121 65.2866 90.2935 64.8828 90.6989C64.479 91.1043 63.9996 91.4258 63.4719 91.6449C62.9443 91.8641 62.3787 91.9766 61.8077 91.9761V91.9765Z" fill="url(#paint1_linear_371_58)"/>
                            <defs>
                                <linearGradient id="paint0_linear_371_58" x1="9.6425" y1="8.9893" x2="59.2713" y2="57.9265" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#387EB8"/>
                                    <stop offset="1" stop-color="#366994"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_371_58" x1="38.1765" y1="40.5415" x2="91.4622" y2="90.7128" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FFE052"/>
                                    <stop offset="1" stop-color="#FFC331"/>
                                </linearGradient>
                            </defs>
                        </svg>

                        <p className='TechName'>PYTHON</p>
                    </div>
                </div>
            </div>
            <div className='TechSection'>
                <p className='TechSection_Header'><span className='Text-Gradient'>Frameworks</span></p>
                <div className='TechCards'>
                    <div className='TechCard'>
                        <svg width="110" height="99" viewBox="0 0 110 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M110 49.5112C110 42.244 100.874 35.357 86.8834 31.0862C90.1121 16.865 88.6771 5.55067 82.3543 1.92829C80.8969 1.07859 79.1928 0.676108 77.3318 0.676108V5.66247C78.3632 5.66247 79.1928 5.86371 79.8879 6.24384C82.9372 7.98795 84.2601 14.629 83.2287 23.1706C82.9821 25.2725 82.5785 27.4862 82.0852 29.7446C77.6906 28.6713 72.8924 27.844 67.8475 27.3073C64.8206 23.1706 61.6816 19.4141 58.5202 16.1271C65.8296 9.35193 72.6906 5.64011 77.3543 5.64011V0.653748C71.1883 0.653748 63.1166 5.03638 54.9552 12.6389C46.7937 5.0811 38.722 0.743189 32.5561 0.743189V5.72955C37.1973 5.72955 44.0807 9.41901 51.3901 16.1495C48.2511 19.4365 45.1121 23.1706 42.13 27.3073C37.0628 27.844 32.2646 28.6713 27.87 29.767C27.3543 27.5309 26.9731 25.362 26.704 23.2824C25.6502 14.7408 26.9507 8.09975 29.9776 6.33328C30.6502 5.9308 31.5247 5.75191 32.5561 5.75191V0.765549C30.6726 0.765549 28.9686 1.16804 27.4888 2.01773C21.1883 5.64011 19.7758 16.9321 23.0269 31.1086C9.08072 35.4018 0 42.2664 0 49.5112C0 56.7783 9.12556 63.6653 23.1166 67.9361C19.8879 82.1573 21.3229 93.4716 27.6457 97.094C29.1031 97.9437 30.8072 98.3462 32.6906 98.3462C38.8565 98.3462 46.9283 93.9636 55.0897 86.361C63.2511 93.9189 71.3229 98.2568 77.4888 98.2568C79.3722 98.2568 81.0762 97.8543 82.5561 97.0046C88.8565 93.3822 90.2691 82.0902 87.0179 67.9137C100.919 63.6429 110 56.7559 110 49.5112ZM80.8072 34.5968C79.9776 37.4813 78.9462 40.4552 77.7803 43.4291C76.861 41.6403 75.8969 39.8515 74.843 38.0626C73.8117 36.2738 72.713 34.5297 71.6144 32.8303C74.7982 33.2999 77.8699 33.8813 80.8072 34.5968ZM70.5381 58.4106C68.7892 61.4292 66.9955 64.2914 65.1345 66.9522C61.7937 67.2429 58.4081 67.3995 55 67.3995C51.6144 67.3995 48.2287 67.2429 44.9103 66.9746C43.0493 64.3137 41.2332 61.474 39.4843 58.4777C37.7803 55.5485 36.2332 52.5745 34.8206 49.5782C36.2108 46.5819 37.7803 43.5857 39.4619 40.6564C41.2108 37.6378 43.0045 34.7757 44.8655 32.1148C48.2063 31.8241 51.5919 31.6676 55 31.6676C58.3857 31.6676 61.7713 31.8241 65.0897 32.0924C66.9507 34.7533 68.7668 37.5931 70.5157 40.5894C72.2197 43.5186 73.7668 46.4925 75.1794 49.4888C73.7668 52.4851 72.2197 55.4814 70.5381 58.4106ZM77.7803 55.5037C78.991 58.5 80.0224 61.4963 80.8744 64.4032C77.9372 65.1187 74.843 65.7224 71.6368 66.192C72.7354 64.4702 73.8341 62.7038 74.8655 60.8926C75.8969 59.1038 76.861 57.2926 77.7803 55.5037ZM55.0448 79.3623C52.9596 77.2157 50.8744 74.8231 48.8117 72.2069C50.8296 72.2964 52.8924 72.3635 54.9776 72.3635C57.0852 72.3635 59.1704 72.3187 61.2108 72.2069C59.1928 74.8231 57.1076 77.2157 55.0448 79.3623ZM38.3632 66.192C35.1794 65.7224 32.1076 65.1411 29.1704 64.4255C30 61.541 31.0314 58.5671 32.1973 55.5932C33.1166 57.382 34.0807 59.1708 35.1345 60.9597C36.1883 62.7485 37.2646 64.4926 38.3632 66.192ZM54.9327 19.6601C57.0179 21.8067 59.1031 24.1992 61.1659 26.8154C59.148 26.7259 57.0852 26.6589 55 26.6589C52.8924 26.6589 50.8072 26.7036 48.7668 26.8154C50.7848 24.1992 52.87 21.8067 54.9327 19.6601ZM38.3408 32.8303C37.2422 34.5521 36.1435 36.3185 35.1121 38.1297C34.0807 39.9186 33.1166 41.7074 32.1973 43.4962C30.9865 40.4999 29.9552 37.5036 29.1031 34.5968C32.0404 33.9036 35.1345 33.2999 38.3408 32.8303ZM18.0493 60.8255C10.1121 57.4491 4.97758 53.0217 4.97758 49.5112C4.97758 46.0006 10.1121 41.5509 18.0493 38.1968C19.9776 37.3695 22.0852 36.6316 24.2601 35.9384C25.5381 40.321 27.2197 44.8826 29.3049 49.5559C27.2422 54.2068 25.583 58.746 24.3274 63.1063C22.1076 62.4131 20 61.6528 18.0493 60.8255ZM30.1121 92.7785C27.0628 91.0344 25.7399 84.3933 26.7713 75.8517C27.0179 73.7498 27.4215 71.5361 27.9148 69.2777C32.3094 70.351 37.1076 71.1784 42.1525 71.715C45.1794 75.8517 48.3184 79.6082 51.4798 82.8952C44.1704 89.6704 37.3094 93.3822 32.6457 93.3822C31.6368 93.3598 30.7848 93.1586 30.1121 92.7785ZM83.296 75.7399C84.3498 84.2815 83.0493 90.9226 80.0224 92.689C79.3498 93.0915 78.4753 93.2704 77.4439 93.2704C72.8027 93.2704 65.9193 89.5809 58.6099 82.8505C61.7489 79.5635 64.8879 75.8293 67.87 71.6926C72.9372 71.156 77.7354 70.3287 82.13 69.233C82.6457 71.4914 83.0493 73.6604 83.296 75.7399ZM91.9283 60.8255C90 61.6528 87.8924 62.3907 85.7175 63.0839C84.4395 58.7013 82.7579 54.1398 80.6726 49.4664C82.7354 44.8155 84.3946 40.2763 85.6502 35.9161C87.87 36.6092 89.9776 37.3695 91.9507 38.1968C99.8879 41.5732 105.022 46.0006 105.022 49.5112C105 53.0217 99.8655 57.4715 91.9283 60.8255Z" fill="#61DAFB"/>
                            <path d="M54.9776 59.7299C60.6366 59.7299 65.2242 55.1548 65.2242 49.5112C65.2242 43.8675 60.6366 39.2925 54.9776 39.2925C49.3185 39.2925 44.7309 43.8675 44.7309 49.5112C44.7309 55.1548 49.3185 59.7299 54.9776 59.7299Z" fill="#61DAFB"/>
                        </svg>

                        <p className='TechName'>REACT</p>
                    </div>
                </div>
            </div>
            <div className='TechSection'>
                <p className='TechSection_Header'><span className='Text-Gradient'>Automation & Tools</span></p>
                <div className='TechCards'>
                    <div className='TechCard'>
                        <svg width="70" height="100" viewBox="0 0 70 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_768)">
                            <path d="M17.3754 100C26.9633 100 34.7448 92.5335 34.7448 83.3335V66.6668H17.3754C7.78744 66.6668 0.0059433 74.1335 0.0059433 83.3335C0.0059433 92.5335 7.78744 100 17.3754 100Z" fill="#0ACF83"/>
                            <path d="M0.0059433 49.9999C0.0059433 40.7999 7.78744 33.3332 17.3754 33.3332H34.7448V66.6665H17.3754C7.78744 66.6665 0.0059433 59.1999 0.0059433 49.9999Z" fill="#A259FF"/>
                            <path d="M0.00390625 16.6667C0.00390625 7.46667 7.7854 7.62939e-06 17.3733 7.62939e-06H34.7427V33.3333H17.3733C7.7854 33.3333 0.00390625 25.8667 0.00390625 16.6667Z" fill="#F24E1E"/>
                            <path d="M34.7458 7.62939e-06H52.1152C61.7031 7.62939e-06 69.4846 7.46667 69.4846 16.6667C69.4846 25.8667 61.7031 33.3333 52.1152 33.3333H34.7458V7.62939e-06Z" fill="#FF7262"/>
                            <path d="M69.4846 49.9999C69.4846 59.1999 61.7031 66.6665 52.1152 66.6665C42.5273 66.6665 34.7458 59.1999 34.7458 49.9999C34.7458 40.7999 42.5273 33.3332 52.1152 33.3332C61.7031 33.3332 69.4846 40.7999 69.4846 49.9999Z" fill="#1ABCFE"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1_768">
                                    <rect width="69.4915" height="100" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>

                        <p className='TechName'>FIGMA</p>
                    </div>
                    <div className='TechCard'>
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_425_13)">
                            <path d="M98.1141 45.5445L54.4531 1.88593C51.9402 -0.628522 47.8621 -0.628522 45.3461 1.88593L36.2797 10.9523L47.7809 22.4535C50.4535 21.5504 53.5184 22.1562 55.6488 24.2867C57.7894 26.4309 58.391 29.5219 57.466 32.2031L68.55 43.2875C71.2316 42.3637 74.3258 42.9613 76.4676 45.1066C79.4609 48.0988 79.4609 52.9484 76.4676 55.9426C73.4734 58.9371 68.6238 58.9371 65.6281 55.9426C63.3766 53.6887 62.8203 50.382 63.9602 47.6082L53.6234 37.2715L53.6223 64.4734C54.3716 64.8439 55.056 65.3333 55.6488 65.9226C58.6422 68.9148 58.6422 73.7648 55.6488 76.7613C52.6547 79.7543 47.8027 79.7543 44.8129 76.7613C41.8195 73.7648 41.8195 68.9152 44.8129 65.923C45.5302 65.2053 46.3827 64.637 47.3211 64.2508V36.7953C46.3814 36.4117 45.5284 35.843 44.8129 35.123C42.5449 32.8582 41.9996 29.5305 43.1617 26.7457L31.8242 15.407L1.88672 45.3426C-0.628906 47.8594 -0.628906 51.9379 1.88672 54.4527L45.5484 98.1121C48.0621 100.627 52.1394 100.627 54.6562 98.1121L98.1137 54.6555C100.629 52.1398 100.629 48.059 98.1137 45.5445" fill="#DE4C36"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_425_13">
                                    <rect width="100" height="100" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>

                        <p className='TechName'>GIT</p>
                    </div>
                    <div className='TechCard'>
                        <svg width="103" height="100" viewBox="0 0 103 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51.2096 0C22.931 0 0 22.9223 0 51.1993C0 73.8208 14.6731 93.0123 35.0204 99.7824C37.5796 100.256 38.5194 98.6718 38.5194 97.3193C38.5194 96.0986 38.4716 92.0651 38.4499 87.787C24.2029 90.8841 21.1967 81.7461 21.1967 81.7461C18.8673 75.8281 15.5109 74.2549 15.5109 74.2549C10.8649 71.077 15.8611 71.1421 15.8611 71.1421C21.0036 71.5035 23.7113 76.4184 23.7113 76.4184C28.2787 84.2458 35.6911 81.9827 38.6134 80.6748C39.0728 77.3653 40.4002 75.107 41.8646 73.8284C30.4904 72.5334 18.5331 68.1433 18.5331 48.5254C18.5331 42.9358 20.5337 38.3682 23.8097 34.7828C23.278 33.493 21.5253 28.2858 24.3058 21.2334C24.3058 21.2334 28.606 19.8573 38.3921 26.4816C42.4766 25.3469 46.8576 24.7783 51.2096 24.759C55.5617 24.7783 59.9459 25.3469 64.0385 26.4816C73.8129 19.8573 78.1071 21.2334 78.1071 21.2334C80.8944 28.2858 79.1409 33.493 78.6091 34.7828C81.8925 38.3682 83.8793 42.9354 83.8793 48.5254C83.8793 68.1899 71.8995 72.5202 60.4965 73.7875C62.3332 75.3764 63.9698 78.4924 63.9698 83.2688C63.9698 90.1192 63.9103 95.6328 63.9103 97.3193C63.9103 98.6818 64.8321 100.278 67.4282 99.7756C87.7643 92.9979 102.419 73.8132 102.419 51.1993C102.419 22.9223 79.4911 0 51.2096 0Z" fill="#6F6F6F"/>
                            <path d="M19.1798 72.9346C19.0673 73.1888 18.6665 73.2651 18.3022 73.0908C17.9307 72.9238 17.7219 72.5768 17.8424 72.3214C17.9528 72.0596 18.3536 71.9865 18.7243 72.1624C19.0966 72.3291 19.3087 72.6792 19.1798 72.9346ZM21.6988 75.1817C21.4546 75.4081 20.9771 75.3029 20.653 74.9451C20.318 74.5882 20.2553 74.1111 20.5031 73.881C20.755 73.655 21.218 73.7606 21.5538 74.118C21.8888 74.4789 21.9538 74.9532 21.6984 75.1821L21.6988 75.1817ZM23.427 78.0567C23.1129 78.2748 22.5997 78.0704 22.2828 77.615C21.9691 77.1601 21.9691 76.614 22.2896 76.3951C22.6077 76.1763 23.1129 76.3731 23.4342 76.8248C23.7475 77.2878 23.7475 77.8339 23.4266 78.0571L23.427 78.0567ZM26.3493 81.3868C26.0685 81.696 25.4709 81.6132 25.0331 81.1908C24.5857 80.778 24.4608 80.1922 24.7423 79.8826C25.0263 79.5726 25.6275 79.6597 26.0685 80.0785C26.5131 80.4905 26.6489 81.0808 26.3497 81.3868H26.3493ZM30.1262 82.5111C30.0029 82.9118 29.4269 83.0941 28.847 82.9239C28.2678 82.7484 27.8887 82.2786 28.0056 81.8734C28.1261 81.4699 28.7044 81.28 29.2888 81.4623C29.8671 81.6369 30.2471 82.1031 30.1266 82.5111H30.1262ZM34.4252 82.9877C34.4397 83.4102 33.9477 83.7603 33.3388 83.7679C32.7263 83.7812 32.2311 83.4395 32.2247 83.0243C32.2247 82.5978 32.7054 82.2509 33.3175 82.2409C33.9264 82.2288 34.4252 82.5681 34.4252 82.9877ZM38.6479 82.8259C38.721 83.2379 38.2977 83.6611 37.6933 83.7736C37.0989 83.882 36.5486 83.6278 36.4727 83.2194C36.3988 82.797 36.8302 82.3742 37.4234 82.2645C38.029 82.1593 38.5708 82.4071 38.6479 82.8259Z" fill="#6F6F6F"/>
                        </svg>

                        <p className='TechName'>GITHUB</p>
                    </div>
                </div>
            </div>
            <div className='TechSection'>
                <p className='TechSection_Header'><span className='Text-Gradient'>Markup & Markdown</span></p>
                <div className='TechCards'>
                    <div className='TechCard'>
                        <svg width="85" height="100" viewBox="0 0 85 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.015625 0L7.68491 90L42.1215 100L76.546 90.0062L84.2273 0H0.015625Z" fill="#FF5722"/>
                            <path d="M67.5955 29.4316H42.1215H27.2341L28.1965 40.7379H42.1215H66.6331L63.7399 74.6379L42.1215 80.9066L42.1035 80.9129L20.4972 74.6379L18.9874 56.9066H29.574L30.362 66.1066L42.1095 69.4254L42.1215 69.4191L53.8811 66.1004L55.1082 51.7816H42.1215H18.5543L15.7031 18.4004H42.1215H68.5339L67.5955 29.4316Z" fill="#FAFAFA"/>
                        </svg>

                        <p className='TechName'>HTML</p>
                    </div>
                    <div className='TechCard'>
                        <svg width="85" height="100" viewBox="0 0 85 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.00976562 0L7.67267 90L42.0806 100L76.4765 90.0062L84.1514 0H0.00976562Z" fill="#2196F3"/>
                            <path d="M67.7674 29.4311L66.7998 40.7374L63.8789 74.6311L42.0802 80.8999L42.0622 80.9061L20.2755 74.6311L18.7549 56.9061H29.4289L30.2222 66.0999L42.0682 69.4249L42.0742 69.4186L53.9382 66.0936L55.5549 50.7749L18.2441 50.8811L17.1863 40.4061L56.4504 39.9249L57.2437 28.7124L16.1345 28.8311L15.4434 18.3999H42.0802H68.717L67.7674 29.4311Z" fill="#FAFAFA"/>
                        </svg>

                        <p className='TechName'>CSS</p>
                    </div>
                    <div className='TechCard'>
                        <svg width="162" height="100" viewBox="0 0 162 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_371_81)">
                            <path d="M150.643 99.9296H11.625C5.32811 99.9296 0 94.5943 0 88.2874V11.6422C0 5.33597 5.32811 0 11.625 0H150.158C156.455 0 161.783 5.33597 161.783 11.6422V88.2874C161.783 94.5936 156.939 99.9296 150.643 99.9296ZM11.625 7.76123C9.68742 7.76123 7.74981 9.7017 7.74981 11.6422V88.2874C7.74981 90.7127 9.68742 92.1684 11.625 92.1684H150.158C152.58 92.1684 154.034 90.2279 154.034 88.2874V11.6422C154.034 9.2169 152.096 7.76123 150.158 7.76123H11.625ZM23.25 76.6453V23.2843H38.7503L54.2505 42.689L69.7508 23.2843H85.251V76.6453H69.7508V46.0839L54.2505 65.4885L38.7503 46.0839V76.6453H23.25ZM120.611 76.6453L97.3608 50.935H112.861V23.2843H128.361V50.4502H143.861L120.611 76.6453H120.611Z" fill="#6D6D6D"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_371_81">
                                    <rect width="161.783" height="100" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>

                        <p className='TechName'>MARKDOWN</p>
                    </div>
                </div>
            </div>
            <div className='TechSection'>
                <p className='TechSection_Header'><span className='Text-Gradient'>Design & Animation</span></p>
                <div className='TechCards'>
                    <div className='TechCard'>
                        <svg width="103" height="100" viewBox="0 0 103 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_374_62)">
                                <path d="M18.1624 0H84.4017C94.4444 0 102.564 8.11966 102.564 18.1624V81.8376C102.564 91.8803 94.4444 100 84.4017 100H18.1624C8.11966 100 0 91.8803 0 81.8376V18.1624C0 8.11966 8.11966 0 18.1624 0Z" fill="#001E36"/>
                                <path d="M23.0769 70.1282V26.1539C23.0769 25.8547 23.2051 25.6838 23.5043 25.6838C24.2308 25.6838 24.9145 25.6838 25.8974 25.641C26.9231 25.5983 27.9914 25.5983 29.1453 25.5556C30.2991 25.5128 31.5385 25.5128 32.8632 25.4701C34.188 25.4274 35.4701 25.4274 36.7521 25.4274C40.2564 25.4274 43.1624 25.8547 45.5555 26.7522C47.6923 27.4786 49.6581 28.6752 51.282 30.2564C52.6496 31.624 53.7179 33.2906 54.4017 35.1282C55.0427 36.9231 55.3846 38.7607 55.3846 40.6838C55.3846 44.359 54.5299 47.3932 52.8205 49.7863C51.1111 52.1795 48.7179 53.9744 45.9402 55C43.0342 56.0684 39.8291 56.453 36.3248 56.453C35.2991 56.453 34.6154 56.453 34.188 56.4103C33.7607 56.3675 33.1624 56.3675 32.3504 56.3675V70.0855C32.3932 70.3846 32.1795 70.641 31.8803 70.6838C31.8376 70.6838 31.7949 70.6838 31.7094 70.6838H23.5897C23.2479 70.6838 23.0769 70.5128 23.0769 70.1282ZM32.3932 33.9316V48.2906C32.9915 48.3334 33.547 48.3761 34.0598 48.3761H36.3248C37.9914 48.3761 39.6581 48.1197 41.2393 47.6069C42.6068 47.2222 43.8034 46.4103 44.7436 45.3419C45.641 44.2735 46.0684 42.8205 46.0684 40.9402C46.1111 39.6154 45.7692 38.2906 45.0855 37.1368C44.359 36.0257 43.3333 35.171 42.094 34.7009C40.5128 34.0598 38.8034 33.8034 37.0513 33.8462C35.9402 33.8462 34.9573 33.8462 34.1453 33.8889C33.2906 33.8462 32.6923 33.8889 32.3932 33.9316Z" fill="#31A8FF"/>
                                <path d="M82.0513 45.6838C80.7692 45 79.4017 44.5299 77.9487 44.2308C76.3675 43.8889 74.7863 43.6752 73.1624 43.6752C72.3077 43.6325 71.4103 43.7607 70.5983 43.9744C70.0427 44.1026 69.5726 44.4017 69.2735 44.8291C69.0598 45.1709 68.9316 45.5983 68.9316 45.9829C68.9316 46.3675 69.1026 46.7521 69.359 47.094C69.7436 47.5641 70.2564 47.9487 70.812 48.2479C71.7949 48.7607 72.8205 49.2308 73.8462 49.6581C76.1538 50.4273 78.3761 51.4957 80.4273 52.7778C81.8376 53.6752 82.9915 54.8718 83.8034 56.3248C84.4872 57.6923 84.8291 59.188 84.7863 60.7265C84.8291 62.735 84.2308 64.7436 83.1197 66.4102C81.9231 68.1197 80.2564 69.4444 78.3333 70.2137C76.2393 71.1111 73.6752 71.5812 70.5983 71.5812C68.6325 71.5812 66.7094 71.4103 64.7863 71.0256C63.2906 70.7692 61.7949 70.2991 60.4273 69.6581C60.1282 69.4872 59.9145 69.188 59.9573 68.8462V61.4102C59.9573 61.282 60 61.1111 60.1282 61.0256C60.2564 60.9402 60.3846 60.9829 60.5128 61.0684C62.1795 62.0513 63.9316 62.735 65.812 63.1624C67.4359 63.5897 69.1453 63.8034 70.8547 63.8034C72.4786 63.8034 73.6325 63.5897 74.4017 63.2051C75.0855 62.906 75.5556 62.1795 75.5556 61.4102C75.5556 60.812 75.2137 60.2564 74.5299 59.7008C73.8461 59.1453 72.4359 58.5043 70.3419 57.6923C68.1624 56.9231 66.1538 55.8974 64.2735 54.6154C62.9487 53.6752 61.8376 52.4359 61.0256 50.9829C60.3419 49.6154 60 48.1197 60.0427 46.6239C60.0427 44.7863 60.5556 43.0342 61.4957 41.453C62.5641 39.7436 64.1453 38.3761 65.9829 37.5214C67.9914 36.4957 70.5128 36.0256 73.547 36.0256C75.2991 36.0256 77.094 36.1538 78.8462 36.4102C80.1282 36.5812 81.3675 36.9231 82.5214 37.3932C82.6923 37.4359 82.8632 37.6068 82.9487 37.7778C82.9915 37.9487 83.0342 38.1197 83.0342 38.2906V45.2564C83.0342 45.4273 82.9487 45.5983 82.8205 45.6838C82.4359 45.7692 82.2222 45.7692 82.0513 45.6838Z" fill="#31A8FF"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_374_62">
                                    <rect width="102.564" height="100" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>

                        <p className='TechName'>PHOTOSHOP</p>
                    </div>
                    <div className='TechCard'>
                        <svg width="103" height="100" viewBox="0 0 103 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_374_72)">
                                <path d="M18.1624 0H84.4017C94.4444 0 102.564 8.11966 102.564 18.1624V81.8376C102.564 91.8803 94.4444 100 84.4017 100H18.1624C8.11966 100 0 91.8803 0 81.8376V18.1624C0 8.11966 8.11966 0 18.1624 0Z" fill="#330000"/>
                                <path d="M49.7009 60H33.8034L30.5556 70.0428C30.4701 70.4274 30.1282 70.6838 29.7436 70.6411H21.7094C21.2393 70.6411 21.1111 70.3847 21.2393 69.8718L35 30.2564C35.1282 29.8291 35.2564 29.359 35.4274 28.8462C35.5983 27.9488 35.6838 27.0086 35.6838 26.0684C35.641 25.8547 35.812 25.6411 36.0257 25.5983C36.0684 25.5983 36.1111 25.5983 36.1539 25.5983H47.094C47.4359 25.5983 47.6068 25.7265 47.6496 25.9402L63.2479 69.9573C63.3761 70.4274 63.2479 70.6411 62.8205 70.6411H53.8889C53.5898 70.6838 53.2906 70.4701 53.2051 70.171L49.7009 60ZM36.2821 51.3248H47.1368C46.8804 50.4274 46.5385 49.359 46.1539 48.2479C45.7692 47.0941 45.3846 45.8547 45 44.5727C44.5727 43.2479 44.188 41.9658 43.7607 40.6411C43.3333 39.3163 42.9487 38.077 42.6068 36.8376C42.265 35.6411 41.9658 34.53 41.6667 33.5043H41.5812C41.1966 35.3419 40.7265 37.1795 40.1282 39.0171C39.4872 41.0684 38.8462 43.2052 38.1624 45.3419C37.5641 47.5214 36.9231 49.53 36.2821 51.3248Z" fill="#FF9A00"/>
                                <path d="M72.5641 32.906C71.1539 32.9487 69.7863 32.3932 68.7607 31.4103C67.7778 30.3419 67.265 28.9316 67.3077 27.4787C67.265 26.0257 67.8205 24.6581 68.8462 23.6752C69.8718 22.6923 71.2393 22.1795 72.6496 22.1795C74.3163 22.1795 75.5983 22.6923 76.5385 23.6752C77.4786 24.7009 77.9915 26.0684 77.9487 27.4787C77.9915 28.9316 77.4786 30.3419 76.453 31.4103C75.4701 32.4359 74.0171 32.9915 72.5641 32.906ZM67.7778 70V37.094C67.7778 36.6667 67.9487 36.4957 68.3333 36.4957H76.7949C77.1795 36.4957 77.3504 36.7094 77.3504 37.094V70C77.3504 70.4701 77.1795 70.6838 76.7949 70.6838H68.4188C67.9915 70.6838 67.7778 70.4274 67.7778 70Z" fill="#FF9A00"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_374_72">
                                    <rect width="102.564" height="100" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>

                        <p className='TechName'>ILLUSTRATOR</p>
                    </div>
                    <div className='TechCard'>
                        <svg width="103" height="100" viewBox="0 0 103 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_425_21)">
                                <path d="M18.1618 -2.48408e-05H84.4068C86.7918 -0.00147624 89.1538 0.467259 91.3575 1.37937C93.5613 2.29149 95.5636 3.62909 97.25 5.31567C98.9364 7.00226 100.274 9.00475 101.186 11.2086C102.097 13.4125 102.566 15.7745 102.564 18.1595V81.8393C102.566 84.2244 102.097 86.5865 101.186 88.7904C100.274 90.9943 98.9364 92.9969 97.2501 94.6835C95.5637 96.3702 93.5614 97.7079 91.3576 98.6201C89.1539 99.5324 86.7919 100.001 84.4068 100H18.1618C15.7763 100.002 13.414 99.5332 11.2098 98.6211C9.00555 97.7091 7.00277 96.3715 5.31597 94.6848C3.62916 92.9981 2.29142 90.9954 1.37926 88.7912C0.467094 86.5871 -0.00159247 84.2247 4.06593e-06 81.8393V18.1595C-0.00159264 15.7741 0.467101 13.4118 1.37928 11.2078C2.29145 9.00368 3.62921 7.00105 5.31603 5.31443C7.00285 3.62782 9.00564 2.2903 11.2098 1.3784C13.414 0.466491 15.7764 -0.00191151 18.1618 -2.48408e-05V-2.48408e-05Z" fill="#00005B"/>
                                <path d="M41.4429 59.8397H25.6013L22.3617 69.8842C22.3278 70.0663 22.2267 70.2289 22.0785 70.3399C21.9302 70.4509 21.7457 70.5022 21.5615 70.4836H13.4012C12.921 70.4836 12.8018 70.2441 12.921 69.7242L26.7184 30.2836C26.8387 29.842 26.9579 29.5253 27.1599 28.959C27.3213 28.0481 27.4014 27.1246 27.3994 26.1995C27.3863 26.0887 27.4163 25.9771 27.4833 25.8879C27.5504 25.7987 27.6492 25.7387 27.7593 25.7205H38.8833C39.242 25.7205 39.402 25.8397 39.4429 26.0803L55.0063 69.8003C55.1255 70.2794 55.0063 70.4792 54.5648 70.4792H45.6429C45.491 70.4934 45.3392 70.4529 45.2145 70.3651C45.0899 70.2773 45.0006 70.1479 44.9629 70.0001L41.4429 59.8397ZM28.0816 51.3163H38.923C38.6824 50.4332 38.3214 49.3548 37.9219 48.2356C37.5223 47.0755 37.1624 45.836 36.7618 44.5556C36.3203 43.231 35.9626 41.9561 35.5211 40.6349C35.0796 39.3137 34.722 38.0752 34.361 36.8357C34.0023 35.6358 33.723 34.5177 33.4018 33.5155H33.3213C32.9373 35.3783 32.4583 37.2204 31.8863 39.0344C31.2461 41.0742 30.6059 43.2343 29.9271 45.3547C29.3609 47.5203 28.7218 49.5204 28.0816 51.3163Z" fill="#9999FF"/>
                                <path d="M59.8431 69.839V44.4397C59.8431 43.6792 59.8431 42.7597 59.8022 41.8402C59.7636 40.8391 59.7636 39.9638 59.7227 39.1194C59.6819 38.275 59.6433 37.4394 59.6035 36.9604C59.5783 36.8861 59.5724 36.8066 59.5863 36.7294C59.6002 36.6522 59.6335 36.5797 59.683 36.5189C59.813 36.4314 59.9682 36.3895 60.1245 36.3997H67.0067C67.238 36.3966 67.4679 36.4371 67.6844 36.5189C67.7735 36.5708 67.8514 36.64 67.9134 36.7224C67.9754 36.8049 68.0203 36.8989 68.0453 36.999C68.1546 37.3146 68.2478 37.6354 68.3246 37.9604C68.4386 38.4208 68.5186 38.889 68.5641 39.3611C69.895 38.2098 71.4275 37.3146 73.0841 36.7209C74.7474 36.1636 76.4901 35.88 78.2443 35.8809C79.6039 35.8719 80.9556 36.0882 82.2445 36.5211C83.7385 37.0042 85.1007 37.826 86.2248 38.9223C87.3489 40.0187 88.2045 41.3599 88.7248 42.8414C89.4036 44.6008 89.684 46.8812 89.684 49.6849V69.8842C89.684 70.3257 89.524 70.4836 89.1244 70.4836L81.0844 70.5641C80.7234 70.6039 80.4431 70.4041 80.4033 70.0443V50.728C80.3625 49.4476 80.123 48.1672 79.6042 47.0082C79.2035 46.1682 78.6042 45.368 77.8381 44.8867C76.9666 44.3394 75.9475 44.0742 74.9197 44.1273C73.7994 44.1273 72.6779 44.2873 71.679 44.7278C70.7391 45.1258 69.8736 45.6804 69.1193 46.368V69.9593C69.1193 70.4008 68.9593 70.5597 68.5597 70.5597H60.4435C60.3725 70.5685 60.3005 70.563 60.2316 70.5435C60.1628 70.524 60.0985 70.491 60.0426 70.4464C59.9867 70.4018 59.9402 70.3465 59.906 70.2837C59.8717 70.2209 59.8503 70.1519 59.8431 70.0807C59.8022 69.9206 59.8022 69.8809 59.8431 69.8401V69.839Z" fill="#9999FF"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_425_21">
                                    <rect width="102.564" height="100" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>

                        <p className='TechName'>ANIMATE</p>
                    </div>
                    <div className='TechCard'>
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_373_32)">
                            <path d="M51.5131 100H48.5495C48.4108 99.9492 48.2741 99.9375 48.1354 99.9375C46.553 99.8613 44.9824 99.7363 43.4254 99.5233C40.5127 99.1463 37.6488 98.5055 34.861 97.6147C30.0768 96.0831 25.6188 93.8854 21.4871 91.0215C17.6562 88.3588 14.2668 85.2195 11.3149 81.6035C7.83568 77.3584 5.12415 72.6738 3.20186 67.5262C1.48079 62.9549 0.45127 58.2215 0.136749 53.3357C0.125027 53.0719 0.0859565 52.8082 -0.00195312 52.5445V47.3832C0.0859565 47.1566 0.123074 46.9183 0.136749 46.68C0.199262 45.5117 0.324289 44.3435 0.476666 43.189C1.23073 37.6135 2.88734 32.3253 5.43672 27.3145C7.19491 23.8606 9.33014 20.647 11.8404 17.6815C14.3273 14.7434 17.115 12.1178 20.2036 9.82047C25.2398 6.07748 30.7781 3.37768 36.8302 1.72107C39.7684 0.918166 42.771 0.390709 45.8087 0.138702C46.3479 0.0879095 46.9144 0.12698 47.4536 0H52.527C52.9157 0.113306 53.3182 0.0507922 53.7069 0.0879095C55.7171 0.263729 57.7136 0.515736 59.6965 0.904491C65.9381 2.13522 71.7264 4.47166 77.0772 7.92358C81.2343 10.598 84.9011 13.8252 88.103 17.5799C90.6778 20.5943 92.8618 23.8723 94.6454 27.4121C96.7553 31.5947 98.2615 35.9765 99.1171 40.5849C99.5684 43.021 99.9083 45.4824 99.92 47.9693C99.92 48.1334 99.9571 48.3092 99.9708 48.4713V51.4349C99.92 51.6224 99.92 51.8236 99.9083 52.0248C99.9083 52.5015 99.9083 52.9801 99.8712 53.4568C99.6446 56.4965 99.1679 59.4972 98.4138 62.4607C96.9702 68.0244 94.6454 73.1856 91.4182 77.9445C89.0192 81.4863 86.2198 84.6764 83.0042 87.5012C79.8024 90.3143 76.2977 92.6879 72.4922 94.6082C68.1085 96.8177 63.5 98.3512 58.665 99.1912C56.8072 99.5175 54.9357 99.7304 53.0525 99.8437C52.5563 99.9004 52.0288 99.8886 51.5131 100ZM31.3075 76.1394C32.1358 76.1648 33.0657 76.0632 33.9956 75.864C36.7462 75.2603 39.0827 74.0061 40.878 71.783C41.97 70.4272 42.8882 68.9582 43.6794 67.4129C44.6092 65.5922 45.3868 63.6953 46.0646 61.775C46.8929 59.4522 47.5962 57.0787 48.1373 54.6797C48.4382 53.3357 48.1002 52.4937 46.6175 52.0307C44.7343 51.4407 42.8374 50.9133 40.9034 50.4855C37.7015 49.7822 34.4742 49.3309 31.1825 49.4423C30.2526 49.4794 29.3247 49.581 28.4065 49.7431C25.7438 50.2081 23.4836 51.4388 21.6375 53.3845C18.4845 56.6997 17.2303 60.6556 18.0078 65.1644C19.1252 71.6072 24.8276 76.1902 31.3075 76.1394ZM36.6192 29.9517C36.5821 30.8934 36.7579 31.9229 37.0471 32.9524C37.5999 34.9118 38.5161 36.7071 39.5964 38.4028C42.0579 42.2591 45.1601 45.5606 48.5261 48.6257C48.8016 48.8777 49.1297 49.0906 49.4814 49.2528C49.833 49.4286 50.1847 49.4286 50.548 49.2782C50.8997 49.1277 51.2142 48.9148 51.4779 48.6374C52.6461 47.4829 53.8007 46.3264 54.9064 45.1327C56.4634 43.4371 57.9461 41.6926 59.2901 39.8211C60.5092 38.1254 61.6012 36.3418 62.4041 34.4078C63.207 32.4855 63.5977 30.5026 63.334 28.4182C62.8944 24.978 61.4254 22.0633 58.7998 19.7777C55.6956 17.0798 52.0796 15.9995 48.0104 16.6012C41.3918 17.5819 36.5938 23.4093 36.6192 29.9517ZM69.2454 76.0652C69.5717 76.0534 70.1616 76.0652 70.7516 75.9773C74.7193 75.3873 77.8586 73.465 80.07 70.101C81.8028 67.452 82.5061 64.5119 82.1799 61.3608C81.879 58.409 80.6854 55.8225 78.6635 53.6502C76.9053 51.767 74.8072 50.4601 72.2715 49.9072C70.8766 49.6064 69.4584 49.4794 68.0401 49.4559C66.3581 49.4305 64.6878 49.581 63.0292 49.8076C59.7141 50.2725 56.4731 51.0637 53.2849 52.0678C52.9587 52.1675 52.6579 52.3198 52.3941 52.5328C52.0542 52.8082 51.8667 53.1481 51.8667 53.5877C51.8667 53.9647 51.9038 54.3418 51.9917 54.7188C52.1929 55.4729 52.3687 56.225 52.5699 56.9673C53.4998 60.3587 54.629 63.6738 56.1742 66.8386C57.0651 68.6593 58.0965 70.3804 59.4152 71.9256C60.4193 73.0938 61.5875 74.0472 62.9823 74.7133C64.889 75.6256 66.8719 76.116 69.2454 76.0652Z" fill="url(#paint0_linear_373_32)"/>
                        </g>
                            <defs>
                                <linearGradient id="paint0_linear_373_32" x1="49.9879" y1="0" x2="49.9879" y2="100.001" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#DD3069"/>
                                    <stop offset="1" stop-color="#942049"/>
                                </linearGradient>
                                <clipPath id="clip0_373_32">
                                    <rect width="99.9766" height="100" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>

                        <p className='TechName'>DAVINCI</p>
                    </div>
                </div>
            </div>
        </div>  
    );
};

export default Technologies;