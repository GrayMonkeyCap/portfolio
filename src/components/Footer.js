import React from 'react';
import styles from './Footer.module.css'

const Footer=()=>{
    return(
        <div className={styles.footer}>
            <div className={styles.contact}>
                <div>Reach out to me </div>
                <div className={styles.contactemail}>
                    <input type='email' placeholder='Enter email id'></input>
                    <button className={styles.emailbutton}>Send</button>
                </div>
            </div>

            <div className={styles.socialicons}>
            <div>Social Media</div>
            <div className={styles.icons}>
                <div>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 41.8C12.5 40.3 6 32.9 6 24C6 14.1 14.1 6 24 6C33.9 6 42 14.1 42 24C42 32.9 35.5 40.3 27 41.8L26 41H22L21 41.8Z" fill="url(#paint0_linear_106_516)"/>
                    <path d="M31 29L31.8 24H27V20.5C27 19.1 27.5 18 29.7 18H32V13.4C30.7 13.2 29.3 13 28 13C23.9 13 21 15.5 21 20V24H16.5V29H21V41.7C22 41.9 23 42 24 42C25 42 26 41.9 27 41.7V29H31Z" fill="white"/>
                    <defs>
                    <linearGradient id="paint0_linear_106_516" x1="24" y1="40.754" x2="24" y2="6" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0062E0"/>
                    <stop offset="1" stop-color="#19AFFF"/>
                    </linearGradient>
                    </defs>
                    </svg>
                </div>
                <div>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.0007 6.54541C19.2605 6.54541 18.6656 6.56614 16.8039 6.65087C14.9457 6.73596 13.6774 7.03014 12.5676 7.46177C11.4197 7.90759 10.4459 8.50396 9.47571 9.4745C8.50483 10.4447 7.90849 11.4185 7.46123 12.5661C7.02852 13.6763 6.73398 14.945 6.65035 16.8025C6.56707 18.6643 6.54526 19.2596 6.54526 24C6.54526 28.7403 6.56635 29.3334 6.65071 31.1952C6.73616 33.0534 7.03033 34.3218 7.46159 35.4316C7.90776 36.5796 8.50411 37.5534 9.47462 38.5236C10.4444 39.4945 11.4182 40.0923 12.5654 40.5381C13.676 40.9698 14.9446 41.264 16.8024 41.349C18.6642 41.4338 19.2587 41.4545 23.9985 41.4545C28.7391 41.4545 29.3322 41.4338 31.194 41.349C33.0521 41.264 34.3219 40.9698 35.4324 40.5381C36.58 40.0923 37.5523 39.4945 38.5221 38.5236C39.493 37.5534 40.0893 36.5796 40.5366 35.432C40.9657 34.3218 41.2602 33.053 41.3475 31.1956C41.4311 29.3338 41.4529 28.7403 41.4529 24C41.4529 19.2596 41.4311 18.6647 41.3475 16.8029C41.2602 14.9447 40.9657 13.6763 40.5366 12.5665C40.0893 11.4185 39.493 10.4447 38.5221 9.4745C37.5512 8.50359 36.5803 7.90723 35.4313 7.46177C34.3186 7.03014 33.0495 6.73596 31.1914 6.65087C29.3297 6.56614 28.7369 6.54541 23.9953 6.54541H24.0007ZM22.435 9.69086C22.8997 9.69014 23.4182 9.69086 24.0007 9.69086C28.6609 9.69086 29.2133 9.70759 31.0536 9.79123C32.7554 9.86905 33.679 10.1534 34.2942 10.3923C35.1088 10.7087 35.6895 11.0869 36.3 11.6978C36.9109 12.3087 37.2891 12.8905 37.6061 13.705C37.845 14.3196 38.1298 15.2432 38.2072 16.945C38.2908 18.785 38.309 19.3378 38.309 23.996C38.309 28.6541 38.2908 29.2069 38.2072 31.0469C38.1294 32.7487 37.845 33.6723 37.6061 34.2869C37.2898 35.1014 36.9109 35.6814 36.3 36.292C35.6891 36.9029 35.1091 37.281 34.2942 37.5974C33.6797 37.8374 32.7554 38.121 31.0536 38.1989C29.2137 38.2825 28.6609 38.3007 24.0007 38.3007C19.3401 38.3007 18.7878 38.2825 16.9479 38.1989C15.2461 38.1203 14.3225 37.836 13.7069 37.597C12.8923 37.2807 12.3105 36.9025 11.6996 36.2916C11.0888 35.6807 10.7106 35.1003 10.3935 34.2854C10.1546 33.6709 9.86988 32.7472 9.79243 31.0454C9.7088 29.2054 9.69207 28.6527 9.69207 23.9916C9.69207 19.3305 9.7088 18.7807 9.79243 16.9407C9.87025 15.2389 10.1546 14.3152 10.3935 13.7C10.7099 12.8854 11.0888 12.3036 11.6996 11.6927C12.3105 11.0818 12.8923 10.7036 13.7069 10.3865C14.3221 10.1465 15.2461 9.86286 16.9479 9.78468C18.558 9.71196 19.182 9.69014 22.435 9.6865V9.69086ZM33.3175 12.589C32.1612 12.589 31.2231 13.5261 31.2231 14.6829C31.2231 15.8392 32.1612 16.7774 33.3175 16.7774C34.4739 16.7774 35.412 15.8392 35.412 14.6829C35.412 13.5265 34.4739 12.5883 33.3175 12.5883V12.589ZM24.0007 15.0363C19.0507 15.0363 15.0374 19.0498 15.0374 24C15.0374 28.9501 19.0507 32.9618 24.0007 32.9618C28.9508 32.9618 32.9626 28.9501 32.9626 24C32.9626 19.0498 28.9504 15.0363 24.0004 15.0363H24.0007ZM24.0007 18.1818C27.2137 18.1818 29.8187 20.7865 29.8187 24C29.8187 27.213 27.2137 29.8181 24.0007 29.8181C20.7874 29.8181 18.1827 27.213 18.1827 24C18.1827 20.7865 20.7874 18.1818 24.0007 18.1818Z" fill="url(#paint0_radial_106_522)"/>
                        <path d="M24.0007 6.54541C19.2605 6.54541 18.6656 6.56614 16.8039 6.65087C14.9457 6.73596 13.6774 7.03014 12.5676 7.46177C11.4197 7.90759 10.4459 8.50396 9.47571 9.4745C8.50483 10.4447 7.90849 11.4185 7.46123 12.5661C7.02852 13.6763 6.73398 14.945 6.65035 16.8025C6.56707 18.6643 6.54526 19.2596 6.54526 24C6.54526 28.7403 6.56635 29.3334 6.65071 31.1952C6.73616 33.0534 7.03033 34.3218 7.46159 35.4316C7.90776 36.5796 8.50411 37.5534 9.47462 38.5236C10.4444 39.4945 11.4182 40.0923 12.5654 40.5381C13.676 40.9698 14.9446 41.264 16.8024 41.349C18.6642 41.4338 19.2587 41.4545 23.9985 41.4545C28.7391 41.4545 29.3322 41.4338 31.194 41.349C33.0521 41.264 34.3219 40.9698 35.4324 40.5381C36.58 40.0923 37.5523 39.4945 38.5221 38.5236C39.493 37.5534 40.0893 36.5796 40.5366 35.432C40.9657 34.3218 41.2602 33.053 41.3475 31.1956C41.4311 29.3338 41.4529 28.7403 41.4529 24C41.4529 19.2596 41.4311 18.6647 41.3475 16.8029C41.2602 14.9447 40.9657 13.6763 40.5366 12.5665C40.0893 11.4185 39.493 10.4447 38.5221 9.4745C37.5512 8.50359 36.5803 7.90723 35.4313 7.46177C34.3186 7.03014 33.0495 6.73596 31.1914 6.65087C29.3297 6.56614 28.7369 6.54541 23.9953 6.54541H24.0007ZM22.435 9.69086C22.8997 9.69014 23.4182 9.69086 24.0007 9.69086C28.6609 9.69086 29.2133 9.70759 31.0536 9.79123C32.7554 9.86905 33.679 10.1534 34.2942 10.3923C35.1088 10.7087 35.6895 11.0869 36.3 11.6978C36.9109 12.3087 37.2891 12.8905 37.6061 13.705C37.845 14.3196 38.1298 15.2432 38.2072 16.945C38.2908 18.785 38.309 19.3378 38.309 23.996C38.309 28.6541 38.2908 29.2069 38.2072 31.0469C38.1294 32.7487 37.845 33.6723 37.6061 34.2869C37.2898 35.1014 36.9109 35.6814 36.3 36.292C35.6891 36.9029 35.1091 37.281 34.2942 37.5974C33.6797 37.8374 32.7554 38.121 31.0536 38.1989C29.2137 38.2825 28.6609 38.3007 24.0007 38.3007C19.3401 38.3007 18.7878 38.2825 16.9479 38.1989C15.2461 38.1203 14.3225 37.836 13.7069 37.597C12.8923 37.2807 12.3105 36.9025 11.6996 36.2916C11.0888 35.6807 10.7106 35.1003 10.3935 34.2854C10.1546 33.6709 9.86988 32.7472 9.79243 31.0454C9.7088 29.2054 9.69207 28.6527 9.69207 23.9916C9.69207 19.3305 9.7088 18.7807 9.79243 16.9407C9.87025 15.2389 10.1546 14.3152 10.3935 13.7C10.7099 12.8854 11.0888 12.3036 11.6996 11.6927C12.3105 11.0818 12.8923 10.7036 13.7069 10.3865C14.3221 10.1465 15.2461 9.86286 16.9479 9.78468C18.558 9.71196 19.182 9.69014 22.435 9.6865V9.69086ZM33.3175 12.589C32.1612 12.589 31.2231 13.5261 31.2231 14.6829C31.2231 15.8392 32.1612 16.7774 33.3175 16.7774C34.4739 16.7774 35.412 15.8392 35.412 14.6829C35.412 13.5265 34.4739 12.5883 33.3175 12.5883V12.589ZM24.0007 15.0363C19.0507 15.0363 15.0374 19.0498 15.0374 24C15.0374 28.9501 19.0507 32.9618 24.0007 32.9618C28.9508 32.9618 32.9626 28.9501 32.9626 24C32.9626 19.0498 28.9504 15.0363 24.0004 15.0363H24.0007ZM24.0007 18.1818C27.2137 18.1818 29.8187 20.7865 29.8187 24C29.8187 27.213 27.2137 29.8181 24.0007 29.8181C20.7874 29.8181 18.1827 27.213 18.1827 24C18.1827 20.7865 20.7874 18.1818 24.0007 18.1818Z" fill="url(#paint1_radial_106_522)"/>
                        <defs>
                        <radialGradient id="paint0_radial_106_522" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(15.8177 44.1432) rotate(-90) scale(34.5975 32.1771)">
                        <stop stop-color="#FFDD55"/>
                        <stop offset="0.1" stop-color="#FFDD55"/>
                        <stop offset="0.5" stop-color="#FF543E"/>
                        <stop offset="1" stop-color="#C837AB"/>
                        </radialGradient>
                        <radialGradient id="paint1_radial_106_522" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.698038 9.0602) rotate(78.6811) scale(15.4652 63.7458)">
                        <stop stop-color="#3771C8"/>
                        <stop offset="0.128" stop-color="#3771C8"/>
                        <stop offset="1" stop-color="#6600FF" stop-opacity="0"/>
                        </radialGradient>
                        </defs>
                    </svg>
                </div>
                <div>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 9.41333C7 8.08048 8.08048 7 9.41333 7H38.5867C39.9195 7 41 8.08048 41 9.41333V38.5866C41 39.9194 39.9195 40.9999 38.5867 40.9999H9.41333C8.08049 40.9999 7 39.9194 7 38.5866V9.41333Z" fill="#0A66C2"/>
                <path d="M14.6314 17.5587C16.2604 17.5587 17.5809 16.2381 17.5809 14.6092C17.5809 12.9802 16.2604 11.6597 14.6314 11.6597C13.0025 11.6597 11.682 12.9802 11.682 14.6092C11.682 16.2381 13.0025 17.5587 14.6314 17.5587Z" fill="white"/>
                <path d="M20.2822 19.7384H25.1704V21.9778C25.1704 21.9778 26.4969 19.3248 30.1061 19.3248C33.3257 19.3248 35.9928 20.9108 35.9928 25.7452V35.9395H30.9271V26.9804C30.9271 24.1286 29.4046 23.815 28.2444 23.815C25.8367 23.815 25.4245 25.8918 25.4245 27.3524V35.9395H20.2822V19.7384Z" fill="white"/>
                <path d="M12.0603 19.7384H17.2026V35.9395H12.0603V19.7384Z" fill="white"/>
                </svg>

                </div>
                <div>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M39.5434 16.1778C39.557 16.5275 39.5615 16.8772 39.5615 17.2269C39.5615 27.8313 32.1018 40.0735 18.4606 40.0735C14.2703 40.0735 10.3739 38.738 7.09097 36.4645C7.67129 36.528 8.26065 36.5758 8.85906 36.5758C12.3334 36.5758 15.5334 35.2878 18.0717 33.1256C14.8265 33.0779 12.0862 30.7408 11.1411 27.561C11.5948 27.6564 12.0621 27.7043 12.5399 27.7043C13.2137 27.7043 13.8678 27.609 14.4949 27.4182C11.0989 26.6869 8.54102 23.4436 8.54102 19.5485C8.54102 19.5008 8.54102 19.4848 8.54102 19.453C9.54187 20.0412 10.6874 20.4067 11.9038 20.4544C9.91114 19.0076 8.60127 16.5434 8.60127 13.7611C8.60127 12.2984 8.96604 10.9152 9.60816 9.72281C13.2649 14.5878 18.732 17.7835 24.8954 18.1173C24.7687 17.5291 24.7039 16.9092 24.7039 16.2892C24.7039 11.8534 28.0245 8.26025 32.1214 8.26025C34.2542 8.26025 36.1806 9.23021 37.5326 10.7883C39.2253 10.4385 40.811 9.77081 42.246 8.84869C41.6898 10.7247 40.5156 12.2984 38.9811 13.2841C40.4824 13.0933 41.9144 12.6644 43.2424 12.0284C42.246 13.6342 40.9919 15.0489 39.5434 16.1778Z" fill="#1EA1F2"/>
                </svg>
                </div>
                
            </div>
            </div>
        </div>
    )
}
export default Footer