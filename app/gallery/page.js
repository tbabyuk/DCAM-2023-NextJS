"use client"

import { PageTitle } from "../components/PageTitle";
import { InstagramEmbed } from "react-social-media-embed";
import Link from "next/link";



const Gallery = () => {
    return (
        <>
            <main className="gallery-page px-5 md:px-20 lg:px-40 xl:px-60">
                <PageTitle title="Gallery" />
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 justify-center">
                    <InstagramEmbed url="https://www.instagram.com/p/CtSDU7BgikU/" width={328} />
                    <InstagramEmbed url="https://www.instagram.com/p/CreeJrJAuKn/" width={328} />
                    <InstagramEmbed url="https://www.instagram.com/p/CoLXOidOpEH/" width={328} />
                    <InstagramEmbed url="https://www.instagram.com/p/Cn5UP5wrTpc/" width={328} />
                    <InstagramEmbed url="https://www.instagram.com/p/Cmcx4dqumIX/" width={328} />
                    <InstagramEmbed url="https://www.instagram.com/p/CmP6Ux6Odbs/" width={328} />
                </div>
                <div className="text-center mt-10"><Link href="https://www.instagram.com/dacapomusic.ca/" target="_blank" className="hover:text-lightRed">See more photos on our Instagram...</Link></div>
            </main>
        </>
     );
}

export default Gallery;
