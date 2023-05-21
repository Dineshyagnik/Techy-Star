import React from 'react'
import vg from "../assets/2.webp"
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
} from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className='home'>
                <main>
                    <h1>TechyStar</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the problem solving ability in children.
                    </p>
                </div>
            </div>

            <div className="home3" id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque placeat laudantium aspernatur doloribus corporis, illum fugiat atque saepe aut minus quam tenetur temporibus dolore molestiae aperiam ullam quo quidem earum assumenda dolorem exercitationem consequuntur harum impedit natus. Obcaecati numquam sunt possimus ex neque illo laboriosam nemo! Quaerat magni alias nihil voluptatum cum fugiat labore odio earum. Dolores culpa iste nobis temporibus amet debitis sit. Laborum nam impedit nemo reprehenderit fugiat. Perspiciatis magnam, quibusdam odit harum culpa ex veritatis dicta minus libero eaque inventore ullam molestiae vitae, minima id iusto qui et enim praesentium veniam, similique fugiat ipsum soluta aliquam. Esse?</p>
                </div>
            </div>

            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay: "0.3s",
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{
                            animationDelay: "0.5s",
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{
                            animationDelay: "0.7s",
                        }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={{
                            animationDelay: "1s",
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home;